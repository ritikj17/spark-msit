import { Container } from "@/components/ui/Container";
import { Chip } from "@/components/ui/Chip";

/**
 * Header for the internal design-system showcase. Not linked from navigation.
 */
export function DevHeader() {
  return (
    <section className="border-b border-line bg-base-deep">
      <Container className="flex flex-col gap-4 py-14">
        <div className="flex flex-wrap items-center gap-3">
          <Chip variant="accent">INTERNAL</Chip>
          <Chip>DEV ROUTE</Chip>
          <Chip variant="pending">NOT IN NAVIGATION</Chip>
        </div>
        <h1 className="font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          SPARK Design System
        </h1>
        <p className="max-w-2xl text-base leading-relaxed text-ink-secondary">
          Temporary visual-verification surface. Demonstrates the approved tokens, reusable components
          and motion behavior before they propagate across Home, About, Events, Team and Contact.
        </p>
      </Container>
    </section>
  );
}