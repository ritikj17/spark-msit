import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import type { PageMeta } from "@/content/types";

/**
 * Temporary placeholder used for routes whose full experience ships in a
 * later stage. Proves routing, content consumption and the design system
 * without building real pages yet.
 */
export function PagePlaceholder({ meta }: { meta: PageMeta }) {
  return (
    <section className="py-[var(--spark-section-pad)]">
      <Container>
        <div className="flex flex-col gap-10">
          <SectionHeader eyebrow={meta.eyebrow} title={meta.title} description={meta.description} />
          <Card className="max-w-2xl">
            <p className="font-mono text-xs tracking-wide text-ink-muted">{meta.notice}</p>
          </Card>
        </div>
      </Container>
    </section>
  );
}