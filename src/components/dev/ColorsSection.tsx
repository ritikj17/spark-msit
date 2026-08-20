import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";

interface Swatch {
  name: string;
  value: string;
  className: string;
}

const swatches: Swatch[] = [
  { name: "base", value: "#0A0B0D", className: "bg-base" },
  { name: "base-deep", value: "#060708", className: "bg-base-deep" },
  { name: "surface", value: "#101216", className: "bg-surface" },
  { name: "surface-raised", value: "#14171C", className: "bg-surface-raised" },
  { name: "ink", value: "#EDEFF2", className: "bg-ink" },
  { name: "ink-secondary", value: "#9AA0A8", className: "bg-ink-secondary" },
  { name: "ink-muted", value: "#6B7076", className: "bg-ink-muted" },
  { name: "accent", value: "#F0B13F", className: "bg-accent" },
  { name: "accent-bright", value: "#FFC25E", className: "bg-accent-bright" },
  { name: "accent-dim", value: "#9C6F1E", className: "bg-accent-dim" },
  { name: "success", value: "#4ADE80", className: "bg-success" },
  { name: "error", value: "#F87171", className: "bg-error" },
];

export function ColorsSection() {
  return (
    <section className="py-16">
      <Container>
        <SectionHeader
          eyebrow="COL-01 // COLOR"
          title="Color tokens"
          description="Dark-first surfaces, gold accent, status colors. Gold is an accent — never a background fill."
        />

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {swatches.map((swatch) => (
            <Card key={swatch.name} className="flex flex-col gap-3 p-4">
              <div className={`h-16 w-full rounded-sm border border-line ${swatch.className}`} />
              <div className="flex flex-col gap-1">
                <p className="font-mono text-xs text-ink">{swatch.name}</p>
                <p className="font-mono text-[11px] text-ink-muted">{swatch.value}</p>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink-muted">Borders</p>
          <div className="h-10 w-full rounded-sm border border-line" />
          <div className="h-10 w-full rounded-sm border border-line-strong" />
          <div className="h-10 w-full rounded-sm border border-accent-dim/40" />
        </div>
      </Container>
    </section>
  );
}