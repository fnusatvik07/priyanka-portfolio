import type { Basics } from '../types/portfolio'

export function Footer({ basics }: { basics: Basics }) {
  return (
    <footer className="border-t border-[var(--color-line)]">
      <div className="mx-auto flex max-w-[72rem] flex-col items-center justify-between gap-2 px-6 py-8 text-sm text-[var(--color-muted)] sm:flex-row">
        <span>
          © {basics.name} · {basics.label}
        </span>
        <a href="#top" className="transition-colors hover:text-[var(--color-accent)]">
          Back to top ↑
        </a>
      </div>
    </footer>
  )
}
