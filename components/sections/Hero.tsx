'use client'

import { motion } from 'framer-motion'

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
    <section className="relative min-h-screen flex items-center overflow-hidden bg-deep">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Nav */}
      <div className="fixed top-0 left-0 right-0 z-50 px-6 py-4" style={{background:'rgba(12,12,12,0.85)',backdropFilter:'blur(16px)',borderBottom:'1px solid rgba(255,255,255,0.04)'}}>
        <div className="section-inner flex items-center justify-between">
          <div className="flex items-center gap-3">
            <svg viewBox="0 0 200 200" width="28" height="28">
              <defs>
                <linearGradient id="blade1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stop-color="#E8E8E8"/><stop offset="50%" stop-color="#A0A0A0"/><stop offset="100%" stop-color="#505050"/>
                </linearGradient>
                <linearGradient id="blade2" x1="100%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stop-color="#E8E8E8"/><stop offset="50%" stop-color="#A0A0A0"/><stop offset="100%" stop-color="#505050"/>
                </linearGradient>
                <linearGradient id="blade3" x1="0%" y1="100%" x2="100%" y2="0%">
                  <stop offset="0%" stop-color="#E8E8E8"/><stop offset="50%" stop-color="#909090"/><stop offset="100%" stop-color="#505050"/>
                </linearGradient>
                <linearGradient id="blade4" x1="100%" y1="100%" x2="0%" y2="0%">
                  <stop offset="0%" stop-color="#E8E8E8"/><stop offset="50%" stop-color="#909090"/><stop offset="100%" stop-color="#505050"/>
                </linearGradient>
                <radialGradient id="centerGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stop-color="#7C3AED"/><stop offset="60%" stop-color="#6D28D9"/><stop offset="100%" stop-color="#5B21B6"/>
                </radialGradient>
                <filter id="glow"><feGaussianBlur stdDeviation="3" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
              </defs>
              <polygon points="100,12 112,88 100,100 88,88" fill="url(#blade1)"/>
              <polygon points="188,100 112,112 100,100 112,88" fill="url(#blade2)"/>
              <polygon points="100,188 88,112 100,100 112,112" fill="url(#blade3)"/>
              <polygon points="12,100 88,88 100,100 88,112" fill="url(#blade4)"/>
              <polygon points="100,68 132,100 100,132 68,100" fill="url(#centerGlow)" filter="url(#glow)"/>
            </svg>
            <span className="font-sans text-sm font-semibold tracking-tight">Valthera<span className="text-accent">Labs</span></span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-xs text-silver/50 tracking-wider uppercase">
            <span className="hover:text-accent transition cursor-default">Systems</span>
            <span className="hover:text-accent transition cursor-default">Services</span>
            <span className="hover:text-accent transition cursor-default">Company</span>
            <span className="hover:text-accent transition cursor-default">Contact</span>
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
              Premium AI systems, enterprise web applications, blockchain infrastructure, and developer tools.
            </motion.p>

            <motion.div className="flex flex-wrap gap-4 pt-2" variants={slideUp}>
              <a
                href="#contact"
                className="inline-flex items-center justify-center bg-accent text-white rounded-lg px-6 py-3 font-medium transition-all duration-300 hover:bg-accent/90 hover:shadow-[0_0_30px_rgba(124,58,237,0.3)]"
              >
                Start a Project
              </a>
              <a
                href="#systems"
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
                <svg viewBox="0 0 200 200" width="110" height="110" style={{filter:'drop-shadow(0 0 40px rgba(124,58,237,0.35))'}}>
                  <defs>
                    <radialGradient id="cg" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stop-color="#7C3AED"/><stop offset="60%" stop-color="#6D28D9"/><stop offset="100%" stop-color="#5B21B6"/>
                    </radialGradient>
                    <filter id="gl"><feGaussianBlur stdDeviation="3" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
                  </defs>
                  <polygon points="100,12 112,88 100,100 88,88" fill="#D0D0D0"/>
                  <polygon points="188,100 112,112 100,100 112,88" fill="#B0B0B0"/>
                  <polygon points="100,188 88,112 100,100 112,112" fill="#909090"/>
                  <polygon points="12,100 88,88 100,100 88,112" fill="#A0A0A0"/>
                  <polygon points="100,68 132,100 100,132 68,100" fill="url(#cg)" filter="url(#gl)"/>
                </svg>
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