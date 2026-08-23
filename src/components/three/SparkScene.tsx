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
  description: string;
}

/** Short forms of the approved What We Do descriptions. */
const NODES: NodeData[] = [
  { id: "research", label: "Research", angle: 270, description: "Explore new ideas and ask questions." },
  { id: "innovation", label: "Innovation", angle: 20, description: "Turn ideas into projects and solutions." },
  { id: "collaboration", label: "Collaboration", angle: 155, description: "Work and learn with students and mentors." },
  { id: "workshops", label: "Workshops", angle: 210, description: "Learn new skills through hands-on sessions." },
  { id: "opportunities", label: "Opportunities", angle: 330, description: "Projects, publications, funding and more." },
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

/* ── Shared procedural glow texture (soft radial falloff) ─────────────── */

let glowTexture: THREE.CanvasTexture | null = null;

function getGlowTexture(): THREE.CanvasTexture {
  if (glowTexture) return glowTexture;
  const size = 256;
  const canvas = document.createElement("canvas");
  canvas.width = canvas.height = size;
  const ctx = canvas.getContext("2d")!;
  const grad = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
  grad.addColorStop(0, "rgba(255,224,166,0.9)");
  grad.addColorStop(0.3, "rgba(240,177,63,0.42)");
  grad.addColorStop(0.65, "rgba(240,177,63,0.12)");
  grad.addColorStop(1, "rgba(240,177,63,0)");
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, size, size);
  glowTexture = new THREE.CanvasTexture(canvas);
  return glowTexture;
}

/* ── Fresnel rim shader (glass-sphere edge glow) ──────────────────────── */

const FRESNEL_VERT = /* glsl */ `
  varying vec3 vNormal;
  varying vec3 vViewDir;
  void main() {
    vNormal = normalize(normalMatrix * normal);
    vec4 mv = modelViewMatrix * vec4(position, 1.0);
    vViewDir = normalize(-mv.xyz);
    gl_Position = projectionMatrix * mv;
  }
`;

const FRESNEL_FRAG = /* glsl */ `
  uniform vec3 uColor;
  uniform float uPower;
  uniform float uIntensity;
  varying vec3 vNormal;
  varying vec3 vViewDir;
  void main() {
    float f = pow(1.0 - abs(dot(normalize(vNormal), normalize(vViewDir))), uPower);
    gl_FragColor = vec4(uColor * f * uIntensity, f * uIntensity * 0.9);
  }
`;

function useSceneConfig(): { compact: boolean; s: number } {
  // Layout role derives from canvas WIDTH, not aspect. Radial scale is
  // continuous so paths + labels stay contained across cell sizes.
  const width = useThree((state) => state.size.width);
  const compact = width < 640;
  const s = Math.min(1, Math.max(0.55, width / 1400));
  return { compact, s };
}

/* ── SparkCore — glowing 3D SPARK sphere ──────────────────────────────── */

