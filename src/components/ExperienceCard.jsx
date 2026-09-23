import { motion, useReducedMotion } from 'framer-motion'
import ImagePlaceholder from './ImagePlaceholder'

export default function ExperienceCard({ item, reverse }) {
  const reduce = useReducedMotion()

  return (
    <motion.div
      initial={reduce ? undefined : { opacity: 0, y: 24 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-14 ${reverse ? 'lg:[&>*:first-child]:order-2' : ''}`}
    >
      <div>
        <ImagePlaceholder
          src={item.image}
          alt={`${item.org} \u2014 ${item.title}`}
          label={`${item.org} \u2014 add UI/wireframe screenshot`}
          aspect="wide"
        />
      </div>

      <div>
        <div className="mb-1 flex items-baseline justify-between">
          <p className="font-mono text-xs uppercase tracking-wide text-ink-faint">{item.period}</p>
          {item.metric && (
            <p className="font-display text-2xl font-medium text-ochre">
              {item.metric.value}
              <span className="ml-2 font-mono text-xs uppercase tracking-wide text-ink-faint">
                {item.metric.label}
              </span>
            </p>
          )}
        </div>

        <h3 className="font-display text-2xl font-medium text-ink sm:text-3xl">{item.title}</h3>
        <p className="mt-0.5 text-sm text-ink-soft">{item.org}</p>

        <div className="mt-5 space-y-4 text-[0.95rem] leading-relaxed text-ink-soft">
          <div>
            <p className="font-mono text-[0.68rem] uppercase tracking-wide text-pine">Problem</p>
            <p className="mt-1">{item.problem}</p>
          </div>
          <div>
            <p className="font-mono text-[0.68rem] uppercase tracking-wide text-pine">What I worked on</p>
            <p className="mt-1">{item.contribution}</p>
          </div>
          <div>
            <p className="font-mono text-[0.68rem] uppercase tracking-wide text-pine">Engineering</p>
            <p className="mt-1">{item.engineering}</p>
          </div>
          {item.note && (
            <div>
              <p className="font-mono text-[0.68rem] uppercase tracking-wide text-pine">Still open</p>
              <p className="mt-1">{item.note}</p>
            </div>
          )}
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {item.stack.map((s) => (
            <span
              key={s}
              className="rounded-sm border border-rule px-2 py-0.5 font-mono text-[0.68rem] text-ink-soft"
            >
              {s}
            </span>
          ))}
        </div>

        {item.link && (
          <a
            href={item.link}
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-block font-mono text-xs uppercase tracking-wide text-pine underline decoration-rule underline-offset-4 hover:text-pine-deep"
          >
            View repository &rarr;
          </a>
        )}
      </div>
    </motion.div>
  )
}
