'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { techStack } from '@/data/systems'

const categories: { key: keyof typeof techStack; label: string }[] = [
  { key: 'frontend', label: 'Frontend' },
  { key: 'backend', label: 'Backend' },
  { key: 'blockchain', label: 'Blockchain' },
  { key: 'ai', label: 'AI / ML' },
  { key: 'infrastructure', label: 'Infrastructure' },
]

const rowVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: 'easeOut' },
  }),
}

export default function TechStack() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section id="tech-stack" className="section-wrap">
      <div className="section-inner">
        <span className="block font-mono text-[11px] text-accent tracking-[0.15em] mb-2">
          TECHNOLOGY
        </span>
        <h2 className="text-3xl md:text-4xl font-black text-white mb-12">
          Technology Stack
        </h2>

        <div ref={ref} className="divide-y divide-border">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.key}
              custom={i}
              variants={rowVariants}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              className="flex items-baseline gap-4 md:gap-12 py-5"
            >
              <span className="font-mono text-sm text-silver w-24 md:w-32 shrink-0">
                {cat.label}
              </span>
              <p className="text-white leading-relaxed">
                {techStack[cat.key].join(', ')}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
