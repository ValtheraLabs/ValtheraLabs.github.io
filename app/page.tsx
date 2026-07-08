'use client'

import { useEffect, useState } from 'react'
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
  const [lenis, setLenis] = useState<any>(null)

  useEffect(() => {
    let lenisInstance: any = null
    const initLenis = async () => {
      const Lenis = (await import('lenis')).default
      lenisInstance = new Lenis({
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
        touchMultiplier: 2,
      })

      function raf(time: number) {
        lenisInstance.raf(time)
        requestAnimationFrame(raf)
      }
      requestAnimationFrame(raf)
      setLenis(lenisInstance)

      const { ScrollTrigger } = await import('gsap/ScrollTrigger')
      const gsap = (await import('gsap')).default
      gsap.registerPlugin(ScrollTrigger)
      ScrollTrigger.scrollerProxy(document.body, {
        scrollTop(value) {
          if (arguments.length) {
            lenisInstance.scrollTo(value as number, { immediate: true })
          }
          return lenisInstance.scroll
        },
        getBoundingClientRect() {
          return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight }
        },
        pinType: document.body.style.transform ? 'transform' : 'fixed',
      })
    }

    initLenis()
    return () => {
      if (lenisInstance) lenisInstance.destroy()
    }
  }, [])

  useEffect(() => {
    if (!lenis) return
    const gsapReady = async () => {
      const { ScrollTrigger } = await import('gsap/ScrollTrigger')
      lenis.on('scroll', ScrollTrigger.update)
    }
    gsapReady()
  }, [lenis])

  return (
    <>
      {loading && <Loader onComplete={() => setLoading(false)} />}
      <main style={{ opacity: loading ? 0 : 1, transition: 'opacity 0.8s ease' }}>
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
