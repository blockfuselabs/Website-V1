'use client'

import React from 'react'
import { ArrowRight, ChevronRight } from 'lucide-react'
import ExpandableText from '../../_components/ExpandableText'

// Web2 & Web3 Official Tech SVG Logos
const LOGOS = {
  google: (
    <svg viewBox="0 0 24 24" className="w-5 h-5">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
      <path fill="#FBBC05" d="M5.84 14.1c-.22-.66-.35-1.36-.35-2.1s.13-1.44.35-2.1V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.62z" />
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
    </svg>
  ),
  aws: (
    <svg viewBox="0 0 24 24" className="w-5 h-5">
      <path fill="#FF9900" d="M18.75 14.5c-1.37 1.02-3.37 1.56-5.1 1.56-2.42 0-4.6-.96-6.26-2.56l-1.3 1.14c1.97 1.9 4.58 3.02 7.56 3.02 2.22 0 4.67-.7 6.34-1.97l-1.24-1.19zm2.4-4.83c-.34-.43-1.07-.47-1.48-.1l-.05.05c-1.04 1.04-2.6 1.83-4.04 2.18l.38 1.48c1.84-.44 3.73-1.42 5.09-2.73.34-.33.37-.89.1-1.28zm-8.62-7.17C7.63 2.5 3.5 6.63 3.5 11.53c0 1.94.62 3.74 1.68 5.21l1.24-1.19c-.83-1.14-1.32-2.54-1.32-4.02 0-3.87 3.13-7 7-7 2.24 0 4.24 1.05 5.52 2.7l1.32-1.19C17.47 4.14 15.1 2.5 12.53 2.5z" />
    </svg>
  ),
  slack: (
    <svg viewBox="0 0 24 24" className="w-5 h-5">
      <path fill="#E01E5A" d="M6 15a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm0 2.5A2.5 2.5 0 0 1 3.5 15V8.5a2.5 2.5 0 0 1 5 0V15A2.5 2.5 0 0 1 6 17.5z" />
      <path fill="#36C5F0" d="M9 6a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0zm-2.5 0A2.5 2.5 0 0 1 9 3.5h6.5a2.5 2.5 0 0 1 0 5H9A2.5 2.5 0 0 1 6.5 6z" />
      <path fill="#2EB67D" d="M18 9a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zm0-2.5a2.5 2.5 0 0 1 2.5 2.5v6.5a2.5 2.5 0 0 1-5 0V9A2.5 2.5 0 0 1 18 6.5z" />
      <path fill="#ECB22E" d="M15 18a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0zm2.5 0a2.5 2.5 0 0 1-2.5 2.5H8.5a2.5 2.5 0 0 1 0-5H15a2.5 2.5 0 0 1 2.5 2.5z" />
    </svg>
  ),
  meta: (
    <svg viewBox="0 0 24 24" className="w-5 h-5">
      <path fill="#0668E1" d="M16.8 4C14.7 4 12.8 5.1 12 6.8 11.2 5.1 9.3 4 7.2 4 4.3 4 2 6.3 2 9.2c0 4.1 3.8 7.8 8.8 10.5.7.4 1.7.4 2.4 0 5-2.7 8.8-6.4 8.8-10.5C22 6.3 19.7 4 16.8 4zm-9.6 11c-3 0-5.2-2.3-5.2-5 0-1.6 1.3-2.9 2.9-2.9 1.4 0 2.7.9 3.2 2.2l1.6 3.9c-.8 1.1-1.6 1.8-2.5 1.8zm9.6 0c-.9 0-1.7-.7-2.5-1.8l1.6-3.9c.5-1.3 1.8-2.2 3.2-2.2 1.6 0 2.9 1.3 2.9 2.9 0 2.7-2.2 5-5.2 5z" />
    </svg>
  ),
  ethereum: (
    <svg viewBox="0 0 24 24" className="w-5 h-5">
      <path fill="#627EEA" d="M11.999 1L11.83 1.579V16.358L12 16.528L18.995 12.39L11.999 1Z" />
      <path fill="#8A9DED" d="M11.999 1L5 12.39L11.999 16.528V9.387V1Z" />
      <path fill="#627EEA" d="M11.999 17.842L11.895 17.969V22.68L12 22.986L19 13.705L11.999 17.842Z" />
      <path fill="#8A9DED" d="M11.999 22.986V17.842L5 13.705L11.999 22.986Z" />
      <path fill="#454A75" d="M11.999 16.528L18.995 12.39L12 9.387V16.528Z" />
      <path fill="#8A9DED" d="M5 12.39L11.999 16.528V9.387L5 12.39Z" />
    </svg>
  ),
  solana: (
    <svg viewBox="0 0 24 24" className="w-5 h-5">
      <path fill="url(#solGrad)" d="M4.5 17.25h14.25a.75.75 0 0 0 .53-1.28L16.2 12.9a.75.75 0 0 0-.53-.22H1.42a.75.75 0 0 0-.53 1.28l3.08 3.07a.75.75 0 0 0 .53.22zm15-10.5H5.25a.75.75 0 0 0-.53 1.28l3.08 3.07a.75.75 0 0 0 .53.22H22.6a.75.75 0 0 0 .53-1.28l-3.08-3.07a.75.75 0 0 0-.53-.22zm-15-6H19.5a.75.75 0 0 1 .53 1.28l-3.08 3.07a.75.75 0 0 1-.53.22H2.18a.75.75 0 0 1-.53-1.28l3.08-3.07a.75.75 0 0 1 .53-.22z" />
      <defs>
        <linearGradient id="solGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00FFA3" />
          <stop offset="100%" stopColor="#DC1FFF" />
        </linearGradient>
      </defs>
    </svg>
  ),
  rust: (
    <svg viewBox="0 0 24 24" className="w-5 h-5">
      <path fill="#DEA584" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
    </svg>
  ),
  solidity: (
    <svg viewBox="0 0 24 24" className="w-5 h-5">
      <path fill="#363636" d="M12 2L4 7v10l8 5 8-5V7l-8-5zm0 2.2L18 8v8l-6 3.8L6 16V8l6-3.8z" />
      <path fill="#707070" d="M12 6.5L7.5 9.3v5.4l4.5 2.8 4.5-2.8V9.3L12 6.5z" />
    </svg>
  ),
  python: (
    <svg viewBox="0 0 24 24" className="w-5 h-5">
      <path fill="#3776AB" d="M11.87 2c-4.22 0-3.95 1.83-3.95 1.83l.01 1.9h4.02v.57H6.18S2 5.8 2 10.05c0 4.26 3.64 4.11 3.64 4.11h1.16v-1.63s-.06-1.95 1.92-1.95h3.28s1.85.03 1.85-1.78V5.71s.34-3.71-3.98-3.71z" />
      <path fill="#FFD43B" d="M12.13 22c4.22 0 3.95-1.83 3.95-1.83l-.01-1.9h-4.02v-.57h5.77S22 18.2 22 13.95c0-4.26-3.64-4.11-3.64-4.11h-1.16v1.63s.06 1.95-1.92 1.95h-3.28s-1.85-.03-1.85 1.78v3.09s-.34 3.71 3.98 3.71z" />
    </svg>
  ),
  docker: (
    <svg viewBox="0 0 24 24" className="w-5 h-5">
      <path fill="#2496ED" d="M13.98 11.08h-2.12v-2.1h2.12v2.1zm-2.65 0H9.22v-2.1h2.11v2.1zm-2.65 0H6.57v-2.1h2.11v2.1zm7.95 0h-2.12v-2.1h2.12v2.1zm-7.95-2.65H6.57V6.33h2.11v2.1zm2.65 0H9.22V6.33h2.11v2.1zm2.65 0h-2.12V6.33h2.12v2.1zm2.65 0h-2.12V6.33h2.12v2.1zm2.65 0h-2.12V6.33h2.12v2.1zm2.13 5.3c-.39-.26-1.18-.4-1.84-.4-.53 0-1.19.1-1.7.35-.45.22-1.32.96-1.32 1.5 0 .2.08.38.25.5.42.3 1.15.42 1.94.42 1.62 0 2.92-.5 3.32-1.37.13-.28.09-.72-.65-1z" />
    </svg>
  ),
  kubernetes: (
    <svg viewBox="0 0 24 24" className="w-5 h-5">
      <path fill="#326CE5" d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.3l7.5 3.7v7.5L12 19.2 4.5 15.5V8L12 4.3z" />
      <circle cx="12" cy="12" r="3" fill="#326CE5" />
    </svg>
  ),
  nextjs: (
    <svg viewBox="0 0 24 24" className="w-5 h-5">
      <path fill="#000000" d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" />
      <path fill="#FFFFFF" d="M17.4735 18.6433L10.3703 9.47951V17.0658H8.86816V6.93408H10.4578L17.561 16.0979V6.93408H19.0631V18.6433H17.4735Z" />
    </svg>
  )
}

