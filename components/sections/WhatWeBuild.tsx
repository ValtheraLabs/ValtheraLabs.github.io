'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { capabilities } from '@/data/systems'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
}

export default function WhatWeBuild() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section id="what-we-build" className="section-wrap">
      <div className="section-inner">
        <span className="font-mono text-[11px] text-accent tracking-[0.15em] mb-2 block">
          CAPABILITIES
        </span>
        <h2 className="font-sans font-black text-3xl md:text-4xl text-white mb-12">
          What We Build
        </h2>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10"
        >
          {capabilities.map((item) => (
            <motion.div key={item.title} variants={itemVariants}>
              <span className="text-accent text-xl mb-2 block">{item.icon}</span>
              <h3 className="font-semibold text-white mb-1.5">{item.title}</h3>
              <p className="text-sm text-silver leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
