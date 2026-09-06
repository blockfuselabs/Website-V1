'use client'

import React, { useState, useEffect, useCallback } from 'react'
import { ArrowRight } from 'lucide-react'

export interface PastEvent {
  title: string
  description: string
  date: string
  type: string
  attendees: string
  /** Path or URL to the event photo */
  image: string
  link: string
}

interface Props {
  events: PastEvent[]
  /** Auto-rotation interval in ms. Default 4000. */
  interval?: number
}

export default function PastEventsShowcase({ events, interval = 4000 }: Props) {
  const [active, setActive] = useState(0)
  const [fading, setFading] = useState(false)

  const goTo = useCallback(
    (idx: number) => {
      if (idx === active) return
      setFading(true)
      setTimeout(() => {
        setActive(idx)
        setFading(false)
      }, 280)
    },
    [active]
  )

  // Auto-rotate
  useEffect(() => {
    const id = setInterval(() => {
      goTo((active + 1) % events.length)
    }, interval)
    return () => clearInterval(id)
  }, [active, events.length, goTo, interval])

  const ev = events[active]

  return (
    <section className="mt-24 pb-12 border-b border-dark-border relative z-10">
      {/* Section heading */}
      <h2 className="text-3xl sm:text-4xl font-light mb-10 tracking-tighter text-text-primary">
        Recent <em className="italic font-light text-text-secondary">events</em>
      </h2>

      {/* Main showcase block */}
      <div className="flex flex-col lg:flex-row border border-dark-border overflow-hidden">

        {/* LEFT — image, ~60% */}
        <div className="relative w-full lg:w-[60%] aspect-[16/9] lg:aspect-auto lg:min-h-[420px] overflow-hidden bg-black shrink-0">
          {/* Render all images stacked; fade the active one in */}
          {events.map((e, i) => (
            <div
              key={e.title}
              className="absolute inset-0 transition-opacity duration-300"
              style={{ opacity: i === active && !fading ? 1 : 0 }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={e.image}
                alt={e.title}
                className="w-full h-full object-cover"
              />
              {/* dark overlay on edge */}
              <div className="absolute inset-y-0 right-0 w-24 bg-black/40" />
            </div>
          ))}

          {/* Dot nav overlaid bottom-left */}
          <div className="absolute bottom-5 left-6 flex items-center gap-2 z-10">
            {events.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Go to event ${i + 1}`}
                className={`h-[3px] transition-all duration-300 ${
                  i === active
                    ? 'w-8 bg-accent-purple'
                    : 'w-3 bg-white/30 hover:bg-white/60'
                }`}
              />
            ))}
          </div>
        </div>

        {/* RIGHT — details, ~40% */}
        <div
          className={`flex flex-col justify-center px-10 py-12 lg:px-14 bg-dark-bg border-t lg:border-t-0 lg:border-l border-dark-border w-full lg:w-[40%] transition-opacity duration-280 ${
            fading ? 'opacity-0' : 'opacity-100'
          }`}
        >
          {/* Type badge */}
          <span className="text-[10px] font-mono tracking-widest text-accent-pink uppercase mb-6">
            {ev.type}
          </span>

          {/* Bold title */}
          <h3 className="text-2xl sm:text-3xl font-semibold text-text-primary leading-tight tracking-tight mb-5">
            {ev.title}
          </h3>

          {/* Short description */}
          <p className="text-sm text-text-secondary font-light leading-relaxed mb-6 max-w-sm">
            {ev.description}
          </p>

          {/* Date */}
          <p className="text-xs font-mono text-text-muted tracking-widest uppercase mb-10">
            {ev.date} &nbsp;·&nbsp; {ev.attendees} attended
          </p>

          {/* Borderless text button */}
          <a
            href={ev.link}
            className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-text-primary hover:text-accent-purple transition-colors duration-200 group w-fit"
          >
            <span>View Event</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
          </a>
        </div>

      </div>

      {/* Event index tabs below — click to jump */}
      <div className="mt-6 flex flex-wrap gap-0 border border-dark-border divide-x divide-dark-border overflow-hidden">
        {events.map((e, i) => (
          <button
            key={e.title}
            onClick={() => goTo(i)}
            className={`flex-1 min-w-[120px] px-5 py-3 text-left text-[10px] font-mono tracking-wider uppercase transition-all duration-200 ${
              i === active
                ? 'bg-accent-purple/10 text-accent-purple border-t-2 border-t-accent-purple'
                : 'text-text-muted hover:text-text-secondary hover:bg-white/[0.02]'
            }`}
          >
            <span className="block text-[9px] text-text-muted mb-0.5">
              [{String(i + 1).padStart(2, '0')}]
            </span>
            <span className="block truncate">{e.title}</span>
          </button>
        ))}
      </div>
    </section>
  )
}
