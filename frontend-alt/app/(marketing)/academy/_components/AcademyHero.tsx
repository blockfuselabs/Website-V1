'use client'

import React, { useState, useEffect } from 'react'
import {
  Terminal,
  Play,
  CheckCircle2,
  ShieldCheck,
  Cpu,
  Users,
  Award,
  FileCode2,
  RefreshCw
} from 'lucide-react'
import ExpandableText from '../../_components/ExpandableText'

interface CodeSample {
  id: string
  name: string
  language: string
  color: string
  code: string[]
  tests: string[]
}

const CODE_SAMPLES: CodeSample[] = [
  {
    id: 'rust',
    name: 'solana_vault.rs',
    language: 'Rust (Anchor)',
    color: '#f97316',
    code: [
      '#[program]',
      'pub mod blockfuse_vault {',
      '    use super::*;',
      '    pub function initialize(ctx: Context<InitVault>) -> Result<()> {',
      '        let vault = &mut ctx.accounts.vault;',
      '        vault.authority = ctx.accounts.signer.key();',
      '        vault.total_staked = 0;',
      '        msg!("Vault initialized with zero-copy security invariants");',
      '        Ok(())',
      '    }',
      '}'
    ],
    tests: [
      '✓ test_initialize_vault_state (12ms)',
      '✓ test_enforce_signer_authority (8ms)',
      '✓ test_zero_copy_deserialization (15ms)',
      '✓ test_rent_exempt_space_calc (4ms)'
    ]
  },
  {
    id: 'solidity',
    name: 'YieldAggregator.sol',
    language: 'Solidity (EVM)',
    color: '#a855f7',
    code: [
      '// SPDX-License-Identifier: MIT',
      'contract YieldAggregator is ReentrancyGuard, Ownable {',
      '    using SafeERC20 for IERC20;',
      '    ',
      '    function deposit(uint256 amount) external nonReentrant {',
      '        require(amount > 0, "INVALID_AMOUNT");',
      '        IERC20(underlying).safeTransferFrom(msg.sender, address(this), amount);',
      '        emit YieldDeposited(msg.sender, amount);',
      '    }',
      '}'
    ],
    tests: [
      '✓ test_non_reentrant_guard (14ms)',
      '✓ test_safe_erc20_transfer_from (19ms)',
      '✓ test_zero_amount_revert (6ms)',
      '✓ test_event_emission_integrity (9ms)'
    ]
  },
  {
    id: 'typescript',
    name: 'indexer_client.ts',
    language: 'TypeScript / Node',
    color: '#3b82f6',
    code: [
      'import { Connection, PublicKey } from "@solana/web3.js";',
      'import { AnchorProvider, Program } from "@coral-xyz/anchor";',
      '',
      'export class ProtocolIndexer {',
      '  async syncState(programId: PublicKey): Promise<VaultState> {',
      '    const accountInfo = await this.connection.getAccountInfo(programId);',
      '    return this.coder.accounts.decode("VaultState", accountInfo.data);',
      '  }',
      '}'
    ],
    tests: [
      '✓ test_websocket_account_subscribe (22ms)',
      '✓ test_borsh_zero_copy_decoder (11ms)',
      '✓ test_rpc_failover_recovery (31ms)',
      '✓ test_memory_cache_eviction (7ms)'
    ]
  }
]

