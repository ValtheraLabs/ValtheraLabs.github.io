'use client'

import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function LoaderContent() {
  const meshRef = useRef<THREE.Mesh>(null)
  const particlesRef = useRef<THREE.Points>(null)

  const particlePositions = useMemo(() => {
    const pos = new Float32Array(100 * 3)
    for (let i = 0; i < 100; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 4
      pos[i * 3 + 1] = (Math.random() - 0.5) * 4
      pos[i * 3 + 2] = (Math.random() - 0.5) * 4
    }
    return pos
  }, [])

  useFrame(({ clock }) => {
    if (!meshRef.current || !particlesRef.current) return
    const t = clock.getElapsedTime()
    meshRef.current.rotation.x = t * 0.6
    meshRef.current.rotation.y = t * 0.8

    const pos = particlesRef.current.geometry.attributes.position.array as Float32Array
    for (let i = 0; i < 100; i++) {
      const i3 = i * 3
      pos[i3] += Math.sin(t * 0.5 + i * 0.1) * 0.003
      pos[i3 + 1] += Math.cos(t * 0.4 + i * 0.15) * 0.003
      pos[i3 + 2] += Math.sin(t * 0.3 + i * 0.2) * 0.003
    }
    particlesRef.current.geometry.attributes.position.needsUpdate = true
  })

  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={0.3} color="#22d3ee" />
      <mesh ref={meshRef}>
        <octahedronGeometry args={[0.4, 0]} />
        <meshStandardMaterial
          color="#0a1628"
          emissive="#22d3ee"
          emissiveIntensity={0.5}
          metalness={0.9}
          roughness={0.1}
        />
      </mesh>
      <points ref={particlesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={100}
            array={particlePositions}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.03}
          color="#22d3ee"
          transparent
          opacity={0.4}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </points>
    </>
  )
}

export default function LoaderScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 3], fov: 45 }}
      dpr={[1, 1]}
      gl={{
        antialias: false,
        alpha: true,
      }}
      style={{
        position: 'absolute',
        inset: 0,
        background: '#0a0a0a',
      }}
    >
      <LoaderContent />
    </Canvas>
  )
}
