'use client'

import dynamic from 'next/dynamic'
import { motion, useReducedMotion } from 'framer-motion'
import Logo from '@/components/ui/Logo'

const HeroScene = dynamic(() => import('@/components/three/HeroScene'), { ssr: false })

const nav = [
  ['Work', '#work'],
  ['Capabilities', '#capabilities'],
  ['Process', '#process'],
  ['Contact', '#contact'],
]

export default function Hero() {
  const reducedMotion = useReducedMotion()
  const reveal = reducedMotion ? {} : { initial: { opacity: 0, y: 24 }, animate: { opacity: 1, y: 0 } }
  const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL?.trim()
  const contactHref = contactEmail
    ? `mailto:${contactEmail}?subject=Project%20inquiry`
    : 'https://github.com/ValtheraLabs'

  return (
    <section className="hero-shell" aria-labelledby="hero-title">
      <header className="site-nav">
        <div className="section-inner nav-inner">
          <a href="#main-content" aria-label="ValtheraLabs home"><Logo size={32} /></a>
          <nav aria-label="Primary navigation" className="nav-links">
            {nav.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
          </nav>
          <a className="nav-cta" href={contactHref}>Initiate project</a>
        </div>
      </header>

      <div className="hero-grid section-inner">
        <motion.div className="hero-copy" {...reveal} transition={{ duration: .65 }}>
          <p className="eyebrow"><span className="status-dot" /> AI · WEB3 · DIGITAL INFRASTRUCTURE</p>
          <h1 id="hero-title">We engineer systems for the <span>next digital frontier.</span></h1>
          <p className="hero-lede">From agentic workflows and real-time platforms to high-integrity on-chain systems—designed, built, and shipped end to end.</p>
          <div className="hero-actions">
            <a className="button-primary" href={contactHref}>Discuss a project <span aria-hidden="true">↗</span></a>
            <a className="button-secondary" href="#work">View selected work <span aria-hidden="true">↓</span></a>
          </div>
        </motion.div>

        <div className="hero-visual" aria-hidden="true">
          {!reducedMotion && <div className="canvas-wrap"><HeroScene /></div>}
          <div className="orbit orbit-one" /><div className="orbit orbit-two" />
          <div className="scene-label label-one">NODE_01 / ACTIVE</div>
          <div className="scene-label label-two">SIGNAL / STABLE</div>
        </div>
      </div>

      <div className="telemetry section-inner" aria-label="Core disciplines">
        {['AI AGENTS', 'REAL-TIME PLATFORMS', 'ON-CHAIN SYSTEMS', 'CLOUD INFRASTRUCTURE'].map((item, i) => (
          <span key={item}><b>0{i + 1}</b>{item}</span>
        ))}
      </div>
    </section>
  )
}
