'use client'

import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

interface ParticlesProps {
  count?: number
  speed?: number
  connectionDistance?: number
  color?: string
  size?: number
  maxConnections?: number
}

export default function Particles({
  count = 2000,
  speed = 0.5,
  connectionDistance = 15,
  color = '#22d3ee',
  size = 0.05,
  maxConnections = count * 2,
}: ParticlesProps) {
  const pointsRef = useRef<THREE.Points>(null)
  const linesRef = useRef<THREE.LineSegments>(null)

  const { positions, velocities, pairs } = useMemo(() => {
    const pos = new Float32Array(count * 3)
    const vel = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 60
      pos[i * 3 + 1] = (Math.random() - 0.5) * 60
      pos[i * 3 + 2] = (Math.random() - 0.5) * 60
      vel[i * 3] = (Math.random() - 0.5) * 0.008
      vel[i * 3 + 1] = (Math.random() - 0.5) * 0.008
      vel[i * 3 + 2] = (Math.random() - 0.5) * 0.008
    }

    const connectionPairs: [number, number][] = []
    for (let i = 0; i < maxConnections; i++) {
      const a = Math.floor(Math.random() * count)
      const b = Math.floor(Math.random() * count)
      if (a !== b) connectionPairs.push([a, b])
    }

    return { positions: pos, velocities: vel, pairs: connectionPairs }
  }, [count, maxConnections])

  const linePositions = useMemo(() => {
    return new Float32Array(pairs.length * 6)
  }, [pairs])

  useFrame(({ clock }) => {
    if (!pointsRef.current || !linesRef.current) return
    const pos = pointsRef.current.geometry.attributes.position.array as Float32Array
    const elapsed = clock.getElapsedTime() * speed

    for (let i = 0; i < count; i++) {
      const i3 = i * 3
      pos[i3] += Math.sin(elapsed * 0.1 + i * 0.01) * 0.005
      pos[i3 + 1] += Math.cos(elapsed * 0.08 + i * 0.015) * 0.005
      pos[i3 + 2] += Math.sin(elapsed * 0.06 + i * 0.02) * 0.005
      pos[i3] += velocities[i3]
      pos[i3 + 1] += velocities[i3 + 1]
      pos[i3 + 2] += velocities[i3 + 2]

      if (Math.abs(pos[i3]) > 30) velocities[i3] *= -1
      if (Math.abs(pos[i3 + 1]) > 30) velocities[i3 + 1] *= -1
      if (Math.abs(pos[i3 + 2]) > 30) velocities[i3 + 2] *= -1
    }
    pointsRef.current.geometry.attributes.position.needsUpdate = true

    const linePos = linesRef.current.geometry.attributes.position.array as Float32Array
    const distSq = connectionDistance * connectionDistance
    for (let i = 0; i < pairs.length; i++) {
      const [a, b] = pairs[i]
      const a3 = a * 3
      const b3 = b * 3
      const dx = pos[a3] - pos[b3]
      const dy = pos[a3 + 1] - pos[b3 + 1]
      const dz = pos[a3 + 2] - pos[b3 + 2]
      const dSq = dx * dx + dy * dy + dz * dz

      const i6 = i * 6
      if (dSq < distSq) {
        linePos[i6] = pos[a3]
        linePos[i6 + 1] = pos[a3 + 1]
        linePos[i6 + 2] = pos[a3 + 2]
        linePos[i6 + 3] = pos[b3]
        linePos[i6 + 4] = pos[b3 + 1]
        linePos[i6 + 5] = pos[b3 + 2]
      } else {
        linePos[i6] = pos[a3]
        linePos[i6 + 1] = pos[a3 + 1]
        linePos[i6 + 2] = pos[a3 + 2]
        linePos[i6 + 3] = pos[a3]
        linePos[i6 + 4] = pos[a3 + 1]
        linePos[i6 + 5] = pos[a3 + 2]
      }
    }
    linesRef.current.geometry.attributes.position.needsUpdate = true
  })

  return (
    <group>
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
          size={size}
          color={color}
          transparent
          opacity={0.6}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
          sizeAttenuation
        />
      </points>
      <lineSegments ref={linesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={pairs.length * 2}
            array={linePositions}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial
          color={color}
          transparent
          opacity={0.06}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </lineSegments>
    </group>
  )
}
