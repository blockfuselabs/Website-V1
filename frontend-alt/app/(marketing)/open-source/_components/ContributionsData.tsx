'use client'

import React, { useState, useEffect } from 'react'
import { ExternalLink, GitPullRequest } from 'lucide-react'

export interface Contribution {
  project: string
  link: string
  description: string
}

const MOCK: Contribution[] = [
  { project: 'Foundry', link: '#', description: 'Core contributor to Ethereum smart contract development framework' },
  { project: 'The Graph', link: '#', description: 'Subgraph development and indexing infrastructure improvements' },
  { project: 'Solana Programs', link: '#', description: 'Rust-based smart contract development and optimization' },
  { project: 'Web3.py', link: '#', description: 'Python Web3 library enhancements and documentation' },
]

export function useContributions() {
  const [contributions, setContributions] = useState<Contribution[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function load() {
      try {
        /*
        // ── UNCOMMENT WHEN BACKEND API IS READY ──────────────────────────
        // const res = await fetch('/api/open-source')
        // const backendData = await res.json()
        // setContributions(backendData)
        // ─────────────────────────────────────────────────────────────────
        */

        setContributions(MOCK)
      } catch (err) {
        setError('Failed to load contributions.')
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  return { contributions, loading, error }
}

interface Props {
  children?: (data: { contributions: Contribution[]; loading: boolean; error: string | null }) => React.ReactNode
}

export const ContributionsData = ({ children }: Props) => {
  const state = useContributions()

  if (children) {
    return <>{children(state)}</>
  }

  if (state.loading) {
    return (
      <div className="py-8 text-center text-xs font-mono text-text-muted">
        Loading contributions...
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {state.contributions.map((c) => (
        <a
          key={c.project}
          href={c.link}
          target="_blank"
          rel="noreferrer"
          className="glass-panel p-6 border border-dark-border hover-glow-card flex items-start justify-between gap-4 group"
        >
          <div>
            <div className="flex items-center gap-2 mb-2">
              <GitPullRequest className="w-4 h-4 text-accent-purple" />
              <h3 className="text-sm font-light text-text-primary group-hover:text-accent-purple transition-colors">
                {c.project}
              </h3>
            </div>
            <p className="text-xs text-text-secondary font-light leading-relaxed">
              {c.description}
            </p>
          </div>
          <ExternalLink className="w-4 h-4 text-text-muted group-hover:text-accent-purple transition-colors shrink-0 mt-1" />
        </a>
      ))}
    </div>
  )
}

export default ContributionsData
