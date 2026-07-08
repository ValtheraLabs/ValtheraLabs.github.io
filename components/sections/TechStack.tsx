'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { techStack } from '@/data/systems'

const rowVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: 'easeOut' },
  }),
}

const categories: { key: keyof typeof techStack; label: string }[] = [
  { key: 'frontend', label: 'Frontend' },
  { key: 'backend', label: 'Backend' },
  { key: 'blockchain', label: 'Blockchain' },
  { key: 'ai', label: 'AI / ML' },
  { key: 'infrastructure', label: 'Infrastructure' },
]

export default function TechStack() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section id="tech-stack" className="section-wrap">
      <div className="section-inner">
        <div className="mb-20">
          <span className="tag">[ TECHNOLOGY ]</span>
          <span className="block text-accent font-mono text-sm mb-6 opacity-60">03.</span>
          <h2 className="font-display font-bold text-white leading-[0.9]">
            <span className="block text-section">TECH</span>
            <span className="block text-section text-accent">STACK</span>
          </h2>
        </div>

        <div ref={ref} className="divide-y divide-white/[0.06]">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.key}
              custom={i}
              variants={rowVariants}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              className="flex flex-col md:flex-row md:items-baseline gap-3 md:gap-12 py-6 md:py-8"
            >
              <span className="font-mono text-xs text-white/30 uppercase tracking-widest md:w-36 shrink-0">
                {cat.label}
              </span>
              <p className="text-silver/70 text-base leading-relaxed">
                {techStack[cat.key].join(', ')}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="gallery-border" />
      </div>
    </section>
  )
}
