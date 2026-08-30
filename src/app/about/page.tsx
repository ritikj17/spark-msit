import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { Button } from "@/components/ui/Button";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { aboutContent } from "@/content/about";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "About SPARK | SPARK MSIT",
  description: "Student Platform for Advancement, Research & Knowledge at Maharaja Surajmal Institute of Technology.",
  alternates: { canonical: "/about" },
};

function AimIcon({ index }: { index: number }) {
  const common = "size-4 text-accent shrink-0";
  switch (index) {
    case 0:
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={common} aria-hidden="true">
          <path d="M6 18h8M3 22h18M14 22a7 7 0 1 0-7-7" />
          <path d="M9 14h2M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2" />
          <path d="M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3" />
        </svg>
      );
    case 1:
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={common} aria-hidden="true">
          <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
          <path d="M9 18h6M10 22h4" />
        </svg>
      );
    case 2:
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={common} aria-hidden="true">
          <rect width="18" height="12" x="3" y="4" rx="2" />
          <path d="M2 20h20M9 10l2 2 4-4" />
        </svg>
      );
    case 3:
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={common} aria-hidden="true">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      );
    case 4:
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={common} aria-hidden="true">
          <rect width="18" height="18" x="3" y="4" rx="2" />
          <path d="M16 2v4M8 2v4M3 10h18" />
        </svg>
      );
    case 5:
    default:
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={common} aria-hidden="true">
          <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
        </svg>
      );
  }
}

