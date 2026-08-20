import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
}

/**
 * Standard section intro: mono eyebrow label, display title, lede text.
 */
export function SectionHeader({ eyebrow, title, description, align = "left", className }: SectionHeaderProps) {
  return (
    <div className={cn("flex flex-col gap-3", align === "center" && "items-center text-center", className)}>
      {eyebrow ? (
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">{eyebrow}</p>
      ) : null}
      <h2 className="font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">{title}</h2>
      {description ? <p className="max-w-2xl text-base leading-relaxed text-ink-secondary">{description}</p> : null}
    </div>
  );
}