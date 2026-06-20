import { useEffect, useState } from 'react'
import type { PortfolioData } from '../types/portfolio'

type State =
  | { status: 'loading'; data: null; error: null }
  | { status: 'ready'; data: PortfolioData; error: null }
  | { status: 'error'; data: null; error: string }

/**
 * Loads portfolio-data.json at runtime. The entire site renders from this —
 * update the JSON and the whole portfolio updates, no code changes needed.
 */
export function usePortfolioData(): State {
  const [state, setState] = useState<State>({ status: 'loading', data: null, error: null })

  useEffect(() => {
    let active = true
    fetch(`${import.meta.env.BASE_URL}portfolio-data.json`)
      .then((res) => {
        if (!res.ok) throw new Error(`Failed to load data (${res.status})`)
        return res.json() as Promise<PortfolioData>
      })
      .then((data) => active && setState({ status: 'ready', data, error: null }))
      .catch((err: unknown) =>
        active &&
        setState({ status: 'error', data: null, error: err instanceof Error ? err.message : 'Unknown error' }),
      )
    return () => {
      active = false
    }
  }, [])

  return state
}
