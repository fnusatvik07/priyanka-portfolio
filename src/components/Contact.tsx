import { Reveal } from './Reveal'
import type { Basics, Contact as ContactInfo, Socials } from '../types/portfolio'

export function Contact({
  basics,
  contact,
  socials,
}: {
  basics: Basics
  contact: ContactInfo
  socials: Socials
}) {
  const links: { label: string; href: string }[] = []
  if (socials.linkedin) links.push({ label: 'LinkedIn', href: socials.linkedin })
  if (socials.github) links.push({ label: 'GitHub', href: socials.github })

  return (
    <section id="contact" aria-labelledby="contact-title">
      <div className="section">
        <Reveal>
          <div className="card overflow-hidden p-8 md:p-14">
            <p className="eyebrow">Contact</p>
            <h2
              id="contact-title"
              className="mt-3 max-w-2xl text-3xl font-bold tracking-tight text-[var(--color-ink)] md:text-4xl"
            >
              Let's talk about building reliable AI systems.
            </h2>
            {basics.availability && (
              <p className="mt-4 text-base text-[var(--color-ink-soft)]">{basics.availability}.</p>
            )}

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href={`mailto:${contact.email}`}
                className="rounded-md bg-[var(--color-accent)] px-5 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
              >
                {contact.email}
              </a>
              {contact.phone && (
                <a
                  href={`tel:${contact.phone.replace(/\s/g, '')}`}
                  className="rounded-md border border-[var(--color-line)] bg-[var(--color-surface)] px-5 py-3 text-sm font-semibold text-[var(--color-ink)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
                >
                  {contact.phone}
                </a>
              )}
              {links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-md border border-[var(--color-line)] bg-[var(--color-surface)] px-5 py-3 text-sm font-semibold text-[var(--color-ink)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
