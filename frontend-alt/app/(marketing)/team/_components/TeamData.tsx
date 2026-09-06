'use client'

import React, { useState, useEffect } from 'react'

export interface TeamMember {
  name: string
  role: string
  specialization: string
  bio: string
  badge: string
  initials: string
}

export interface TeamStat {
  value: string
  label: string
}

const MOCK_MEMBERS: TeamMember[] = [
  {
    name: 'Adeniyi Alao',
    role: 'Founder & Engineering Lead',
    specialization: 'Protocol Architecture & Smart Contracts',
    bio: 'Former senior engineer at major Web3 protocols. 10+ years in systems design and blockchain infrastructure.',
    badge: 'FOUNDER',
    initials: 'AA',
  },
  {
    name: 'Chioma Okafor',
    role: 'Head of Academy',
    specialization: 'Engineering Education & Talent Development',
    bio: 'Built talent pipelines across 3 continents. Passionate about unlocking engineering potential.',
    badge: 'EDUCATION',
    initials: 'CO',
  },
  {
    name: 'Tunde Somade',
    role: 'Technical Director',
    specialization: 'Full-Stack Development & Product Engineering',
    bio: 'Shipped 5 production protocols from zero to mainnet. Expert in rapid iteration and quality at scale.',
    badge: 'TECHNICAL',
    initials: 'TS',
  },
  {
    name: 'Zainab Ibrahim',
    role: 'Head of Partnerships',
    specialization: 'Ecosystem Growth & Strategic Partnerships',
    bio: 'Connected Blockfuse Labs to 50+ protocols and companies. Focused on sustainable ecosystem building.',
    badge: 'PARTNERSHIPS',
    initials: 'ZI',
  },
]

const MOCK_STATS: TeamStat[] = [
  { value: '115+', label: 'Engineers graduated & deployed' },
  { value: '50+', label: 'Companies & protocols partnered' },
  { value: '500+', label: 'Smart contracts engineered' },
  { value: '2 Years', label: 'Operating in Jos' },
]

export function useTeamMembers() {
  const [members, setMembers] = useState<TeamMember[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function loadData() {
      try {
        /*
        // ── UNCOMMENT WHEN BACKEND API IS READY ──────────────────────────
        // const res = await fetch('/api/team')
        // const backendData = await res.json()
        // setMembers(backendData)
        // ─────────────────────────────────────────────────────────────────
        */

        setMembers(MOCK_MEMBERS)
      } catch (err) {
        setError('Failed to load team members.')
      } finally {
        setLoading(false)
      }
    }
    loadData()
  }, [])

  return { members, loading, error }
}

export function useTeamStats() {
  const [stats, setStats] = useState<TeamStat[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadData() {
      try {
        /*
        // ── UNCOMMENT WHEN BACKEND API IS READY ──────────────────────────
        // const res = await fetch('/api/team/stats')
        // const backendData = await res.json()
        // setStats(backendData)
        // ─────────────────────────────────────────────────────────────────
        */

        setStats(MOCK_STATS)
      } catch (err) {
        console.error(err)
      } finally {
        setLoading(false)
      }
    }
    loadData()
  }, [])

  return { stats, loading }
}

interface MembersProps {
  children?: (data: { members: TeamMember[]; loading: boolean; error: string | null }) => React.ReactNode
}

export const TeamMembersData = ({ children }: MembersProps) => {
  const state = useTeamMembers()

  if (children) {
    return <>{children(state)}</>
  }

  if (state.loading) {
    return <div className="py-8 text-center text-xs font-mono text-text-muted">Loading team...</div>
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {state.members.map((member) => (
        <div
          key={member.name}
          className="glass-panel p-8 border border-dark-border hover-glow-card relative group flex flex-col justify-between"
        >
          <div>
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/[0.05] border border-dark-border flex items-center justify-center font-mono text-base font-semibold text-text-primary">
                  {member.initials}
                </div>
                <div>
                  <h3 className="text-xl font-light text-text-primary group-hover:text-accent-purple transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-xs text-accent-pink font-mono tracking-wider">{member.role}</p>
                </div>
              </div>
              <span className="text-[10px] font-mono text-accent-purple px-2.5 py-1 bg-accent-purple/10 border border-accent-purple/20">
                {member.badge}
              </span>
            </div>
            <div className="mb-5 pb-4 border-b border-dark-border/60">
              <p className="text-[10px] font-mono tracking-widest text-text-muted uppercase mb-1">Specialization</p>
              <p className="text-xs text-text-primary font-light">{member.specialization}</p>
            </div>
            <p className="text-sm text-text-secondary font-light leading-relaxed mb-6">
              {member.bio}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default TeamMembersData
