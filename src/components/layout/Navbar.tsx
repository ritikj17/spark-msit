"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navigation } from "@/content/navigation";
import { site } from "@/content/site";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/shared/Logo";
import { Button } from "@/components/ui/Button";

/**
 * True Fixed Global Navigation System.
 * 100% Solid Opaque background (#0a0b0d) fixed at the top of every page.
 * Content scrolling underneath will never show through.
 */
export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [lastPath, setLastPath] = useState(pathname);

  // Close the mobile menu when the route changes
  if (lastPath !== pathname) {
    setLastPath(pathname);
    setOpen(false);
  }

  // Escape closes the mobile menu
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  const isActive = (href: string) => (href === "/" ? pathname === href : pathname.startsWith(href));

  return (
    <header
      className="fixed top-4 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-6xl z-[100] rounded-2xl sm:rounded-full border border-line/60 bg-[#0a0b0d]/85 backdrop-blur-md shadow-2xl transition-all"
    >
      <div className="px-4 sm:px-6 lg:px-8 mx-auto flex h-16 sm:h-20 items-center justify-between">
        {/* Brand with Official Logo */}
        <Link href="/" className="flex items-center gap-3 group" aria-label={`${site.name} home`}>
          <Logo size={36} />
          <div className="flex flex-col">
            <span className="font-display text-lg font-bold tracking-tight text-ink group-hover:text-accent transition-colors duration-200">
              {site.name}
            </span>
            <span className="font-mono text-[9px] uppercase tracking-widest text-ink-muted hidden sm:block">
              Research · MSIT
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav aria-label="Primary Navigation" className="hidden items-center gap-1 lg:flex">
          {navigation.items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={cn(
                "relative rounded-full px-4 py-2 text-sm font-medium uppercase tracking-wide transition-colors duration-200",
                isActive(item.href) ? "text-accent font-semibold bg-surface/50" : "text-ink-secondary hover:text-ink hover:bg-surface/30",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-3 lg:flex">
          <Button href={navigation.cta.href} variant="outline-accent" size="sm" className="shadow-sm rounded-full">
            {navigation.cta.label} →
          </Button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center lg:hidden">
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label="Toggle navigation menu"
            className="flex size-10 items-center justify-center rounded-full bg-surface/50 text-ink transition-colors duration-200 hover:text-accent"
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
        </div>
      </div>

      {/* Mobile Dropdown Menu (Floating attached) */}
      {open ? (
        <div className="absolute top-full left-0 right-0 mt-3 px-2">
          <nav
            id="mobile-nav"
            aria-label="Mobile Navigation"
            className="rounded-2xl border border-line bg-[#060708] px-4 py-6 shadow-2xl"
            style={{ backgroundColor: "#060708" }}
          >
            <div className="mx-auto flex flex-col gap-2 max-w-md">
              {navigation.items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={cn(
                    "flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium uppercase tracking-wider transition-colors duration-200",
                    isActive(item.href) ? "bg-surface text-accent font-semibold" : "text-ink-secondary hover:bg-surface/50 hover:text-ink",
                  )}
                >
                  <span>{item.label}</span>
                  {isActive(item.href) ? (
                    <span className="size-1.5 rounded-full bg-accent" />
                  ) : null}
                </Link>
              ))}
              <div className="pt-4 mt-2 border-t border-line">
                <Button
                  href={navigation.cta.href}
                  onClick={() => setOpen(false)}
                  variant="primary"
                  size="md"
                  className="w-full justify-center rounded-xl"
                >
                  {navigation.cta.label} →
                </Button>
              </div>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
