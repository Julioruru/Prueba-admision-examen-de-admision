import { useState } from 'react'

const W = 500, H = 280, M = 50
const SCALE = 35
const OX = W / 2, OY = H / 2

function toSvg(x, y) {
  return [OX + x * SCALE, OY - y * SCALE]
}

function Arrow({ from, to, color, label, dashed }) {
  const [x1, y1] = toSvg(...from)
  const [x2, y2] = toSvg(...to)
  const angle = Math.atan2(y2 - y1, x2 - x1)
  const arrowLen = 10
  const ax1 = x2 - arrowLen * Math.cos(angle - 0.4)
  const ay1 = y2 - arrowLen * Math.sin(angle - 0.4)
  const ax2 = x2 - arrowLen * Math.cos(angle + 0.4)
  const ay2 = y2 - arrowLen * Math.sin(angle + 0.4)

  return (
    <g>
      <line x1={x1} y1={y1} x2={x2} y2={y2}
        stroke={color} strokeWidth="2.5"
        strokeDasharray={dashed ? '6,3' : undefined}
        strokeLinecap="round" />
      <polygon points={`${x2},${y2} ${ax1},${ay1} ${ax2},${ay2}`} fill={color} />
      {label && (
        <text x={(x1+x2)/2 + 6} y={(y1+y2)/2 - 6} fontSize="12" fill={color} fontWeight="bold" fontFamily="monospace">
          {label}
        </text>
      )}
    </g>
  )
}

export default function VectorDiagram() {
  const [u, setU] = useState([2, 1])
  const [v, setV] = useState([1, 2])
  const [show, setShow] = useState('both') // 'both' | 'sum' | 'diff'

  const sum = [u[0]+v[0], u[1]+v[1]]
  const diff = [u[0]-v[0], u[1]-v[1]]
  const modU = Math.sqrt(u[0]**2+u[1]**2).toFixed(2)
  const modV = Math.sqrt(v[0]**2+v[1]**2).toFixed(2)

  const gridLines = [-4,-3,-2,-1,0,1,2,3,4]

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-4">
      <svg viewBox={`0 0 ${W} ${H}`} className="w-full" style={{ maxHeight: 250 }}>
        {/* Grid */}
        {gridLines.map(v => {
          const [gx] = toSvg(v, 0)
          const [, gy] = toSvg(0, v)
          return <g key={v}>
            <line x1={gx} y1={M} x2={gx} y2={H-M} stroke="#f1f5f9" strokeWidth="1" />
            <line x1={M} y1={gy} x2={W-M} y2={gy} stroke="#f1f5f9" strokeWidth="1" />
          </g>
        })}

        {/* Axes */}
        <line x1={M} y1={OY} x2={W-M} y2={OY} stroke="#cbd5e1" strokeWidth="1.5" />
        <line x1={OX} y1={M} x2={OX} y2={H-M} stroke="#cbd5e1" strokeWidth="1.5" />

        {/* Vectors */}
        <Arrow from={[0,0]} to={u} color="#6366f1" label="u" />
        <Arrow from={[0,0]} to={v} color="#ec4899" label="v" />

        {show === 'sum' && (
          <>
            <Arrow from={u} to={sum} color="#ec4899" dashed />
            <Arrow from={[0,0]} to={sum} color="#10b981" label="u+v" />
          </>
        )}
        {show === 'diff' && (
          <Arrow from={[0,0]} to={diff} color="#f59e0b" label="u−v" />
        )}

        {/* Origin */}
        <circle cx={OX} cy={OY} r={3} fill="#64748b" />
        <text x={OX+4} y={OY-4} fontSize="10" fill="#94a3b8">O</text>

        {/* Axis labels */}
        <text x={W-M+4} y={OY+4} fontSize="11" fill="#94a3b8">x</text>
        <text x={OX+4} y={M-2} fontSize="11" fill="#94a3b8">y</text>
      </svg>

      {/* Controls */}
      <div className="mt-3 grid grid-cols-2 gap-3">
        <div>
          <p className="text-xs font-semibold text-indigo-600 mb-1">u = ({u[0]}, {u[1]})</p>
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-xs w-8 text-slate-500">u₁</span>
              <input type="range" min={-4} max={4} step={0.5} value={u[0]}
                onChange={e => setU([Number(e.target.value), u[1]])}
                className="flex-1 accent-indigo-600" />
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs w-8 text-slate-500">u₂</span>
              <input type="range" min={-4} max={4} step={0.5} value={u[1]}
                onChange={e => setU([u[0], Number(e.target.value)])}
                className="flex-1 accent-indigo-600" />
            </div>
          </div>
        </div>
        <div>
          <p className="text-xs font-semibold text-pink-600 mb-1">v = ({v[0]}, {v[1]})</p>
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-xs w-8 text-slate-500">v₁</span>
              <input type="range" min={-4} max={4} step={0.5} value={v[0]}
                onChange={e => setV([Number(e.target.value), v[1]])}
                className="flex-1 accent-pink-500" />
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs w-8 text-slate-500">v₂</span>
              <input type="range" min={-4} max={4} step={0.5} value={v[1]}
                onChange={e => setV([v[0], Number(e.target.value)])}
                className="flex-1 accent-pink-500" />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-3 flex gap-2">
        {[['both','Solo u, v'],['sum','u + v'],['diff','u − v']].map(([k,l]) => (
          <button key={k} onClick={() => setShow(k)}
            className={`px-3 py-1 rounded-lg text-xs font-medium border transition-all
              ${show===k ? 'bg-indigo-600 text-white border-indigo-600' : 'bg-white text-slate-600 border-slate-200'}`}>
            {l}
          </button>
        ))}
      </div>

      <div className="mt-2 text-xs text-slate-500 font-mono flex gap-4">
        <span>|u| = {modU}</span>
        <span>|v| = {modV}</span>
        {show==='sum' && <span className="text-emerald-600">u+v = ({sum[0]}, {sum[1]})</span>}
        {show==='diff' && <span className="text-amber-600">u−v = ({diff[0]}, {diff[1]})</span>}
      </div>
    </div>
  )
}
