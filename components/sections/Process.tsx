'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { processSteps } from '@/data/systems'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
}

const stepVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

export default function Process() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section id="process" className="section-wrap">
      <div className="section-inner">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <p className="tag">[ METHODOLOGY ]</p>
          <p className="font-display text-section font-black text-silver/20 leading-none tracking-display mb-4">
            04.
          </p>
          <h2 className="font-display text-[clamp(2.5rem,6vw,6rem)] leading-[0.85] tracking-display font-black text-white">
            OUR
          </h2>
          <h2 className="font-display text-[clamp(2.5rem,6vw,6rem)] leading-[0.85] tracking-display font-black text-accent">
            PROCESS
          </h2>
        </motion.div>

        <div className="relative pl-8 md:pl-12">
          <div className="absolute left-[11px] md:left-[15px] top-1 bottom-0 w-px bg-white/10" />

          <motion.div
            ref={ref}
            className="space-y-16 md:space-y-20"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            {processSteps.map((step) => (
              <motion.div
                key={step.step}
                variants={stepVariants}
                className="relative"
              >
                <div className="absolute -left-8 md:-left-12 top-[3px] w-[9px] h-[9px] rounded-full bg-accent shadow-[0_0_12px_rgba(87,57,251,0.4)]" />

                <div className="max-w-3xl">
                  <span className="font-mono text-xs text-accent/50 tracking-[0.15em]">
                    {String(step.step).padStart(2, '0')}
                  </span>
                  <h3 className="font-display text-2xl md:text-4xl font-black text-white mt-2 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-silver/60 text-sm md:text-base leading-relaxed max-w-2xl">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
