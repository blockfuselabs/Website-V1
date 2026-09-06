'use client'

import React, { useState } from 'react'
import { ArrowRight, Users } from 'lucide-react'
import { TbBrandDiscord, TbBrandX, TbBrandGithub, TbBrandTelegram } from 'react-icons/tb'
import CommunityHero from '@/app/(marketing)/community/_components/CommunityHero'

const channels = [
  {
    icon: TbBrandDiscord,
    name: 'Discord',
    description: 'Daily conversation, help channels, and event announcements.',
    cta: 'Join Discord',
    href: '#',
  },
  {
    icon: TbBrandTelegram,
    name: 'Telegram',
    description: 'Real-time updates, alpha drops, and fast-paced discussions.',
    cta: 'Join Telegram',
    href: '#',
  },
  {
    icon: TbBrandX,
    name: 'Twitter / X',
    description: 'Follow for ecosystem news, cohort updates, and community highlights.',
    cta: 'Follow us',
    href: '#',
  },
  {
    icon: TbBrandGithub,
    name: 'GitHub',
    description: 'Open-source projects, cohort capstones, and contribution sprints.',
    cta: 'View repos',
    href: '#',
  },
]

const pillars = [
  {
    label: '01',
    title: 'Engineers who build',
    copy: 'Everyone in the community is either learning to build, actively building, or has shipped production software. There is no audience here — only practitioners.',
  },
  {
    label: '02',
    title: 'Honest peer review',
    copy: 'Code gets reviewed the way it gets reviewed on a real team. Directly and without flattery. That standard makes the community genuinely useful.',
  },
  {
    label: '03',
    title: 'Ecosystem connections',
    copy: 'Members get access to protocol teams, hiring partners, mentors, and event opportunities through the Blockfuse network.',
  },
  {
    label: '04',
    title: 'A stage at ProdFest',
    copy: 'Community builders can showcase projects at ProdFest — our annual demo day — in front of protocols, investors, and hiring teams.',
  },
]

const showcaseItems = [
  {
    num: '01',
    tag: '// Core Leadership',
    title: 'The Team',
    desc: 'Meet the engineers, architects, and ecosystem builders driving Blockfuse Labs forward.',
    href: '/team',
    cta: 'Meet the Team',
    activeBorder: 'border-accent-purple/50',
    hoverBorder: 'hover:border-accent-purple/30',
    activeText: 'text-accent-purple',
    hoverText: 'hover:text-accent-purple',
    hoverBorderAction: 'hover:border-accent-purple',
  },
  {
    num: '02',
    tag: '// Talent Pipeline',
    title: 'Alumni',
    desc: 'Engineers who trained with us and are now deployed across top Web3 protocols globally.',
    href: '/alumni',
    cta: 'View Alumni',
    activeBorder: 'border-accent-pink/50',
    hoverBorder: 'hover:border-accent-pink/30',
    activeText: 'text-accent-pink',
    hoverText: 'hover:text-accent-pink',
    hoverBorderAction: 'hover:border-accent-pink',
  },
  {
    num: '03',
    tag: '// Ecosystem Impact',
    title: 'Open Source',
    desc: 'Active contributions to the underlying infrastructure and tooling of the Web3 ecosystem.',
    href: '/open-source',
    cta: 'View Contributions',
    activeBorder: 'border-emerald-500/50',
    hoverBorder: 'hover:border-emerald-500/30',
    activeText: 'text-emerald-400',
    hoverText: 'hover:text-emerald-400',
    hoverBorderAction: 'hover:border-emerald-500',
  }
]

