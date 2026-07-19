'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
}

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
}

const ecosystemLinks = [
  { name: 'GitHub', href: 'https://github.com/ValtheraLabs' },
  { name: 'Dionis Markov', href: 'https://dionismarkov.com' },
  { name: 'ValtheraSwap', href: 'https://valtheraswap.io' },
]

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL?.trim()
  const contactHref = contactEmail
    ? `mailto:${contactEmail}`
    : 'https://github.com/ValtheraLabs'

  return (
    <section id="contact" className="section-wrap">
      <div className="section-inner">
        <div className="w-full h-px bg-border mb-20" />

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="flex flex-col items-center text-center"
        >
          <motion.h2
            variants={childVariants}
            className="text-3xl md:text-4xl font-black text-white mb-8 max-w-2xl"
          >
            Build your next system with ValtheraLabs
          </motion.h2>

          <motion.div
            variants={childVariants}
            className="flex flex-col sm:flex-row items-center gap-4 mb-8"
          >
            <a
              href={contactHref}
              className="bg-accent text-white rounded-lg px-8 py-3 text-sm font-semibold hover:bg-accent/90 transition-all duration-300"
            >
              Start a Project
            </a>
            <a
              href="https://dionismarkov.com"
              className="border border-border text-silver rounded-lg px-8 py-3 text-sm font-semibold hover:border-accent/50 hover:text-accent transition-all duration-300"
            >
              Contact Us
            </a>
          </motion.div>

          {contactEmail && (
            <motion.a
              variants={childVariants}
              href={`mailto:${contactEmail}`}
              className="font-mono text-sm text-silver/60 hover:text-accent transition-colors duration-300"
            >
              {contactEmail}
            </motion.a>
          )}

          <motion.div
            variants={childVariants}
            className="flex items-center gap-6 mt-8"
          >
            {ecosystemLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="font-mono text-xs text-silver/40 hover:text-accent transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
          </motion.div>

          <motion.p
            variants={childVariants}
            className="font-mono text-xs text-silver/20 mt-12"
          >
            &copy; 2026 ValtheraLabs. All rights reserved.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
