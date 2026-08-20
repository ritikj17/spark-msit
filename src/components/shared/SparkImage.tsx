import Image from "next/image";
import type { ImageProps } from "next/image";
import { cn } from "@/lib/utils";
import { resolveAsset } from "@/lib/assets";
import { Placeholder } from "./Placeholder";

type SparkImageProps = Omit<ImageProps, "src" | "alt"> & {
  /** Asset token (e.g. "[SPARK-EVENT-01-COVER]") or a real public path. */
  src: string;
  alt: string;
  /** Optional box ratio, e.g. "16 / 9". When set, the image fills the box. */
  aspectRatio?: string;
  /** Class applied to the outer box when aspectRatio is set. */
  containerClassName?: string;
};

/**
 * Image that understands the SPARK placeholder system.
 * - Unmapped tokens / missing files -> branded <Placeholder>, never a broken image.
 * - Real files / mapped tokens -> optimized next/image.
 */
export function SparkImage({ src, alt, aspectRatio, containerClassName, className, ...rest }: SparkImageProps) {
  const resolved = resolveAsset(src);

  if (!resolved) {
    return <Placeholder label={src} alt={alt} aspectRatio={aspectRatio} className={cn(containerClassName, className)} />;
  }

  if (aspectRatio) {
    return (
      <div className={cn("relative w-full overflow-hidden rounded-panel border border-line", containerClassName)} style={{ aspectRatio }}>
        <Image src={resolved} alt={alt} fill sizes={rest.sizes ?? "100vw"} className={cn("object-cover", className)} {...rest} />
      </div>
    );
  }

  return <Image src={resolved} alt={alt} className={cn("rounded-panel border border-line", className)} {...rest} />;
}