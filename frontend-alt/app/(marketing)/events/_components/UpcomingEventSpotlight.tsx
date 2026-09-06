'use client'

import React from 'react'
import { Calendar, MapPin, Users, ArrowRight, Clock, Ticket } from 'lucide-react'

export interface UpcomingEvent {
  title: string
  tagline: string
  description: string
  date: string
  time?: string
  location: string
  capacity: string
  type: string
  organizer?: string
  /** URL or path to the event/organizer logo */
  logoUrl?: string
  /** Fallback monogram when no logo is available */
  logoMonogram?: string
  link: string
}

interface Props {
  event: UpcomingEvent
}

export default function UpcomingEventSpotlight({ event }: Props) {
  return (
    <section id="upcoming" className="mb-20 border-b border-dark-border pb-20 relative z-10">
      {/* Section label */}
      <div className="flex items-center gap-3 mb-10">
        <span className="inline-flex items-center gap-2 text-[10px] font-mono tracking-widest text-accent-purple bg-accent-purple/10 border border-accent-purple/25 px-3.5 py-1.5 uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-accent-purple animate-pulse inline-block" />
          Upcoming Event
        </span>
        <span className="h-px flex-1 bg-dark-border max-w-[80px]" />
      </div>

      {/* Split panel */}
      <div className="grid grid-cols-1 lg:grid-cols-2 border border-dark-border overflow-hidden shadow-2xl">

        {/* LEFT — Logo panel */}
        <div className="relative flex flex-col justify-center p-10 sm:p-14 bg-white/[0.015]">

          {/* Type badge */}
          <div className="flex items-center gap-3 mb-6">
            <span className="text-[10px] font-mono tracking-widest text-accent-pink bg-accent-pink/10 border border-accent-pink/25 px-3 py-1 uppercase">
              {event.type}
            </span>
          </div>

          {/* Title */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-text-primary leading-tight tracking-tight mb-4">
            {event.title}
          </h2>

          {/* Tagline */}
          <p className="text-sm font-mono text-accent-purple mb-6">{event.tagline}</p>

          {/* Description */}
          <p className="text-sm text-text-secondary font-light leading-relaxed mb-8 max-w-md">
            {event.description}
          </p>

          {/* Meta grid */}
          <div className="grid grid-cols-2 gap-4 mb-10 border-t border-dark-border pt-8">
            <div className="space-y-1">
              <p className="text-[9px] font-mono tracking-widest text-text-muted uppercase">Date</p>
              <div className="flex items-center gap-2 text-sm text-text-primary font-light">
                <Calendar className="w-3.5 h-3.5 text-accent-purple shrink-0" />
                <span className="font-mono text-xs">{event.date}</span>
              </div>
            </div>

            {event.time && (
              <div className="space-y-1">
                <p className="text-[9px] font-mono tracking-widest text-text-muted uppercase">Time</p>
                <div className="flex items-center gap-2 text-sm text-text-primary font-light">
                  <Clock className="w-3.5 h-3.5 text-accent-pink shrink-0" />
                  <span className="font-mono text-xs">{event.time}</span>
                </div>
              </div>
            )}

            <div className="space-y-1">
              <p className="text-[9px] font-mono tracking-widest text-text-muted uppercase">Location</p>
              <div className="flex items-center gap-2 text-sm text-text-primary font-light">
                <MapPin className="w-3.5 h-3.5 text-accent-pink shrink-0" />
                <span className="text-xs">{event.location}</span>
              </div>
            </div>

            <div className="space-y-1">
              <p className="text-[9px] font-mono tracking-widest text-text-muted uppercase">Capacity</p>
              <div className="flex items-center gap-2 text-sm text-text-primary font-light">
                <Users className="w-3.5 h-3.5 text-accent-purple shrink-0" />
                <span className="text-xs">{event.capacity}</span>
              </div>
            </div>
          </div>

          {/* CTA */}
          <a
            href={event.link}
            className="btn-primary w-fit"
          >
            <Ticket className="w-4 h-4" />
            <span>Register Now</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* RIGHT — Event details */}
        <div className="relative flex items-center justify-center min-h-[360px] lg:min-h-[480px] bg-black/60 border-b lg:border-b-0 lg:border-r border-dark-border overflow-hidden group">
          {/* Subtle grid background */}
          <div className="absolute inset-0 bg-cyber-grid opacity-30" />

          {/* Logo or monogram */}
          <div className="relative z-10 flex flex-col items-center gap-6">
            {event.logoUrl ? (
              <div className="w-48 h-48 flex items-center justify-center p-6 border border-dark-border bg-white/[0.04]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={event.logoUrl}
                  alt={event.organizer ?? event.title}
                  className="max-w-full max-h-full object-contain"
                  style={{ filter: 'brightness(0) invert(1)' }}
                />
              </div>
            ) : (
              <div className="w-48 h-48 flex items-center justify-center border border-accent-purple/40 bg-accent-purple/5 group-hover:border-accent-purple/70 transition-colors duration-300">
                <span className="text-5xl font-semibold font-mono text-accent-purple/80 tracking-tighter">
                  {event.logoMonogram ?? event.title.slice(0, 2).toUpperCase()}
                </span>
              </div>
            )}

            {/* Organizer name beneath logo */}
            {event.organizer && (
              <p className="text-[11px] font-mono tracking-widest text-text-muted uppercase">
                {event.organizer}
              </p>
            )}
          </div>

          {/* Corner accent lines */}
          <div className="absolute top-0 left-0 w-8 h-px bg-accent-purple/50" />
          <div className="absolute top-0 left-0 h-8 w-px bg-accent-purple/50" />
          <div className="absolute bottom-0 right-0 w-8 h-px bg-accent-pink/50" />
          <div className="absolute bottom-0 right-0 h-8 w-px bg-accent-pink/50" />
        </div>

      </div>
    </section>
  )
}
