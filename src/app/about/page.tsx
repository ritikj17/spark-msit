import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { Button } from "@/components/ui/Button";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { SparkImage } from "@/components/shared/SparkImage";
import { aboutContent } from "@/content/about";

export const metadata: Metadata = {
  title: "About SPARK | SPARK MSIT",
  description: "Student Platform for Advancement, Research & Knowledge at Maharaja Surajmal Institute of Technology.",
  alternates: { canonical: "/about" },
};

/** Aim items paired with respective icons matching the reference */
function AimIcon({ index }: { index: number }) {
  switch (index) {
    case 0:
      // 01 - Research (Microscope)
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-5" aria-hidden="true">
          <path d="M6 18h8M3 22h18M14 22a7 7 0 1 0-7-7" />
          <path d="M9 14h2M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2" />
          <path d="M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3" />
        </svg>
      );
    case 1:
      // 02 - Ideas & Projects (Lightbulb)
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-5" aria-hidden="true">
          <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
          <path d="M9 18h6M10 22h4" />
        </svg>
      );
    case 2:
      // 03 - Learn new skills (Tech / Laptop)
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-5" aria-hidden="true">
          <rect width="18" height="12" x="3" y="4" rx="2" />
          <path d="M2 20h20M9 10l2 2 4-4" />
        </svg>
      );
    case 3:
      // 04 - Connect mentors & peers (Collaboration / Group)
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-5" aria-hidden="true">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      );
    case 4:
      // 05 - Workshops & events (Calendar)
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-5" aria-hidden="true">
          <rect width="18" height="18" x="3" y="4" rx="2" />
          <path d="M16 2v4M8 2v4M3 10h18" />
        </svg>
      );
    case 5:
    default:
      // 06 - Document and showcase (Document)
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-5" aria-hidden="true">
          <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
          <line x1="10" y1="9" x2="8" y2="9" />
        </svg>
      );
  }
}

