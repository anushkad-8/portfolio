import { experience } from '../data/experience'
import SectionHeading from './SectionHeading'
import ExperienceCard from './ExperienceCard'

export default function Experience() {
  return (
    <section id="experience" className="border-b border-rule py-20 sm:py-28">
      <div className="container-page">
        <SectionHeading index="01" kicker="Industry Experience" title="Where I've worked" />
        <div className="space-y-20">
          {experience.map((item, i) => (
            <ExperienceCard key={item.id} item={item} reverse={i % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  )
}
