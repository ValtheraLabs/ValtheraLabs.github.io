'use client'

import dynamic from 'next/dynamic'
import LoaderScene from '@/components/three/LoaderScene'

const HeroScene = dynamic(() => import('@/components/three/HeroScene'), {
  ssr: false,
  loading: () => <LoaderScene />,
})

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      <div className="absolute inset-0">
        <HeroScene />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60" />

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
        <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
          Engineering Intelligent Digital Systems
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-silver sm:text-xl">
          Building the future of decentralized AI, blockchain intelligence, and autonomous digital ecosystems.
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href="#contact"
            className="rounded-full bg-cyan-500 px-8 py-3 text-sm font-semibold text-black transition-all hover:bg-cyan-400 hover:shadow-lg hover:shadow-cyan-500/25"
          >
            Start a Project
          </a>
          <a
            href="#systems"
            className="rounded-full border border-cyan-500/50 px-8 py-3 text-sm font-semibold text-cyan-400 transition-all hover:bg-cyan-500/10 hover:border-cyan-400"
          >
            Explore Systems
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2">
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-silver/50">Scroll</span>
          <div className="h-8 w-px bg-gradient-to-b from-cyan-500 to-transparent animate-pulse" />
        </div>
      </div>
    </section>
  )
}
