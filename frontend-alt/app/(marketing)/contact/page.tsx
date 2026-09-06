'use client'

import React, { useState } from 'react'
import {
  Mail,
  Phone,
  MapPin,
  Copy,
  Check,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react'

export default function ContactPage() {
  const [copiedField, setCopiedField] = useState<string | null>(null)

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text)
    setCopiedField(label)
    setTimeout(() => setCopiedField(null), 2000)
  }

  return (
    <div className="relative overflow-hidden">

      {/* ── Hero ────────────────────────────────────────────────────────── */}
      <section className="min-h-[calc(100vh-6rem)] flex flex-col items-center justify-center text-center py-16 mb-12 relative z-10 border-b border-dark-border px-6">
        <span className="text-[10px] font-mono tracking-widest text-text-muted uppercase block mb-4">
          // CONTACT US
        </span>
        <h1 className="hero-title mb-6">
          We'd love to hear from you
        </h1>
        <p className="text-sm sm:text-base text-text-secondary font-light max-w-2xl mx-auto leading-relaxed">
          Whether you have questions about our training cohorts, studio engineering services, or ecosystem partnerships.
        </p>
      </section>

      {/* ── Contact details ──────────────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto mb-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          <div className="lg:col-span-5 space-y-4">
            <span className="text-[10px] font-mono tracking-widest text-accent-purple uppercase block">
              // CONTACT DETAILS
            </span>
            <h2 className="text-3xl sm:text-5xl font-light tracking-tighter text-text-primary leading-[1.1]">
              Feel Free to Get in <br className="hidden sm:block" /> Touch with us
            </h2>
            <p className="text-sm text-text-secondary font-light leading-relaxed pt-2">
              We're glad to hear from you. Let's keep in touch for software engineering, protocol audits, or talent deployment.
            </p>
          </div>

          <div className="lg:col-span-7 space-y-6">

            {/* Location */}
            <div className="glass-panel p-6 border border-dark-border hover-glow-card flex items-start gap-5 group">
              <div className="w-12 h-12 border border-dark-border bg-black/40 flex items-center justify-center shrink-0 group-hover:border-accent-purple/50 transition-colors">
                <MapPin className="w-5 h-5 text-accent-purple" />
              </div>
              <div className="flex-1">
                <h3 className="text-base font-light text-text-primary group-hover:text-accent-purple transition-colors mb-1">
                  Blockfuse Labs Headquarters
                </h3>
                <p className="text-xs text-text-secondary font-light leading-relaxed">
                  Jos Innovation Hub, Plateau State, Nigeria
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="glass-panel p-6 border border-dark-border hover-glow-card flex items-center justify-between gap-5 group">
              <div className="flex items-center gap-5">
                <div className="w-12 h-12 border border-dark-border bg-black/40 flex items-center justify-center shrink-0 group-hover:border-accent-pink/50 transition-colors">
                  <Phone className="w-5 h-5 text-accent-pink" />
                </div>
                <div>
                  <h3 className="text-base font-mono font-light text-text-primary group-hover:text-accent-pink transition-colors">
                    (+234) 8167-863-568
                  </h3>
                  <p className="text-xs text-text-muted font-mono tracking-widest uppercase">Direct Line & WhatsApp</p>
                </div>
              </div>
              <button
                onClick={() => handleCopy('+2348167863568', 'phone')}
                className="p-2 border border-dark-border hover:border-accent-pink text-text-muted hover:text-accent-pink transition-colors text-xs font-mono"
                title="Copy phone"
              >
                {copiedField === 'phone' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Email */}
            <div className="glass-panel p-6 border border-dark-border hover-glow-card flex items-center justify-between gap-5 group">
              <div className="flex items-center gap-5">
                <div className="w-12 h-12 border border-dark-border bg-black/40 flex items-center justify-center shrink-0 group-hover:border-accent-purple/50 transition-colors">
                  <Mail className="w-5 h-5 text-accent-purple" />
                </div>
                <div>
                  <a
                    href="mailto:connect@blockfuselabs.com"
                    className="text-base font-mono font-light text-text-primary group-hover:text-accent-purple transition-colors underline underline-offset-4 decoration-dark-border hover:decoration-accent-purple"
                  >
                    connect@blockfuselabs.com
                  </a>
                  <p className="text-xs text-text-muted font-mono tracking-widest uppercase">General Inquiries & Partnerships</p>
                </div>
              </div>
              <button
                onClick={() => handleCopy('connect@blockfuselabs.com', 'email')}
                className="p-2 border border-dark-border hover:border-accent-purple text-text-muted hover:text-accent-purple transition-colors text-xs font-mono"
                title="Copy email"
              >
                {copiedField === 'email' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

          </div>

        </div>
      </section>

      {/* ── Workspace image ──────────────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto mb-24 relative z-10">
        <div className="w-full aspect-[21/9] border border-dark-border bg-black/40 overflow-hidden relative glass-panel group">
          <img
            src="/engineering-hero.png"
            alt="Blockfuse Labs Office"
            className="w-full h-full object-cover opacity-85 group-hover:scale-105 transition-transform duration-700"
          />
          
        </div>
      </section>

      {/* ── Protocol support banner ──────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto mb-24 relative z-10">
        <div className="glass-panel p-10 sm:p-16 border border-dark-border text-center relative overflow-hidden hover-glow-card">
          <div className="w-16 h-16 border border-dark-border bg-black/60 mx-auto flex items-center justify-center mb-6 group-hover:border-accent-purple/50 transition-colors">
            <ShieldCheck className="w-8 h-8 text-accent-purple" />
          </div>
          <h2 className="text-2xl sm:text-4xl font-light text-text-primary tracking-tighter max-w-2xl mx-auto mb-3 leading-tight">
            Learn why top protocol teams rely on our engineering services
          </h2>
          <p className="text-xs font-mono text-text-muted uppercase tracking-widest mb-4">
            Call anytime or reach out directly
          </p>
          <div className="text-2xl sm:text-3xl font-mono text-text-primary font-light mb-8">
            +234-8167-863-568
          </div>
          <a
            href="mailto:connect@blockfuselabs.com"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-accent-purple text-white text-xs font-mono tracking-widest uppercase hover:bg-accent-pink transition-colors font-semibold"
          >
            <span>Get in touch</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

    </div>
  )
}
