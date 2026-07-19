'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { featuredSystems } from '@/data/systems'

const rowVariants = {
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
    transition: { staggerChildren: 0.12 },
  },
}

function MockupDisplay({ title }: { title: string }) {
  return (
    <div className="mockup-frame" role="img" aria-label={`${title} interface preview`}>
      <div className="mockup-dots">
        <span className="mockup-dot" />
        <span className="mockup-dot" />
        <span className="mockup-dot" />
      </div>
      <div className="p-6 space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded bg-accent/20" />
          <div className="flex-1 space-y-1.5">
            <div className="h-3 w-32 rounded-sm bg-white/5" />
            <div className="h-2 w-20 rounded-sm bg-white/5" />
          </div>
        </div>
        <div className="h-px bg-border/30" />
        <div className="space-y-2">
          <div className="h-2 w-full rounded-sm bg-white/5" />
          <div className="h-2 w-3/4 rounded-sm bg-white/5" />
          <div className="h-2 w-1/2 rounded-sm bg-white/5" />
        </div>
        <div className="flex gap-2 pt-2">
          <div className="h-6 w-16 rounded bg-accent/10" />
          <div className="h-6 w-20 rounded bg-accent/10" />
          <div className="h-6 w-14 rounded bg-accent/10" />
        </div>
      </div>
    </div>
  )
}

export default function FeaturedSystems() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.05 })

  return (
    <section id="featured-systems" className="section-wrap">
      <div className="section-inner">
        <span className="font-mono text-[11px] text-accent tracking-[0.15em] mb-2 block">
          FEATURED SYSTEMS
        </span>
        <h2 className="font-sans font-black text-3xl md:text-4xl text-white mb-16">
          Featured Systems
        </h2>

        <motion.div
          ref={ref}
          variants={staggerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="flex flex-col"
        >
          {featuredSystems.map((system, i) => (
            <motion.div key={system.title} variants={rowVariants}>
              <div
                className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-20 items-center`}
              >
                <div className="flex-1 w-full">
                  <MockupDisplay title={system.title} />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-4">{system.title}</h3>
                  <p className="text-silver leading-relaxed mb-6">{system.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {system.tech.map((t) => (
                      <span
                        key={t}
                        className="font-mono text-[11px] text-accent bg-accent/10 px-2 py-1 rounded"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  {system.href && (
                    <a
                      href={system.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex mt-6 text-sm font-semibold text-accent hover:text-white transition-colors"
                    >
                      Visit {system.title} →
                    </a>
                  )}
                </div>
              </div>
              {i < featuredSystems.length - 1 && (
                <div className="h-px bg-border/50 my-16" />
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
