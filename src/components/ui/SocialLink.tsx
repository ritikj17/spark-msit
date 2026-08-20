import type { SocialLink as SocialLinkData, SocialPlatform } from "@/content/types";
import { cn } from "@/lib/utils";
import { SocialIcon } from "./SocialIcon";

interface SocialLinkProps {
  platform: SocialPlatform;
  link: SocialLinkData;
  className?: string;
}

/**
 * External social link. Preserves the official URL exactly and opens in a new
 * tab with rel="noopener noreferrer".
 */
export function SocialLink({ platform, link, className }: SocialLinkProps) {
  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group inline-flex items-center gap-3 rounded-sm text-ink-secondary transition-colors duration-200 hover:text-accent",
        className,
      )}
    >
      <SocialIcon platform={platform} className="size-5" />
      <span className="text-sm">{link.label}</span>
    </a>
  );
}