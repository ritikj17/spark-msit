import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
}

/**
 * SPARK brand mark placeholder (inline SVG).
 * Replaced by the final official [SPARK-LOGO] asset when supplied — see
 * src/lib/assets.ts.
 */
export function Logo({ className }: LogoProps) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      className={cn("size-8", className)}
      aria-hidden
    >
      <rect
        x="1.5"
        y="1.5"
        width="29"
        height="29"
        rx="7"
        stroke="currentColor"
        strokeOpacity="0.35"
      />
      <path
        d="M17.5 5 8 18h6l-1.5 9L22 14h-6l1.5-9Z"
        fill="currentColor"
      />
    </svg>
  );
}