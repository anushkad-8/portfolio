import { certifications } from '../data/recognition'

export default function Certifications() {
  return (
    <div>
      <p className="mb-4 font-mono text-xs uppercase tracking-wide text-ink-faint">Certifications</p>
      <ul className="space-y-3">
        {certifications.map((c) => (
          <li key={c.name} className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:gap-3">
            <span className="font-display text-base text-ink">{c.name}</span>
            <span className="font-mono text-xs text-ink-faint">{c.issuer}</span>
            {c.detail && <span className="text-sm text-ink-soft sm:ml-1">&mdash; {c.detail}</span>}
          </li>
        ))}
      </ul>
    </div>
  )
}
