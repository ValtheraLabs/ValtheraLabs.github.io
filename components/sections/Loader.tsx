'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Loader({ onComplete }: { onComplete?: () => void }) {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
      onComplete?.()
    }, 2000)
    return () => clearTimeout(timer)
  }, [onComplete])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-[100] bg-black flex items-center justify-center"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        >
          <div className="text-center">
            <motion.h1 className="font-display text-[clamp(4rem,12vw,10rem)] leading-[0.9] font-black tracking-display">
              <span className="text-accent">
                {'VALT'.split('').map((char, i) => (
                  <motion.span
                    key={i}
                    className="inline-block"
                    initial={{ opacity: 0, y: 60 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.08, duration: 0.5, ease: 'easeOut' }}
                  >
                    {char}
                  </motion.span>
                ))}
              </span>
              <span className="text-white">
                {' her a'.split('').map((char, i) => (
                  <motion.span
                    key={i}
                    className="inline-block"
                    initial={{ opacity: 0, y: 60 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: (4 + i) * 0.08, duration: 0.5, ease: 'easeOut' }}
                  >
                    {char}
                  </motion.span>
                ))}
              </span>
              <br />
              <motion.span
                className="text-accent"
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5, ease: 'easeOut' }}
              >
                LABS
              </motion.span>
            </motion.h1>
            <motion.p
              className="font-mono text-xs md:text-sm tracking-[0.15em] text-silver/40 mt-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.0, duration: 0.6 }}
            >
              ENGINEERING DIGITAL SYSTEMS
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
