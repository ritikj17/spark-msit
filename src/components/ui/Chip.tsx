import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type ChipVariant = "default" | "accent" | "pending";

interface ChipProps {
  children: ReactNode;
  variant?: ChipVariant;
  className?: string;
}

/**
 * Small mono tag — event topics, role badges, pending-state labels.
 */
export function Chip({ children, variant = "default", className }: ChipProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-sm border px-2 py-0.5 font-mono text-[11px] tracking-wide",
        variant === "default" && "border-line text-ink-secondary",
        variant === "accent" && "border-accent-dim/40 text-accent",
        variant === "pending" && "border-dashed border-line-strong text-ink-muted",
        className,
      )}
    >
      {children}
    </span>
  );
}