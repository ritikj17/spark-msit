"use client";

import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";

/**
 * Monitors Three.js render performance via the R3F frame loop.
 * Returns a rolling average FPS and a throttle flag for quality scaling.
 */
export function useThreePerformance(targetFps = 55) {
  const [fps, setFps] = useState(60);
  const [shouldThrottle, setShouldThrottle] = useState(false);
  const frameCount = useRef(0);
  const lastTime = useRef(0);
  const fpsHistory = useRef<number[]>([]);

  // Called every frame by R3F
  useFrame(() => {
    const now = performance.now();
    if (lastTime.current === 0) {
      lastTime.current = now;
      return;
    }
    frameCount.current++;
    const elapsed = now - lastTime.current;

    if (elapsed >= 1000) {
      const currentFps = Math.round((frameCount.current * 1000) / elapsed);
      fpsHistory.current.push(currentFps);
      if (fpsHistory.current.length > 10) fpsHistory.current.shift();

      const avgFps = Math.round(
        fpsHistory.current.reduce((a, b) => a + b, 0) / fpsHistory.current.length,
      );

      setFps(avgFps);
      setShouldThrottle(avgFps < targetFps);

      frameCount.current = 0;
      lastTime.current = now;
    }
  });

  return { fps, shouldThrottle };
}
