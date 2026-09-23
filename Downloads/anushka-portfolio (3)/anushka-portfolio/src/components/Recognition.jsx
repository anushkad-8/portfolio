import SectionHeading from './SectionHeading'
import Achievements from './Achievements'
import Patents from './Patents'
import Certifications from './Certifications'
import Leadership from './Leadership'

export default function Recognition() {
  return (
    <section id="recognition" className="border-b border-rule py-20 sm:py-28">
      <div className="container-page">
        <SectionHeading index="04" kicker="Recognition" title="Achievements & leadership" />

        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          <div className="space-y-16">
            <Achievements />
            <Certifications />
          </div>
          <div className="space-y-16">
            <Patents />
            <Leadership />
          </div>
        </div>
      </div>
    </section>
  )
}
