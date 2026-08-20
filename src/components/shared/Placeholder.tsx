import { cn } from "@/lib/utils";

interface PlaceholderProps {
  label: string;
  alt?: string;
  aspectRatio?: string;
  className?: string;
}

/**
 * Branded empty-state visual for missing assets. Rendered whenever an asset
 * token has no real file yet, or an image fails. Never shows broken images
 * and never fabricates content.
 */
export function Placeholder({ label, alt, aspectRatio, className }: PlaceholderProps) {
  return (
    <div
      role="img"
      aria-label={alt ?? label}
      className={cn(
        "relative flex w-full items-center justify-center overflow-hidden rounded-panel border border-dashed border-line-strong bg-surface",
        className,
      )}
      style={aspectRatio ? { aspectRatio } : undefined}
    >
      <div className="flex flex-col items-center gap-3 px-4 text-center">
        <svg viewBox="0 0 32 32" className="size-6 text-accent/50" fill="none" aria-hidden>
          <path
            d="M17.5 5 8 18h6l-1.5 9L22 14h-6l1.5-9Z"
            fill="currentColor"
          />
        </svg>
        <span className="max-w-[16rem] truncate font-mono text-[11px] tracking-wide text-ink-muted">
          {label}
        </span>
      </div>
    </div>
  );
}