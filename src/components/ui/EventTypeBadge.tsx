import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export type EventBadgeVariant = "workshop" | "webinar" | "hackathon" | "competition" | "session" | "default";

interface EventTypeBadgeProps {
  type?: string;
  children?: ReactNode;
  variant?: EventBadgeVariant;
  className?: string;
}

/**
 * Small mono event category badge with gold outline and dark surface.
 */
export function EventTypeBadge({
  type,
  children,
  className,
}: EventTypeBadgeProps) {
  const label = children ?? type ?? "EVENT";

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-sm border border-accent/40 bg-base/80 px-2 py-0.5 font-mono text-[10px] font-medium uppercase tracking-wider text-accent shadow-xs",
        className,
      )}
    >
      {label}
    </span>
  );
}