function SparkCore({ reduced }: { reduced: boolean }) {
  const spinRef = useRef<THREE.Group>(null);
  const haloRef = useRef<THREE.Group>(null);
  const lightRef = useRef<THREE.PointLight>(null);

  const fresnelUniforms = useMemo(
    () => ({
      uColor: { value: new THREE.Color(0xf0b13f) },
      uPower: { value: 2.6 },
      uIntensity: { value: 1.5 },
    }),
    [],
  );

  useFrame(({ clock }, rawDelta) => {
    const delta = Math.min(rawDelta, 0.05);
    const t = clock.elapsedTime;
    if (!reduced && spinRef.current) spinRef.current.rotation.y += delta * 0.08;
    if (!reduced && haloRef.current) {
      const breathe = 1 + Math.sin(t * 0.9) * 0.045;
      haloRef.current.scale.setScalar(breathe);
    }
    if (!reduced && lightRef.current) {
      lightRef.current.intensity = 100 + Math.sin(t * 1.1) * 22;
    }
  });

  return (
    <group>
      {/* Soft surrounding halo — reinforces, never replaces, the sphere */}
      <group ref={haloRef}>
        <sprite scale={[11, 11, 1]}>
          <spriteMaterial map={getGlowTexture()} transparent opacity={0.34} blending={THREE.AdditiveBlending} depthWrite={false} />
        </sprite>
        <sprite scale={[6.4, 6.4, 1]}>
          <spriteMaterial map={getGlowTexture()} transparent opacity={0.5} blending={THREE.AdditiveBlending} depthWrite={false} />
        </sprite>
      </group>

      <group ref={spinRef}>
        {/* Luminous heart — visible through the glass shell */}
        <mesh>
          <sphereGeometry args={[1.18, 40, 40]} />
          <meshBasicMaterial color={0xffd98a} />
        </mesh>
        <mesh>
          <sphereGeometry args={[1.52, 32, 32]} />
          <meshBasicMaterial color={0xf7c469} transparent opacity={0.4} blending={THREE.AdditiveBlending} depthWrite={false} />
        </mesh>

        {/* Dark glass shell */}
        <mesh>
          <sphereGeometry args={[1.95, 48, 48]} />
          <meshStandardMaterial
            color={0x171a20}
            metalness={0.85}
            roughness={0.28}
            transparent
            opacity={0.34}
            emissive={0xf0b13f}
            emissiveIntensity={0.12}
            depthWrite={false}
          />
        </mesh>

        {/* Fresnel edge — reads as illuminated silhouette */}
        <mesh>
          <sphereGeometry args={[2.02, 48, 48]} />
          <shaderMaterial
            vertexShader={FRESNEL_VERT}
            fragmentShader={FRESNEL_FRAG}
            uniforms={fresnelUniforms}
            transparent
            blending={THREE.AdditiveBlending}
            depthWrite={false}
            side={THREE.FrontSide}
          />
        </mesh>

        {/* Lat/long wireframe topology */}
        <mesh>
          <sphereGeometry args={[2.1, 30, 22]} />
          <meshBasicMaterial color={0xf0b13f} transparent opacity={0.3} wireframe depthWrite={false} />
        </mesh>

        {/* Equatorial accent ring on the sphere */}
        <mesh rotation={[Math.PI / 2.15, 0, 0.2]}>
          <torusGeometry args={[2.24, 0.02, 8, 96]} />
          <meshBasicMaterial color={0xffd98a} transparent opacity={0.5} side={THREE.DoubleSide} depthWrite={false} />
        </mesh>
      </group>

      {/* Core point light — primary source, gently breathing */}
      <pointLight ref={lightRef} color={0xf0b13f} intensity={100} distance={40} decay={2} />

      {/* SPARK wordmark inside the sphere */}
      <Html center position={[0, 0, 0]} style={{ pointerEvents: "none" }} zIndexRange={[5, 0]}>
        <span className="font-display text-2xl md:text-3xl font-bold tracking-[0.16em] text-accent-bright drop-shadow-[0_0_24px_rgba(240,177,63,0.75)] select-none">
          SPARK
        </span>
      </Html>
    </group>
  );
}

/* ── OrbitalSystem — five readable tilted planes carrying the nodes ───── */

interface OrbitPlane {
  radius: number;
  tilt: [number, number, number];
  speed: number;
  opacity: number;
}

const ORBIT_PLANES: OrbitPlane[] = [
  { radius: 4.8, tilt: [0.18, 0, -0.08], speed: 0.05, opacity: 0.5 },
  { radius: 5.8, tilt: [-0.3, 0, 0.24], speed: -0.038, opacity: 0.42 },
  { radius: 6.8, tilt: [0.42, 0, -0.3], speed: 0.03, opacity: 0.36 },
  { radius: 7.9, tilt: [-0.5, 0, 0.38], speed: -0.024, opacity: 0.3 },
  { radius: 5.3, tilt: [0.62, 0, 0.5], speed: 0.043, opacity: 0.46 },
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
        const node = NODES[i];
        const r = plane.radius * s;
        return (
          <group
            key={node.id}
            ref={(el) => {
              groupRefs.current[i] = el;
            }}
            rotation={plane.tilt}
          >
            {/* Orbit path — visibly readable, additive glow */}
            <mesh rotation={[Math.PI / 2, 0, 0]}>
              <torusGeometry args={[r, 0.022, 8, 180]} />
              <meshBasicMaterial
                color={0xf0b13f}
                transparent
                opacity={plane.opacity}
                side={THREE.DoubleSide}
                depthWrite={false}
                blending={THREE.AdditiveBlending}
              />
            </mesh>

            {/* Path markers make the orbital motion perceptible */}
            {(() => {
              const base = (node.angle * Math.PI) / 180;
              return [110, 235].map((offset) => {
                const a = base + (offset * Math.PI) / 180;
                return (
                  <mesh key={offset} position={[Math.cos(a) * r, 0, Math.sin(a) * r]}>
                    <sphereGeometry args={[0.055, 8, 8]} />
                    <meshBasicMaterial color={0xffd98a} transparent opacity={0.8} />
                  </mesh>
                );
              });
            })()}

            {/* Travelling node */}
            <SparkNode
              node={node}
              radius={r}
              selected={selectedId === node.id}
              onSelect={onSelect}
              reduced={reduced}
              compact={compact}
            />
          </group>
        );
      })}
    </group>
  );
}

