'use client'
import { motion, useReducedMotion } from 'framer-motion'
import { featuredSystems } from '@/data/systems'

function SystemVisual({ index, title }: { index:number; title:string }) {
  const bars=[34,62,48,86,58,96,72,52,82,66,91,74]
  return <div className="system-visual" aria-label={`${title} interface concept`} role="img"><div className="visual-panel"><div className="visual-top"><span>VALTHERA / {String(index+1).padStart(2,'0')}</span><span className="visual-live">● LIVE SIGNAL</span></div><div className="visual-bars">{bars.map((h,i)=><i key={i} style={{'--h':`${Math.max(18,h-index*4)}%`} as React.CSSProperties}/>)}</div></div></div>
}

export default function FeaturedSystems() {
  const reduced=useReducedMotion()
  return <section id="work" className="section-wrap"><div className="section-inner"><p className="section-kicker">SELECTED DIRECTIONS</p><h2 className="section-title">Systems with a pulse.</h2><p className="section-intro">Representative product directions showing how we approach complex interfaces. They illustrate capability—not undisclosed client claims.</p><div className="systems-grid" style={{marginTop:'3rem'}}>{featuredSystems.map((system,i)=><motion.article className="system-card" key={system.key} initial={reduced?false:{opacity:0,y:28}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.15}}><div className="system-copy"><span className="system-label">{system.label}</span><h3>{system.title}</h3><p>{system.description}</p><div className="tech-chips">{system.tech.map(t=><span key={t}>{t}</span>)}</div></div><SystemVisual index={i} title={system.title}/></motion.article>)}</div></div></section>
}
