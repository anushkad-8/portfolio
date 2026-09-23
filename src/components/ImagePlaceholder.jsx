// Drop-in replacement instructions:
// 1. Put your image in /public or /src/assets
// 2. Pass it as the `src` prop — e.g. <ImagePlaceholder src="/screenshots/barclays.png" label="Barclays confidence-scoring dashboard" />
// When `src` is empty, this renders an intentionally-designed placeholder frame instead of a broken image.

export default function ImagePlaceholder({ src, alt = '', label, aspect = 'wide', frame = 'browser' }) {
  const aspectClass = aspect === 'portrait' ? 'aspect-[3/4]' : aspect === 'square' ? 'aspect-square' : 'aspect-[16/10]'

  if (src) {
    return (
      <div className={`overflow-hidden rounded-sm border border-rule ${aspectClass}`}>
        <img src={src} alt={alt} className="h-full w-full object-cover" loading="lazy" />
      </div>
    )
  }

  return (
    <div className={`relative overflow-hidden rounded-sm border border-rule bg-paper-raised ${aspectClass}`}>
      {frame === 'browser' && (
        <div className="flex items-center gap-1.5 border-b border-rule px-3 py-2">
          <span className="h-2 w-2 rounded-full border border-ink-faint" />
          <span className="h-2 w-2 rounded-full border border-ink-faint" />
          <span className="h-2 w-2 rounded-full border border-ink-faint" />
        </div>
      )}
      <div className="flex h-full w-full flex-col items-center justify-center gap-2 px-6 text-center">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="opacity-40">
          <rect x="2" y="4" width="20" height="16" rx="1.5" stroke="currentColor" strokeWidth="1.3" />
          <circle cx="8" cy="10" r="1.6" stroke="currentColor" strokeWidth="1.3" />
          <path d="M2 16l5.5-5 4 3.5L16 9l6 7" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
        </svg>
        <p className="font-mono text-[0.65rem] uppercase tracking-wide text-ink-faint">
          {label || 'Add screenshot'}
        </p>
      </div>
    </div>
  )
}
