import { cn } from "@/lib/utils";

export type DepartmentKey =
  | "research"
  | "publication"
  | "workshop"
  | "tech"
  | "pr-marketing"
  | "event-management"
  | "design-videography";

interface DeptIconProps {
  dept: DepartmentKey | string;
  className?: string;
}

function normalizeKey(dept: string): DepartmentKey {
  const lower = dept.toLowerCase().trim();
  if (lower.includes("research")) return "research";
  if (lower.includes("publication") || lower.includes("doc")) return "publication";
  if (lower.includes("workshop")) return "workshop";
  if (lower.includes("tech")) return "tech";
  if (lower.includes("pr") || lower.includes("market") || lower.includes("outreach")) return "pr-marketing";
  if (lower.includes("event")) return "event-management";
  if (lower.includes("design") || lower.includes("video")) return "design-videography";
  return "research";
}

/**
 * Lightweight inline SVG icons for SPARK departments.
 * Stroke-based, 24×24 grid, currentColor, no external dependencies.
 */
export function DeptIcon({ dept, className }: DeptIconProps) {
  const key = normalizeKey(dept);
  const common = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className: cn("size-5 shrink-0 text-accent", className),
    "aria-hidden": true,
  };

  switch (key) {
    case "research":
      return (
        <svg {...common}>
          {/* Microscope */}
          <path d="M6 20h12" />
          <path d="M9 20v-2" />
          <path d="M14 20v-2" />
          <path d="M12 14a4 4 0 1 0 4-4" />
          <path d="m9.5 4.5 5 5" />
          <path d="m11 3 4.5 4.5" />
          <path d="M8 14h8" />
        </svg>
      );

    case "publication":
      return (
        <svg {...common}>
          {/* Document & Quill / Journal */}
          <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a2.5 2.5 0 0 1-2.5-2.5Z" />
          <path d="M8 7h8" />
          <path d="M8 11h8" />
          <path d="M8 15h4" />
        </svg>
      );

    case "workshop":
      return (
        <svg {...common}>
          {/* Wrench & Screwdriver / Interactive Tools */}
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
        </svg>
      );

    case "tech":
      return (
        <svg {...common}>
          {/* Terminal / Code brackets */}
          <rect width="20" height="16" x="2" y="4" rx="2" />
          <path d="m7 10 3 2-3 2" />
          <path d="M13 14h4" />
        </svg>
      );

    case "pr-marketing":
      return (
        <svg {...common}>
          {/* Megaphone / Broadcast Outreach */}
          <path d="m3 11 18-5v12L3 13v-2z" />
          <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" />
          <path d="M7 12v6" />
        </svg>
      );

    case "event-management":
      return (
        <svg {...common}>
          {/* Calendar with Star / Event schedule */}
          <path d="M8 2v4" />
          <path d="M16 2v4" />
          <rect width="18" height="18" x="3" y="4" rx="2" />
          <path d="M3 10h18" />
          <path d="m12 13 1 2 2 .5-1.5 1.5.5 2-2-1-2 1 .5-2-1.5-1.5 2-.5z" />
        </svg>
      );

    case "design-videography":
      return (
        <svg {...common}>
          {/* Video Camera & Lens Aperture */}
          <path d="m16 8 6-4v16l-6-4" />
          <rect width="14" height="14" x="2" y="5" rx="2" />
          <circle cx="9" cy="12" r="2.5" />
        </svg>
      );
  }
}
