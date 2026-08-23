"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, Html } from "@react-three/drei";
import * as THREE from "three";
import { useEffect, useMemo, useRef, useState } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { useWebGLCapability } from "@/hooks/useWebGLCapability";
import { useThreePerformance } from "@/hooks/useThreePerformance";
import { cn } from "@/lib/utils";
import { SvgFallback } from "./SvgFallback";
import { StaticFallback } from "./StaticFallback";

/* ── Types ────────────────────────────────────────────────────────────── */

interface NodeData {
  id: string;
  label: string;
  angle: number;
  orbit: number;
  color: number;
  description: string;
}

const NODES: NodeData[] = [
  { id: "research", label: "Research", angle: 0, orbit: 6, color: 0xf0b13f, description: "Explore new ideas and learn how research works." },
  { id: "innovation", label: "Innovation", angle: 72, orbit: 6, color: 0xf0b13f, description: "Turn ideas into projects and practical solutions." },
  { id: "collaboration", label: "Collaboration", angle: 144, orbit: 8, color: 0xf0b13f, description: "Work and learn with students, seniors and mentors." },
  { id: "workshops", label: "Workshops", angle: 216, orbit: 8, color: 0xf0b13f, description: "Learn new skills through interactive sessions." },
  { id: "opportunities", label: "Opportunities", angle: 288, orbit: 6, color: 0xf0b13f, description: "Explore projects, publications, funding and other opportunities." },
];

/* ── SparkCore ─────────────────────────────────────────────────────────── */

function SparkCore({ reduced }: { reduced: boolean }) {
  const coreRef = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (!reduced && coreRef.current) {
      coreRef.current.rotation.y += delta * 0.05;
      coreRef.current.rotation.x += delta * 0.02;
    }
  });

  return (
    <group>
      {/* Outer glow shell */}
      <mesh>
        <icosahedronGeometry args={[2.8, 0]} />
        <meshBasicMaterial
          color={0xf0b13f}
          transparent
          opacity={0.08}
          side={THREE.BackSide}
        />
      </mesh>

      {/* Core geometry */}
      <mesh ref={coreRef}>
        <icosahedronGeometry args={[1.6, 1]} />
        <meshStandardMaterial
          color={0x1a1c20}
          metalness={0.3}
          roughness={0.6}
          emissive={0xf0b13f}
          emissiveIntensity={0.15}
          wireframe={true}
        />
      </mesh>

      {/* Inner pulse */}
      <mesh>
        <sphereGeometry args={[0.8, 32, 32]} />
        <meshBasicMaterial
          color={0xf0b13f}
          transparent
          opacity={0.25}
          side={THREE.BackSide}
        />
      </mesh>

      {/* Core wordmark — mirrors the locked composition */}
      <Html center position={[0, 0, 0]} style={{ pointerEvents: "none" }} zIndexRange={[5, 0]}>
        <span className="font-display text-2xl font-semibold tracking-[0.12em] text-accent drop-shadow-[0_0_16px_rgba(240,177,63,0.45)] select-none">
          SPARK
        </span>
      </Html>
    </group>
  );
}

/* ── OrbitRings ────────────────────────────────────────────────────────── */

function OrbitRings({ reduced }: { reduced: boolean }) {
  const ringRefs = useRef<(THREE.Mesh | null)[]>([]);

  useFrame((_, delta) => {
    if (reduced) return;
    ringRefs.current.forEach((ring, i) => {
      if (ring) {
        ring.rotation.z += delta * (i % 2 === 0 ? 0.02 : -0.015);
        ring.rotation.x += delta * 0.005;
      }
    });
  });

  return (
    <group>
      {[
        { radius: 6, tube: 0.02, segments: 128, rotation: [Math.PI / 2, 0, 0.15] },
        { radius: 8, tube: 0.015, segments: 128, rotation: [-Math.PI / 2, 0, -0.1] },
      ].map((ring, i) => (
        <mesh key={i} ref={(el) => (ringRefs.current[i] = el)}>
          <torusGeometry args={[ring.radius, ring.tube, 16, ring.segments]} />
          <meshBasicMaterial
            color={0xf0b13f}
            transparent
            opacity={0.12}
            side={THREE.DoubleSide}
            depthWrite={false}
          />
        </mesh>
      ))}
    </group>
  );
}

