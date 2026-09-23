import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { projects } from '../data/projects'
import SectionHeading from './SectionHeading'
import ProjectCard from './ProjectCard'
import ProjectDetail from './ProjectDetail'

export default function Projects() {
  const [activeId, setActiveId] = useState(null)
  const active = projects.find((p) => p.id === activeId) || null

  return (
    <section id="projects" className="border-b border-rule py-20 sm:py-28">
      <div className="container-page">
        <SectionHeading index="02" kicker="Selected Work" title="Things I've built" />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} onExplore={() => setActiveId(project.id)} />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && <ProjectDetail project={active} onClose={() => setActiveId(null)} />}
      </AnimatePresence>
    </section>
  )
}
