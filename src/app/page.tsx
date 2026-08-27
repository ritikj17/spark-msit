import type { Metadata } from "next";
import { ProgressRail } from "@/components/layout/ProgressRail";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { HeroMount } from "@/components/three/HeroMount";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { PillarIcon } from "@/components/ui/PillarIcon";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { SocialIcon } from "@/components/ui/SocialIcon";
import { site } from "@/content/site";
import { whatWeDo } from "@/content/home";

export const metadata: Metadata = {
  title: undefined,
  alternates: { canonical: "/" },
};

function ConnectPanel() {
  return (
    <div
      className="relative max-w-xs rounded-sm border border-line bg-surface/30 p-4 sm:p-5 backdrop-blur-xs"
      aria-label="Connect with us"
    >
      {/* Technical corner tick accents */}
      <span aria-hidden="true" className="absolute -left-px -top-px h-2.5 w-2.5 border-l-2 border-t-2 border-accent" />
      <span aria-hidden="true" className="absolute -left-px -bottom-px h-2.5 w-2.5 border-l-2 border-b-2 border-accent" />
      <span aria-hidden="true" className="absolute -right-px -top-px h-2.5 w-2.5 border-r-2 border-t-2 border-accent" />
      <span aria-hidden="true" className="absolute -right-px -bottom-px h-2.5 w-2.5 border-r-2 border-b-2 border-accent" />

      <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-muted mb-3">
        CONNECT WITH US
      </p>
      <div className="flex items-center gap-3">
        {Object.entries(site.socials).map(([platform, link]) => (
          <a
            key={platform}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.label}
            className="group flex size-10 items-center justify-center rounded-sm border border-line bg-base/80 text-ink-secondary transition-all duration-200 hover:border-accent hover:bg-base-deep hover:text-accent hover:shadow-xs"
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
    <div
      className="hidden lg:flex flex-col items-center absolute bottom-6 left-1/2 -translate-x-1/2 pointer-events-none z-10"
      aria-hidden="true"
    >
      <p className="font-mono text-[9px] uppercase tracking-[0.25em] text-ink-muted mb-2">
        SCROLL TO EXPLORE
      </p>
      <div className="flex flex-col items-center gap-1">
        <div className="flex h-7 w-4 items-start justify-center rounded-full border border-line-strong pt-1">
          <span className="size-1 rounded-full bg-accent animate-bounce" />
        </div>
        <span className="font-mono text-[10px] text-ink-muted">⌄</span>
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
        <section
          id="hero"
          className="relative min-h-[calc(100svh-4.75rem)] overflow-hidden border-b border-line sm:min-h-[calc(100svh-5rem)] lg:grid lg:grid-cols-[40%_60%]"
        >
          {/* Content — first in DOM */}
          <Container className="relative z-content pt-10 pb-12 sm:pt-14 sm:pb-16 lg:pt-16 lg:pb-20 lg:col-start-1 lg:row-start-1 lg:self-center">
            <div className="max-w-2xl flex flex-col gap-5 sm:gap-6">
              <p className="font-mono text-xs uppercase tracking-[0.22em] text-ink-muted leading-relaxed">
                STUDENT PLATFORM FOR ADVANCEMENT,<br className="hidden sm:inline" />
                RESEARCH & KNOWLEDGE
              </p>

              <div className="flex flex-col gap-2">
                <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight text-ink leading-[1.02]">
                  {site.name} <span className="text-accent inline-block drop-shadow-[0_0_12px_rgba(240,177,63,0.4)]">⚡</span>
                </h1>

                <p className="font-display text-2xl sm:text-3xl lg:text-4xl text-ink leading-snug">
                  Where Curiosity <br className="hidden sm:block" /> Meets <span className="text-accent">Creation.</span>
                </p>
              </div>

              <div className="flex flex-col gap-2 text-sm sm:text-base max-w-lg leading-relaxed text-ink-secondary">
                <p>
                  We bring together students who are passionate about research, innovation, projects and learning.
                </p>
                <p className="font-mono text-xs uppercase tracking-wider text-accent/90">
                  Explore ideas. Build solutions. Create impact.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3.5 pt-1">
                <Button href="/about" variant="primary" size="lg" className="w-full sm:w-auto">
                  Explore SPARK →
                </Button>
                <Button href="#intro" variant="outline" size="lg" className="w-full sm:w-auto">
                  Know More <span aria-hidden="true">⌄</span>
                </Button>
              </div>

              <div className="pt-3">
                <ConnectPanel />
              </div>
            </div>

            <ScrollIndicator />
          </Container>

          {/* 3D visual — Dominates the right on desktop */}
          <div className="relative z-3d mt-4 mx-auto w-full max-w-md h-[400px] overflow-hidden sm:max-w-lg sm:h-[480px] lg:mt-0 lg:mx-0 lg:max-w-none lg:h-full lg:col-start-2 lg:row-start-1">
            <HeroMount className="h-full w-full" />
            {/* Fade edges into background */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 hidden lg:block bg-gradient-to-r from-base/85 via-base/20 to-transparent"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-base/80 to-transparent lg:hidden"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-base to-transparent lg:hidden"
            />
          </div>
        </section>

        {/* ── INTRO / WHO WE ARE ── */}
        <section id="intro" className="py-[var(--spark-section-pad)] bg-base-deep/60 border-b border-line relative overflow-hidden">
          <Container>
            <ScrollReveal>
              <div className="flex flex-col gap-6">
                <SectionEyebrow prefix="/// 01">WHO WE ARE</SectionEyebrow>

                <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-semibold tracking-tight text-ink max-w-4xl leading-[1.15]">
                  We bring together students who are interested in <span className="text-accent">research</span>, <span className="text-accent">innovation</span>, projects and learning.
                </h2>

                <p className="max-w-2xl text-base sm:text-lg leading-relaxed text-ink-secondary">
                  Through workshops, events, collaborations and research activities, we give students opportunities to explore their interests and try something new.
                </p>

                <div className="mt-4 flex items-center gap-4">
                  <span className="h-px w-12 bg-accent/40" aria-hidden="true" />
                  <p className="font-mono text-xs sm:text-sm uppercase tracking-[0.2em] text-accent">
                    Explore ideas. Build solutions. Create impact.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </Container>
        </section>

        {/* ── WHAT WE DO ── */}
        <section id="what-we-do" className="py-[var(--spark-section-pad)] border-b border-line">
          <Container>
            <ScrollReveal>
              <div className="flex flex-col items-center text-center gap-3 mb-12 sm:mb-16">
                <SectionEyebrow prefix="/// 02">WHAT WE DO</SectionEyebrow>
                <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-ink">
                  Five Pillars of SPARK
                </h2>
                <p className="max-w-xl text-base text-ink-secondary leading-relaxed">
                  Five core pillars that define the SPARK student innovation experience.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {whatWeDo.map((item, i) => (
                <ScrollReveal key={item.id} delay={i * 0.08} y={20}>
                  <article className="group h-full">
                    <Card
                      interactive
                      glow={false}
                      className="h-full flex flex-col justify-between relative overflow-hidden transition-all duration-300 hover:border-accent hover:shadow-glow p-6 sm:p-7"
                    >
                      <div>
                        <div className="flex items-start justify-between gap-3 mb-5">
                          <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent shrink-0">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <div className="flex size-11 shrink-0 items-center justify-center rounded-sm border border-line bg-base text-accent transition-colors duration-200 group-hover:border-accent group-hover:bg-base-deep">
                            <PillarIcon id={item.id} className="size-5" />
                          </div>
                        </div>
                        <h3 className="font-display text-lg sm:text-xl font-semibold text-ink mb-2.5 group-hover:text-accent transition-colors duration-200">
                          {item.title}
                        </h3>
                        <p className="text-sm text-ink-secondary leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </Card>
                  </article>
                </ScrollReveal>
              ))}
            </div>
          </Container>
        </section>

        {/* ── CLOSING CTA ── */}
        <section id="join" className="relative py-[var(--spark-section-pad)] overflow-hidden">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(240,177,63,0.08)_0%,_transparent_70%)]"
          />
          <Container>
            <div className="relative z-10 mx-auto max-w-3xl rounded-panel border border-line bg-surface p-8 sm:p-12 md:p-14 text-center shadow-card">
              <ScrollReveal>
                <div className="flex flex-col items-center gap-5">
                  <SectionEyebrow prefix="/// 03">READY TO EXPLORE?</SectionEyebrow>

                  <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-ink max-w-2xl">
                    Bring your curiosity. Find your <span className="text-accent">SPARK ⚡</span>
                  </h2>

                  <p className="max-w-xl text-sm sm:text-base text-ink-secondary leading-relaxed">
                    Join our student-driven society to research, innovate, and collaborate on meaningful engineering projects.
                  </p>

                  <div className="flex flex-wrap justify-center gap-3.5 pt-3">
                    <Button href="/contact" variant="primary" size="lg">
                      Join SPARK →
                    </Button>
                    <Button href="/about" variant="outline-accent" size="lg">
                      Learn More
                    </Button>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </Container>
        </section>
      </div>
    </>
  );
}
