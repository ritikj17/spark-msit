import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { Button } from "@/components/ui/Button";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { PortraitCard } from "@/components/team/PortraitCard";
import { SparkImage } from "@/components/shared/SparkImage";
import { faculty, executivePanel, departments } from "@/content/team";

export const metadata: Metadata = {
  title: "Team | SPARK MSIT",
  description: "Meet the faculty, executive panel and student teams behind SPARK MSIT.",
  alternates: { canonical: "/team" },
};

function MemberCard({
  name,
  role,
  photo,
  status,
}: {
  name: string | null;
  role: string | null;
  photo?: string | null;
  status: string;
}) {
  const isPending = status === "pending" || !name || name.includes("Deputy Head — [ ]") || name === "Deputy Head";

  return (
    <div
      className={`group flex flex-col justify-between transition-colors ${
        isPending ? "opacity-60 grayscale" : ""
      }`}
    >
      {/* Level 3 Photo Container (Compact size in strict decreasing order) */}
      <div className="relative w-full overflow-hidden rounded-sm border border-line/60 bg-base">
        {photo && !photo.startsWith("[SPARK-") ? (
          <SparkImage
            src={photo}
            alt={name ?? role ?? "Member"}
            aspectRatio="16 / 10"
            className="size-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div
            className="flex w-full flex-col items-center justify-center p-3 bg-gradient-to-b from-surface to-base-deep text-center"
            style={{ aspectRatio: "16 / 10" }}
          >
            <div className="flex size-7 items-center justify-center rounded-full border border-line bg-base text-accent mb-1">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                className="size-3.5"
                aria-hidden="true"
              >
                <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                <circle cx="9" cy="9" r="2" />
                <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
              </svg>
            </div>
            <span className="font-mono text-[8px] uppercase tracking-widest text-ink-muted">
              {isPending ? "DEPUTY HEAD — [ ]" : "INSERT IMAGE HERE"}
            </span>
          </div>
        )}
      </div>

      <div className="mt-2.5 flex flex-col">
        <span className="font-display text-sm font-semibold text-ink group-hover:text-accent transition-colors">
          {isPending ? "Deputy Head — [ ]" : name}
        </span>
        <span className="font-mono text-xs text-accent mt-0.5">
          {role ?? "Core Member"}
        </span>
      </div>
    </div>
  );
}

