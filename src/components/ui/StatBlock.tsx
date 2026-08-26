import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface StatBlockProps {
  value: string | number;
  label: string;
  icon?: ReactNode;
  description?: string;
  className?: string;
}

/**
 * Technical numeric statistic block with gold emphasis.
 */
export function StatBlock({
  value,
  label,
  icon,
  description,
  className,
}: StatBlockProps) {
  return (
    <div
      className={cn(
        "flex flex-col justify-between rounded-panel border border-line bg-surface/60 p-5 shadow-card backdrop-blur-xs transition-colors duration-200 hover:border-line-strong",
        className,
      )}
    >
      <div className="flex items-center justify-between gap-2">
        <span className="font-display text-3xl font-bold tracking-tight text-accent sm:text-4xl">
          {value}
        </span>
        {icon ? (
          <div className="flex size-8 items-center justify-center rounded-sm border border-line bg-base text-accent">
            {icon}
          </div>
        ) : null}
      </div>
      <div className="mt-2">
        <p className="font-mono text-xs uppercase tracking-[0.15em] text-ink-muted">
          {label}
        </p>
        {description ? (
          <p className="mt-1 text-xs text-ink-secondary">{description}</p>
        ) : null}
      </div>
    </div>
  );
}
