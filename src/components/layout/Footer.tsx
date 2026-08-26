import Link from "next/link";
import { navigation } from "@/content/navigation";
import { site } from "@/content/site";
import { Logo } from "@/components/shared/Logo";
import { Container } from "@/components/ui/Container";
import { SocialIcon } from "@/components/ui/SocialIcon";
import { ScrollToTop } from "./ScrollToTop";
import type { SocialPlatform } from "@/content/types";

/**
 * Site footer shell: brand, navigation, official social links, institution.
 */
export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto pb-6 pt-12 sm:pb-8">
      <Container>
        <div className="flex flex-col rounded-panel border border-line bg-surface p-6 shadow-card sm:p-8 md:p-10">
          {/* Top section: Brand, Nav, Social */}
          <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
            {/* Brand */}
            <div className="flex flex-col items-center gap-3 lg:items-start">
              <Link href="/" className="flex items-center gap-2.5 text-accent" aria-label={`${site.name} home`}>
                <Logo />
                <span className="font-display text-lg font-semibold tracking-tight text-ink">{site.name}</span>
              </Link>
              <p className="text-sm text-ink-secondary">Research. Collaborate. Discover.</p>
            </div>

            {/* Navigation */}
            <nav aria-label="Footer" className="flex flex-wrap items-center justify-center gap-x-6 gap-y-4">
              {navigation.items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm uppercase tracking-wide text-ink-secondary transition-colors duration-200 hover:text-ink"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Social */}
            <div className="flex flex-col items-center gap-4 lg:items-end">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink-muted">Follow Us</p>
              <div className="flex items-center gap-3">
                {Object.entries(site.socials).map(([platform, link]) => (
                  <a
                    key={platform}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    className="group flex size-10 items-center justify-center rounded-sm border border-line bg-base text-ink-secondary transition-colors duration-200 hover:border-accent hover:bg-base-deep hover:text-accent"
                  >
                    <SocialIcon platform={platform as SocialPlatform} className="size-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="my-8 h-px w-full bg-line" aria-hidden="true" />

          {/* Bottom section: Copyright */}
          <div className="flex flex-col gap-1 text-sm text-ink-muted sm:flex-row sm:gap-2">
            <span>© {year} {site.name} {site.institution.shortName}</span>
            <span className="hidden sm:inline">|</span>
            <span>All rights reserved.</span>
          </div>
        </div>
      </Container>
      <ScrollToTop />
    </footer>
  );
}
