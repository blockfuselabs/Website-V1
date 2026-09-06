'use client'

import React from 'react'
import {
  Code2,
  Handshake,
  Boxes,
  Building2,
  Terminal,
  ArrowRight,
} from 'lucide-react'
import TeamMembersData, { useTeamStats } from './_components/TeamData'

export default function TeamPage() {
  const { stats } = useTeamStats()
  const statIcons = [Code2, Handshake, Boxes, Building2]

  return (
    <div className="relative overflow-hidden">

      {/* ── Hero ────────────────────────────────────────────────────────── */}
      <div className="space-y-6 mb-16 relative z-10 pt-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-accent-purple/10 border border-accent-purple/30 text-[11px] font-mono tracking-widest text-accent-purple uppercase w-fit">
          <span className="h-2 w-2 bg-accent-purple inline-block animate-pulse" />
          // ECOSYSTEM & PEOPLE
        </div>
        <div className="max-w-3xl space-y-4">
          <h1 className="hero-title">
            Community
          </h1>
          <p className="text-lg text-text-secondary font-light leading-relaxed max-w-2xl">
            The team, alumni, and open source contributors building the future of software engineering in Jos.
          </p>
        </div>
      </div>

      {/* ── Stats ───────────────────────────────────────────────────────── */}
      <section className="mb-24 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => {
            const IconComp = statIcons[idx % statIcons.length]
            return (
              <div
                key={stat.label}
                className="glass-panel p-6 hover-glow-card relative group overflow-hidden border border-dark-border"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 border border-dark-border bg-black/40">
                    <IconComp className="w-5 h-5 text-accent-purple" />
                  </div>
                  <span className="text-[10px] font-mono text-text-muted uppercase tracking-widest">METRIC</span>
                </div>
                <div className="text-3xl font-light text-text-primary group-hover:text-accent-pink transition-colors mb-2 font-mono">
                  {stat.value}
                </div>
                <p className="text-xs text-text-secondary font-light leading-relaxed">{stat.label}</p>
              </div>
            )
          })}
        </div>
      </section>

      {/* ── Deployment terminal ──────────────────────────────────────────── */}
      <section className="mb-20 glass-panel p-6 sm:p-8 border border-dark-border shadow-2xl relative z-10">
        <div className="flex items-center justify-between pb-4 mb-6 border-b border-dark-border">
          <div className="flex items-center gap-2">
            <Terminal className="w-4 h-4 text-accent-purple" />
            <span className="text-xs font-mono text-text-secondary uppercase tracking-widest">
              blockfuse-alumni-deployment.log
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 bg-red-500/80 inline-block" />
            <span className="w-2.5 h-2.5 bg-yellow-500/80 inline-block" />
            <span className="w-2.5 h-2.5 bg-emerald-500/80 inline-block" />
          </div>
        </div>
        <div className="font-mono text-xs space-y-2 text-text-secondary/90 leading-relaxed bg-black/50 p-4 border border-white/[0.04]">
          <p><span className="text-emerald-400">[SYSTEM]</span> Initializing talent verification protocol...</p>
          <p><span className="text-accent-purple">[GRADUATES]</span> 115+ production engineers deployed to top Web3 ecosystems</p>
          <p><span className="text-accent-pink">[PARTNERS]</span> Active integrations: Uniswap, Polygon, Aave, Solana Labs, Curve, Lido, OpenZeppelin</p>
          <p><span className="text-amber-400">[LOCATION]</span> Hub base: Jos, Nigeria // Sovereign IP 100% Verified</p>
        </div>
      </section>

      {/* ── Core team ───────────────────────────────────────────────────── */}
      <section className="mb-24 relative z-10">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl font-light tracking-tighter text-text-primary">
            The <em className="italic font-light text-text-secondary">team</em>
          </h2>
          <span className="text-xs font-mono text-text-muted uppercase tracking-widest">
            // Core Leadership
          </span>
        </div>

        <TeamMembersData />
      </section>

      {/* ── CTA ─────────────────────────────────────────────────────────── */}
      <section className="py-16 text-center glass-panel relative z-10 border border-dark-border">
        <h3 className="text-2xl sm:text-3xl font-light text-text-primary mb-4">Join our community</h3>
        <p className="text-sm text-text-secondary mb-8 max-w-lg mx-auto font-light leading-relaxed">
          Whether you're an engineer looking to level up, a company seeking talent, or an open source contributor, there's a place for you in the Blockfuse Labs community.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="/academy"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-black hover:bg-neutral-200 transition-all duration-300 text-xs tracking-widest uppercase font-mono font-bold"
          >
            <span>Apply to Academy</span>
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="/hire-engineers"
            className="btn-secondary"
          >
            <span>Browse Talent</span>
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="/contact"
            className="btn-secondary"
          >
            <span>Get in Touch</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

    </div>
  )
}
