'use client'

import React from 'react'
import { ArrowLeft, Clock, Calendar, Share2, Copy, Check } from 'lucide-react'
import { useParams } from 'next/navigation'

export default function BlogDetailPage() {
  const params = useParams()
  const slug = params?.slug as string
  const [copied, setCopied] = React.useState(false)

  const handleCopy = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  return (
    <div className="relative overflow-hidden pt-16 min-h-screen">

      {/* Back Link */}
      <a
        href="/blog"
        className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-text-muted hover:text-accent-purple transition-colors uppercase mb-12 group"
      >
        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
        <span>Back to Articles</span>
      </a>
      {/* ── 1. Full-Width Top Cover Image (Before Any Content) ────────── */}
      <div className="w-full h-[50vh] md:h-[65vh] relative border-b border-dark-border overflow-hidden bg-black/60">
        <img
          src="/solidity.png"
          alt="Blog Cover"
          className="w-full h-full object-cover opacity-85 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700"
        />
        <div className="absolute inset-0 bg-black/40 pointer-events-none" />
      </div>

      {/* ── 2. Back Button & Reading Container ────────────────────────── */}
      <article className="max-w-4xl mx-auto px-6 pt-12 pb-24 relative z-10">



        {/* Date / Timestamp */}
        <div className="text-center mb-6">
          <span className="text-xs font-mono tracking-widest text-text-muted uppercase">
            OCTOBER 19, 2026, 10:50 PM
          </span>
        </div>

        {/* Main Title */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-light tracking-tighter text-text-primary text-center mb-8 leading-[1.15]">
          6 Technical Skills A Non-Technical Startup Founder Needs to Have
        </h1>

        {/* Subtitle / Lead Paragraph */}
        <p className="text-base sm:text-lg text-text-secondary font-light text-center max-w-2xl mx-auto mb-10 leading-relaxed">
          By learning a small amount of technical skills, you, as a non-technical startup founder, can support your company in smaller ways. Here’s our list of need-to-know technical skills.
        </p>

        {/* Author & Metadata Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between border-y border-dark-border py-6 mb-16 gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full border border-dark-border overflow-hidden bg-black/40">
              <img src="/engineers.png" alt="Author Avatar" className="w-full h-full object-cover" />
            </div>
            <div>
              <div className="text-sm font-light text-text-primary">Sarah Mitchell</div>
              <div className="text-xs font-mono text-accent-purple">Self-Taught Designer & Protocol Engineer</div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={handleCopy}
              className="p-2.5 border border-dark-border bg-white/[0.02] hover:border-accent-purple text-text-muted hover:text-accent-purple transition-all text-xs font-mono flex items-center gap-2"
              title="Copy Link"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              <span className="hidden sm:inline">{copied ? 'Copied' : 'Share'}</span>
            </button>
          </div>
        </div>

        {/* Article Body Content */}
        <div className="prose prose-invert max-w-none space-y-8 text-text-secondary font-light text-base sm:text-lg leading-relaxed">

          {/* First Paragraph with Drop Cap */}
          <p className="relative">
            <span className="float-left text-6xl font-serif font-bold text-text-primary mr-4 mt-1 leading-none">
              W
            </span>
            hen you set up your business, you do so because you have a great idea that will be a hit in your market, or there’s a problem to fix and you have the solution. But as a non-technical startup founder, with no development skills, making your dream a reality can be a whole lot harder.
          </p>

          <p>
            For example, if a non-technical startup founder doesn’t have a development team, they can’t make an MVP. The founder won’t be able to add features or fix bugs or make a tangible product at all. But that doesn’t mean that you can’t aid that development.
          </p>

          <p>
            By learning a small amount of technical skills, you, as a non-technical startup founder, can support your company in smaller ways. Here’s our list of need-to-know technical skills – feel free to ask us questions about this post in the comments.
          </p>

          {/* Section 1 */}
          <h2 className="text-2xl sm:text-3xl font-light text-text-primary tracking-tight pt-8 border-t border-dark-border/50">
            1. Wireframing
          </h2>

          <p>
            The first vital skill that all non-technical startup founders need to have is wireframing. Wireframing is an essential part of{' '}
            <a href="#" className="text-accent-purple underline underline-offset-4 decoration-accent-purple/30 hover:decoration-accent-purple transition-colors">
              the development process as it gives everybody on the team general idea
            </a>{' '}
            of what the end product is supposed to be like.
          </p>

          <p>
            Typically, wireframes are a really basic sketch or image of what the end product might look or feel like. For example, if your team is going to make a website, then you can draw menus and a picture of what the layout will be like (e.g. where are the ad banners, how many columns are there etc.)
          </p>

          {/* Callout Box */}
          <div className="glass-panel border-l-4 border-accent-purple p-6 my-8 border-y border-r border-dark-border bg-white/[0.01]">
            <p className="text-sm font-mono text-text-primary leading-relaxed">
              "Understanding basic architecture and data flows allows founders to communicate directly with protocol engineers without proxy friction."
            </p>
          </div>

          {/* Section 2 */}
          <h2 className="text-2xl sm:text-3xl font-light text-text-primary tracking-tight pt-8 border-t border-dark-border/50">
            2. Basic Command Line & Git Workflows
          </h2>

          <p>
            Knowing how to clone a repository, run local dev builds, and read terminal output bridges the gap between design specs and active development cycles. It builds empathy for engineering constraints.
          </p>

        </div>

        {/* Footer Navigation */}
        <div className="border-t border-dark-border mt-16 pt-8 flex items-center justify-between">
          <a
            href="/blog"
            className="inline-flex items-center gap-2 text-xs font-mono text-text-muted hover:text-accent-purple transition-colors uppercase"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>All Articles</span>
          </a>
          <span className="text-xs font-mono text-text-muted uppercase">
            Blockfuse Labs Engineering Insights
          </span>
        </div>

      </article>
    </div>
  )
}
