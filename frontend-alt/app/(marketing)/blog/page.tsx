'use client'

import React, { useState } from 'react'
import { ArrowRight, Search, Filter, ArrowUpRight } from 'lucide-react'

const categories = [
  'All Category',
  'Protocol Engineering',
  'Smart Contracts',
  'DevOps & Infra',
  'Security & Audits',
  'AI & ZK Proofs',
  'Ecosystem & Culture',
]

const blogPosts = [
  {
    id: 'how-to-be-10x-web3-engineer',
    slug: 'how-to-be-10x-web3-engineer',
    title: 'How To Be A 10x Web3 Engineer In The Age of AI/ML',
    category: 'Protocol Engineering',
    snippet: 'We provide actionable tips, tooling workflows, and architectural insights from industry protocol leaders. For real.',
    author: {
      name: 'Azunyan U. Wu',
      role: 'Core Protocol Engineer',
      avatar: '/engineers.png',
      readTime: '5 min read',
    },
    image: '/solidity.png',
    featured: true,
  },
  {
    id: 'building-scalable-smart-contracts',
    slug: 'building-scalable-smart-contracts',
    title: 'Building Scalable Smart Contracts On EVM Layer 2s',
    category: 'Smart Contracts',
    snippet: 'Exploring state gas optimization patterns, storage packing, and proxy upgradeability standards in production.',
    author: {
      name: 'Vermillion White',
      role: 'Security Auditor',
      avatar: '/engineers.png',
      readTime: '5 min read',
    },
    image: '/case study section.png',
    featured: false,
  },
  {
    id: 'zero-knowledge-circuit-design',
    slug: 'zero-knowledge-circuit-design',
    title: 'Zero-Knowledge Circuit Design: From Noir to Circom',
    category: 'AI & ZK Proofs',
    snippet: 'A deep dive into zero-knowledge proof generation, constraint systems, and verifying proofs on-chain efficiently.',
    author: {
      name: 'Salvador D. Gray',
      role: 'ZK Research Lead',
      avatar: '/engineers.png',
      readTime: '7 min read',
    },
    image: '/process.png',
    featured: false,
  },
  {
    id: 'securing-cross-chain-bridges',
    slug: 'securing-cross-chain-bridges',
    title: 'Securing Cross-Chain Bridges Against Flash Loan Exploits',
    category: 'Security & Audits',
    snippet: 'Analyzing real-world exploit vectors in cross-chain messaging protocol relays and how to defend state sync loops.',
    author: {
      name: 'Sarah Mitchell',
      role: 'Protocol Engineer',
      avatar: '/engineers.png',
      readTime: '6 min read',
    },
    image: '/upcoming.png',
    featured: false,
  },
  {
    id: 'decentralized-infra-automation',
    slug: 'decentralized-infra-automation',
    title: 'Automating Decentralized RPC Infrastructure & Validator Sets',
    category: 'DevOps & Infra',
    snippet: 'How to manage multi-region node clusters using Terraform, Docker, and customized telemetry exporters.',
    author: {
      name: 'Alex Rivera',
      role: 'DevOps Architect',
      avatar: '/engineers.png',
      readTime: '4 min read',
    },
    image: '/engineering-hero.png',
    featured: false,
  },
]

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState<string>('All Category')
  const [searchQuery, setSearchQuery] = useState<string>('')
  const [filterOption, setFilterOption] = useState<string>('latest')

  const featuredPost = blogPosts.find((post) => post.featured) || blogPosts[0]
  const regularPosts = blogPosts.filter((post) => !post.featured)

  const filteredPosts = regularPosts.filter((post) => {
    const matchesCategory =
      activeCategory === 'All Category' || post.category === activeCategory
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.snippet.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="relative overflow-hidden pt-24 min-h-screen">
      {/* ── 1. Hero Section ───────────────────────────────────────────── */}
      <section className="min-h-[calc(100vh-6rem)] flex flex-col justify-center items-center text-center py-20 mb-12 relative z-10 border-b border-dark-border px-6">
        <span className="text-[10px] font-mono tracking-widest text-text-muted uppercase block mb-4">
          // Where ideas flow and code compiles
        </span>
        <h1 className="hero-title mb-6">
          Your Source For <br /> Engineering Inspiration
        </h1>
        <p className="text-sm text-text-secondary font-light max-w-2xl mx-auto mb-8 leading-relaxed">
          Dive into technical deep-dives, protocol architectures, and developer insights curated by Blockfuse Labs engineers.
        </p>
      </section>

      {/* ── 2. Full-Width Featured / Most Popular Blog ───────────────── */}
      <section className="max-w-7xl mx-auto px-6 mb-16 relative z-10">
        <div className="flex items-center justify-between mb-6">
          <span className="text-[10px] font-mono tracking-widest text-text-muted uppercase">
            // Featured Article
          </span>
          <span className="text-xs font-mono text-accent-purple">
            Most Popular
          </span>
        </div>

        <a
          href={`/blog/${featuredPost.slug}`}
          className="group glass-panel border border-dark-border hover:border-accent-purple/50 p-6 md:p-10 flex flex-col md:flex-row gap-8 items-stretch transition-all duration-300 block hover-glow-card"
        >
          <div className="w-full md:w-1/2 aspect-[16/9] border border-dark-border bg-black/40 overflow-hidden relative shrink-0">
            <img
              src={featuredPost.image}
              alt={featuredPost.title}
              className="w-full h-full object-cover opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-500"
            />
          </div>
          
          <div className="flex flex-col justify-between flex-1 py-2">
            <div>
              <span className="inline-block px-3 py-1 bg-accent-purple/10 border border-accent-purple/30 text-accent-purple text-[10px] font-mono tracking-widest uppercase mb-4">
                {featuredPost.category}
              </span>
              <h2 className="text-2xl md:text-4xl font-light text-text-primary group-hover:text-accent-purple transition-colors mb-4 leading-tight">
                {featuredPost.title}
              </h2>
              <p className="text-sm text-text-secondary font-light leading-relaxed mb-8">
                {featuredPost.snippet}
              </p>
            </div>

            <div className="flex items-center justify-between border-t border-dark-border pt-6 mt-auto">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full border border-dark-border overflow-hidden bg-black/50">
                  <img src={featuredPost.author.avatar} alt={featuredPost.author.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <span className="text-xs text-text-primary block font-light">{featuredPost.author.name}</span>
                  <span className="text-[10px] text-text-muted font-mono">{featuredPost.author.readTime}</span>
                </div>
              </div>

              <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-accent-purple group-hover:translate-x-1 transition-transform">
                <span>Read Full Article</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </div>
        </a>
      </section>

      {/* ── 3. Sidebar (Search/Filter/Category) + Other Posts Grid ────── */}
      <section className="max-w-7xl mx-auto px-6 mb-24 relative z-10 border-t border-dark-border pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Sidebar (Search, Filter, Categories) */}
          <div className="lg:col-span-4 space-y-8">
            {/* Search Article */}
            <div>
              <label className="text-[11px] font-mono tracking-widest text-text-muted uppercase block mb-2">
                Search
              </label>
              <div className="relative">
                <Search className="w-4 h-4 text-text-muted absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search article..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-white/[0.02] border border-dark-border text-text-primary pl-10 pr-4 py-2.5 text-xs font-mono focus:outline-none focus:border-accent-purple transition-colors placeholder:text-text-muted/60"
                />
              </div>
            </div>

            {/* Filter Dropdown */}
            <div>
              <label className="text-[11px] font-mono tracking-widest text-text-muted uppercase block mb-2">
                Filter
              </label>
              <div className="relative">
                <Filter className="w-4 h-4 text-text-muted absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <select
                  value={filterOption}
                  onChange={(e) => setFilterOption(e.target.value)}
                  className="w-full bg-white/[0.02] border border-dark-border text-text-primary pl-10 pr-4 py-2.5 text-xs font-mono focus:outline-none focus:border-accent-purple transition-colors appearance-none cursor-pointer"
                >
                  <option value="latest" className="bg-dark-bg text-text-primary">Filter article... (Latest)</option>
                  <option value="popular" className="bg-dark-bg text-text-primary">Most Popular</option>
                  <option value="trending" className="bg-dark-bg text-text-primary">Trending Insights</option>
                </select>
              </div>
            </div>

            {/* Browse By Categories */}
            <div className="pt-2">
              <span className="text-xs font-mono text-accent-purple font-semibold tracking-wider block mb-4">
                Browse By Categories
              </span>
              <div className="space-y-1 border-l border-dark-border pl-4">
                {categories.map((cat) => {
                  const isActive = activeCategory === cat
                  return (
                    <button
                      key={cat}
                      onClick={() => setActiveCategory(cat)}
                      className={`block w-full text-left py-2 px-3 text-xs tracking-wide transition-all relative ${
                        isActive
                          ? 'text-text-primary font-semibold bg-white/[0.03] border-l-2 border-accent-purple -ml-[17px] pl-[15px]'
                          : 'text-text-muted hover:text-text-primary hover:bg-white/[0.01]'
                      }`}
                    >
                      {cat}
                    </button>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Right Area: Other Blog Posts Grid */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredPosts.map((post) => (
                <a
                  key={post.id}
                  href={`/blog/${post.slug}`}
                  className="group glass-panel border border-dark-border hover:border-accent-purple/50 p-5 flex flex-col justify-between transition-all duration-300 hover-glow-card"
                >
                  <div>
                    {/* Image */}
                    <div className="w-full aspect-video border border-dark-border bg-black/40 overflow-hidden relative mb-4">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-500"
                      />
                    </div>

                    {/* Category Tag */}
                    <span className="inline-block px-2.5 py-0.5 bg-white/[0.03] border border-dark-border text-accent-purple text-[10px] font-mono tracking-widest uppercase mb-3">
                      {post.category}
                    </span>

                    {/* Title */}
                    <h3 className="text-lg font-light text-text-primary group-hover:text-accent-purple transition-colors mb-2 leading-snug">
                      {post.title}
                    </h3>

                    {/* Snippet */}
                    <p className="text-xs text-text-secondary font-light leading-relaxed mb-6 line-clamp-2">
                      {post.snippet}
                    </p>
                  </div>

                  {/* Footer metadata */}
                  <div className="flex items-center justify-between border-t border-dark-border pt-4 mt-auto">
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-full border border-dark-border overflow-hidden bg-black/50">
                        <img src={post.author.avatar} alt={post.author.name} className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <span className="text-xs text-text-primary block font-light leading-none mb-0.5">{post.author.name}</span>
                        <span className="text-[10px] text-text-muted font-mono leading-none">{post.author.readTime}</span>
                      </div>
                    </div>

                    <ArrowUpRight className="w-4 h-4 text-text-muted group-hover:text-accent-purple group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </div>
                </a>
              ))}
            </div>
          </div>

        </div>
      </section>
    </div>
  )
}
