'use client'

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { MeshDistortMaterial } from '@react-three/drei'
import * as THREE from 'three'

interface EmblemProps {
  scale?: number
  color?: string
  emissiveColor?: string
  emissiveIntensity?: number
}

export default function Emblem({
  scale = 1,
  color = '#0a1628',
  emissiveColor = '#22d3ee',
  emissiveIntensity = 0.3,
}: EmblemProps) {
  const meshRef = useRef<THREE.Mesh>(null)
  const edgesRef = useRef<THREE.LineSegments>(null)
  const glowRef = useRef<THREE.Mesh>(null)

  const geometry = useRef(new THREE.TorusKnotGeometry(1, 0.4, 128, 16))
  const edgesGeom = useRef(new THREE.EdgesGeometry(new THREE.TorusKnotGeometry(1, 0.4, 64, 8)))

  useFrame(({ clock }) => {
    if (!meshRef.current || !edgesRef.current || !glowRef.current) return
    const t = clock.getElapsedTime() * 0.3
    meshRef.current.rotation.x = t * 0.5
    meshRef.current.rotation.y = t
    edgesRef.current.rotation.x = t * 0.5
    edgesRef.current.rotation.y = t
    glowRef.current.rotation.x = t * 0.5
    glowRef.current.rotation.y = t

    const pulse = 0.2 + Math.sin(clock.getElapsedTime() * 0.5) * 0.15
    ;(meshRef.current.material as THREE.MeshStandardMaterial).emissiveIntensity = pulse
    glowRef.current.scale.setScalar(1 + Math.sin(clock.getElapsedTime() * 0.3) * 0.05)
  })

  return (
    <group scale={scale}>
      <mesh ref={meshRef} geometry={geometry.current}>
        <MeshDistortMaterial
          color={color}
          emissive={emissiveColor}
          emissiveIntensity={emissiveIntensity}
          metalness={0.95}
          roughness={0.05}
          distort={0.15}
          speed={3}
        />
      </mesh>
      <mesh ref={glowRef}>
        <sphereGeometry args={[1.6, 16, 16]} />
        <meshBasicMaterial
          color={emissiveColor}
          transparent
          opacity={0.04}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </mesh>
      <lineSegments ref={edgesRef} geometry={edgesGeom.current}>
        <lineBasicMaterial
          color={emissiveColor}
          transparent
          opacity={0.5}
          blending={THREE.AdditiveBlending}
        />
      </lineSegments>
    </group>
  )
}
