import type { ReactNode } from 'react'
import { Reveal } from './Reveal'

/**
 * Consistent section scaffold: id anchor, eyebrow label, title, optional
 * intro, and an alternating background wash for editorial rhythm.
 */
export function Section({
  id,
  eyebrow,
  title,
  intro,
  alt = false,
  children,
}: {
  id: string
  eyebrow: string
  title: string
  intro?: string
  alt?: boolean
  children: ReactNode
}) {
  return (
    <section id={id} className={alt ? 'bg-[var(--color-canvas-2)]' : undefined} aria-labelledby={`${id}-title`}>
      <div className="section">
        <Reveal>
          <p className="eyebrow">{eyebrow}</p>
          <h2
            id={`${id}-title`}
            className="mt-3 text-3xl md:text-4xl font-bold tracking-tight text-[var(--color-ink)]"
          >
            {title}
          </h2>
          {intro && (
            <p className="mt-4 max-w-2xl text-base md:text-lg leading-relaxed text-[var(--color-ink-soft)]">
              {intro}
            </p>
          )}
        </Reveal>
        <div className="mt-12">{children}</div>
      </div>
    </section>
  )
}