export default function EngineeringHero() {
  return (
    <section className="relative min-h-[calc(100vh-6rem)] flex flex-col items-center justify-center pt-16 pb-24 overflow-hidden border-b border-dark-border/80">

      {/* Background Concentric Radial Orbit Rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40">
        <div className="w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] rounded-full border border-white/10 animate-pulse-glow" />
        <div className="absolute w-[500px] h-[500px] sm:w-[700px] sm:h-[700px] rounded-full border border-dashed border-white/10" />
        <div className="absolute w-[700px] h-[700px] sm:w-[950px] sm:h-[950px] rounded-full border border-white/5" />
        <div className="absolute w-[900px] h-[900px] sm:w-[1200px] sm:h-[1200px] rounded-full border border-dashed border-white/5" />
      </div>

      {/* Ambient Radial Glow Center */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-purple/10 blur-[160px] rounded-full pointer-events-none" />

      {/* Main Centered Hero Content */}
      <div className="flex flex-col justify-between h-full relative z-10">
        <div className="relative z-10 text-center max-w-3xl mx-auto px-4 space-y-8 my-auto pt-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-accent-purple/10 border border-accent-purple/30 text-[11px] font-mono tracking-widest text-accent-purple uppercase">
            <span className="h-2 w-2 bg-accent-purple rounded-full animate-pulse" />
            // BFL ENGINEERING STUDIO
          </div>

          <h1 className="hero-title uppercase">
            Architecting <br />
            <span className="text-text-muted">High-Scale Protocols</span>
          </h1>

          <div className="max-w-xl mx-auto">
            <ExpandableText
              text="Full-stack Web3 & Web2 software development studio. We build production-ready smart contracts, decentralized apps, microservices, and AI integrations."
              maxCharsOnMobile={80}
              className="text-sm sm:text-base text-text-secondary font-light leading-relaxed"
            />
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <a
              href="#services"
              className="btn-primary"
            >
              <span>Explore Services</span>
              <ChevronRight className="w-4 h-4" />
            </a>
            <a
              href="/contact"
              className="btn-secondary"
            >
              <span>Start a Project</span>
              <ArrowRight className="w-4 h-4 text-accent-pink" />
            </a>
          </div>
        </div>

        {/* Bottom Tech Logos Bar */}
        <div className="mt-16 pt-8 border-t border-dark-border/60 text-center w-full max-w-5xl mx-auto px-4">
          <p className="text-[10px] font-mono text-text-muted uppercase tracking-widest mb-6">
            ENGINEERED WITH TOP-TIER WEB2 & WEB3 STACKS
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-70 hover:opacity-100 transition-opacity">
            <span className="flex items-center gap-2 text-xs font-mono text-text-secondary">{LOGOS.ethereum} Ethereum</span>
            <span className="flex items-center gap-2 text-xs font-mono text-text-secondary">{LOGOS.solana} Solana</span>
            <span className="flex items-center gap-2 text-xs font-mono text-text-secondary">{LOGOS.rust} Rust / Anchor</span>
            <span className="flex items-center gap-2 text-xs font-mono text-text-secondary">{LOGOS.solidity} Solidity</span>
            <span className="flex items-center gap-2 text-xs font-mono text-text-secondary">{LOGOS.python} Python AI</span>
            <span className="flex items-center gap-2 text-xs font-mono text-text-secondary">{LOGOS.aws} AWS</span>
            <span className="flex items-center gap-2 text-xs font-mono text-text-secondary">{LOGOS.kubernetes} Kubernetes</span>
          </div>
        </div>
      </div>

    </section>
  )
}
