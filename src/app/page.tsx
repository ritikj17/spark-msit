import type { Metadata } from "next";
import { ProgressRail } from "@/components/layout/ProgressRail";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { HeroMount } from "@/components/three/HeroMount";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { PillarIcon } from "@/components/ui/PillarIcon";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SocialIcon } from "@/components/ui/SocialIcon";
import { site } from "@/content/site";
import { whatWeDo } from "@/content/home";

export const metadata: Metadata = {
  title: undefined,
  alternates: { canonical: "/" },
};

function ConnectPanel() {
  return (
    <div className="relative border border-line p-4 md:p-5 hidden xl:block" aria-label="Connect with us">
      <span aria-hidden className="absolute -left-px -top-px h-2 w-2 border-l-2 border-t-2 border-accent" />
      <span aria-hidden className="absolute -left-px -bottom-px h-2 w-2 border-l-2 border-b-2 border-accent" />
      <span aria-hidden className="absolute -right-px -top-px h-2 w-2 border-r-2 border-t-2 border-accent" />
      <span aria-hidden className="absolute -right-px -bottom-px h-2 w-2 border-r-2 border-b-2 border-accent" />
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink-muted mb-3">CONNECT WITH US</p>
      <div className="flex gap-3">
        {Object.entries(site.socials).map(([platform, link]) => (
          <a
            key={platform}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.label}
            className="group flex h-10 w-10 items-center justify-center rounded-sm border border-line text-ink-secondary transition-colors duration-200 hover:border-accent hover:text-accent"
          >
            <SocialIcon platform={platform as "instagram" | "whatsapp" | "linkedin"} className="size-5" />
          </a>
        ))}
      </div>
    </div>
  );
}

function ScrollIndicator() {
  return (
    <div className="hidden lg:flex flex-col items-center absolute bottom-6 left-1/2 -translate-x-1/2" aria-hidden="true">
      <p className="font-mono text-[9px] uppercase tracking-[0.25em] text-ink-muted mb-2">SCROLL TO EXPLORE</p>
      <div className="flex h-9 w-6 items-start justify-center rounded-full border border-line-strong pt-1.5">
        <span className="size-1 rounded-full bg-accent animate-bounce" />
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <ProgressRail />

      {/* Reserved left gutter at xl so the fixed ProgressRail never overlaps copy */}
      <div className="xl:pl-16">
      {/* ── HERO ── */}
      {/* Single column below lg (content → visual). Two-column 40/60 split at lg+. */}
      <section
        id="hero"
        className="relative min-h-[calc(100svh-4.75rem)] overflow-hidden border-b border-line sm:min-h-[calc(100svh-5rem)] lg:grid lg:grid-cols-[40%_60%]"
      >

        {/* Content — first in DOM: natural flow on mobile/tablet, left cell on desktop */}
        <Container className="relative z-content pt-12 pb-16 lg:pt-20 lg:pb-24 lg:col-start-1 lg:row-start-1 lg:self-center">
          <div className="max-w-2xl flex flex-col gap-6">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent">
              STUDENT PLATFORM FOR ADVANCEMENT, RESEARCH & KNOWLEDGE
            </p>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold tracking-tight text-ink leading-[1.05]">
              {site.name} <span className="text-accent">⚡</span>
            </h1>

            <p className="font-display text-lg sm:text-xl lg:text-2xl text-ink leading-relaxed">
              Where Curiosity <br className="hidden md:block" /> Meets <span className="text-accent">Creation.</span>
            </p>

            <p className="text-base sm:text-lg max-w-xl leading-relaxed text-ink-secondary">
              Have an idea you want to work on? Interested in research? Want to build
              something new or learn something beyond your classroom?
            </p>

            <p className="text-base max-w-xl leading-relaxed text-ink-secondary">
              SPARK is a place to start.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button href="/about" variant="primary" size="lg" className="w-full sm:w-auto">
                Explore SPARK
                <span aria-hidden>→</span>
              </Button>
              <Button href="#intro" variant="outline" size="lg" className="w-full sm:w-auto">
                Know More
                <span aria-hidden>⌄</span>
              </Button>
            </div>

            <ConnectPanel />
          </div>

          <ScrollIndicator />
        </Container>

        {/* 3D visual — contained block below content on mobile/tablet, right cell on desktop */}
        <div className="relative z-3d mt-10 mx-auto w-full max-w-md h-[360px] overflow-hidden sm:max-w-lg sm:h-[440px] lg:mt-0 lg:mx-0 lg:max-w-none lg:h-full lg:col-start-2 lg:row-start-1">
          <HeroMount className="h-full w-full" />
          {/* Fade edges into background */}
          <div aria-hidden className="pointer-events-none absolute inset-0 hidden lg:block bg-gradient-to-r from-base/80 via-base/15 to-transparent" />
          <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-base/80 to-transparent lg:hidden" />
          <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-base to-transparent lg:hidden" />
        </div>
      </section>

      {/* ── INTRO / WHO WE ARE ── */}
      <section id="intro" className="py-[var(--spark-section-pad)] bg-base-deep/50">
        <Container>
          <ScrollReveal>
            <SectionHeader
              eyebrow="02 // WHO WE ARE"
              title="We bring together students who are interested in research, innovation, projects and learning."
              description="Through workshops, events, collaborations and research activities, we give students opportunities to explore their interests and try something new."
            />
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="mt-10 max-w-3xl mx-auto text-center">
              <p className="font-mono text-sm uppercase tracking-[0.2em] text-accent leading-relaxed">
                Explore ideas. Build solutions. Create impact.
              </p>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* ── WHAT WE DO ── */}
      <section id="what-we-do" className="py-[var(--spark-section-pad)]">
        <Container>
          <ScrollReveal>
            <SectionHeader
              eyebrow="03 // WHAT WE DO"
              title="What We Do"
              description="Five pillars that define the SPARK experience."
              align="center"
            />
          </ScrollReveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whatWeDo.map((item, i) => (
              <ScrollReveal key={item.id} delay={i * 0.08} y={20}>
                <article className="group h-full">
                  <Card interactive glow={false} className="h-full flex flex-col relative overflow-hidden transition-all duration-300 hover:border-accent hover:shadow-glow">
                    <div className="flex items-start justify-between gap-3 mb-4">
                      <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-muted shrink-0">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div className="flex size-12 shrink-0 items-center justify-center rounded-sm border border-line bg-surface text-accent">
                        <PillarIcon id={item.id} className="size-6" />
                      </div>
                    </div>
                    <h3 className="font-display text-lg font-semibold text-ink mb-2 group-hover:text-accent transition-colors duration-200">
                      {item.title}
                    </h3>
                    <p className="text-sm text-ink-secondary flex-1 leading-relaxed">{item.description}</p>
                  </Card>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ── CLOSING CTA ── */}
      <section id="join" className="relative py-[var(--spark-section-pad)] overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(240,177,63,0.06)_0%,_transparent_70%)]" />
        <Container>
          <div className="flex max-w-2xl flex-col items-center gap-6 text-center relative z-10 mx-auto">
            <ScrollReveal>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
                READY TO EXPLORE?
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-ink">
                Bring your curiosity. Find your <span className="text-accent">SPARK ⚡</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="flex flex-wrap justify-center gap-3">
                <Button href="/contact" variant="primary" size="lg">
                  Join SPARK
                </Button>
                <Button href="/about" variant="outline" size="lg">
                  Learn More
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>
      </div>
    </>
  );
}