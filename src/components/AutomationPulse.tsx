"use client";
import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function AutomationPulse() {
  const count = 40;
  const meshRef = useRef<THREE.InstancedMesh>(null);

  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      const time = Math.random() * 100;
      const factor = 20 + Math.random() * 100;
      const speed = 0.01 + Math.random() / 200;
      const xFactor = -5 + Math.random() * 10;
      const yFactor = -5 + Math.random() * 10;
      const zFactor = -5 + Math.random() * 10;
      temp.push({ time, factor, speed, xFactor, yFactor, zFactor });
    }
    return temp;
  }, [count]);

  const dummy = useMemo(() => new THREE.Object3D(), []);

  useFrame((state) => {
    particles.forEach((particle, i) => {
      let { time, factor, speed, xFactor, yFactor, zFactor } = particle;
      const t = (particle.time += speed);
      
      dummy.position.set(
        Math.cos(t) + Math.sin(t * 1) / 10 + xFactor,
        Math.sin(t) + Math.cos(t * 2) / 10 + yFactor,
        Math.sin(t) + Math.cos(t * 1) / 10 + zFactor
      );
      
      dummy.scale.setScalar(Math.cos(t / 10) * 0.2);
      dummy.updateMatrix();
      meshRef.current?.setMatrixAt(i, dummy.matrix);
    });
    if (meshRef.current) meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
      <sphereGeometry args={[0.1, 16, 16]} />
      <meshStandardMaterial color="#00f2ff" emissive="#00f2ff" emissiveIntensity={2} />
    </instancedMesh>
  );
}