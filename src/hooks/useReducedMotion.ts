"use client";

import { useSyncExternalStore } from "react";

/**
 * SSR-safe detection of the user's reduced-motion preference.
 * Used to gate 3D and motion-based UI.
 */
export function useReducedMotion(): boolean {
  return useSyncExternalStore(
    (onChange) => {
      const media = window.matchMedia("(prefers-reduced-motion: reduce)");
      media.addEventListener("change", onChange);
      return () => media.removeEventListener("change", onChange);
    },
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    () => false,
  );
}