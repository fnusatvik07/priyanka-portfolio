import { Section } from './Section'
import { Reveal } from './Reveal'
import type { SkillGroup } from '../types/portfolio'

export function Skills({ skills }: { skills: SkillGroup[] }) {
  if (skills.length === 0) return null
  return (
    <Section
      id="expertise"
      eyebrow="Technical Expertise"
      title="The stack, grouped by what it does"
      intro="Capabilities organized by domain rather than a flat keyword dump."
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((group, i) => (
          <Reveal key={group.category} delay={(i % 3) * 0.05}>
            <div className="card h-full p-6">
              <h3 className="font-mono text-xs uppercase tracking-[0.12em] text-[var(--color-accent-ink)]">
                {group.category}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-md border border-[var(--color-line)] px-2.5 py-1 text-xs text-[var(--color-ink-soft)]"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
