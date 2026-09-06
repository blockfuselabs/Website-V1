// ── Types ────────────────────────────────────────────────────────────────

export interface EngineeringService {
  title: string
  tagline: string
  description: string
  techs: string[]
  archSnippet: string
}

export interface WorkflowStep {
  step: string
  title: string
  description: string
}

export interface DeliveryStandard {
  standard: string
  detail: string
}

// ── Mock data ────────────────────────────────────────────────────────────

export const DELIVERY_STANDARDS: DeliveryStandard[] = [
  { standard: 'Production-Grade Code', detail: '100% test coverage, security audits' },
  { standard: 'Senior Oversight', detail: 'Architect approval at every milestone' },
  { standard: 'Full Ownership', detail: '100% sovereign IP & code control' },
  { standard: 'Deployment Ready', detail: 'Mainnet-ready with monitoring setup' },
]

export const ENGINEERING_SERVICES: EngineeringService[] = [
  {
    title: 'Protocol & Smart Contract Development',
    tagline: 'EVM & Solana / Security-First',
    description: 'Design, build, and verify high-throughput smart contracts and decentralized protocols. Built with rigorous unit testing, formal verification patterns, and security audit readiness.',
    techs: ['Solidity', 'Rust / Anchor', 'Foundry', 'Hardhat', 'Viem / Ethers'],
    archSnippet: `// EVM Vault Strategy Protocol
contract VaultStrategy is ReentrancyGuard {
    using SafeERC20 for IERC20;
    
    function deposit(uint256 amount) external nonReentrant {
        require(amount > 0, "INVALID_AMOUNT");
        _mintShares(msg.sender, amount);
        emit Deposited(msg.sender, amount);
    }
}`,
  },
  {
    title: 'Full-Stack Decentralized Applications',
    tagline: 'Production dApps & Subgraphs',
    description: 'End-to-end Web3 web applications built for speed, seamless wallet connections, real-time data indexing, and high-performance RPC interaction.',
    techs: ['Next.js', 'TypeScript', 'The Graph', 'Subgraphs', 'Wallet Standard'],
    archSnippet: `// Web3 Client RPC Indexer
export async function useProtocolState(vaultAddress: string) {
  const client = usePublicClient();
  const { data: shares } = useReadContract({
    address: vaultAddress,
    abi: VaultABI,
    functionName: 'totalSupply'
  });
  return { shares, client };
}`,
  },
  {
    title: 'Applied AI & Web3 Autonomous Systems',
    tagline: 'AI Agents & On-Chain Inference',
    description: 'Architect autonomous AI agents, automated on-chain execution bots, intelligent copy-trading systems, and RAG pipelines integrated into Web3 products.',
    techs: ['Python', 'LangChain', 'LLMs', 'Vector DBs', 'Automated Agents'],
    archSnippet: `# Autonomous Copy-Trade Agent
class ArbitrageAgent(BaseAgent):
    async def evaluate_opportunity(self, state: MarketState) -> Order:
        if state.spread > self.min_spread:
            return await self.execute_on_chain_swap(
                route=state.optimal_route
            )`,
  },
  {
    title: 'Infrastructure & DevOps',
    tagline: 'Scalable Backend Systems',
    description: 'Production infrastructure for Web3 systems including RPC nodes, indexers, monitoring stacks, and deployment pipelines optimized for high-throughput, low-latency systems.',
    techs: ['Kubernetes', 'Docker', 'AWS / GCP', 'Monitoring', 'CI/CD Pipelines'],
    archSnippet: `# K8s Indexer StatefulSet Deployment
apiVersion: apps/v1
kind: StatefulSet
metadata:
  name: blockfuse-rpc-indexer
spec:
  replicas: 3
  serviceName: "solana-rpc-node"`,
  },
]

export const WORKFLOW_STEPS: WorkflowStep[] = [
  { step: '01', title: 'Discovery & Architecture', description: 'Deep dive on your requirements, token economics, protocol design, and technical constraints.' },
  { step: '02', title: 'Design & Scoping', description: 'Comprehensive technical specification, system diagrams, and development roadmap with senior architect oversight.' },
  { step: '03', title: 'Development & Testing', description: 'Iterative development with daily standups, rigorous unit testing, integration tests, and staged audits.' },
  { step: '04', title: 'Audit & Security Review', description: 'Full formal verification patterns, security audits, and vulnerability assessments before production deployment.' },
  { step: '05', title: 'Production Deployment', description: 'Mainnet deployment, monitoring setup, incident response playbooks, and ongoing technical support.' },
]