/* ── SparkNode — icon chip + glow container + title + description ─────── */

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
      const pulse = 1 + Math.sin(clock.elapsedTime * 1.3 + node.angle) * 0.08;
      const target = active ? 1.4 : pulse;
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
      {/* Node halo */}
      <sprite scale={[2.4, 2.4, 1]}>
        <spriteMaterial map={getGlowTexture()} transparent opacity={active ? 0.55 : 0.34} blending={THREE.AdditiveBlending} depthWrite={false} />
      </sprite>

      {/* Glow shell */}
      <mesh>
        <sphereGeometry args={[0.52, 16, 16]} />
        <meshBasicMaterial color={0xf0b13f} transparent opacity={active ? 0.34 : 0.18} blending={THREE.AdditiveBlending} depthWrite={false} />
      </mesh>

      {/* Outer containment ring */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.66, 0.025, 8, 56]} />
        <meshBasicMaterial color={0xf0b13f} transparent opacity={active ? 0.9 : 0.55} side={THREE.DoubleSide} depthWrite={false} />
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
        <sphereGeometry args={[0.3, 20, 20]} />
        <meshStandardMaterial
          color={0xf0b13f}
          emissive={0xffc861}
          emissiveIntensity={active ? 2.6 : 1.5}
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
          position={[0, 1.35, 0]}
          style={{ pointerEvents: "none", opacity: active ? 1 : 0.85, transition: "opacity 200ms" }}
          zIndexRange={[5, 0]}
        >
          <div className="flex flex-col items-center gap-1.5">
            {/* Circular icon container */}
            <span className={cn(
              "flex size-9 items-center justify-center rounded-full border backdrop-blur-sm",
              active
                ? "border-accent bg-accent/15 text-accent shadow-glow"
                : "border-accent/60 bg-base-deep/85 text-accent",
            )}>
              <PillarIcon id={node.id} className="size-[18px]" />
            </span>
            <span className="flex flex-col items-center gap-0.5">
              <span className={cn(
                "font-mono text-[11px] font-semibold uppercase tracking-[0.16em] drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)]",
                active ? "text-accent" : "text-ink",
              )}>
                {node.label}
              </span>
              <span className="max-w-[150px] text-center text-[10px] leading-snug text-ink-secondary drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)]">
                {node.description}
              </span>
            </span>
          </div>
        </Html>
      </group>
    </group>
  );
}

/* ── EnergyPlatform — launch-platform structure beneath the core ──────── */

