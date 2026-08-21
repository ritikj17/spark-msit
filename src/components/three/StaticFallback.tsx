import { cn } from "@/lib/utils";

/**
 * Static fallback — no animation, no WebGL, no SVG animation.
 * Pure HTML/CSS render of the SPARK universe in its rest state.
 */
export function StaticFallback({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative w-full aspect-square max-w-[900px] mx-auto overflow-hidden rounded-panel border border-line bg-base",
        className,
      )}
      role="img"
      aria-label="SPARK universe — static render"
    >
      {/* CSS-based grid background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,1) 0.5px, transparent 0.5px),
            linear-gradient(90deg, rgba(255,255,255,1) 0.5px, transparent 0.5px)
          `,
          backgroundSize: "30px 30px",
        }}
      />

      {/* Orbital rings as CSS ellipses */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div
          className="absolute rounded-full border border-accent/30"
          style={{
            width: "60%",
            height: "20%",
            borderRadius: "50% / 15%",
            animation: "none",
          }}
        />
        <div
          className="absolute rounded-full border border-dashed border-accent/20"
          style={{
            width: "80%",
            height: "30%",
            borderRadius: "50% / 18%",
            borderWidth: "1px",
            animation: "none",
          }}
        />
      </div>

      {/* Core */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/90 shadow-[0_0_24px_rgba(240,177,63,0.18)]"
        style={{ width: "56px", height: "56px" }}
      />

      {/* Nodes */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {[
          { angle: 0, orbit: "60%", label: "Research" },
          { angle: 72, orbit: "60%", label: "Innovation" },
          { angle: 144, orbit: "80%", label: "Collaboration" },
          { angle: 216, orbit: "80%", label: "Workshops" },
          { angle: 288, orbit: "60%", label: "Opportunities" },
        ].map((node) => {
          const rad = (node.angle * Math.PI) / 180;
          const orbit = parseInt(node.orbit) / 100;
          const cx = `calc(50% + ${orbit * 250}px * ${Math.cos(rad).toFixed(3)})`;
          const cy = `calc(50% + ${orbit * 83}px * ${Math.sin(rad).toFixed(3)})`;
          return (
            <div
              key={node.label}
              className="absolute flex flex-col items-center"
              style={{ left: cx, top: cy, transform: "translate(-50%, -50%)" }}
            >
              <div
                className="rounded-full bg-accent shadow-[0_0_24px_rgba(240,177,63,0.18)]"
                style={{ width: "16px", height: "16px" }}
              />
              <span className="mt-1.5 font-mono text-[10px] text-ink-secondary whitespace-nowrap">
                {node.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}