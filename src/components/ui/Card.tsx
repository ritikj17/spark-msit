import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface CardProps {
  children: ReactNode;
  as?: ElementType;
  interactive?: boolean;
  glow?: boolean;
  className?: string;
}

/**
 * Technical panel surface. Thin border, rounded corners, subtle raised
 * background — the base "panel" unit of the SPARK design system.
 */
export function Card({ children, as: Component = "div", interactive = false, glow = false, className }: CardProps) {
  return (
    <Component
      className={cn(
        "rounded-panel border border-line bg-surface p-6",
        glow && "shadow-glow",
        interactive && "transition-colors duration-200 hover:border-line-strong",
        className,
      )}
    >
      {children}
    </Component>
  );
}