export default function CommunityPage() {
  const [activeAccordion, setActiveAccordion] = useState(0)
  return (
    <div className="relative overflow-hidden">

      {/* ── 1. Hero ───────────────────────────────────────────────────── */}
      <CommunityHero />

      {/* ── 2. Showcase Sections (Team, Alumni, Open Source) ────────────── */}
      <section className="mb-24 pb-12 border-b border-dark-border relative z-10">
        <div className="flex flex-col gap-2 sm:gap-3 md:gap-4 mx-auto h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px]">
          {showcaseItems.map((item, index) => (
            <div
              key={item.num}
              onMouseEnter={() => setActiveAccordion(index)}
              className={` flex flex-col justify-between group transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] cursor-pointer overflow-hidden relative ${
                activeAccordion === index
                  ? `flex-[3] ${item.activeBorder} bg-white/[0.02]`
                  : `flex-[1] ${item.hoverBorder} hover:bg-white/[0.01]`
              }`}
            >
              <div className="p-4 sm:p-6 md:p-8 h-full flex flex-col relative z-10">
                <div className="flex items-center gap-4 mb-4">
                  <span className={`text-[10px] font-mono tracking-widest uppercase transition-colors duration-300 ${activeAccordion === index ? item.activeText : 'text-text-muted'}`}>
                    {item.num} {item.tag}
                  </span>
                </div>
                <h3 className="text-2xl font-light text-text-primary mb-3 whitespace-nowrap">{item.title}</h3>

                <div className={`transition-all duration-500 overflow-hidden flex flex-col justify-between flex-1 ${activeAccordion === index ? 'opacity-100 max-h-[300px]' : 'opacity-0 max-h-0'}`}>
                  <p className="text-sm text-text-secondary font-light leading-relaxed mb-8 w-full md:w-[300px]">
                    {item.desc}
                  </p>
                  <a
                    href={item.href}
                    className={`inline-flex items-center gap-2 px-6 py-3 border border-dark-border text-text-primary ${item.hoverBorderAction} ${item.hoverText} transition-all text-xs tracking-widest uppercase font-mono w-fit bg-black/20`}
                  >
                    <span>{item.cta}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── 3. Community pillars ─────────────────────────────────────── */}
      <section className="mb-24 pb-12 border-b border-dark-border relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 max-w-6xl mx-auto">

          {/* Left Column - Header */}
          <div className="lg:col-span-4 lg:pr-8 flex flex-col justify-start pt-0 lg:pt-4">
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-light tracking-tighter text-text-primary leading-[1.1] mb-4 sm:mb-6">
              What makes it <br className="hidden lg:block" /> <em className="italic font-light text-text-secondary">different</em>
            </h2>
            <span className="text-[9px] sm:text-[10px] font-mono tracking-widest text-text-muted uppercase block">
              // Community principles
            </span>
          </div>

          {/* Right Column - 2x2 Grid */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {pillars.map((p) => (
              <div
                key={p.label}
                className="glass-panel p-5 sm:p-6 md:p-8 border border-dark-border hover-glow-card flex flex-col group transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-10 h-10 rounded-full border border-dark-border bg-black/40 flex items-center justify-center group-hover:border-accent-purple/50 transition-colors shrink-0">
                    <span className="text-[10px] font-mono tracking-widest text-accent-purple">
                      {p.label}
                    </span>
                  </div>
                  <h3 className="text-lg font-light text-text-primary group-hover:text-accent-purple transition-colors">
                    {p.title}
                  </h3>
                </div>
                <p className="text-sm text-text-secondary font-light leading-relaxed">
                  {p.copy}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. Channels ──────────────────────────────────────────────── */}
      <section className="mb-24 pb-12 border-b border-dark-border relative z-10">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light mb-8 sm:mb-12 tracking-tighter text-text-primary">
          Where we <em className="italic font-light text-text-secondary">gather</em>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto">
          {channels.map((ch) => {
            const Icon = ch.icon
            return (
              <div key={ch.name} className="glass-panel p-8 hover-glow-card flex flex-col justify-between group">
                <div>
                  <div className="p-3 border border-dark-border bg-black/40 w-fit mb-6 group-hover:border-accent-purple/50 transition-colors">
                    <Icon className="w-5 h-5 text-text-secondary group-hover:text-accent-purple transition-colors" />
                  </div>
                  <h3 className="text-lg font-light text-text-primary mb-3">{ch.name}</h3>
                  <p className="text-sm text-text-secondary font-light leading-relaxed mb-6">
                    {ch.description}
                  </p>
                </div>
                <a
                  href={ch.href}
                  className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-text-muted hover:text-accent-purple transition-colors group/link w-fit"
                >
                  <span>{ch.cta}</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" />
                </a>
              </div>
            )
          })}
        </div>
      </section>

      {/* ── 4. CTA ───────────────────────────────────────────────────── */}
      <section className="py-16 text-center glass-panel relative z-10 border border-dark-border">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Users className="w-4 h-4 text-accent-purple" />
          <span className="text-[10px] font-mono tracking-widest text-accent-purple uppercase">
            Open to everyone
          </span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-light text-text-primary mb-4">
          Ready to join?
        </h3>
        <p className="text-sm text-text-secondary mb-8 max-w-xl mx-auto leading-relaxed font-light">
          The community is open to developers at all stages. Whether you are just starting out or you have already shipped, there is a place for you here.
        </p>
        <a
          href="#"
          className="btn-primary"
        >
          <span>Join the Community</span>
          <ArrowRight className="w-4 h-4" />
        </a>
      </section>

    </div>
  )
}
