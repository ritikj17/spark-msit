"use client";

import { SparkScene } from "./SparkScene";
import { cn } from "@/lib/utils";

interface Hero3DProps {
  className?: string;
}

/**
 * Full-bleed 3D hero canvas wrapper. Fills its parent; positioning is owned
 * by the page so the same component works as an overlay or a stacked block.
 */
export function Hero3D({ className }: Hero3DProps) {
  const handleNodeSelect = () => {
    // Node selection is a visual enhancement only; node meaning is fully
    // duplicated in HTML by the What We Do section.
  };

  return (
    <div className={cn("relative h-full w-full", className)} aria-hidden="true">
      <SparkScene onNodeSelect={handleNodeSelect} />
    </div>
  );
}
