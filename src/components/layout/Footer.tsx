import Link from "next/link";
import { navigation } from "@/content/navigation";
import { site } from "@/content/site";
import { Logo } from "@/components/shared/Logo";
import { Container } from "@/components/ui/Container";
import { SocialLink } from "@/components/ui/SocialLink";

/**
 * Site footer shell: brand, navigation, official social links, institution.
 */
export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-base-deep">
      <Container className="flex flex-col gap-10 py-12">
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          <div className="max-w-sm">
            <Link href="/" className="flex items-center gap-2.5 text-accent" aria-label={`${site.name} home`}>
              <Logo />
              <span className="font-display text-base font-semibold tracking-tight text-ink">{site.name}</span>
            </Link>
            <p className="mt-3 font-mono text-xs uppercase tracking-[0.2em] text-ink-muted">{site.nameLong}</p>
            <p className="mt-2 text-sm text-ink-secondary">{site.tagline}</p>
          </div>

          <nav aria-label="Footer" className="flex flex-col gap-2">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink-muted">Explore</p>
            {navigation.items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-ink-secondary transition-colors duration-200 hover:text-accent"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col gap-3">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink-muted">Connect</p>
            {Object.entries(site.socials).map(([platform, link]) => (
              <SocialLink key={platform} platform={platform as keyof typeof site.socials} link={link} />
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-line pt-6 text-sm text-ink-muted md:flex-row md:items-center md:justify-between">
          <p>
            {site.institution.name} · {site.institution.address}
          </p>
          <p>
            © {year} {site.name} {site.institution.shortName}
          </p>
        </div>
      </Container>
    </footer>
  );
}