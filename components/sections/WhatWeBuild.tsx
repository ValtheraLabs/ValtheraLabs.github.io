'use client'
import { motion, useReducedMotion } from 'framer-motion'
import { capabilities } from '@/data/systems'

export default function WhatWeBuild() {
  const reduced = useReducedMotion()
  return (
    <section id="capabilities" className="section-wrap">
      <div className="section-inner">
        <p className="section-kicker">CAPABILITY CONSTELLATION</p>
        <h2 className="section-title">Four disciplines.<br/>One build system.</h2>
        <p className="section-intro">Strategy, interface, infrastructure, and delivery stay connected—so ambitious products do not fracture between specialists.</p>
        <div className="capability-grid" style={{marginTop:'3rem'}}>
          {capabilities.map((item, i) => (
            <motion.article key={item.title} className="capability-card" initial={reduced ? false : {opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.2}} transition={{delay:i*.06}}>
              <span className="capability-number">{item.number} / SYSTEM</span>
              <h3>{item.title}</h3><p>{item.description}</p>
              <ul className="capability-services">{item.services.map(service=><li key={service}>↳ {service}</li>)}</ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
