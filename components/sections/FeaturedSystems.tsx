'use client'

import { motion } from 'framer-motion'
import GlassCard from '@/components/ui/GlassCard'

const systems = [
  {
    title: 'AI Agent Platform',
    desc: 'Valthera\'s flagship AI agent orchestration platform enabling autonomous workflows, multi-agent collaboration, and real-time decision intelligence. Deploy intelligent agents that learn, adapt, and execute complex tasks across any environment.',
    gradient: 'from-purple-600/40 via-cyan-500/20 to-blue-600/40',
    label: 'AI Agent Orchestrator',
  },
  {
    title: 'DEX Exchange Interface',
    desc: 'A next-generation decentralized exchange with sub-second swaps, concentrated liquidity pools, and an intuitive trading experience. Built for both retail traders and institutional market makers with advanced order routing.',
    gradient: 'from-cyan-600/40 via-blue-500/20 to-teal-600/40',
    label: 'DEX Trading Terminal',
  },
  {
    title: 'Trading Bot Dashboard',
    desc: 'Institutional-grade bot management console with real-time performance analytics, strategy backtesting, and risk monitoring. Deploy, monitor, and optimize multiple trading strategies from a single command center.',
    gradient: 'from-emerald-600/40 via-cyan-500/20 to-green-600/40',
    label: 'Bot Control Center',
  },
  {
    title: 'Enterprise SaaS Platform',
    desc: 'A comprehensive enterprise SaaS solution featuring multi-tenant architecture, role-based access, and integrated analytics. Scale from startup to enterprise with built-in billing, monitoring, and compliance.',
    gradient: 'from-blue-600/40 via-indigo-500/20 to-violet-600/40',
    label: 'SaaS Management Hub',
  },
  {
    title: 'Smart Contract Suite',
    desc: 'A complete toolkit for smart contract development, testing, and deployment with automated auditing and gas optimization. Streamline your Web3 workflow with integrated verification and monitoring.',
    gradient: 'from-amber-600/40 via-orange-500/20 to-yellow-600/40',
    label: 'Contract Development Kit',
  },
  {
    title: 'Automation Command Center',
    desc: 'Centralized command and control for automated workflows across cloud infrastructure, CI/CD pipelines, and business processes. Monitor, trigger, and orchestrate complex automation sequences with real-time visibility.',
    gradient: 'from-rose-600/40 via-pink-500/20 to-purple-600/40',
    label: 'Automation Dashboard',
  },
]

export default function FeaturedSystems() {
  return (
    <section
      id="featured-systems"
      className="relative py-32 px-4 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white">
            Featured<span className="text-cyan-400">Systems</span>
          </h2>
          <p className="text-white/40 text-lg mt-4 max-w-2xl mx-auto">
            Showcasing our flagship platforms and products — each built with
            precision, performance, and purpose.
          </p>
        </motion.div>

        <div className="flex flex-col gap-24">
          {systems.map((system, i) => (
            <motion.div
              key={system.title}
              className={`flex flex-col ${
                i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } items-center gap-8 lg:gap-16`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <div className="flex-1">
                <GlassCard className="p-8 lg:p-12">
                  <span className="text-cyan-400/60 text-sm tracking-widest uppercase">
                    System {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="text-2xl lg:text-3xl font-display font-bold text-white mt-3 mb-4">
                    {system.title}
                  </h3>
                  <p className="text-white/40 leading-relaxed text-base">
                    {system.desc}
                  </p>
                </GlassCard>
              </div>

              <div className="flex-1 w-full">
                <motion.div
                  className={`relative w-full aspect-[4/3] rounded-2xl bg-gradient-to-br ${system.gradient} border border-white/[0.06] overflow-hidden flex items-center justify-center`}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="absolute inset-0 bg-black/20" />
                  <div className="relative z-10 text-center px-6">
                    <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center">
                      <svg
                        viewBox="0 0 24 24"
                        className="w-6 h-6 text-cyan-400"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect x="2" y="3" width="20" height="14" rx="2" />
                        <path d="M8 21h8" />
                        <path d="M12 17v4" />
                      </svg>
                    </div>
                    <span className="text-white/70 font-medium text-base tracking-wide">
                      {system.label}
                    </span>
                    <div className="mt-4 flex justify-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-white/20" />
                      <span className="w-2 h-2 rounded-full bg-white/20" />
                      <span className="w-2 h-2 rounded-full bg-white/20" />
                    </div>
                  </div>

                  {/* Decorative grid lines */}
                  <div
                    className="absolute inset-0 opacity-[0.04]"
                    style={{
                      backgroundImage:
                        'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
                      backgroundSize: '40px 40px',
                    }}
                  />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
