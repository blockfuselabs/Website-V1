'use client'

import React, { useState, useEffect, useRef } from 'react'
import { ExternalLink, ArrowRight } from 'lucide-react'

export interface CaseStudy {
  id: string
  title: string
  category: string
  tagline: string
  description: string
  metrics: string
  techs: string[]
  coverImage: string
  websiteUrl: string
}

const caseStudies: CaseStudy[] = [
  {
    id: '01',
    title: 'DeFi Protocol Launch',
    category: 'Decentralized Finance',
    tagline: 'Multi-Chain DEX & Liquidity Pools',
    description: 'Architected and shipped a multi-chain DEX with $50M+ TVL in 4 months. Built with security-first Solidity smart contracts, formal verification patterns, custom liquidity pool strategies, and subgraphs for real-time data indexing.',
    metrics: '$50M+ TVL · 100K+ Active Users',
    techs: ['Solidity', 'The Graph', 'Foundry', 'Next.js'],
    coverImage: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=1200&h=700&fit=crop',
    websiteUrl: 'https://blockfuselabs.com',
  },
  {
    id: '02',
    title: 'AI Trading Bot System',
    category: 'Applied AI & Automation',
    tagline: 'Autonomous On-Chain Arbitrage',
    description: 'Built autonomous copy-trading and market-making agents integrated with 5+ on-chain protocols and real-time market data streams. Designed for 20ms execution latency and low-slippage routing.',
    metrics: '5+ Protocols · 20ms Latency',
    techs: ['Python', 'LangChain', 'OpenAI', 'Smart Contracts'],
    coverImage: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&h=700&fit=crop',
    websiteUrl: 'https://blockfuselabs.com',
  },
  {
    id: '03',
    title: 'Layer 2 Infrastructure',
    category: 'DevOps & Scaling',
    tagline: 'High-Throughput Node Indexing',
    description: 'Deployed indexing and monitoring infrastructure for high-throughput scaling solutions. Enterprise RPC node clusters with 99.99% uptime, auto-scaling Kubernetes StatefulSets, and Prometheus alert playbooks.',
    metrics: '99.99% Uptime · 10M+ Requests/Day',
    techs: ['Kubernetes', 'Docker', 'AWS', 'Prometheus'],
    coverImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&h=700&fit=crop',
    websiteUrl: 'https://blockfuselabs.com',
  },
  {
    id: '04',
    title: 'Cross-Chain Liquidity Router',
    category: 'Interoperability Protocol',
    tagline: 'Zero-Slippage Atomic Swaps',
    description: 'Engineered a seamless cross-chain token swap and messaging bridge. Leveraged LayerZero and Wormhole CPI protocols to ensure atomic multi-chain execution with zero slippage vulnerabilities.',
    metrics: '12 Chains Supported · Zero Slippage',
    techs: ['Rust', 'Solana', 'LayerZero', 'TypeScript'],
    coverImage: 'https://images.unsplash.com/photo-1642543492481-44e81e3914a7?w=1200&h=700&fit=crop',
    websiteUrl: 'https://blockfuselabs.com',
  },
  {
    id: '05',
    title: 'Autonomous Agent Orchestrator',
    category: 'Autonomous On-Chain AI',
    tagline: 'Decentralized Agent Framework',
    description: 'Designed a decentralized framework for deploying autonomous Web3 agents. Supports on-chain prompt evaluation, non-custodial wallet execution, and verifiable AI decision logs.',
    metrics: '1,000+ Active Agents · On-Chain AI',
    techs: ['Python', 'LangChain', 'EVM', 'Subgraphs'],
    coverImage: 'https://images.unsplash.com/photo-1677442136019-21780efad99a?w=1200&h=700&fit=crop',
    websiteUrl: 'https://blockfuselabs.com',
  },
]

