'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { ArrowRight, Clock } from 'lucide-react'

// ── Types ────────────────────────────────────────────────────────────────

export interface BlogPost {
  id: string
  slug: string
  title: string
  category: string
  snippet: string
  author: {
    name: string
    role: string
    avatar: string
    readTime: string
  }
  image: string
  featured: boolean
}

// ── Mock data ────────────────────────────────────────────────────────────

const MOCK: BlogPost[] = [
  {
    id: 'how-to-be-10x-web3-engineer',
    slug: 'how-to-be-10x-web3-engineer',
    title: 'How To Be A 10x Web3 Engineer In The Age of AI/ML',
    category: 'Protocol Engineering',
    snippet: 'We provide actionable tips, tooling workflows, and architectural insights from industry protocol leaders. For real.',
    author: { name: 'Azunyan U. Wu', role: 'Core Protocol Engineer', avatar: '/engineers.png', readTime: '5 min read' },
    image: '/solidity.png',
    featured: true,
  },
  {
    id: 'building-scalable-smart-contracts',
    slug: 'building-scalable-smart-contracts',
    title: 'Building Scalable Smart Contracts On EVM Layer 2s',
    category: 'Smart Contracts',
    snippet: 'Exploring state gas optimization patterns, storage packing, and proxy upgradeability standards in production.',
    author: { name: 'Vermillion White', role: 'Security Auditor', avatar: '/engineers.png', readTime: '5 min read' },
    image: '/case study section.png',
    featured: false,
  },
  {
    id: 'zero-knowledge-circuit-design',
    slug: 'zero-knowledge-circuit-design',
    title: 'Zero-Knowledge Circuit Design: From Noir to Circom',
    category: 'AI & ZK Proofs',
    snippet: 'A deep dive into zero-knowledge proof generation, constraint systems, and verifying proofs on-chain efficiently.',
    author: { name: 'Salvador D. Gray', role: 'ZK Research Lead', avatar: '/engineers.png', readTime: '7 min read' },
    image: '/process.png',
    featured: false,
  },
  {
    id: 'securing-cross-chain-bridges',
    slug: 'securing-cross-chain-bridges',
    title: 'Securing Cross-Chain Bridges Against Flash Loan Exploits',
    category: 'Security & Audits',
    snippet: 'Analyzing real-world exploit vectors in cross-chain messaging protocol relays and how to defend state sync loops.',
    author: { name: 'Sarah Mitchell', role: 'Protocol Engineer', avatar: '/engineers.png', readTime: '6 min read' },
    image: '/upcoming.png',
    featured: false,
  },
]

// ── Hook ────────────────────────────────────────────────────────────────

export function useBlogPosts() {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function load() {
      try {
        /*
        // ── UNCOMMENT WHEN BACKEND API IS READY ──────────────────────────
        // const res = await fetch('/api/blogs')
        // const backendData = await res.json()
        // setPosts(backendData)
        // ─────────────────────────────────────────────────────────────────
        */

        setPosts(MOCK)
      } catch (err) {
        setError('Failed to load blog posts.')
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  return { posts, loading, error }
}

// ── Component ───────────────────────────────────────────────────────────

interface Props {
  children?: (data: { posts: BlogPost[]; loading: boolean; error: string | null }) => React.ReactNode
}

export const BlogPostsData = ({ children }: Props) => {
  const state = useBlogPosts()

  if (children) {
    return <>{children(state)}</>
  }

  if (state.loading) {
    return (
      <div className="py-12 text-center text-xs font-mono text-text-muted">
        Loading articles...
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
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {state.posts.map((post) => (
        <Link
          key={post.id}
          href={`/blog/${post.slug}`}
          className="glass-panel p-6 border border-dark-border hover-glow-card flex flex-col justify-between group"
        >
          <div>
            <div className="flex items-center justify-between gap-2 mb-3 text-[10px] font-mono">
              <span className="text-accent-purple uppercase">{post.category}</span>
              <span className="text-text-muted flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {post.author.readTime}
              </span>
            </div>

            <h3 className="text-lg font-light text-text-primary group-hover:text-accent-purple transition-colors mb-2 leading-snug">
              {post.title}
            </h3>
            <p className="text-xs text-text-secondary font-light leading-relaxed mb-6">
              {post.snippet}
            </p>
          </div>

          <div className="flex items-center justify-between pt-4 border-t border-dark-border/50 text-xs font-mono text-text-muted group-hover:text-text-primary transition-colors">
            <span>By {post.author.name}</span>
            <ArrowRight className="w-4 h-4 text-accent-purple group-hover:translate-x-1 transition-transform" />
          </div>
        </Link>
      ))}
    </div>
  )
}

export default BlogPostsData
