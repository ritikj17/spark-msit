import { useReducedMotion } from "@/hooks/useReducedMotion";
import { cn } from "@/lib/utils";

/**
 * Animated SVG fallback — lightweight, no WebGL, respects reduced-motion.
 * Renders the SPARK universe as animated SVG: core pulse + orbital rings.
 */
export function SvgFallback({ className }: { className?: string }) {
  const reduced = useReducedMotion();

  return (
    <svg
      className={cn("w-full h-full max-w-[900px] mx-auto", className)}
      viewBox="0 0 600 600"
      preserveAspectRatio="xMidYMid meet"
      aria-hidden="true"
      role="img"
    >
      <defs>
        <radialGradient id="coreGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#f0b13f" stopOpacity="0.9" />
          <stop offset="60%" stopColor="#f0b13f" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#0a0b0d" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#f0b13f" stopOpacity="0" />
          <stop offset="50%" stopColor="#f0b13f" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#f0b13f" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Subtle grid */}
      <g stroke="#ffffff" strokeOpacity="0.03" strokeWidth="0.5">
        {Array.from({ length: 20 }, (_, i) => (
          <line key={`h${i}`} x1="0" y1={i * 30} x2="600" y2={i * 30} />
        ))}
        {Array.from({ length: 20 }, (_, i) => (
          <line key={`v${i}`} x1={i * 30} y1="0" x2={i * 30} y2="600" />
        ))}
      </g>

      {/* Orbital rings */}
      <g filter="url(#glow)">
        <ellipse
          cx="300"
          cy="300"
          rx="180"
          ry="60"
          fill="none"
          stroke="url(#ringGrad)"
          strokeWidth="1.5"
          style={{ transformOrigin: "300px 300px" }}
        >
          {!reduced && (
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 300 300"
              to="360 300 300"
              dur="120s"
              repeatCount="indefinite"
            />
          )}
        </ellipse>
        <ellipse
          cx="300"
          cy="300"
          rx="240"
          ry="90"
          fill="none"
          stroke="url(#ringGrad)"
          strokeWidth="1"
          strokeDasharray="8 12"
          style={{ transformOrigin: "300px 300px" }}
        >
          {!reduced && (
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="360 300 300"
              to="0 300 300"
              dur="180s"
              repeatCount="indefinite"
            />
          )}
        </ellipse>
      </g>

      {/* Core pulse */}
      <circle
        cx="300"
        cy="300"
        r={reduced ? 28 : 24}
        fill="url(#coreGrad)"
        style={{ transformOrigin: "300px 300px" }}
      >
        {!reduced && (
          <animate
            attributeName="r"
            values="24;32;24"
            dur="4s"
            repeatCount="indefinite"
            calcMode="spline"
            keySplines="0.22 1 0.36 1;0.22 1 0.36 1"
          />
        )}
      </circle>

      {/* Node positions (5 nodes on orbits) */}
      <g>
        {[
          { angle: 0, orbit: 180, label: "Research" },
          { angle: 72, orbit: 180, label: "Innovation" },
          { angle: 144, orbit: 240, label: "Collaboration" },
          { angle: 216, orbit: 240, label: "Workshops" },
          { angle: 288, orbit: 180, label: "Opportunities" },
        ].map((node, i) => {
          const rad = (node.angle * Math.PI) / 180;
          const cx = 300 + node.orbit * Math.cos(rad);
          const cy = 300 + (node.orbit / 3) * Math.sin(rad);
          return (
            <g key={node.label} style={{ transformOrigin: `${cx}px ${cy}px` }}>
              <circle
                cx={cx}
                cy={cy}
                r={reduced ? 8 : 6}
                fill="#f0b13f"
                opacity="0.9"
                style={{ transformOrigin: `${cx}px ${cy}px` }}
              >
                {!reduced && (
                  <animate
                    attributeName="r"
                    values="6;10;6"
                    dur="3s"
                    repeatCount="indefinite"
                    begin={`${i * 0.6}s`}
                    calcMode="spline"
                    keySplines="0.22 1 0.36 1"
                  />
                )}
              </circle>
              <text
                x={cx}
                y={cy + 28}
                textAnchor="middle"
                fontFamily="JetBrains Mono, monospace"
                fontSize="10"
                fill="#9aa0a8"
                className="font-mono"
              >
                {node.label}
              </text>
            </g>
          );
        })}
      </g>

      <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="3" result="blur" />
        <feMerge>
          <feMergeNode in="blur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </svg>
  );
}