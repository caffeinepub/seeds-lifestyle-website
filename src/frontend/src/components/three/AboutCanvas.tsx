import { Float, MeshDistortMaterial } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import type * as THREE from "three";

function OrganicShape() {
  const meshRef = useRef<THREE.Mesh>(null);
  const mesh2Ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
      meshRef.current.rotation.x =
        Math.sin(state.clock.elapsedTime * 0.2) * 0.2;
    }
    if (mesh2Ref.current) {
      mesh2Ref.current.rotation.y = -state.clock.elapsedTime * 0.2;
      mesh2Ref.current.rotation.z = state.clock.elapsedTime * 0.15;
    }
  });

  return (
    <>
      <Float speed={1.5} floatIntensity={0.5}>
        <mesh ref={meshRef}>
          <icosahedronGeometry args={[1, 2]} />
          <MeshDistortMaterial
            color="#2F4A2E"
            distort={0.35}
            speed={2}
            roughness={0.3}
            metalness={0.2}
            transparent
            opacity={0.85}
          />
        </mesh>
      </Float>
      <Float speed={2} floatIntensity={0.3}>
        <mesh ref={mesh2Ref} position={[1.2, 0.8, -0.5]}>
          <octahedronGeometry args={[0.5, 0]} />
          <meshStandardMaterial
            color="#C4A882"
            roughness={0.5}
            metalness={0.1}
            transparent
            opacity={0.7}
          />
        </mesh>
      </Float>
      <Float speed={1.8} floatIntensity={0.4}>
        <mesh position={[-0.8, -0.6, 0.3]}>
          <torusGeometry args={[0.4, 0.12, 8, 20]} />
          <meshStandardMaterial
            color="#4E6B3A"
            roughness={0.4}
            transparent
            opacity={0.6}
          />
        </mesh>
      </Float>
    </>
  );
}

export default function AboutCanvas() {
  return (
    <Canvas
      camera={{ position: [0, 0, 4], fov: 45 }}
      style={{ background: "transparent" }}
      gl={{ alpha: true, antialias: true }}
    >
      <ambientLight intensity={0.8} />
      <directionalLight position={[3, 3, 3]} intensity={1.0} color="#FFF5E0" />
      <OrganicShape />
    </Canvas>
  );
}
