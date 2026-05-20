import { useEffect, useRef, useState } from 'react'

const W = 500, H = 300, M = 45
const X_RANGE = [-2.5, 2.5], Y_RANGE = [-3, 5]

function toSvg(mx, my) {
  const x = M + ((mx - X_RANGE[0]) / (X_RANGE[1] - X_RANGE[0])) * (W - 2 * M)
  const y = (H - M) - ((my - Y_RANGE[0]) / (Y_RANGE[1] - Y_RANGE[0])) * (H - 2 * M)
  return [x, y]
}

const f = x => x * x * x - 3 * x + 1
const df = x => 3 * x * x - 3

function buildCurvePath() {
  const pts = []
  for (let i = 0; i <= 300; i++) {
    const mx = X_RANGE[0] + (i / 300) * (X_RANGE[1] - X_RANGE[0])
    const my = f(mx)
    if (my < Y_RANGE[0] - 2 || my > Y_RANGE[1] + 2) continue
    const [sx, sy] = toSvg(mx, my)
    pts.push(`${i === 0 ? 'M' : 'L'} ${sx.toFixed(1)} ${sy.toFixed(1)}`)
  }
  return pts.join(' ')
}

const CURVE_PATH = buildCurvePath()

export default function DerivativeCanvas() {
  const [t, setT] = useState(0)
  const rafRef = useRef(null)
  const [playing, setPlaying] = useState(true)
  const tRef = useRef(0)

  useEffect(() => {
    if (!playing) return
    const animate = () => {
      tRef.current = (tRef.current + 0.005) % 1
      setT(tRef.current)
      rafRef.current = requestAnimationFrame(animate)
    }
    rafRef.current = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(rafRef.current)
  }, [playing])

  const mx = X_RANGE[0] + t * (X_RANGE[1] - X_RANGE[0])
  const my = f(mx)
  const slope = df(mx)
  const [sx, sy] = toSvg(mx, my)

  // Tangent line: from mx-0.8 to mx+0.8
  const dx = 0.8
  const [tx1, ty1] = toSvg(mx - dx, my - slope * dx)
  const [tx2, ty2] = toSvg(mx + dx, my + slope * dx)

  const [ox] = toSvg(0, 0)
  const [, oy] = toSvg(0, 0)

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-4">
      <svg viewBox={`0 0 ${W} ${H}`} className="w-full" style={{ maxHeight: 260 }}>
        {/* Grid */}
        {[-2,-1,0,1,2].map(v => {
          const [gx] = toSvg(v, 0)
          const [, gy] = toSvg(0, v)
          return <g key={v}>
            <line x1={gx} y1={M} x2={gx} y2={H-M} stroke="#f1f5f9" strokeWidth="1" />
            <line x1={M} y1={gy} x2={W-M} y2={gy} stroke="#f1f5f9" strokeWidth="1" />
          </g>
        })}

        {/* Axes */}
        <line x1={M} y1={oy} x2={W-M} y2={oy} stroke="#cbd5e1" strokeWidth="1.5" />
        <line x1={ox} y1={M} x2={ox} y2={H-M} stroke="#cbd5e1" strokeWidth="1.5" />

        {/* Tick labels */}
        {[-2,-1,1,2].map(v => {
          const [gx] = toSvg(v, 0)
          const [, gy] = toSvg(0, v)
          return <g key={`tl${v}`}>
            <text x={gx} y={oy+14} textAnchor="middle" fontSize="9" fill="#94a3b8">{v}</text>
            <text x={ox-6} y={gy+3} textAnchor="end" fontSize="9" fill="#94a3b8">{v}</text>
          </g>
        })}

        {/* The curve f(x) = x³−3x+1 */}
        <path d={CURVE_PATH} fill="none" stroke="#6366f1" strokeWidth="2.5" strokeLinecap="round" />

        {/* Tangent line */}
        <line x1={tx1} y1={ty1} x2={tx2} y2={ty2}
          stroke="#ef4444" strokeWidth="2" strokeDasharray="5,3"
          style={{ transition: 'all 0.05s' }} />

        {/* Moving point */}
        <circle cx={sx} cy={sy} r={6} fill="#ef4444" stroke="white" strokeWidth="2"
          style={{ transition: 'all 0.05s' }} />

        {/* Slope label */}
        <rect x={W-M-90} y={M+5} width={85} height={40} rx={6} fill="white" stroke="#e2e8f0" />
        <text x={W-M-48} y={M+22} textAnchor="middle" fontSize="11" fill="#64748b">pendiente</text>
        <text x={W-M-48} y={M+38} textAnchor="middle" fontSize="14" fontWeight="bold"
          fill={slope > 0 ? '#10b981' : slope < 0 ? '#ef4444' : '#6366f1'} fontFamily="monospace">
          f'(x) = {slope.toFixed(2)}
        </text>

        {/* x position label */}
        <text x={M+5} y={M+16} fontSize="11" fill="#64748b" fontFamily="monospace">
          x = {mx.toFixed(2)}
        </text>

        {/* Axis labels */}
        <text x={W-M+4} y={oy+4} fontSize="11" fill="#94a3b8">x</text>
        <text x={ox+4} y={M-4} fontSize="11" fill="#94a3b8">y</text>

        {/* Function label */}
        <text x={M+5} y={H-M-5} fontSize="11" fill="#6366f1" fontFamily="monospace">
          f(x) = x³ − 3x + 1
        </text>
      </svg>

      <div className="mt-3 flex items-center justify-between">
        <div className="text-sm text-slate-600">
          La línea roja es la <strong>tangente</strong> en cada punto. Su pendiente = <strong className="text-red-500">f'(x)</strong>
        </div>
        <button onClick={() => setPlaying(p => !p)}
          className="px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-100 hover:bg-slate-200 transition-colors">
          {playing ? '⏸ Pausar' : '▶ Animar'}
        </button>
      </div>

      <div className="mt-2 flex gap-4 text-xs text-slate-500">
        <span className="flex items-center gap-1">
          <span className="inline-block w-3 h-0.5 bg-indigo-500"></span> f(x) = x³−3x+1
        </span>
        <span className="flex items-center gap-1">
          <span className="inline-block w-3 h-0.5 bg-red-400" style={{borderTop:'2px dashed'}}></span>
          <span className="text-red-500">recta tangente</span>
        </span>
      </div>
    </div>
  )
}
