import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ContainerProps {
  children: ReactNode;
  as?: ElementType;
  className?: string;
}

/**
 * Page content width wrapper (max 1280px) with consistent horizontal padding.
 */
export function Container({ children, as: Component = "div", className }: ContainerProps) {
  return <Component className={cn("mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8", className)}>{children}</Component>;
}