import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

export type ContainerProps = ComponentPropsWithoutRef<"div">;

/**
 * Page content width wrapper (max 1280px) with consistent horizontal padding.
 */
export function Container({ children, className, ...rest }: ContainerProps) {
  return (
    <div
      {...rest}
      className={cn("mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8", className)}
    >
      {children}
    </div>
  );
}
