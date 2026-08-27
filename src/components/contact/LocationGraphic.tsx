import { cn } from "@/lib/utils";

interface LocationGraphicProps {
  institution: string;
  address: string;
  className?: string;
}

/**
 * Lightweight technical location map illustration for Contact page.
 * Features dark stylized street grid, glowing gold pinpoint marker, and institutional callout.
 * Pure SVG/CSS — zero external dependencies.
 */
export function LocationGraphic({
  institution,
  address,
  className,
}: LocationGraphicProps) {
  return (
    <div className={cn("relative overflow-hidden rounded-panel border border-line bg-surface p-4 sm:p-5 shadow-card", className)}>
      <div className="relative h-[220px] sm:h-[260px] w-full overflow-hidden rounded-sm bg-base border border-line flex items-center justify-center">
        {/* Ambient background map grid SVG */}
        <svg
          viewBox="0 0 600 340"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-0 size-full opacity-65"
          aria-hidden="true"
        >
          <defs>
            <radialGradient id="mapCenterGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#f0b13f" stopOpacity="0.25" />
              <stop offset="60%" stopColor="#f0b13f" stopOpacity="0.05" />
              <stop offset="100%" stopColor="#000000" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Central radial glow */}
          <rect width="600" height="340" fill="url(#mapCenterGlow)" />

          {/* Stylized dark street grid lines */}
          <g stroke="#262c36" strokeWidth="1.5">
            <line x1="0" y1="60" x2="600" y2="60" />
            <line x1="0" y1="140" x2="600" y2="140" />
            <line x1="0" y1="220" x2="600" y2="220" />
            <line x1="0" y1="290" x2="600" y2="290" />

            <line x1="80" y1="0" x2="80" y2="340" />
            <line x1="200" y1="0" x2="200" y2="340" />
            <line x1="320" y1="0" x2="320" y2="340" />
            <line x1="440" y1="0" x2="440" y2="340" />
            <line x1="530" y1="0" x2="530" y2="340" />
          </g>

          {/* Major diagonal transit corridors */}
          <g stroke="#3a4352" strokeWidth="2.5">
            <line x1="0" y1="280" x2="520" y2="20" />
            <line x1="120" y1="340" x2="600" y2="100" />
            <line x1="0" y1="80" x2="350" y2="340" />
          </g>

          {/* Gold active road trace */}
          <line
            x1="0"
            y1="170"
            x2="600"
            y2="170"
            stroke="#f0b13f"
            strokeWidth="1.5"
            strokeOpacity="0.4"
            strokeDasharray="6 4"
          />
        </svg>

        {/* Pinpoint Location Marker & Callout Box */}
        <div className="relative z-10 flex flex-col sm:flex-row items-center gap-3 sm:gap-4 p-3 bg-base-deep/90 border border-accent/60 rounded-panel shadow-glow backdrop-blur-md max-w-sm sm:max-w-md">
          {/* Gold Pin Badge */}
          <div className="flex size-11 sm:size-12 shrink-0 items-center justify-center rounded-full border border-accent bg-accent/20 text-accent shadow-glow">
            <span className="text-accent font-bold text-lg drop-shadow-[0_0_8px_rgba(240,177,63,0.8)]">⚡</span>
          </div>

          <div className="flex flex-col text-center sm:text-left">
            <h4 className="font-display text-xs sm:text-sm font-semibold text-ink leading-tight">
              {institution}
            </h4>
            <p className="font-mono text-[10px] sm:text-xs text-accent mt-0.5 leading-tight">
              {address}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
