import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { Button } from "@/components/ui/Button";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { EventTypeBadge } from "@/components/ui/EventTypeBadge";
import { SparkImage } from "@/components/shared/SparkImage";
import { EventCalendarGraphic } from "@/components/events/EventCalendarGraphic";
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
        year: 2026,
        month: "MAR",
      };
    case "event-02":
      return {
        category: "WORKSHOP",
        year: 2025,
        month: "SEP",
      };
    case "event-01":
    default:
      return {
        category: "WEBINAR",
        year: 2025,
        month: "SEP",
      };
  }
}

export default function EventsPage() {
  return (
    <main className="flex flex-col">
      {/* ── 01. HERO SECTION ── */}
      <section className="relative overflow-hidden border-b border-line pt-28 pb-16 sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-28">
        {/* Subtle background glow */}
        <div
          className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_top_left,_rgba(240,177,63,0.06)_0%,_transparent_60%)]"
          aria-hidden="true"
        />

        <Container className="relative z-10">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            {/* Hero Left Content */}
            <div className="flex flex-col gap-6 lg:col-span-6">
              <ScrollReveal>
                <SectionEyebrow prefix="" className="text-accent tracking-[0.25em]">
                  EVENTS /////
                </SectionEyebrow>
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-ink leading-[1.05]">
                  Learn.<br />
                  Explore.<br />
                  <span className="text-accent">Experience.</span>
                </h1>
              </ScrollReveal>

              <ScrollReveal delay={0.15}>
                <div className="flex flex-col gap-3.5 max-w-xl text-base sm:text-lg leading-relaxed text-ink-secondary">
                  {eventsHero.paragraphs.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </ScrollReveal>
            </div>

            {/* Hero Right Graphic & Side Pillars */}
            <div className="flex items-center justify-center lg:col-span-6 lg:justify-end gap-6 sm:gap-10">
              <ScrollReveal delay={0.2} className="w-full max-w-[420px]">
                <EventCalendarGraphic className="w-full" />
              </ScrollReveal>

              {/* Subtle decorative side list (Desktop only) */}
              <div
                className="hidden xl:flex flex-col items-center gap-3 border-l border-line/60 pl-6 text-ink-muted"
                aria-hidden="true"
              >
                <span className="font-mono text-[10px] uppercase tracking-[0.25em]">LEARN</span>
                <span className="h-2 w-px bg-line" />
                <span className="font-mono text-[10px] uppercase tracking-[0.25em]">CONNECT</span>
                <span className="h-2 w-px bg-line" />
                <span className="font-mono text-[10px] uppercase tracking-[0.25em]">COLLABORATE</span>
                <span className="h-2 w-px bg-line" />
                <span className="font-mono text-[10px] uppercase tracking-[0.25em]">GROW</span>
              </div>
            </div>
          </div>

          {/* Centered scroll indicator link */}
          <div className="mt-12 sm:mt-16 flex justify-center">
            <a
              href="#past-events"
              aria-label="Scroll to past events timeline"
              className="group flex size-9 items-center justify-center rounded-full border border-line bg-surface text-ink-muted transition-colors duration-200 hover:border-accent hover:text-accent"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="size-4 transition-transform duration-200 group-hover:translate-y-0.5"
                aria-hidden="true"
              >
                <path d="M12 5v14M19 12l-7 7-7-7" />
              </svg>
            </a>
          </div>
        </Container>
      </section>

      {/* ── 02. PAST EVENTS TIMELINE ── */}
      <section id="past-events" className="py-[var(--spark-section-pad)]">
        <Container>
          {/* Section Header with hairline */}
          <div className="mb-12 sm:mb-16">
            <SectionEyebrow prefix="//" hairline>
              PAST EVENTS
            </SectionEyebrow>
          </div>

          {/* Timeline List */}
          <div className="relative flex flex-col gap-12 sm:gap-16">
            {/* Vertical timeline connecting bar (hidden on very small screens) */}
            <div
              className="absolute left-[34px] sm:left-[45px] top-6 bottom-6 w-px bg-line/60 hidden md:block"
              aria-hidden="true"
            />

            {displayEvents.map((event, index) => {
              const meta = getEventMetadata(event.id);
              const descriptions = event.description.split("\n\n");

              return (
                <ScrollReveal key={event.id} delay={index * 0.1}>
                  <div className="relative flex flex-col md:flex-row items-start gap-6 lg:gap-10">
                    {/* Left Rail: Date Marker & Node Dot */}
                    <div className="flex items-center md:flex-col md:items-center shrink-0 gap-3 md:gap-2">
                      <div className="flex flex-col items-center justify-center rounded-sm border border-line bg-surface px-3 py-2 text-center min-w-[70px] sm:min-w-[80px] shadow-card">
                        <span className="font-mono text-[10px] font-medium uppercase tracking-wider text-ink-muted">
                          {meta.year}
                        </span>
                        <span className="font-mono text-sm sm:text-base font-bold uppercase tracking-wider text-accent leading-tight">
                          {meta.month}
                        </span>
                        <span className="font-mono text-[10px] text-ink-muted leading-tight">
                          {meta.year}
                        </span>
                      </div>

                      {/* Timeline node dot on vertical bar */}
                      <div
                        className="hidden md:flex size-2.5 rounded-full bg-accent shadow-glow"
                        aria-hidden="true"
                      />
                    </div>

                    {/* Right Card: Event Content & Visuals */}
                    <article className="group flex-1 w-full rounded-panel border border-line bg-surface/50 p-5 sm:p-6 lg:p-7 shadow-card transition-all duration-300 hover:border-accent/40 hover:shadow-glow">
                      <div className="grid gap-6 lg:grid-cols-12 lg:items-start">
                        {/* 1. Cover image (Left) */}
                        <div className="lg:col-span-4 overflow-hidden rounded-sm bg-base border border-line">
                          <SparkImage
                            src={event.cover}
                            alt={`Cover for ${event.title}`}
                            aspectRatio="4 / 3"
                            className="transition-transform duration-500 group-hover:scale-105"
                          />
                        </div>

                        {/* 2. Middle Content Details */}
                        <div className="lg:col-span-5 flex flex-col gap-3">
                          <div>
                            <EventTypeBadge type={meta.category}>
                              {meta.category}
                            </EventTypeBadge>
                            <h2 className="font-display text-xl sm:text-2xl font-semibold text-ink mt-2 tracking-tight group-hover:text-accent transition-colors duration-200">
                              {event.title}
                            </h2>
                          </div>

                          <div className="flex flex-col gap-2.5 text-sm leading-relaxed text-ink-secondary">
                            {descriptions.map((para, i) => (
                              <p key={i}>{para}</p>
                            ))}
                          </div>

                          {/* Topic Chips */}
                          {event.topics && event.topics.length > 0 && (
                            <div className="mt-2 flex flex-wrap items-center gap-2 text-xs text-ink-muted">
                              <span className="text-accent" aria-hidden="true">🏷</span>
                              {event.topics.map((topic, i) => (
                                <span key={topic} className="flex items-center gap-2">
                                  <span className="font-mono text-[11px] text-ink-secondary">{topic}</span>
                                  {i < event.topics.length - 1 && (
                                    <span className="text-line-strong" aria-hidden="true">•</span>
                                  )}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>

                        {/* 3. Right Thumbnail Gallery */}
                        {event.gallery && event.gallery.length > 0 && (
                          <div className="lg:col-span-3 flex flex-col gap-2.5 pt-1">
                            {event.gallery.map((gallerySrc, gIdx) => (
                              <div
                                key={gIdx}
                                className="overflow-hidden rounded-xs border border-line/70 bg-base transition-opacity duration-200 hover:opacity-100 opacity-85"
                              >
                                <SparkImage
                                  src={gallerySrc}
                                  alt={`${event.title} photo ${gIdx + 1}`}
                                  aspectRatio="16 / 9"
                                  className="transition-transform duration-300 hover:scale-105"
                                />
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </article>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ── 03. UPCOMING EVENTS ── */}
      <section className="py-[var(--spark-section-pad)] border-t border-line relative overflow-hidden bg-base-deep/60">
        <Container>
          {/* Section Header with hairline */}
          <div className="mb-8 sm:mb-10">
            <SectionEyebrow prefix="//" hairline>
              UPCOMING EVENTS
            </SectionEyebrow>
          </div>

          <ScrollReveal>
            <div className="relative flex flex-col md:flex-row items-center justify-between gap-8 rounded-panel border border-line bg-surface p-6 sm:p-8 md:p-10 shadow-card overflow-hidden">
              {/* Background ambient radial gold glow */}
              <div
                className="pointer-events-none absolute -left-20 -top-20 size-72 rounded-full bg-accent/5 blur-3xl"
                aria-hidden="true"
              />

              {/* Left Side: Upcoming Heading & Note */}
              <div className="relative z-10 flex flex-1 items-start gap-5">
                <div
                  className="flex size-14 sm:size-16 shrink-0 items-center justify-center rounded-full border border-accent/40 bg-accent/10 text-accent shadow-glow"
                  aria-hidden="true"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="size-7"
                  >
                    <rect width="18" height="18" x="3" y="4" rx="2" />
                    <path d="M16 2v4M8 2v4M3 10h18" />
                    <circle cx="8" cy="14" r="1" fill="currentColor" />
                    <circle cx="12" cy="14" r="1" fill="currentColor" />
                    <circle cx="16" cy="14" r="1" fill="currentColor" />
                    <circle cx="8" cy="18" r="1" fill="currentColor" />
                    <circle cx="12" cy="18" r="1" fill="currentColor" />
                  </svg>
                </div>

                <div className="flex flex-col gap-1.5">
                  <h3 className="font-display text-xl sm:text-2xl font-semibold text-ink leading-snug">
                    {upcoming.heading}
                  </h3>
                  <p className="font-display text-lg sm:text-xl font-bold text-accent">
                    {upcoming.note}
                  </p>
                </div>
              </div>

              {/* Right Side: Stay Updated Connect Box */}
              <div className="relative z-10 shrink-0 w-full md:w-auto rounded-sm border border-line bg-base/80 p-5 flex flex-col gap-3 shadow-xs">
                <div className="flex items-center gap-3">
                  <div className="flex size-8 items-center justify-center rounded-full border border-accent/40 bg-accent/10 text-accent">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="size-4"
                      aria-hidden="true"
                    >
                      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
                      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
                    </svg>
                  </div>
                  <h4 className="font-display text-sm font-semibold text-ink">
                    Want to stay updated?
                  </h4>
                </div>

                <p className="text-xs text-ink-secondary max-w-xs leading-relaxed">
                  Follow us on our social media and join our WhatsApp community.
                </p>

                <Button href="/contact" variant="outline-accent" size="sm" className="w-full mt-1">
                  Connect With Us →
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </section>
    </main>
  );
}
