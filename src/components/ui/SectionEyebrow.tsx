import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionEyebrowProps {
  children: ReactNode;
  prefix?: string;
  hairline?: boolean;
  className?: string;
  as?: "p" | "span" | "div" | "h2" | "h3";
}

/**
 * Reusable mono uppercase section label matching the SPARK technical design language.
 */
export function SectionEyebrow({
  children,
  prefix = "///",
  hairline = false,
  className,
  as: Component = "p",
}: SectionEyebrowProps) {
  return (
    <Component
      className={cn(
        "inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-accent",
        className,
      )}
    >
      {prefix ? (
        <span className="text-accent/60 select-none" aria-hidden="true">
          {prefix}
        </span>
      ) : null}
      <span>{children}</span>
      {hairline ? (
        <span className="h-px w-12 bg-accent/30 sm:w-16" aria-hidden="true" />
      ) : null}
    </Component>
  );
}
