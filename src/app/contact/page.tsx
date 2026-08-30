import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
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
      {/* ── 01. EDITORIAL HERO (Compact) ── */}
      <section className="relative border-b border-line pt-20 pb-8 sm:pt-24 sm:pb-10">
        <Container>
          <div className="flex flex-col gap-4 max-w-3xl">
            <ScrollReveal>
              <div className="flex flex-col gap-2">
                <SectionEyebrow hairline>COMMUNICATION & OUTREACH</SectionEyebrow>
                <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-ink leading-tight">
                  Let&apos;s start a conversation.
                </h1>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.08}>
              <p className="text-base sm:text-lg text-ink-secondary leading-relaxed pt-2 border-t border-line">
                Have a question about our research initiatives? Want to collaborate on an engineering project? Reach out through our direct community channels or send us a message below.
              </p>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* ── 02. DIRECT CHANNELS & INTERACTIVE FORM SPREAD ── */}
      <section id="message-form" className="py-8 sm:py-12 border-b border-line">
        <Container>
          <div className="grid gap-8 lg:grid-cols-12 items-start">
            {/* Left Column: Direct Community Hubs & Campus Location (5 Cols) */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <ScrollReveal>
                <div className="flex flex-col gap-3">
                  <SectionEyebrow hairline>OFFICIAL CHANNELS</SectionEyebrow>
                  <h2 className="font-display text-2xl font-semibold text-ink">
                    Connect Directly
                  </h2>
                </div>
              </ScrollReveal>

              <div className="flex flex-col border-y border-line divide-y divide-line">
                <ScrollReveal delay={0.06}>
                  <a href={contactSocials.instagram.url} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between py-4 hover:bg-surface/30 transition-colors">
                    <div className="flex items-center gap-4">
                      <div className="flex size-10 items-center justify-center rounded-full border border-line bg-surface text-accent group-hover:border-accent group-hover:bg-accent/10 transition-colors">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-4"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                      </div>
                      <div className="flex flex-col">
                        <span className="font-display text-base font-semibold text-ink group-hover:text-accent transition-colors">Instagram</span>
                        <span className="text-xs text-ink-secondary">{contactSocials.instagram.label}</span>
                      </div>
                    </div>
                    <span className="font-mono text-[10px] uppercase tracking-wider text-ink-muted group-hover:text-accent transition-colors">Follow →</span>
                  </a>
                </ScrollReveal>

                <ScrollReveal delay={0.12}>
                  <a href={contactSocials.whatsapp.url} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between py-4 hover:bg-surface/30 transition-colors">
                    <div className="flex items-center gap-4">
                      <div className="flex size-10 items-center justify-center rounded-full border border-line bg-surface text-accent group-hover:border-accent group-hover:bg-accent/10 transition-colors">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-4"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                      </div>
                      <div className="flex flex-col">
                        <span className="font-display text-base font-semibold text-ink group-hover:text-accent transition-colors">WhatsApp Community</span>
                        <span className="text-xs text-ink-secondary">Student Group</span>
                      </div>
                    </div>
                    <span className="font-mono text-[10px] uppercase tracking-wider text-ink-muted group-hover:text-accent transition-colors">Join →</span>
                  </a>
                </ScrollReveal>

                <ScrollReveal delay={0.18}>
                  <a href={contactSocials.linkedin.url} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between py-4 hover:bg-surface/30 transition-colors">
                    <div className="flex items-center gap-4">
                      <div className="flex size-10 items-center justify-center rounded-full border border-line bg-surface text-accent group-hover:border-accent group-hover:bg-accent/10 transition-colors">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-4"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                      </div>
                      <div className="flex flex-col">
                        <span className="font-display text-base font-semibold text-ink group-hover:text-accent transition-colors">LinkedIn</span>
                        <span className="text-xs text-ink-secondary">Professional Network</span>
                      </div>
                    </div>
                    <span className="font-mono text-[10px] uppercase tracking-wider text-ink-muted group-hover:text-accent transition-colors">Connect →</span>
                  </a>
                </ScrollReveal>
              </div>

              {/* Campus Location */}
              <ScrollReveal delay={0.22}>
                <div className="flex flex-col gap-3 pt-2">
                  <span className="font-mono text-xs uppercase tracking-widest text-accent font-semibold">
                    CAMPUS LOCATION
                  </span>
                  <div className="flex flex-col">
                    <h3 className="font-display text-base font-semibold text-ink">
                      {contactLocation.institution}
                    </h3>
                    <p className="text-xs text-ink-secondary leading-relaxed mt-1">
                      {contactLocation.address}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Right Column: Send A Message Form (7 Cols) */}
            <div className="lg:col-span-7 flex flex-col gap-4">
              <ScrollReveal>
                <div className="flex flex-col gap-2">
                  <SectionEyebrow hairline>SEND INQUIRY</SectionEyebrow>
                  <h2 className="font-display text-2xl font-semibold text-ink">
                    Drop Us A Note
                  </h2>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <div className="py-6 border-t border-line">
                  <ContactForm />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
