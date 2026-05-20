import { useState } from 'react'

const W = 500, H = 260
const CX_A = 180, CX_B = 320, CY = 120, R = 110

const OPERATIONS = [
  { id: 'A', label: 'A', desc: 'Conjunto A' },
  { id: 'B', label: 'B', desc: 'Conjunto B' },
  { id: 'union', label: 'A ∪ B', desc: 'Unión: todo lo de A o B' },
  { id: 'intersection', label: 'A ∩ B', desc: 'Intersección: solo lo común' },
  { id: 'diffAB', label: 'A \\ B', desc: 'Diferencia: A sin B' },
  { id: 'diffBA', label: 'B \\ A', desc: 'Diferencia: B sin A' },
]

function getRegionColor(region, op) {
  const map = {
    A: { left: '#6366f1', inter: '#6366f1', right: 'none' },
    B: { left: 'none', inter: '#6366f1', right: '#6366f1' },
    union: { left: '#6366f1', inter: '#6366f1', right: '#6366f1' },
    intersection: { left: 'none', inter: '#f59e0b', right: 'none' },
    diffAB: { left: '#ef4444', inter: 'none', right: 'none' },
    diffBA: { left: 'none', inter: 'none', right: '#10b981' },
  }
  return op ? (map[op]?.[region] || 'none') : 'none'
}

export default function VennDiagram() {
  const [op, setOp] = useState('union')

  const leftColor = getRegionColor('left', op)
  const interColor = getRegionColor('inter', op)
  const rightColor = getRegionColor('right', op)

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-4">
      <svg viewBox={`0 0 ${W} ${H}`} className="w-full" style={{ maxHeight: 240 }}>
        <defs>
          {/* Mask for left-only region (A minus intersection) */}
          <mask id="maskLeft">
            <circle cx={CX_A} cy={CY} r={R} fill="white" />
            <circle cx={CX_B} cy={CY} r={R} fill="black" />
          </mask>
          {/* Mask for right-only region */}
          <mask id="maskRight">
            <circle cx={CX_B} cy={CY} r={R} fill="white" />
            <circle cx={CX_A} cy={CY} r={R} fill="black" />
          </mask>
          {/* Clip for intersection */}
          <clipPath id="clipInter">
            <circle cx={CX_A} cy={CY} r={R} />
          </clipPath>
        </defs>

        {/* Background */}
        <rect x={10} y={10} width={W-20} height={H-30} rx={12} fill="#f8fafc" stroke="#e2e8f0" />

        {/* Left-only region (A \ B) */}
        {leftColor !== 'none' && (
          <circle cx={CX_A} cy={CY} r={R} fill={leftColor} fillOpacity={0.35} mask="url(#maskLeft)"
            style={{ transition: 'fill 0.2s' }} />
        )}

        {/* Right-only region (B \ A) */}
        {rightColor !== 'none' && (
          <circle cx={CX_B} cy={CY} r={R} fill={rightColor} fillOpacity={0.35} mask="url(#maskRight)"
            style={{ transition: 'fill 0.2s' }} />
        )}

        {/* Intersection region */}
        {interColor !== 'none' && (
          <circle cx={CX_B} cy={CY} r={R} fill={interColor} fillOpacity={0.5}
            clipPath="url(#clipInter)" style={{ transition: 'fill 0.2s' }} />
        )}

        {/* Circle outlines */}
        <circle cx={CX_A} cy={CY} r={R} fill="none" stroke="#6366f1" strokeWidth="2" />
        <circle cx={CX_B} cy={CY} r={R} fill="none" stroke="#ec4899" strokeWidth="2" />

        {/* Labels */}
        <text x={CX_A - 60} y={CY - R + 20} fontSize="22" fontWeight="bold" fill="#6366f1" fontFamily="serif">A</text>
        <text x={CX_B + 45} y={CY - R + 20} fontSize="22" fontWeight="bold" fill="#ec4899" fontFamily="serif">B</text>

        {/* Example content */}
        <text x={CX_A - 55} y={CY + 5} fontSize="11" fill="#4f46e5" fontFamily="monospace">1, 2</text>
        <text x={CX_A + CX_B - 50} y={CY + 5} fontSize="11" fill="#7c3aed" textAnchor="middle" fontFamily="monospace">3, 4</text>
        <text x={CX_B + 20} y={CY + 5} fontSize="11" fill="#be185d" fontFamily="monospace">5, 6</text>

        {/* Ω label */}
        <text x={22} y={28} fontSize="13" fill="#94a3b8" fontFamily="serif">Ω</text>

        {/* Bottom description */}
        <text x={W/2} y={H-8} textAnchor="middle" fontSize="11" fill="#64748b" fontFamily="sans-serif">
          {OPERATIONS.find(o => o.id === op)?.desc || ''}
        </text>
      </svg>

      {/* Operation buttons */}
      <div className="mt-3 flex flex-wrap gap-2">
        {OPERATIONS.map(o => (
          <button key={o.id} onClick={() => setOp(o.id)}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all
              ${op === o.id
                ? 'bg-indigo-600 text-white border-indigo-600'
                : 'bg-white text-slate-600 border-slate-200 hover:border-indigo-300'}`}>
            {o.label}
          </button>
        ))}
      </div>
    </div>
  )
}
