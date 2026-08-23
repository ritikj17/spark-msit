"use client";

import { Canvas, useFrame, useThree, type ThreeEvent } from "@react-three/fiber";
import { OrbitControls, Html } from "@react-three/drei";
import * as THREE from "three";
import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { useWebGLCapability } from "@/hooks/useWebGLCapability";
import { useThreePerformance } from "@/hooks/useThreePerformance";
import { cn } from "@/lib/utils";
import { PillarIcon } from "@/components/ui/PillarIcon";
import { SvgFallback } from "./SvgFallback";
import { StaticFallback } from "./StaticFallback";

/* ── Types & data ─────────────────────────────────────────────────────── */

interface NodeData {
  id: string;
  label: string;
  angle: number;
  orbit: number;
  description: string;
}

/** Short forms of the approved What We Do descriptions (first sentences). */
const NODES: NodeData[] = [
  { id: "research", label: "Research", angle: 0, orbit: 5.4, description: "Explore new ideas and learn how research works." },
  { id: "innovation", label: "Innovation", angle: 72, orbit: 6.6, description: "Turn ideas into projects and practical solutions." },
  { id: "collaboration", label: "Collaboration", angle: 144, orbit: 7.8, description: "Work and learn with students, seniors and mentors." },
  { id: "workshops", label: "Workshops", angle: 216, orbit: 9.0, description: "Learn new skills through interactive sessions." },
  { id: "opportunities", label: "Opportunities", angle: 288, orbit: 5.4, description: "Explore projects, publications, funding and more." },
];

