import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { Button } from "@/components/ui/Button";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { EventTypeBadge } from "@/components/ui/EventTypeBadge";
import { SparkImage } from "@/components/shared/SparkImage";
import { eventsHero, pastEvents, upcoming } from "@/content/events";

export const metadata: Metadata = {
  title: "Events | SPARK MSIT",
  description: "SPARK workshops, training sessions, webinars and hands-on learning activities.",
  alternates: { canonical: "/events" },
};

/** Deterministically sort events by newest first (March 2026 -> September 2025). */
const displayEvents = [
  ...pastEvents.filter((e) => e.id === "event-03"), // AR/VR (Mar 2026)
  ...pastEvents.filter((e) => e.id === "event-02"), // Soldering (Sep 2025)
  ...pastEvents.filter((e) => e.id === "event-01"), // Financial Literacy (Sep 2025)
];

function getEventMetadata(id: string) {
  switch (id) {
    case "event-03":
      return {
        category: "WORKSHOP",
        year: "2026",
        month: "MARCH",
        date: "MAR 2026",
      };
    case "event-02":
      return {
        category: "WORKSHOP",
        year: "2025",
        month: "SEPTEMBER",
        date: "SEP 2025",
      };
    case "event-01":
    default:
      return {
        category: "WEBINAR",
        year: "2025",
        month: "SEPTEMBER",
        date: "SEP 2025",
      };
  }
}

export default function EventsPage() {
  return (
    <main className="flex flex-col">
      {/* ── 01. EDITORIAL HERO (Compact) ── */}
      <section className="relative border-b border-line pt-20 pb-8 sm:pt-24 sm:pb-10">
        <Container>
          <div className="flex flex-col gap-5 max-w-4xl">
            <ScrollReveal>
              <div className="flex flex-col gap-2">
                <SectionEyebrow hairline>ACTIVITY ARCHIVE</SectionEyebrow>

                <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-ink leading-tight">
                  Workshops, masterclasses, and hands-on sessions.
                </h1>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.08}>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-line text-base sm:text-lg leading-relaxed text-ink-secondary">
                <p className="max-w-2xl">
                  {eventsHero.paragraphs[0]} We organize interactive technical sessions, fabrication workshops, and guest lectures to give students practical engineering experience.
                </p>
                <div className="flex items-center gap-3 shrink-0 font-mono text-xs text-accent">
                  <span>3 PAST SESSIONS</span>
                  <span className="h-3 w-px bg-line" />
                  <span>2025–2026</span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* ── 02. CHRONOLOGICAL ARCHIVE TIMELINE (Compact) ── */}
      <section id="archive" className="py-8 sm:py-12 border-b border-line">
        <Container>
          <ScrollReveal>
            <div className="mb-6 pb-3 border-b border-line flex items-center justify-between">
              <SectionEyebrow hairline>CURATED SESSIONS</SectionEyebrow>
              <span className="font-mono text-xs uppercase tracking-widest text-ink-muted">CHRONOLOGICAL ORDER</span>
            </div>
          </ScrollReveal>

          <div className="flex flex-col border-b border-line">
            {displayEvents.map((event, index) => {
              const meta = getEventMetadata(event.id);
              const descriptions = event.description.split("\n\n");

              return (
                <ScrollReveal key={event.id} delay={index * 0.08}>
                  <article className="py-6 sm:py-8 border-t border-line group transition-colors hover:border-accent/40">
                    <div className="grid gap-6 lg:grid-cols-12 items-start">
                      {/* Left Column: Dedicated Event Image Container (5 Cols) */}
                      <div className="lg:col-span-5 flex flex-col gap-2.5">
                        <div className="relative w-full overflow-hidden rounded-sm border border-line bg-base shadow-sm">
                          <SparkImage
                            src={event.cover}
                            alt={event.title}
                            aspectRatio="16 / 10"
                            className="object-cover size-full"
                          />
                        </div>
                      </div>

                      {/* Right Column: Event Information (7 Cols) */}
                      <div className="lg:col-span-7 flex flex-col gap-3">
                        {/* Date & Category Badges */}
                        <div className="flex flex-wrap items-center gap-2.5">
                          <div className="flex items-center gap-2">
                            <span className="font-mono text-xs font-bold uppercase tracking-wider text-accent">
                              {meta.year}
                            </span>
                            <span className="h-3 w-px bg-line" aria-hidden="true" />
                            <span className="font-mono text-xs font-semibold uppercase tracking-wider text-ink">
                              {meta.month}
                            </span>
                          </div>
                          <EventTypeBadge type={meta.category}>
                            {meta.category}
                          </EventTypeBadge>
                        </div>

                        {/* Title */}
                        <h2 className="font-display text-xl sm:text-2xl font-semibold tracking-tight text-ink group-hover:text-accent transition-colors duration-200">
                          {event.title}
                        </h2>

                        {/* Descriptions */}
                        <div className="flex flex-col gap-2.5 text-sm sm:text-base text-ink-secondary leading-relaxed">
                          {descriptions.map((para, pIdx) => (
                            <p key={pIdx}>{para}</p>
                          ))}
                        </div>

                        {/* Topics */}
                        {event.topics && event.topics.length > 0 && (
                          <div className="flex flex-wrap items-center gap-2 pt-1 text-xs">
                            <span className="font-mono uppercase tracking-wider text-accent font-semibold mr-1">TOPICS:</span>
                            {event.topics.map((topic) => (
                              <span
                                key={topic}
                                className="px-2.5 py-0.5 rounded-sm border border-line bg-base font-mono text-xs text-ink-secondary"
                              >
                                {topic}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </article>
                </ScrollReveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ── 03. UPCOMING SESSIONS NOTICE (Compact) ── */}
      <section className="py-8 sm:py-12 bg-base-deep/40">
        <Container>
          <ScrollReveal>
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 py-8 border-t border-line">
              <div className="flex flex-col gap-1.5 max-w-xl">
                <SectionEyebrow hairline>UPCOMING ANNOUNCEMENTS</SectionEyebrow>
                <h3 className="font-display text-2xl sm:text-3xl font-semibold text-ink">
                  {upcoming.heading}
                </h3>
                <p className="text-sm sm:text-base text-ink-secondary leading-relaxed">
                  {upcoming.note}
                </p>
              </div>

              <Button href="/contact" variant="primary" size="lg" className="shrink-0 w-full md:w-auto">
                Get Notified →
              </Button>
            </div>
          </ScrollReveal>
        </Container>
      </section>
    </main>
  );
}
