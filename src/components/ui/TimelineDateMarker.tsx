import { cn } from "@/lib/utils";

interface TimelineDateMarkerProps {
  year: string | number;
  month: string;
  day?: string | number;
  className?: string;
}

/**
 * Reusable event timeline date box with stacked year, gold month, and optional day.
 */
export function TimelineDateMarker({
  year,
  month,
  day,
  className,
}: TimelineDateMarkerProps) {
  return (
    <div
      className={cn(
        "flex min-w-[70px] flex-col items-center justify-center rounded-sm border border-line bg-surface px-2.5 py-2 text-center shadow-card",
        className,
      )}
    >
      <span className="font-mono text-[10px] uppercase tracking-wider text-ink-muted leading-tight">
        {year}
      </span>
      <span className="font-mono text-xs font-semibold uppercase tracking-wider text-accent leading-tight">
        {month}
      </span>
      {day ? (
        <span className="mt-0.5 font-display text-base font-bold text-ink leading-none">
          {day}
        </span>
      ) : null}
    </div>
  );
}
