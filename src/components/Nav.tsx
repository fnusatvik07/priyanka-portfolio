import { useEffect, useState } from 'react'
import type { Basics } from '../types/portfolio'

interface NavItem {
  id: string
  label: string
}

export function Nav({ basics, items }: { basics: Basics; items: NavItem[] }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const initials = basics.name
    .split(' ')
    .map((w) => w[0])
    .slice(0, 2)
    .join('')

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-[var(--color-canvas)]/85 backdrop-blur border-b border-[var(--color-line)]' : 'border-b border-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-[72rem] items-center justify-between px-6 py-4" aria-label="Primary">
        <a href="#top" className="flex items-center gap-2.5 font-semibold tracking-tight">
          <span className="grid h-8 w-8 place-items-center rounded-md bg-[var(--color-accent)] font-mono text-sm text-white">
            {initials}
          </span>
          <span className="hidden sm:inline">{basics.name}</span>
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {items.map((it) => (
            <a
              key={it.id}
              href={`#${it.id}`}
              className="text-sm font-medium text-[var(--color-ink-soft)] transition-colors hover:text-[var(--color-accent)]"
            >
              {it.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-md bg-[var(--color-ink)] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[var(--color-accent)]"
          >
            Contact
          </a>
        </div>

        <button
          className="md:hidden rounded-md border border-[var(--color-line)] bg-[var(--color-surface)] p-2"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <span className="block h-0.5 w-5 bg-[var(--color-ink)]" />
          <span className="mt-1 block h-0.5 w-5 bg-[var(--color-ink)]" />
          <span className="mt-1 block h-0.5 w-5 bg-[var(--color-ink)]" />
        </button>
      </nav>

      {open && (
        <div className="border-t border-[var(--color-line)] bg-[var(--color-canvas)] md:hidden">
          <div className="flex flex-col px-6 py-3">
            {items.map((it) => (
              <a
                key={it.id}
                href={`#${it.id}`}
                onClick={() => setOpen(false)}
                className="py-2.5 text-sm font-medium text-[var(--color-ink-soft)]"
              >
                {it.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="py-2.5 text-sm font-semibold text-[var(--color-accent)]"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
