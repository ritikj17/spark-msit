import type { LabelHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

/**
 * Field label in the SPARK mono/HUD style.
 */
export function Label({ className, ...props }: LabelHTMLAttributes<HTMLLabelElement>) {
  return (
    <label
      className={cn("block font-mono text-xs uppercase tracking-[0.2em] text-ink-secondary", className)}
      {...props}
    />
  );
}