/** Deterministic PRNG — keeps render pure while varying placement. */
function mulberry32(seed: number) {
  return function () {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/** Shared responsive scene configuration derived from canvas shape. */
interface SceneConfig {
  compact: boolean;
  s: number; // radial scale factor for narrow canvases
}

function useSceneConfig(): SceneConfig {
  // Layout role derives from canvas WIDTH, not aspect: the desktop hero
  // cell is nearly square while tablet/mobile render as contained blocks.
  // Radial scale is continuous so orbit paths plus depth-scaled labels stay
  // contained from small cells up to large displays (bounded 0.55–1).
  const width = useThree((state) => state.size.width);
  const compact = width < 640;
  const s = Math.min(1, Math.max(0.55, width / 1400));
  return { compact, s };
}

/* ── SparkCore ─────────────────────────────────────────────────────────── */

function SparkCore({ reduced }: { reduced: boolean }) {
  const spinRef = useRef<THREE.Group>(null);

  useFrame((_, rawDelta) => {
    const delta = Math.min(rawDelta, 0.05);
    if (!reduced && spinRef.current) {
      spinRef.current.rotation.y += delta * 0.06;
    }
  });

  return (
    <group>
      {/* Outer halo */}
      <mesh>
        <sphereGeometry args={[2.95, 32, 32]} />
        <meshBasicMaterial color={0xf0b13f} transparent opacity={0.05} side={THREE.BackSide} depthWrite={false} />
      </mesh>

      {/* Dark metallic / glass body — the core is the primary light source */}
      <group ref={spinRef}>
        <mesh>
          <sphereGeometry args={[2.1, 48, 48]} />
          <meshStandardMaterial
            color={0x14171c}
            metalness={0.85}
            roughness={0.35}
            emissive={0xf0b13f}
            emissiveIntensity={0.06}
          />
        </mesh>

        {/* Subtle wireframe/grid topology */}
        <mesh>
          <sphereGeometry args={[2.17, 28, 20]} />
          <meshBasicMaterial color={0xf0b13f} transparent opacity={0.09} wireframe depthWrite={false} />
        </mesh>

        {/* Internal illumination */}
        <mesh>
          <sphereGeometry args={[1.15, 32, 32]} />
          <meshBasicMaterial color={0xf7c469} transparent opacity={0.32} />
        </mesh>
        <mesh>
          <sphereGeometry args={[0.65, 24, 24]} />
          <meshBasicMaterial color={0xffd98a} transparent opacity={0.55} blending={THREE.AdditiveBlending} depthWrite={false} />
        </mesh>
      </group>

      {/* Core point light — warm key for the whole universe */}
      <pointLight color={0xf0b13f} intensity={90} distance={38} decay={2} />

      {/* SPARK wordmark inside the core */}
      <Html center position={[0, 0, 0]} style={{ pointerEvents: "none" }} zIndexRange={[5, 0]}>
        <span className="font-display text-xl md:text-2xl font-semibold tracking-[0.14em] text-accent-bright drop-shadow-[0_0_18px_rgba(240,177,63,0.55)] select-none">
          SPARK
        </span>
      </Html>
    </group>
  );
}

/* ── OrbitalSystem — multiple tilted planes carrying the five nodes ────── */

interface OrbitPlane {
  radius: number;
  tilt: [number, number, number];
  speed: number;
  opacity: number;
}

const ORBIT_PLANES: OrbitPlane[] = [
  { radius: 5.4, tilt: [0.12, 0, 0.1], speed: 0.032, opacity: 0.2 },
  { radius: 6.6, tilt: [-0.22, 0, -0.16], speed: -0.024, opacity: 0.15 },
  { radius: 7.8, tilt: [0.3, 0, 0.22], speed: 0.019, opacity: 0.12 },
  { radius: 9.0, tilt: [-0.36, 0, 0.14], speed: -0.015, opacity: 0.1 },
  { radius: 5.4, tilt: [0.5, 0, -0.42], speed: 0.027, opacity: 0.14 },
];

function OrbitSystem({ reduced, selectedId, onSelect, s, compact }: {
  reduced: boolean;
  selectedId: string | null;
  onSelect: (node: NodeData) => void;
  s: number;
  compact: boolean;
}) {
  const groupRefs = useRef<(THREE.Group | null)[]>([]);

  useFrame((_, rawDelta) => {
    const delta = Math.min(rawDelta, 0.05);
    if (reduced) return;
    groupRefs.current.forEach((g, i) => {
      if (g) g.rotation.y += delta * ORBIT_PLANES[i].speed;
    });
  });

  return (
    <group>
      {ORBIT_PLANES.map((plane, i) => {
        const node = i < 5 ? NODES[i % 5] : null;
        const r = plane.radius * s;
        return (
          <group
            key={`${node?.id ?? i}`}
            ref={(el) => (groupRefs.current[i] = el)}
            rotation={plane.tilt}
          >
            {/* Orbit path */}
            <mesh rotation={[Math.PI / 2, 0, 0]}>
              <torusGeometry args={[r, 0.016, 8, 160]} />
              <meshBasicMaterial color={0xf0b13f} transparent opacity={plane.opacity} side={THREE.DoubleSide} depthWrite={false} />
            </mesh>

            {/* Path markers make the slow orbital motion perceptible */}
            {(() => {
              const base = ((node?.angle ?? i * 72) * Math.PI) / 180;
              return [120, 240].map((offset) => {
                const a = base + (offset * Math.PI) / 180;
                return (
                  <mesh key={offset} position={[Math.cos(a) * r, 0, Math.sin(a) * r]}>
                    <sphereGeometry args={[0.045, 8, 8]} />
                    <meshBasicMaterial color={0xf0b13f} transparent opacity={0.55} />
                  </mesh>
                );
              });
            })()}

            {/* Travelling node */}
            {node ? (
              <SparkNode
                node={node}
                radius={r}
                selected={selectedId === node.id}
                onSelect={onSelect}
                reduced={reduced}
                compact={compact}
              />
            ) : null}
          </group>
        );
      })}
    </group>
  );
}

/* ── SparkNode — glowing circular node with icon label ─────────────────── */

function SparkNode({ node, radius, selected, onSelect, reduced, compact }: {
  node: NodeData;
  radius: number;
  selected: boolean;
  onSelect: (node: NodeData) => void;
  reduced: boolean;
  compact: boolean;
}) {
  const coreRef = useRef<THREE.Mesh>(null);
  const labelRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);
  const active = hovered || selected;

  const rad = (node.angle * Math.PI) / 180;
  const tmpQ = useMemo(() => new THREE.Quaternion(), []);

  useFrame(({ clock }, rawDelta) => {
    const delta = Math.min(rawDelta, 0.05);
    if (!reduced && coreRef.current) {
      // Gentle pulse synced to time — deterministic across reloads.
      const pulse = 1 + Math.sin(clock.elapsedTime * 1.4 + node.angle) * 0.06;
      const target = active ? 1.35 : pulse;
      coreRef.current.scale.lerp(new THREE.Vector3(target, target, target), 1 - Math.exp(-delta * 8));
    }
    // Keep the label upright in world space even though the orbit plane tilts.
    if (labelRef.current?.parent) {
      labelRef.current.parent.getWorldQuaternion(tmpQ).invert();
      labelRef.current.quaternion.copy(tmpQ);
    }
  });

  const handleOver = (e: ThreeEvent<PointerEvent>) => {
    e.stopPropagation();
    setHovered(true);
  };

  return (
    <group position={[Math.cos(rad) * radius, 0, Math.sin(rad) * radius]}>
      {/* Glow shell */}
      <mesh>
        <sphereGeometry args={[0.5, 16, 16]} />
        <meshBasicMaterial color={0xf0b13f} transparent opacity={active ? 0.28 : 0.14} blending={THREE.AdditiveBlending} depthWrite={false} />
      </mesh>

      {/* Outer ring */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.58, 0.02, 8, 48]} />
        <meshBasicMaterial color={0xf0b13f} transparent opacity={active ? 0.75 : 0.4} side={THREE.DoubleSide} depthWrite={false} />
      </mesh>

      {/* Core bead */}
      <mesh
        ref={coreRef}
        onPointerOver={handleOver}
        onPointerOut={() => setHovered(false)}
        onClick={(e) => {
          e.stopPropagation();
          onSelect(node);
        }}
      >
        <sphereGeometry args={[0.24, 20, 20]} />
        <meshStandardMaterial
          color={0xf0b13f}
          emissive={0xf0b13f}
          emissiveIntensity={active ? 2.2 : 1.1}
          metalness={0.2}
          roughness={0.4}
        />
      </mesh>

      {/* Label — world-upright wrapper so the tilted orbit can't tumble it.
          Compact canvases use constant-size screen-space labels (no depth
          scaling) so they can never balloon outside the visual bounds. */}
      <group ref={labelRef}>
        <Html
          transform={!compact}
          center
          position={[0, 1.15, 0]}
          style={{ pointerEvents: "none", opacity: active ? 1 : 0.72, transition: "opacity 200ms" }}
          zIndexRange={[5, 0]}
        >
          <div className={cn("flex items-start gap-2", compact && "scale-90")}>
            <span className={cn(
              "mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-sm border bg-base-deep/80 backdrop-blur-sm",
              active ? "border-accent text-accent" : "border-line-strong text-accent-dim",
            )}>
              <PillarIcon id={node.id} className="size-4" />
            </span>
            <span className="flex w-36 flex-col gap-0.5 border-l border-accent/50 pl-2">
              <span className={cn(
                "font-mono text-[10px] font-medium uppercase tracking-[0.18em]",
                active ? "text-accent" : "text-ink",
              )}>
                {node.label}
              </span>
              <span className="text-[9px] leading-snug text-ink-secondary">{node.description}</span>
            </span>
          </div>
        </Html>
      </group>
    </group>
  );
}

