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
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { EventTypeBadge } from "@/components/ui/EventTypeBadge";
import { TimelineDateMarker } from "@/components/ui/TimelineDateMarker";
import { DeptIcon } from "@/components/ui/DeptIcon";
import { StatBlock } from "@/components/ui/StatBlock";
import { CheckItem } from "@/components/ui/CheckItem";
import { PortraitCard } from "@/components/team/PortraitCard";
import { SocialCard } from "@/components/ui/SocialCard";
import { CTAStrip } from "@/components/shared/CTAStrip";

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

          <div className="flex flex-col gap-6 border-t border-line pt-10">
            <SectionEyebrow prefix="/// 02">STAGE 6C PRIMITIVES</SectionEyebrow>

            <div className="flex flex-col gap-4">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink-muted">Section Eyebrows</p>
              <div className="flex flex-col gap-2">
                <SectionEyebrow>EVENTS & WORKSHOPS</SectionEyebrow>
                <SectionEyebrow prefix="//" hairline>RESEARCH & DEVELOPMENT</SectionEyebrow>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink-muted">Event Type Badges</p>
              <div className="flex flex-wrap items-center gap-3">
                <EventTypeBadge>WORKSHOP</EventTypeBadge>
                <EventTypeBadge>WEBINAR</EventTypeBadge>
                <EventTypeBadge>HACKATHON</EventTypeBadge>
                <EventTypeBadge>COMPETITION</EventTypeBadge>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink-muted">Timeline Date Marker</p>
              <div className="flex flex-wrap items-center gap-4">
                <TimelineDateMarker year={2026} month="MAR" day={15} />
                <TimelineDateMarker year={2026} month="APR" />
                <TimelineDateMarker year={2026} month="MAY" day="02" />
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink-muted">Department Icons</p>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-7">
                {[
                  "research",
                  "publication",
                  "workshop",
                  "tech",
                  "pr-marketing",
                  "event-management",
                  "design-videography",
                ].map((dept) => (
                  <div key={dept} className="flex flex-col items-center gap-2 rounded-sm border border-line bg-surface p-3 text-center">
                    <DeptIcon dept={dept} className="size-6 text-accent" />
                    <span className="font-mono text-[10px] uppercase text-ink-muted">{dept}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink-muted">Stat Blocks</p>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <StatBlock value="1" label="Faculty Guide" description="Guiding research & initiatives" />
                <StatBlock value="3" label="Core Leaders" description="Executive oversight" />
                <StatBlock value="7" label="Departments" description="Specialized domains" />
                <StatBlock value="25+" label="Student Members" description="Active contributors" />
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink-muted">Check Items</p>
              <div className="flex flex-col gap-3 rounded-panel border border-line bg-surface p-5">
                <CheckItem title="Research Mentorship">
                  Direct guidance on student research papers and technical innovations.
                </CheckItem>
                <CheckItem title="Hands-on Workshops">
                  Practical bootcamps on machine learning, web engineering, and UI design.
                </CheckItem>
                <CheckItem title="Cross-disciplinary Collaboration">
                  Bringing engineers and creators together to build impactful projects.
                </CheckItem>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink-muted">Portrait Cards</p>
              <div className="grid gap-4 sm:grid-cols-3">
                <PortraitCard
                  name="Ashvini Adhikari"
                  role="President"
                  department="EXECUTIVE"
                  photo="[SPARK-CORE-2026-2027-PRESIDENT-ASHVINI-ADHIKARI]"
                  description="The President leads SPARK and works closely with all the departments."
                />
                <PortraitCard
                  name="Palak Gupta"
                  role="Research Head"
                  department="RESEARCH"
                  photo="[SPARK-CORE-2026-2027-RESEARCH-HEAD-PALAK-GUPTA]"
                />
                <PortraitCard
                  name={null}
                  role="Deputy Coordinator"
                  status="pending"
                  department="WORKSHOP"
                />
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink-muted">Social Cards</p>
              <div className="grid gap-4 sm:grid-cols-3">
                <SocialCard
                  platform="instagram"
                  link={site.socials.instagram}
                  description="Official photos, event highlights, and society updates."
                  ctaText="Follow @"
                />
                <SocialCard
                  platform="whatsapp"
                  link={site.socials.whatsapp}
                  description="Community announcements and active discussion channel."
                  ctaText="Join Chat →"
                />
                <SocialCard
                  platform="linkedin"
                  link={site.socials.linkedin}
                  description="Professional network, project showcases, and alumni connect."
                  ctaText="Connect →"
                />
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink-muted">CTA Strip</p>
              <CTAStrip
                heading="Ready to Build the Future with SPARK?"
                description="Join our student-driven society to research, innovate, and collaborate on real-world engineering projects."
                ctaLabel="Get in Touch"
                ctaHref="/contact"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}