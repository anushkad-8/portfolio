import { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { skillGroups } from '../data/skills'
import SectionHeading from './SectionHeading'

export default function Skills() {
  const [hovered, setHovered] = useState(null)
  const reduce = useReducedMotion()

  return (
    <section id="skills" className="border-b border-rule py-20 sm:py-28">
      <div className="container-page">
        <SectionHeading index="03" kicker="Capabilities" title="What I know" />

        <div className="grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <motion.div
              key={group.category}
              initial={reduce ? undefined : { opacity: 0, y: 16 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5 }}
              onMouseEnter={() => setHovered(group.category)}
              onMouseLeave={() => setHovered(null)}
            >
              <p className="mb-3 font-mono text-xs uppercase tracking-wide text-pine">{group.category}</p>
              <ul className="space-y-1.5">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="text-[0.95rem] transition-colors duration-200"
                    style={{
                      color: hovered && hovered !== group.category ? '#8A8D93' : '#14171F',
                    }}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
