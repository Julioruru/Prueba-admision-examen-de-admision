import { useState } from 'react'
import TutorBubble from '../TutorBubble'
import ExamQuestion from '../ExamQuestion'

function normalize(s) {
  return s
    .trim()
    .toLowerCase()
    .replace(/[−–—]/g, '-')   // Unicode minus / dashes → ASCII hyphen
    .replace(/\s+/g, '')
    .replace(/[×·]/g, '*')
    .replace(/[÷]/g, '/')
}

// True only when the entire normalized string is a plain decimal number (no letters/operators).
function isNumeric(s) {
  const cleaned = s.replace(',', '.')
  return /^-?\d+(\.\d+)?$/.test(cleaned) && isFinite(parseFloat(cleaned))
}

function checkAnswer(input, expected) {
  const norm = normalize(input)
  const exp  = normalize(expected)

  // Exact-match variants: original, no braces, decimal-separator swap
  const alts = [
    exp,
    exp.replace(/[{}]/g, ''),
    exp.replace(/\./g, ','),
    exp.replace(/,/g, '.'),
  ]
  if (alts.some(a => norm === a)) return true

  // Numeric tolerance (±0.01) – only when both sides are pure numbers
  const normDot = norm.replace(',', '.')
  const expDot  = exp.replace(',', '.')
  if (isNumeric(normDot) && isNumeric(expDot)) {
    return Math.abs(parseFloat(normDot) - parseFloat(expDot)) <= 0.01
  }

  return false
}

const HINT_LEVELS = [
  { label: '💡 Pista',       bg: 'bg-amber-50',   border: 'border-amber-200',   text: 'text-amber-800'   },
  { label: '🔍 Más pista',   bg: 'bg-orange-50',  border: 'border-orange-200',  text: 'text-orange-800'  },
  { label: '✅ Ver respuesta', bg: 'bg-emerald-50', border: 'border-emerald-200', text: 'text-emerald-800' },
]

function GapInput({ gap, stepExplanation, onCorrect }) {
  const [val, setVal] = useState('')
  const [status, setStatus] = useState('idle')
  const [hintLevel, setHintLevel] = useState(0)
  const [showExpected, setShowExpected] = useState(false)

  const check = () => {
    if (!val.trim()) return
    if (checkAnswer(val, gap.answer)) {
      setStatus('correct')
      onCorrect()
    } else {
      setStatus('incorrect')
      setShowExpected(true)
      setTimeout(() => setStatus('idle'), 900)
    }
  }

  const handleChange = (e) => {
    setVal(e.target.value)
    setShowExpected(false)
  }

  if (status === 'correct') {
    return (
      <span className="inline-flex items-center gap-1 mx-1 px-2 py-0.5 bg-emerald-50
                       border border-emerald-300 rounded font-mono text-sm text-emerald-700 font-bold">
        ✓ {gap.answer}
      </span>
    )
  }

  // Build popup content and styling
  const hintContent = hintLevel === 1
    ? stepExplanation
    : hintLevel === 2
    ? gap.hint
    : hintLevel === 3
    ? `La respuesta es: ${gap.answer}. ${gap.hint}`
    : null

  let popupCls = ''
  let popupBody = null

  if (hintLevel > 0) {
    const h = HINT_LEVELS[hintLevel - 1]
    popupCls = `${h.bg} ${h.border} ${h.text}`
    popupBody = (
      <>
        {hintLevel === 3 && <span className="font-bold block mb-0.5">Respuesta:</span>}
        {hintContent}
        {showExpected && (
          <span className="block mt-1 pt-1 border-t border-red-300 text-red-700">
            El programa esperaba: <strong>{gap.answer}</strong>
          </span>
        )}
      </>
    )
  } else if (showExpected) {
    popupCls = 'bg-red-50 border-red-200 text-red-700'
    popupBody = <>El programa esperaba: <strong>{gap.answer}</strong></>
  }

  const showPopup = hintLevel > 0 || showExpected

  return (
    <span className="inline-flex items-center gap-1 relative">
      <input type="text" value={val} placeholder={gap.placeholder}
        onChange={handleChange}
        onKeyDown={e => e.key === 'Enter' && check()}
        className={`input-gap ${status === 'incorrect' ? 'incorrect' : ''}`} />
      <button onClick={check}
        className="px-1.5 py-0.5 text-xs bg-indigo-100 text-indigo-700 rounded hover:bg-indigo-200 transition-colors">
        ✓
      </button>
      {hintLevel < 3 && (
        <button
          onClick={() => {
            if (hintLevel === 2) {
              setStatus('correct')
              onCorrect()
            } else {
              setHintLevel(h => h + 1)
            }
          }}
          className="btn-hint text-xs py-0.5 px-1.5 whitespace-nowrap">
          {HINT_LEVELS[hintLevel].label}
        </button>
      )}
      {showPopup && (
        <span className={`absolute top-8 left-0 z-20 p-2 rounded-lg text-xs shadow-lg w-52
                          animate-fade-in whitespace-normal border ${popupCls}`}>
          {popupBody}
        </span>
      )}
    </span>
  )
}

