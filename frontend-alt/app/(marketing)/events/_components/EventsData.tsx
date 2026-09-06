'use client'

import React, { useState, useEffect } from 'react'
// import { apiFetch } from '@/app/lib/api'

// ── Types ────────────────────────────────────────────────────────────────

export interface PastEvent {
  title: string
  description: string
  date: string
  type: string
  attendees: string
  image: string
  link: string
}

export interface UpcomingEventData {
  title: string
  tagline: string
  description: string
  date: string
  time?: string
  location: string
  capacity: string
  type: string
  organizer?: string
  logoUrl?: string
  logoMonogram?: string
  link: string
}

// ── Mock data ────────────────────────────────────────────────────────────

const MOCK_UPCOMING: UpcomingEventData = {
  title: 'Web3 Engineering Workshop: Smart Contracts & Security',
  tagline: '// Three-day intensive · EVM & Solana',
  description:
    'Three-day intensive workshop covering smart contract architecture, security patterns, and audit-ready development practices. Delivered by working engineers who build in production.',
  date: 'Sep 15 – 17, 2026',
  time: '9:00 AM WAT',
  location: 'Jos Engineering Studio',
  capacity: '25 engineers',
  type: 'Workshop',
  organizer: 'Blockfuse Labs',
  logoUrl: undefined,
  logoMonogram: 'BF',
  link: '#',
}

const MOCK_PAST: PastEvent[] = [
  {
    title: 'AI Agents in DeFi: Technical Deep Dive',
    description: 'A hands-on session exploring autonomous agent architectures, on-chain execution triggers, and real-world DeFi integrations.',
    date: 'Aug 10, 2026',
    type: 'Workshop',
    attendees: '30+',
    image: '/hero-imgs/placeholder-event-1.jpg',
    link: '#',
  },
  {
    title: 'Cohort 4 Graduation & Hiring Showcase',
    description: 'Our fourth cohort presented production projects to hiring partners, protocols, and the broader Blockfuse community.',
    date: 'Jul 28, 2026',
    type: 'Hiring Event',
    attendees: '50+',
    image: '/hero-imgs/placeholder-event-2.jpg',
    link: '#',
  },
  {
    title: 'Open Source Contribution Sprint',
    description: 'Engineers shipped meaningful pull requests to open-source Web3 tooling projects across a focused two-day sprint.',
    date: 'Jul 15, 2026',
    type: 'Community Event',
    attendees: '45+',
    image: '/hero-imgs/placeholder-event-3.jpg',
    link: '#',
  },
  {
    title: 'Infrastructure & DevOps for Web3 Systems',
    description: 'Practical workshop on deploying RPC nodes, building indexers, and setting up monitoring stacks for high-throughput systems.',
    date: 'Jul 1, 2026',
    type: 'Workshop',
    attendees: '35+',
    image: '/hero-imgs/placeholder-event-4.jpg',
    link: '#',
  },
  {
    title: 'Frontend Development for dApps',
    description: 'A deep dive into wallet integration, real-time state with subgraphs, and building performant dApp UIs with Next.js.',
    date: 'Jun 18, 2026',
    type: 'Workshop',
    attendees: '40+',
    image: '/hero-imgs/placeholder-event-5.jpg',
    link: '#',
  },
  {
    title: 'Smart Contract Auditing & Security',
    description: 'Engineers worked through real-world vulnerabilities, audit techniques, and formal verification patterns on EVM contracts.',
    date: 'Jun 5, 2026',
    type: 'Workshop',
    attendees: '28+',
    image: '/hero-imgs/placeholder-event-6.jpg',
    link: '#',
  },
]

// ── Hooks ───────────────────────────────────────────────────────────────

function useUpcomingEvent() {
  const [event, setEvent] = useState<UpcomingEventData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function load() {
      try {
        // ── Uncomment when backend is ready ──────────────────────────────
        // const data = await apiFetch<UpcomingEventData[]>('/api/events?status=upcoming&limit=1')
        // setEvent(data[0] ?? null)
        // ─────────────────────────────────────────────────────────────────

        setEvent(MOCK_UPCOMING)
      } catch (err) {
        setError('Failed to load upcoming event.')
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  return { event, loading, error }
}

function usePastEvents() {
  const [events, setEvents] = useState<PastEvent[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function load() {
      try {
        // ── Uncomment when backend is ready ──────────────────────────────
        // const data = await apiFetch<PastEvent[]>('/api/events?status=past')
        // setEvents(data)
        // ─────────────────────────────────────────────────────────────────

        setEvents(MOCK_PAST)
      } catch (err) {
        setError('Failed to load past events.')
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  return { events, loading, error }
}

// ── Components ──────────────────────────────────────────────────────────

interface UpcomingProps {
  children?: (data: { event: UpcomingEventData | null; loading: boolean; error: string | null }) => React.ReactNode
}

export function UpcomingEventData({ children }: UpcomingProps) {
  const state = useUpcomingEvent()
  if (children) return <>{children(state)}</>
  if (state.loading) return <div className="text-xs font-mono text-text-muted py-4">Loading event...</div>
  if (!state.event) return null
  return (
    <div className="glass-panel p-8 border border-dark-border">
      <span className="text-[10px] font-mono text-accent-purple uppercase tracking-widest block mb-2">{state.event.type}</span>
      <h3 className="text-xl font-light text-text-primary mb-2">{state.event.title}</h3>
      <p className="text-xs text-text-secondary font-light mb-4">{state.event.description}</p>
      <div className="text-xs font-mono text-accent-pink">{state.event.date} • {state.event.location}</div>
    </div>
  )
}

interface PastProps {
  children?: (data: { events: PastEvent[]; loading: boolean; error: string | null }) => React.ReactNode
}

export function PastEventsData({ children }: PastProps) {
  const state = usePastEvents()
  if (children) return <>{children(state)}</>
  if (state.loading) return <div className="text-xs font-mono text-text-muted py-4">Loading past events...</div>
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {state.events.map((ev) => (
        <div key={ev.title} className="glass-panel p-6 border border-dark-border hover-glow-card">
          <span className="text-[10px] font-mono text-accent-purple uppercase tracking-widest block mb-2">{ev.type}</span>
          <h4 className="text-base font-light text-text-primary mb-2">{ev.title}</h4>
          <p className="text-xs text-text-secondary font-light mb-4">{ev.description}</p>
          <div className="text-[10px] font-mono text-text-muted">{ev.date} • {ev.attendees} attendees</div>
        </div>
      ))}
    </div>
  )
}

