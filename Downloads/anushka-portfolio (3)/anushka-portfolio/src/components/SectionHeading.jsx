import { motion, useReducedMotion } from 'framer-motion'

export default function SectionHeading({ index, title, kicker, align = 'left' }) {
  const reduce = useReducedMotion()

  return (
    <motion.div
      initial={reduce ? undefined : { opacity: 0, y: 14 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={`mb-10 flex items-baseline gap-4 ${align === 'right' ? 'justify-end text-right' : ''}`}
    >
      {index && <span className="section-index">{index}</span>}
      <div>
        {kicker && <p className="mb-1 font-mono text-xs text-ink-faint">{kicker}</p>}
        <h2 className="font-display text-3xl font-medium text-ink sm:text-4xl">{title}</h2>
      </div>
    </motion.div>
  )
}
