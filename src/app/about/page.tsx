import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { Button } from "@/components/ui/Button";
import { aboutContent } from "@/content/about";

export const metadata: Metadata = {
  title: "About SPARK | SPARK MSIT",
  description: "Student Platform for Advancement, Research & Knowledge at Maharaja Surajmal Institute of Technology.",
};

export default function AboutPage() {
  return (
    <main className="flex flex-col">
      {/* 01. Hero Section */}
      <section className="relative overflow-hidden border-b border-line pb-16 pt-32 sm:pb-24 sm:pt-40 lg:pb-32">
        {/* Subtle technical background */}
        <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(240,177,63,0.06)_0%,_transparent_70%)]" aria-hidden="true" />
        <div className="absolute inset-x-0 bottom-0 z-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" aria-hidden="true" />
        <div className="absolute left-1/2 top-0 z-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-line/50 to-transparent" aria-hidden="true" />
        <Container className="relative z-10">
          <ScrollReveal delay={0.1}>
            <div className="flex flex-col items-center text-center gap-3 max-w-3xl mx-auto">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
                {aboutContent.hero.eyebrow}
              </p>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-ink">
                {aboutContent.hero.title}
              </h1>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* 02. What is SPARK? */}
      <section className="py-[var(--spark-section-pad)]">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_2fr] lg:gap-24">
            <ScrollReveal>
              <h2 className="font-mono text-sm font-semibold tracking-widest text-accent uppercase">
                {aboutContent.whatIsSpark.heading}
              </h2>
            </ScrollReveal>
            <div className="flex flex-col gap-8">
              {aboutContent.whatIsSpark.paragraphs.map((p, i) => (
                <ScrollReveal key={i} delay={0.1 * i}>
                  <p className={`text-lg leading-relaxed ${i === 0 ? "text-ink text-xl font-medium" : "text-ink-secondary"}`}>
                    {p}
                  </p>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* 03. Quote / Philosophy */}
      <section className="relative overflow-hidden py-32 bg-base-deep/50 border-y border-line">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_#f0b13f_0%,_transparent_100%)]" aria-hidden="true" />
        <Container className="relative z-10 text-center">
          <ScrollReveal>
            <div className="mx-auto flex max-w-4xl flex-col items-center gap-4">
              <span className="h-12 w-px bg-gradient-to-b from-transparent to-accent/50 mb-4" aria-hidden="true" />
              <p className="font-display text-2xl sm:text-4xl lg:text-5xl leading-tight text-ink font-semibold tracking-tight">
                {aboutContent.quote.line1}
              </p>
              <p className="font-display text-2xl sm:text-4xl lg:text-5xl leading-tight text-ink-secondary tracking-tight">
                {aboutContent.quote.line2}
              </p>
              <span className="h-12 w-px bg-gradient-to-b from-accent/50 to-transparent mt-4" aria-hidden="true" />
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* 04. Our Vision */}
      <section className="py-[var(--spark-section-pad)]">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[2fr_1fr] lg:gap-24 items-center">
            <ScrollReveal>
              <h2 className="font-mono text-sm font-semibold tracking-widest text-accent uppercase mb-6">
                {aboutContent.vision.heading}
              </h2>
              <p className="font-display text-3xl sm:text-4xl leading-tight text-ink">
                {aboutContent.vision.description}
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.2} className="hidden lg:flex justify-end">
              {/* Subtle decorative element for the vision section */}
              <div className="relative size-48 opacity-30">
                <div className="absolute inset-0 rounded-full border border-accent/40" />
                <div className="absolute inset-4 rounded-full border border-line" />
                <div className="absolute inset-1/2 size-2 -translate-x-1/2 -translate-y-1/2 bg-accent rounded-full shadow-glow" />
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* 05. What We Aim To Do */}
      <section className="py-[var(--spark-section-pad)] bg-base-deep/30">
        <Container>
          <ScrollReveal>
            <h2 className="font-mono text-sm font-semibold tracking-widest text-accent uppercase mb-12">
              {aboutContent.aim.heading}
            </h2>
          </ScrollReveal>
          <div className="flex flex-col">
            {aboutContent.aim.points.map((point, index) => (
              <ScrollReveal key={index} delay={0.1 * index}>
                <div className="group flex items-start sm:items-center gap-6 py-8 border-b border-line last:border-b-0 transition-colors hover:border-accent/30">
                  <span className="font-mono text-sm text-ink-secondary/50 group-hover:text-accent transition-colors">
                    {(index + 1).toString().padStart(2, "0")}
                  </span>
                  <p className="text-lg sm:text-xl text-ink-secondary group-hover:text-ink transition-colors leading-snug">
                    {point}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* 06. Closing Statement */}
      <section className="relative py-32 overflow-hidden border-t border-line">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(240,177,63,0.06)_0%,_transparent_70%)]" aria-hidden="true" />
        <Container className="relative z-10">
          <div className="max-w-3xl flex flex-col gap-8">
            <ScrollReveal>
              <h2 className="font-display text-3xl sm:text-5xl font-semibold leading-tight tracking-tight text-ink">
                {aboutContent.closing.line1}
                <br />
                <span className="text-accent">{aboutContent.closing.line2}</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <Button href="/contact" variant="primary" size="lg" className="mt-4">
                {aboutContent.closing.cta}
              </Button>
            </ScrollReveal>
          </div>
        </Container>
      </section>
    </main>
  );
}