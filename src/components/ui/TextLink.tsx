import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface TextLinkProps {
  href: string;
  children: ReactNode;
  external?: boolean;
  className?: string;
}

/**
 * Inline text link (accent, underline on hover). Internal routes use
 * next/link; external URLs open in a new tab safely.
 */
export function TextLink({ href, children, external = false, className }: TextLinkProps) {
  const classes = cn(
    "text-accent underline-offset-4 transition-colors duration-200 hover:text-accent-bright hover:underline",
    className,
  );

  if (external || /^https?:\/\//.test(href)) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}