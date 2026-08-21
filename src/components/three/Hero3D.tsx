"use client";

import { SparkScene } from "./SparkScene";
import { cn } from "@/lib/utils";

interface Hero3DProps {
  className?: string;
}

/**
 * Full-bleed 3D hero canvas wrapper. Mounted inside the Home hero section.
 * Receives node selection callbacks for UI synchronization.
 */
export function Hero3D({ className }: Hero3DProps) {
  const handleNodeSelect = (node: { id: string; label: string }) => {
    // Could dispatch to a context/store for UI sync (e.g., highlight card)
    console.log("[Hero3D] Node selected:", node);
  };

  return (
    <div
      className={cn(
        "absolute inset-0 w-full h-full",
        className,
      )}
      aria-hidden="true"
    >
      <SparkScene onNodeSelect={handleNodeSelect} />
    </div>
  );
}