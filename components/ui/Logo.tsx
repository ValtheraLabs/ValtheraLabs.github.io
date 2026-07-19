'use client'

import { useId } from 'react'

interface LogoProps {
  size?: number
  showWordmark?: boolean
  className?: string
}

export default function Logo({ size = 28, showWordmark = true, className = '' }: LogoProps) {
  const defsId = useId().replace(/:/g, '')
  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      <svg viewBox="0 0 200 200" width={size} height={size} aria-hidden="true" focusable="false">
        <defs>
          <linearGradient id={`${defsId}-b1`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#E8E8E8"/><stop offset="50%" stopColor="#A0A0A0"/><stop offset="100%" stopColor="#505050"/>
          </linearGradient>
          <linearGradient id={`${defsId}-b2`} x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#E8E8E8"/><stop offset="50%" stopColor="#A0A0A0"/><stop offset="100%" stopColor="#505050"/>
          </linearGradient>
          <linearGradient id={`${defsId}-b3`} x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#E8E8E8"/><stop offset="50%" stopColor="#909090"/><stop offset="100%" stopColor="#505050"/>
          </linearGradient>
          <linearGradient id={`${defsId}-b4`} x1="100%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#E8E8E8"/><stop offset="50%" stopColor="#909090"/><stop offset="100%" stopColor="#505050"/>
          </linearGradient>
          <radialGradient id={`${defsId}-cg`} cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#7C3AED"/><stop offset="60%" stopColor="#6D28D9"/><stop offset="100%" stopColor="#5B21B6"/>
          </radialGradient>
          <filter id={`${defsId}-gl`}>
            <feGaussianBlur stdDeviation="3" result="b"/>
            <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
        </defs>
        <polygon points="100,12 112,88 100,100 88,88" fill={`url(#${defsId}-b1)`}/>
        <polygon points="188,100 112,112 100,100 112,88" fill={`url(#${defsId}-b2)`}/>
        <polygon points="100,188 88,112 100,100 112,112" fill={`url(#${defsId}-b3)`}/>
        <polygon points="12,100 88,88 100,100 88,112" fill={`url(#${defsId}-b4)`}/>
        <polygon points="100,68 132,100 100,132 68,100" fill={`url(#${defsId}-cg)`} filter={`url(#${defsId}-gl)`}/>
      </svg>
      {showWordmark && (
        <span className="font-sans text-sm font-semibold tracking-tight">
          Valthera<span className="text-accent">Labs</span>
        </span>
      )}
    </div>
  )
}
