import { Section } from './Section'
import { Reveal } from './Reveal'
import type { Certification, EducationItem } from '../types/portfolio'

export function Credentials({
  certifications,
  education,
}: {
  certifications: Certification[]
  education: EducationItem[]
}) {
  if (certifications.length === 0 && education.length === 0) return null

  return (
    <Section id="credentials" eyebrow="Credentials" title="Certifications & education">
      <div className="grid gap-10 lg:grid-cols-2">
        {certifications.length > 0 && (
          <Reveal>
            <h3 className="font-mono text-xs uppercase tracking-[0.12em] text-[var(--color-muted)]">
              Certifications
            </h3>
            <ul className="mt-5 divide-y divide-[var(--color-line)] border-t border-[var(--color-line)]">
              {certifications.map((c) => (
                <li key={c.name} className="flex items-baseline justify-between gap-4 py-4">
                  <span className="text-sm leading-snug text-[var(--color-ink)]">
                    {c.link ? (
                      <a
                        href={c.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline decoration-[var(--color-line)] underline-offset-4 hover:decoration-[var(--color-accent)]"
                      >
                        {c.name}
                      </a>
                    ) : (
                      c.name
                    )}
                  </span>
                  {c.issuer && (
                    <span className="shrink-0 font-mono text-xs text-[var(--color-accent-ink)]">{c.issuer}</span>
                  )}
                </li>
              ))}
            </ul>
          </Reveal>
        )}

        {education.length > 0 && (
          <Reveal delay={0.05}>
            <h3 className="font-mono text-xs uppercase tracking-[0.12em] text-[var(--color-muted)]">Education</h3>
            <ul className="mt-5 space-y-5 border-t border-[var(--color-line)] pt-5">
              {education.map((e) => (
                <li key={e.degree} className="card p-5">
                  <p className="text-sm font-semibold text-[var(--color-ink)]">{e.degree}</p>
                  <p className="mt-1 text-sm text-[var(--color-ink-soft)]">{e.institution}</p>
                  <p className="mt-2 flex items-center gap-2 font-mono text-xs text-[var(--color-muted)]">
                    <span>{e.year}</span>
                    {e.detail && <span>· {e.detail}</span>}
                  </p>
                </li>
              ))}
            </ul>
          </Reveal>
        )}
      </div>
    </Section>
  )
}
