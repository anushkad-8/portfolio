import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { X } from 'lucide-react'
import ImagePlaceholder from './ImagePlaceholder'

export default function ProjectDetail({ project, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <motion.div
      className="fixed inset-0 z-[60] flex items-start justify-center overflow-y-auto bg-ink/40 p-4 pt-20 sm:pt-28"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        layoutId={`card-${project.id}`}
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-2xl rounded-sm border border-rule bg-paper p-6 sm:p-9"
      >
        <div className="mb-6 flex items-start justify-between gap-4">
          <div>
            <h3 className="font-display text-3xl font-medium text-ink">{project.name}</h3>
            <p className="mt-1 text-sm text-ink-soft">{project.hook}</p>
          </div>
          <button
            onClick={onClose}
            aria-label="Close"
            className="mt-1 flex h-8 w-8 flex-none items-center justify-center rounded-sm border border-rule text-ink-soft transition-colors hover:border-ink hover:text-ink"
          >
            <X size={16} />
          </button>
        </div>

        <ImagePlaceholder
          src={project.image}
          alt={project.name}
          label={`${project.name} \u2014 add screenshot`}
          aspect="wide"
        />

        <div className="mt-6 space-y-5 text-[0.95rem] leading-relaxed text-ink-soft">
          <p>{project.description}</p>

          <div>
            <p className="font-mono text-[0.68rem] uppercase tracking-wide text-pine">What I built</p>
            <p className="mt-1">{project.contribution}</p>
          </div>
          <div>
            <p className="font-mono text-[0.68rem] uppercase tracking-wide text-pine">The hard part</p>
            <p className="mt-1">{project.challenges}</p>
          </div>
          <div>
            <p className="font-mono text-[0.68rem] uppercase tracking-wide text-pine">Result</p>
            <p className="mt-1">{project.result}</p>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.stack.map((s) => (
            <span key={s} className="rounded-sm border border-rule px-2 py-0.5 font-mono text-[0.68rem] text-ink-soft">
              {s}
            </span>
          ))}
        </div>

        <div className="mt-7 flex gap-5 border-t border-rule pt-5">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="font-mono text-xs uppercase tracking-wide text-pine underline decoration-rule underline-offset-4"
            >
              View on GitHub &rarr;
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="font-mono text-xs uppercase tracking-wide text-ink-soft underline decoration-rule underline-offset-4"
            >
              Live demo &rarr;
            </a>
          )}
        </div>
      </motion.div>
    </motion.div>
  )
}
