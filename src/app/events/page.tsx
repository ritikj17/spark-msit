import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { Button } from "@/components/ui/Button";
import { eventsHero, pastEvents, upcoming } from "@/content/events";
import { SparkImage } from "@/components/shared/SparkImage";

export const metadata: Metadata = {
  title: "Events | SPARK MSIT",
  description: "SPARK workshops, training sessions, webinars and hands-on learning activities.",
};

export default function EventsPage() {
  return (
    <main className="flex flex-col">
      {/* 01. Hero Section */}
      <section className="relative overflow-hidden border-b border-line pb-16 pt-32 sm:pb-24 sm:pt-40 lg:pb-32">
        {/* Subtle decorative background elements */}
        <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_top_left,_rgba(240,177,63,0.05)_0%,_transparent_60%)]" aria-hidden="true" />
        <div className="absolute left-4 lg:left-16 top-0 z-0 h-full w-px bg-gradient-to-b from-transparent via-line/50 to-transparent" aria-hidden="true" />
        
        <Container className="relative z-10">
          <ScrollReveal delay={0.1}>
            <div className="flex flex-col gap-6 max-w-3xl">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
                {eventsHero.eyebrow}
              </p>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-ink">
                {eventsHero.title}
              </h1>
              <div className="flex flex-col gap-4 mt-4">
                {eventsHero.paragraphs.map((p, i) => (
                  <p key={i} className="text-lg leading-relaxed text-ink-secondary">
                    {p}
                  </p>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* 02. Past Events Timeline */}
      <section className="py-[var(--spark-section-pad)]">
        <Container>
          <div className="flex flex-col gap-24 lg:gap-32">
            {pastEvents.map((event, index) => (
              <ScrollReveal key={event.id} delay={0.1}>
                <div className="grid gap-8 lg:grid-cols-12 lg:gap-16 items-start">
                  
                  {/* Timeline Marker & Info (Left Column) */}
                  <div className="lg:col-span-5 flex flex-col gap-6">
                    <div className="flex items-center gap-4">
                      <span className="font-mono text-2xl text-accent font-medium">
                        {(index + 1).toString().padStart(2, "0")}
                      </span>
                      <span className="h-px w-12 bg-line-strong" aria-hidden="true" />
                      <span className="font-mono text-sm tracking-wide text-ink-secondary">
                        {event.date}
                      </span>
                    </div>
                    
                    <h2 className="font-display text-3xl sm:text-4xl leading-tight text-ink font-semibold">
                      {event.title}
                    </h2>
                    
                    <div className="flex flex-col gap-4 mt-2">
                      {event.description.split("\n\n").map((para, i) => (
                        <p key={i} className="text-lg leading-relaxed text-ink-secondary">
                          {para}
                        </p>
                      ))}
                    </div>
                  </div>

                  {/* Visual Asset (Right Column) */}
                  <div className="lg:col-span-7 flex flex-col gap-6 mt-8 lg:mt-0">
                    <div className="relative group">
                      <SparkImage
                        src={event.cover}
                        alt={`Cover image for ${event.title}`}
                        aspectRatio="16 / 9"
                        containerClassName="overflow-hidden"
                        className="transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-accent/5 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none rounded-panel" aria-hidden="true" />
                    </div>
                    {/* Optional gallery snippet if needed, keeping it clean with just the cover for now or showing 1 gallery item */}
                    {event.gallery.length > 0 && (
                      <div className="hidden sm:grid grid-cols-2 gap-6">
                        {event.gallery.slice(0, 2).map((item, i) => (
                          <SparkImage
                            key={i}
                            src={item}
                            alt={`Gallery image ${i + 1} for ${event.title}`}
                            aspectRatio="3 / 2"
                            className="opacity-80 hover:opacity-100 transition-opacity duration-300"
                          />
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* 03. Upcoming Events */}
      <section className="relative overflow-hidden py-32 bg-base-deep border-t border-line">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_bottom,_#f0b13f_0%,_transparent_60%)]" aria-hidden="true" />
        <Container className="relative z-10 text-center">
          <ScrollReveal>
            <div className="mx-auto flex max-w-3xl flex-col items-center gap-8">
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl leading-tight text-ink font-semibold tracking-tight">
                {upcoming.heading}
              </h2>
              <p className="font-mono text-lg text-accent tracking-widest">
                {upcoming.note}
              </p>
              <Button href="/contact" variant="outline" size="lg" className="mt-4">
                GET IN TOUCH
              </Button>
            </div>
          </ScrollReveal>
        </Container>
      </section>
    </main>
  );
}