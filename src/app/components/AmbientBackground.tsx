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

// Intense, downward galactic star fall effect
function GalacticStarFall() {
  const pointsRef = useRef<THREE.Points>(null);
  
  const particleCount = 400; // Drastically reduced for subtlety
  
  const positions = useMemo(() => {
    const coords = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
        coords[i*3] = (Math.random() - 0.5) * 100; // X
        coords[i*3+1] = (Math.random() - 0.5) * 100; // Y
        coords[i*3+2] = (Math.random() - 0.5) * 100; // Z
    }
    return coords;
  }, [particleCount]);

  useFrame((state, delta) => {
    if (pointsRef.current) {
      const positionAttribute = pointsRef.current.geometry.attributes.position;
      const array = positionAttribute.array as Float32Array;
      
      for (let i = 0; i < particleCount; i++) {
        // Fast vertical falling warp
        array[i*3+1] -= delta * 30; // speed of fall
        
        // Wrap around seamlessly
        if (array[i*3+1] < -50) {
          array[i*3+1] = 50; 
        }
      }
      
      positionAttribute.needsUpdate = true;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute 
            attach="attributes-position" 
            count={particleCount} 
            array={positions} 
            itemSize={3} 
        />
      </bufferGeometry>
      {/* Creates vertical streaks to look like falling objects */}
      <pointsMaterial 
        color="#c8d2ff" 
        size={0.15} 
        sizeAttenuation 
        transparent 
        opacity={0.25} // Reduced opacity
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

export function AmbientBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 bg-[#060608]">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <fog attach="fog" args={['#060608', 10, 50]} />
        <Starfield />
        <GalacticStarFall />
      </Canvas>
      {/* Gradient mask to blend the top and bottom into the void smoothly */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#060608] via-transparent to-[#060608] opacity-80" />
    </div>
  );
}
