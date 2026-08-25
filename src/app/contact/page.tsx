import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { SocialIcon } from "@/components/ui/SocialIcon";
import { contactHero, contactSocials, contactLocation, contactClosing } from "@/content/contact";
import type { SocialPlatform } from "@/content/types";

export const metadata: Metadata = {
  title: "Contact | SPARK MSIT",
  description: "Connect with SPARK MSIT, join the community, collaborate with the society, or visit us at Maharaja Surajmal Institute of Technology.",
};

export default function ContactPage() {
  return (
    <main className="flex flex-col">
      {/* 01. Hero / Intro */}
      <section className="relative overflow-hidden border-b border-line pb-16 pt-32 sm:pb-24 sm:pt-40 lg:pb-32">
        <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_top_right,_rgba(240,177,63,0.05)_0%,_transparent_60%)]" aria-hidden="true" />
        <Container className="relative z-10">
          <ScrollReveal delay={0.1}>
            <div className="flex flex-col gap-6 max-w-2xl">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
                {contactHero.eyebrow}
              </p>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-ink">
                {contactHero.title}
              </h1>
              <div className="flex flex-col gap-2 mt-4 text-lg text-ink-secondary">
                {contactHero.questions.map((q, i) => (
                  <p key={i}>{q}</p>
                ))}
                <p className="mt-4 font-medium text-ink">{contactHero.invitation}</p>
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* 02. Connect With Us */}
      <section className="py-[var(--spark-section-pad)] border-b border-line bg-base-deep/30">
        <Container>
          <div className="grid gap-16 lg:grid-cols-[1fr_3fr]">
            <ScrollReveal>
              <h2 className="font-mono text-sm font-semibold tracking-widest text-accent uppercase">
                CONNECT WITH US
              </h2>
            </ScrollReveal>
            
            <div className="grid gap-8 sm:grid-cols-3">
              {[
                { platform: "instagram", name: "Instagram", action: "Visit Instagram" },
                { platform: "whatsapp", name: "WhatsApp", action: "Join Community" },
                { platform: "linkedin", name: "LinkedIn", action: "Visit LinkedIn" }
              ].map((item, index) => {
                const social = contactSocials[item.platform as keyof typeof contactSocials];
                return (
                  <ScrollReveal key={item.platform} delay={0.1 + index * 0.1}>
                    <a
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex flex-col items-start gap-4 p-8 rounded-panel border border-line bg-base transition-colors hover:border-accent/50 hover:bg-base-deep h-full"
                    >
                      <SocialIcon platform={item.platform as SocialPlatform} className="size-8 text-ink-secondary group-hover:text-accent transition-colors" />
                      <div className="flex flex-col gap-1 mt-4">
                        <h3 className="font-display text-xl font-medium text-ink">{item.name}</h3>
                        <p className="text-sm text-ink-secondary">{social.label}</p>
                      </div>
                      <div className="mt-auto pt-8 flex items-center gap-2 text-sm font-mono text-accent uppercase tracking-wider group-hover:translate-x-1 transition-transform">
                        <span>→</span>
                        <span>{item.action}</span>
                      </div>
                    </a>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      {/* 03. Visit Us */}
      <section className="py-[var(--spark-section-pad)] border-b border-line relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-accent/20 to-transparent ml-[10vw]" aria-hidden="true" />
        <Container className="relative z-10">
          <div className="grid gap-16 lg:grid-cols-[1fr_3fr]">
            <ScrollReveal>
              <h2 className="font-mono text-sm font-semibold tracking-widest text-accent uppercase">
                VISIT US
              </h2>
            </ScrollReveal>
            
            <ScrollReveal delay={0.1}>
              <div className="flex flex-col gap-2">
                <h3 className="font-display text-2xl sm:text-3xl font-medium text-ink">
                  {contactLocation.institution}
                </h3>
                <p className="text-lg text-ink-secondary font-mono">
                  {contactLocation.address}
                </p>
                <div className="mt-8 flex items-center gap-4">
                  <div className="size-2 rounded-full bg-accent animate-pulse" aria-hidden="true" />
                  <span className="font-mono text-xs text-ink-secondary uppercase tracking-widest">
                    HQ / Campus
                  </span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* 04. Closing CTA */}
      <section className="relative overflow-hidden py-32 sm:py-40 bg-base-deep text-center flex flex-col items-center justify-center min-h-[50vh]">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_#f0b13f_0%,_transparent_60%)]" aria-hidden="true" />
        <Container className="relative z-10 flex flex-col items-center gap-8">
          <ScrollReveal>
            <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-ink max-w-3xl mx-auto leading-tight">
              {contactClosing.idea}
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="font-mono text-sm sm:text-base text-accent uppercase tracking-[0.2em]">
              {contactClosing.mantra}
            </p>
          </ScrollReveal>
        </Container>
      </section>
    </main>
  );
}