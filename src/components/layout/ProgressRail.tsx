"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const SECTIONS = [
  { id: "hero", label: "Hero" },
  { id: "intro", label: "Who We Are" },
  { id: "what-we-do", label: "What We Do" },
  { id: "join", label: "Join" },
];

/**
 * Desktop-only left progress rail. Decorative scroll-spy (mirrors section
 * eyebrows), hidden below xl, never intercepts pointer events.
 */
export function ProgressRail() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const index = SECTIONS.findIndex((s) => s.id === entry.target.id);
            if (index !== -1) setActiveIndex(index);
          }
        }
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 },
    );

    for (const section of SECTIONS) {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      aria-hidden="true"
      className="pointer-events-none fixed left-5 top-1/2 z-content hidden -translate-y-1/2 flex-col gap-4 xl:flex"
    >
      {SECTIONS.map((section, i) => {
        const active = i === activeIndex;
        return (
          <div key={section.id} className="flex items-center gap-2.5">
            <span
              className={cn(
                "font-mono text-[10px] tracking-[0.2em] transition-colors duration-300",
                active ? "text-accent" : "text-ink-muted",
              )}
            >
              {String(i + 1).padStart(2, "0")}
            </span>
            <span
              className={cn(
                "block rounded-full transition-all duration-300",
                active ? "size-1.5 bg-accent shadow-glow" : "size-1 bg-line-strong",
              )}
            />
          </div>
        );
      })}
    </nav>
  );
}
