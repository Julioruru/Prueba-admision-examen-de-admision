import { useState, useMemo } from 'react'

function C(n, k) {
  if (k < 0 || k > n) return 0
  if (k === 0 || k === n) return 1
  let c = 1
  for (let i = 0; i < k; i++) c = c * (n - i) / (i + 1)
  return Math.round(c)
}

function binomial(n, p) {
  return Array.from({ length: n + 1 }, (_, k) => {
    const prob = C(n, k) * Math.pow(p, k) * Math.pow(1 - p, n - k)
    return { k, prob }
  })
}

const W = 500, H = 260, M = { top: 20, right: 20, bottom: 45, left: 45 }
const CHART_W = W - M.left - M.right
const CHART_H = H - M.top - M.bottom

export default function Histogram() {
  const [n, setN] = useState(6)
  const [p, setP] = useState(0.4)

  const dist = useMemo(() => binomial(n, p), [n, p])
  const maxProb = Math.max(...dist.map(d => d.prob))
  const mu = (n * p).toFixed(2)
  const sigma = Math.sqrt(n * p * (1 - p)).toFixed(2)

  const barW = Math.min(CHART_W / (n + 2), 55)
  const gap = (CHART_W - barW * (n + 1)) / (n + 2)

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-4">
      <svg viewBox={`0 0 ${W} ${H}`} className="w-full" style={{ maxHeight: 240 }}>
        <g transform={`translate(${M.left}, ${M.top})`}>
          {/* Grid lines */}
          {[0.1, 0.2, 0.3, 0.4, 0.5].map(v => {
            if (v > maxProb * 1.1) return null
            const y = CHART_H - (v / (maxProb * 1.1)) * CHART_H
            return (
              <g key={v}>
                <line x1={0} y1={y} x2={CHART_W} y2={y} stroke="#f1f5f9" strokeWidth="1" />
                <text x={-4} y={y + 3} textAnchor="end" fontSize="9" fill="#94a3b8">{v.toFixed(1)}</text>
              </g>
            )
          })}

          {/* Axes */}
          <line x1={0} y1={0} x2={0} y2={CHART_H} stroke="#cbd5e1" strokeWidth="1.5" />
          <line x1={0} y1={CHART_H} x2={CHART_W} y2={CHART_H} stroke="#cbd5e1" strokeWidth="1.5" />

          {/* Bars */}
          {dist.map(({ k, prob }) => {
            const x = gap + k * (barW + gap)
            const barH = (prob / (maxProb * 1.1)) * CHART_H
            const y = CHART_H - barH
            const isMode = prob === maxProb
            return (
              <g key={k}>
                <rect x={x} y={y} width={barW} height={barH}
                  fill={isMode ? '#6366f1' : '#a5b4fc'}
                  rx={3}
                  style={{ transition: 'all 0.3s ease' }} />
                <text x={x + barW / 2} y={CHART_H + 12} textAnchor="middle" fontSize="10" fill="#64748b">
                  {k}
                </text>
                {prob > 0.01 && (
                  <text x={x + barW / 2} y={y - 3} textAnchor="middle" fontSize="8" fill="#4f46e5">
                    {prob.toFixed(3)}
                  </text>
                )}
              </g>
            )
          })}

          {/* X axis label */}
          <text x={CHART_W / 2} y={CHART_H + 35} textAnchor="middle" fontSize="11" fill="#64748b">
            k (número de éxitos)
          </text>

          {/* Y axis label */}
          <text x={-30} y={CHART_H / 2} textAnchor="middle" fontSize="11" fill="#64748b"
            transform={`rotate(-90, -30, ${CHART_H / 2})`}>
            P(X=k)
          </text>
        </g>
      </svg>

      {/* Controls */}
      <div className="mt-3 space-y-2">
        <div className="flex items-center gap-3">
          <span className="w-24 font-mono text-sm text-slate-700">n = {n}</span>
          <input type="range" min={1} max={20} step={1} value={n}
            onChange={e => setN(Number(e.target.value))}
            className="flex-1 accent-indigo-600" />
        </div>
        <div className="flex items-center gap-3">
          <span className="w-24 font-mono text-sm text-slate-700">p = {p.toFixed(2)}</span>
          <input type="range" min={0.05} max={0.95} step={0.05} value={p}
            onChange={e => setP(Number(e.target.value))}
            className="flex-1 accent-indigo-600" />
        </div>
      </div>

      <div className="mt-2 flex gap-4 text-xs bg-indigo-50 rounded-lg px-3 py-2">
        <span className="text-indigo-700 font-mono">X ~ B({n}, {p.toFixed(2)})</span>
        <span className="text-slate-600">μ = {mu}</span>
        <span className="text-slate-600">σ = {sigma}</span>
      </div>
    </div>
  )
}
