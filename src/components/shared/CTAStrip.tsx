import type { ReactNode } from "react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

interface CTAStripProps {
  heading: ReactNode;
  description: ReactNode;
  ctaLabel: string;
  ctaHref: string;
  ctaExternal?: boolean;
  ctaVariant?: "primary" | "outline" | "outline-accent";
  icon?: ReactNode;
  className?: string;
}

/**
 * Reusable contained CTA banner matching the SPARK technical design system.
 * Used for prominent section and page-closing action strips.
 */
export function CTAStrip({
  heading,
  description,
  ctaLabel,
  ctaHref,
  ctaExternal = false,
  ctaVariant = "primary",
  icon,
  className,
}: CTAStripProps) {
  return (
    <div
      className={cn(
        "relative flex flex-col justify-between gap-6 py-8 border-y border-line md:flex-row md:items-center",
        className,
      )}
    >
      {/* Subtle background radial glow */}
      <div
        className="pointer-events-none absolute -right-20 -top-20 size-64 rounded-full bg-accent/5 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative z-10 flex flex-1 flex-col gap-3 sm:flex-row sm:items-start sm:gap-5">
        {icon ? (
          <div className="flex size-12 shrink-0 items-center justify-center rounded-sm border border-accent/30 bg-accent/10 text-accent">
            {icon}
          </div>
        ) : null}
        <div className="flex flex-col gap-1.5">
          <h3 className="font-display text-xl font-semibold tracking-tight text-ink sm:text-2xl">
            {heading}
          </h3>
          <p className="max-w-2xl text-sm leading-relaxed text-ink-secondary sm:text-base">
            {description}
          </p>
        </div>
      </div>

      <div className="relative z-10 shrink-0 self-start md:self-center">
        <Button
          href={ctaHref}
          external={ctaExternal}
          variant={ctaVariant}
          size="lg"
          className="w-full sm:w-auto"
        >
          {ctaLabel}
        </Button>
      </div>
    </div>
  );
}
