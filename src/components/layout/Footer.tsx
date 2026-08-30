import Link from "next/link";
import { site } from "@/content/site";
import { Logo } from "@/components/shared/Logo";
import { Container } from "@/components/ui/Container";
import { SocialIcon } from "@/components/ui/SocialIcon";
import { ScrollToTop } from "./ScrollToTop";
import type { SocialPlatform } from "@/content/types";

/**
 * Site footer: SPARK Society Identity, Focus Areas, Community Hubs, Institution.
 * No repetitive navbar links.
 */
export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto pb-6 sm:pb-8">
      <Container>
        <div className="flex flex-col pt-8 sm:pt-10 border-t border-line">
          {/* Top section: Brand, Focus Pillars, Social Hubs */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-12 items-start justify-between">
            {/* 1. Brand & Purpose (5 cols) */}
            <div className="lg:col-span-5 flex flex-col gap-3">
              <Link href="/" className="flex items-center gap-3 text-accent group" aria-label={`${site.name} home`}>
                <Logo size={34} />
                <span className="font-display text-lg font-bold tracking-tight text-ink group-hover:text-accent transition-colors">
                  {site.name}
                </span>
              </Link>
              <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed max-w-sm">
                Student Platform for Advancement, Research & Knowledge. Empowering engineering students to explore ambitious questions and build practical solutions.
              </p>
              <p className="font-mono text-[11px] text-accent mt-1">
                Research. Collaborate. Discover.
              </p>
            </div>

            {/* 2. Society Focus Disciplines (4 cols) */}
            <div className="lg:col-span-4 flex flex-col gap-2.5">
              <span className="font-mono text-xs uppercase tracking-widest text-ink-muted">
                CORE DISCIPLINES
              </span>
              <ul className="flex flex-col gap-1.5 text-xs text-ink-secondary">
                <li className="flex items-center gap-2">
                  <span className="size-1 rounded-full bg-accent" />
                  <span>Applied Research & Hardware Labs</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="size-1 rounded-full bg-accent" />
                  <span>Interactive Technical Workshops</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="size-1 rounded-full bg-accent" />
                  <span>Cross-Department Student Projects</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="size-1 rounded-full bg-accent" />
                  <span>Academic Documentation & Publications</span>
                </li>
              </ul>
            </div>

            {/* 3. Official Social Channels (3 cols) */}
            <div className="lg:col-span-3 flex flex-col gap-3 lg:items-end">
              <span className="font-mono text-xs uppercase tracking-widest text-ink-muted">
                COMMUNITY HUBS
              </span>
              <div className="flex items-center gap-2.5">
                {Object.entries(site.socials).map(([platform, link]) => (
                  <a
                    key={platform}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    className="group flex size-9 items-center justify-center rounded-sm border border-line bg-base text-ink-secondary transition-all duration-200 hover:border-accent hover:bg-base-deep hover:text-accent"
                  >
                    <SocialIcon platform={platform as SocialPlatform} className="size-4" />
                  </a>
                ))}
              </div>
              <span className="font-mono text-[10px] text-ink-muted">
                Active Term 2026–2027
              </span>
            </div>
          </div>

          {/* Divider */}
          <div className="my-6 h-px w-full bg-line" aria-hidden="true" />

          {/* Bottom section: Institution Affiliation & Copyright */}
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between text-xs text-ink-muted">
            <p>
              Maharaja Surajmal Institute of Technology, C-4 Janakpuri, New Delhi 110058
            </p>
            <p>
              © {year} SPARK MSIT. All rights reserved.
            </p>
          </div>
        </div>
      </Container>
      <ScrollToTop />
    </footer>
  );
}
