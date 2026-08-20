"use client";

import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const steps = [
  { label: "CURIOSITY", text: "It starts with a question." },
  { label: "RESEARCH", text: "Explore how research works." },
  { label: "EXPLORATION", text: "Try something beyond class." },
  { label: "COLLABORATION", text: "Work with peers and mentors." },
  { label: "CREATION", text: "Turn ideas into real projects." },
  { label: "OPPORTUNITY", text: "Projects, publications, funding." },
];

export function MotionSection() {
  const reduced = useReducedMotion();

  return (
    <section className="py-16">
      <Container>
        <SectionHeader
          eyebrow="MOT-01 // MOTION"
          title="Motion & reduced-motion behavior"
          description="Scroll reveal orchestration, hover transitions and global reduced-motion handling."
        />

        <div className="mt-10 flex flex-col gap-10">
          <div className="flex items-center gap-3">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink-muted">Preference detected</p>
            <span className="flex items-center gap-2 rounded-sm border border-line px-2 py-1 font-mono text-[11px] text-ink-secondary">
              <span className={reduced ? "size-2 rounded-full bg-error" : "size-2 rounded-full bg-accent"} aria-hidden />
              prefers-reduced-motion: {reduced ? "reduce (static render)" : "no-preference (animations)"}
            </span>
          </div>

          <p className="text-sm leading-relaxed text-ink-muted">
            Scroll to reveal. When reduced motion is preferred, reveals render statically — no transforms.
            Hover transitions above are driven by CSS and are also disabled under reduced motion.
          </p>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {steps.map((step, index) => (
              <ScrollReveal key={step.label} delay={index * 0.08}>
                <Card className="flex h-full flex-col gap-2">
                  <p className="font-mono text-[11px] tracking-[0.2em] text-accent">{step.label}</p>
                  <p className="text-sm text-ink-secondary">{step.text}</p>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}