function EnergyPlatform({ reduced, s }: { reduced: boolean; s: number }) {
  const spokeRef = useRef<THREE.Group>(null);
  const arcRef = useRef<THREE.Group>(null);

  useFrame((_, rawDelta) => {
    const delta = Math.min(rawDelta, 0.05);
    if (reduced) return;
    if (spokeRef.current) spokeRef.current.rotation.y += delta * 0.018;
    if (arcRef.current) arcRef.current.rotation.y -= delta * 0.05;
  });

  const y = -2.35;

  // Radial spokes
  const spokes = useMemo(() => {
    const g = new THREE.BufferGeometry();
    const pts: number[] = [];
    for (let i = 0; i < 16; i++) {
      const a = (i / 16) * Math.PI * 2;
      pts.push(Math.cos(a) * 2.6 * s, 0, Math.sin(a) * 2.6 * s);
      pts.push(Math.cos(a) * 5.2 * s, 0, Math.sin(a) * 5.2 * s);
    }
    g.setAttribute("position", new THREE.BufferAttribute(new Float32Array(pts), 3));
    return g;
  }, [s]);

  // Converging energy traces: platform rim → up toward the core
  const traces = useMemo(() => {
    const g = new THREE.BufferGeometry();
    const pts: number[] = [];
    for (let i = 0; i < 8; i++) {
      const a = (i / 8) * Math.PI * 2 + 0.39;
      pts.push(Math.cos(a) * 5.1 * s, 0.05, Math.sin(a) * 5.1 * s);
      pts.push(Math.cos(a) * 2.1 * s, 1.9, Math.sin(a) * 2.1 * s);
    }
    g.setAttribute("position", new THREE.BufferAttribute(new Float32Array(pts), 3));
    return g;
  }, [s]);

  return (
    <group position={[0, y, 0]}>
      {/* Platform glow pooling under the core */}
      <sprite position={[0, 0.4, 0]} scale={[8.5, 5, 1]}>
        <spriteMaterial map={getGlowTexture()} transparent opacity={0.3} blending={THREE.AdditiveBlending} depthWrite={false} />
      </sprite>

      {/* Concentric annuli */}
      {[
        { inner: 2.45, outer: 2.54, opacity: 0.32 },
        { inner: 3.15, outer: 3.21, opacity: 0.22 },
        { inner: 3.85, outer: 3.92, opacity: 0.16 },
        { inner: 4.55, outer: 4.6, opacity: 0.11 },
        { inner: 5.2, outer: 5.27, opacity: 0.07 },
      ].map((ring, i) => (
        <group key={`ring-${i}`}>
          <mesh rotation={[-Math.PI / 2, 0, 0]}>
            <ringGeometry args={[ring.inner * s, ring.outer * s, 96]} />
            <meshBasicMaterial color={0xf0b13f} transparent opacity={ring.opacity} side={THREE.DoubleSide} depthWrite={false} />
          </mesh>
          {i % 2 === 0 ? (
            <mesh rotation={[-Math.PI / 2, 0, 0]}>
              <torusGeometry args={[ring.inner * s, 0.014, 6, 120]} />
              <meshBasicMaterial color={0xffd98a} transparent opacity={0.24} depthWrite={false} />
            </mesh>
          ) : null}
        </group>
      ))}

      {/* Rotating radial spokes */}
      <group ref={spokeRef}>
        <lineSegments geometry={spokes}>
          <lineBasicMaterial color={0xf0b13f} transparent opacity={0.13} depthWrite={false} />
        </lineSegments>
      </group>

      {/* Counter-rotating illuminated arc segments */}
      <group ref={arcRef}>
        {[0, 1, 2].map((i) => (
          <mesh key={i} rotation={[-Math.PI / 2, 0, (i * 2 * Math.PI) / 3]}>
            <ringGeometry args={[4.15 * s, 4.3 * s, 64, 1, 0, 1.15]} />
            <meshBasicMaterial color={0xffd98a} transparent opacity={0.3} side={THREE.DoubleSide} depthWrite={false} />
          </mesh>
        ))}
      </group>

      {/* Converging traces — platform powering up into the core */}
      <lineSegments geometry={traces}>
        <lineBasicMaterial color={0xf0b13f} transparent opacity={0.14} depthWrite={false} />
      </lineSegments>

      {/* Vertical energy column between platform and core */}
      <mesh position={[0, 1.15, 0]}>
        <cylinderGeometry args={[0.1, 0.3, 2.3, 14, 1, true]} />
        <meshBasicMaterial
          color={0xf7c469}
          transparent
          opacity={0.17}
          side={THREE.DoubleSide}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </mesh>

      {/* Secondary localized light over the platform */}
      <pointLight position={[0, 1.4, 0]} color={0xf0b13f} intensity={26} distance={13} decay={2} />
    </group>
  );
}

/* ── TechnicalGrid — dark floor, grid, circuit-like traces ─────────────── */

function TechnicalGrid() {
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

    for (let i = 0; i < 54; i++) pushTrace(false);
    for (let i = 0; i < 16; i++) pushTrace(true);

    const mk = (arr: number[]) => {
      const g = new THREE.BufferGeometry();
      g.setAttribute("position", new THREE.BufferAttribute(new Float32Array(arr), 3));
      return g;
    };
    return { dimGeometry: mk(dim), litGeometry: mk(lit) };
  }, []);

  return (
    <group position={[0, -2.6, 0]}>
      <gridHelper args={[48, 48, 0x333945, 0x191c22]} />
      <lineSegments geometry={dimGeometry}>
        <lineBasicMaterial color={0xffffff} transparent opacity={0.05} depthWrite={false} />
      </lineSegments>
      <lineSegments geometry={litGeometry}>
        <lineBasicMaterial color={0xf0b13f} transparent opacity={0.2} depthWrite={false} />
      </lineSegments>
    </group>
  );
}

