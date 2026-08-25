import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { SparkImage } from "@/components/shared/SparkImage";
import { Placeholder } from "@/components/shared/Placeholder";
import { faculty, executivePanel, departments } from "@/content/team";

export const metadata: Metadata = {
  title: "Team | SPARK MSIT",
  description: "Meet the faculty, executive panel and student teams behind SPARK MSIT.",
};

export default function TeamPage() {
  return (
    <main className="flex flex-col">
      {/* 01. Hero Section */}
      <section className="relative overflow-hidden border-b border-line pb-16 pt-32 sm:pb-24 sm:pt-40 lg:pb-32">
        <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_top_right,_rgba(240,177,63,0.05)_0%,_transparent_60%)]" aria-hidden="true" />
        <div className="absolute right-1/4 top-0 z-0 h-full w-px bg-gradient-to-b from-transparent via-accent/30 to-transparent" aria-hidden="true" />
        <Container className="relative z-10">
          <ScrollReveal delay={0.1}>
            <div className="flex flex-col gap-4 max-w-3xl">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
                MEET OUR TEAM
              </p>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-ink">
                The people behind the SPARK.
              </h1>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* 02. Faculty Section */}
      <section className="py-[var(--spark-section-pad)] border-b border-line bg-base-deep/30">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_2fr]">
            <ScrollReveal>
              <h2 className="font-mono text-sm font-semibold tracking-widest text-accent uppercase">
                FACULTY TEAM
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div className="flex flex-col sm:flex-row gap-8 items-start sm:items-center">
                <div className="w-32 sm:w-40 shrink-0">
                  <SparkImage
                    src={faculty.photo}
                    alt={faculty.name}
                    aspectRatio="1 / 1"
                    containerClassName="rounded-full overflow-hidden border-2 border-line/50"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="font-display text-2xl sm:text-3xl font-semibold text-ink">
                    {faculty.name}
                  </h3>
                  <p className="font-mono text-sm text-accent">
                    {faculty.role}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* 03. Executive Panel */}
      <section className="py-[var(--spark-section-pad)] border-b border-line">
        <Container>
          <ScrollReveal>
            <h2 className="font-mono text-sm font-semibold tracking-widest text-accent uppercase mb-16">
              EXECUTIVE PANEL
            </h2>
          </ScrollReveal>
          <div className="flex flex-col gap-24">
            {executivePanel.map((member, index) => (
              <ScrollReveal key={member.id} delay={0.1}>
                <div className={`flex flex-col ${index % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"} gap-8 md:gap-16 lg:gap-24 items-center`}>
                  <div className="w-full md:w-5/12 shrink-0">
                    <SparkImage
                      src={member.photo}
                      alt={member.name}
                      aspectRatio="3 / 4"
                      containerClassName="overflow-hidden"
                    />
                  </div>
                  <div className="flex flex-col gap-4 w-full md:w-7/12">
                    <div className="flex flex-col gap-1 mb-2">
                      <h3 className="font-display text-3xl sm:text-4xl font-semibold text-ink">
                        {member.name}
                      </h3>
                      <p className="font-mono text-sm text-accent uppercase tracking-wide">
                        {member.role}
                      </p>
                    </div>
                    <p className="text-lg leading-relaxed text-ink-secondary">
                      {member.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* 04. Departments */}
      <section className="py-[var(--spark-section-pad)]">
        <Container>
          <ScrollReveal>
            <h2 className="font-mono text-sm font-semibold tracking-widest text-accent uppercase mb-16">
              DEPARTMENTS
            </h2>
          </ScrollReveal>
          
          <div className="flex flex-col gap-32">
            {departments.map((dept) => (
              <div key={dept.id} className="flex flex-col gap-12">
                <ScrollReveal>
                  <div className="flex flex-col gap-4 max-w-3xl">
                    <h3 className="font-display text-3xl font-semibold text-ink">
                      {dept.name}
                    </h3>
                    <p className="text-lg text-ink-secondary leading-relaxed">
                      {dept.description}
                    </p>
                  </div>
                </ScrollReveal>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {dept.members.map((member, i) => (
                    <ScrollReveal key={i} delay={0.1 * i}>
                      {member.status === "active" ? (
                        <div className="flex flex-col gap-4 group">
                          <div className="relative overflow-hidden rounded-panel border border-line">
                            <SparkImage
                              src={member.photo!}
                              alt={member.name!}
                              aspectRatio="1 / 1"
                              className="transition-transform duration-700 ease-out group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" aria-hidden="true" />
                          </div>
                          <div className="flex flex-col gap-1">
                            <h4 className="font-display text-xl font-medium text-ink">
                              {member.name}
                            </h4>
                            <p className="font-mono text-xs text-ink-secondary uppercase tracking-wider">
                              {member.role}
                            </p>
                          </div>
                        </div>
                      ) : (
                        <div className="flex flex-col gap-4 opacity-60">
                          <Placeholder
                            label="POSITION OPEN"
                            aspectRatio="1 / 1"
                            className="bg-base/50"
                          />
                          <div className="flex flex-col gap-1">
                            <h4 className="font-display text-xl font-medium text-ink-secondary italic">
                              Pending
                            </h4>
                            <p className="font-mono text-xs text-ink-secondary uppercase tracking-wider">
                              {member.role}
                            </p>
                          </div>
                        </div>
                      )}
                    </ScrollReveal>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 05. Closing Line */}
      <section className="relative overflow-hidden py-32 bg-base-deep border-t border-line">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_#f0b13f_0%,_transparent_50%)]" aria-hidden="true" />
        <Container className="relative z-10 text-center">
          <ScrollReveal>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-ink">
              Different departments. Different skills. <span className="text-accent">One SPARK. ⚡</span>
            </h2>
          </ScrollReveal>
        </Container>
      </section>
    </main>
  );
}