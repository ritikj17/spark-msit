import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface CheckItemProps {
  children?: ReactNode;
  title?: ReactNode;
  description?: ReactNode;
  className?: string;
}

/**
 * Reusable checkmark list row featuring a technical gold checkmark icon.
 */
export function CheckItem({
  children,
  title,
  description,
  className,
}: CheckItemProps) {
  return (
    <div className={cn("flex items-start gap-3 text-sm text-ink", className)}>
      <div
        className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full border border-accent/40 bg-accent/10 text-accent"
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 16 16"
          fill="none"
          className="size-3 stroke-current stroke-[2.2]"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M3.5 8.5 6.5 11.5 12.5 4.5" />
        </svg>
      </div>
      <div className="flex-1">
        {title ? <p className="font-medium text-ink">{title}</p> : null}
        {description ? (
          <p className="text-sm leading-relaxed text-ink-secondary">{description}</p>
        ) : null}
        {children ? <div className="text-ink-secondary">{children}</div> : null}
      </div>
    </div>
  );
}
