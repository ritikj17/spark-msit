import type { SocialPlatform } from "@/content/types";

interface IconProps {
  className?: string;
}

/** Minimal stroke icons for SPARK social channels. */
export function SocialIcon({ platform, className }: IconProps & { platform: SocialPlatform }) {
  const common = {
    className,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };

  switch (platform) {
    case "instagram":
      return (
        <svg {...common}>
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" stroke="none" />
        </svg>
      );
    case "whatsapp":
      return (
        <svg {...common}>
          <path d="M12 3a9 9 0 0 0-7.8 13.5L3 21l4.6-1.2A9 9 0 1 0 12 3Z" />
          <path d="M8.5 8.5c-.3 2.6 1.4 5.4 4 6.5.9.4 1.6-.3 1.6-1.2l-1.7-.9-.9 1c-1.5-.6-2.6-1.8-3-3.3l1-.9-.9-1.7c-.9 0-1.6.7-1.1 1.5Z" />
        </svg>
      );
    case "linkedin":
      return (
        <svg {...common}>
          <rect x="3" y="3" width="18" height="18" rx="3" />
          <path d="M8 10v6M8 7.5v.01M12 16v-3.5a1.5 1.5 0 0 1 3 0V16" />
          <path d="M8 10h3v2" />
        </svg>
      );
  }
}