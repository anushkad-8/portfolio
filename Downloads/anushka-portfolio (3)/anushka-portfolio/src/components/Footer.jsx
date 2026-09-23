import { profile } from '../data/profile'

export default function Footer() {
  return (
    <footer className="border-t border-rule py-8">
      <div className="container-page flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
        <div>
          <p className="font-display text-base text-ink">{profile.name}</p>
          
        </div>
        <div className="flex items-center gap-5 font-mono text-[0.68rem] uppercase tracking-wide text-ink-soft">
          <a href={profile.github} target="_blank" rel="noreferrer" className="hover:text-ink">
            GitHub
          </a>
          {profile.linkedin && (
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:text-ink">
              LinkedIn
            </a>
          )}
          <a href={`mailto:${profile.email}`} className="hover:text-ink">
            Email
          </a>
          <span className="text-ink-faint">&copy; {new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  )
}
