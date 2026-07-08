'use client'

import { motion } from 'framer-motion'
import Button from '@/components/ui/Button'

const particles = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 2 + 0.5,
  delay: Math.random() * 3,
  duration: Math.random() * 3 + 2,
}))

export default function Contact() {
  return (
    <section id="contact" className="relative py-32 px-4 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Particle overlay */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute rounded-full bg-cyan-400/20"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: p.size,
              height: p.size,
            }}
            animate={{
              opacity: [0, 0.5, 0],
              y: [0, -20, 0],
            }}
            transition={{
              duration: p.duration,
              delay: p.delay,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white leading-tight">
            Build Your Next System{' '}
            <span className="text-cyan-400">With ValtheraLabs</span>
          </h2>
          <p className="text-white/40 text-lg mt-6 max-w-xl mx-auto">
            From concept to production — let&apos;s build something that matters.
            Reach out and tell us about your project.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
            <Button variant="primary" size="lg" arrow>
              Start a Project
            </Button>
            <Button variant="secondary" size="lg">
              Contact ValtheraLabs
            </Button>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          className="mt-32 pt-8 border-t border-white/[0.06] flex flex-col md:flex-row items-center justify-between gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="flex items-center gap-3">
            <span className="text-white font-display font-bold tracking-tight">
              ValtheraLabs
            </span>
            <span className="text-white/20 text-sm">|</span>
            <span className="text-white/40 text-sm">
              hello@valtheralabs.com
            </span>
          </div>
          <p className="text-white/30 text-sm">
            &copy; {new Date().getFullYear()} ValtheraLabs. All rights reserved.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
