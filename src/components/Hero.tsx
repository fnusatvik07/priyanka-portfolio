import { motion, useReducedMotion } from 'framer-motion'
import type { Basics, Achievement } from '../types/portfolio'

const PILLARS = ['Retrieval-Augmented Generation', 'Agentic AI', 'LLMOps & Evaluation']

export function Hero({ basics, achievements }: { basics: Basics; achievements: Achievement[] }) {
  const reduce = useReducedMotion()
  const base = import.meta.env.BASE_URL // honors the GitHub Pages sub-path
  const container = {
    hidden: {},
    show: { transition: { staggerChildren: reduce ? 0 : 0.08 } },
  }
  const item = {
    hidden: { opacity: 0, y: reduce ? 0 : 18 },
    show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
  }

  return (
    <section id="top" className="relative overflow-hidden">
      {/* quiet structural backdrop — a fine grid, not decoration-for-its-own-sake */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.45]"
        style={{
          backgroundImage:
            'linear-gradient(to right, var(--color-line) 1px, transparent 1px), linear-gradient(to bottom, var(--color-line) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
          maskImage: 'radial-gradient(ellipse 80% 60% at 50% 0%, #000 40%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 60% at 50% 0%, #000 40%, transparent 100%)',
        }}
      />

      <div className="section relative pt-36 pb-20 md:pt-44 md:pb-28">
        <motion.div variants={container} initial="hidden" animate="show" className="max-w-3xl">
          <motion.p variants={item} className="eyebrow">
            {basics.label} · {basics.location}
          </motion.p>

          <motion.h1
            variants={item}
            className="mt-5 text-4xl font-bold leading-[1.08] tracking-tight text-[var(--color-ink)] sm:text-5xl md:text-6xl"
          >
            {basics.headline}
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--color-ink-soft)]"
          >
            {basics.positioning}
          </motion.p>

          <motion.div variants={item} className="mt-7 flex flex-wrap gap-2.5">
            {PILLARS.map((p) => (
              <span key={p} className="chip">
                {p}
              </span>
            ))}
          </motion.div>

          <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#work"
              className="rounded-md bg-[var(--color-accent)] px-5 py-3 text-sm font-semibold text-white shadow-[var(--shadow-card)] transition-transform hover:-translate-y-0.5"
            >
              View work →
            </a>
            <a
              href="#contact"
              className="rounded-md border border-[var(--color-line)] bg-[var(--color-surface)] px-5 py-3 text-sm font-semibold text-[var(--color-ink)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
            >
              Get in touch
            </a>
          </motion.div>
        </motion.div>

        {/* portfolio intro reel — 30s silent kinetic-typography overview */}
        <motion.div
          initial={{ opacity: 0, y: reduce ? 0 : 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: reduce ? 0 : 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="mt-14 overflow-hidden rounded-xl border border-[var(--color-line)] shadow-[var(--shadow-card)]"
        >
          <video
            src={`${base}intro.mp4`}
            poster={`${base}intro-poster.jpg`}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className="block w-full"
            aria-label="Priyanka Neogi — 30-second portfolio intro reel"
          />
        </motion.div>

        {/* metric strip — evidence above the fold */}
        {achievements.length > 0 && (
          <motion.dl
            variants={container}
            initial="hidden"
            animate="show"
            className="mt-16 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-[var(--color-line)] pt-10 md:grid-cols-4"
          >
            {achievements.map((a) => (
              <motion.div key={a.label} variants={item}>
                <dt className="font-mono text-2xl font-semibold text-[var(--color-accent-ink)] md:text-3xl">
                  {a.metric}
                </dt>
                <dd className="mt-2 text-sm leading-snug text-[var(--color-muted)]">{a.label}</dd>
              </motion.div>
            ))}
          </motion.dl>
        )}
      </div>
    </section>
  )
}
