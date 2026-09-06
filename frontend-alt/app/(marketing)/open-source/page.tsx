'use client'

import React from 'react'
import { ArrowRight, GitBranch, ExternalLink } from 'lucide-react'
import ContributionsData from './_components/ContributionsData'

export default function OpenSourcePage() {
  return (
    <div className="relative overflow-hidden">

      {/* ── Hero ────────────────────────────────────────────────────────── */}
      <div className="space-y-6 mb-16 relative z-10 pt-4 max-w-6xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-accent-purple/10 border border-accent-purple/30 text-[11px] font-mono tracking-widest text-accent-purple uppercase w-fit">
          <span className="h-2 w-2 bg-accent-purple inline-block animate-pulse" />
          // ECOSYSTEM IMPACT
        </div>
        <div className="max-w-3xl space-y-4">
          <h1 className="hero-title">
            Open Source
          </h1>
          <p className="text-lg text-text-secondary font-light leading-relaxed max-w-2xl">
            Blockfuse Labs engineers actively contribute to the underlying infrastructure, frameworks, and tooling of the Web3 ecosystem.
          </p>
        </div>
      </div>

      {/* ── Contributions ───────────────────────────────────────────────── */}
      <section className="mb-24 relative z-10 max-w-6xl mx-auto border-t border-dark-border pt-12">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl font-light tracking-tighter text-text-primary">
            Key <em className="italic font-light text-text-secondary">contributions</em>
          </h2>
          <span className="text-xs font-mono text-text-muted uppercase tracking-widest">
            // Open Source
          </span>
        </div>

        <ContributionsData>
          {({ contributions, loading, error }) => {
            if (loading) return <p className="text-xs font-mono text-text-muted">Loading contributions...</p>
            if (error) return <p className="text-xs font-mono text-accent-pink">{error}</p>
            return (
              <div className="space-y-6 max-w-4xl">
                {contributions.map((contrib) => (
                  <a
                    key={contrib.project}
                    href={contrib.link}
                    className="glass-panel p-6 border border-dark-border hover-glow-card block transition-all duration-300 group"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <div className="p-2 border border-accent-purple/30 bg-accent-purple/10 text-accent-purple group-hover:scale-110 transition-transform">
                          <GitBranch className="w-4 h-4" />
                        </div>
                        <h3 className="text-lg font-light text-text-primary group-hover:text-accent-purple transition-colors">
                          {contrib.project}
                        </h3>
                      </div>
                      <ExternalLink className="w-4 h-4 text-text-muted group-hover:text-accent-purple transition-colors" />
                    </div>
                    <p className="text-sm text-text-secondary font-light leading-relaxed pl-11">
                      {contrib.description}
                    </p>
                  </a>
                ))}
              </div>
            )
          }}
        </ContributionsData>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────────────── */}
      <section className="py-16 text-center glass-panel relative z-10 border border-dark-border max-w-6xl mx-auto mb-20">
        <h3 className="text-2xl sm:text-3xl font-light text-text-primary mb-4">View our repositories</h3>
        <p className="text-sm text-text-secondary mb-8 max-w-lg mx-auto font-light leading-relaxed">
          Explore our open source tooling, cohort capstones, and community projects on GitHub.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="https://github.com/blockfuselabs"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            <span>Visit GitHub</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </section>

    </div>
  )
}
