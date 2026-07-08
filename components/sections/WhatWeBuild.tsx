'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import GlassCard from '@/components/ui/GlassCard'

const capabilities = [
  {
    title: 'AI Systems',
    desc: 'Custom AI solutions including LLM integration, computer vision, predictive models, and intelligent automation for enterprise-scale deployments.',
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a4 4 0 014 4c0 2-2 3-4 3s-4-1-4-3a4 4 0 014-4z" />
        <path d="M12 9c-3 0-5 1.5-5 4v1h10v-1c0-2.5-2-4-5-4z" />
        <circle cx="12" cy="16" r="2" />
        <path d="M8 20h8" />
      </svg>
    ),
  },
  {
    title: 'Websites',
    desc: 'High-performance websites with stunning visuals, optimized Core Web Vitals, and seamless user experiences across all devices.',
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8" />
        <path d="M12 17v4" />
        <circle cx="12" cy="10" r="1.5" />
        <path d="M6 7h12" />
      </svg>
    ),
  },
  {
    title: 'WebApps',
    desc: 'Full-stack web applications built with modern frameworks, real-time capabilities, and scalable cloud-native architectures.',
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="M10 10l-3 3 3 3" />
        <path d="M14 10l3 3-3 3" />
      </svg>
    ),
  },
  {
    title: 'SaaS Platforms',
    desc: 'Multi-tenant SaaS platforms with subscription management, analytics dashboards, and enterprise-grade security.',
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="18" rx="2" />
        <path d="M6 7h12" />
        <path d="M6 11h12" />
        <path d="M6 15h8" />
      </svg>
    ),
  },
  {
    title: 'Blockchain Infrastructure',
    desc: 'Scalable blockchain infrastructure including node deployment, consensus mechanisms, and interoperability protocols.',
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    title: 'Smart Contracts',
    desc: 'Audited smart contracts with formal verification, gas optimization, and upgradeable proxy patterns.',
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
        <path d="M14 2v6h6" />
        <path d="M9 13h6" />
        <path d="M9 17h6" />
      </svg>
    ),
  },
  {
    title: 'dApps',
    desc: 'Decentralized applications with intuitive interfaces, wallet integration, and cross-chain compatibility.',
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 002 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
  {
    title: 'DEX Exchanges',
    desc: 'High-frequency DEX platforms with automated market makers, liquidity pools, and advanced order types.',
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
        <path d="M7 16l-4-4m0 0l4-4m-4 4h18" />
      </svg>
    ),
  },
  {
    title: 'AI Trading Bots',
    desc: 'Machine learning-powered trading bots with real-time market analysis, risk management, and multi-exchange support.',
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" />
        <path d="M7 11V7a5 5 0 0110 0v4" />
        <circle cx="12" cy="16" r="1" />
        <path d="M8 22h8" />
      </svg>
    ),
  },
  {
    title: 'Trading Dashboards',
    desc: 'Real-time trading dashboards with advanced charting, portfolio tracking, and institutional-grade data feeds.',
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 20V10" />
        <path d="M12 20V4" />
        <path d="M6 20v-6" />
      </svg>
    ),
  },
  {
    title: 'Automation Systems',
    desc: 'End-to-end automation pipelines for CI/CD, infrastructure provisioning, and business process orchestration.',
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 01-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" />
      </svg>
    ),
  },
  {
    title: 'Cloud Solutions',
    desc: 'Cloud-native solutions leveraging AWS, Google Cloud, and Cloudflare for global-scale distributed systems.',
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17.5 19H9a7 7 0 116.71-9h1.79a4.5 4.5 0 010 9z" />
      </svg>
    ),
  },
  {
    title: 'Cybersecurity',
    desc: 'Comprehensive security solutions including penetration testing, zero-trust architectures, and real-time threat detection.',
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: 'Developer Tools',
    desc: 'Custom developer tooling including CLI tools, SDKs, API gateways, and framework-agnostic libraries.',
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 18l6-6-6-6" />
        <path d="M8 6l-6 6 6 6" />
      </svg>
    ),
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
}

export default function WhatWeBuild() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section id="what-we-build" className="relative py-32 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white">
            What We<span className="text-cyan-400">Build</span>
          </h2>
          <p className="text-white/40 text-lg mt-4 max-w-2xl mx-auto">
            End-to-end technology solutions spanning AI, blockchain, web, and
            infrastructure — engineered for performance, security, and scale.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {capabilities.map((item) => (
            <motion.div key={item.title} variants={cardVariants}>
              <GlassCard className="p-6 h-full group cursor-default">
                <div className="text-cyan-400/80 mb-4 transition-colors duration-300 group-hover:text-cyan-400">
                  {item.icon}
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">
                  {item.title}
                </h3>
                <p className="text-white/40 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
