import { useState, useMemo } from 'react'

const W = 500, H = 300, M = 40

function mathToSvg(mx, my, xR, yR) {
  const x = M + ((mx - xR[0]) / (xR[1] - xR[0])) * (W - 2 * M)
  const y = (H - M) - ((my - yR[0]) / (yR[1] - yR[0])) * (H - 2 * M)
  return [x, y]
}

function buildPath(fn, xR, yR, n = 400) {
  const segments = []
  let seg = []
  for (let i = 0; i <= n; i++) {
    const mx = xR[0] + (i / n) * (xR[1] - xR[0])
    const my = fn(mx)
    if (!isFinite(my) || my < yR[0] - (yR[1]-yR[0]) || my > yR[1] + (yR[1]-yR[0])) {
      if (seg.length > 1) segments.push(seg)
      seg = []
    } else {
      seg.push(mathToSvg(mx, my, xR, yR))
    }
  }
  if (seg.length > 1) segments.push(seg)
  return segments.map(s =>
    s.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p[0].toFixed(1)} ${p[1].toFixed(1)}`).join(' ')
  ).join(' ')
}

function gridTicks(range, step = 1) {
  const ticks = []
  for (let v = Math.ceil(range[0]); v <= range[1]; v += step) ticks.push(v)
  return ticks
}

export default function FunctionGrapher({ type = 'quadratic' }) {
  const [a, setA] = useState(1)
  const [b, setB] = useState(0)
  const [c, setC] = useState(0)

  const xR = [-5, 5]
  const yR = type === 'quadratic' ? [-4, 8] : [-2, 6]

  const fn = (x) => {
    if (type === 'quadratic') return a * x * x + b * x + c
    if (type === 'exponential') return a * Math.pow(Math.max(0.01, Math.abs(b || 1)), x) + c
    if (type === 'sine') return a * Math.sin((b || 1) * x) + c
    return x
  }

  const path = useMemo(() => buildPath(fn, xR, yR), [a, b, c, type])

  // Axis positions in SVG
  const [ox] = mathToSvg(0, 0, xR, yR)
  const [, oy] = mathToSvg(0, 0, xR, yR)
  const xTicks = gridTicks(xR)
  const yTicks = gridTicks(yR)

  // Vertex for quadratic
  let vertex = null
  if (type === 'quadratic' && Math.abs(a) > 0.01) {
    const xv = -b / (2 * a)
    const yv = fn(xv)
    if (xv >= xR[0] && xv <= xR[1]) {
      const [sx, sy] = mathToSvg(xv, yv, xR, yR)
      vertex = { xv, yv, sx, sy }
    }
  }

  const labels = {
    quadratic: `f(x) = ${a !== 0 ? (a === 1 ? '' : a === -1 ? '-' : a) : ''}x² ${b >= 0 ? '+' : ''}${b === 0 ? '' : b}x ${c >= 0 ? '+' : ''}${c === 0 ? '' : c}`.replace(/\+ -/g, '- ').replace(/\s+/g, ' ').trim(),
    exponential: `f(x) = ${a}·${Math.abs(b||1)}ˣ + ${c}`,
    sine: `f(x) = ${a}·sin(${b||1}x) + ${c}`,
  }

  const sliderConfig = {
    quadratic: [
      { label: 'a', val: a, set: setA, min: -3, max: 3, step: 0.1 },
      { label: 'b', val: b, set: setB, min: -5, max: 5, step: 0.1 },
      { label: 'c', val: c, set: setC, min: -4, max: 4, step: 0.1 },
    ],
    exponential: [
      { label: 'a', val: a, set: setA, min: -3, max: 3, step: 0.1 },
      { label: 'b', val: b, set: setB, min: 0.1, max: 3, step: 0.1 },
      { label: 'c', val: c, set: setC, min: -3, max: 3, step: 0.1 },
    ],
    sine: [
      { label: 'a', val: a, set: setA, min: -3, max: 3, step: 0.1 },
      { label: 'b', val: b, set: setB, min: 0.5, max: 4, step: 0.1 },
      { label: 'c', val: c, set: setC, min: -3, max: 3, step: 0.1 },
    ],
  }

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-4">
      <svg viewBox={`0 0 ${W} ${H}`} className="w-full" style={{ maxHeight: 260 }}>
        {/* Grid */}
        {xTicks.map(v => {
          const [sx] = mathToSvg(v, 0, xR, yR)
          return <line key={`gx${v}`} x1={sx} y1={M} x2={sx} y2={H-M} stroke="#f1f5f9" strokeWidth={v===0?0:1} />
        })}
        {yTicks.map(v => {
          const [, sy] = mathToSvg(0, v, xR, yR)
          return <line key={`gy${v}`} x1={M} y1={sy} x2={W-M} y2={sy} stroke="#f1f5f9" strokeWidth={v===0?0:1} />
        })}

        {/* Axes */}
        <line x1={M} y1={oy} x2={W-M} y2={oy} stroke="#cbd5e1" strokeWidth="1.5" />
        <line x1={ox} y1={M} x2={ox} y2={H-M} stroke="#cbd5e1" strokeWidth="1.5" />

        {/* Axis ticks and labels */}
        {xTicks.filter(v=>v!==0).map(v => {
          const [sx] = mathToSvg(v, 0, xR, yR)
          return <g key={`xt${v}`}>
            <line x1={sx} y1={oy-3} x2={sx} y2={oy+3} stroke="#94a3b8" />
            <text x={sx} y={oy+14} textAnchor="middle" fontSize="9" fill="#94a3b8">{v}</text>
          </g>
        })}
        {yTicks.filter(v=>v!==0 && v%2===0).map(v => {
          const [, sy] = mathToSvg(0, v, xR, yR)
          return <g key={`yt${v}`}>
            <line x1={ox-3} y1={sy} x2={ox+3} y2={sy} stroke="#94a3b8" />
            <text x={ox-6} y={sy+3} textAnchor="end" fontSize="9" fill="#94a3b8">{v}</text>
          </g>
        })}

        {/* Curve */}
        <path d={path} fill="none" stroke="#6366f1" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />

        {/* Vertex */}
        {vertex && (
          <g>
            <circle cx={vertex.sx} cy={vertex.sy} r={5} fill="#ef4444" stroke="white" strokeWidth="2" />
            <text x={vertex.sx + 8} y={vertex.sy - 6} fontSize="10" fill="#ef4444" fontFamily="monospace">
              ({vertex.xv.toFixed(1)}, {vertex.yv.toFixed(1)})
            </text>
          </g>
        )}

        {/* Axis labels */}
        <text x={W-M+4} y={oy+4} fontSize="11" fill="#94a3b8">x</text>
        <text x={ox+4} y={M-4} fontSize="11" fill="#94a3b8">y</text>
      </svg>

      {/* Sliders */}
      <div className="mt-3 space-y-2">
        {(sliderConfig[type] || []).map(s => (
          <div key={s.label} className="flex items-center gap-3">
            <span className="w-20 font-mono text-sm text-slate-700 font-medium">
              {s.label} = {s.val.toFixed(1)}
            </span>
            <input type="range" min={s.min} max={s.max} step={s.step}
              value={s.val} onChange={e => s.set(Number(e.target.value))}
              className="flex-1 accent-indigo-600" />
          </div>
        ))}
      </div>

      <p className="mt-2 text-center font-mono text-sm text-indigo-700 bg-indigo-50 rounded-lg py-1">
        {labels[type]}
      </p>
    </div>
  )
}
