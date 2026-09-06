'use client'

import React, { useState } from 'react'

interface Testimonial {
  quote: string
  author: string
  role: string
  cohort?: string
}

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "I had done three online courses before this and thought I could code. The first review here took my project apart in about four minutes. It was the most useful four minutes of my career.",
    author: "Chidi Nwosu",
    role: "Backend Engineer at Northgate Systems",
    cohort: "Cohort II, 2025",
  },
  {
    quote:
      "Nobody told me it would be easy, and it was not. What I did not expect was that they would tell me exactly where I was falling short while there was still time to do something about it.",
    author: "Halima Yakubu",
    role: "Smart Contract Engineer, contracting independently",
    cohort: "Cohort II, 2025",
  },
  {
    quote:
      "I came in wanting a job and left starting a company. The thing Blockfuse actually gave me was the confidence that I could build something and it would hold.",
    author: "Emeka Obi",
    role: "Co-founder at a logistics startup in Abuja",
    cohort: "Cohort I, 2025",
  },
]

export default function EventsTestimonials() {
  const [idx, setIdx] = useState(0)
  const t = TESTIMONIALS[idx]

  const prev = () => setIdx((i) => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)
  const next = () => setIdx((i) => (i + 1) % TESTIMONIALS.length)

  return (
    <section className="mb-24 pb-12 relative z-10">
      {/* Section heading */}
      <h2 className="text-3xl sm:text-4xl font-light mb-12 tracking-tighter text-text-primary text-center">
        What our <em className="italic font-light text-text-secondary">community says</em>
      </h2>

      <div className="max-w-4xl mx-auto">
        {/* Carousel row */}
        <div className="relative flex items-center gap-4">
          {/* Prev arrow */}
          <button
            onClick={prev}
            aria-label="Previous testimonial"
            className="shrink-0 h-9 w-9 flex items-center justify-center border border-dark-border text-text-muted hover:border-accent-purple hover:text-accent-purple transition-colors duration-200 text-lg"
          >
            ‹
          </button>

          {/* Card */}
          <div className="flex-1 border border-dark-border bg-white/[0.02] p-10">
            {/* Quote */}
            <p className="text-lg sm:text-xl font-light text-text-primary leading-relaxed mb-8">
              &ldquo;{t.quote}&rdquo;
            </p>

            {/* Attribution */}
            <div className="flex items-center gap-3">
              {/* Avatar monogram */}
              <div className="h-9 w-9 shrink-0 border border-dark-border bg-accent-purple/10 flex items-center justify-center text-[11px] font-mono text-accent-purple uppercase">
                {t.author.charAt(0)}
              </div>
              <div>
                <p className="text-sm font-normal text-text-primary">{t.author}</p>
                <p className="text-[10px] font-mono tracking-widest uppercase text-text-muted">
                  {t.role}{t.cohort ? ` · ${t.cohort}` : ''}
                </p>
              </div>
            </div>

            {/* Dot indicators */}
            <div className="flex items-center gap-2 mt-8">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIdx(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`h-1 transition-all duration-300 ${
                    i === idx ? 'w-6 bg-accent-purple' : 'w-2 bg-dark-border hover:bg-text-muted'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Next arrow */}
          <button
            onClick={next}
            aria-label="Next testimonial"
            className="shrink-0 h-9 w-9 flex items-center justify-center border border-dark-border text-text-muted hover:border-accent-purple hover:text-accent-purple transition-colors duration-200 text-lg"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  )
}
