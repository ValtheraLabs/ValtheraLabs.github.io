'use client'

import { useEffect, useState } from 'react'
import type Lenis from 'lenis'
import Loader from '@/components/sections/Loader'
import Hero from '@/components/sections/Hero'
import WhatWeBuild from '@/components/sections/WhatWeBuild'
import FeaturedSystems from '@/components/sections/FeaturedSystems'
import TechStack from '@/components/sections/TechStack'
import Process from '@/components/sections/Process'
import WhyValthera from '@/components/sections/WhyValthera'
import Contact from '@/components/sections/Contact'

export default function Home() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let lenisInstance: Lenis | null = null
    let frameId: number | undefined
    let active = true

    const init = async () => {
      const Lenis = (await import('lenis')).default
      if (!active) return

      lenisInstance = new Lenis({
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
      })
      function raf(time: number) {
        if (!active || !lenisInstance) return
        lenisInstance.raf(time)
        frameId = requestAnimationFrame(raf)
      }
      frameId = requestAnimationFrame(raf)
    }
    init()
    return () => {
      active = false
      if (frameId !== undefined) cancelAnimationFrame(frameId)
      lenisInstance?.destroy()
    }
  }, [])

  return (
    <>
      {loading && <Loader onComplete={() => setLoading(false)} />}
      <main style={{ opacity: loading ? 0 : 1, transition: 'opacity 0.6s ease' }}>
        <Hero />
        <WhatWeBuild />
        <FeaturedSystems />
        <TechStack />
        <Process />
        <WhyValthera />
        <Contact />
      </main>
    </>
  )
}
