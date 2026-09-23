import { leadership } from '../data/recognition'

export default function Leadership() {
  return (
    <div>
      <p className="mb-4 font-mono text-xs uppercase tracking-wide text-ink-faint">Leadership</p>
      <div className="space-y-6">
        {leadership.map((l) => (
          <div key={l.role} className="border-l-2 border-pine pl-4">
            <div className="flex flex-wrap items-baseline gap-x-2">
              <p className="font-display text-lg text-ink">{l.role}</p>
              <span className="text-sm text-ink-faint">&middot; {l.org}</span>
            </div>
            <p className="mt-0.5 font-mono text-[0.68rem] uppercase tracking-wide text-ink-faint">{l.period}</p>
            <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{l.detail}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
