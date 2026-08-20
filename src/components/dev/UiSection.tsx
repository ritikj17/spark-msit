import { site } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Chip } from "@/components/ui/Chip";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SocialLink } from "@/components/ui/SocialLink";
import { TextLink } from "@/components/ui/TextLink";
import { Placeholder } from "@/components/shared/Placeholder";
import { SparkImage } from "@/components/shared/SparkImage";

export function UiSection() {
  return (
    <section className="py-16">
      <Container>
        <SectionHeader
          eyebrow="UI-01 // COMPONENTS"
          title="Core components"
          description="Buttons, links, cards, chips, section headers, social links and image/placeholder states."
        />

        <div className="mt-10 flex flex-col gap-14">
          <div className="flex flex-col gap-4">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink-muted">Buttons — variants</p>
            <div className="flex flex-wrap items-center gap-3">
              <Button variant="primary">Primary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
            </div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink-muted">Buttons — sizes</p>
            <div className="flex flex-wrap items-center gap-3">
              <Button variant="primary" size="sm">Small</Button>
              <Button variant="primary" size="md">Medium</Button>
              <Button variant="primary" size="lg">Large</Button>
            </div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink-muted">Buttons — internal / external / disabled</p>
            <div className="flex flex-wrap items-center gap-3">
              <Button href="/about" variant="outline">Internal link</Button>
              <Button href={site.socials.instagram.url} variant="outline" external>External link</Button>
              <Button variant="primary" disabled>Disabled</Button>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink-muted">Links</p>
            <p className="text-base leading-relaxed text-ink-secondary">
              Inline links, e.g. <TextLink href="/about">Explore SPARK</TextLink> or an external{" "}
              <TextLink href={site.socials.linkedin.url} external>LinkedIn</TextLink> reference.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink-muted">Cards</p>
            <div className="grid gap-4 sm:grid-cols-3">
              <Card>
                <p className="font-display text-lg font-semibold text-ink">Default</p>
                <p className="mt-2 text-sm text-ink-secondary">Standard technical panel.</p>
              </Card>
              <Card interactive>
                <p className="font-display text-lg font-semibold text-ink">Interactive</p>
                <p className="mt-2 text-sm text-ink-secondary">Hover to inspect the border transition.</p>
              </Card>
              <Card glow>
                <p className="font-display text-lg font-semibold text-ink">Glow</p>
                <p className="mt-2 text-sm text-ink-secondary">Restrained gold accent glow.</p>
              </Card>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink-muted">Chips / tags</p>
            <div className="flex flex-wrap items-center gap-3">
              <Chip>budgeting</Chip>
              <Chip>Lens Studio</Chip>
              <Chip variant="accent">RESEARCH HEAD</Chip>
              <Chip variant="pending">DEPUTY HEAD — PENDING</Chip>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink-muted">Section headers</p>
            <SectionHeader eyebrow="01 // LEFT" title="Left aligned" description="Default alignment with eyebrow, title and lede." />
            <SectionHeader eyebrow="02 // CENTER" title="Center aligned" align="center" description="Centered variant used for closing statements." />
          </div>

          <div className="flex flex-col gap-4">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink-muted">Social links — official URLs</p>
            <div className="flex flex-col gap-3">
              {Object.entries(site.socials).map(([platform, link]) => (
                <SocialLink key={platform} platform={platform as keyof typeof site.socials} link={link} />
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink-muted">Image / placeholder states</p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <SparkImage src="[SPARK-EVENT-01-COVER]" alt="Event cover placeholder" aspectRatio="16 / 9" />
                <p className="font-mono text-[11px] text-ink-muted">[SPARK-EVENT-01-COVER] — unresolved token</p>
              </div>
              <div className="flex flex-col gap-2">
                <Placeholder label="[SPARK-RESEARCH-HEAD-PHOTO]" aspectRatio="3 / 4" />
                <p className="font-mono text-[11px] text-ink-muted">[SPARK-RESEARCH-HEAD-PHOTO] — portrait ratio</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}