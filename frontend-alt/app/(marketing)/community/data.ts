// ── Types ────────────────────────────────────────────────────────────────

export interface CommunityPillar {
  label: string
  title: string
  copy: string
}

export interface CommunityChannel {
  name: string
  description: string
  cta: string
  href: string
}

export interface ShowcaseItem {
  num: string
  tag: string
  title: string
  desc: string
  href: string
  cta: string
  activeBorder: string
  hoverBorder: string
  activeText: string
  hoverText: string
  hoverBorderAction: string
}

// ── Mock data ────────────────────────────────────────────────────────────

export const COMMUNITY_PILLARS: CommunityPillar[] = [
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

export const COMMUNITY_CHANNELS: CommunityChannel[] = [
  { name: 'Discord', description: 'Daily conversation, help channels, and event announcements.', cta: 'Join Discord', href: '#' },
  { name: 'Telegram', description: 'Real-time updates, alpha drops, and fast-paced discussions.', cta: 'Join Telegram', href: '#' },
  { name: 'Twitter / X', description: 'Follow for ecosystem news, cohort updates, and community highlights.', cta: 'Follow us', href: '#' },
  { name: 'GitHub', description: 'Open-source projects, cohort capstones, and contribution sprints.', cta: 'View repos', href: '#' },
]

export const SHOWCASE_ITEMS: ShowcaseItem[] = [
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
  },
]
