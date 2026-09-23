import { motion, useReducedMotion } from 'framer-motion'
import ImagePlaceholder from './ImagePlaceholder'

export default function ProjectCard({ project, onExplore }) {
  const reduce = useReducedMotion()

  return (
    <motion.div
      layoutId={`card-${project.id}`}
      initial={reduce ? undefined : { opacity: 0, y: 20 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="group flex flex-col overflow-hidden rounded-sm border border-rule bg-paper-raised transition-transform duration-300 hover:-translate-y-1"
    >
      <ImagePlaceholder
        src={project.image}
        alt={project.name}
        label={`${project.name} \u2014 add screenshot`}
        aspect="wide"
        frame="none"
      />

      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-xl font-medium text-ink">{project.name}</h3>
        <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{project.hook}</p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.stack.slice(0, 4).map((s) => (
            <span key={s} className="rounded-sm border border-rule px-2 py-0.5 font-mono text-[0.65rem] text-ink-soft">
              {s}
            </span>
          ))}
        </div>

        {project.metric && (
          <p className="mt-4 font-mono text-xs text-ochre">
            {project.metric.value} &middot; {project.metric.label}
          </p>
        )}

        <div className="mt-5 flex items-center gap-5 pt-1">
          <button
            onClick={onExplore}
            className="font-mono text-xs uppercase tracking-wide text-pine underline decoration-rule underline-offset-4 transition-colors hover:text-pine-deep"
          >
            Explore
          </button>
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="font-mono text-xs uppercase tracking-wide text-ink-soft transition-colors hover:text-ink"
            >
              GitHub &rarr;
            </a>
          )}
        </div>
      </div>
    </motion.div>
  )
}
