import { cn } from "@/lib/utils";

interface SpinnerProps {
  className?: string;
}

/**
 * Accessible loading indicator.
 */
export function Spinner({ className }: SpinnerProps) {
  return (
    <span
      className={cn("inline-block size-4 animate-spin rounded-full border-2 border-current border-t-transparent", className)}
      role="status"
      aria-label="Loading"
    />
  );
}