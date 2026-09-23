import { motion, useReducedMotion } from 'framer-motion'
import { profile } from '../data/profile'

export default function Contact() {
  const reduce = useReducedMotion()

  return (
    <section id="contact" className="py-24 sm:py-32">
      <div className="container-page">
        <motion.div
          initial={reduce ? undefined : { opacity: 0, y: 18 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="mb-3 font-mono text-xs uppercase tracking-wide text-pine">Contact</p>
          <h2 className="max-w-2xl font-display text-4xl font-medium leading-tight text-ink sm:text-5xl">
            Have an interesting problem to solve? Let&rsquo;s build something.
          </h2>

          <div className="mt-10 flex flex-wrap gap-x-10 gap-y-4">
            <a href={`mailto:${profile.email}`} className="group flex flex-col">
              <span className="font-mono text-[0.68rem] uppercase tracking-wide text-ink-faint">Email</span>
              <span className="font-display text-lg text-ink underline decoration-rule underline-offset-4 group-hover:decoration-pine">
                {profile.email}
              </span>
            </a>

            <a href={profile.github} target="_blank" rel="noreferrer" className="group flex flex-col">
              <span className="font-mono text-[0.68rem] uppercase tracking-wide text-ink-faint">GitHub</span>
              <span className="font-display text-lg text-ink underline decoration-rule underline-offset-4 group-hover:decoration-pine">
                github.com/anushkad-8
              </span>
            </a>

            {profile.linkedin && (
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="group flex flex-col">
                <span className="font-mono text-[0.68rem] uppercase tracking-wide text-ink-faint">LinkedIn</span>
                <span className="font-display text-lg text-ink underline decoration-rule underline-offset-4 group-hover:decoration-pine">
                  Connect
                </span>
              </a>
            )}

            <a href={profile.resumeFile} download className="group flex flex-col">
              <span className="font-mono text-[0.68rem] uppercase tracking-wide text-ink-faint">Resume</span>
              <span className="font-display text-lg text-ink underline decoration-rule underline-offset-4 group-hover:decoration-pine">
                Download PDF
              </span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
