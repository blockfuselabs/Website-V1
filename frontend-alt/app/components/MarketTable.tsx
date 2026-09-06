'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'

interface MarketItem {
  name: string
  symbol: string
  image: string
  price: string
  change: string
  volume: string
  marketCap: string
}

export const MarketTable = () => {
  const [data, setData] = useState<MarketItem[]>([])
  const [loading, setLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 10

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(
          'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'
        )

        const coingeckoData = await res.json()

        if (Array.isArray(coingeckoData)) {
          const formatted = coingeckoData.map((coin: any) => ({
            name: coin.name,
            symbol: coin.symbol.toUpperCase(),
            image: coin.image,
            price:
              coin.current_price != null
                ? `$${coin.current_price.toLocaleString()}`
                : '—',

            change:
              coin.price_change_percentage_24h != null
                ? `${coin.price_change_percentage_24h.toFixed(2)}%`
                : '0.00%',

            volume:
              coin.total_volume != null
                ? `$${coin.total_volume.toLocaleString()}`
                : '—',

            marketCap:
              coin.market_cap != null
                ? `$${coin.market_cap.toLocaleString()}`
                : '—',
          }))

          setData(formatted)
        }
      } catch (error) {
        console.error('CoinGecko fetch error:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  if (loading) {
    return (
      <div className="text-gray-300 py-10 text-center font-mono text-xs">
        Please wait while we fetch market data...
      </div>
    )
  }

  const displayedData = data.slice(0, 10)

  return (
    <div className="w-full overflow-x-auto border border-dark-border bg-black/40 glass-panel">
      <table className="w-full text-left text-[11px]">
        <thead>
          <tr className="border-b border-dark-border bg-white/[0.02]">
            <th className="px-4 py-3 text-left text-xs font-mono text-text-muted uppercase tracking-wider">
              Name
            </th>
            <th className="px-4 py-3 text-left text-xs font-mono text-text-muted uppercase tracking-wider">
              Price
            </th>
            <th className="px-4 py-3 text-left text-xs font-mono text-text-muted uppercase tracking-wider">
              Change
            </th>
            <th className="px-4 py-3 text-left text-xs font-mono text-text-muted uppercase tracking-wider">
              Volume
            </th>
            <th className="px-4 py-3 text-left text-xs font-mono text-text-muted uppercase tracking-wider">
              Market Cap
            </th>
            <th className="px-4 py-3 text-right text-xs font-mono text-text-muted uppercase tracking-wider">
              Action
            </th>
          </tr>
        </thead>

        <tbody className="divide-y divide-dark-border/40 text-text-primary">
          {displayedData.map((item) => (
            <tr key={item.symbol} className="hover:bg-white/[0.02] transition-colors">
              <td className="px-4 py-3 whitespace-nowrap">
                <div className="flex items-center gap-2.5">
                  {item.image && (
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-5 h-5 rounded-full object-cover"
                    />
                  )}
                  <span className="font-light">{item.name}</span>
                  <span className="text-[10px] font-mono text-text-muted">{item.symbol}</span>
                </div>
              </td>

              <td className="px-4 py-3 whitespace-nowrap font-mono text-xs">{item.price}</td>

              <td className="px-4 py-3 whitespace-nowrap">
                <span
                  className={`text-xs font-mono font-medium ${
                    item.change.startsWith('-')
                      ? 'text-red-400'
                      : 'text-emerald-400'
                  }`}
                >
                  {item.change}
                </span>
              </td>

              <td className="px-4 py-3 whitespace-nowrap font-mono text-xs text-text-secondary">{item.volume}</td>

              <td className="px-4 py-3 whitespace-nowrap font-mono text-xs text-text-secondary">{item.marketCap}</td>
              
              <td className="px-4 py-3 text-right whitespace-nowrap">
                <button className="px-4 py-1.5 bg-white text-black text-[10px] font-mono font-bold hover:bg-neutral-200 transition-all border border-black uppercase tracking-wider">
                  Buy {item.symbol}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default MarketTable