export default function GuidedStep({ step, onNext }) {
  const totalGaps = step.steps.reduce((acc, s) => acc + s.gaps.length, 0)
  const [correct, setCorrect] = useState(0)
  const [stepIdx, setStepIdx] = useState(0)
  const allDone = correct >= totalGaps

  return (
    <div className="animate-slide-up">
      <h2 className="text-2xl font-bold text-slate-800 mb-4">{step.title}</h2>

      {/* English exam question */}
      {step.examQuestion && (
        <ExamQuestion text={step.examQuestion} options={step.examOptions} />
      )}

      <TutorBubble message={step.tutorIntro} />

      {/* Progress bar */}
      <div className="mb-4 flex items-center gap-3">
        <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
          <div className="h-full bg-amber-400 rounded-full transition-all duration-500"
            style={{ width: `${(correct / totalGaps) * 100}%` }} />
        </div>
        <span className="text-sm text-slate-500 font-mono">{correct}/{totalGaps}</span>
      </div>

      <div className="space-y-4">
        {step.steps.map((s, i) => {
          const isActive = i <= stepIdx
          return (
            <div key={i} className={`card p-4 transition-all duration-300
              ${isActive ? 'border-amber-200 bg-amber-50/30' : 'opacity-40 pointer-events-none'}`}>
              <div className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-700 text-xs
                                 font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                  {i + 1}
                </span>
                <div className="flex-1 min-w-0">
                  {/* Spanish tutor commentary */}
                  <p className="text-sm text-slate-600 mb-2 italic">{s.explanation}</p>

                  {/* Problem display with gaps (English format) */}
                  <div className="font-mono text-sm text-slate-800 leading-8 flex flex-wrap items-center gap-y-2">
                    {s.display.split('___').map((part, j, arr) => {
                      const gap = s.gaps[j]
                      return (
                        <span key={j} className="inline-flex items-center flex-wrap">
                          <span>{part}</span>
                          {j < arr.length - 1 && gap && (
                            <GapInput
                              gap={gap}
                              stepExplanation={s.explanation}
                              onCorrect={() => {
                                setCorrect(c => c + 1)
                                if (i === stepIdx && stepIdx < step.steps.length - 1) {
                                  setTimeout(() => setStepIdx(idx => idx + 1), 400)
                                }
                              }}
                            />
                          )}
                        </span>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {allDone && (
        <div className="mt-5 animate-bounce-in">
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 text-center mb-4">
            <span className="text-2xl">🎉</span>
            <p className="text-emerald-700 font-semibold mt-1">¡Perfecto! Completaste todos los huecos correctamente.</p>
          </div>
          <div className="flex justify-end">
            <button onClick={onNext} className="btn-primary">Continuar →</button>
          </div>
        </div>
      )}
    </div>
  )
}
