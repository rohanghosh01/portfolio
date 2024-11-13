import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface GeometryProps {
  isDark: boolean;
}

export function Geometry({ isDark }: GeometryProps) {
  const geometryRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (geometryRef.current) {
      geometryRef.current.rotation.x = Math.sin(state.clock.elapsedTime) * 0.1;
      geometryRef.current.rotation.y = Math.sin(state.clock.elapsedTime) * 0.1;
    }
  });

  return (
    <group ref={geometryRef}>
      {/* Outer dodecahedron */}
      <mesh position={[0, 0, 0]} scale={2}>
        <dodecahedronGeometry args={[1, 0]} />
        <meshPhongMaterial
          color={isDark ? '#60a5fa' : '#3b82f6'}
          wireframe
          transparent
          opacity={0.2}
        />
      </mesh>
      
      {/* Inner icosahedron */}
      <mesh position={[0, 0, 0]} scale={1.5}>
        <icosahedronGeometry args={[1, 0]} />
        <meshPhongMaterial
          color={isDark ? '#818cf8' : '#4f46e5'}
          wireframe
          transparent
          opacity={0.3}
        />
      </mesh>
      
      {/* Core octahedron */}
      <mesh position={[0, 0, 0]}>
        <octahedronGeometry args={[1, 0]} />
        <meshPhongMaterial
          color={isDark ? '#a78bfa' : '#6366f1'}
          wireframe
          transparent
          opacity={0.4}
        />
      </mesh>
    </group>
  );
}