/* ── ParticleField — floating dust (Points, additive) ──────────────────── */

function ParticleField({ count, s, reduced }: { count: number; s: number; reduced: boolean }) {
  const pointsRef = useRef<THREE.Points>(null);

  const geometry = useMemo(() => {
    const rand = mulberry32(0x5eed);
    const g = new THREE.BufferGeometry();
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const radius = (2.5 + rand() * 8.5) * Math.max(s, 0.72);
      const theta = rand() * Math.PI * 2;
      const phi = Math.acos(2 * rand() - 1);
      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.cos(phi) * 0.72;
      positions[i * 3 + 2] = radius * Math.sin(phi) * Math.sin(theta);
      if (rand() > 0.5) {
        colors[i * 3] = 1;
        colors[i * 3 + 1] = 0.74;
        colors[i * 3 + 2] = 0.2;
      } else {
        colors[i * 3] = 0.82;
        colors[i * 3 + 1] = 0.86;
        colors[i * 3 + 2] = 0.94;
      }
    }
    g.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    g.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    return g;
  }, [count, s]);

  // Slow drift — perceptible life without distraction
  useFrame((_, rawDelta) => {
    const delta = Math.min(rawDelta, 0.05);
    if (!reduced && pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.009;
    }
  });

  return (
    <points ref={pointsRef} geometry={geometry}>
      <pointsMaterial
        size={0.09}
        vertexColors
        transparent
        opacity={0.68}
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
  const steelColor = useMemo(() => new THREE.Color(0x454c58), []);

  const transforms = useMemo(() => {
    const rand = mulberry32(0xdb15);
    return Array.from({ length: count }, () => ({
      x: (rand() * 2 - 1) * 10 * Math.max(s, 0.72),
      y: (rand() * 2 - 1) * 5.5 * Math.max(s, 0.72),
      z: (rand() * 2 - 1) * 10 * Math.max(s, 0.72),
      scale: 0.35 + rand() * 1.25,
      rot: [rand() * Math.PI, rand() * Math.PI, rand() * Math.PI],
      gold: rand() > 0.72,
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
      groupRef.current.rotation.y += delta * 0.007;
    }
  });

  return (
    <group ref={groupRef}>
      <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
        <tetrahedronGeometry args={[0.085, 0]} />
        <meshStandardMaterial metalness={0.9} roughness={0.28} />
      </instancedMesh>
    </group>
  );
}

/* ── Atmosphere — soft distant backdrop breaking the flat black ────────── */

function Atmosphere() {
  return (
    <sprite position={[0, -2, -26]} scale={[64, 44, 1]}>
      <spriteMaterial map={getGlowTexture()} color={0x2c3a55} transparent opacity={0.32} blending={THREE.AdditiveBlending} depthWrite={false} />
    </sprite>
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
    // approved full framing with the dominant core.
    if (width < 640) {
      camera.position.set(0, 7.2, 30);
    } else {
      camera.position.set(0, 4.6, 17);
    }
    camera.lookAt(0, -0.5, 0);
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

  const particleCount = throttled ? 800 : compact ? 1600 : 3200;
  const debrisCount = throttled ? 18 : compact ? 32 : 60;

  return (
    <>
      <fog attach="fog" args={[0x0a0b0d, 10, 42]} />

      {/* Lighting hierarchy — core primary, platform secondary, env tertiary */}
      <ambientLight color={0x93a4c4} intensity={0.18} />
      <directionalLight position={[-8, 12, -4]} color={0xaebcd8} intensity={0.5} castShadow={false} />
      <directionalLight position={[6, 6, -10]} color={0xf0b13f} intensity={0.28} castShadow={false} />

      <ResponsiveCamera />
      <Atmosphere />
      <TechnicalGrid />
      <EnergyPlatform reduced={reduced} s={s} />
      <SparkCore reduced={reduced} />
      <OrbitSystem reduced={reduced} selectedId={selectedNodeId} onSelect={onNodeSelect} s={s} compact={compact} />
      <ParticleField count={particleCount} s={s} reduced={reduced} />
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
      camera={{ position: [0, 4.6, 17], fov: 42 }}
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
