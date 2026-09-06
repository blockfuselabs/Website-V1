// import { apiFetch } from '@/app/lib/api'

// ── Types ────────────────────────────────────────────────────────────────

export interface Engineer {
  id: number
  name: string
  title: string
  tags: string[]
  bio: string
  stack: string[]
  available: string
  photo: string
  github: string
  twitter: string
  linkedin: string
}

export interface EngagementModel {
  title: string
  description: string
  duration: string
}

export interface TalentTestimonial {
  quote: string
  author: string
  role: string
}

export interface FAQ {
  question: string
  answer: string
}

export interface Insight {
  metric: string
  label: string
}

// ── Mock data ────────────────────────────────────────────────────────────

export const ENGINEERS: Engineer[] = [
  {
    id: 1,
    name: 'Adeniyi Adesanya',
    title: 'Senior Smart Contract Engineer',
    tags: ['Solidity Expert', 'EVM Specialist', 'DeFi Builder'],
    bio: 'Adeniyi has shipped over 40 production smart contracts across DeFi, NFT, and DAO protocols. He approaches every engagement with a security-first mindset and audit-ready code from day one.',
    stack: ['Solidity', 'Foundry', 'Hardhat', 'Viem'],
    available: 'Immediately',
    photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=600&fit=crop&crop=face',
    github: 'https://github.com',
    twitter: 'https://twitter.com',
    linkedin: 'https://linkedin.com',
  },
  {
    id: 2,
    name: 'Chioma Okafor',
    title: 'Full-Stack dApp Developer',
    tags: ['Web3 UI', 'Subgraphs', 'Next.js'],
    bio: 'Chioma builds end-to-end decentralised applications with a sharp eye for UX and performance. She has integrated wallet connections, real-time indexing, and complex on-chain state across 12+ live products.',
    stack: ['Next.js', 'TypeScript', 'The Graph', 'wagmi'],
    available: 'Jan 2025',
    photo: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&h=600&fit=crop&crop=face',
    github: 'https://github.com',
    twitter: 'https://twitter.com',
    linkedin: 'https://linkedin.com',
  },
  {
    id: 3,
    name: 'Tunde Salami',
    title: 'AI Systems Engineer',
    tags: ['LLM Pipelines', 'Agents', 'RAG'],
    bio: 'Tunde designs and deploys reliable AI-powered systems — not just demos. His work spans agentic workflows, retrieval-augmented generation, and on-chain inference pipelines integrated into live Web3 products.',
    stack: ['Python', 'LangChain', 'OpenAI', 'Vector DBs'],
    available: 'Feb 2025',
    photo: 'https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?w=400&h=600&fit=crop&crop=face',
    github: 'https://github.com',
    twitter: 'https://twitter.com',
    linkedin: 'https://linkedin.com',
  },
  {
    id: 4,
    name: 'Zainab Ibrahim',
    title: 'Protocol Architect',
    tags: ['Rust', 'Solana', 'System Design'],
    bio: 'Zainab architects distributed systems and Solana programs that hold up under real production load. She brings deep protocol intuition to every engagement and communicates complex tradeoffs clearly.',
    stack: ['Rust', 'Anchor', 'Solana', 'TypeScript'],
    available: 'Mar 2025',
    photo: 'https://images.unsplash.com/photo-1589156215202-bce1f91e27ef?w=400&h=600&fit=crop&crop=face',
    github: 'https://github.com',
    twitter: 'https://twitter.com',
    linkedin: 'https://linkedin.com',
  },
  {
    id: 5,
    name: 'Emeka Eze',
    title: 'Blockchain Security Engineer',
    tags: ['Audit', 'Fuzzing', 'Formal Verification'],
    bio: 'Emeka specialises in smart contract security — from manual code review to automated fuzzing and formal verification. He has identified critical vulnerabilities in protocols managing millions in TVL.',
    stack: ['Solidity', 'Slither', 'Echidna', 'Foundry'],
    available: 'Immediately',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop&crop=face',
    github: 'https://github.com',
    twitter: 'https://twitter.com',
    linkedin: 'https://linkedin.com',
  },
  {
    id: 6,
    name: 'Fatima Usman',
    title: 'DevOps & Infrastructure Engineer',
    tags: ['CI/CD', 'Cloud', 'Monitoring'],
    bio: 'Fatima builds the infrastructure that keeps Web3 products running — from node infrastructure and RPC management to deployment pipelines and on-chain monitoring systems.',
    stack: ['Docker', 'AWS', 'Terraform', 'Grafana'],
    available: 'Jan 2025',
    photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=600&fit=crop&crop=face',
    github: 'https://github.com',
    twitter: 'https://twitter.com',
    linkedin: 'https://linkedin.com',
  },
]

// ── Fetch (commented out — backend not yet ready) ────────────────────────
//
// export async function fetchEngineers(): Promise<Engineer[]> {
//   return apiFetch<Engineer[]>('/api/talent')
// }
