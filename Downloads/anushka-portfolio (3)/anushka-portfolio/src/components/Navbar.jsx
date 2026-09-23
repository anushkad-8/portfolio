import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { profile } from '../data/profile'

const LINKS = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'recognition', label: 'Achievements' },
  { id: 'beyond', label: 'Beyond Code' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleClick = (id) => {
    setOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? 'border-b border-rule bg-paper/90 backdrop-blur-sm' : 'border-b border-transparent'
      }`}
    >
      <nav className="container-page flex h-16 items-center justify-between">
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault()
            handleClick('home')
          }}
          className="font-display text-lg font-medium tracking-tight"
        >
          Anushka Dabhade
        </a>

        <ul className="hidden items-center gap-7 md:flex">
          {LINKS.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => handleClick(link.id)}
                className="group relative font-mono text-[0.72rem] uppercase tracking-wide text-ink-soft transition-colors hover:text-ink"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-pine transition-all duration-300 group-hover:w-full" />
              </button>
            </li>
          ))}
          <li>
            <a
              href={profile.resumeFile}
              download
              className="rounded-sm border border-ink px-3.5 py-1.5 font-mono text-[0.72rem] uppercase tracking-wide text-ink transition-colors hover:bg-ink hover:text-paper"
            >
              Resume
            </a>
          </li>
        </ul>

        <button
          className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <motion.span
            animate={{ rotate: open ? 45 : 0, y: open ? 5 : 0 }}
            className="h-px w-5 bg-ink"
          />
          <motion.span animate={{ opacity: open ? 0 : 1 }} className="h-px w-5 bg-ink" />
          <motion.span
            animate={{ rotate: open ? -45 : 0, y: open ? -5 : 0 }}
            className="h-px w-5 bg-ink"
          />
        </button>
      </nav>

      <motion.div
        initial={false}
        animate={{ height: open ? 'auto' : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="overflow-hidden border-b border-rule bg-paper md:hidden"
      >
        <ul className="container-page flex flex-col gap-1 py-3">
          {LINKS.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => handleClick(link.id)}
                className="w-full py-2.5 text-left font-mono text-xs uppercase tracking-wide text-ink-soft"
              >
                {link.label}
              </button>
            </li>
          ))}
          <li>
            <a href={profile.resumeFile} download className="block py-2.5 font-mono text-xs uppercase tracking-wide text-pine">
              Download Resume
            </a>
          </li>
        </ul>
      </motion.div>
    </header>
  )
}
