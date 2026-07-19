'use client'

import { motion } from 'framer-motion'
import Logo from '@/components/ui/Logo'

const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
}

const slideUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } },
}



export default function Hero() {
  return (
    <section id="company" className="relative min-h-screen flex items-center overflow-hidden bg-deep">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Nav */}
      <div className="fixed top-0 left-0 right-0 z-50 px-6 py-4" style={{background:'rgba(12,12,12,0.85)',backdropFilter:'blur(16px)',borderBottom:'1px solid rgba(255,255,255,0.04)'}}>
        <div className="section-inner flex items-center justify-between">
          <Logo size={28} />
          <div className="hidden md:flex items-center gap-8 text-xs text-silver/50 tracking-wider uppercase">
            <a className="hover:text-accent transition" href="#featured-systems">Systems</a>
            <a className="hover:text-accent transition" href="#what-we-build">Services</a>
            <a className="hover:text-accent transition" href="#company">Company</a>
            <a className="hover:text-accent transition" href="#contact">Contact</a>
          </div>
        </div>
      </div>

      <motion.div className="section-inner relative z-10 w-full" variants={fadeIn} initial="hidden" animate="visible">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 min-h-screen py-24">
          <motion.div className="flex-1 space-y-8" variants={fadeIn}>
            <motion.span
              className="block font-mono text-xs uppercase tracking-[0.25em] text-silver/40"
              variants={slideUp}
            >
              ValtheraLabs
            </motion.span>

            <div className="space-y-0">
              <motion.h1
                className="font-sans font-black text-5xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight text-white"
                variants={slideUp}
              >
                Engineering{' '}
                <span className="text-accent">Intelligent</span>
              </motion.h1>
              <motion.h1
                className="font-sans font-black text-5xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight text-white"
                variants={slideUp}
              >
                Digital Systems
              </motion.h1>
            </div>

            <motion.p
              className="text-silver max-w-lg leading-relaxed text-base md:text-lg"
              variants={slideUp}
            >
              AI systems, web applications, blockchain software, and developer tools engineered for real products.
            </motion.p>

            <motion.div className="flex flex-wrap gap-4 pt-2" variants={slideUp}>
              <a
                href="#contact"
                className="inline-flex items-center justify-center bg-accent text-white rounded-lg px-6 py-3 font-medium transition-all duration-300 hover:bg-accent/90 hover:shadow-[0_0_30px_rgba(124,58,237,0.3)]"
              >
                Start a Project
              </a>
              <a
                href="#featured-systems"
                className="inline-flex items-center justify-center border border-border text-silver rounded-lg px-6 py-3 font-medium transition-all duration-300 hover:border-accent/50"
              >
                Explore Systems
              </a>
            </motion.div>

            <motion.div className="pt-16 hidden lg:block" variants={slideUp}>
              <span className="font-mono text-[10px] text-silver/20 tracking-[0.2em]">
                SCROLL &darr;
              </span>
            </motion.div>
          </motion.div>

          <motion.div
            className="flex-1 flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 60, rotateY: -10 }}
            animate={{ opacity: 1, x: 0, rotateY: -5 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div
              className="mockup-frame w-full max-w-lg"
              style={{ transform: 'perspective(1000px) rotateY(-5deg) rotateX(2deg)' }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'perspective(1000px) rotateY(-8deg) rotateX(4deg)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'perspective(1000px) rotateY(-5deg) rotateX(2deg)'
              }}
            >
              <div className="mockup-dots">
                <span className="mockup-dot" />
                <span className="mockup-dot" />
                <span className="mockup-dot" />
              </div>
              <div className="p-10 flex flex-col items-center justify-center gap-4 min-h-[280px]">
                <Logo size={110} showWordmark={false} />
                <span className="text-lg font-semibold tracking-tight">Valthera<span className="text-accent">Labs</span></span>
                <span className="font-mono text-[10px] tracking-[0.2em] text-silver/30 uppercase">Engineering Intelligent Systems</span>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
    </section>
  )
}