/* ── EnergyPlatform — concentric technical rings beneath the core ──────── */

function EnergyPlatform({ reduced, s }: { reduced: boolean; s: number }) {
  const spokeRef = useRef<THREE.Group>(null);
  const y = -2.3;

  useFrame((_, rawDelta) => {
    const delta = Math.min(rawDelta, 0.05);
    if (!reduced && spokeRef.current) {
      spokeRef.current.rotation.y -= delta * 0.01;
    }
  });

  // Radial spokes
  const spokes = useMemo(() => {
    const g = new THREE.BufferGeometry();
    const pts: number[] = [];
    for (let i = 0; i < 12; i++) {
      const a = (i / 12) * Math.PI * 2;
      pts.push(Math.cos(a) * 2.95 * s, 0, Math.sin(a) * 2.95 * s);
      pts.push(Math.cos(a) * 4.7 * s, 0, Math.sin(a) * 4.7 * s);
    }
    g.setAttribute("position", new THREE.BufferAttribute(new Float32Array(pts), 3));
    return g;
  }, [s]);

  return (
    <group position={[0, y, 0]}>
      {/* Concentric annuli */}
      {[
        { inner: 2.85, outer: 2.92, opacity: 0.16 },
        { inner: 3.7, outer: 3.75, opacity: 0.1 },
        { inner: 4.62, outer: 4.69, opacity: 0.06 },
      ].map((ring, i) => (
        <mesh key={i} rotation={[-Math.PI / 2, 0, 0]}>
          <ringGeometry args={[ring.inner * s, ring.outer * s, 96]} />
          <meshBasicMaterial color={0xf0b13f} transparent opacity={ring.opacity} side={THREE.DoubleSide} depthWrite={false} />
        </mesh>
      ))}

      {/* Rotating spokes */}
      <group ref={spokeRef}>
        <lineSegments geometry={spokes}>
          <lineBasicMaterial color={0xf0b13f} transparent opacity={0.07} depthWrite={false} />
        </lineSegments>
      </group>
    </group>
  );
}

