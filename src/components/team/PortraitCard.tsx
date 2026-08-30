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

function getInitials(name: string | null): string {
  if (!name) return "";
  return name
    .split(" ")
    .filter((w) => !/^(dr|mr|ms|mrs|prof)\.?$/i.test(w))
    .map((w) => w[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

/**
 * Reusable member portrait card for team rosters.
 * Supports active photo/monogram states and intentional pending selection positions.
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
  const initials = getInitials(name);

  return (
    <div
      className={cn(
        "group flex flex-col transition-colors",
        isPending && "opacity-80 grayscale",
        className,
      )}
    >
      {/* Portrait frame */}
      <div className="relative w-full overflow-hidden rounded-sm bg-base border border-line/60">
        {isPending ? (
          <div
            className="flex w-full items-center justify-center bg-base text-center p-6"
            style={{ aspectRatio }}
          >
            <div className="flex flex-col items-center gap-2.5">
              <div className="flex size-14 items-center justify-center rounded-full border border-dashed border-line-strong bg-surface text-ink-muted">
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
              <p className="font-mono text-[11px] uppercase tracking-wider text-accent">
                Position Open
              </p>
            </div>
          </div>
        ) : photo && !photo.startsWith("[SPARK-") ? (
          <SparkImage
            src={photo}
            alt={name ?? role}
            aspectRatio={aspectRatio}
            className="transition-transform duration-500 group-hover:scale-[1.02]"
          />
        ) : (
          <div
            className="flex w-full items-center justify-center bg-gradient-to-b from-surface to-base-deep p-6"
            style={{ aspectRatio }}
          >
            <div className="flex flex-col items-center gap-2">
              <div className="flex size-16 items-center justify-center rounded-full border border-accent/40 bg-accent/10 font-display text-xl font-bold text-accent shadow-glow transition-transform duration-300 group-hover:scale-105">
                {initials || "S"}
              </div>
              <span className="font-mono text-[10px] uppercase tracking-widest text-ink-muted">
                SPARK ROSTER
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Info block */}
      <div className="mt-4 flex flex-1 flex-col justify-between gap-2">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <h4 className="font-display text-base sm:text-lg font-semibold tracking-tight text-ink group-hover:text-accent transition-colors duration-200">
              {isPending ? "Pending Selection" : name}
            </h4>
            {isPending ? (
              <Chip variant="pending">OPEN</Chip>
            ) : department ? (
              <Chip variant="accent">{department}</Chip>
            ) : null}
          </div>
          <p className="font-mono text-xs uppercase tracking-wider text-accent mt-0.5">
            {role}
          </p>
          {description ? (
            <p className="mt-2.5 text-xs leading-relaxed text-ink-secondary">
              {description}
            </p>
          ) : null}
        </div>
      </div>
    </div>
  );
}
