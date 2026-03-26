import { Float, MeshDistortMaterial } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import type * as THREE from "three";

function FloatingShape({
  position,
  geometry,
  color,
  size,
  speed,
  distort,
}: {
  position: [number, number, number];
  geometry: "icosahedron" | "torus" | "sphere" | "octahedron" | "dodecahedron";
  color: string;
  size: number;
  speed: number;
  distort: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x = state.clock.elapsedTime * speed * 0.3;
    meshRef.current.rotation.y = state.clock.elapsedTime * speed * 0.2;
  });

  const geo = useMemo(() => {
    switch (geometry) {
      case "icosahedron":
        return <icosahedronGeometry args={[size, 1]} />;
      case "torus":
        return <torusGeometry args={[size, size * 0.35, 12, 24]} />;
      case "sphere":
        return <sphereGeometry args={[size, 16, 16]} />;
      case "octahedron":
        return <octahedronGeometry args={[size, 0]} />;
      case "dodecahedron":
        return <dodecahedronGeometry args={[size, 0]} />;
    }
  }, [geometry, size]);

  return (
    <Float speed={speed} rotationIntensity={0.4} floatIntensity={0.6}>
      <mesh ref={meshRef} position={position}>
        {geo}
        <MeshDistortMaterial
          color={color}
          distort={distort}
          speed={speed}
          roughness={0.4}
          metalness={0.1}
          transparent
          opacity={0.7}
        />
      </mesh>
    </Float>
  );
}

const shapes = [
  {
    id: "s0",
    position: [-4.5, 2, -3] as [number, number, number],
    geometry: "icosahedron" as const,
    color: "#2F4A2E",
    size: 0.9,
    speed: 0.8,
    distort: 0.3,
  },
  {
    id: "s1",
    position: [4.2, 1.5, -4] as [number, number, number],
    geometry: "torus" as const,
    color: "#4E6B3A",
    size: 0.7,
    speed: 0.6,
    distort: 0.2,
  },
  {
    id: "s2",
    position: [-2, -2.5, -2] as [number, number, number],
    geometry: "sphere" as const,
    color: "#6B8F5B",
    size: 0.6,
    speed: 1.0,
    distort: 0.4,
  },
  {
    id: "s3",
    position: [3, -1.5, -3] as [number, number, number],
    geometry: "octahedron" as const,
    color: "#8B6B4A",
    size: 0.75,
    speed: 0.7,
    distort: 0.25,
  },
  {
    id: "s4",
    position: [0.5, 3, -5] as [number, number, number],
    geometry: "dodecahedron" as const,
    color: "#C4A882",
    size: 0.8,
    speed: 0.5,
    distort: 0.15,
  },
  {
    id: "s5",
    position: [-3.5, -1, -4] as [number, number, number],
    geometry: "icosahedron" as const,
    color: "#3D6B3A",
    size: 0.55,
    speed: 0.9,
    distort: 0.35,
  },
  {
    id: "s6",
    position: [5, 3.5, -5] as [number, number, number],
    geometry: "sphere" as const,
    color: "#A0855C",
    size: 0.5,
    speed: 1.1,
    distort: 0.3,
  },
  {
    id: "s7",
    position: [-5, 0.5, -5] as [number, number, number],
    geometry: "torus" as const,
    color: "#2F4A2E",
    size: 0.65,
    speed: 0.65,
    distort: 0.2,
  },
  {
    id: "s8",
    position: [2.5, -3, -4] as [number, number, number],
    geometry: "octahedron" as const,
    color: "#5A7A4A",
    size: 0.45,
    speed: 1.2,
    distort: 0.4,
  },
  {
    id: "s9",
    position: [-1, 1, -6] as [number, number, number],
    geometry: "dodecahedron" as const,
    color: "#E7D6BF",
    size: 1.1,
    speed: 0.4,
    distort: 0.1,
  },
];

export default function HeroCanvas() {
  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 50 }}
      style={{ background: "transparent" }}
      gl={{ alpha: true, antialias: true }}
    >
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} intensity={1.2} color="#FFF5E0" />
      <directionalLight
        position={[-5, -3, 2]}
        intensity={0.4}
        color="#C4E8B0"
      />
      {shapes.map((shape) => (
        <FloatingShape key={shape.id} {...shape} />
      ))}
    </Canvas>
  );
}
