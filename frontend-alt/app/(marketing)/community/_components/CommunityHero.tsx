'use client'

import React from 'react'
import { ArrowRight, MoveDown } from 'lucide-react'
import ExpandableText from '../../_components/ExpandableText'

export default function CommunityHero() {
  return (
    <section className="min-h-[calc(100vh-6rem)] flex flex-col justify-center border-b border-dark-border mb-20 relative overflow-hidden">
      <div className="max-w-6xl mx-auto pt-14 pb-0 relative z-10">

        {/* ── Headline ─────────────────────────── */}
        <div className="mb-10 space-y-2">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-accent-purple/10 border border-accent-purple/30 text-[11px] font-mono tracking-widest text-accent-purple uppercase mb-4">
            <span className="h-2 w-2 bg-accent-purple rounded-full animate-pulse" />
            // BFL COMMUNITY HUB
          </div>
          <h1 className="hero-title">
            The Blockfuse Engineering <br />
            <span className="text-text-muted">Community Hub</span>
          </h1>
        </div>

        {/* ── Arrow + sub-copy ────────────────────────────────────────── */}
        <div className="flex items-start gap-3 mb-12 max-w-lg">
          <ArrowRight className="w-4 h-4 text-text-muted mt-[3px] shrink-0" />
          <ExpandableText
            text="Explore engineering events, connect with builders, and join a dynamic community for knowledge exchange and fresh insights from working engineers."
            maxCharsOnMobile={70}
            className="text-sm text-text-secondary font-light leading-relaxed"
          />
        </div>

        {/* ── Social proof row + scroll hint ─────────────────────────── */}
        <div className="flex flex-wrap items-center justify-between gap-6 pb-12">

          {/* Left: avatars + count + star rating */}
          <div className="flex flex-wrap items-center gap-7">

            {/* Stacked avatars + stat */}
            <div className="flex items-center gap-3">
              <div className="flex items-center -space-x-3">
                {['E', 'A', 'C'].map((initial, i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-dark-bg bg-accent-purple/30 border-accent-purple/50 flex items-center justify-center text-[11px] font-semibold text-white font-mono"
                  >
                    {initial}
                  </div>
                ))}
              </div>
              <div className="leading-tight">
                <p className="text-sm font-bold text-text-primary">1,000+</p>
                <p className="text-[10px] text-text-muted font-light">Engineers in community</p>
              </div>
            </div>

            {/* Divider */}
            <div className="h-8 w-px bg-dark-border hidden sm:block" />

            {/* Stars */}
            <div className="flex items-center gap-2">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 fill-accent-purple" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118L10 15.347l-3.951 2.678c-.784.57-1.838-.197-1.539-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.063 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69L9.049 2.927z" />
                  </svg>
                ))}
              </div>
              <span className="text-sm text-text-secondary">
                <span className="font-semibold text-text-primary">5.0</span>
                <span className="text-text-muted text-xs ml-1">(500k reviews)</span>
              </span>
            </div>
          </div>

          

        </div>

      </div>
    </section>
  )
}
