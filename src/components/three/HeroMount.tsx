"use client";

import { Component, Suspense, lazy, type ReactNode } from "react";

/* ── Lazy-loaded 3D hero (code-split, SSR=false) ───────────────────────── */

const SparkHero3D = lazy(() =>
  import("./Hero3D").then((mod) => ({ default: mod.Hero3D })),
);

/* ── Loading fallback while the 3D chunk loads ─────────────────────────── */

function HeroLoading() {
  return (
    <div
      className="relative w-full aspect-video min-h-[500px] rounded-panel border border-line bg-base"
      aria-hidden="true"
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex flex-col items-center gap-3 text-center">
          <div className="size-12 rounded-full border-3 border-accent border-t-transparent animate-spin" />
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink-secondary">
            INITIALIZING SPARK UNIVERSE
          </p>
        </div>
      </div>
    </div>
  );
}

/* ── Error boundary around the canvas ──────────────────────────────────── */

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback: ReactNode;
}
interface ErrorBoundaryState {
  hasError: boolean;
}

class Hero3DErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  state: ErrorBoundaryState = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}

/* ── Public mount point ────────────────────────────────────────────────── */

/**
 * Client-side mount for the 3D hero. Owns the error boundary and Suspense
 * boundary so the server-rendered page never imports three.js code.
 */
export function HeroMount() {
  return (
    <Hero3DErrorBoundary fallback={<HeroLoading />}>
      <Suspense fallback={<HeroLoading />}>
        <SparkHero3D />
      </Suspense>
    </Hero3DErrorBoundary>
  );
}
