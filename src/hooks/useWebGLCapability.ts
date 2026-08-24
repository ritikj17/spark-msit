"use client";

import { useSyncExternalStore } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

type Tier = "high" | "low" | "none";

interface Capability {
  webgl: boolean;
  tier: Tier;
}

/**
 * One-time WebGL capability detection, cached at module level so every
 * consumer shares a single stable snapshot (pure for useSyncExternalStore).
 */
let cached: Capability | null = null;
let retryCount = 0;
const MAX_RETRIES = 5;

function detect(): Capability {
  if (cached) return cached;

  if (typeof document === "undefined") {
    // Server snapshot fallback — pessimistic so SSR renders the static
    // path; real detection happens client-side after mount.
    return SERVER_SNAPSHOT;
  }

  const canvas = document.createElement("canvas");
  // Prefer WebGL2; accept WebGL1 rather than dropping capable machines.
  const gl =
    canvas.getContext("webgl2", { failIfMajorPerformanceCaveat: true }) ??
    canvas.getContext("webgl", { failIfMajorPerformanceCaveat: true });
  const webgl = !!gl;

  let tier: Tier = "none";
  if (webgl) {
    const ua = navigator.userAgent;
    const isMobile = /Mobi|Android|iPhone|iPad/i.test(ua);
    const dpr = window.devicePixelRatio || 1;
    const cores = navigator.hardwareConcurrency || 2;
    const memory =
      (navigator as Navigator & { deviceMemory?: number }).deviceMemory ?? 4;

    // devicePixelRatio reflects OS display scaling (125% scaling → 1.25),
    // NOT GPU capability — it must never downgrade a desktop machine.
    // Mobile keeps the conservative DPR/cores check; desktop judges on
    // cores/memory alone.
    if (isMobile) {
      tier = dpr < 1.5 || cores < 4 ? "low" : "high";
    } else {
      tier = cores < 4 || memory < 4 ? "low" : "high";
    }

    cached = { webgl, tier };

    if (process.env.NODE_ENV !== "production") {
      console.log(
        "[SPARK] capability:",
        JSON.stringify({
          webgl,
          tier,
          dpr: window.devicePixelRatio,
          cores: navigator.hardwareConcurrency,
          reducedMotion: window.matchMedia("(prefers-reduced-motion: reduce)")
            .matches,
        }),
      );
    }

    return cached;
  }

  // Cold-start race mitigation: GPU context might fail on immediate load 
  // (e.g. Turbopack blocking the main thread for 20s, or GPU not ready).
  // Do NOT permanently poison the cache with a false negative.
  if (retryCount < MAX_RETRIES) {
    retryCount++;
    setTimeout(() => {
      listeners.forEach((cb) => cb());
    }, 1500);
  } else {
    // Only permanently cache the failure after all retries are exhausted.
    // This avoids retrying forever on genuine non-WebGL environments.
    cached = { webgl: false, tier: "none" };
    return cached;
  }

  // Return stable module-level reference to prevent React infinite loops during retries.
  return SERVER_SNAPSHOT;
}

const listeners = new Set<() => void>();

function subscribe(onChange: () => void) {
  listeners.add(onChange);
  return () => {
    listeners.delete(onChange);
  };
}

/**
 * Pessimistic SSR snapshot — must be a stable module-level reference:
 * useSyncExternalStore re-invokes getServerSnapshot and requires an
 * identical value across calls to avoid an infinite-loop warning.
 */
const SERVER_SNAPSHOT: Capability = { webgl: false, tier: "none" };

function getServerSnapshot(): Capability {
  return SERVER_SNAPSHOT;
}

/**
 * Detects WebGL support and device capability tier.
 * Returns:
 *   - `webgl`: whether WebGL (2 preferred, 1 accepted) is available
 *   - `tier`: "high" | "low" | "none"
 *   - `prefersReducedMotion`: user's motion preference
 *
 * NOTE: prefersReducedMotion does NOT disable WebGL — reduced-motion users
 * still receive the real scene with animation disabled inside SparkScene.
 */
export function useWebGLCapability(): {
  webgl: boolean;
  tier: Tier;
  prefersReducedMotion: boolean;
} {
  const capability = useSyncExternalStore(subscribe, detect, getServerSnapshot);
  const prefersReducedMotion = useReducedMotion();

  return { ...capability, prefersReducedMotion };
}
