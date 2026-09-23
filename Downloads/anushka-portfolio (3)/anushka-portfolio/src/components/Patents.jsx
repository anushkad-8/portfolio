import { motion, useReducedMotion } from 'framer-motion'
import { patents } from '../data/recognition'

export default function Patents() {
  const reduce = useReducedMotion()

  return (
    <div>
      <p className="mb-4 font-mono text-xs uppercase tracking-wide text-ink-faint">Patents</p>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        {patents.map((p, i) => (
          <motion.div
            key={p.name}
            initial={reduce ? undefined : { opacity: 0, y: 14 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.45, delay: i * 0.05 }}
            className="rounded-sm border border-rule bg-paper-raised p-5"
          >
            <div className="flex items-baseline justify-between gap-3">
              <p className="font-display text-xl text-ink">{p.name}</p>
              <span className="font-mono text-[0.65rem] uppercase tracking-wide text-ochre">{p.status}</span>
            </div>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft">{p.detail}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
