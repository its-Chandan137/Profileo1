"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useEffect, useRef } from "react";
import * as THREE from "three";

function WireSphere() {
  const groupRef = useRef<THREE.Group>(null);
  const meshRef = useRef<THREE.LineSegments>(null);

  useFrame(({ pointer }) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y += 0.0035;
    groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, pointer.y * 0.18, 0.04);
    groupRef.current.rotation.z = THREE.MathUtils.lerp(groupRef.current.rotation.z, -pointer.x * 0.12, 0.04);
  });

  useEffect(() => {
    const mesh = meshRef.current;
    return () => {
      mesh?.geometry.dispose();
      if (Array.isArray(mesh?.material)) {
        mesh.material.forEach((material) => material.dispose());
      } else {
        mesh?.material.dispose();
      }
    };
  }, []);

  return (
    <group ref={groupRef}>
      <lineSegments ref={meshRef}>
        <wireframeGeometry args={[new THREE.IcosahedronGeometry(2.28, 4)]} />
        <lineBasicMaterial color="#f5c518" transparent opacity={0.74} />
      </lineSegments>
      <mesh>
        <icosahedronGeometry args={[2.18, 1]} />
        <meshBasicMaterial color="#f5c518" transparent opacity={0.045} wireframe />
      </mesh>
    </group>
  );
}

export default function HeroSphere() {
  return (
    <div className="h-full min-h-[23rem] w-full rounded-lg border border-gold/35 bg-[#101010]">
      <Canvas camera={{ position: [0, 0, 6.2], fov: 45 }} dpr={[1, 1.75]}>
        <color attach="background" args={["#101010"]} />
        <ambientLight intensity={1.8} />
        <WireSphere />
        <OrbitControls enableZoom={false} enablePan={false} rotateSpeed={0.25} />
      </Canvas>
    </div>
  );
}
