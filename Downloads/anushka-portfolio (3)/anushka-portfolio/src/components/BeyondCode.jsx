import { motion, useReducedMotion } from 'framer-motion'
import { beyondCode } from '../data/recognition'
import ImagePlaceholder from './ImagePlaceholder'
import SectionHeading from './SectionHeading'

export default function BeyondCode() {
  const reduce = useReducedMotion()

  return (
    <section id="beyond" className="border-b border-rule py-20 sm:py-28">
      <div className="container-page">
        <SectionHeading kicker="Beyond Code" title="Who I am outside the codebase" />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {beyondCode.map((item, i) => (
            <motion.div
              key={item.title}
              initial={reduce ? undefined : { opacity: 0, y: 18 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <ImagePlaceholder
                src={item.image}
                alt={item.title}
                label={`${item.title} \u2014 add photo`}
                aspect="wide"
                frame="none"
              />
              <p className="mt-3 font-display text-lg text-ink">{item.title}</p>
              <p className="text-sm text-ink-soft">{item.caption}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
