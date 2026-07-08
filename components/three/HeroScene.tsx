'use client'

import { useRef, useMemo, useEffect, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import Emblem from './Emblem'
import Particles from './Particles'

function OrbitParticles({ count = 200 }: { count: number }) {
  const pointsRef = useRef<THREE.Points>(null)

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const radius = 2 + Math.random() * 2
      const theta = Math.random() * Math.PI * 2
      const phi = Math.random() * Math.PI * 2
      pos[i * 3] = Math.sin(theta) * Math.cos(phi) * radius
      pos[i * 3 + 1] = Math.sin(theta) * Math.sin(phi) * radius
      pos[i * 3 + 2] = Math.cos(theta) * radius
    }
    return pos
  }, [count])

  const orbits = useMemo(() => {
    const data: { radius: number; speed: number; offset: number; tilt: number }[] = []
    for (let i = 0; i < count; i++) {
      data.push({
        radius: 2 + Math.random() * 2,
        speed: 0.1 + Math.random() * 0.2,
        offset: Math.random() * Math.PI * 2,
        tilt: Math.random() * Math.PI * 0.5,
      })
    }
    return data
  }, [count])

  useFrame(({ clock }) => {
    if (!pointsRef.current) return
    const pos = pointsRef.current.geometry.attributes.position.array as Float32Array
    const t = clock.getElapsedTime()

    for (let i = 0; i < count; i++) {
      const o = orbits[i]
      const angle = t * o.speed + o.offset
      const r = o.radius
      pos[i * 3] = Math.cos(angle) * r
      pos[i * 3 + 1] = Math.sin(angle) * Math.sin(o.tilt) * r * 0.3
      pos[i * 3 + 2] = Math.sin(angle) * Math.cos(o.tilt) * r
    }
    pointsRef.current.geometry.attributes.position.needsUpdate = true
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.06}
        color="#22d3ee"
        transparent
        opacity={0.8}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
        sizeAttenuation
      />
    </points>
  )
}

function NeuralLines() {
  const lineRef = useRef<THREE.LineSegments>(null)

  const positions = useMemo(() => {
    const linesCount = 30
    const pos: number[] = []
    for (let i = 0; i < linesCount; i++) {
      const startAngle = Math.random() * Math.PI * 2
      const endAngle = Math.random() * Math.PI * 2
      const startR = 2 + Math.random() * 2
      const endR = 2 + Math.random() * 2

      pos.push(
        Math.cos(startAngle) * startR,
        (Math.random() - 0.5) * 1.5,
        Math.sin(startAngle) * startR,
        Math.cos(endAngle) * endR,
        (Math.random() - 0.5) * 1.5,
        Math.sin(endAngle) * endR,
      )
    }
    return new Float32Array(pos)
  }, [])

  useFrame(({ clock }) => {
    if (!lineRef.current) return
    const pos = lineRef.current.geometry.attributes.position.array as Float32Array
    const t = clock.getElapsedTime()
    const count = positions.length / 6

    for (let i = 0; i < count; i++) {
      const i6 = i * 6
      const startAngle = t * (0.1 + i * 0.01) + i
      const endAngle = t * (0.08 + i * 0.01) + i * 1.3
      const startR = 2 + Math.sin(i * 0.5) * 1.5
      const endR = 2 + Math.cos(i * 0.7) * 1.5

      pos[i6] = Math.cos(startAngle) * startR
      pos[i6 + 1] = Math.sin(startAngle * 0.5) * 1.2
      pos[i6 + 2] = Math.sin(startAngle) * startR
      pos[i6 + 3] = Math.cos(endAngle) * endR
      pos[i6 + 4] = Math.sin(endAngle * 0.5) * 1.2
      pos[i6 + 5] = Math.sin(endAngle) * endR
    }
    lineRef.current.geometry.attributes.position.needsUpdate = true
  })

  return (
    <lineSegments ref={lineRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <lineBasicMaterial
        color="#22d3ee"
        transparent
        opacity={0.15}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </lineSegments>
  )
}

function SceneContent({ isMobile }: { isMobile: boolean }) {
  useFrame(({ camera, clock }) => {
    const t = clock.getElapsedTime()
    const radius = isMobile ? 7 : 6
    camera.position.x = Math.sin(t * 0.08) * 1.5
    camera.position.y = Math.sin(t * 0.12) * 1.2 + 0.5
    camera.position.z = radius + Math.sin(t * 0.06) * 0.3
    camera.lookAt(0, 0, 0)
  })

  return (
    <>
      <ambientLight intensity={0.15} />
      <pointLight position={[8, 8, 8]} intensity={0.4} color="#22d3ee" />
      <pointLight position={[-8, -4, -8]} intensity={0.2} color="#3b82f6" />
      <pointLight position={[0, 10, 0]} intensity={0.3} color="#06b6d4" />

      <Emblem scale={isMobile ? 0.7 : 1} emissiveIntensity={0.4} />

      <OrbitParticles count={isMobile ? 80 : 200} />
      <NeuralLines />

      <Particles
        count={isMobile ? 300 : 1500}
        speed={0.2}
        connectionDistance={12}
        size={0.03}
        maxConnections={isMobile ? 300 : 2000}
      />
    </>
  )
}

export default function HeroScene() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    setIsMobile(window.innerWidth < 768)
  }, [])

  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 45 }}
      dpr={[1, isMobile ? 1 : 1.5]}
      gl={{
        antialias: !isMobile,
        alpha: true,
      }}
      style={{
        position: 'absolute',
        inset: 0,
        background: '#0a0a0a',
      }}
    >
      <SceneContent isMobile={isMobile} />
    </Canvas>
  )
}
