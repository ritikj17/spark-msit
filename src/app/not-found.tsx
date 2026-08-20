import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <section className="py-[var(--spark-section-pad)]">
      <Container>
        <div className="flex max-w-2xl flex-col gap-6">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">SIGNAL LOST</p>
          <h1 className="font-display text-6xl font-semibold tracking-tight text-ink sm:text-7xl">404</h1>
          <p className="text-base leading-relaxed text-ink-secondary">
            This page does not exist. It may have moved, or the signal was lost in transmission.
          </p>
          <div className="mt-2">
            <Button href="/" variant="primary">
              Back to Home
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}