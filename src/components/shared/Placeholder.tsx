import { cn } from "@/lib/utils";

interface PlaceholderProps {
  label?: string;
  alt?: string;
  initials?: string;
  aspectRatio?: string;
  className?: string;
}

/**
 * Editorial placeholder visual for missing assets.
 * Renders an intentional image frame outline with "INSERT IMAGE HERE" matching the official design spec.
 */
export function Placeholder({
  alt,
  initials,
  aspectRatio,
  className,
}: PlaceholderProps) {
  // Extract initials if available, e.g. from alt="Dr. Deepshika Yadav" -> "DY"
  const derivedInitials =
    initials ??
    (alt
      ? alt
          .split(" ")
          .filter((w) => !/^(dr|mr|ms|mrs|prof)\.?$/i.test(w))
          .map((w) => w[0])
          .filter(Boolean)
          .slice(0, 2)
          .join("")
          .toUpperCase()
      : null);

  return (
    <div
      role="img"
      aria-label={alt ?? "SPARK image placeholder"}
      className={cn(
        "relative flex w-full items-center justify-center overflow-hidden rounded-sm border border-line bg-gradient-to-b from-surface to-base-deep p-6 text-center shadow-inner",
        className,
      )}
      style={aspectRatio ? { aspectRatio } : undefined}
    >
      {/* Subtle background glow */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(240,177,63,0.08)_0%,_transparent_70%)]"
        aria-hidden="true"
      />

      <div className="relative z-10 flex flex-col items-center justify-center gap-2.5">
        {derivedInitials && derivedInitials.length > 0 && !alt?.toLowerCase().includes("workshop") && !alt?.toLowerCase().includes("webinar") ? (
          <div className="flex size-14 items-center justify-center rounded-full border border-accent/40 bg-accent/10 font-display text-xl font-bold text-accent shadow-glow">
            {derivedInitials}
          </div>
        ) : (
          <div className="flex size-12 items-center justify-center rounded-sm border border-line bg-base text-accent">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              className="size-6"
              aria-hidden="true"
            >
              <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
              <circle cx="9" cy="9" r="2" />
              <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
            </svg>
          </div>
        )}

        <div className="flex flex-col items-center gap-1">
          <span className="font-mono text-[10px] uppercase tracking-widest text-accent font-semibold">
            INSERT IMAGE HERE
          </span>
          {alt ? (
            <span className="max-w-[14rem] truncate font-mono text-[9px] uppercase tracking-wider text-ink-muted">
              {alt}
            </span>
          ) : null}
        </div>
      </div>
    </div>
  );
}
