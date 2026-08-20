"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navigation } from "@/content/navigation";
import { site } from "@/content/site";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/shared/Logo";
import { Button } from "@/components/ui/Button";

/**
 * Primary navigation shell. Sticky, responsive (collapsible on mobile),
 * keyboard accessible (aria-expanded/controls, closes on route change).
 */
export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [lastPath, setLastPath] = useState(pathname);

  // Close the mobile menu when the route changes (render-phase adjustment).
  if (lastPath !== pathname) {
    setLastPath(pathname);
    setOpen(false);
  }

  const isActive = (href: string) => (href === "/" ? pathname === href : pathname.startsWith(href));

  return (
    <header className="sticky top-0 z-nav border-b border-line bg-base/85 backdrop-blur-sm">
      <nav aria-label="Primary" className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2.5 text-accent" aria-label={`${site.name} home`}>
          <Logo />
          <span className="font-display text-base font-semibold tracking-tight text-ink">{site.name}</span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {navigation.items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={cn(
                "rounded-sm px-3 py-2 text-sm text-ink-secondary transition-colors duration-200 hover:text-ink",
                isActive(item.href) && "text-ink",
              )}
            >
              {item.label}
            </Link>
          ))}
          <Button href={navigation.cta.href} variant="outline" size="sm" className="ml-3">
            {navigation.cta.label}
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label="Toggle navigation menu"
          className="flex size-10 items-center justify-center rounded-sm text-ink transition-colors duration-200 hover:text-accent md:hidden"
        >
          <span className="relative block h-4 w-5" aria-hidden>
            <span
              className={cn(
                "absolute left-0 top-0 h-0.5 w-full bg-current transition-transform duration-200",
                open && "top-1/2 -translate-y-1/2 rotate-45",
              )}
            />
            <span
              className={cn(
                "absolute left-0 top-1/2 h-0.5 w-full -translate-y-1/2 bg-current transition-opacity duration-200",
                open && "opacity-0",
              )}
            />
            <span
              className={cn(
                "absolute bottom-0 left-0 h-0.5 w-full bg-current transition-transform duration-200",
                open && "bottom-1/2 translate-y-1/2 -rotate-45",
              )}
            />
          </span>
        </button>
      </nav>

      {open ? (
        <nav id="mobile-nav" aria-label="Mobile" className="border-t border-line md:hidden">
          <div className="mx-auto flex w-full max-w-7xl flex-col gap-1 px-4 py-4 sm:px-6">
            {navigation.items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={cn(
                  "rounded-sm px-3 py-2.5 text-sm text-ink-secondary transition-colors duration-200 hover:text-ink",
                  isActive(item.href) && "text-ink",
                )}
              >
                {item.label}
              </Link>
            ))}
            <Button href={navigation.cta.href} variant="outline" size="sm" className="mt-2 self-start">
              {navigation.cta.label}
            </Button>
          </div>
        </nav>
      ) : null}
    </header>
  );
}