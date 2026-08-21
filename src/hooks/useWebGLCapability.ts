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

function detect(): Capability {
  if (cached) return cached;

  if (typeof document === "undefined") {
    // Server snapshot fallback — pessimistic so SSR renders the static
    // path; real detection happens client-side after mount.
    cached = { webgl: false, tier: "none" };
    return cached;
  }

  const canvas = document.createElement("canvas");
  const gl = canvas.getContext("webgl2", { failIfMajorPerformanceCaveat: true });
  const webgl = !!gl;

  let tier: Tier = "none";
  if (webgl) {
    const ua = navigator.userAgent;
    const isMobile = /Mobi|Android|iPhone|iPad/i.test(ua);
    const dpr = window.devicePixelRatio || 1;
    const cores = navigator.hardwareConcurrency || 2;
    const memory =
      (navigator as Navigator & { deviceMemory?: number }).deviceMemory ?? 4;

    // Low-tier: mobile, low DPR, few cores, low memory
    tier = isMobile || dpr < 1.5 || cores < 4 || memory < 4 ? "low" : "high";
  }

  cached = { webgl, tier };
  return cached;
}

const listeners = new Set<() => void>();

function subscribe(onChange: () => void) {
  listeners.add(onChange);
  return () => {
    listeners.delete(onChange);
  };
}

function getServerSnapshot(): Capability {
  return { webgl: false, tier: "none" };
}

/**
 * Detects WebGL support and device capability tier.
 * Returns:
 *   - `webgl`: whether WebGL 2 is available
 *   - `tier`: "high" | "low" | "none" (based on GPU + memory heuristics)
 *   - `prefersReducedMotion`: user's motion preference
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