/* ── ParticleField (Points + additive blending) ────────────────────────── */

/** Deterministic PRNG — keeps render pure while varying particle placement. */
function mulberry32(seed: number) {
  return function () {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function ParticleField({ count }: { count: number }) {
  const geometry = useMemo(() => {
    const rand = mulberry32(0x5eed);
    const g = new THREE.BufferGeometry();
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const radius = 3 + rand() * 7;
      const theta = rand() * Math.PI * 2;
      const phi = Math.acos(2 * rand() - 1);
      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);
      if (rand() > 0.5) {
        colors[i * 3] = 1;
        colors[i * 3 + 1] = 0.7;
        colors[i * 3 + 2] = 0.1;
      } else {
        colors[i * 3] = 1;
        colors[i * 3 + 1] = 1;
        colors[i * 3 + 2] = 1;
      }
    }
    g.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    g.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    return g;
  }, [count]);

  return (
    <points geometry={geometry}>
      <pointsMaterial
        size={0.08}
        vertexColors
        transparent
        opacity={0.6}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        sizeAttenuation
      />
    </points>
  );
}

/* ── TechnicalGrid ─────────────────────────────────────────────────────── */

function TechnicalGrid() {
  return (
    <group>
      <gridHelper args={[20, 20, 0x2a2d33, 0x1a1c20]} />
    </group>
  );
}

/* ── SparkNode ─────────────────────────────────────────────────────────── */

interface SparkNodeProps {
  node: NodeData;
  onSelect: (node: NodeData) => void;
  selectedId: string | null;
  reduced: boolean;
}

function SparkNode({ node, onSelect, selectedId, reduced }: SparkNodeProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);
  const isSelected = selectedId === node.id;

  const rad = (node.angle * Math.PI) / 180;
  const x = node.orbit * Math.cos(rad);
  const z = node.orbit * Math.sin(rad);

  useFrame((_, delta) => {
    if (!reduced && meshRef.current) {
      meshRef.current.rotation.y += delta * 0.3;
      meshRef.current.rotation.x += delta * 0.15;
    }
  });

  return (
    <group
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      onClick={() => onSelect(node)}
    >
      <mesh
        ref={meshRef}
        position={[x, 0, z]}
        scale={hovered || isSelected ? 1.3 : 1}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <octahedronGeometry args={[0.7, 1]} />
        <meshStandardMaterial
          color={node.color}
          metalness={0.2}
          roughness={0.5}
          emissive={isSelected || hovered ? node.color : 0x000000}
          emissiveIntensity={isSelected || hovered ? 0.4 : 0}
        />
      </mesh>

      {/* Label via Html overlay — mirrors the locked hero composition */}
      <Html
        transform
        center
        position={[x, 1.5, z]}
        style={{
          pointerEvents: "none",
          opacity: hovered || isSelected ? 1 : 0.75,
          transition: "opacity 200ms",
        }}
        zIndexRange={[5, 0]}
      >
        <div
          className={cn(
            "flex w-36 flex-col gap-1 border-l border-accent/60 pl-2",
            isSelected && "shadow-glow",
          )}
        >
          <span
            className={cn(
              "font-mono text-[10px] font-medium uppercase tracking-[0.18em]",
              isSelected || hovered ? "text-accent" : "text-ink",
            )}
          >
            {node.label}
          </span>
          <span className="text-[9px] leading-snug text-ink-secondary">
            {node.description}
          </span>
        </div>
      </Html>
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
    const aspect = size.width / Math.max(size.height, 1);
    // Narrow (mobile-block) canvases pull back so orbiting nodes and labels
    // stay inside the viewport; wide hero canvases keep the approved framing.
    const z = aspect < 1.1 ? 27 : 18;
    camera.position.set(0, 5, z);
    camera.lookAt(0, 0, 0);
  }, [camera, size]);

  return null;
}

