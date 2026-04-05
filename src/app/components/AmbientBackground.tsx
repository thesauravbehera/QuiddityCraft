import { Canvas, useFrame } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

function Starfield() {
  const starsRef = useRef<THREE.Points>(null);

  // Subtle falling/rotating animation mimicking the Antigravity galaxy theme
  useFrame((state, delta) => {
    if (starsRef.current) {
      starsRef.current.rotation.y += delta * 0.02;
      starsRef.current.rotation.x += delta * 0.01;
      starsRef.current.position.y -= delta * 0.5;

      // Reset position to create continuous fall
      if (starsRef.current.position.y < -50) {
        starsRef.current.position.y = 50;
      }
    }
  });

  return (
    <Stars
      ref={starsRef}
      radius={100}
      depth={50}
      count={5000}
      factor={4}
      saturation={0}
      fade
      speed={1}
    />
  );
}

export function AmbientBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 bg-[#060608]">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <fog attach="fog" args={['#060608', 10, 50]} />
        <Starfield />
      </Canvas>
    </div>
  );
}
