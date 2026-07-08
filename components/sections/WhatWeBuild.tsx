'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { capabilities } from '@/data/systems'

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.04, duration: 0.5, ease: 'easeOut' },
  }),
}

export default function WhatWeBuild() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.05 })

  return (
    <section id="what-we-build" className="section-wrap">
      <div className="section-inner">
        <div className="mb-16">
          <span className="tag">[ CAPABILITIES ]</span>
          <span className="block text-accent font-mono text-sm mb-6 opacity-60">01.</span>
          <h2 className="font-display font-bold text-white leading-[0.9]">
            <span className="block text-section">WHAT WE</span>
            <span className="block text-section text-accent">BUILD</span>
          </h2>
        </div>

        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-white/[0.06] border-t border-white/[0.06]"
        >
          {capabilities.map((item, i) => (
            <motion.div
              key={item.title}
              custom={i}
              variants={itemVariants}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              className="p-8 border-b border-white/[0.04]"
            >
              <span className="text-white/15 font-mono text-xs block mb-3">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="text-white font-display font-bold text-xl mb-2 tracking-tight">
                {item.title}
              </h3>
              <p className="text-silver/55 text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="gallery-border" />
      </div>
    </section>
  )
}
