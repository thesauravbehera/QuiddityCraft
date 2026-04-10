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

// Intense, downward galactic star fall effect (warp speed)
function GalacticStarFall() {
  const pointsRef = useRef<THREE.Points>(null);
  
  const particleCount = 2000; // Increased for a hyperdrive effect
  
  const positions = useMemo(() => {
    const coords = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
        coords[i*3] = (Math.random() - 0.5) * 150; // X
        coords[i*3+1] = (Math.random() - 0.5) * 150; // Y
        coords[i*3+2] = (Math.random() - 0.5) * 150; // Z
    }
    return coords;
  }, [particleCount]);

  useFrame((state, delta) => {
    if (pointsRef.current) {
      const positionAttribute = pointsRef.current.geometry.attributes.position;
      const array = positionAttribute.array as Float32Array;
      
      for (let i = 0; i < particleCount; i++) {
        // Very fast vertical/forward falling warp
        array[i*3+1] -= delta * 150; // warp speed fall
        
        // Wrap around seamlessly
        if (array[i*3+1] < -75) {
          array[i*3+1] = 75; 
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
        color="#00ffff" 
        size={0.25} 
        sizeAttenuation 
        transparent 
        opacity={0.6} // Glowing bright cyan warp
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

export function AmbientBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 bg-[#02000A]">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <fog attach="fog" args={['#02000A', 10, 50]} />
        <Starfield />
        <GalacticStarFall />
      </Canvas>
      {/* Gradient mask to blend the top and bottom into the void smoothly */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#02000A] via-transparent to-[#02000A] opacity-80" />
    </div>
  );
}
