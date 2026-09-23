import SectionHeading from './SectionHeading'

export default function About() {
  return (
    <section id="about" className="border-b border-rule py-20 sm:py-28">
      <div className="container-page">
        <SectionHeading kicker="About" title="How I got here" />

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1fr]">
          <div className="max-w-prose text-[1.05rem] leading-relaxed text-ink-soft">
            <p className="mb-5">
              I started out curious about what happens underneath the code I was writing —
              which is what pulled me toward compilers and systems in the first place. Building
              a compiler from lexer to optimized LLVM IR taught me more about how software
              actually runs than any framework tutorial ever did.
            </p>
            <p className="mb-5">
              That same curiosity pulled me toward AI from the systems side: not "how do I call
              an API," but how retrieval, indexing, and confidence scoring actually behave under
              real, messy data — which is what the Barclays and Accion Labs projects were really
              about.
            </p>
            <p>
              Outside of my own projects, I lead a team of 40 developers as Technical Head of my
              university's Computer Students Association — which mostly means making sure other
              people's good ideas actually ship.
            </p>
          </div>

          <div className="space-y-8">
            <div>
              <p className="font-mono text-xs uppercase tracking-wide text-ink-faint">Education</p>
              <div className="mt-3 border-l border-rule pl-4">
                <p className="font-display text-lg text-ink">
                  Vishwakarma Institute of Technology, Pune
                </p>
                <p className="mt-1 text-sm text-ink-soft">
                  B.Tech, Computer Engineering &middot; 2023 &ndash; 2027 &middot; CGPA 9.19/10
                </p>
              </div>
            </div>

            <div>
              <p className="font-mono text-xs uppercase tracking-wide text-ink-faint">What I enjoy solving</p>
              <ul className="mt-3 space-y-2 border-l border-rule pl-4 text-sm text-ink-soft">
                <li>Problems where correctness matters more than speed of delivery</li>
                <li>Systems where a wrong answer is worse than a slow one</li>
                <li>Taking something research-shaped and making it actually run</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
