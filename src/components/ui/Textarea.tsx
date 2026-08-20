import type { TextareaHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

/**
 * Textarea in the SPARK technical-panel style. Set `aria-invalid` for the
 * error state.
 */
export function Textarea({ className, ...props }: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  const invalid = props["aria-invalid"] === true;
  return (
    <textarea
      className={cn(
        "w-full rounded-sm border border-line bg-surface px-3 py-2.5 text-sm text-ink placeholder:text-ink-muted transition-colors duration-200",
        "hover:border-line-strong focus:border-accent focus:outline-none",
        "disabled:cursor-not-allowed disabled:opacity-50",
        invalid && "border-error hover:border-error focus:border-error",
        className,
      )}
      {...props}
    />
  );
}