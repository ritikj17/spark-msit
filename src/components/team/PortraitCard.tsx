import { SparkImage } from "@/components/shared/SparkImage";
import { Chip } from "@/components/ui/Chip";
import { cn } from "@/lib/utils";

interface PortraitCardProps {
  name: string | null;
  role: string;
  description?: string;
  photo?: string | null;
  status?: "active" | "pending";
  department?: string;
  aspectRatio?: string;
  className?: string;
}

/**
 * Reusable member portrait card for team rosters.
 * Supports active photo/placeholder states and pending selection positions.
 */
export function PortraitCard({
  name,
  role,
  description,
  photo,
  status = "active",
  department,
  aspectRatio = "3 / 4",
  className,
}: PortraitCardProps) {
  const isPending = status === "pending" || !name;

  return (
    <div
      className={cn(
        "group flex flex-col overflow-hidden rounded-panel border border-line bg-surface p-4 shadow-card transition-colors duration-200 hover:border-line-strong",
        isPending && "border-dashed opacity-85",
        className,
      )}
    >
      {/* Portrait frame */}
      <div className="relative w-full overflow-hidden rounded-sm bg-base">
        {isPending || !photo ? (
          <div
            className="flex w-full items-center justify-center rounded-sm border border-line/60 bg-base text-center p-4"
            style={{ aspectRatio }}
          >
            <div className="flex flex-col items-center gap-2">
              <div className="flex size-12 items-center justify-center rounded-full border border-line bg-surface text-ink-muted">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  className="size-6"
                  aria-hidden="true"
                >
                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </div>
              <p className="font-mono text-[11px] uppercase tracking-wider text-ink-muted">
                Position Open
              </p>
            </div>
          </div>
        ) : (
          <SparkImage
            src={photo}
            alt={name ?? role}
            aspectRatio={aspectRatio}
            className="transition-transform duration-300 group-hover:scale-[1.02]"
          />
        )}
      </div>

      {/* Info block */}
      <div className="mt-3.5 flex flex-1 flex-col justify-between gap-2">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <h4 className="font-display text-base font-semibold tracking-tight text-ink">
              {isPending ? "Pending Selection" : name}
            </h4>
            {isPending ? (
              <Chip variant="pending">OPEN</Chip>
            ) : department ? (
              <Chip variant="accent">{department}</Chip>
            ) : null}
          </div>
          <p className="font-mono text-xs uppercase tracking-wider text-accent">
            {role}
          </p>
          {description ? (
            <p className="mt-2 text-xs leading-relaxed text-ink-secondary line-clamp-3">
              {description}
            </p>
          ) : null}
        </div>
      </div>
    </div>
  );
}
