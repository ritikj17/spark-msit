import { cn } from "@/lib/utils";

/**
 * Lightweight procedural SVG iconography for the five SPARK pillars.
 * Stroke-based, currentColor, consistent 24×24 grid — no icon dependency.
 */

interface PillarIconProps {
  id: string;
  className?: string;
}

export function PillarIcon({ id, className }: PillarIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={cn("size-5", className)}
    >
      {id === "research" ? (
        <>
          {/* Microscope */}
          <path d="M6 20h12" />
          <path d="M9 20v-2.2" />
          <path d="M15.5 17.8c2.2-1 3.5-3.1 3.5-5.6 0-1.6-.6-3-1.6-4.1" />
          <path d="M9.6 4.2l4.5 4.5-5 5-4.5-4.5z" />
          <path d="M7.3 13l3 3" />
        </>
      ) : id === "innovation" ? (
        <>
          {/* Lightbulb */}
          <path d="M9 18h6" />
          <path d="M10 21h4" />
          <path d="M12 3a6 6 0 0 0-3.5 10.9c.9.7 1.5 1.3 1.5 2.1h4c0-.8.6-1.4 1.5-2.1A6 6 0 0 0 12 3z" />
          <path d="M12 8v2" />
        </>
      ) : id === "collaboration" ? (
        <>
          {/* People / group */}
          <circle cx="9" cy="8" r="2.6" />
          <path d="M3.5 19c.6-3 2.8-4.8 5.5-4.8s4.9 1.8 5.5 4.8" />
          <path d="M15.5 5.6a2.6 2.6 0 0 1 0 4.9" />
          <path d="M16.5 14.4c2.1.5 3.6 2.1 4 4.6" />
        </>
      ) : id === "workshops" ? (
        <>
          {/* Open book / learning */}
          <path d="M12 6.5C10.5 5 8.4 4.5 5.5 4.5c-.6 0-1 .4-1 1V17c0 .6.4 1 1 1 2.9 0 5 .5 6.5 2 1.5-1.5 3.6-2 6.5-2 .6 0 1-.4 1-1V5.5c0-.6-.4-1-1-1-2.9 0-5 .5-6.5 2z" />
          <path d="M12 6.5V20" />
        </>
      ) : (
        <>
          {/* Rocket */}
          <path d="M12 2.5c2.6 2.2 4.2 5.4 4.2 8.9l-1.7 4.6H9.5l-1.7-4.6c0-3.5 1.6-6.7 4.2-8.9z" />
          <circle cx="12" cy="9.5" r="1.5" />
          <path d="M9.5 13.5L7 16.5h2.6" />
          <path d="M14.5 13.5l2.5 3h-2.6" />
          <path d="M10 18.5c0 1.4.7 2.4 2 3 1.3-.6 2-1.6 2-3" />
        </>
      )}
    </svg>
  );
}