export default function TeamPage() {
  return (
    <main className="flex flex-col">
      {/* ── 01. EDITORIAL HERO (Compact vertical rhythm) ── */}
      <section className="relative border-b border-line pt-20 pb-8 sm:pt-24 sm:pb-10">
        <Container>
          <div className="flex flex-col gap-6">
            <ScrollReveal>
              <div className="flex flex-col gap-2 max-w-4xl">
                <SectionEyebrow hairline>SOCIETY ROSTER</SectionEyebrow>

                <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-ink leading-tight">
                  MEET OUR TEAM
                </h1>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.08}>
              <div className="grid gap-8 lg:grid-cols-12 items-center pt-6 border-t border-line">
                <p className="lg:col-span-6 text-base sm:text-lg leading-relaxed text-ink-secondary">
                  A collective of curious minds driven by purpose and innovation, collaborating across disciplines to build impactful engineering solutions and cultivate research excellence at MSIT.
                </p>

                <div className="lg:col-span-6 grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-6 pt-4 lg:pt-0 border-t border-line lg:border-t-0">
                  <div className="flex flex-col gap-1.5 border-l-2 border-accent pl-4">
                    <span className="font-display text-3xl font-bold text-ink">1</span>
                    <span className="font-mono text-[10px] uppercase tracking-widest text-ink-muted">Faculty Guide</span>
                  </div>
                  <div className="flex flex-col gap-1.5 border-l border-line pl-4">
                    <span className="font-display text-3xl font-bold text-ink">3</span>
                    <span className="font-mono text-[10px] uppercase tracking-widest text-ink-muted">Executive Panel</span>
                  </div>
                  <div className="flex flex-col gap-1.5 border-l border-line pl-4">
                    <span className="font-display text-3xl font-bold text-ink">7</span>
                    <span className="font-mono text-[10px] uppercase tracking-widest text-ink-muted">Departments</span>
                  </div>
                  <div className="flex flex-col gap-1.5 border-l border-line pl-4">
                    <span className="font-display text-3xl font-bold text-ink">26–27</span>
                    <span className="font-mono text-[10px] uppercase tracking-widest text-ink-muted">Active Term</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* ── 02. LEVEL 1: FACULTY TEAM (FULL-WIDTH SPAN) ── */}
      <section className="py-8 sm:py-12 border-b border-line bg-base-deep/40">
        <Container>
          <div className="w-full">
            <ScrollReveal>
              <div className="mb-6">
                <SectionEyebrow hairline>GUIDANCE</SectionEyebrow>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.08}>
              <div className="py-6 flex flex-col md:flex-row gap-6 sm:gap-10 items-start md:items-center">
                {/* Level 1 Largest Image Container (Teacher / Faculty Advisor) */}
                <div className="relative w-full max-w-[280px] sm:max-w-[340px] md:max-w-[400px] shrink-0 overflow-hidden rounded-sm border border-line bg-base">
                  {faculty.photo && !faculty.photo.startsWith("[SPARK-") ? (
                    <SparkImage
                      src={faculty.photo}
                      alt={faculty.name}
                      aspectRatio="4 / 3"
                      className="size-full object-cover"
                    />
                  ) : (
                    <div
                      className="flex w-full flex-col items-center justify-center p-8 bg-gradient-to-b from-surface to-base-deep text-center"
                      style={{ aspectRatio: "4 / 3" }}
                    >
                      <div className="flex size-16 items-center justify-center rounded-full border border-accent/40 bg-accent/10 font-display text-2xl font-bold text-accent mb-2">
                        DY
                      </div>
                      <span className="font-mono text-xs uppercase tracking-widest text-ink-muted">
                        INSERT IMAGE HERE
                      </span>
                    </div>
                  )}
                </div>

                <div className="flex flex-col gap-3">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-1">
                    <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-semibold text-ink">
                      {faculty.name}
                    </h2>
                    <span className="font-mono text-xs uppercase tracking-wider text-accent px-2.5 py-1 rounded-sm border border-accent/30 bg-accent/10 w-fit">
                      Faculty Advisor
                    </span>
                  </div>
                  <div className="flex flex-col gap-4 text-base sm:text-lg text-ink-secondary leading-relaxed max-w-3xl">
                    <p>
                      Providing strategic mentorship, academic guidance, and institutional support to empower SPARK initiatives and research projects across Maharaja Surajmal Institute of Technology.
                    </p>
                    <p>
                      As a cornerstone of our technical community, she bridges the gap between the academic curriculum and practical innovation, ensuring our student teams have the resources, ethical grounding, and direction needed to excel in interdisciplinary engineering domains.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* ── 03. LEVEL 2: EXECUTIVE PANEL (MEDIUM UNIFORM PHOTOS) ── */}
      <section className="py-8 sm:py-12 border-b border-line">
        <Container>
          <ScrollReveal>
            <div className="mb-6 pb-4 border-b border-line flex flex-col sm:flex-row sm:items-end justify-between gap-3">
              <div>
                <SectionEyebrow hairline className="mb-1">LEADERSHIP</SectionEyebrow>
                <h2 className="font-display text-2xl sm:text-3xl font-semibold tracking-tight text-ink">
                  Executive Panel 2026–2027
                </h2>
              </div>
              <span className="font-mono text-xs uppercase tracking-widest text-accent font-semibold">
                ELECTED TERM
              </span>
            </div>
          </ScrollReveal>

          {/* Level 2: 3 Columns with Equal Dimensions */}
          <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {executivePanel.map((exec, index) => (
              <ScrollReveal key={exec.name} delay={0.06 * index} className="h-full">
                <PortraitCard
                  name={exec.name}
                  role={exec.role}
                  description={exec.description}
                  photo={exec.photo}
                  aspectRatio="4 / 3"
                  className="h-full"
                />
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ── 04. LEVEL 3: OUR DEPARTMENTS (SMALLER UNIFORM CARDS) ── */}
      <section id="departments" className="py-8 sm:py-12 border-b border-line bg-base-deep/30">
        <Container>
          <ScrollReveal>
            <div className="mb-8 pb-4 border-b border-line flex flex-col sm:flex-row sm:items-end justify-between gap-3">
              <div>
                <SectionEyebrow hairline className="mb-1">SOCIETY DIVISIONS</SectionEyebrow>
                <h2 className="font-display text-2xl sm:text-3xl font-semibold tracking-tight text-ink">
                  Our Departments
                </h2>
              </div>
              <p className="max-w-md text-xs sm:text-sm text-ink-secondary">
                Coordinated student teams driving research, technical development, workshops, and community outreach.
              </p>
            </div>
          </ScrollReveal>

          <div className="flex flex-col gap-10">
            {departments.map((dept, index) => (
              <ScrollReveal key={dept.id} delay={0.05 * index}>
                <div className="py-2 border-b border-line pb-10">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-3 border-b border-line/60">
                    <div>
                      <h3 className="font-display text-xl font-semibold text-ink">
                        {dept.name}
                      </h3>
                      <p className="text-xs sm:text-sm text-ink-secondary mt-1 max-w-2xl leading-relaxed">
                        {dept.description}
                      </p>
                    </div>
                    <span className="font-mono text-xs uppercase tracking-widest text-accent font-semibold shrink-0">
                      DEPT {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Level 3: Department Members Grid */}
                  <div className="grid gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
                    {dept.members.map((member, mIdx) => (
                      <MemberCard
                        key={mIdx}
                        name={member.name}
                        role={member.role}
                        photo={member.photo}
                        status={member.status ?? "active"}
                      />
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ── 05. CLOSING CTA ── */}
      <section className="py-8 sm:py-12">
        <Container>
          <ScrollReveal>
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 py-8 border-t border-line">
              <div className="flex flex-col gap-2 max-w-xl">
                <h3 className="font-display text-2xl sm:text-3xl font-semibold text-ink">
                  Different departments. Different skills. One <span className="text-accent">SPARK.</span>
                </h3>
                <p className="text-sm text-ink-secondary">
                  Join our open technical discussions, collaborative research sessions, and society recruitment.
                </p>
              </div>

              <Button href="/contact" variant="primary" size="lg" className="shrink-0 w-full md:w-auto">
                Join SPARK →
              </Button>
            </div>
          </ScrollReveal>
        </Container>
      </section>
    </main>
  );
}
