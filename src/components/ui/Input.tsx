import type { InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

/**
 * Text input in the SPARK technical-panel style. Set `aria-invalid` for the
 * error state.
 */
export function Input({ className, ...props }: InputHTMLAttributes<HTMLInputElement>) {
  const invalid = props["aria-invalid"] === true;
  return (
    <input
      className={cn(
        "h-11 w-full rounded-sm border border-line bg-surface px-3 text-sm text-ink placeholder:text-ink-muted transition-colors duration-200",
        "hover:border-line-strong focus:border-accent focus:outline-none",
        "disabled:cursor-not-allowed disabled:opacity-50",
        invalid && "border-error hover:border-error focus:border-error",
        className,
      )}
      {...props}
    />
  );
}