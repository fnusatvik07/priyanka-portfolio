import { Section } from './Section'
import { Reveal } from './Reveal'
import type { Project } from '../types/portfolio'

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="eyebrow text-[var(--color-muted)]">{label}</p>
      <p className="mt-2 text-sm leading-relaxed text-[var(--color-ink-soft)]">{value}</p>
    </div>
  )
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <Reveal delay={index * 0.05}>
      <article className="card h-full p-7 transition-shadow duration-300 hover:shadow-[var(--shadow-lift)] md:p-9">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-xl font-semibold leading-snug tracking-tight text-[var(--color-ink)] md:text-2xl">
            {project.name}
          </h3>
          <span className="shrink-0 font-mono text-xs text-[var(--color-muted)]">{project.date}</span>
        </div>

        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          <Field label="Challenge" value={project.challenge} />
          <Field label="Outcome" value={project.outcome} />
        </div>

        <div className="mt-6">
          <Field label="Approach" value={project.solution} />
        </div>

        <ul className="mt-7 flex flex-wrap gap-2" aria-label="Technologies">
          {project.technologies.map((t) => (
            <li key={t} className="chip">
              {t}
            </li>
          ))}
        </ul>
      </article>
    </Reveal>
  )
}

export function Projects({ projects }: { projects: Project[] }) {
  const featured = projects.filter((p) => p.featured)
  if (featured.length === 0) return null

  return (
    <Section
      id="work"
      eyebrow="Selected Work"
      title="Engineering RAG that's measured, not assumed"
      intro="Two systems that show the full arc — from a hard retrieval problem to a quantified result."
    >
      <div className="grid gap-6 lg:grid-cols-2">
        {featured.map((p, i) => (
          <ProjectCard key={p.name} project={p} index={i} />
        ))}
      </div>
    </Section>
  )
}
