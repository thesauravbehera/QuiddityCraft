// @ts-nocheck
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
import { useRef, useMemo } from 'react';
import * as THREE from 'three';

function Starfield() {
  const starsRef = useRef<THREE.Points>(null);

  // Slow horizontal rotation for the background stars
  useFrame((state, delta) => {
    if (starsRef.current) {
      starsRef.current.rotation.y -= delta * 0.05;
    }
  });

  return (
    <Stars
      ref={starsRef}
      radius={100}
      depth={50}
      count={4000}
      factor={3}
      saturation={0}
      fade
      speed={1}
    />
  );
}



export function AmbientBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 bg-[#02000A]">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <fog attach="fog" args={['#02000A', 10, 50]} />
        <Starfield />
      </Canvas>
      {/* Gradient mask to blend the top and bottom into the void smoothly */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#02000A] via-transparent to-[#02000A] opacity-80" />
    </div>
  );
}