/* ── TechnicalGrid — dark floor, grid, circuit-like traces ─────────────── */

function TechnicalGrid() {
  // Seeded Manhattan-routed circuit traces on the floor plane.
  const { dimGeometry, litGeometry } = useMemo(() => {
    const rand = mulberry32(0xc17c11);
    const dim: number[] = [];
    const lit: number[] = [];

    const pushTrace = (gold: boolean) => {
      let x = (rand() * 2 - 1) * 18;
      let z = (rand() * 2 - 1) * 18;
      const steps = 2 + Math.floor(rand() * 3);
      for (let step = 0; step < steps; step++) {
        const horizontal = rand() > 0.5;
        const len = (rand() * 3 + 1) * (rand() > 0.5 ? 1 : -1);
        const nx = horizontal ? x + len : x;
        const nz = horizontal ? z : z + len;
        (gold ? lit : dim).push(x, 0, z, nx, 0, nz);
        x = nx;
        z = nz;
      }
    };

    for (let i = 0; i < 46; i++) pushTrace(false);
    for (let i = 0; i < 10; i++) pushTrace(true);

    const mk = (arr: number[]) => {
      const g = new THREE.BufferGeometry();
      g.setAttribute("position", new THREE.BufferAttribute(new Float32Array(arr), 3));
      return g;
    };
    return { dimGeometry: mk(dim), litGeometry: mk(lit) };
  }, []);

  return (
    <group position={[0, -2.6, 0]}>
      <gridHelper args={[46, 46, 0x2e333b, 0x181b20]} />
      <lineSegments geometry={dimGeometry}>
        <lineBasicMaterial color={0xffffff} transparent opacity={0.035} depthWrite={false} />
      </lineSegments>
      <lineSegments geometry={litGeometry}>
        <lineBasicMaterial color={0xf0b13f} transparent opacity={0.12} depthWrite={false} />
      </lineSegments>
    </group>
  );
}

/* ── ParticleField — floating dust (Points, additive) ──────────────────── */

