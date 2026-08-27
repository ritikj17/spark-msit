import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { Button } from "@/components/ui/Button";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { SparkImage } from "@/components/shared/SparkImage";
import { StatBlock } from "@/components/ui/StatBlock";
import { PortraitCard } from "@/components/team/PortraitCard";
import { DeptIcon } from "@/components/ui/DeptIcon";
import { faculty, executivePanel, departments } from "@/content/team";

export const metadata: Metadata = {
  title: "Team | SPARK MSIT",
  description: "Meet the faculty, executive panel and student teams behind SPARK MSIT.",
  alternates: { canonical: "/team" },
};

export default function TeamPage() {
  return (
    <main className="flex flex-col">
      {/* ── 01. HERO SECTION ── */}
      <section className="relative overflow-hidden border-b border-line pt-28 pb-16 sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-28">
        <div
          className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_top_right,_rgba(240,177,63,0.06)_0%,_transparent_60%)]"
          aria-hidden="true"
        />

        <Container className="relative z-10">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            {/* Left Content */}
            <div className="flex flex-col gap-6 lg:col-span-7">
              <ScrollReveal>
                <SectionEyebrow prefix="" className="text-accent tracking-[0.25em]">
                  TEAM /////
                </SectionEyebrow>
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-ink leading-[1.02]">
                  Meet Our <span className="text-accent">Team</span>
                </h1>
              </ScrollReveal>

              <ScrollReveal delay={0.15}>
                <p className="max-w-xl text-base sm:text-lg leading-relaxed text-ink-secondary">
                  A group of curious minds, driven by passion and purpose, working together to create impact through research, innovation and collaboration.
                </p>
              </ScrollReveal>

              {/* 4 Stat Blocks */}
              <ScrollReveal delay={0.2}>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 pt-2">
                  <StatBlock
                    value="1"
                    label="Faculty Guide"
                    className="p-3.5 sm:p-4"
                  />
                  <StatBlock
                    value="3"
                    label="Core Leaders"
                    className="p-3.5 sm:p-4"
                  />
                  <StatBlock
                    value="7"
                    label="Departments"
                    className="p-3.5 sm:p-4"
                  />
                  <StatBlock
                    value="26–27"
                    label="Active Term"
                    className="p-3.5 sm:p-4"
                  />
                </div>
              </ScrollReveal>
            </div>

            {/* Right Team Silhouette Visual */}
            <div className="lg:col-span-5">
              <ScrollReveal delay={0.25}>
                <div className="relative rounded-panel border border-line bg-surface p-4 sm:p-5 shadow-card overflow-hidden">
                  <div className="relative overflow-hidden rounded-sm bg-base border border-line">
                    <SparkImage
                      src="[SPARK-TEAM-HERO-VISUAL]"
                      alt="SPARK MSIT Team Roster"
                      aspectRatio="4 / 3"
                      className="transition-transform duration-700 ease-out hover:scale-105"
                    />

                    {/* Glowing Aura Overlay in Center */}
                    <div
                      className="pointer-events-none absolute inset-0 flex items-center justify-center"
                      aria-hidden="true"
                    >
                      <div className="relative flex size-20 items-center justify-center rounded-full border border-accent/40 bg-base-deep/50 backdrop-blur-xs">
                        <span className="text-accent font-bold text-xl drop-shadow-[0_0_12px_rgba(240,177,63,0.9)]">⚡</span>
                        {/* Concentric subtle aura ring */}
                        <div className="absolute inset-0 -m-4 rounded-full border border-accent/20 animate-pulse" />
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </Container>
      </section>

      {/* ── 02. FACULTY & EXECUTIVE PANEL ── */}
      <section className="py-[var(--spark-section-pad)] border-b border-line bg-base-deep/40">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
            {/* Left: Faculty Guide (4 Cols) */}
            <div className="lg:col-span-4 flex flex-col gap-6">
              <ScrollReveal>
                <div className="flex items-center gap-2">
                  <span className="text-accent text-sm" aria-hidden="true">🎓</span>
                  <SectionEyebrow prefix="">FACULTY GUIDE</SectionEyebrow>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <PortraitCard
                  name={faculty.name}
                  role={faculty.role}
                  description="Guiding SPARK with experience, insight and constant support."
                  photo={faculty.photo}
                  aspectRatio="1 / 1"
                  className="bg-surface/80"
                />
              </ScrollReveal>
            </div>

            {/* Right: Executive Panel 2026–2027 (8 Cols) */}
            <div className="lg:col-span-8 flex flex-col gap-6">
              <ScrollReveal>
                <div className="flex items-center gap-2">
                  <span className="text-accent text-sm" aria-hidden="true">👑</span>
                  <SectionEyebrow prefix="">EXECUTIVE PANEL 2026–2027</SectionEyebrow>
                </div>
              </ScrollReveal>

              <div className="grid gap-5 sm:grid-cols-3">
                {executivePanel.map((member, i) => (
                  <ScrollReveal key={member.id} delay={0.1 + i * 0.08}>
                    <PortraitCard
                      name={member.name}
                      role={member.role}
                      description={member.description}
                      photo={member.photo}
                      aspectRatio="3 / 4"
                      className="h-full bg-surface/80"
                    />
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── 03. OUR DEPARTMENTS ── */}
      <section className="py-[var(--spark-section-pad)] border-b border-line">
        <Container>
          <ScrollReveal>
            <div className="mb-12 sm:mb-16">
              <SectionEyebrow prefix="" hairline className="text-accent tracking-[0.2em]">
                OUR DEPARTMENTS
              </SectionEyebrow>
            </div>
          </ScrollReveal>

          {/* Department Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {departments.map((dept, index) => {
              const isLastDept = index === departments.length - 1;

              return (
                <ScrollReveal
                  key={dept.id}
                  delay={index * 0.06}
                  className={isLastDept ? "lg:col-span-2" : ""}
                >
                  <article className="group flex h-full flex-col justify-between rounded-panel border border-line bg-surface/60 p-5 sm:p-6 shadow-card transition-all duration-300 hover:border-accent/40 hover:shadow-glow">
                    <div className="flex flex-col gap-5">
                      {/* Department Header */}
                      <div className="flex items-center justify-between gap-3 border-b border-line pb-4">
                        <div className="flex items-center gap-3">
                          <div className="flex size-9 items-center justify-center rounded-sm border border-line bg-base text-accent">
                            <DeptIcon dept={dept.id} className="size-5" />
                          </div>
                          <h2 className="font-display text-base sm:text-lg font-semibold tracking-tight text-ink group-hover:text-accent transition-colors duration-200">
                            {dept.name}
                          </h2>
                        </div>
                      </div>

                      {/* Members Roster in Department */}
                      <div className={`grid gap-3 ${dept.members.length > 2 ? "grid-cols-1 sm:grid-cols-3" : "grid-cols-1 sm:grid-cols-2"}`}>
                        {dept.members.map((member, mIdx) => (
                          <div
                            key={mIdx}
                            className={`flex flex-col items-center rounded-sm border border-line/60 bg-base/60 p-3 text-center transition-colors duration-200 ${
                              member.status === "pending" ? "border-dashed opacity-75" : "hover:border-line-strong"
                            }`}
                          >
                            <div className="relative mb-2.5 size-14 sm:size-16 overflow-hidden rounded-full border border-line bg-surface">
                              {member.status === "active" && member.photo ? (
                                <SparkImage
                                  src={member.photo}
                                  alt={member.name!}
                                  aspectRatio="1 / 1"
                                />
                              ) : (
                                <div className="flex size-full items-center justify-center text-ink-muted">
                                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="size-6" aria-hidden="true">
                                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                                    <circle cx="12" cy="7" r="4" />
                                  </svg>
                                </div>
                              )}
                            </div>
                            <span className="font-display text-xs sm:text-sm font-semibold text-ink leading-tight line-clamp-1">
                              {member.status === "active" ? member.name : "Position Open"}
                            </span>
                            <span className="font-mono text-[10px] uppercase tracking-wider text-accent mt-0.5 leading-tight">
                              {member.role}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Department Description */}
                      <p className="text-xs sm:text-sm leading-relaxed text-ink-secondary pt-1">
                        {dept.description}
                      </p>
                    </div>
                  </article>
                </ScrollReveal>
              );
            })}

            {/* Closing Quote Block (Pairs alongside Design & Videography in Row 3) */}
            <ScrollReveal delay={0.45} className="lg:col-span-1">
              <div className="flex h-full flex-col items-center justify-center text-center rounded-panel border border-line bg-surface/80 p-6 sm:p-8 shadow-card relative overflow-hidden">
                {/* Ambient Radial Glow */}
                <div
                  className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(240,177,63,0.08)_0%,_transparent_70%)]"
                  aria-hidden="true"
                />
                <span className="font-display text-4xl text-accent font-bold mb-2 select-none" aria-hidden="true">“</span>
                <p className="font-display text-xl sm:text-2xl font-semibold text-ink leading-snug">
                  Different departments.<br />
                  Different skills.<br />
                  <span className="text-accent">One SPARK. ⚡</span>
                </p>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* ── 04. BOTTOM CTA STRIP ── */}
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
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>

                <div>
                  <h3 className="font-display text-lg sm:text-xl font-semibold text-ink">
                    Want to be a part of this journey?
                  </h3>
                  <p className="text-xs sm:text-sm text-ink-secondary mt-1">
                    Explore opportunities. Learn. Collaborate. Create Impact.
                  </p>
                </div>
              </div>

              <Button href="/contact" variant="outline-accent" size="lg" className="shrink-0 w-full md:w-auto">
                Join SPARK →
              </Button>
            </div>
          </ScrollReveal>
        </Container>
      </section>
    </main>
  );
}
