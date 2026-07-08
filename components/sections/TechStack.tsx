'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const categories = [
  {
    name: 'Frontend',
    items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Three.js', 'GSAP'],
    color: 'border-cyan-500/30 text-cyan-400',
  },
  {
    name: 'Backend',
    items: ['Node.js', 'Python', 'FastAPI', 'PostgreSQL', 'Redis'],
    color: 'border-blue-500/30 text-blue-400',
  },
  {
    name: 'Blockchain',
    items: ['Solidity', 'Hardhat', 'Foundry', 'Ethers.js', 'Wagmi', 'Viem'],
    color: 'border-purple-500/30 text-purple-400',
  },
  {
    name: 'AI',
    items: ['OpenAI', 'Ollama', 'LangChain', 'RAG', 'Multi-Agent Systems'],
    color: 'border-emerald-500/30 text-emerald-400',
  },
  {
    name: 'Infrastructure',
    items: ['Docker', 'Cloudflare', 'GitHub Actions', 'Linux', 'AWS'],
    color: 'border-amber-500/30 text-amber-400',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
}

const categoryVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
}

const pillVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: { delay: i * 0.05, duration: 0.3, ease: 'easeOut' },
  }),
}

export default function TechStack() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section id="tech-stack" className="relative py-32 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white">
            Tech<span className="text-cyan-400">Stack</span>
          </h2>
          <p className="text-white/40 text-lg mt-4 max-w-2xl mx-auto">
            Modern tools and frameworks we use to build production-grade
            systems.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {categories.map((cat) => (
            <motion.div
              key={cat.name}
              variants={categoryVariants}
              className="bg-white/[0.02] backdrop-blur-xl border border-white/[0.06] rounded-2xl p-6"
            >
              <h3
                className={`text-sm font-semibold tracking-widest uppercase mb-5 ${cat.color}`}
              >
                {cat.name}
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {cat.items.map((item, i) => (
                  <motion.span
                    key={item}
                    custom={i}
                    variants={pillVariants}
                    className="px-3.5 py-1.5 rounded-full text-sm border border-white/[0.08] bg-white/[0.03] text-white/60 hover:border-white/20 hover:text-white/90 transition-colors duration-300"
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