/* ── SparkSceneInner ───────────────────────────────────────────────────── */

interface SparkSceneInnerProps {
  onNodeSelect: (node: NodeData) => void;
  selectedNodeId: string | null;
}

function SparkSceneInner({ onNodeSelect, selectedNodeId }: SparkSceneInnerProps) {
  const reduced = useReducedMotion();
  const { tier, prefersReducedMotion } = useWebGLCapability();
  const [runtimeThrottle, setRuntimeThrottle] = useState(false);

  // Static quality from capability detection; runtime downgrade from FPS.
  const isLowEndDevice = tier === "low" || prefersReducedMotion;
  const isLowEnd = isLowEndDevice || runtimeThrottle;
  const particleCount = isLowEnd ? 600 : 3000;

  return (
    <>
      <Canvas
        gl={{ preserveDrawingBuffer: false, antialias: !isLowEndDevice, alpha: true }}
        camera={{ position: [0, 5, 18], fov: 45 }}
        dpr={isLowEnd ? [1, 1.5] : [1, 2]}
        onCreated={({ gl }) => {
          gl.toneMapping = THREE.ACESFilmicToneMapping;
          gl.toneMappingExposure = 1;
        }}
      >
        {/* Fog for depth */}
        <fog attach="fog" args={[0x0a0b0d, 10, 35]} />

        {/* Lights */}
        <ambientLight intensity={0.6} />
        <directionalLight
          position={[10, 15, 10]}
          intensity={isLowEnd ? 0.5 : 0.8}
          castShadow={false}
        />
        <pointLight position={[0, 0, 0]} color={0xf0b13f} intensity={0.3} distance={20} decay={2} />

        {/* Scene objects */}
        <ResponsiveCamera />
        <TechnicalGrid />
        <OrbitRings reduced={reduced} />
        <SparkCore reduced={reduced} />
        <ParticleField count={particleCount} />
        <FpsGuard onThrottle={setRuntimeThrottle} />

        {/* Nodes */}
        {NODES.map((node) => (
          <SparkNode
            key={node.id}
            node={node}
            onSelect={onNodeSelect}
            selectedId={selectedNodeId}
            reduced={reduced}
          />
        ))}

        {/* Orbit controls — limited */}
        <OrbitControls
          enablePan={false}
          enableZoom={!isLowEnd}
          minZoom={0.8}
          maxZoom={3}
          maxPolarAngle={Math.PI / 2 - 0.1}
          minPolarAngle={0.15}
          enableDamping={true}
          dampingFactor={0.05}
          autoRotate={!reduced}
          autoRotateSpeed={0.2}
        />
      </Canvas>
    </>
  );
}

/* ── SparkScene (exported) ─────────────────────────────────────────────── */

interface SparkSceneProps {
  onNodeSelect?: (node: NodeData) => void;
}

export function SparkScene({ onNodeSelect }: SparkSceneProps) {
  const [selectedNodeId, setSelectedNodeId] = useState<string | null>(null);

  const handleSelect = (node: NodeData) => {
    setSelectedNodeId((prev) => (prev === node.id ? null : node.id));
    onNodeSelect?.(node);
  };

  const { webgl, tier, prefersReducedMotion } = useWebGLCapability();

  // Fallback chain
  if (!webgl || tier === "none") {
    return <StaticFallback />;
  }
  if (prefersReducedMotion || tier === "low") {
    return <SvgFallback />;
  }

  return <SparkSceneInner onNodeSelect={handleSelect} selectedNodeId={selectedNodeId} />;
}

/* ── NodeData & NODES (also exported for potential external use) ──────── */

export { NODES };
export type { NodeData };