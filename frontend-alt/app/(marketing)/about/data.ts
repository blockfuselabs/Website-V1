// import { apiFetch } from '@/app/lib/api'

// ── Types ────────────────────────────────────────────────────────────────

export interface AboutStat {
  label: string
  value: string
  sub: string
}

export interface Opportunity {
  title: string
  subtitle: string
  type: string
  location: string
}

// ── Mock data ────────────────────────────────────────────────────────────

export const ABOUT_STATS: AboutStat[] = [
  { label: 'Founded in Jos', value: '2024', sub: 'Jos, Nigeria' },
  { label: 'Engineers Trained', value: '115+', sub: 'Globally deployed' },
  { label: 'Contracts Shipped', value: '500+', sub: 'Production systems' },
  { label: 'Ecosystem Partners', value: '50+', sub: 'Protocols & teams' },
]

export const OPPORTUNITIES: Opportunity[] = [
  {
    title: 'Engineering Cohorts',
    subtitle: 'Full-stack Web3 & AI engineering training for ambitious builders.',
    type: 'Full-time / In-person',
    location: 'Jos, Nigeria',
  },
  {
    title: 'Ecosystem Partnerships',
    subtitle: 'Sponsoring developer grants, hackathons, and cohort scholarships.',
    type: 'Protocol Grant / Sponsor',
    location: 'Global / Remote',
  },
  {
    title: 'Core Studio Roles',
    subtitle: 'Senior instructors, security auditors, and protocol architects.',
    type: 'Full-time',
    location: 'Hybrid / Remote',
  },
]

// ── Fetch (commented out — backend not yet ready) ────────────────────────
//
// export async function fetchAboutStats(): Promise<AboutStat[]> {
//   return apiFetch<AboutStat[]>('/api/about/stats')
// }
//
// export async function fetchOpportunities(): Promise<Opportunity[]> {
//   return apiFetch<Opportunity[]>('/api/opportunities')
// }
