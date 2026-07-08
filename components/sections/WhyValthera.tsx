'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { whyValthera } from '@/data/systems'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
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

export default function WhyValthera() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.05 })

  return (
    <section id="why-valthera" className="section-wrap">
      <div className="section-inner">
        <span className="block font-mono text-[11px] text-accent tracking-[0.15em] mb-2">
          WHY VALTHERALABS
        </span>
        <h2 className="text-3xl md:text-4xl font-black text-white mb-16">
          Why ValtheraLabs
        </h2>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-10"
        >
          {whyValthera.map((item) => (
            <motion.div
              key={item.title}
              variants={itemVariants}
            >
              <h3 className="text-lg font-semibold text-white mb-2">
                <span className="text-accent mr-2">&#9670;</span>
                {item.title}
              </h3>
              <p className="text-sm text-silver leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
