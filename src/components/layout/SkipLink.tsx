/**
 * Keyboard/AT skip link, visually hidden until focused.
 */
export function SkipLink() {
  return (
    <a
      href="#main"
      className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-toast focus:rounded-sm focus:border focus:border-line-strong focus:bg-base-deep focus:px-4 focus:py-2 focus:text-sm focus:text-accent"
    >
      Skip to main content
    </a>
  );
}