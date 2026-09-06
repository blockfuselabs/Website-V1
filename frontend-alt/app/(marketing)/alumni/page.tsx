'use client'

import React from 'react'
import { ArrowRight } from 'lucide-react'
import AlumniCohortsData from './_components/AlumniCohortsData'

export default function AlumniPage() {
  return (
    <div className="relative overflow-hidden">

      {/* ── Hero ────────────────────────────────────────────────────────── */}
      <div className="space-y-6 mb-16 relative z-10 pt-4 max-w-6xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-accent-purple/10 border border-accent-purple/30 text-[11px] font-mono tracking-widest text-accent-purple uppercase w-fit">
          <span className="h-2 w-2 bg-accent-purple inline-block animate-pulse" />
          // ALUMNI NETWORK
        </div>
        <div className="max-w-3xl space-y-4">
          <h1 className="hero-title">
            Alumni
          </h1>
          <p className="text-lg text-text-secondary font-light leading-relaxed max-w-2xl">
            Engineers who trained with Blockfuse Labs and are now deployed across top Web3 protocols and companies.
          </p>
        </div>
      </div>

      {/* ── Graduate cohorts ─────────────────────────────────────────────── */}
      <section className="mb-24 relative z-10 max-w-6xl mx-auto border-t border-dark-border pt-12">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl font-light tracking-tighter text-text-primary">
            Graduate <em className="italic font-light text-text-secondary">cohorts</em>
          </h2>
          <span className="text-xs font-mono text-text-muted uppercase tracking-widest">
            // Talent Pipeline
          </span>
        </div>

        <AlumniCohortsData>
          {({ cohorts, loading, error }) => {
            if (loading) return <p className="text-xs font-mono text-text-muted">Loading cohorts...</p>
            if (error) return <p className="text-xs font-mono text-accent-pink">{error}</p>
            return (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {cohorts.map((cohort) => (
                  <div
                    key={cohort.cohort}
                    className="glass-panel p-7 hover-glow-card relative group border border-dark-border"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <p className="text-[10px] font-mono text-text-muted tracking-widest uppercase mb-1">GRADUATION</p>
                        <h3 className="text-xl font-light text-text-primary">{cohort.cohort}</h3>
                      </div>
                      <span className="text-[10px] font-mono text-accent-pink px-2.5 py-0.5 border border-accent-pink/20 bg-accent-pink/10">
                        {cohort.year}
                      </span>
                    </div>
                    <div className="space-y-3 pt-4 border-t border-dark-border/50">
                      <div>
                        <p className="text-[10px] font-mono tracking-widest text-accent-purple uppercase mb-1">DEPLOYED</p>
                        <p className="text-sm font-light text-text-primary">{cohort.deployed}</p>
                      </div>
                      <div>
                        <p className="text-[10px] font-mono tracking-widest text-accent-purple uppercase mb-1">COMPANIES</p>
                        <p className="text-xs font-light text-text-secondary leading-relaxed">{cohort.companies}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )
          }}
        </AlumniCohortsData>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────────────── */}
      <section className="py-16 text-center glass-panel relative z-10 border border-dark-border max-w-6xl mx-auto mb-20">
        <h3 className="text-2xl sm:text-3xl font-light text-text-primary mb-4">Join our talent network</h3>
        <p className="text-sm text-text-secondary mb-8 max-w-lg mx-auto font-light leading-relaxed">
          Looking to hire vetted Web3 engineers or join our next training cohort?
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="/hire-engineers"
            className="btn-primary"
          >
            <span>Browse Talent</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

    </div>
  )
}
