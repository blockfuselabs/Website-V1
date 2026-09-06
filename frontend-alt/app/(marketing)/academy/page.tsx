'use client'

import { useState } from 'react'
import AcademyHero from '@/app/(marketing)/academy/_components/AcademyHero'
import ExpandableText from '@/app/(marketing)/_components/ExpandableText'
import { academyPillars, detailedPrograms, assessmentMatrix, graduateTestimonials, type GraduateTestimonial } from '@/app/content/training'

interface Stat { value: string; label: string; metric: string }

function TestimonialsCarousel({ testimonials, stats }: { testimonials: GraduateTestimonial[]; stats: Stat[] }) {
  const [idx, setIdx] = useState(0)
  const t = testimonials[idx]
  const prev = () => setIdx((i) => (i - 1 + testimonials.length) % testimonials.length)
  const next = () => setIdx((i) => (i + 1) % testimonials.length)

  return (
    <div className="max-w-4xl mx-auto">

      {/* Carousel row */}
      <div className="relative flex items-center gap-2 sm:gap-4 pb-6">
        {/* Prev arrow */}
        <button
          onClick={prev}
          aria-label="Previous testimonial"
          className="shrink-0 h-8 w-8 sm:h-9 sm:w-9 flex items-center justify-center border border-dark-border text-text-muted hover:border-accent-purple hover:text-accent-purple transition-colors duration-200 text-sm sm:text-base"
        >
          ‹
        </button>

        {/* Card */}
        <div className="flex-1 border border-dark-border bg-white/[0.02] p-5 sm:p-8 md:p-10">
          {/* Quote */}
          <p className="text-lg sm:text-xl font-light text-text-primary leading-relaxed mb-8">
            "{t.quote}"
          </p>

          {/* Attribution */}
          <div className="flex items-center gap-3">
            {/* Avatar placeholder */}
            <div className="h-9 w-9 shrink-0 border border-dark-border bg-accent-purple/10 flex items-center justify-center text-[11px] font-mono text-accent-purple uppercase">
              {t.author.charAt(0)}
            </div>
            <div>
              <p className="text-sm font-normal text-text-primary">{t.author}</p>
              <p className="text-[10px] font-mono tracking-widest uppercase text-text-muted">
                {t.role} · {t.cohort}
              </p>
            </div>
          </div>

          {/* Dot indicators */}
          <div className="flex items-center gap-2 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setIdx(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                className={`h-1 transition-all duration-300 ${i === idx ? 'w-6 bg-accent-purple' : 'w-2 bg-dark-border hover:bg-text-muted'}`}
              />
            ))}
          </div>
        </div>

        {/* Next arrow */}
        <button
          onClick={next}
          aria-label="Next testimonial"
          className="shrink-0 h-9 w-9 flex items-center justify-center border border-dark-border text-text-muted hover:border-accent-purple hover:text-accent-purple transition-colors duration-200"
        >
          ›
        </button>
      </div>

      {/* Stats bar — directly below, same width as card */}
      <div className="sm:ml-10 sm:mr-10 p-4 sm:p-5 border-dark-border grid grid-cols-2 sm:grid-cols-4 divide-x divide-dark-border">
        {stats.map((stat) => (
          <div key={stat.metric} className="px-3 sm:px-6 py-4 sm:py-5 text-center">
            <p className="text-lg sm:text-xl md:text-2xl font-light text-text-primary mb-1">{stat.value}</p>
            <p className="text-[8px] sm:text-[9px] font-mono tracking-widest uppercase text-text-muted leading-relaxed">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function TrainingPage() {
  const stats = [
    { value: '115+', label: 'Engineers trained & deployed', metric: 'GRADUATES' },
    { value: '500+', label: 'Smart contracts written', metric: 'CAPSTONES' },
    { value: '12+', label: 'Production dApps shipped', metric: 'PROJECTS' },
    { value: '4', label: 'Specialized program tracks', metric: 'PATHWAYS' },
  ]

  const successCriteria = [
    { criterion: 'Code Quality', description: 'Production-ready standards with 100% test coverage' },
    { criterion: 'Technical Depth', description: 'Deep understanding of systems, not just frameworks' },
    { criterion: 'Problem Solving', description: 'Ability to break down unfamiliar challenges independently' },
    { criterion: 'Collaboration', description: 'Effective communication and teamwork skills' },
    { criterion: 'AI Integration', description: 'Productive use of AI without over-dependence' },
    { criterion: 'Deployment Ready', description: 'Can take projects from concept to production' },
  ]

  return (
    <>
      <AcademyHero />

      {/* Why Blockfuse Academy - Unique Section */}
      <section className="py-24 border-b border-dark-border relative mb-24">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Header */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-6 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent-purple/10 border border-accent-purple/30 text-[11px] font-mono tracking-widest text-accent-purple uppercase">
                <span className="h-1.5 w-1.5 bg-accent-purple inline-block animate-pulse" />
                // OUR PHILOSOPHY
              </div>

              <h2 className="text-4xl lg:text-5xl font-light tracking-tighter text-text-primary leading-tight">
                We don't train for
                <br />
                <em className="font-light text-text-secondary">certificates.</em>
              </h2>
            </div>

            <div className="lg:col-span-6">
              <ExpandableText
                text="We train engineers who can think independently, solve unfamiliar problems, ship production code, and thrive in real technical environments."
                maxCharsOnMobile={70}
                className="text-sm text-text-secondary font-light leading-relaxed"
              />
            </div>
          </div>

          {/* Why Features Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Sticky Key Points */}
            <div className="lg:col-span-4 hidden lg:block space-y-6 sticky top-24 h-fit p-6 border border-dark-border bg-white/[0.01] backdrop-blur-md">
              <div className="text-xs font-mono text-text-muted uppercase tracking-wider border-b border-dark-border pb-3 flex justify-between">
                <span>Training Goal</span>
                <span className="text-accent-pink">Production-Ready</span>
              </div>
              <ul className="space-y-3 text-xs text-text-secondary font-light">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-accent-pink inline-block" />
                  Learn from working engineers
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-accent-purple inline-block" />
                  Build real-world projects
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-accent-pink inline-block" />
                  Receive honest feedback
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-accent-purple inline-block" />
                  Graduate with a portfolio
                </li>
              </ul>
            </div>

            {/* Core Pillars */}
            <div className="lg:col-span-8 divide-y divide-dark-border border-y border-dark-border">
              {academyPillars.slice(0, 5).map((pillar, i) => (
                <div
                  key={pillar.title}
                  className="py-8 group relative transition-all duration-300 hover:px-4 hover:bg-white/[0.02]"
                >
                  <div className="absolute top-0 left-0 w-0 h-px bg-accent-purple group-hover:w-full transition-all duration-500" />

                  <div className="flex items-start gap-6">
                    <span className="text-xs font-mono text-accent-pink/80 pt-1 group-hover:text-accent-pink transition-colors">
                      [{String(i + 1).padStart(2, '0')}]
                    </span>

                    <div className="space-y-2 flex-1">
                      <h3 className="text-lg font-light text-text-primary group-hover:text-accent-purple transition-all">
                        {pillar.title}
                      </h3>

                      <p className="text-sm text-text-secondary font-light leading-relaxed">
                        {pillar.copy}
                      </p>

                      {pillar.subCopy && (
                        <p className="text-xs text-text-muted font-light leading-relaxed italic">
                          "{pillar.subCopy}"
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="mb-24 pb-24 border-b border-dark-border">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Header */}
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent-purple/10 border border-accent-purple/30 text-[11px] font-mono tracking-widest text-accent-purple uppercase">
              <span className="h-1.5 w-1.5 bg-accent-purple inline-block animate-pulse" />
              // PROGRAM PATHWAYS
            </div>

            <h2 className="text-4xl lg:text-5xl font-light tracking-tighter text-text-primary leading-tight">
              Choose your <em className="italic font-light text-text-secondary">learning path</em>
            </h2>
          </div>

          {/* Programs Grid - Staggered Layout */}
          <div className="space-y-12">
            {detailedPrograms.map((program, i) => (
              <div key={program.id} className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-start ${i % 2 === 1 ? 'lg:direction-reverse' : ''}`}>
                {/* Left - Text Content (reverses on odd indices visually) */}
                <div className={`lg:col-span-6 space-y-6 ${i % 2 === 1 ? 'lg:order-last' : ''}`}>
                  <div className="space-y-3">
                    <div className="inline-flex items-center gap-2 mb-4">
                      <span className="text-2xl font-light text-accent-purple">
                        0{i + 1}
                      </span>
                      <span className="text-[10px] font-mono tracking-widest text-accent-pink bg-accent-pink/10 border border-accent-pink/20 px-2.5 py-0.5">
                        {program.id.toUpperCase()}
                      </span>
                    </div>

                    <h3 className="text-2xl font-light text-text-primary leading-tight">
                      {program.title}
                    </h3>

                    <p className="text-xs text-text-muted font-light tracking-widest uppercase">
                      {program.target}
                    </p>
                  </div>

                  <ExpandableText
                    text={program.description}
                    maxCharsOnMobile={80}
                    className="text-sm text-text-secondary font-light leading-relaxed"
                  />

                  <div className="space-y-3 pt-4 border-t border-dark-border">
                    <p className="text-xs text-text-muted font-light tracking-widest uppercase">Topics</p>
                    <div className="flex flex-wrap gap-2">
                      {program.topics.slice(0, 5).map((topic) => (
                        <span
                          key={topic}
                          className="text-[10px] font-mono text-text-secondary border border-dark-border px-3 py-1.5 bg-white/[0.01] hover:border-accent-purple hover:text-accent-purple transition-all"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>

                  <a href="#apply" className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-text-primary hover:text-accent-purple transition-colors uppercase pt-4">
                    {program.ctaText} <span>→</span>
                  </a>
                </div>

                {/* Right - Outcome Card */}
                <div className={`lg:col-span-6 ${i % 2 === 1 ? 'lg:order-first' : ''}`}>
                  <div className="p-8 border border-dark-border hover:border-accent-purple hover:bg-accent-purple/5 transition-all duration-300 h-full bg-white/[0.01] relative group">
                    <div className="absolute top-0 left-0 w-0 h-px bg-accent-purple group-hover:w-full transition-all duration-500" />

                    <div className="space-y-4">
                      <p className="text-xs text-text-muted font-light tracking-widest uppercase">Outcome</p>
                      <ExpandableText
                        text={program.outcome}
                        maxCharsOnMobile={80}
                        className="text-base text-text-primary font-light leading-relaxed"
                      />

                      {program.note && (
                        <div className="pt-4 border-t border-dark-border/50">
                          <p className="text-xs text-text-muted font-light leading-relaxed italic">
                            {program.note}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Criteria Section */}
      <section className="mb-24 pb-24 border-b border-dark-border overflow-hidden">
        {/* Full-bleed header bar */}
        <div className="border-b border-dark-border px-0 py-12">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent-pink/10 border border-accent-pink/30 text-[11px] font-mono tracking-widest text-accent-pink uppercase">
                <span className="h-1.5 w-1.5 bg-accent-pink inline-block animate-pulse" />
                // GRADUATION STANDARDS
              </div>
              <h2 className="text-4xl lg:text-5xl font-light tracking-tighter text-text-primary leading-tight">
                What we measure,
                <br />
                <em className="italic font-light text-text-secondary">not grades.</em>
              </h2>
            </div>
            <p className="text-sm text-text-secondary font-light leading-relaxed max-w-sm">
              Graduation requires demonstrated competency across multiple dimensions. We assess what employers actually care about.
            </p>
          </div>
        </div>

        {/* Criteria — horizontal rows, no grid cards */}
        <div className="max-w-6xl mx-auto divide-y divide-dark-border">
          {successCriteria.map((item, i) => (
            <div
              key={item.criterion}
              className="group grid grid-cols-12 gap-6 items-center py-7 hover:bg-white/[0.02] transition-colors duration-200 px-0"
            >
              {/* Index */}
              <div className="col-span-1">
                <span className="text-[11px] font-mono text-accent-pink/50 group-hover:text-accent-pink transition-colors">
                  0{i + 1}
                </span>
              </div>

              {/* Criterion name */}
              <div className="col-span-4">
                <h4 className="text-base font-normal text-text-primary group-hover:text-accent-pink transition-colors duration-200">
                  {item.criterion}
                </h4>
              </div>

              {/* Divider line that grows on hover */}
              <div className="col-span-3 hidden md:block">
                <div className="h-px bg-dark-border group-hover:bg-accent-pink/40 transition-colors duration-300" />
              </div>

              {/* Description */}
              <div className="col-span-7 md:col-span-4">
                <p className="text-sm text-text-muted font-light leading-relaxed group-hover:text-text-secondary transition-colors duration-200">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials + Stats carousel */}
      <section className="mb-24 pb-24 border-b border-dark-border">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Header — same structure as all other sections */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-6 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent-purple/10 border border-accent-purple/30 text-[11px] font-mono tracking-widest text-accent-purple uppercase">
                <span className="h-1.5 w-1.5 bg-accent-purple inline-block animate-pulse" />
                // ALUMNI VOICES
              </div>
              <h2 className="text-4xl lg:text-5xl font-light tracking-tighter text-text-primary leading-tight">
                What <em className="italic font-light text-text-secondary">graduates</em> say
              </h2>
            </div>
            <div className="lg:col-span-6">
              <p className="text-sm text-text-secondary font-light leading-relaxed">
                Real engineers, real feedback. Here's what our alumni say about training at Blockfuse.
              </p>
            </div>
          </div>

          <TestimonialsCarousel testimonials={graduateTestimonials} stats={stats} />
        </div>
      </section>

      {/* Application CTA Section */}
      <section id="apply" className="py-24 border-dark-border relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[400px] lg:w-[600px] h-[150px] sm:h-[200px] lg:h-[300px] bg-accent-purple/5 blur-[120px] pointer-events-none" />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="border border-dark-border bg-white/[0.015]">

            {/* Top strip */}
            <div className="border-b border-dark-border px-10 py-5 flex items-center justify-between">
              <div className="inline-flex items-center gap-2 text-[11px] font-mono tracking-widest text-accent-pink uppercase">
                <span className="h-1.5 w-1.5 bg-accent-pink inline-block animate-pulse" />
                // GET STARTED
              </div>
              <span className="text-[10px] font-mono text-text-muted tracking-widest uppercase">Cohorts open yearly</span>
            </div>

            {/* Main content */}
            <div className="grid grid-cols-1 lg:grid-cols-12">

              {/* Left — headline */}
              <div className="lg:col-span-7 px-10 py-12 border-b lg:border-b-0 lg:border-r border-dark-border space-y-6">
                <h2 className="text-4xl lg:text-5xl font-light tracking-tighter text-text-primary leading-tight">
                  Ready to commit to<br />
                  <em className="italic font-light text-text-secondary">becoming a real engineer?</em>
                </h2>
                <p className="text-sm text-text-secondary font-light leading-relaxed max-w-md">
                  Selection is competitive. We keep cohorts small and maintain high standards — so every engineer we graduate is one we'd stake our reputation on.
                </p>

                {/* What to expect row */}
                <div className="grid grid-cols-3 gap-0 border border-dark-border mt-6">
                  {[
                    { label: 'Cohort size', value: 'Small' },
                    { label: 'Duration', value: '4–6 months' },
                    { label: 'Format', value: 'In-person / Remote' },
                  ].map((item, i) => (
                    <div key={item.label} className={`px-5 py-4 ${i !== 0 ? 'border-l border-dark-border' : ''}`}>
                      <p className="text-[9px] font-mono tracking-widest uppercase text-text-muted mb-1">{item.label}</p>
                      <p className="text-sm font-light text-text-primary">{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right — actions */}
              <div className="lg:col-span-5 px-10 py-12 flex flex-col justify-between gap-8">
                <div className="space-y-3">
                  <a
                    href="/contact"
                    className="w-full flex items-center justify-between px-6 py-4 bg-text-primary text-dark-bg text-[11px] font-mono tracking-widest uppercase hover:bg-accent-pink hover:text-white transition-all duration-300 group"
                  >
                    <span>Apply to Academy</span>
                    <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
                  </a>
                  <a
                    href="/contact"
                    className="w-full flex items-center justify-between px-6 py-4 border border-dark-border text-text-primary text-[11px] font-mono tracking-widest uppercase hover:border-accent-pink hover:text-accent-pink bg-white/[0.02] transition-all duration-300 group"
                  >
                    <span>Ask a question</span>
                    <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
                  </a>
                </div>

                {/* Email nudge */}
                <div className="border-t border-dark-border pt-6 space-y-1">
                  <p className="text-[10px] font-mono tracking-widest uppercase text-text-muted">Stay in the loop</p>
                  <p className="text-xs text-text-secondary font-light leading-relaxed">
                    Next cohort opening soon. Reach us at{' '}
                    <a href="mailto:connect@blockfuselabs.com" className="text-accent-pink hover:underline">
                      connect@blockfuselabs.com
                    </a>
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  )
}
