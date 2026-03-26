import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import type * as THREE from "three";

function Particles({ count = 120 }: { count?: number }) {
  const meshRef = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 12;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 8;
    }
    return pos;
  }, [count]);

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.y = state.clock.elapsedTime * 0.03;
    meshRef.current.rotation.x = state.clock.elapsedTime * 0.015;
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        color="#6B8F5B"
        size={0.08}
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
}

const GEOMS = [
  {
    pos: [-5, 2, -3] as [number, number, number],
    color: "#2F4A2E",
    s: 0.5,
    id: "g0",
  },
  {
    pos: [5, -2, -4] as [number, number, number],
    color: "#4E6B3A",
    s: 0.4,
    id: "g1",
  },
  {
    pos: [0, 3, -5] as [number, number, number],
    color: "#6B8F5B",
    s: 0.3,
    id: "g2",
  },
  {
    pos: [-3, -3, -2] as [number, number, number],
    color: "#2F4A2E",
    s: 0.45,
    id: "g3",
  },
  {
    pos: [4, 2, -2] as [number, number, number],
    color: "#4E6B3A",
    s: 0.35,
    id: "g4",
  },
];

function FloatingGeoms() {
  const refs = useRef<(THREE.Mesh | null)[]>([]);

  useFrame((state) => {
    refs.current.forEach((mesh, i) => {
      if (!mesh) return;
      mesh.rotation.x = state.clock.elapsedTime * (0.2 + i * 0.05);
      mesh.rotation.y = state.clock.elapsedTime * (0.15 + i * 0.03);
      mesh.position.y =
        GEOMS[i].pos[1] + Math.sin(state.clock.elapsedTime * 0.5 + i) * 0.3;
    });
  });

  return (
    <>
      {GEOMS.map((g, i) => (
        <mesh
          key={g.id}
          ref={(el) => {
            refs.current[i] = el;
          }}
          position={g.pos}
        >
          <icosahedronGeometry args={[g.s, 0]} />
          <meshStandardMaterial
            color={g.color}
            roughness={0.4}
            metalness={0.1}
            transparent
            opacity={0.4}
          />
        </mesh>
      ))}
    </>
  );
}

export default function ContactCanvas() {
  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 60 }}
      style={{ background: "transparent" }}
      gl={{ alpha: true, antialias: true }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={0.8} color="#C4E8B0" />
      <Particles count={100} />
      <FloatingGeoms />
    </Canvas>
  );
}
