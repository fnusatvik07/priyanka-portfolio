import { usePortfolioData } from './hooks/usePortfolioData'
import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Projects } from './components/Projects'
import { Experience } from './components/Experience'
import { Skills } from './components/Skills'
import { Credentials } from './components/Certifications'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

export default function App() {
  const state = usePortfolioData()

  if (state.status === 'loading') {
    return (
      <div className="grid min-h-screen place-items-center text-[var(--color-muted)]" role="status" aria-live="polite">
        <span className="animate-pulse font-mono text-sm">Loading…</span>
      </div>
    )
  }

  if (state.status === 'error') {
    return (
      <div className="grid min-h-screen place-items-center px-6 text-center">
        <div>
          <p className="font-semibold text-[var(--color-ink)]">Couldn't load portfolio data.</p>
          <p className="mt-2 font-mono text-sm text-[var(--color-muted)]">{state.error}</p>
        </div>
      </div>
    )
  }

  const data = state.data

  // Nav is data-driven: only show sections that actually have content.
  const navItems = [
    data.projects.some((p) => p.featured) && { id: 'work', label: 'Work' },
    data.experience.length > 0 && { id: 'experience', label: 'Experience' },
    data.skills.length > 0 && { id: 'expertise', label: 'Expertise' },
    (data.certifications.length > 0 || data.education.length > 0) && { id: 'credentials', label: 'Credentials' },
  ].filter(Boolean) as { id: string; label: string }[]

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-[var(--color-accent)] focus:px-4 focus:py-2 focus:text-sm focus:text-white"
      >
        Skip to content
      </a>

      <Nav basics={data.basics} items={navItems} />

      <main id="main">
        <Hero basics={data.basics} achievements={data.achievements} />
        {data.summary && <About summary={data.summary} />}
        <Projects projects={data.projects} />
        <Experience experience={data.experience} />
        <Skills skills={data.skills} />
        <Credentials certifications={data.certifications} education={data.education} />
        <Contact basics={data.basics} contact={data.contact} socials={data.socials} />
      </main>

      <Footer basics={data.basics} />
    </>
  )
}
