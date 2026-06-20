import { Section } from './Section'
import { Reveal } from './Reveal'
import type { ExperienceItem } from '../types/portfolio'

function Role({ item, index }: { item: ExperienceItem; index: number }) {
  return (
    <Reveal delay={index * 0.04}>
      <article className="relative pl-6 md:pl-8">
        {/* timeline rail */}
        <span
          aria-hidden
          className="absolute left-0 top-1.5 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-[var(--color-accent)] bg-[var(--color-canvas)]"
        />
        <span aria-hidden className="absolute left-0 top-1.5 h-full w-px -translate-x-1/2 bg-[var(--color-line)]" />

        <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
          <h3 className="text-lg font-semibold tracking-tight text-[var(--color-ink)]">
            {item.role} <span className="text-[var(--color-muted)]">·</span>{' '}
            <span className="text-[var(--color-accent-ink)]">{item.company}</span>
          </h3>
          <span className="font-mono text-xs text-[var(--color-muted)]">
            {item.start} – {item.end}
            {item.location ? ` · ${item.location}` : ''}
          </span>
        </div>

        <ul className="mt-4 space-y-2.5">
          {item.highlights.map((h, i) => (
            <li key={i} className="flex gap-3 text-sm leading-relaxed text-[var(--color-ink-soft)]">
              <span aria-hidden className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--color-accent)]" />
              <span>{h}</span>
            </li>
          ))}
        </ul>

        {item.technologies.length > 0 && (
          <ul className="mt-5 flex flex-wrap gap-2 pb-10" aria-label="Technologies used">
            {item.technologies.map((t) => (
              <li
                key={t}
                className="rounded-md bg-[var(--color-accent-soft)] px-2.5 py-1 font-mono text-xs text-[var(--color-accent-ink)]"
              >
                {t}
              </li>
            ))}
          </ul>
        )}
      </article>
    </Reveal>
  )
}

export function Experience({ experience }: { experience: ExperienceItem[] }) {
  if (experience.length === 0) return null
  return (
    <Section id="experience" eyebrow="Experience" title="Where I've built" alt>
      <div className="max-w-3xl">
        {experience.map((item, i) => (
          <Role key={`${item.company}-${item.role}`} item={item} index={i} />
        ))}
      </div>
    </Section>
  )
}
