'use client'

import React, { useState, useEffect } from 'react'
// import { apiFetch } from '@/app/lib/api'

// ── Types ────────────────────────────────────────────────────────────────

export interface AboutStat {
  label: string
  value: string
  sub: string
}

export interface Opportunity {
  title: string
  subtitle: string
  type: string
  location: string
}

// ── Mock data ────────────────────────────────────────────────────────────

const MOCK_STATS: AboutStat[] = [
  { label: 'Founded in Jos', value: '2024', sub: 'Jos, Nigeria' },
  { label: 'Engineers Trained', value: '115+', sub: 'Globally deployed' },
  { label: 'Contracts Shipped', value: '500+', sub: 'Production systems' },
  { label: 'Ecosystem Partners', value: '50+', sub: 'Protocols & teams' },
]

const MOCK_OPPORTUNITIES: Opportunity[] = [
  {
    title: 'Engineering Cohorts',
    subtitle: 'Full-stack Web3 & AI engineering training for ambitious builders.',
    type: 'Full-time / In-person',
    location: 'Jos, Nigeria',
  },
  {
    title: 'Ecosystem Partnerships',
    subtitle: 'Sponsoring developer grants, hackathons, and cohort scholarships.',
    type: 'Protocol Grant / Sponsor',
    location: 'Global / Remote',
  },
  {
    title: 'Core Studio Roles',
    subtitle: 'Senior instructors, security auditors, and protocol architects.',
    type: 'Full-time',
    location: 'Hybrid / Remote',
  },
]

// ── Hooks ───────────────────────────────────────────────────────────────

function useAboutStats() {
  const [stats, setStats] = useState<AboutStat[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function load() {
      try {
        // ── Uncomment when backend is ready ──────────────────────────────
        // const data = await apiFetch<AboutStat[]>('/api/about/stats')
        // setStats(data)
        // ─────────────────────────────────────────────────────────────────

        setStats(MOCK_STATS)
      } catch (err) {
        setError('Failed to load stats.')
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  return { stats, loading, error }
}

function useOpportunities() {
  const [opportunities, setOpportunities] = useState<Opportunity[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function load() {
      try {
        // ── Uncomment when backend is ready ──────────────────────────────
        // const data = await apiFetch<Opportunity[]>('/api/opportunities')
        // setOpportunities(data)
        // ─────────────────────────────────────────────────────────────────

        setOpportunities(MOCK_OPPORTUNITIES)
      } catch (err) {
        setError('Failed to load opportunities.')
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  return { opportunities, loading, error }
}

// ── Components ──────────────────────────────────────────────────────────

interface StatsProps {
  children: (data: { stats: AboutStat[]; loading: boolean; error: string | null }) => React.ReactNode
}

export function AboutStatsData({ children }: StatsProps) {
  const state = useAboutStats()
  return <>{children(state)}</>
}

interface OppProps {
  children: (data: { opportunities: Opportunity[]; loading: boolean; error: string | null }) => React.ReactNode
}

export function OpportunitiesData({ children }: OppProps) {
  const state = useOpportunities()
  return <>{children(state)}</>
}
