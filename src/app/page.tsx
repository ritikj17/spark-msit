import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { HeroMount } from "@/components/three/HeroMount";
import { site } from "@/content/site";
import { whatWeDo } from "@/content/home";

/* ── Home Page ─────────────────────────────────────────────────────────── */

export const metadata: Metadata = {
  title: "Home",
  description: site.description,
};

export default function Home() {
  return (
    <>
      {/* ── HERO WITH 3D ─── */}
      <section className="relative py-[var(--spark-section-pad)] overflow-hidden">
        <div className="absolute inset-0 -z-10" aria-hidden="true">
          <HeroMount />
        </div>

        <Container>
          <div className="relative z-10 flex max-w-3xl flex-col gap-6">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
              01 // SPARK
            </p>
            <h1 className="font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl lg:text-6xl">
              {site.name} <span className="text-accent">⚡</span>
            </h1>
            <p className="text-lg leading-relaxed text-ink-secondary sm:text-xl">
              {site.nameLong}
            </p>
            <p className="font-display text-xl text-ink sm:text-2xl lg:text-3xl">
              {site.tagline}
            </p>
            <div className="mt-4 max-w-xl text-base leading-relaxed text-ink-secondary">
              <p>
                Have an idea you want to work on? Interested in research? Want to build
                something new or learn something beyond your classroom?
              </p>
              <p className="mt-3">
                SPARK is a place to start.
              </p>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="/about" variant="outline" size="lg">
                Explore SPARK
              </Button>
              <Button href="/contact" variant="primary" size="lg">
                Join SPARK
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* ── WHAT WE DO ─── */}
      <section className="py-[var(--spark-section-pad)] bg-base-deep/50">
        <Container>
          <SectionHeader
            eyebrow="02 // WHAT WE DO"
            title="What We Do"
            description="Five pillars that define the SPARK experience."
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whatWeDo.map((item) => (
              <Card key={item.id} interactive className="h-full flex flex-col">
                <div className="flex items-center gap-3 mb-3">
                  <span className="size-10 rounded-sm border border-line flex items-center justify-center bg-surface">
                    <span className="font-display text-xl text-accent">
                      {item.icon}
                    </span>
                  </span>
                  <h3 className="font-display text-lg font-semibold text-ink">
                    {item.title}
                  </h3>
                </div>
                <p className="text-sm text-ink-secondary flex-1">{item.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* ── CLOSING CTA ─── */}
      <section className="py-[var(--spark-section-pad)]">
        <Container>
          <div className="flex max-w-2xl flex-col items-center gap-6 text-center">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
              READY TO EXPLORE?
            </p>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              Bring your curiosity. Find your SPARK. <span className="text-accent">⚡</span>
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              <Button href="/about" variant="outline" size="lg">
                Learn More
              </Button>
              <Button href="/contact" variant="primary" size="lg">
                Get Started
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}