export default function CaseStudyShowcase() {
  const [activeIdx, setActiveIdx] = useState(0)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const itemRefs = useRef<(HTMLButtonElement | null)[]>([])
  const [markerStyle, setMarkerStyle] = useState<{ top: number; height: number }>({ top: 0, height: 60 })

  const resetTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current)
    timerRef.current = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % caseStudies.length)
    }, 4500)
  }

  useEffect(() => {
    resetTimer()
    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [])

  useEffect(() => {
    const activeEl = itemRefs.current[activeIdx]
    if (activeEl) {
      setMarkerStyle({
        top: activeEl.offsetTop,
        height: activeEl.offsetHeight,
      })
      activeEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
    }
  }, [activeIdx])

  const select = (idx: number) => {
    setActiveIdx(idx)
    resetTimer()
  }

  const activeProduct = caseStudies[activeIdx]

  return (
    <section className="mb-24 pb-16 border-b border-dark-border relative z-10">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-12">
        <h2 className="text-3xl sm:text-4xl font-light tracking-tighter text-text-primary">
          Case <em className="italic font-light text-text-secondary">studies</em>
        </h2>
        <span className="text-xs font-mono text-text-muted uppercase tracking-widest">
          // Proven Track Record
        </span>
      </div>

      {/* Main Container: Fixed Equal Height for Left and Right Columns */}
      <div className="h-[640px] flex flex-col lg:flex-row overflow-hidden max-w-6xl mx-auto gap-10">

        {/* Left Column: Product List with Marker Indicator (Equal Height) */}
        <div className="w-full lg:w-[40%] h-full min-h-0 border border-dark-border flex flex-col overflow-hidden bg-black/40">
          <div className="p-4 border-b border-dark-border flex items-center justify-between bg-white/[0.02] shrink-0">
            <span className="text-[11px] font-mono tracking-widest text-text-muted uppercase">
              // SELECT PRODUCT
            </span>
            <span className="text-[10px] font-mono text-accent-pink">
              0{activeIdx + 1} / 0{caseStudies.length}
            </span>
          </div>

          <div className="relative overflow-y-auto hide-scrollbar flex-1 p-2 space-y-1">
            {/* Animated Marker Bar on Left Edge */}
            <div
              className="absolute left-2 w-[3px] bg-accent-purple shadow-[0_0_12px_rgba(168,85,247,0.8)] transition-all duration-300 ease-out pointer-events-none"
              style={{
                top: `${markerStyle.top}px`,
                height: `${markerStyle.height}px`,
              }}
            />

            {caseStudies.map((study, idx) => {
              const isSelected = activeIdx === idx

              return (
                <button
                  key={study.id}
                  ref={(el) => { itemRefs.current[idx] = el }}
                  onClick={() => select(idx)}
                  className={`w-full text-left p-5 transition-all duration-200 border-b last:border-b-0 border-dark-border/40 pl-6 group relative ${
                    isSelected
                      ? 'bg-accent-purple/[0.08] text-text-primary'
                      : 'text-text-secondary hover:text-text-primary hover:bg-white/[0.02]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className={`text-[10px] font-mono ${isSelected ? 'text-accent-purple font-semibold' : 'text-text-muted'}`}>
                      [{study.id}]
                    </span>
                    <span className="text-[9px] font-mono text-accent-pink/80 bg-accent-pink/10 border border-accent-pink/20 px-2 py-0.5">
                      {study.metrics.split('·')[0].trim()}
                    </span>
                  </div>

                  <h3 className={`text-lg font-light tracking-tight transition-colors ${isSelected ? 'text-text-primary font-normal' : 'text-text-secondary group-hover:text-text-primary'}`}>
                    {study.title}
                  </h3>

                  <p className="text-xs text-text-muted font-light mt-1 truncate">
                    {study.tagline}
                  </p>
                </button>
              )
            })}
          </div>


        </div>

        {/* Right Column: Mirroring "Meet Our Engineers" left detail layout */}
        <div className="w-full lg:w-[60%] h-full min-h-0 flex flex-col overflow-hidden bg-dark-bg">

          {/* Top Section: Cover Image with Overlay Title & Tagline */}
          <div className="relative flex-1 min-h-0 overflow-hidden group">
            <img
              src={activeProduct.coverImage}
              alt={activeProduct.title}
              className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-105"
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/60" />

            {/* Top Metric Badge */}
            <div className="absolute top-4 left-6">
              <span className="text-[10px] font-mono tracking-widest text-accent-pink bg-black/80 backdrop-blur-md border border-accent-pink/40 px-3 py-1 uppercase shadow-lg">
                {activeProduct.metrics}
              </span>
            </div>

            {/* Product Title & Category over image bottom */}
            <div className="absolute bottom-0 left-0 right-0 px-6 py-6 space-y-1">
              <p className="text-[10px] font-mono tracking-widest text-accent-purple uppercase">
                // {activeProduct.category}
              </p>

              <h3 className="text-2xl sm:text-3xl font-light text-text-primary leading-tight">
                {activeProduct.title}
              </h3>

              <p className="text-xs font-mono tracking-widest text-text-muted uppercase">
                {activeProduct.tagline}
              </p>
            </div>
          </div>

          {/* Bottom Section: Details, Tech Stack & Direct Website Button */}
          <div className="shrink-0 max-h-[48%] overflow-y-auto bg-dark-bg border-t border-dark-border">
            <div className="p-6 space-y-5">
              {/* Product Description */}
              <p className="text-xs sm:text-sm text-text-secondary font-light leading-relaxed">
                {activeProduct.description}
              </p>

              {/* Tech Stack Badges */}
              <div className="flex flex-wrap gap-2">
                {activeProduct.techs.map((tech) => (
                  <span
                    key={tech}
                    className="text-[9px] font-mono border border-accent-purple/30 bg-accent-purple/5 text-accent-purple px-2.5 py-1"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Single Button Directing to Product Website */}
              <div className="pt-4 border-t border-dark-border flex items-center justify-between">
                <a
                  href={activeProduct.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full"
                >
                  <span>Visit Product Website</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