function ParticleField({ count, s }: { count: number; s: number }) {
  const geometry = useMemo(() => {
    const rand = mulberry32(0x5eed);
    const g = new THREE.BufferGeometry();
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const radius = (3 + rand() * 8) * s;
      const theta = rand() * Math.PI * 2;
      const phi = Math.acos(2 * rand() - 1);
      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.cos(phi) * 0.75;
      positions[i * 3 + 2] = radius * Math.sin(phi) * Math.sin(theta);
      if (rand() > 0.55) {
        colors[i * 3] = 1;
        colors[i * 3 + 1] = 0.72;
        colors[i * 3 + 2] = 0.18;
      } else {
        colors[i * 3] = 0.85;
        colors[i * 3 + 1] = 0.88;
        colors[i * 3 + 2] = 0.95;
      }
    }
    g.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    g.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    return g;
  }, [count, s]);

  return (
    <points geometry={geometry}>
      <pointsMaterial
        size={0.07}
        vertexColors
        transparent
        opacity={0.55}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        sizeAttenuation
      />
    </points>
  );
}

/* ── DebrisField — instanced metallic shards, seeded placement ─────────── */

function DebrisField({ count, s, reduced }: { count: number; s: number; reduced: boolean }) {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const groupRef = useRef<THREE.Group>(null);
  const dummy = useMemo(() => new THREE.Object3D(), []);
  const goldColor = useMemo(() => new THREE.Color(0xd99a35), []);
  const steelColor = useMemo(() => new THREE.Color(0x3d434c), []);

  const transforms = useMemo(() => {
    const rand = mulberry32(0xdb15);
    return Array.from({ length: count }, () => ({
      x: (rand() * 2 - 1) * 10 * s,
      y: (rand() * 2 - 1) * 5.5 * s,
      z: (rand() * 2 - 1) * 10 * s,
      scale: 0.4 + rand() * 1.1,
      rot: [rand() * Math.PI, rand() * Math.PI, rand() * Math.PI],
      gold: rand() > 0.78,
    }));
  }, [count, s]);

  useLayoutEffect(() => {
    const mesh = meshRef.current;
    if (!mesh) return;
    transforms.forEach((t, i) => {
      dummy.position.set(t.x, t.y, t.z);
      dummy.rotation.set(t.rot[0], t.rot[1], t.rot[2]);
      dummy.scale.setScalar(t.scale);
      dummy.updateMatrix();
      mesh.setMatrixAt(i, dummy.matrix);
      mesh.setColorAt(i, t.gold ? goldColor : steelColor);
    });
    mesh.instanceMatrix.needsUpdate = true;
    if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true;
  }, [transforms, dummy, goldColor, steelColor]);

  useFrame((_, rawDelta) => {
    const delta = Math.min(rawDelta, 0.05);
    if (!reduced && groupRef.current) {
      groupRef.current.rotation.y += delta * 0.006;
    }
  });

  return (
    <group ref={groupRef}>
      <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
        <tetrahedronGeometry args={[0.075, 0]} />
        <meshStandardMaterial metalness={0.9} roughness={0.3} />
      </instancedMesh>
    </group>
  );
}

/* ── FpsGuard (must live INSIDE the Canvas) ────────────────────────────── */

function FpsGuard({ onThrottle }: { onThrottle: (throttle: boolean) => void }) {
  const { shouldThrottle } = useThreePerformance();

  useEffect(() => {
    onThrottle(shouldThrottle);
  }, [shouldThrottle, onThrottle]);

  return null;
}

/* ── ResponsiveCamera (keeps scene contained on narrow canvases) ───────── */

function ResponsiveCamera() {
  const camera = useThree((state) => state.camera);
  const size = useThree((state) => state.size);

  useEffect(() => {
    const width = size.width;
    // Contained blocks (mobile/tablet) pull back so orbiting nodes and
    // labels stay inside the viewport; the desktop hero cell keeps the
    // approved full framing.
    if (width < 640) {
      camera.position.set(0, 6.8, 30);
    } else {
      camera.position.set(0, 4.2, 17);
    }
    camera.lookAt(0, -0.4, 0);
  }, [camera, size]);

  return null;
}

/* ── Universe — everything inside the Canvas ───────────────────────────── */

