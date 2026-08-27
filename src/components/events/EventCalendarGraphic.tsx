import { cn } from "@/lib/utils";

interface EventCalendarGraphicProps {
  className?: string;
}

/**
 * Technical wireframe calendar illustration for the Events page hero.
 * Features glowing gold wireframe desk calendar, SPARK bolt, orbital rings, and technical dust.
 * Pure SVG/CSS — lightweight and zero dependencies.
 */
export function EventCalendarGraphic({ className }: EventCalendarGraphicProps) {
  return (
    <div className={cn("relative flex items-center justify-center", className)} aria-hidden="true">
      {/* Background ambient radial glow */}
      <div className="absolute inset-0 -m-8 rounded-full bg-[radial-gradient(circle_at_center,_rgba(240,177,63,0.15)_0%,_rgba(240,177,63,0.03)_50%,_transparent_75%)] blur-2xl" />

      {/* Orbital / technical trajectory rings */}
      <svg
        viewBox="0 0 400 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full max-w-[420px] drop-shadow-[0_0_24px_rgba(240,177,63,0.2)]"
      >
        <defs>
          <linearGradient id="calGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f0b13f" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#ffc25e" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#9c6f1e" stopOpacity="0.2" />
          </linearGradient>
          <linearGradient id="gridGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#f0b13f" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#f0b13f" stopOpacity="0.05" />
          </linearGradient>
          <radialGradient id="centerGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#f0b13f" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#f0b13f" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Ambient background ellipse glow */}
        <ellipse cx="200" cy="160" rx="140" ry="100" fill="url(#centerGlow)" />

        {/* Outer orbital wireframe rings */}
        <ellipse
          cx="200"
          cy="165"
          rx="175"
          ry="75"
          stroke="#f0b13f"
          strokeWidth="0.75"
          strokeDasharray="4 6"
          strokeOpacity="0.35"
          transform="rotate(-8 200 165)"
        />
        <ellipse
          cx="200"
          cy="160"
          rx="155"
          ry="60"
          stroke="#f0b13f"
          strokeWidth="1"
          strokeOpacity="0.4"
          transform="rotate(6 200 160)"
        />

        {/* Floor base platform rings */}
        <ellipse cx="200" cy="245" rx="110" ry="25" stroke="#f0b13f" strokeWidth="0.8" strokeOpacity="0.2" />
        <ellipse cx="200" cy="250" rx="130" ry="30" stroke="#f0b13f" strokeWidth="0.5" strokeDasharray="3 4" strokeOpacity="0.15" />

        {/* 3D Wireframe Desk Calendar */}
        {/* Rear Stand / Base */}
        <path
          d="M130 195 L200 240 L270 195 L200 150 Z"
          fill="#101216"
          fillOpacity="0.7"
          stroke="#f0b13f"
          strokeWidth="0.8"
          strokeOpacity="0.3"
        />

        {/* Back page */}
        <path
          d="M145 95 L255 95 L275 210 L125 210 Z"
          fill="#0a0b0d"
          fillOpacity="0.9"
          stroke="#f0b13f"
          strokeWidth="1"
          strokeOpacity="0.4"
        />

        {/* Main Front Page */}
        <path
          d="M140 100 L260 100 L280 220 L120 220 Z"
          fill="#14171c"
          stroke="url(#calGrad)"
          strokeWidth="1.5"
        />

        {/* Calendar Grid Lines on Front Page */}
        <g stroke="#f0b13f" strokeWidth="0.5" strokeOpacity="0.25">
          <line x1="138" y1="125" x2="262" y2="125" />
          <line x1="133" y1="150" x2="267" y2="150" />
          <line x1="129" y1="175" x2="271" y2="175" />
          <line x1="125" y1="200" x2="275" y2="200" />
          
          <line x1="165" y1="100" x2="155" y2="220" />
          <line x1="200" y1="100" x2="200" y2="220" />
          <line x1="235" y1="100" x2="245" y2="220" />
        </g>

        {/* Spiral Binder Rings on Top */}
        {[155, 175, 195, 215, 235, 250].map((x, i) => (
          <g key={i}>
            <ellipse cx={x} cy="100" rx="3.5" ry="7" stroke="#f0b13f" strokeWidth="1.5" fill="#060708" />
            <line x1={x} y1="94" x2={x + 1} y2="102" stroke="#ffc25e" strokeWidth="1.2" />
          </g>
        ))}

        {/* Glowing SPARK ⚡ Lightning Bolt on Calendar Face */}
        <path
          d="M204 125 L190 155 L203 155 L195 185 L215 150 L202 150 Z"
          fill="#f0b13f"
          stroke="#ffc25e"
          strokeWidth="1"
          className="drop-shadow-[0_0_12px_rgba(240,177,63,0.8)] animate-pulse"
        />

        {/* Data / particle dots */}
        <circle cx="95" cy="130" r="1.5" fill="#f0b13f" fillOpacity="0.7" />
        <circle cx="310" cy="115" r="2" fill="#ffc25e" fillOpacity="0.8" />
        <circle cx="330" cy="190" r="1.5" fill="#f0b13f" fillOpacity="0.5" />
        <circle cx="80" cy="205" r="1" fill="#f0b13f" fillOpacity="0.6" />
        <circle cx="200" cy="55" r="1.5" fill="#ffc25e" fillOpacity="0.6" />
        <circle cx="285" cy="70" r="1.2" fill="#f0b13f" fillOpacity="0.4" />
      </svg>
    </div>
  );
}
