import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Home",
  description: site.description,
};

/**
 * Home — foundation placeholder. The full hero (3D SPARK universe, what we
 * do, closing CTA) ships in Stage 4. This proves routing, content sourcing
 * and the design system.
 */
export default function Home() {
  return (
    <section className="py-[var(--spark-section-pad)]">
      <Container>
        <div className="flex max-w-3xl flex-col gap-6">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">01 // HOME</p>
          <h1 className="font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
            {site.name} <span className="text-accent">⚡</span>
          </h1>
          <p className="text-lg leading-relaxed text-ink-secondary">{site.nameLong}</p>
          <p className="font-display text-xl text-ink sm:text-2xl">{site.tagline}</p>
          <p className="text-base leading-relaxed text-ink-secondary">{site.description}</p>
          <p className="font-mono text-xs tracking-wide text-ink-muted">
            Stage 1 foundation — the immersive 3D hero arrives in Stage 3.
          </p>
          <div className="mt-2 flex flex-wrap gap-3">
            <Button href="/about" variant="outline">
              Explore SPARK
            </Button>
            <Button href="/contact" variant="primary">
              Join SPARK
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}