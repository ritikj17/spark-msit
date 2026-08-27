import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { Button } from "@/components/ui/Button";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { SocialCard } from "@/components/ui/SocialCard";
import { CheckItem } from "@/components/ui/CheckItem";
import { LocationGraphic } from "@/components/contact/LocationGraphic";
import { ContactForm } from "@/components/contact/ContactForm";
import { contactSocials, contactLocation } from "@/content/contact";

export const metadata: Metadata = {
  title: "Contact | SPARK MSIT",
  description: "Connect with SPARK MSIT, join the community, collaborate with the society, or visit us at Maharaja Surajmal Institute of Technology.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <main className="flex flex-col">
      {/* ── 01. HERO SECTION (Split Layout) ── */}
      <section className="relative overflow-hidden border-b border-line pt-28 pb-16 sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-28">
        <div
          className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_top_right,_rgba(240,177,63,0.06)_0%,_transparent_60%)]"
          aria-hidden="true"
        />

        <Container className="relative z-10">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
            {/* Left Column: Heading, Copy, & 3 Intent Blocks */}
            <div className="flex flex-col gap-6 lg:col-span-7">
              <ScrollReveal>
                <SectionEyebrow prefix="" className="text-accent tracking-[0.25em]">
                  CONTACT US //
                </SectionEyebrow>
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-ink leading-[1.02]">
                  Let&apos;s Connect.<br />
                  Let&apos;s Create <span className="text-accent">Impact.</span>
                </h1>
              </ScrollReveal>

              <ScrollReveal delay={0.15}>
                <div className="flex flex-col gap-3 text-base sm:text-lg leading-relaxed text-ink-secondary max-w-xl">
                  <p>
                    Have a question? Want to join us? Interested in collaborating with SPARK? Feel free to reach out to us.
                  </p>
                </div>
              </ScrollReveal>

              {/* 3 Intent Blocks */}
              <ScrollReveal delay={0.2}>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-4">
                  {/* Ask */}
                  <div className="flex flex-col gap-2 rounded-panel border border-line bg-surface/60 p-4 shadow-card">
                    <div className="flex size-9 items-center justify-center rounded-sm border border-line bg-base text-accent">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="size-5" aria-hidden="true">
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-display text-sm font-semibold text-ink">Ask</h4>
                      <p className="text-xs text-ink-secondary mt-0.5">We&apos;re here to answer.</p>
                    </div>
                  </div>

                  {/* Collaborate */}
                  <div className="flex flex-col gap-2 rounded-panel border border-line bg-surface/60 p-4 shadow-card">
                    <div className="flex size-9 items-center justify-center rounded-sm border border-line bg-base text-accent">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="size-5" aria-hidden="true">
                        <path d="m11 17 2 2a1 1 0 0 0 1.4 0l6.6-6.6a2 2 0 0 0 0-2.8l-1.6-1.6a2 2 0 0 0-2.8 0L13 11" />
                        <path d="m13 13-2-2a1 1 0 0 0-1.4 0L3 17.6a2 2 0 0 0 0 2.8l1.6 1.6a2 2 0 0 0 2.8 0L11 18" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-display text-sm font-semibold text-ink">Collaborate</h4>
                      <p className="text-xs text-ink-secondary mt-0.5">Let&apos;s build meaningful projects.</p>
                    </div>
                  </div>

                  {/* Join */}
                  <div className="flex flex-col gap-2 rounded-panel border border-line bg-surface/60 p-4 shadow-card">
                    <div className="flex size-9 items-center justify-center rounded-sm border border-line bg-base text-accent">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="size-5" aria-hidden="true">
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                        <circle cx="9" cy="7" r="4" />
                        <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-display text-sm font-semibold text-ink">Join</h4>
                      <p className="text-xs text-ink-secondary mt-0.5">Be part of our community.</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Right Column: Visit Us Card & Checklist */}
            <div className="lg:col-span-5">
              <ScrollReveal delay={0.25}>
                <div className="relative rounded-panel border border-line bg-surface p-6 sm:p-7 shadow-card">
                  {/* Visit Us Header */}
                  <div className="flex items-center gap-2 mb-4">
                    <SectionEyebrow prefix="">VISIT US</SectionEyebrow>
                  </div>

                  {/* Address with Location Pin */}
                  <div className="flex items-start gap-3.5 mb-6">
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-full border border-accent/40 bg-accent/10 text-accent">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="size-5" aria-hidden="true">
                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                    </div>
                    <div className="flex flex-col">
                      <h3 className="font-display text-base sm:text-lg font-semibold text-ink">
                        {contactLocation.institution}
                      </h3>
                      <p className="font-mono text-xs text-accent mt-0.5">
                        {contactLocation.address}
                      </p>
                    </div>
                  </div>

                  <div className="h-px w-full bg-line my-5" aria-hidden="true" />

                  {/* We're Here For Checklist */}
                  <div className="flex flex-col gap-3">
                    <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-muted">
                      WE&apos;RE HERE FOR
                    </span>
                    <div className="flex flex-col gap-2.5">
                      <CheckItem title="Event & Workshop Queries" />
                      <CheckItem title="Research & Collaboration" />
                      <CheckItem title="Partnerships & Outreach" />
                      <CheckItem title="General Inquiries" />
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </Container>
      </section>

      {/* ── 02. CONNECT WITH US ── */}
      <section className="py-[var(--spark-section-pad)] border-b border-line bg-base-deep/40">
        <Container>
          <ScrollReveal>
            <div className="mb-10 sm:mb-12">
              <SectionEyebrow prefix="" hairline className="text-accent tracking-[0.2em]">
                CONNECT WITH US
              </SectionEyebrow>
            </div>
          </ScrollReveal>

          <div className="grid gap-6 sm:grid-cols-3">
            <ScrollReveal delay={0.1}>
              <SocialCard
                platform="instagram"
                name="Instagram"
                link={contactSocials.instagram}
                description="Follow us for updates, event highlights and more!"
                ctaText="Follow Us →"
                className="h-full"
              />
            </ScrollReveal>

            <ScrollReveal delay={0.18}>
              <SocialCard
                platform="whatsapp"
                name="WhatsApp Community"
                link={contactSocials.whatsapp}
                description="Be a part of our WhatsApp community and stay in the loop!"
                ctaText="Join Now →"
                className="h-full"
              />
            </ScrollReveal>

            <ScrollReveal delay={0.26}>
              <SocialCard
                platform="linkedin"
                name="LinkedIn"
                link={contactSocials.linkedin}
                description="Connect with us on LinkedIn and explore our journey."
                ctaText="Connect →"
                className="h-full"
              />
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* ── 03. SEND US A MESSAGE & FIND US HERE ── */}
      <section id="message-form" className="py-[var(--spark-section-pad)] border-b border-line">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
            {/* Left: SEND US A MESSAGE (7 Cols) */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              <ScrollReveal>
                <SectionEyebrow prefix="">SEND US A MESSAGE</SectionEyebrow>
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <div className="rounded-panel border border-line bg-surface p-6 sm:p-8 shadow-card">
                  <ContactForm />
                </div>
              </ScrollReveal>
            </div>

            {/* Right: FIND US HERE (5 Cols) */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <ScrollReveal>
                <SectionEyebrow prefix="">FIND US HERE</SectionEyebrow>
              </ScrollReveal>

              <ScrollReveal delay={0.15}>
                <div className="flex flex-col gap-4">
                  <LocationGraphic
                    institution={contactLocation.institution}
                    address={contactLocation.address}
                  />

                  {/* Institutional note below map */}
                  <div className="rounded-sm border border-line bg-base/80 p-4 shadow-xs flex flex-col gap-1.5">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-accent">
                      CONNECT DIRECTLY
                    </span>
                    <p className="text-xs text-ink-secondary leading-relaxed">
                      Reach out through our verified WhatsApp community or Instagram for the fastest response to questions and collaboration proposals.
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </Container>
      </section>

      {/* ── 04. CLOSING CTA ── */}
      <section className="py-[var(--spark-section-pad)]">
        <Container>
          <ScrollReveal>
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 rounded-panel border border-line bg-surface p-6 sm:p-8 md:p-10 shadow-card">
              <div className="flex items-center gap-4">
                <div
                  className="flex size-14 shrink-0 items-center justify-center rounded-full border border-accent/40 bg-accent/10 text-accent shadow-glow"
                  aria-hidden="true"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="size-7">
                    <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
                    <path d="M9 18h6M10 22h4" />
                  </svg>
                </div>

                <div>
                  <h3 className="font-display text-lg sm:text-xl font-semibold text-ink">
                    Have an <span className="text-accent">idea?</span> We&apos;d love to hear it.
                  </h3>
                  <p className="text-xs sm:text-sm text-ink-secondary mt-1">
                    Your curiosity could be the next big <span className="text-accent font-medium">spark ⚡</span>
                  </p>
                </div>
              </div>

              <Button href="#message-form" variant="outline-accent" size="lg" className="shrink-0 w-full md:w-auto">
                Share Your Idea →
              </Button>
            </div>
          </ScrollReveal>
        </Container>
      </section>
    </main>
  );
}
