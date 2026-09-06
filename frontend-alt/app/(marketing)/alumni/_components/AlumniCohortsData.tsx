'use client'

import React, { useState, useEffect } from 'react'
import { GraduationCap, Building } from 'lucide-react'

export interface AlumniCohort {
  cohort: string
  year: string
  deployed: string
  companies: string
}

const MOCK: AlumniCohort[] = [
  { cohort: 'Cohort 1', year: '2024', deployed: '23 engineers', companies: 'Uniswap, Polygon, OpenZeppelin' },
  { cohort: 'Cohort 2', year: '2024', deployed: '31 engineers', companies: 'Aave, Curve, Lido' },
  { cohort: 'Cohort 3', year: '2024', deployed: '28 engineers', companies: 'SolanaLabs, Orca, Magic Eden' },
  { cohort: 'Cohort 4', year: '2024', deployed: '33 engineers', companies: 'Worldcoin, Scroll, Arbitrum' },
]

export function useAlumniCohorts() {
  const [cohorts, setCohorts] = useState<AlumniCohort[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function load() {
      try {
        /*
        // ── UNCOMMENT WHEN BACKEND API IS READY ──────────────────────────
        // const res = await fetch('/api/alumni')
        // const backendData = await res.json()
        // setCohorts(backendData)
        // ─────────────────────────────────────────────────────────────────
        */

        setCohorts(MOCK)
      } catch (err) {
        setError('Failed to load alumni cohorts.')
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  return { cohorts, loading, error }
}

interface Props {
  children?: (data: { cohorts: AlumniCohort[]; loading: boolean; error: string | null }) => React.ReactNode
}

export const AlumniCohortsData = ({ children }: Props) => {
  const state = useAlumniCohorts()

  if (children) {
    return <>{children(state)}</>
  }

  if (state.loading) {
    return (
      <div className="py-8 text-center text-xs font-mono text-text-muted">
        Loading alumni records...
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {state.cohorts.map((coh) => (
        <div
          key={coh.cohort}
          className="glass-panel p-6 border border-dark-border hover-glow-card flex flex-col justify-between group"
        >
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="px-2.5 py-1 bg-accent-purple/10 border border-accent-purple/30 text-[10px] font-mono text-accent-purple uppercase">
                {coh.cohort}
              </span>
              <span className="text-xs font-mono text-text-muted">{coh.year}</span>
            </div>

            <div className="flex items-center gap-2 mb-2">
              <GraduationCap className="w-4 h-4 text-accent-pink" />
              <h3 className="text-sm font-light text-text-primary group-hover:text-accent-pink transition-colors">
                {coh.deployed}
              </h3>
            </div>
          </div>

          <div className="pt-4 border-t border-dark-border/50 text-xs text-text-secondary font-light flex items-start gap-2">
            <Building className="w-3.5 h-3.5 text-text-muted shrink-0 mt-0.5" />
            <span>{coh.companies}</span>
          </div>
        </div>
      ))}
    </div>
  )
}

export default AlumniCohortsData
