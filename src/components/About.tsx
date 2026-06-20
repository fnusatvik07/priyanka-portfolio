import { Section } from './Section'

export function About({ summary }: { summary: string }) {
  return (
    <Section id="about" eyebrow="About" title="Reliable AI systems, end to end">
      <p className="max-w-3xl text-lg leading-relaxed text-[var(--color-ink-soft)]">{summary}</p>
    </Section>
  )
}
