import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

export type CardProps = ComponentPropsWithoutRef<"div"> & {
  interactive?: boolean;
  glow?: boolean;
};

/**
 * Technical panel surface. Thin border, rounded corners, subtle raised
 * background — the base "panel" unit of the SPARK design system.
 */
export function Card({ children, interactive = false, glow = false, className, ...rest }: CardProps) {
  return (
    <div
      {...rest}
      className={cn(
        "rounded-panel border border-line bg-surface p-6",
        glow && "shadow-glow",
        interactive && "transition-colors duration-200 hover:border-line-strong",
        className,
      )}
    >
      {children}
    </div>
  );
}
