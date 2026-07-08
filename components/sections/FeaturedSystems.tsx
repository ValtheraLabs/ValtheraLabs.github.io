'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { featuredSystems } from '@/data/systems'

const showcaseVariants = {
  hidden: { opacity: 0, y: 48 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

const staggerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
}

export default function FeaturedSystems() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.05 })

  return (
    <section id="featured-systems" className="section-wrap">
      <div className="section-inner">
        <div className="mb-20">
          <span className="tag">[ FEATURED SYSTEMS ]</span>
          <span className="block text-accent font-mono text-sm mb-6 opacity-60">02.</span>
          <h2 className="font-display font-bold text-white leading-[0.9]">
            <span className="block text-section">FEATURED</span>
            <span className="block text-section text-accent">SYSTEMS</span>
          </h2>
        </div>

        <motion.div
          ref={ref}
          variants={staggerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="flex flex-col"
        >
          {featuredSystems.map((system, i) => (
            <motion.div
              key={system.title}
              variants={showcaseVariants}
              className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-20 py-16 border-b border-white/[0.04]`}
            >
              <div className="flex-1 flex flex-col justify-center">
                <span className="text-white/20 font-mono text-xs block mb-3">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="text-white font-display font-bold text-2xl lg:text-3xl mb-4 tracking-tight">
                  {system.title}
                </h3>
                <p className="text-silver/55 text-sm leading-relaxed mb-6 max-w-lg">
                  {system.description}
                </p>
                <div className="flex flex-wrap gap-x-4 gap-y-1.5">
                  {system.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-mono text-white/35"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex-1">
                <div className="relative w-full aspect-[4/3] bg-gradient-to-br from-accent/30 via-accent/10 to-accent/5 border border-accent-soft overflow-hidden flex items-center justify-center">
                  <span className="text-white/15 font-display font-bold text-3xl lg:text-4xl tracking-tight select-none">
                    {system.title}
                  </span>
                  <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                      backgroundImage:
                        'linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)',
                      backgroundSize: '48px 48px',
                    }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="gallery-border" />
      </div>
    </section>
  )
}
