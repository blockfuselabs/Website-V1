'use client'

import React, { useState } from 'react'
import {
  Cpu,
  Layers,
  ShieldCheck,
  Terminal,
  ArrowRight,
  Code2,
  Workflow,
  GitBranch,
  Zap,
  CheckCircle2,
  Sparkles,
  Boxes,
  Bot,
  Server,
  Lock,
  ChevronRight,
  Activity,
  FileCode2
} from 'lucide-react'

import EngineeringHero from '@/app/(marketing)/engineering/_components/EngineeringHero'
import CaseStudyShowcase from '@/app/(marketing)/engineering/_components/CaseStudyShowcase'

export default function EngineeringPage() {
  const [activeArch, setActiveArch] = useState<number>(0)

  const deliveryStandards = [
    { standard: 'Production-Grade Code', detail: '100% test coverage, security audits', icon: ShieldCheck },
    { standard: 'Senior Oversight', detail: 'Architect approval at every milestone', icon: Code2 },
    { standard: 'Full Ownership', detail: '100% sovereign IP & code control', icon: Lock },
    { standard: 'Deployment Ready', detail: 'Mainnet-ready with monitoring setup', icon: Zap },
  ]

  const services = [
    {
      title: 'Protocol & Smart Contract Development',
      tagline: 'EVM & Solana / Security-First',
      description: 'Design, build, and verify high-throughput smart contracts and decentralized protocols. Built with rigorous unit testing, formal verification patterns, and security audit readiness.',
      techs: ['Solidity', 'Rust / Anchor', 'Foundry', 'Hardhat', 'Viem / Ethers'],
      icon: Code2,
      archSnippet: `// EVM Vault Strategy Protocol
contract VaultStrategy is ReentrancyGuard {
    using SafeERC20 for IERC20;
    
    function deposit(uint256 amount) external nonReentrant {
        require(amount > 0, "INVALID_AMOUNT");
        _mintShares(msg.sender, amount);
        emit Deposited(msg.sender, amount);
    }
}`
    },
    {
      title: 'Full-Stack Decentralized Applications',
      tagline: 'Production dApps & Subgraphs',
      description: 'End-to-end Web3 web applications built for speed, seamless wallet connections, real-time data indexing, and high-performance RPC interaction.',
      techs: ['Next.js', 'TypeScript', 'The Graph', 'Subgraphs', 'Wallet Standard'],
      icon: Layers,
      archSnippet: `// Web3 Client RPC Indexer
export async function useProtocolState(vaultAddress: string) {
  const client = usePublicClient();
  const { data: shares } = useReadContract({
    address: vaultAddress,
    abi: VaultABI,
    functionName: 'totalSupply'
  });
  return { shares, client };
}`
    },
    {
      title: 'Applied AI & Web3 Autonomous Systems',
      tagline: 'AI Agents & On-Chain Inference',
      description: 'Architect autonomous AI agents, automated on-chain execution bots, intelligent copy-trading systems, and RAG pipelines integrated into Web3 products.',
      techs: ['Python', 'LangChain', 'LLMs', 'Vector DBs', 'Automated Agents'],
      icon: Bot,
      archSnippet: `# Autonomous Copy-Trade Agent
class ArbitrageAgent(BaseAgent):
    async def evaluate_opportunity(self, state: MarketState) -> Order:
        if state.spread > self.min_spread:
            return await self.execute_on_chain_swap(
                route=state.optimal_route
            )`
    },
    {
      title: 'Infrastructure & DevOps',
      tagline: 'Scalable Backend Systems',
      description: 'Production infrastructure for Web3 systems including RPC nodes, indexers, monitoring stacks, and deployment pipelines optimized for high-throughput, low-latency systems.',
      techs: ['Kubernetes', 'Docker', 'AWS / GCP', 'Monitoring', 'CI/CD Pipelines'],
      icon: Server,
      archSnippet: `# K8s Indexer StatefulSet Deployment
apiVersion: apps/v1
kind: StatefulSet
metadata:
  name: blockfuse-rpc-indexer
spec:
  replicas: 3
  serviceName: "solana-rpc-node"`
    },
  ]

  const workflowSteps = [
    {
      step: '01',
      title: 'Discovery & Architecture',
      description: 'Deep dive on your requirements, token economics, protocol design, and technical constraints.',
    },
    {
      step: '02',
      title: 'Design & Scoping',
      description: 'Comprehensive technical specification, system diagrams, and development roadmap with senior architect oversight.',
    },
    {
      step: '03',
      title: 'Development & Testing',
      description: 'Iterative development with daily standups, rigorous unit testing, integration tests, and staged audits.',
    },
    {
      step: '04',
      title: 'Audit & Security Review',
      description: 'Full formal verification patterns, security audits, and vulnerability assessments before production deployment.',
    },
    {
      step: '05',
      title: 'Production Deployment',
      description: 'Mainnet deployment, monitoring setup, incident response playbooks, and ongoing technical support.',
    },
  ]

  const caseStudies = [
    {
      title: 'DeFi Protocol Launch',
      excerpt: 'Architected and shipped a multi-chain DEX with $50M+ TVL in 4 months.',
      tags: ['Solidity', 'Subgraphs', 'Full-Stack'],
      metric: '$50M+ TVL',
    },
    {
      title: 'AI Trading Bot System',
      excerpt: 'Built autonomous trading agents integrated with 5+ on-chain protocols and real-time market data.',
      tags: ['Python', 'LangChain', 'Smart Contracts'],
      metric: '5+ Protocols',
    },
    {
      title: 'Layer 2 Infrastructure',
      excerpt: 'Deployed indexing and monitoring infrastructure for high-throughput scaling solutions.',
      tags: ['Kubernetes', 'DevOps', 'Monitoring'],
      metric: 'High Throughput',
    },
  ]

  return (
    <div className="relative overflow-hidden">
      {/* Recreated Concentric Orbit Hero with Web2 & Web3 Logos */}
      <EngineeringHero />

      {/* Service Offerings */}
      <section id="services" className="my-24 pb-12 border-b border-dark-border relative z-10">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl sm:text-4xl font-light tracking-tighter text-text-primary">
            What we <em className="italic font-light text-text-secondary">build</em>
          </h2>
          <span className="text-xs font-mono text-text-muted uppercase tracking-widest">
            // Core Engineering Services
          </span>
        </div>

        <div className="space-y-8 max-w-5xl mx-auto">
          {services.map((service, i) => {
            const IconComp = service.icon
            const isSelected = activeArch === i

            return (
              <div
                key={service.title}
                onClick={() => setActiveArch(i)}
                className={`glass-panel p-8 hover-glow-card cursor-pointer transition-all duration-300 relative ${
                  isSelected ? 'border-accent-purple bg-accent-purple/[0.04]' : 'border-dark-border'
                }`}
              >
                <div className="flex items-start gap-6">
                  <div className={`p-3.5 border ${isSelected ? 'border-accent-purple bg-accent-purple/20 text-accent-purple' : 'border-dark-border bg-black/40 text-text-secondary'}`}>
                    <IconComp className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-mono text-accent-purple font-semibold">
                          [{String(i + 1).padStart(2, '0')}]
                        </span>
                        <h3 className="text-xl sm:text-2xl font-light text-text-primary group-hover:text-accent-purple transition-all">
                          {service.title}
                        </h3>
                      </div>
                      <span className="text-[10px] font-mono tracking-widest text-accent-pink bg-accent-pink/10 border border-accent-pink/20 px-3 py-1 rounded">
                        {service.tagline}
                      </span>
                    </div>
                    <p className="text-sm text-text-secondary font-light leading-relaxed mb-5 max-w-3xl">
                      {service.description}
                    </p>

                    {/* Interactive Code Preview Box */}
                    {isSelected && (
                      <div className="mb-5 p-4 bg-black/80 border border-accent-purple/30 font-mono text-xs text-accent-purple/90 overflow-x-auto shadow-inner">
                        <div className="flex items-center justify-between pb-2 mb-2 border-b border-white/[0.06] text-[10px] text-text-muted">
                          <span className="flex items-center gap-1.5"><FileCode2 className="w-3 h-3 text-accent-pink" /> architecture-sample.ts</span>
                          <span>SYNTAX VERIFIED</span>
                        </div>
                        <pre className="whitespace-pre">{service.archSnippet}</pre>
                      </div>
                    )}

                    <div className="flex flex-wrap gap-2">
                      {service.techs.map((tech) => (
                        <span
                          key={tech}
                          className="text-[10px] font-mono text-text-muted border border-dark-border px-3 py-1 rounded bg-white/[0.01]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* Development Workflow */}
      <section className="mb-24 pb-12 border-b border-dark-border relative z-10">
        <h2 className="text-3xl sm:text-4xl font-light mb-12 tracking-tighter text-text-primary">
          Our <em className="italic font-light text-text-secondary">process</em>
        </h2>

        {/* Two-column layout: left steps, right implementation box */}
        <div className="flex flex-col lg:flex-row gap-0 max-w-6xl mx-auto">

          {/* Left Column: Process Steps */}
          <div className="w-full lg:w-[50%] border border-dark-border border-r-0 bg-black/20 p-8 space-y-8">
            {workflowSteps.map((item, i) => (
              <div key={item.step} className="flex gap-6 items-start">
                <div className="flex-shrink-0">
                  <div className="w-12 h-px bg-accent-purple" />
                </div>
                <div className="flex-1">
                  <h3 className="text-base font-light text-text-primary mb-2">
                    <span className="font-mono text-sm text-accent-purple font-semibold">{item.step}.</span> {item.title}
                  </h3>
                  <p className="text-sm text-text-secondary font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Implementation Summary Box */}
          <div className="w-full lg:w-[50%] border border-dark-border border-l-0 bg-dark-border/30 p-8 flex flex-col justify-center min-h-[500px]">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-text-primary tracking-wide mb-2">IMPLEMENTATION PROCESS</h3>
                <p className="text-sm text-text-secondary font-light">Structured approach to Web3 development</p>
              </div>

              <div className="space-y-4">
                <p className="text-sm text-text-secondary font-light leading-relaxed">
                  We follow a methodical, milestone-driven process that ensures quality at every stage:
                </p>

                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-accent-purple font-semibold mt-0.5">•</span>
                    <span className="text-sm text-text-secondary font-light">
                      <strong className="text-text-primary">Discovery Phase:</strong> Understanding your requirements, token economics, and protocol design
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent-purple font-semibold mt-0.5">•</span>
                    <span className="text-sm text-text-secondary font-light">
                      <strong className="text-text-primary">Architecture:</strong> Senior architect oversight on all technical decisions
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent-purple font-semibold mt-0.5">•</span>
                    <span className="text-sm text-text-secondary font-light">
                      <strong className="text-text-primary">Development:</strong> Rigorous testing, daily standups, and iterative development
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent-purple font-semibold mt-0.5">•</span>
                    <span className="text-sm text-text-secondary font-light">
                      <strong className="text-text-primary">Security:</strong> Formal verification, audits, and vulnerability assessments
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent-purple font-semibold mt-0.5">•</span>
                    <span className="text-sm text-text-secondary font-light">
                      <strong className="text-text-primary">Deployment:</strong> Mainnet launch, monitoring setup, and ongoing support
                    </span>
                  </li>
                </ul>
              </div>

              <div className="pt-4 border-t border-dark-border/50">
                <p className="text-[10px] font-mono text-text-muted uppercase tracking-widest mb-3">Key Deliverables</p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-[9px] font-mono border border-accent-purple/30 bg-accent-purple/5 text-accent-purple px-3 py-1">Production Code</span>
                  <span className="text-[9px] font-mono border border-accent-purple/30 bg-accent-purple/5 text-accent-purple px-3 py-1">100% Test Coverage</span>
                  <span className="text-[9px] font-mono border border-accent-purple/30 bg-accent-purple/5 text-accent-purple px-3 py-1">Security Audit Ready</span>
                  <span className="text-[9px] font-mono border border-accent-purple/30 bg-accent-purple/5 text-accent-purple px-3 py-1">Full Documentation</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Dynamic Interactive Case Studies Showcase */}
      <CaseStudyShowcase />

     

      {/* CTA */}
      <section className="text-center py-16 glass-panel border border-dark-border relative z-10">
        <p className="text-text-primary font-normal text-2xl mb-3">Ready to build?</p>
        <p className="text-text-secondary text-sm mb-8 max-w-md mx-auto font-light">
          Let's discuss your project requirements and build a custom engagement plan.
        </p>
        <a
          href="/contact"
          className="btn-primary"
        >
          <span>Start a Project</span>
          <ArrowRight className="w-4 h-4" />
        </a>
      </section>
    </div>
  )
}
