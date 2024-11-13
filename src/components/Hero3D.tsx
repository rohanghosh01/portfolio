import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float } from '@react-three/drei';
import { Geometry } from './Geometry';

interface Hero3DProps {
  isDark: boolean;
}

export default function Hero3D({ isDark }: Hero3DProps) {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 50 }}
      style={{ height: '100%' }}
    >
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 10]} intensity={1} />
      <Float
        speed={4}
        rotationIntensity={1}
        floatIntensity={2}
      >
        <Geometry isDark={isDark} />
      </Float>
    </Canvas>
  );
}