export default function AcademyHero() {
  const [activeTab, setActiveTab] = useState<string>('rust')
  const [isRunningTests, setIsRunningTests] = useState<boolean>(false)
  const [testProgress, setTestProgress] = useState<number>(0)
  const [completedTests, setCompletedTests] = useState<number>(0)

  const activeSample = CODE_SAMPLES.find((s) => s.id === activeTab) || CODE_SAMPLES[0]

  const handleRunTests = () => {
    if (isRunningTests) return
    setIsRunningTests(true)
    setTestProgress(0)
    setCompletedTests(0)
  }

  useEffect(() => {
    if (!isRunningTests) return

    const interval = setInterval(() => {
      setTestProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setIsRunningTests(false)
          setCompletedTests(activeSample.tests.length)
          return 100
        }
        const next = prev + 25
        setCompletedTests(Math.min(Math.floor((next / 100) * activeSample.tests.length), activeSample.tests.length))
        return next
      })
    }, 250)

    return () => clearInterval(interval)
  }, [isRunningTests, activeSample])

  return (
    <section className="min-h-[calc(100vh-6rem)] flex items-center relative border-b border-dark-border mb-24 overflow-hidden">
      <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-12 py-12">

        {/* Left column — text (exact original text, colors & buttons) */}
        <div className="flex-1 flex flex-col justify-center gap-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent-pink/10 border border-accent-pink/30 text-[11px] font-mono tracking-widest text-accent-pink uppercase w-fit">
            <span className="h-1.5 w-1.5 bg-accent-pink inline-block animate-pulse" />
            // RIGOROUS ENGINEERING TRAINING
          </div>

          <h1 className="hero-title uppercase">
            Blockfuse<br />
            <span className="text-text-secondary">Academy</span>
          </h1>

          <div className="max-w-sm">
            <ExpandableText
              text="Serious training for serious engineers. We select carefully, push hard, and help you become production-ready. No certificates. No shortcuts."
              maxCharsOnMobile={70}
              className="text-sm text-text-secondary font-light leading-relaxed"
            />
          </div>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#programs"
              className="btn-primary"
            >
              Explore Programs
              <span>→</span>
            </a>

            <a
              href="#apply"
              className="border border-dark-border text-text-primary px-6 py-3.5 text-xs tracking-widest uppercase font-mono inline-flex items-center gap-3 hover:border-accent-pink hover:text-accent-pink bg-white/[0.01] transition-all duration-300"
            >
              Apply Now
              <span>→</span>
            </a>

            <a
              href="/contact"
              className="btn-ghost"
            >
              Ask a question →
            </a>
          </div>
        </div>

        {/* Right column — Interactive Web3 IDE & Code Runner Showcase */}
        <div className="w-full max-w-md lg:max-w-[500px] shrink-0 relative z-10">
          
          {/* IDE Window Box */}
          <div className="relative border border-dark-border bg-white/[0.02] overflow-hidden shadow-2xl backdrop-blur-sm group">
            
            {/* Top IDE Bar */}
            <div className="flex items-center justify-between px-4 py-3 bg-white/[0.03] border-b border-dark-border">
              {/* Traffic light dots */}
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/60 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/60 inline-block" />
                <span className="text-[10px] font-mono text-text-muted ml-2 hidden sm:inline-block">
                  blockfuse-ide
                </span>
              </div>

              {/* Code File Tabs */}
              <div className="flex items-center gap-1 bg-black/40 p-1 border border-dark-border">
                {CODE_SAMPLES.map((sample) => (
                  <button
                    key={sample.id}
                    onClick={() => {
                      setActiveTab(sample.id)
                      setTestProgress(0)
                      setCompletedTests(0)
                      setIsRunningTests(false)
                    }}
                    className={`px-2.5 py-1 text-[10px] font-mono transition-all duration-200 flex items-center gap-1.5 ${
                      activeTab === sample.id
                        ? 'bg-white/10 text-white font-medium border border-dark-border'
                        : 'text-text-muted hover:text-text-primary hover:bg-white/5'
                    }`}
                  >
                    <FileCode2 className="w-3 h-3" style={{ color: sample.color }} />
                    {sample.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Code Content Area */}
            <div className="p-4 font-mono text-[11px] leading-relaxed overflow-x-auto min-h-[240px] bg-black/30">
              <div className="table w-full">
                {activeSample.code.map((line, idx) => (
                  <div key={idx} className="table-row hover:bg-white/[0.02]">
                    <span className="table-cell pr-4 text-right select-none text-text-muted/40 text-[10px] w-6">
                      {idx + 1}
                    </span>
                    <span className="table-cell text-text-secondary whitespace-pre font-mono">
                      {line.includes('//') ? (
                        <span className="text-text-muted italic">{line}</span>
                      ) : line.includes('#[program]') || line.includes('pub mod') || line.includes('contract') || line.includes('function') || line.includes('pub fn') || line.includes('async') ? (
                        <span className="text-accent-pink font-semibold">{line}</span>
                      ) : line.includes('Result') || line.includes('Context') || line.includes('ReentrancyGuard') || line.includes('IERC20') ? (
                        <span className="text-accent-purple">{line}</span>
                      ) : (
                        line
                      )}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* IDE Test Suite Execution Controls & Output */}
            <div className="p-4 bg-white/[0.01] border-t border-dark-border space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Terminal className="w-3.5 h-3.5 text-accent-purple" />
                  <span className="text-[10px] font-mono text-text-muted uppercase tracking-wider">
                    TEST SUITE VERIFICATION
                  </span>
                </div>

                <button
                  onClick={handleRunTests}
                  disabled={isRunningTests}
                  className={`px-3 py-1 text-[10px] font-mono uppercase tracking-wider border border-dark-border transition-all duration-200 flex items-center gap-1.5 ${
                    isRunningTests
                      ? 'bg-accent-purple/20 text-accent-purple border-accent-purple/40 cursor-wait'
                      : 'bg-white/5 hover:bg-accent-pink hover:text-white hover:border-accent-pink text-text-primary'
                  }`}
                >
                  {isRunningTests ? (
                    <>
                      <RefreshCw className="w-3 h-3 animate-spin" />
                      Testing... ({testProgress}%)
                    </>
                  ) : (
                    <>
                      <Play className="w-3 h-3 fill-current" />
                      Run Test Suite
                    </>
                  )}
                </button>
              </div>

              {/* Progress Bar */}
              {isRunningTests && (
                <div className="w-full bg-dark-border h-1 rounded-full overflow-hidden">
                  <div
                    className="bg-accent-pink h-full transition-all duration-200"
                    style={{ width: `${testProgress}%` }}
                  />
                </div>
              )}

              {/* Test Output Logs */}
              <div className="bg-black/50 p-3 border border-dark-border font-mono text-[10px] space-y-1.5">
                {activeSample.tests.map((test, i) => (
                  <div
                    key={test}
                    className={`flex items-center gap-2 transition-all duration-300 ${
                      i < completedTests || completedTests === activeSample.tests.length
                        ? 'text-emerald-400 opacity-100'
                        : 'text-text-muted/30'
                    }`}
                  >
                    <CheckCircle2 className={`w-3 h-3 shrink-0 ${i < completedTests || completedTests === activeSample.tests.length ? 'text-emerald-400' : 'text-text-muted/30'}`} />
                    <span>{test}</span>
                  </div>
                ))}

                {(completedTests === activeSample.tests.length && !isRunningTests) && (
                  <div className="pt-2 mt-2 border-t border-dark-border text-[9px] text-accent-pink flex items-center justify-between font-mono tracking-widest uppercase">
                    <span className="flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                      ALL 4 TESTS PASSED • PRODUCTION READY
                    </span>
                  </div>
                )}
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  )
}
