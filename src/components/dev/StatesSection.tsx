import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Chip } from "@/components/ui/Chip";
import { Container } from "@/components/ui/Container";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Spinner } from "@/components/ui/Spinner";
import { Textarea } from "@/components/ui/Textarea";

export function StatesSection() {
  return (
    <section className="py-16">
      <Container>
        <SectionHeader
          eyebrow="ST-01 // STATES"
          title="Component states"
          description="Default, hover, active, focus, disabled, loading, error and empty/pending."
        />

        <div className="mt-10 flex flex-col gap-14">
          <div className="flex flex-col gap-4">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink-muted">Buttons — hover / active / focus / disabled</p>
            <div className="flex flex-wrap items-center gap-3">
              <Button variant="primary">Hover · Active · Focus</Button>
              <Button variant="outline">Hover · Active · Focus</Button>
              <Button variant="ghost">Hover · Active · Focus</Button>
            </div>
            <p className="text-sm text-ink-muted">Focus states use the global gold focus ring.</p>
          </div>

          <div className="flex flex-col gap-4">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink-muted">Loading</p>
            <div className="flex flex-wrap items-center gap-3">
              <Button variant="primary" disabled>
                <Spinner />
                Submitting…
              </Button>
              <span className="flex items-center gap-2 font-mono text-xs text-ink-secondary">
                <Spinner />
                CALIBRATING SIGNAL
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink-muted">Form controls — default / focus / error / disabled</p>
            <div className="grid max-w-xl gap-5">
              <div className="flex flex-col gap-2">
                <Label htmlFor="demo-name">Name</Label>
                <Input id="demo-name" placeholder="Your name" />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="demo-message">Message</Label>
                <Textarea id="demo-message" rows={4} placeholder="Tell us about your idea." />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="demo-invalid">Email</Label>
                <Input id="demo-invalid" type="email" aria-invalid placeholder="you@example.com" defaultValue="not-an-email" />
                <p className="font-mono text-[11px] text-error">Enter a valid email address.</p>
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="demo-disabled">Disabled field</Label>
                <Input id="demo-disabled" disabled placeholder="Unavailable" />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink-muted">Error</p>
            <Card className="max-w-xl border-error/40">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-error">SYSTEM FAULT</p>
              <p className="mt-2 text-sm text-ink-secondary">
                Failed to reach the network. Check the connection and try again.
              </p>
            </Card>
          </div>

          <div className="flex flex-col gap-4">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink-muted">Empty / pending</p>
            <div className="flex flex-wrap items-center gap-3">
              <Chip variant="pending">DEPUTY HEAD — PENDING</Chip>
              <p className="font-mono text-[11px] text-ink-muted">
                Data model: {"{ name: null, role: \"Deputy Head\", status: \"pending\" }"}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}