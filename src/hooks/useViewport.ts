"use client";

import { useSyncExternalStore } from "react";

export interface Viewport {
  width: number;
  height: number;
}

let cached: Viewport = { width: 0, height: 0 };

/**
 * SSR-safe viewport size via useSyncExternalStore. Returns
 * `{ width: 0, height: 0 }` during SSR; consumers must guard against 0.
 */
export function useViewport(): Viewport {
  return useSyncExternalStore(
    (onChange) => {
      const update = () => {
        const next = { width: window.innerWidth, height: window.innerHeight };
        if (next.width !== cached.width || next.height !== cached.height) {
          cached = next;
        }
        onChange();
      };
      window.addEventListener("resize", update);
      return () => window.removeEventListener("resize", update);
    },
    () => cached,
    () => cached,
  );
}