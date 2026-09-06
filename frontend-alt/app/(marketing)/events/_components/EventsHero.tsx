'use client'

import React from 'react'
import { ArrowRight } from 'lucide-react'
import ExpandableText from '../../_components/ExpandableText'

const PARTNER_LOGOS = [
  'Solana Foundation',
  'Helius',
  'Superteam NG',
  'Encode Club',
  'Colosseum',
  'LamportDAO',
]

export default function EventsHero() {
  return (
    <section className="min-h-[calc(100vh-6rem)] border-b border-dark-border mb-20 relative overflow-hidden">
      {/* Ambient blobs */}
      <div className="absolute -top-32 right-1/3 w-[300px] sm:w-[400px] lg:w-[600px] h-[150px] sm:h-[200px] lg:h-[300px] bg-accent-purple/10 blur-[160px] pointer-events-none" />
      <div className="absolute top-1/2 -left-24 w-[250px] sm:w-[300px] lg:w-[400px] h-[250px] sm:h-[350px] lg:h-[400px] bg-accent-pink/8 blur-[180px] pointer-events-none" />

      <div className="max-w-6xl mx-auto pt-16 pb-0 relative z-10">

        {/* Social proof row */}
        <div className="flex items-center gap-4 mb-8">
          <div className="flex items-center gap-2 text-sm font-light text-text-secondary">
            <span className="font-mono font-semibold text-accent-purple">1,000+</span>
            <span>engineers engaged</span>
          </div>
        </div>

        {/* Sub-copy */}
        <div className="max-w-xl mb-10">
          <ExpandableText
            text="We bring engineers together to build, learn, and showcase — through workshops, hackathons, and demo days that actually matter."
            maxCharsOnMobile={70}
            className="text-base sm:text-lg text-text-secondary font-light leading-relaxed"
          />
        </div>

        {/* Giant headline + CTA interleaved */}
        <div className="relative">
          {/* First line of display text */}
          <h1 className="hero-title uppercase">
            COMMUNITY
          </h1>

          {/* Second line: text + floating pill label */}
          <div className="relative flex items-end gap-6">
            <h1 className="hero-title uppercase">
              EVENTS
            </h1>
            {/* Floating pill — sits to the right, offset upward */}
            <div className="mb-6 px-4 py-2 border border-dark-border bg-white/[0.03] text-text-muted font-mono text-[11px] tracking-widest uppercase self-center hidden sm:block">
              Jos&nbsp;&amp;&nbsp;Online
            </div>
          </div>

          {/* Exclamation / accent line */}
          <h1 className="hero-title uppercase">
            <span className="text-text-secondary">WORKSHOPS</span>
            <span className="text-accent-purple">!</span>
          </h1>

          {/* CTA buttons */}
          <div className="flex flex-wrap items-center gap-3 mt-10 mb-14">
            <a
              href="#upcoming"
              className="btn-primary"
            >
              <span>See Upcoming Events</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
            <a
              href="/contact"
              className="btn-secondary"
            >
              <span>Host an Event</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Partner logos strip */}
        <div className="border-t border-dark-border py-5 overflow-hidden">
          <div className="flex items-center gap-2 mb-4">
            <p className="text-[10px] font-mono tracking-widest text-text-muted uppercase">Past &amp; ecosystem partners</p>
          </div>
          <div className="flex flex-wrap items-center gap-x-4 sm:gap-x-8 lg:gap-x-10 gap-y-3">
            {PARTNER_LOGOS.map((name) => (
              <span
                key={name}
                className="text-[12px] sm:text-[16px] lg:text-[24px] font-mono text-text-muted/50 tracking-widest uppercase hover:text-text-muted transition-colors"
              >
                {name}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
