'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { whyValthera } from '@/data/systems'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

const rowVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
}

export default function WhyValthera() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section id="why-valthera" className="section-wrap">
      <div className="section-inner">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <p className="tag">[ PRINCIPLES ]</p>
          <p className="font-display text-section font-black text-silver/20 leading-none tracking-display mb-4">
            05.
          </p>
          <h2 className="font-display text-[clamp(2.5rem,6vw,6rem)] leading-[0.85] tracking-display font-black text-white">
            WHY
          </h2>
          <h2 className="font-display text-[clamp(2.5rem,6vw,6rem)] leading-[0.85] tracking-display font-black text-accent">
            VALTHERALABS
          </h2>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {whyValthera.map((item, i) => (
            <motion.div
              key={item.title}
              variants={rowVariants}
            >
              <div className="py-10 md:py-14">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-12">
                  <div className="md:col-span-2">
                    <h3 className="font-display text-2xl md:text-3xl font-black text-white">
                      {item.title}
                    </h3>
                  </div>
                  <div className="md:col-span-3">
                    <p className="text-silver/60 text-sm md:text-base leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
              {i < whyValthera.length - 1 && (
                <div className="h-px bg-white/[0.06]" />
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
