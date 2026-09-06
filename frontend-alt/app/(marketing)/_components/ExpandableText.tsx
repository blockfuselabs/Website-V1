'use client'

import { useState } from 'react'

interface ExpandableTextProps {
  text: string
  maxCharsOnMobile?: number
  className?: string
  expandButtonClass?: string
}

export default function ExpandableText({
  text,
  maxCharsOnMobile = 100,
  className = 'text-sm text-text-secondary font-light leading-relaxed',
  expandButtonClass = 'text-xs font-mono text-accent-purple hover:text-accent-pink'
}: ExpandableTextProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  const shouldTruncate = text.length > maxCharsOnMobile
  const truncatedText = text.substring(0, maxCharsOnMobile).trim() + '...'

  return (
    <div>
      <p className={className}>
        {isExpanded ? text : truncatedText}
      </p>
      {shouldTruncate && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className={`mt-2 ${expandButtonClass} transition-colors tracking-widest uppercase`}
        >
          {isExpanded ? 'Read less' : 'Read more'}
        </button>
      )}
    </div>
  )
}
