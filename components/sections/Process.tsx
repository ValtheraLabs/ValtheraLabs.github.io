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
  hidden: { opacity: 0, x: -24 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
}

export default function Process() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section id="process" className="section-wrap">
      <div className="section-inner">
        <span className="block font-mono text-[11px] text-accent tracking-[0.15em] mb-2">
          PROCESS
        </span>
        <h2 className="text-3xl md:text-4xl font-black text-white mb-16">
          How We Work
        </h2>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="space-y-0"
        >
          {processSteps.map((step, i) => (
            <motion.div
              key={step.step}
              variants={stepVariants}
              className="relative flex gap-6 md:gap-10 pb-12 last:pb-0"
            >
              <div className="relative flex flex-col items-center">
                <div className="w-3 h-3 rounded-full bg-accent ring-4 ring-deep z-10 shrink-0" />
                {i < processSteps.length - 1 && (
                  <div className="w-px flex-1 bg-border" />
                )}
              </div>

              <div className="flex items-start gap-4 md:gap-8 pt-[-2px]">
                <span className="text-5xl font-black text-accent/30 leading-none shrink-0 select-none">
                  {step.step}
                </span>
                <div className="pt-1.5">
                  <h3 className="text-xl font-semibold text-white mb-1.5">
                    {step.title}
                  </h3>
                  <p className="text-sm text-silver leading-relaxed max-w-xl">
                    {step.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
