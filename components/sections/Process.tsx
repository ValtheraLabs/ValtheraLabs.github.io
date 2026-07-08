'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const steps = [
  {
    title: 'Discovery',
    desc: 'Deep-dive consultation to understand your vision, requirements, and technical constraints.',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 16v-4" />
        <path d="M12 8h.01" />
      </svg>
    ),
  },
  {
    title: 'Architecture',
    desc: 'Designing scalable system architecture with clear boundaries and future-proof patterns.',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    title: 'Design',
    desc: 'Crafting premium UI/UX with meticulous attention to every interaction and visual detail.',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 19l7-7 3 3-7 7-3-3z" />
        <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
        <path d="M2 2l7.586 7.586" />
        <circle cx="11" cy="11" r="2" />
      </svg>
    ),
  },
  {
    title: 'Development',
    desc: 'Building with clean architecture, comprehensive testing, and continuous integration.',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    title: 'Security',
    desc: 'Rigorous security auditing, penetration testing, and compliance verification.',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: 'Deployment',
    desc: 'Zero-downtime deployment with monitoring, alerting, and disaster recovery ready.',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 12h14" />
        <path d="M12 5l7 7-7 7" />
      </svg>
    ),
  },
  {
    title: 'Scaling',
    desc: 'Performance optimization, load testing, and infrastructure scaling for growth.',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 20V10" />
        <path d="M12 20V4" />
        <path d="M6 20v-6" />
      </svg>
    ),
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

const stepVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
}

export default function Process() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section id="process" className="relative py-32 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white">
            Our<span className="text-cyan-400">Process</span>
          </h2>
          <p className="text-white/40 text-lg mt-4 max-w-2xl mx-auto">
            A proven methodology from concept to scaled production system.
          </p>
        </motion.div>

        {/* Desktop horizontal timeline */}
        <div className="hidden lg:block overflow-x-auto pb-8">
          <motion.div
            ref={ref}
            className="flex gap-0 min-w-max px-4"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                variants={stepVariants}
                className="flex flex-col items-center w-48 shrink-0"
              >
                <div className="relative flex items-center justify-center">
                  <div
                    className={`w-12 h-12 rounded-full border flex items-center justify-center relative z-10 transition-all duration-500 ${
                      i === 0
                        ? 'border-cyan-400 bg-cyan-400/10 text-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.2)]'
                        : 'border-white/10 bg-white/[0.03] text-white/40'
                    }`}
                  >
                    {step.icon}
                  </div>
                  {/* Connector line */}
                  {i < steps.length - 1 && (
                    <div
                      className={`absolute left-12 top-1/2 h-px w-36 ${
                        i <= 0
                          ? 'bg-gradient-to-r from-cyan-400/50 to-white/10'
                          : 'bg-white/10'
                      }`}
                    />
                  )}
                </div>
                <h3 className="text-white font-semibold text-sm mt-4 mb-2 text-center">
                  {step.title}
                </h3>
                <p className="text-white/40 text-xs leading-relaxed text-center px-2">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Mobile vertical timeline */}
        <div className="lg:hidden">
          <motion.div
            ref={ref}
            className="flex flex-col gap-8 max-w-md mx-auto"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                variants={stepVariants}
                className="flex gap-5"
              >
                <div className="flex flex-col items-center">
                  <div
                    className={`w-10 h-10 rounded-full border flex items-center justify-center shrink-0 ${
                      i === 0
                        ? 'border-cyan-400 bg-cyan-400/10 text-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.2)]'
                        : 'border-white/10 bg-white/[0.03] text-white/40'
                    }`}
                  >
                    {step.icon}
                  </div>
                  {i < steps.length - 1 && (
                    <div className="w-px h-full min-h-[3rem] bg-gradient-to-b from-white/10 to-transparent mt-1" />
                  )}
                </div>
                <div className="pb-8">
                  <h3 className="text-white font-semibold text-sm mb-1.5">
                    {step.title}
                  </h3>
                  <p className="text-white/40 text-sm leading-relaxed">
                    {step.desc}
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
