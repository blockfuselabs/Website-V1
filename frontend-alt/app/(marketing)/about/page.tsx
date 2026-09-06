'use client'

import React from 'react'
import { aboutBeliefs, aboutPartners } from '@/app/content/about'
import { ABOUT_STATS, OPPORTUNITIES } from './data'
import {
  ArrowRight,
  Heart,
  Code,
  Zap,
  Layers,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
} from 'lucide-react'

export default function AboutPage() {
  const howWeWorkIcons = [Heart, Code, Zap, Layers, Sparkles, ShieldCheck, CheckCircle2]

  return (
    <div className="relative overflow-hidden">

      {/* ── Hero ────────────────────────────────────────────────────────── */}
      <section className="min-h-[calc(100vh-6rem)] flex flex-col justify-center items-center text-center py-16 mb-12 relative z-10 border-b border-dark-border px-6">
        <span className="text-[10px] font-mono tracking-widest text-text-muted uppercase block mb-4">
          // ABOUT US
        </span>
        <h1 className="hero-title mb-6">
          About the company
        </h1>
        <p className="text-sm sm:text-base text-text-secondary font-light max-w-2xl mx-auto leading-relaxed">
          We develop engineers, not certificates. Production-grade software engineering and technical talent built from Jos, Nigeria for the global Web3 ecosystem.
        </p>
      </section>

      {/* ── Feature split ───────────────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto mb-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          <div className="lg:col-span-6 border border-dark-border bg-black/40 overflow-hidden relative glass-panel aspect-[4/3] group">
            <img
              src="/engineering-hero.png"
              alt="Blockfuse Labs Office & Engineers"
              className="w-full h-full object-cover opacity-85 group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-black/50 pointer-events-none" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="text-[10px] font-mono tracking-widest text-accent-purple uppercase block mb-1">
                // OUR HEADQUARTERS
              </span>
              <p className="text-sm font-light text-text-primary">
                Jos, Nigeria — Engineering & Innovation Hub
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-8">
            <div>
              <span className="text-[10px] font-mono tracking-widest text-accent-purple uppercase block mb-3">
                // WHERE WE STARTED & WHERE WE'RE GOING
              </span>
              <h2 className="text-3xl sm:text-4xl font-light tracking-tighter text-text-primary leading-tight mb-4">
                We're only just getting started on our journey
              </h2>
              <p className="text-sm text-text-secondary font-light leading-relaxed">
                Since 2024, we've been building serious technology talent and software systems in Jos, Nigeria. No vanity metrics or superficial shortcuts — just production-grade engineers, real client contracts, and honest code reviews.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-2">
              {ABOUT_STATS.map((st) => (
                <div key={st.label} className="glass-panel p-6 border border-dark-border hover-glow-card">
                  <div className="text-3xl sm:text-4xl font-light font-mono text-text-primary mb-1">
                    {st.value}
                  </div>
                  <div className="text-xs font-light text-text-primary mb-0.5">{st.label}</div>
                  <div className="text-[10px] font-mono text-text-muted uppercase tracking-widest">{st.sub}</div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ── Partners ────────────────────────────────────────────────────── */}
      <section className="mb-24 pb-16 border-y border-dark-border relative z-10 pt-16 bg-white/[0.01]">
        <div className="max-w-6xl mx-auto">
          <p className="text-center text-[10px] font-mono text-text-muted tracking-widest uppercase mb-10">
            // We've partnered with leading Web3 protocols & companies
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {aboutPartners.map((pt) => (
              <div
                key={pt.name}
                className="glass-panel p-6 border border-dark-border hover-glow-card flex flex-col justify-between group"
              >
                <div>
                  <h3 className="text-sm font-light text-text-primary group-hover:text-accent-purple transition-colors mb-2">
                    {pt.name}
                  </h3>
                  <p className="text-xs text-text-secondary font-light leading-relaxed">
                    {pt.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Values ──────────────────────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto mb-24 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[10px] font-mono tracking-widest text-text-muted uppercase block mb-3">
            // OUR VALUES & PHILOSOPHY
          </span>
          <h2 className="text-3xl sm:text-5xl font-light tracking-tighter text-text-primary mb-4">
            How we work at Blockfuse Labs
          </h2>
          <p className="text-sm text-text-secondary font-light leading-relaxed">
            Our core principles driving serious technology talent, production software, and transparent partnerships.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {aboutBeliefs.map((belief, idx) => {
            const IconComponent = howWeWorkIcons[idx % howWeWorkIcons.length]
            return (
              <div
                key={belief.title}
                className="glass-panel p-8 border border-dark-border hover-glow-card flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-10 h-10 border border-dark-border bg-black/40 flex items-center justify-center group-hover:border-accent-purple/50 transition-colors">
                      <IconComponent className="w-5 h-5 text-accent-purple" />
                    </div>
                    <span className="text-[10px] font-mono text-text-muted tracking-widest">
                      [{String(idx + 1).padStart(2, '0')}]
                    </span>
                  </div>
                  <h3 className="text-lg font-light text-text-primary group-hover:text-accent-purple transition-colors mb-3">
                    {belief.title}
                  </h3>
                  <p className="text-xs text-text-secondary font-light leading-relaxed">
                    {belief.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* ── Opportunities ───────────────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto mb-24 relative z-10 border-t border-dark-border pt-20">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-[10px] font-mono tracking-widest text-text-muted uppercase block mb-3">
            // JOIN OUR ECOSYSTEM
          </span>
          <h2 className="text-3xl sm:text-5xl font-light tracking-tighter text-text-primary mb-4">
            We're looking for talented people
          </h2>
          <p className="text-sm text-text-secondary font-light leading-relaxed">
            Whether you want to train with us, hire deployed engineers, or join our core team in Jos.
          </p>
        </div>

        <div className="w-full aspect-[21/9] border border-dark-border bg-black/40 overflow-hidden relative glass-panel mb-12">
          <img
            src="/engineers.png"
            alt="Blockfuse Labs Talent & Team"
            className="w-full h-full object-cover opacity-85"
          />
          
        </div>

        <div className="space-y-4 max-w-4xl mx-auto">
          {OPPORTUNITIES.map((opp) => (
            <div
              key={opp.title}
              className="glass-panel p-6 border border-dark-border hover:border-accent-purple/50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 transition-colors group"
            >
              <div>
                <h3 className="text-base font-light text-text-primary group-hover:text-accent-purple transition-colors mb-1">
                  {opp.title}
                </h3>
                <p className="text-xs text-text-secondary font-light">
                  {opp.subtitle}
                </p>
              </div>
              <div className="flex items-center gap-4 shrink-0 text-xs font-mono">
                <span className="px-3 py-1 bg-white/[0.02] border border-dark-border text-text-muted">
                  {opp.type}
                </span>
                <span className="text-text-muted">{opp.location}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto mb-24 relative z-10">
        <div className="glass-panel p-10 sm:p-16 border border-dark-border text-center relative overflow-hidden hover-glow-card">
          <h2 className="text-3xl sm:text-4xl font-light text-text-primary tracking-tighter mb-4">
            Start your journey with Blockfuse Labs
          </h2>
          <p className="text-sm text-text-secondary font-light max-w-xl mx-auto mb-8 leading-relaxed">
            Get in touch with our team to hire engineers, partner on cohorts, or sponsor technical research.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="/contact"
              className="btn-primary"
            >
              <span>Get In Touch</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="/academy"
              className="inline-flex items-center gap-2 px-8 py-3.5 border border-dark-border text-text-primary text-xs font-mono tracking-widest uppercase hover:border-accent-purple hover:text-accent-purple transition-colors"
            >
              <span>Explore Programs</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  )
}