function Universe({ onNodeSelect, selectedNodeId, throttled }: {
  onNodeSelect: (node: NodeData) => void;
  selectedNodeId: string | null;
  throttled: boolean;
}) {
  const reduced = useReducedMotion();
  const { compact, s } = useSceneConfig();

  const particleCount = throttled ? 700 : compact ? 1400 : 2400;
  const debrisCount = throttled ? 16 : compact ? 24 : 44;

  return (
    <>
      <fog attach="fog" args={[0x0a0b0d, 12, 44]} />

      {/* Lighting hierarchy — the core is the primary source */}
      <ambientLight color={0x93a4c4} intensity={0.22} />
      <directionalLight position={[-8, 12, -4]} color={0xaebcd8} intensity={0.65} castShadow={false} />
      <directionalLight position={[6, 6, -10]} color={0xf0b13f} intensity={0.22} castShadow={false} />

      <ResponsiveCamera />
      <TechnicalGrid />
      <EnergyPlatform reduced={reduced} s={s} />
      <SparkCore reduced={reduced} />
      <OrbitSystem reduced={reduced} selectedId={selectedNodeId} onSelect={onNodeSelect} s={s} compact={compact} />
      <ParticleField count={particleCount} s={s} />
      <DebrisField count={debrisCount} s={s} reduced={reduced} />
    </>
  );
}

/* ── SparkSceneInner ───────────────────────────────────────────────────── */

interface SparkSceneInnerProps {
  onNodeSelect: (node: NodeData) => void;
  selectedNodeId: string | null;
}

function SparkSceneInner({ onNodeSelect, selectedNodeId }: SparkSceneInnerProps) {
  const { tier, prefersReducedMotion } = useWebGLCapability();
  const [runtimeThrottle, setRuntimeThrottle] = useState(false);

  const isLowEndDevice = tier === "low" || prefersReducedMotion;
  const isLowEnd = isLowEndDevice || runtimeThrottle;

  return (
    <Canvas
      gl={{ preserveDrawingBuffer: false, antialias: !isLowEndDevice, alpha: true }}
      camera={{ position: [0, 4.2, 17], fov: 42 }}
      dpr={isLowEnd ? [1, 1.5] : [1, 2]}
      onCreated={({ gl }) => {
        gl.toneMapping = THREE.ACESFilmicToneMapping;
        gl.toneMappingExposure = 1.05;
      }}
    >
      <Universe
        onNodeSelect={onNodeSelect}
        selectedNodeId={selectedNodeId}
        throttled={runtimeThrottle}
      />
      <FpsGuard onThrottle={setRuntimeThrottle} />

      {/* Limited interactive framing */}
      <OrbitControls
        enablePan={false}
        enableZoom={!isLowEnd}
        minZoom={0.8}
        maxZoom={2.5}
        maxPolarAngle={Math.PI / 2 - 0.08}
        minPolarAngle={0.15}
        enableDamping={true}
        dampingFactor={0.05}
        autoRotate={!prefersReducedMotion}
        autoRotateSpeed={0.12}
      />
    </Canvas>
  );
}

/* ── SparkScene (exported) ─────────────────────────────────────────────── */

interface SparkSceneProps {
  onNodeSelect?: (node: NodeData) => void;
}

export function SparkScene({ onNodeSelect }: SparkSceneProps) {
  const [selectedNodeId, setSelectedNodeId] = useState<string | null>(null);
  const prefersReducedMotion = useReducedMotion();
  const { webgl, tier } = useWebGLCapability();

  const handleSelect = (node: NodeData) => {
    setSelectedNodeId((prev) => (prev === node.id ? null : node.id));
    onNodeSelect?.(node);
  };

  // Fallback chain
  if (!webgl || tier === "none") {
    return <StaticFallback />;
  }
  if (prefersReducedMotion || tier === "low") {
    return <SvgFallback />;
  }

  return <SparkSceneInner onNodeSelect={handleSelect} selectedNodeId={selectedNodeId} />;
}

export { NODES };
export type { NodeData };
