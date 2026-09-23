import { motion, useReducedMotion } from 'framer-motion'
import { profile } from '../data/profile'
import ImagePlaceholder from './ImagePlaceholder'

// Scattered, irregular — not a grid, not a bounded shape. Reads as loose
// neural/network connections tucked in the corner rather than a diagram.
const DOTS = [
  { x: 8, y: 6 }, { x: 24, y: 3 }, { x: 40, y: 12 }, { x: 16, y: 22 },
  { x: 55, y: 5 }, { x: 68, y: 16 }, { x: 33, y: 28 }, { x: 82, y: 9 },
  { x: 48, y: 24 }, { x: 92, y: 20 }, { x: 62, y: 30 }, { x: 78, y: 34 },
  { x: 12, y: 38 }, { x: 28, y: 42 }, { x: 5, y: 18 },
]

const LINKS = [
  [0, 1], [1, 2], [1, 3], [2, 4], [4, 5], [2, 6], [5, 7], [6, 8],
  [7, 9], [6, 10], [8, 10], [10, 11], [3, 12], [12, 13], [0, 14], [13, 6],
]

function NeuralCorner() {
  const reduce = useReducedMotion()

  return (
    <svg
      viewBox="0 0 100 45"
      preserveAspectRatio="none"
      className="pointer-events-none absolute right-0 top-0 h-40 w-full max-w-xl opacity-70 sm:h-52"
      aria-hidden="true"
    >
      {LINKS.map(([a, b], i) => {
        const n1 = DOTS[a]
        const n2 = DOTS[b]
        return (
          <motion.line
            key={i}
            x1={n1.x}
            y1={n1.y}
            x2={n2.x}
            y2={n2.y}
            stroke="#2F5D50"
            strokeWidth="0.15"
            strokeOpacity="0.4"
            initial={reduce ? undefined : { pathLength: 0 }}
            animate={reduce ? undefined : { pathLength: 1 }}
            transition={{ duration: 0.8, delay: 0.3 + i * 0.05, ease: [0.22, 1, 0.36, 1] }}
          />
        )
      })}
      {DOTS.map((n, i) => (
        <motion.circle
          key={i}
          cx={n.x}
          cy={n.y}
          r={i === 0 ? 1.1 : 0.7}
          fill="#2F5D50"
          initial={reduce ? undefined : { scale: 0, opacity: 0 }}
          animate={reduce ? undefined : { scale: 1, opacity: 1 }}
          transition={{ duration: 0.35, delay: 0.15 + i * 0.04, ease: 'backOut' }}
        />
      ))}
    </svg>
  )
}

export default function Hero() {
  const reduce = useReducedMotion()

  const rise = (delay = 0) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 18 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
        }

  return (
    <section id="home" className="relative overflow-hidden border-b border-rule pb-16 pt-32 sm:pt-40">
      <NeuralCorner />

      <div className="container-page relative grid grid-cols-1 gap-12 lg:grid-cols-[1.3fr_0.9fr] lg:gap-8">
        <div>
          <motion.p {...rise(0)} className="mb-4 font-mono text-xs uppercase tracking-wide text-pine">
            {profile.role}
          </motion.p>

          <motion.h1
            {...rise(0.08)}
            className="font-display text-[13vw] font-medium leading-[0.95] tracking-tight text-ink sm:text-7xl lg:text-[5.2rem]"
          >
            Anushka
            <br />
            Dabhade
          </motion.h1>

          <motion.p {...rise(0.22)} className="mt-8 max-w-prose text-lg leading-relaxed text-ink-soft">
            {profile.intro}
          </motion.p>

          <motion.div {...rise(0.32)} className="mt-9 flex flex-wrap items-center gap-4">
            <button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="rounded-sm bg-ink px-5 py-2.5 font-mono text-xs uppercase tracking-wide text-paper transition-transform hover:-translate-y-0.5"
            >
              View my work
            </button>
            <a
              href={profile.resumeFile}
              download
              className="rounded-sm border border-ink px-5 py-2.5 font-mono text-xs uppercase tracking-wide text-ink transition-transform hover:-translate-y-0.5"
            >
              Download resume
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="font-mono text-xs uppercase tracking-wide text-ink-soft underline decoration-rule underline-offset-4 hover:text-ink"
            >
              GitHub
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={reduce ? undefined : { opacity: 0, scale: 0.97 }}
          animate={reduce ? undefined : { opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto w-full max-w-sm lg:mx-0"
        >
          {/* Swap the src below for your photo — see ImagePlaceholder / README. */}
          <ImagePlaceholder src="google_profile.jpg" alt="Anushka Dabhade" label="Add your photo" aspect="square" frame="none" />
        </motion.div>
      </div>
    </section>
  )
}
