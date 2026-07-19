'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { featuredSystems } from '@/data/systems'

function SystemVisual({ systemKey, title }: { systemKey: string; title: string }) {
  const labels = {
    agent: 'Agent trace',
    dex: 'Routing map',
    platform: 'Service topology',
  } as const
  const label = labels[systemKey as keyof typeof labels] ?? 'System diagram'

  return (
    <div className="system-visual" aria-label={`${title} interface concept`} role="img">
      <div className={`visual-panel visual-${systemKey}`}>
        <div className="visual-top">
          <span>{label}</span>
          <span className="visual-live">CONCEPT VIEW</span>
        </div>
        <div className="visual-diagram" aria-hidden="true">
          {systemKey === 'agent' && <><i /><i /><i /><i /><i /></>}
          {systemKey === 'dex' && <><b>IN</b><i /><i /><i /><b>OUT</b></>}
          {systemKey === 'platform' && <><i /><i /><i /><i /><i /><i /></>}
        </div>
      </div>
    </div>
  )
}

export default function FeaturedSystems() {
  const reducedMotion = useReducedMotion()

  return (
    <section id="work" className="section-wrap">
      <div className="section-inner">
        <p className="section-kicker">SELECTED DIRECTIONS</p>
        <h2 className="section-title">Systems with a pulse.</h2>
        <p className="section-intro">
          Representative product directions showing how we approach complex interfaces. They
          illustrate capability—not undisclosed client claims.
        </p>
        <div className="systems-grid" style={{ marginTop: '3rem' }}>
          {featuredSystems.map((system) => (
            <motion.article
              className="system-card"
              key={system.key}
              initial={reducedMotion ? false : { opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
            >
              <div className="system-copy">
                <span className="system-label">{system.label}</span>
                <h3>{system.title}</h3>
                <p>{system.description}</p>
                <div className="tech-chips">
                  {system.tech.map((technology) => <span key={technology}>{technology}</span>)}
                </div>
                {system.href && (
                  <a
                    className="button-secondary"
                    href={system.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Visit {system.title} ↗
                  </a>
                )}
              </div>
              <SystemVisual systemKey={system.key} title={system.title} />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
