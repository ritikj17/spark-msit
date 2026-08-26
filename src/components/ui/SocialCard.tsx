import type { ReactNode } from "react";
import type { SocialLink as SocialLinkData, SocialPlatform } from "@/content/types";
import { SocialIcon } from "@/components/ui/SocialIcon";
import { cn } from "@/lib/utils";

interface SocialCardProps {
  platform: SocialPlatform;
  link: SocialLinkData;
  name?: string;
  description?: ReactNode;
  ctaText?: string;
  className?: string;
}

/**
 * Reusable rich social channel card matching the SPARK Contact design target.
 * Reuses official SocialIcon and URLs.
 */
export function SocialCard({
  platform,
  link,
  name,
  description,
  ctaText = "Connect →",
  className,
}: SocialCardProps) {
  const platformName = name ?? (platform.charAt(0).toUpperCase() + platform.slice(1));

  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group flex flex-col justify-between rounded-panel border border-line bg-surface p-6 shadow-card transition-all duration-200 hover:border-accent/40 hover:shadow-glow",
        className,
      )}
    >
      <div>
        <div className="flex items-center justify-between">
          <div className="flex size-11 items-center justify-center rounded-sm border border-line bg-base text-accent transition-colors duration-200 group-hover:border-accent group-hover:bg-base-deep">
            <SocialIcon platform={platform} className="size-5" />
          </div>
          <span className="font-mono text-xs text-ink-muted transition-colors duration-200 group-hover:text-accent">
            {ctaText}
          </span>
        </div>

        <div className="mt-4">
          <h4 className="font-display text-base font-semibold tracking-tight text-ink group-hover:text-accent transition-colors duration-200">
            {platformName}
          </h4>
          <p className="mt-0.5 font-mono text-xs text-accent">
            {link.label}
          </p>
          {description ? (
            <p className="mt-2 text-xs leading-relaxed text-ink-secondary">
              {description}
            </p>
          ) : null}
        </div>
      </div>
    </a>
  );
}
