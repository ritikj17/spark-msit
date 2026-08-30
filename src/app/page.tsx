import type { Metadata } from "next";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { HeroMount } from "@/components/three/HeroMount";
import { Button } from "@/components/ui/Button";
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

function ConnectStrip() {
  return (
    <div className="flex flex-wrap items-center gap-3 pt-2 text-sm text-ink-muted">
      <span className="font-mono text-xs uppercase tracking-widest text-accent font-semibold">CONNECT</span>
      <span className="h-3 w-px bg-line" aria-hidden="true" />
      <div className="flex items-center gap-2.5">
        {Object.entries(site.socials).map(([platform, link]) => (
          <a
            key={platform}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.label}
            className="group flex size-8 items-center justify-center rounded-sm border border-line bg-surface/60 text-ink-secondary transition-all duration-200 hover:border-accent hover:bg-base-deep hover:text-accent"
          >
            <SocialIcon platform={platform as "instagram" | "whatsapp" | "linkedin"} className="size-3.5" />
          </a>
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  const featuredPillars = whatWeDo.slice(0, 2);
  const companionPillars = whatWeDo.slice(2);

  return (
    <div className="flex flex-col">
      {/* ── 01. HERO SECTION ── */}
      <section
        id="hero"
        className="relative min-h-[calc(100svh-5rem)] overflow-hidden border-b border-line flex items-center"
      >
        {/* 3D Visual Sphere - Absolute Background */}
        <div className="absolute inset-0 z-0">
          <HeroMount className="h-full w-full" />
        </div>

        {/* Hero Content - Overlay */}
        <Container className="relative z-10 w-full pt-20 pb-10 sm:pt-24 sm:pb-12 lg:pt-0 lg:pb-0 pointer-events-none">
          <div className="max-w-2xl flex flex-col gap-5 sm:gap-6 lg:py-24">
            <ScrollReveal>
              <div className="flex items-center gap-3">
                <span className="size-2 rounded-full bg-accent animate-pulse" aria-hidden="true" />
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent font-semibold">
                  STUDENT RESEARCH & INNOVATION SOCIETY
                </span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.06}>
              <div className="flex flex-col gap-2.5">
                <div className="flex flex-col">
                  <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight text-ink leading-[1.02]">
                    {site.name}
                  </h1>
                  <p className="font-mono text-xs uppercase tracking-[0.22em] text-ink-muted mt-1">
                    Research. Collaborate. Discover.
                  </p>
                </div>

                <p className="font-display text-2xl sm:text-3xl lg:text-4xl text-ink leading-snug font-medium mt-1">
                  Where curiosity meets <br className="hidden sm:inline" />
                  <span className="text-accent">real-world creation.</span>
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="flex flex-col gap-2 text-base sm:text-lg max-w-lg leading-relaxed text-ink-secondary">
                <p>
                  We bring together engineering students at MSIT to explore ambitious questions, build practical hardware and software solutions, and create tangible research impact.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.14}>
              <div className="flex flex-col sm:flex-row gap-3 pt-1 pointer-events-auto">
                <Button href="/about" variant="primary" size="lg" className="w-full sm:w-auto">
                  Explore Society →
                </Button>
                <Button
                  href="#pillars"
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-base/50 backdrop-blur-sm border-line hover:border-accent"
                >
                  <span>Our Pillars</span>
                  <svg
                    viewBox="0 0 16 16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="size-3.5 text-accent shrink-0"
                    aria-hidden="true"
                  >
                    <path d="M3 6l5 5 5-5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Button>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.18}>
              <div className="pointer-events-auto">
                <ConnectStrip />
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* ── 02. MANIFESTO / WHO WE ARE (Compact) ── */}
      <section id="who-we-are" className="py-8 sm:py-12 bg-base-deep/40 border-b border-line relative overflow-hidden">
        <Container>
          <ScrollReveal>
            <div className="flex flex-col gap-6 max-w-5xl">
              <SectionEyebrow hairline>ABOUT OUR PURPOSE</SectionEyebrow>

              <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-ink leading-[1.2]">
                We believe engineering education reaches its highest potential when students have the freedom, mentorship, and peer community to build <span className="text-accent">real things.</span>
              </h2>

              <div className="grid gap-6 md:grid-cols-2 pt-4 border-t border-line text-base sm:text-lg leading-relaxed text-ink-secondary">
                <p>
                  Through student-led research initiatives, experimental prototyping, and interdisciplinary collaboration, SPARK bridges the gap between academic theory and practical innovation.
                </p>
                <p>
                  Whether formulating novel research questions, designing custom hardware, or organizing technical workshops, our members gain the confidence and competence to lead in their fields.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* ── 03. WHAT WE DO — BALANCED EDITORIAL SPREAD ── */}
      <section id="pillars" className="py-8 sm:py-12 border-b border-line">
        <Container>
          <ScrollReveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 pb-4 border-b border-line">
              <div className="flex flex-col gap-1.5 max-w-xl">
                <SectionEyebrow hairline>THE FIVE PILLARS</SectionEyebrow>
                <h2 className="font-display text-2xl sm:text-3xl font-semibold tracking-tight text-ink">
                  What We Do
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-ink-secondary max-w-md">
                Five interconnected focus areas guiding our workshops, projects, and academic publications.
              </p>
            </div>
          </ScrollReveal>

          {/* Row 1: Featured 2 Wide Cards (Equal Heights & Padding) */}
          <div className="grid gap-x-8 gap-y-2 md:grid-cols-2 mb-2 items-stretch">
            {featuredPillars.map((pillar, index) => (
              <ScrollReveal key={pillar.id} delay={index * 0.08} className="h-full">
                <div className="group relative h-full flex flex-col justify-between py-6 sm:py-8 border-t border-line transition-colors hover:border-accent/40">
                  <div className="flex flex-col gap-5">
                    <div className="flex items-center justify-between">
                      <div className="flex size-11 items-center justify-center rounded-sm border border-line text-accent">
                        <PillarIcon id={pillar.id} className="size-5" />
                      </div>
                      <span className="font-mono text-xs uppercase tracking-widest text-accent font-semibold">
                        PILLAR 0{index + 1}
                      </span>
                    </div>

                    <div className="flex flex-col gap-2.5">
                      <h3 className="font-display text-xl sm:text-2xl font-semibold text-ink">
                        {pillar.title}
                      </h3>
                      <p className="text-base text-ink-secondary leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 pt-3 border-t border-line/60 flex items-center justify-between text-xs font-mono text-ink-muted">
                    <span>CORE DISCIPLINE</span>
                    <span className="text-accent uppercase">ACTIVE INITIATIVE</span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Row 2: 3 Supporting Cards */}
          <div className="grid gap-x-8 gap-y-2 sm:grid-cols-2 lg:grid-cols-3">
            {companionPillars.map((pillar, index) => (
              <ScrollReveal key={pillar.id} delay={0.1 + index * 0.06} className="h-full">
                <div className="group h-full flex flex-col justify-between py-6 border-t border-line transition-colors hover:border-accent/40">
                  <div className="flex flex-col gap-3.5">
                    <div className="flex items-center justify-between">
                      <div className="flex size-9 items-center justify-center rounded-sm border border-line text-accent">
                        <PillarIcon id={pillar.id} className="size-4" />
                      </div>
                      <span className="font-mono text-xs uppercase tracking-widest text-accent font-semibold">
                        PILLAR 0{index + 3}
                      </span>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <h3 className="font-display text-lg font-semibold text-ink">
                        {pillar.title}
                      </h3>
                      <p className="text-sm text-ink-secondary leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 pt-3 flex items-center justify-between text-[11px] font-mono text-ink-muted">
                    <span>FOCUS AREA</span>
                    <span className="text-accent uppercase">ACTIVE</span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ── 04. FINAL CALL TO ACTION (Compact) ── */}
      <section id="cta" className="py-8 sm:py-12 bg-base-deep/40">
        <Container>
          <ScrollReveal>
            <div className="mx-auto max-w-4xl py-10 border-y border-line text-center">
              <div className="flex flex-col items-center gap-5">
                <SectionEyebrow>BE PART OF SPARK</SectionEyebrow>

                <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-ink max-w-2xl leading-tight">
                  Bring your curiosity. Find your <span className="text-accent">SPARK.</span>
                </h2>

                <p className="max-w-xl text-base text-ink-secondary leading-relaxed">
                  Join our student-driven society to research, innovate, and collaborate on meaningful engineering projects at MSIT.
                </p>

                <div className="flex flex-wrap justify-center gap-3 pt-1">
                  <Button href="/contact" variant="primary" size="lg">
                    Join SPARK →
                  </Button>
                  <Button href="/about" variant="outline" size="lg">
                    Learn More About Us
                  </Button>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </section>
    </div>
  );
}
