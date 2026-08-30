import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";

const specimen = "Where Curiosity Meets Creation.";
const meta = "SPARK-MSIT · 28.63°N 77.09°E · CORE-2026-27";

export function TypographySection() {
  return (
    <section className="py-16">
      <Container>
        <SectionHeader
          eyebrow="TYP-01 // TYPOGRAPHY"
          title="Typography"
          description="Display, body and mono/HUD systems across the SPARK hierarchy."
        />

        <div className="mt-10 flex flex-col gap-14">
          <div className="flex flex-col gap-3 overflow-hidden">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink-muted">Display — Space Grotesk</p>
            <p className="font-display text-5xl font-semibold tracking-tight text-ink sm:text-6xl lg:text-7xl">SPARK</p>
            <p className="font-display text-3xl font-semibold tracking-tight text-ink break-words sm:text-4xl lg:text-5xl">{specimen}</p>
            <p className="font-display text-xl font-semibold tracking-tight text-ink break-words sm:text-2xl lg:text-3xl">{specimen}</p>
          </div>

          <div className="flex flex-col gap-3">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink-muted">Body — Inter</p>
            <p className="text-lg leading-relaxed text-ink">Primary body copy, larger.</p>
            <p className="max-w-2xl text-base leading-relaxed text-ink">
              SPARK is a place to start. We bring together students who are interested in research,
              innovation, projects and learning. Through workshops, events, collaborations and research
              activities, we give students opportunities to explore their interests and try something new.
            </p>
            <p className="max-w-2xl text-sm leading-relaxed text-ink-secondary">Secondary body copy.</p>
            <p className="max-w-2xl text-sm leading-relaxed text-ink-muted">Muted / metadata copy.</p>
          </div>

          <div className="flex flex-col gap-3">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink-muted">Mono / HUD — JetBrains Mono</p>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">01 // RESEARCH</p>
            <p className="font-mono text-xs tracking-[0.2em] text-ink-secondary">{meta}</p>
            <p className="font-mono text-[11px] tracking-wide text-ink-muted">LAT: 28.6304°N · LON: 77.0863°E</p>
          </div>

          <div className="flex flex-col gap-3">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink-muted">
              Heading hierarchy — h1 reserved for page titles
            </p>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-ink">H2 — Section</h2>
            <h3 className="font-display text-2xl font-semibold tracking-tight text-ink">H3 — Subsection</h3>
            <h4 className="font-display text-xl font-semibold tracking-tight text-ink">H4 — Group</h4>
            <h5 className="font-display text-lg font-semibold tracking-tight text-ink">H5 — Item</h5>
            <h6 className="font-display text-base font-semibold tracking-tight text-ink">H6 — Micro</h6>
          </div>

          <div className="flex flex-col gap-3">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink-muted">Eyebrows, labels & metadata</p>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">02 // ABOUT · WHAT IS SPARK?</p>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink-secondary">EXECUTIVE PANEL — 2026–2027</p>
            <p className="font-mono text-xs tracking-wide text-ink-muted">September 2025 · Financial Literacy Webinar</p>
            <p className="font-mono text-xs tracking-wide text-ink-muted">PRESIDENT · ACTIVE</p>
          </div>
        </div>
      </Container>
    </section>
  );
}