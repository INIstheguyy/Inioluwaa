import React, { useRef, useMemo, useEffect, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Points, PointMaterial, Sphere } from '@react-three/drei';
import { motion } from 'framer-motion';
import * as random from 'maath/random/dist/maath-random.esm';

// Animated particle system
function AnimatedStars(props) {
  const ref = useRef();
  const [sphere] = useState(() => random.inSphere(new Float32Array(5000), { radius: 1.5 }));
  const { mouse, viewport } = useThree();

  useFrame((state, delta) => {
    if (ref.current) {
      // Rotate the entire particle system
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;

      // Mouse interaction effect
      const mouseX = (mouse.x * viewport.width) / 2;
      const mouseY = (mouse.y * viewport.height) / 2;
      
      ref.current.rotation.y += mouseX * 0.00005;
      ref.current.rotation.x += mouseY * 0.00005;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          color="#667eea"
          size={0.003}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.8}
        />
      </Points>
    </group>
  );
}

// Floating geometric shapes
function FloatingGeometry() {
  const meshRef = useRef();
  const [geometry, setGeometry] = useState([]);

  useEffect(() => {
    // Create random floating geometries
    const shapes = [];
    for (let i = 0; i < 20; i++) {
      shapes.push({
        position: [
          (Math.random() - 0.5) * 10,
          (Math.random() - 0.5) * 10,
          (Math.random() - 0.5) * 10
        ],
        scale: Math.random() * 0.5 + 0.2,
        rotation: [Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI],
        type: Math.floor(Math.random() * 3) // 0: box, 1: sphere, 2: octahedron
      });
    }
    setGeometry(shapes);
  }, []);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.1;
      meshRef.current.rotation.y += delta * 0.05;
    }
  });

  return (
    <group ref={meshRef}>
      {geometry.map((shape, index) => (
        <mesh key={index} position={shape.position} scale={shape.scale} rotation={shape.rotation}>
          {shape.type === 0 && <boxGeometry args={[1, 1, 1]} />}
          {shape.type === 1 && <sphereGeometry args={[0.5, 8, 8]} />}
          {shape.type === 2 && <octahedronGeometry args={[0.7]} />}
          <meshBasicMaterial 
            color="#764ba2" 
            transparent 
            opacity={0.1} 
            wireframe={Math.random() > 0.5}
          />
        </mesh>
      ))}
    </group>
  );
}

// Gradient background
function GradientBackground() {
  const { viewport } = useThree();
  
  return (
    <mesh scale={[viewport.width, viewport.height, 1]} position={[0, 0, -5]}>
      <planeGeometry args={[1, 1]} />
      <shaderMaterial
        uniforms={{
          time: { value: 1.0 },
          resolution: { value: [viewport.width, viewport.height] }
        }}
        vertexShader={`
          void main() {
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `}
        fragmentShader={`
          uniform float time;
          uniform vec2 resolution;
          
          void main() {
            vec2 uv = gl_FragCoord.xy / resolution.xy;
            vec3 color1 = vec3(0.05, 0.05, 0.2);  // Dark blue
            vec3 color2 = vec3(0.1, 0.0, 0.3);    // Dark purple
            vec3 color3 = vec3(0.0, 0.0, 0.1);    // Very dark blue
            
            float gradient1 = smoothstep(0.0, 1.0, uv.y);
            float gradient2 = smoothstep(0.0, 1.0, uv.x);
            
            vec3 finalColor = mix(color1, color2, gradient1);
            finalColor = mix(finalColor, color3, gradient2 * 0.5);
            
            // Add some noise for texture
            float noise = sin(uv.x * 10.0 + time * 0.001) * cos(uv.y * 10.0 + time * 0.001) * 0.02;
            finalColor += noise;
            
            gl_FragColor = vec4(finalColor, 1.0);
          }
        `}
      />
    </mesh>
  );
}

// Main 3D Background Component
const ThreeDBackground = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        background: 'linear-gradient(135deg, #0c0c0c 0%, #1a1a2e 50%, #16213e 100%)'
      }}
    >
      <Canvas
        camera={{
          position: [0, 0, 1],
          fov: 75,
          near: 0.1,
          far: 1000
        }}
        style={{ width: '100%', height: '100%' }}
        dpr={[1, 2]}
        performance={{ min: 0.5 }}
      >
        {/* Background gradient */}
        <GradientBackground />
        
        {/* Animated particle system */}
        <AnimatedStars />
        
        {/* Floating geometric shapes */}
        <FloatingGeometry />
        
        {/* Subtle ambient lighting */}
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={0.5} color="#667eea" />
        <pointLight position={[-10, -10, -10]} intensity={0.3} color="#764ba2" />
      </Canvas>
      
      {/* CSS Gradient Overlay for depth */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: `
            radial-gradient(circle at 30% 20%, rgba(102, 126, 234, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 70% 80%, rgba(118, 75, 162, 0.1) 0%, transparent 50%),
            linear-gradient(135deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 100%)
          `,
          pointerEvents: 'none'
        }}
      />
    </motion.div>
  );
};

export default ThreeDBackground;