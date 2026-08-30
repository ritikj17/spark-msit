import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  size?: number;
}

/**
 * Official SPARK brand logo component.
 * Renders the authoritative SPARK emblem asset with proper proportions and responsiveness.
 */
export function Logo({ className, size = 38 }: LogoProps) {
  return (
    <div
      className={cn(
        "relative flex shrink-0 items-center justify-center overflow-hidden rounded-full border border-line bg-white/95 p-0.5 shadow-sm transition-transform duration-200 hover:scale-105",
        className,
      )}
      style={{ width: size, height: size }}
    >
      <Image
        src="/assets/brand/spark-logo.jpg"
        alt="SPARK MSIT Official Logo"
        width={size * 2}
        height={size * 2}
        priority
        className="size-full rounded-full object-cover object-center"
      />
    </div>
  );
}
