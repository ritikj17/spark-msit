"use client";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

interface ErrorPageProps {
  error: Error & { digest?: string };
  reset: () => void;
}

/**
 * Root error boundary UI. Prevents a failed render from blanking the site.
 */
export default function ErrorPage({ error, reset }: ErrorPageProps) {
  return (
    <section className="py-[var(--spark-section-pad)]">
      <Container>
        <div className="flex max-w-2xl flex-col gap-6">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-error">SYSTEM FAULT</p>
          <h1 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Something went wrong.
          </h1>
          <p className="font-mono text-xs tracking-wide text-ink-muted">{error.message}</p>
          <div className="mt-2">
            <Button onClick={reset} variant="primary">
              Try again
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}