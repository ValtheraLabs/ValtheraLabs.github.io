'use client'

import dynamic from 'next/dynamic'

const HeroScene = dynamic(() => import('@/components/three/HeroScene'), { ssr: false })

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-black">
      <div className="absolute inset-0">
        <HeroScene />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
      </div>

      <div className="section-inner relative z-10 w-full px-6 md:px-12 lg:px-20">
        <div className="flex flex-col justify-between min-h-[80vh] py-12">
          <div>
            <span className="font-mono text-xs tracking-[0.2em] text-silver/50 uppercase">
              ValtheraLabs
            </span>
          </div>

          <div className="space-y-2 -ml-1">
            <h1 className="font-display text-[clamp(3rem,10vw,10rem)] leading-[0.85] tracking-display font-black text-white">
              ENGINEERING
            </h1>
            <h1 className="font-display text-[clamp(3rem,10vw,10rem)] leading-[0.85] tracking-display font-black text-accent">
              INTELLIGENT
            </h1>
            <h1 className="font-display text-[clamp(3rem,10vw,10rem)] leading-[0.85] tracking-display font-black text-white">
              DIGITAL SYSTEMS
            </h1>
          </div>

          <div className="space-y-12">
            <p className="font-mono text-xs md:text-sm tracking-[0.15em] text-silver/60">
              [ BUILDING THE NEXT GENERATION OF INTELLIGENT SYSTEMS ]
            </p>

            <div className="flex flex-col gap-1.5">
              <span className="block w-8 h-px bg-silver/30" />
              <span className="block w-6 h-px bg-silver/20" />
              <span className="block w-4 h-px bg-silver/10" />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
    </section>
  )
}
