"use client";
import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Text } from "@react-three/drei";
import * as THREE from "three";

const technologies = [
  "Next.js", "React", "Three.js", "Tailwind", 
  "JavaScript", "HTML", "CSS", "Automation",
  "WordPress", "Brilliant Directory", "Python", "API"
];

function TechWord({ word, position }: { word: THREE.Vector3; position: THREE.Vector3 }) {
  const textRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (textRef.current) {
      // Keep text facing the user
      textRef.current.quaternion.copy(state.camera.quaternion);
    }
  });

  return (
    <group position={position} ref={textRef}>
      <Text
        fontSize={0.3}
        color="#8b5cf6"
        anchorX="center"
        anchorY="middle"
        fillOpacity={0.5}
      >
        {word.toString()}
      </Text>
    </group>
  );
}

export default function TechOrbit() {
  const groupRef = useRef<THREE.Group>(null);

  const points = useMemo(() => {
    const p = [];
    const numPoints = technologies.length;
    const radius = 4; // Increased distance to avoid clashing with the sphere
    for (let i = 0; i < numPoints; i++) {
      const phi = Math.acos(-1 + (2 * i) / numPoints);
      const theta = Math.sqrt(numPoints * Math.PI) * phi;
      p.push(new THREE.Vector3(
        radius * Math.cos(theta) * Math.sin(phi),
        radius * Math.sin(theta) * Math.sin(phi),
        radius * Math.cos(phi)
      ));
    }
    return p;
  }, []);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.05;
    }
  });

  return (
    <group ref={groupRef}>
      {technologies.map((tech, i) => (
        <TechWord key={i} word={tech as any} position={points[i]} />
      ))}
    </group>
  );
}