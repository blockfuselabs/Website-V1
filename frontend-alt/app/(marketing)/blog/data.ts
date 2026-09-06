// apiFetch import — uncomment when backend is ready
// import { apiFetch } from '@/app/lib/api'

// ── Types ────────────────────────────────────────────────────────────────

export interface BlogPost {
  id: string
  slug: string
  title: string
  category: string
  snippet: string
  author: {
    name: string
    role: string
    avatar: string
    readTime: string
  }
  image: string
  featured: boolean
}

// ── Mock data ────────────────────────────────────────────────────────────

export const BLOG_CATEGORIES = [
  'All Category',
  'Protocol Engineering',
  'Smart Contracts',
  'DevOps & Infra',
  'Security & Audits',
  'AI & ZK Proofs',
  'Ecosystem & Culture',
]

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'how-to-be-10x-web3-engineer',
    slug: 'how-to-be-10x-web3-engineer',
    title: 'How To Be A 10x Web3 Engineer In The Age of AI/ML',
    category: 'Protocol Engineering',
    snippet: 'We provide actionable tips, tooling workflows, and architectural insights from industry protocol leaders. For real.',
    author: { name: 'Azunyan U. Wu', role: 'Core Protocol Engineer', avatar: '/engineers.png', readTime: '5 min read' },
    image: '/solidity.png',
    featured: true,
  },
  {
    id: 'building-scalable-smart-contracts',
    slug: 'building-scalable-smart-contracts',
    title: 'Building Scalable Smart Contracts On EVM Layer 2s',
    category: 'Smart Contracts',
    snippet: 'Exploring state gas optimization patterns, storage packing, and proxy upgradeability standards in production.',
    author: { name: 'Vermillion White', role: 'Security Auditor', avatar: '/engineers.png', readTime: '5 min read' },
    image: '/case study section.png',
    featured: false,
  },
  {
    id: 'zero-knowledge-circuit-design',
    slug: 'zero-knowledge-circuit-design',
    title: 'Zero-Knowledge Circuit Design: From Noir to Circom',
    category: 'AI & ZK Proofs',
    snippet: 'A deep dive into zero-knowledge proof generation, constraint systems, and verifying proofs on-chain efficiently.',
    author: { name: 'Salvador D. Gray', role: 'ZK Research Lead', avatar: '/engineers.png', readTime: '7 min read' },
    image: '/process.png',
    featured: false,
  },
  {
    id: 'securing-cross-chain-bridges',
    slug: 'securing-cross-chain-bridges',
    title: 'Securing Cross-Chain Bridges Against Flash Loan Exploits',
    category: 'Security & Audits',
    snippet: 'Analyzing real-world exploit vectors in cross-chain messaging protocol relays and how to defend state sync loops.',
    author: { name: 'Sarah Mitchell', role: 'Protocol Engineer', avatar: '/engineers.png', readTime: '6 min read' },
    image: '/upcoming.png',
    featured: false,
  },
  {
    id: 'decentralized-infra-automation',
    slug: 'decentralized-infra-automation',
    title: 'Automating Decentralized RPC Infrastructure & Validator Sets',
    category: 'DevOps & Infra',
    snippet: 'How to manage multi-region node clusters using Terraform, Docker, and customized telemetry exporters.',
    author: { name: 'Alex Rivera', role: 'DevOps Architect', avatar: '/engineers.png', readTime: '4 min read' },
    image: '/engineering-hero.png',
    featured: false,
  },
]

// ── Fetch (commented out — backend not yet ready) ────────────────────────
//
// export async function fetchBlogPosts(): Promise<BlogPost[]> {
//   return apiFetch<BlogPost[]>('/api/blogs')
// }
//
// export async function fetchBlogPost(slug: string): Promise<BlogPost> {
//   return apiFetch<BlogPost>(`/api/blogs/${slug}`)
// }
