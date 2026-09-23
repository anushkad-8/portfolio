import { motion, useReducedMotion } from 'framer-motion'
import { achievements } from '../data/recognition'
import { profile } from '../data/profile'

function AchievementCard({ item, i }) {
  const reduce = useReducedMotion()
  return (
    <motion.div
      initial={reduce ? undefined : { opacity: 0, y: 14 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.45, delay: i * 0.04 }}
      className="border-t border-rule py-5 first:border-t-0"
    >
      <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
        <p className="font-display text-lg text-ink">{item.title}</p>
      </div>
      <p className="mt-1 text-sm text-ink-soft">{item.detail}</p>
    </motion.div>
  )
}

export default function Achievements() {
  return (
    <div>
      <p className="mb-4 font-mono text-xs uppercase tracking-wide text-ink-faint">Achievements</p>
      <div>
        {achievements.map((item, i) => (
          <AchievementCard key={item.title} item={item} i={i} />
        ))}
      </div>

      <div className="mt-8 flex items-center justify-between gap-4 rounded-sm border border-rule bg-paper-raised p-5">
        <div>
          <p className="font-mono text-xs uppercase tracking-wide text-ink-faint">LeetCode Profile</p>
          <p className="mt-1 text-sm text-ink-soft">500+ problems solved across LeetCode, CodeChef, and GeeksforGeeks.</p>
        </div>
        {profile.leetcode && (
          <a
            href={profile.leetcode}
            target="_blank"
            rel="noreferrer"
            className="flex-none rounded-sm border border-ink px-4 py-2 font-mono text-[0.7rem] uppercase tracking-wide text-ink transition-colors hover:bg-ink hover:text-paper"
          >
            View Profile
          </a>
        )}
      </div>
    </div>
  )
}
