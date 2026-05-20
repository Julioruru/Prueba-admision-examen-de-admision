import { useState } from 'react'

const SETS = [
  { id: 'R', label: 'ℝ', desc: 'Números Reales', color: '#e0e7ff', border: '#6366f1', x: 20, y: 20, w: 560, h: 280, rx: 20 },
  { id: 'Q', label: 'ℚ', desc: 'Racionales', color: '#dbeafe', border: '#3b82f6', x: 60, y: 50, w: 420, h: 220, rx: 16 },
  { id: 'Z', label: 'ℤ', desc: 'Enteros', color: '#dcfce7', border: '#22c55e', x: 100, y: 80, w: 280, h: 160, rx: 12 },
  { id: 'N', label: 'ℕ', desc: 'Naturales', color: '#fef9c3', border: '#eab308', x: 140, y: 110, w: 140, h: 100, rx: 8 },
]

const EXAMPLES = {
  N: ['0', '1', '5', '100'],
  Z: ['-3', '-1', '2'],
  Q: ['1/2', '-2/3', '0.75'],
  R: ['√2', 'π', 'e', '-√5'],
}

export default function NumberSets() {
  const [hovered, setHovered] = useState(null)
  const [selected, setSelected] = useState(null)

  const active = selected || hovered

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-4">
      <svg viewBox="0 0 600 320" className="w-full" style={{ maxHeight: 280 }}>
        {SETS.map(s => (
          <g key={s.id}
            onMouseEnter={() => setHovered(s.id)}
            onMouseLeave={() => setHovered(null)}
            onClick={() => setSelected(selected === s.id ? null : s.id)}
            style={{ cursor: 'pointer' }}>
            <rect
              x={s.x} y={s.y} width={s.w} height={s.h} rx={s.rx}
              fill={active === s.id ? s.border : s.color}
              fillOpacity={active === s.id ? 0.3 : 0.7}
              stroke={s.border}
              strokeWidth={active === s.id ? 2.5 : 1.5}
              style={{ transition: 'all 0.2s' }}
            />
            <text x={s.x + 10} y={s.y + 22} fontSize="18" fontWeight="bold" fill={s.border} fontFamily="serif">
              {s.label}
            </text>
          </g>
        ))}

        {/* Example numbers */}
        {Object.entries(EXAMPLES).map(([setId, nums]) => {
          const s = SETS.find(s => s.id === setId)
          return nums.map((n, i) => (
            <text key={`${setId}-${i}`}
              x={s.x + s.w - 20 - i * 40}
              y={s.y + s.h / 2 + 6}
              textAnchor="middle"
              fontSize="12"
              fill={s.border}
              fontFamily="monospace"
              fontWeight="600">
              {n}
            </text>
          ))
        })}

        {/* Inclusion arrows label */}
        <text x={300} y={308} textAnchor="middle" fontSize="11" fill="#64748b" fontFamily="sans-serif">
          ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ — haz clic en cada conjunto
        </text>
      </svg>

      {active && (
        <div className="mt-3 p-3 rounded-xl border text-sm animate-fade-in"
          style={{ borderColor: SETS.find(s => s.id === active)?.border,
                   background: SETS.find(s => s.id === active)?.color }}>
          <span className="font-bold" style={{ color: SETS.find(s => s.id === active)?.border }}>
            {SETS.find(s => s.id === active)?.label} — {SETS.find(s => s.id === active)?.desc}
          </span>
          <div className="mt-1 text-slate-600">
            {active === 'N' && 'Números para contar: {0, 1, 2, 3, ...}. Solo positivos (y 0).'}
            {active === 'Z' && 'Enteros: añade los negativos a ℕ. {..., -2, -1, 0, 1, 2, ...}'}
            {active === 'Q' && 'Racionales: todas las fracciones exactas a/b con a,b ∈ ℤ, b≠0.'}
            {active === 'R' && 'Reales: incluye irracionales como √2 y π. Cubre toda la recta numérica.'}
          </div>
        </div>
      )}
    </div>
  )
}
