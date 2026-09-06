'use client'

import React, { useState, useEffect } from 'react'
import { Globe, ExternalLink, Code2 } from 'lucide-react'

// ── Types ────────────────────────────────────────────────────────────────

export interface Engineer {
  id: number
  name: string
  title: string
  tags: string[]
  bio: string
  stack: string[]
  available: string
  photo: string
  github: string
  twitter: string
  linkedin: string
}

// ── Mock data ────────────────────────────────────────────────────────────

const MOCK: Engineer[] = [
  {
    id: 1,
    name: 'Adeniyi Adesanya',
    title: 'Senior Smart Contract Engineer',
    tags: ['Solidity Expert', 'EVM Specialist', 'DeFi Builder'],
    bio: 'Adeniyi has shipped over 40 production smart contracts across DeFi, NFT, and DAO protocols. He approaches every engagement with a security-first mindset and audit-ready code from day one.',
    stack: ['Solidity', 'Foundry', 'Hardhat', 'Viem'],
    available: 'Immediately',
    photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=600&fit=crop&crop=face',
    github: 'https://github.com',
    twitter: 'https://twitter.com',
    linkedin: 'https://linkedin.com',
  },
  {
    id: 2,
    name: 'Chioma Okafor',
    title: 'Full-Stack dApp Developer',
    tags: ['Web3 UI', 'Subgraphs', 'Next.js'],
    bio: 'Chioma builds end-to-end decentralised applications with a sharp eye for UX and performance. She has integrated wallet connections, real-time indexing, and complex on-chain state across 12+ live products.',
    stack: ['Next.js', 'TypeScript', 'The Graph', 'wagmi'],
    available: 'Jan 2025',
    photo: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&h=600&fit=crop&crop=face',
    github: 'https://github.com',
    twitter: 'https://twitter.com',
    linkedin: 'https://linkedin.com',
  },
  {
    id: 3,
    name: 'Tunde Salami',
    title: 'AI Systems Engineer',
    tags: ['LLM Pipelines', 'Agents', 'RAG'],
    bio: 'Tunde designs and deploys reliable AI-powered systems — not just demos. His work spans agentic workflows, retrieval-augmented generation, and on-chain inference pipelines integrated into live Web3 products.',
    stack: ['Python', 'LangChain', 'OpenAI', 'Vector DBs'],
    available: 'Feb 2025',
    photo: 'https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?w=400&h=600&fit=crop&crop=face',
    github: 'https://github.com',
    twitter: 'https://twitter.com',
    linkedin: 'https://linkedin.com',
  },
  {
    id: 4,
    name: 'Zainab Ibrahim',
    title: 'Protocol Architect',
    tags: ['Rust', 'Solana', 'System Design'],
    bio: 'Zainab architects distributed systems and Solana programs that hold up under real production load. She brings deep protocol intuition to every engagement and communicates complex tradeoffs clearly.',
    stack: ['Rust', 'Anchor', 'Solana', 'TypeScript'],
    available: 'Mar 2025',
    photo: 'https://images.unsplash.com/photo-1589156215202-bce1f91e27ef?w=400&h=600&fit=crop&crop=face',
    github: 'https://github.com',
    twitter: 'https://twitter.com',
    linkedin: 'https://linkedin.com',
  },
  {
    id: 5,
    name: 'Emeka Eze',
    title: 'Blockchain Security Engineer',
    tags: ['Audit', 'Fuzzing', 'Formal Verification'],
    bio: 'Emeka specialises in smart contract security — from manual code review to automated fuzzing and formal verification. He has identified critical vulnerabilities in protocols managing millions in TVL.',
    stack: ['Solidity', 'Slither', 'Echidna', 'Foundry'],
    available: 'Immediately',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop&crop=face',
    github: 'https://github.com',
    twitter: 'https://twitter.com',
    linkedin: 'https://linkedin.com',
  },
  {
    id: 6,
    name: 'Fatima Usman',
    title: 'DevOps & Infrastructure Engineer',
    tags: ['CI/CD', 'Cloud', 'Monitoring'],
    bio: 'Fatima builds the infrastructure that keeps Web3 products running — from node infrastructure and RPC management to deployment pipelines and on-chain monitoring systems.',
    stack: ['Docker', 'AWS', 'Terraform', 'Grafana'],
    available: 'Jan 2025',
    photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=600&fit=crop&crop=face',
    github: 'https://github.com',
    twitter: 'https://twitter.com',
    linkedin: 'https://linkedin.com',
  },
]

// ── Hook ────────────────────────────────────────────────────────────────

export function useEngineers() {
  const [engineers, setEngineers] = useState<Engineer[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function load() {
      try {
        /*
        // ── UNCOMMENT WHEN BACKEND API IS READY ──────────────────────────
        // const res = await fetch('/api/talent')
        // const backendData = await res.json()
        // setEngineers(backendData)
        // ─────────────────────────────────────────────────────────────────
        */

        setEngineers(MOCK)
      } catch (err) {
        setError('Failed to load engineers.')
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  return { engineers, loading, error }
}

// ── Component ───────────────────────────────────────────────────────────

interface Props {
  children?: (data: { engineers: Engineer[]; loading: boolean; error: string | null }) => React.ReactNode
}

export const EngineersData = ({ children }: Props) => {
  const state = useEngineers()

  if (children) {
    return <>{children(state)}</>
  }

  if (state.loading) {
    return (
      <div className="py-12 text-center text-xs font-mono text-text-muted">
        Loading engineer directory...
      </div>
    )
  }

  if (state.error) {
    return (
      <div className="py-12 text-center text-xs font-mono text-red-400">
        {state.error}
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {state.engineers.map((eng) => (
        <div
          key={eng.id}
          className="glass-panel p-6 border border-dark-border hover-glow-card flex flex-col justify-between group"
        >
          <div>
            <div className="flex items-center gap-4 mb-4">
              <img
                src={eng.photo}
                alt={eng.name}
                className="w-12 h-12 rounded-full object-cover border border-dark-border"
              />
              <div>
                <h3 className="text-base font-light text-text-primary group-hover:text-accent-purple transition-colors">
                  {eng.name}
                </h3>
                <p className="text-xs text-text-secondary font-light">{eng.title}</p>
              </div>
            </div>

            <p className="text-xs text-text-secondary font-light leading-relaxed mb-4">
              {eng.bio}
            </p>

            <div className="flex flex-wrap gap-1.5 mb-6">
              {eng.stack.map((st) => (
                <span
                  key={st}
                  className="px-2 py-0.5 bg-white/[0.03] border border-dark-border text-[10px] font-mono text-text-muted"
                >
                  {st}
                </span>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between pt-4 border-t border-dark-border/50 text-xs font-mono">
            <span className="text-[10px] text-accent-pink uppercase">Available: {eng.available}</span>
            <div className="flex items-center gap-3 text-text-muted">
              <a href={eng.github} target="_blank" rel="noreferrer" className="hover:text-text-primary">
                <Code2 className="w-4 h-4" />
              </a>
              <a href={eng.twitter} target="_blank" rel="noreferrer" className="hover:text-text-primary">
                <Globe className="w-4 h-4" />
              </a>
              <a href={eng.linkedin} target="_blank" rel="noreferrer" className="hover:text-text-primary">
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default EngineersData
