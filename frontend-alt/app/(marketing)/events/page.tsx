'use client'

import React from 'react'
import { ArrowRight } from 'lucide-react'

import EventsHero from '@/app/(marketing)/events/_components/EventsHero'
import UpcomingEventSpotlight, { type UpcomingEvent } from '@/app/(marketing)/events/_components/UpcomingEventSpotlight'
import EventsTestimonials from '@/app/(marketing)/events/_components/EventsTestimonials'
import PastEventsShowcase, { type PastEvent } from '@/app/(marketing)/events/_components/PastEventsShowcase'

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------

const FEATURED_UPCOMING_EVENT: UpcomingEvent | null = {
  title: 'Web3 Engineering Workshop: Smart Contracts & Security',
  tagline: '// Three-day intensive · EVM & Solana',
  description:
    'Three-day intensive workshop covering smart contract architecture, security patterns, and audit-ready development practices. Delivered by working engineers who build in production.',
  date: 'Sep 15 – 17, 2026',
  time: '9:00 AM WAT',
  location: 'Jos Engineering Studio',
  capacity: '25 engineers',
  type: 'Workshop',
  organizer: 'Blockfuse Labs',
  logoUrl: undefined,
  logoMonogram: 'BF',
  link: '#',
}

/**
 * Past events collection — swap `image` paths for real photos when available.
 * Each entry rotates in sequence on the showcase.
 */
const PAST_EVENTS: PastEvent[] = [
  {
    title: 'AI Agents in DeFi: Technical Deep Dive',
    description:
      'A hands-on session exploring autonomous agent architectures, on-chain execution triggers, and real-world DeFi integrations.',
    date: 'Aug 10, 2026',
    type: 'Workshop',
    attendees: '30+',
    image: '/hero-imgs/placeholder-event-1.jpg',
    link: '#',
  },
  {
    title: 'Cohort 4 Graduation & Hiring Showcase',
    description:
      'Our fourth cohort presented production projects to hiring partners, protocols, and the broader Blockfuse community.',
    date: 'Jul 28, 2026',
    type: 'Hiring Event',
    attendees: '50+',
    image: '/hero-imgs/placeholder-event-2.jpg',
    link: '#',
  },
  {
    title: 'Open Source Contribution Sprint',
    description:
      'Engineers shipped meaningful pull requests to open-source Web3 tooling projects across a focused two-day sprint.',
    date: 'Jul 15, 2026',
    type: 'Community Event',
    attendees: '45+',
    image: '/hero-imgs/placeholder-event-3.jpg',
    link: '#',
  },
  {
    title: 'Infrastructure & DevOps for Web3 Systems',
    description:
      'Practical workshop on deploying RPC nodes, building indexers, and setting up monitoring stacks for high-throughput systems.',
    date: 'Jul 1, 2026',
    type: 'Workshop',
    attendees: '35+',
    image: '/hero-imgs/placeholder-event-4.jpg',
    link: '#',
  },
  {
    title: 'Frontend Development for dApps',
    description:
      'A deep dive into wallet integration, real-time state with subgraphs, and building performant dApp UIs with Next.js.',
    date: 'Jun 18, 2026',
    type: 'Workshop',
    attendees: '40+',
    image: '/hero-imgs/placeholder-event-5.jpg',
    link: '#',
  },
  {
    title: 'Smart Contract Auditing & Security',
    description:
      'Engineers worked through real-world vulnerabilities, audit techniques, and formal verification patterns on EVM contracts.',
    date: 'Jun 5, 2026',
    type: 'Workshop',
    attendees: '28+',
    image: '/hero-imgs/placeholder-event-6.jpg',
    link: '#',
  },
]

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default function EventsPage() {
  return (
    <div className="relative overflow-hidden">

      {/* ── 1. Hero ──────────────────────────────────────────────────────── */}
      <EventsHero />

      {/* ── 2. Featured upcoming event (conditional) ─────────────────────── */}
      {FEATURED_UPCOMING_EVENT && (
        <UpcomingEventSpotlight event={FEATURED_UPCOMING_EVENT} />
      )}

      {/* ── 3. Testimonials — centered, no stats ─────────────────────────── */}
      <div className="flex justify-center border-b border-dark-border ">
        <div className="w-full max-w-4xl">
          <EventsTestimonials />
        </div>
      </div>

      {/* ── 4. Recent events rotating showcase ───────────────────────────── */}
      <PastEventsShowcase events={PAST_EVENTS} />

      {/* ── 5. Host CTA ──────────────────────────────────────────────────── */}
      <section className="py-16 text-center glass-panel relative z-10 border border-dark-border">
        <h3 className="text-2xl sm:text-3xl font-light text-text-primary mb-4">
          Want to host an event?
        </h3>
        <p className="text-sm text-text-secondary mb-8 max-w-xl mx-auto leading-relaxed font-light">
          We partner with protocols, companies, and communities to host workshops, hackathons, and showcase events. Let&apos;s build something great together.
        </p>
        <a
          href="/contact"
          className="btn-secondary"
        >
          <span>Get in Touch</span>
          <ArrowRight className="w-4 h-4" />
        </a>
      </section>

    </div>
  )
}
