'use client'

import { motion } from 'framer-motion'
import { type ReactNode } from 'react'

interface GlassCardProps {
  children: ReactNode
  className?: string
}

export default function GlassCard({ children, className = '' }: GlassCardProps) {
  return (
    <motion.div
      className={`bg-white/[0.03] backdrop-blur-xl border border-white/[0.06] rounded-2xl ${className}`}
      whileHover={{ y: -4, boxShadow: '0 0 30px rgba(34, 211, 238, 0.1)' }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  )
}