export default function AboutPage() {
  return (
    <main className="flex flex-col">
      {/* ── 01. HERO SECTION (Split Layout) ── */}
      <section className="relative overflow-hidden border-b border-line pt-28 pb-16 sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-28">
        {/* Ambient subtle glow */}
        <div
          className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(240,177,63,0.08)_0%,_transparent_65%)]"
          aria-hidden="true"
        />

        <Container className="relative z-10">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            {/* Left Content */}
            <div className="flex flex-col gap-6 lg:col-span-6">
              <ScrollReveal>
                <SectionEyebrow prefix="" className="text-accent tracking-[0.25em]">
                  ABOUT US /////
                </SectionEyebrow>
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-ink leading-[1.02]">
                  What is<br />
                  <span className="text-accent">SPARK?</span>
                </h1>
              </ScrollReveal>

              <ScrollReveal delay={0.15}>
                <div className="flex flex-col gap-4 text-base sm:text-lg leading-relaxed text-ink-secondary">
                  <p>
                    {aboutContent.whatIsSpark.paragraphs[0]}
                  </p>
                  <p>
                    We want to create a space where students can{" "}
                    <span className="text-accent font-medium">explore</span> their{" "}
                    <span className="text-accent font-medium">ideas</span>, work on{" "}
                    <span className="text-accent font-medium">projects</span>,{" "}
                    <span className="text-accent font-medium">learn</span> new skills and{" "}
                    <span className="text-accent font-medium">connect</span> with people who share similar interests.
                  </p>
                </div>
              </ScrollReveal>
            </div>

            {/* Right Campus Frame with Technical Overlay */}
            <div className="lg:col-span-6">
              <ScrollReveal delay={0.2}>
                <div className="relative rounded-panel border border-line bg-surface p-4 sm:p-5 shadow-card">
                  {/* Top metadata tags */}
                  <div className="flex items-start justify-between gap-4 mb-3" aria-hidden="true">
                    <div className="flex flex-col font-mono text-[10px] text-ink-muted">
                      <span className="text-accent font-semibold tracking-wider">MSIT</span>
                      <span>C-4, JANAKPURI</span>
                      <span>NEW DELHI</span>
                    </div>
                    <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-ink-muted text-right">
                      CURIOSITY FUELS<br />DISCOVERY.
                    </span>
                  </div>

                  {/* Campus image with central reticle */}
                  <div className="relative overflow-hidden rounded-sm bg-base border border-line">
                    <SparkImage
                      src="[SPARK-CAMPUS]"
                      alt="Maharaja Surajmal Institute of Technology (MSIT) Campus"
                      aspectRatio="16 / 10"
                      className="transition-transform duration-700 ease-out hover:scale-105"
                    />

                    {/* Glowing reticle overlay in center */}
                    <div
                      className="pointer-events-none absolute inset-0 flex items-center justify-center"
                      aria-hidden="true"
                    >
                      <div className="relative flex size-20 sm:size-24 items-center justify-center rounded-full border border-accent/40 bg-base-deep/40 backdrop-blur-xs">
                        <div className="size-10 sm:size-12 rounded-full border border-accent/60 flex items-center justify-center">
                          <span className="text-accent font-bold text-lg drop-shadow-[0_0_8px_rgba(240,177,63,0.8)]">⚡</span>
                        </div>
                        {/* Crosshairs */}
                        <span className="absolute -top-3 h-3 w-px bg-accent/60" />
                        <span className="absolute -bottom-3 h-3 w-px bg-accent/60" />
                        <span className="absolute -left-3 h-px w-3 bg-accent/60" />
                        <span className="absolute -right-3 h-px w-3 bg-accent/60" />
                      </div>
                    </div>
                  </div>

                  {/* Bottom tagline */}
                  <div className="mt-3 text-right font-mono text-[9px] uppercase tracking-[0.2em] text-accent/90" aria-hidden="true">
                    RESEARCH. COLLABORATE. DISCOVER.
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </Container>
      </section>

      {/* ── 02. PHILOSOPHY / QUOTE SECTION ── */}
      <section className="py-[var(--spark-section-pad)] border-b border-line bg-base-deep/40">
        <Container>
          <ScrollReveal>
            <div className="relative mx-auto max-w-4xl rounded-panel border border-line bg-surface/70 p-8 sm:p-12 md:p-14 text-center shadow-card overflow-hidden">
              {/* Radial ambient glow */}
              <div
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(240,177,63,0.08)_0%,_transparent_70%)]"
                aria-hidden="true"
              />

              <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
                <span
                  className="font-display text-5xl sm:text-6xl text-accent font-bold select-none leading-none opacity-80"
                  aria-hidden="true"
                >
                  “
                </span>

                <div className="flex flex-col gap-2 max-w-2xl">
                  <p className="font-display text-xl sm:text-2xl md:text-3xl font-semibold text-ink leading-snug">
                    {aboutContent.quote.line1}
                  </p>
                  <p className="font-display text-xl sm:text-2xl md:text-3xl font-semibold text-ink leading-snug">
                    Sometimes, it starts with a{" "}
                    <span className="text-accent">simple question or curiosity.</span>
                  </p>
                </div>

                <span
                  className="font-display text-5xl sm:text-6xl text-accent font-bold select-none leading-none opacity-80"
                  aria-hidden="true"
                >
                  ”
                </span>
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* ── 03. OUR VISION & WHAT WE AIM TO DO (Two-Column Layout) ── */}
      <section className="py-[var(--spark-section-pad)] border-b border-line">
        <Container>
          <div className="grid gap-8 lg:grid-cols-12 lg:items-stretch">
            {/* Left Column: OUR VISION (4 Cols) */}
            <div className="lg:col-span-4 flex">
              <ScrollReveal className="w-full">
                <div className="flex h-full flex-col justify-between rounded-panel border border-line bg-surface/50 p-6 sm:p-8 shadow-card">
                  <div className="flex flex-col gap-6">
                    <SectionEyebrow prefix="">
                      {aboutContent.vision.heading.toUpperCase()}
                    </SectionEyebrow>

                    {/* Glowing Eye / Vision Icon */}
                    <div
                      className="flex size-16 items-center justify-center rounded-full border border-accent/40 bg-accent/10 text-accent shadow-glow"
                      aria-hidden="true"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="size-8"
                      >
                        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                        <circle cx="12" cy="12" r="3" />
                      </svg>
                    </div>

                    <p className="font-display text-2xl sm:text-3xl font-semibold leading-snug text-ink">
                      To build a strong culture of{" "}
                      <span className="text-accent font-semibold">research</span>,{" "}
                      <span className="text-accent font-semibold">innovation</span> and{" "}
                      <span className="text-accent font-semibold">collaboration</span> among students at MSIT.
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Right Column: WHAT WE AIM TO DO (8 Cols, 2x3 Grid) */}
            <div className="lg:col-span-8 flex">
              <ScrollReveal delay={0.1} className="w-full">
                <div className="flex h-full flex-col justify-between rounded-panel border border-line bg-surface/50 p-6 sm:p-8 shadow-card">
                  <div className="flex flex-col gap-6">
                    <SectionEyebrow prefix="">
                      {aboutContent.aim.heading.toUpperCase()}
                    </SectionEyebrow>

                    <div className="grid gap-6 sm:grid-cols-2">
                      {aboutContent.aim.points.map((point, index) => (
                        <div
                          key={index}
                          className="flex items-start gap-4 p-3 rounded-sm transition-colors duration-200 hover:bg-base/60"
                        >
                          <span className="font-mono text-xs uppercase tracking-wider text-accent shrink-0 pt-0.5">
                            {(index + 1).toString().padStart(2, "0")}
                          </span>

                          <div className="flex size-9 shrink-0 items-center justify-center rounded-full border border-line bg-base text-accent">
                            <AimIcon index={index} />
                          </div>

                          <p className="text-sm leading-relaxed text-ink-secondary">
                            {point}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </Container>
      </section>

      {/* ── 04. CURIOSITY BANNER ── */}
      <section className="py-[var(--spark-section-pad)] border-b border-line bg-base-deep/50 relative overflow-hidden">
        <Container>
          <ScrollReveal>
            <div className="relative rounded-panel border border-line bg-surface p-8 sm:p-12 shadow-card overflow-hidden">
              <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
                {/* Left: Horizon Glow Graphic (4 Cols) */}
                <div className="lg:col-span-4 flex items-center justify-center relative" aria-hidden="true">
                  <svg viewBox="0 0 200 140" fill="none" className="w-full max-w-[260px]">
                    <defs>
                      <radialGradient id="sunGlow" cx="50%" cy="100%" r="80%">
                        <stop offset="0%" stopColor="#f0b13f" stopOpacity="0.8" />
                        <stop offset="50%" stopColor="#f0b13f" stopOpacity="0.2" />
                        <stop offset="100%" stopColor="#f0b13f" stopOpacity="0" />
                      </radialGradient>
                    </defs>
                    <ellipse cx="100" cy="140" rx="90" ry="40" fill="url(#sunGlow)" />
                    <path d="M10 140 Q 100 60 190 140" stroke="#f0b13f" strokeWidth="1.5" />
                    <circle cx="100" cy="90" r="3" fill="#ffc25e" className="drop-shadow-[0_0_8px_rgba(240,177,63,1)]" />
                  </svg>
                </div>

                {/* Center: Curiosity Headline (5 Cols) */}
                <div className="lg:col-span-5 border-l-2 border-accent pl-5 sm:pl-6">
                  <p className="text-base sm:text-lg text-ink-secondary leading-relaxed">
                    {aboutContent.closing.line1}
                  </p>
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-ink mt-2">
                    You just need to be <span className="text-accent">curious. ⚡</span>
                  </h3>
                </div>

                {/* Right: Symbolic Metric Markers (3 Cols) */}
                <div className="lg:col-span-3 flex flex-col gap-3 font-mono text-xs border-t border-line pt-4 lg:border-t-0 lg:border-l lg:border-line lg:pl-6 lg:pt-0">
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-ink-secondary">Ideas</span>
                    <span className="text-accent font-semibold">∞ limitless</span>
                  </div>
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-ink-secondary">Curiosity</span>
                    <span className="text-accent font-semibold">∞ endless</span>
                  </div>
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-ink-secondary">Impact</span>
                    <span className="text-accent font-semibold">∞ together</span>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* ── 05. CLOSING CTA ── */}
      <section className="py-[var(--spark-section-pad)]">
        <Container>
          <ScrollReveal>
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 rounded-panel border border-line bg-surface p-6 sm:p-8 md:p-10 shadow-card">
              <div className="flex items-center gap-4">
                <div
                  className="flex size-12 shrink-0 items-center justify-center rounded-full border border-accent/40 bg-accent/10 text-accent"
                  aria-hidden="true"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="size-6">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>

                <div>
                  <h3 className="font-display text-lg sm:text-xl font-semibold text-ink">
                    Different minds. Shared purpose. One <span className="text-accent">SPARK. ⚡</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-ink-secondary mt-1">
                    Be part of a community that learns, builds and creates the future.
                  </p>
                </div>
              </div>

              <Button href="/contact" variant="outline-accent" size="lg" className="shrink-0 w-full md:w-auto">
                Join the Journey →
              </Button>
            </div>
          </ScrollReveal>
        </Container>
      </section>
    </main>
  );
}