export default function AboutPage() {
  return (
    <main className="flex flex-col">
      {/* ── 01. EDITORIAL HERO (Compact) ── */}
      <section className="relative border-b border-line pt-20 pb-8 sm:pt-24 sm:pb-10">
        <Container>
          <div className="flex flex-col gap-6 sm:gap-8">
            <ScrollReveal>
              <div className="flex flex-col gap-2 max-w-4xl">
                <SectionEyebrow hairline>ABOUT THE SOCIETY</SectionEyebrow>

                <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-ink leading-tight">
                  Advancing student research, innovation, and engineering discovery at MSIT.
                </h1>
              </div>
            </ScrollReveal>

            {/* Asymmetric 2-Column Spread */}
            <ScrollReveal delay={0.08}>
              <div className="grid gap-6 lg:grid-cols-12 pt-4 border-t border-line items-start">
                <div className="lg:col-span-7 flex flex-col gap-3.5 text-base sm:text-lg leading-relaxed text-ink-secondary">
                  <p>
                    {aboutContent.whatIsSpark.paragraphs[0]}
                  </p>
                  <p>
                    We want to create a collaborative environment where students can explore ambitious ideas, work on practical hardware and software projects, master cutting-edge tools, and connect with peers and mentors across all departments.
                  </p>
                </div>

                <div className="lg:col-span-5 py-4 flex flex-col border-t border-line lg:border-t-0 lg:border-l lg:pl-6">
                  <span className="font-mono text-xs uppercase tracking-widest text-accent font-semibold block mb-1">
                    INSTITUTIONAL AFFILIATION
                  </span>
                  <h3 className="font-display text-base font-semibold text-ink">
                    {site.institution.name}
                  </h3>
                  <p className="font-mono text-xs text-ink-muted mt-0.5">
                    {site.institution.address}
                  </p>
                  <div className="mt-4 pt-3 border-t border-line/60 flex items-center justify-between text-xs text-ink-secondary">
                    <span>Student-Driven Society</span>
                    <span className="font-mono text-accent">Active 2026–27</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* ── 02. PHILOSOPHY PULL-QUOTE (Compact) ── */}
      <section className="py-8 sm:py-10 border-b border-line bg-base-deep/50">
        <Container>
          <ScrollReveal>
            <div className="mx-auto max-w-4xl text-center flex flex-col items-center gap-4">
              <span className="font-display text-4xl sm:text-5xl text-accent font-bold select-none leading-none opacity-70">
                “
              </span>
              <blockquote className="font-display text-xl sm:text-2xl lg:text-3xl font-semibold text-ink leading-snug tracking-tight">
                {aboutContent.quote.line1}{" "}
                <span className="text-accent">{aboutContent.quote.line2}</span>
              </blockquote>
              <span className="h-px w-12 bg-accent/40 mt-1" aria-hidden="true" />
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* ── 03. VISION & AIMS (PERFECT CENTERLINE ALIGNMENT) ── */}
      <section className="py-8 sm:py-12 border-b border-line">
        <Container>
          <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
            {/* Left Column: OUR VISION (5 Cols) */}
            <div className="lg:col-span-5 flex flex-col gap-4 lg:sticky lg:top-24">
              <ScrollReveal>
                <div className="py-2 flex flex-col gap-4">
                  <SectionEyebrow hairline>OUR VISION</SectionEyebrow>

                  <h2 className="font-display text-xl sm:text-2xl lg:text-3xl font-semibold text-ink leading-snug">
                    {aboutContent.vision.description}
                  </h2>

                  <div className="pt-4 border-t border-line">
                    <p className="font-mono text-xs text-accent uppercase tracking-widest">
                      RESEARCH • INNOVATION • COLLABORATION
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Right Column: WHAT WE AIM TO DO (7 Cols) */}
            <div className="lg:col-span-7 flex flex-col gap-4">
              <ScrollReveal delay={0.06}>
                <SectionEyebrow hairline>WHAT WE AIM TO DO</SectionEyebrow>
              </ScrollReveal>

              <div className="flex flex-col divide-y divide-line border-y border-line">
                {aboutContent.aim.points.map((point, index) => (
                  <ScrollReveal key={index} delay={0.04 * index}>
                    <div className="flex items-center gap-4 sm:gap-5 py-4 px-2 sm:px-3 transition-colors duration-200 hover:bg-surface/40">
                      {/* 01 Number */}
                      <span className="font-mono text-sm font-bold tracking-widest text-accent shrink-0 w-8 sm:w-10">
                        {(index + 1).toString().padStart(2, "0")}
                      </span>

                      {/* Icon Box */}
                      <div className="flex size-8 shrink-0 items-center justify-center rounded-sm border border-line bg-base text-accent">
                        <AimIcon index={index} />
                      </div>

                      {/* Text */}
                      <p
                        className="text-sm sm:text-base font-medium leading-relaxed flex-1 text-ink"
                        style={{ color: "var(--spark-ink, #f1f3f7)" }}
                      >
                        {point}
                      </p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── 04. CURIOSITY PRINCIPLE (Compact) ── */}
      <section className="py-8 sm:py-12 border-b border-line bg-base-deep/40">
        <Container>
          <ScrollReveal>
            <div className="grid gap-6 lg:grid-cols-12 items-center">
              <div className="lg:col-span-8 flex flex-col gap-3">
                <SectionEyebrow hairline>CORE PRINCIPLE</SectionEyebrow>
                <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-semibold text-ink leading-tight">
                  You don&apos;t need prior experience to start. You just need to be <span className="text-accent">curious.</span>
                </h3>
                <p className="text-sm sm:text-base text-ink-secondary leading-relaxed max-w-2xl">
                  {aboutContent.closing.line1} SPARK provides the mentorship, team environment, and hands-on guidance to help your ideas take shape.
                </p>
              </div>

              <div className="lg:col-span-4 flex flex-col gap-2 font-mono text-xs py-4 border-t border-line lg:border-t-0 lg:border-l lg:pl-6">
                <div className="flex items-center justify-between py-1.5 border-b border-line/60">
                  <span className="text-ink-secondary">Ideas</span>
                  <span className="text-accent font-semibold">Limitless</span>
                </div>
                <div className="flex items-center justify-between py-1.5 border-b border-line/60">
                  <span className="text-ink-secondary">Curiosity</span>
                  <span className="text-accent font-semibold">Endless</span>
                </div>
                <div className="flex items-center justify-between py-1.5">
                  <span className="text-ink-secondary">Impact</span>
                  <span className="text-accent font-semibold">Collective</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* ── 05. CLOSING CTA (Compact) ── */}
      <section className="py-8 sm:py-12">
        <Container>
          <ScrollReveal>
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 py-8 border-t border-line">
              <div className="flex flex-col gap-1.5 max-w-xl">
                <h3 className="font-display text-2xl sm:text-3xl font-semibold text-ink">
                  Different minds. Shared purpose. One <span className="text-accent">SPARK.</span>
                </h3>
                <p className="text-sm text-ink-secondary leading-relaxed">
                  Be part of a student community that learns, builds, and publishes the future.
                </p>
              </div>

              <Button href="/contact" variant="primary" size="lg" className="shrink-0 w-full md:w-auto">
                Join the Journey →
              </Button>
            </div>
          </ScrollReveal>
        </Container>
      </section>
    </main>
  );
}
