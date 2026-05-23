import { useState } from 'react'

const DIFFICULTY = {
  easy:   { label: 'Fácil',   cls: 'bg-green-100 text-green-700' },
  medium: { label: 'Medio',   cls: 'bg-amber-100 text-amber-700' },
  hard:   { label: 'Difícil', cls: 'bg-red-100 text-red-700' },
}

const HINT_BUTTON = ['💡 Pista', '🔍 Más pista', '✅ Ver respuesta']

export default function SoloStep({ step, onNext, onComplete }) {
  const [hintLevel, setHintLevel] = useState(0)
  const [attempted, setAttempted] = useState(false)

  const hints    = step.hints    || []
  const solution = step.solution || []
  const diff     = DIFFICULTY[step.difficulty]

  const handleContinue = () => {
    onComplete?.()
    onNext?.()
  }

  const advanceHint = () => setHintLevel(h => Math.min(h + 1, 3))

  // What to show at each hint level
  const visibleHints = hintLevel === 1
    ? hints.slice(0, 1)
    : hintLevel >= 2
    ? hints
    : []

  const showSolution = hintLevel >= 3

  return (
    <div className="animate-slide-up">
      {/* Header badges */}
      <div className="flex items-center gap-2 flex-wrap mb-4">
        {step.examLabel && (
          <span className="bg-slate-800 text-white text-xs font-mono px-3 py-1 rounded-full">
            {step.examLabel}
          </span>
        )}
        {diff && (
          <span className={`text-xs font-semibold px-3 py-1 rounded-full ${diff.cls}`}>
            {diff.label}
          </span>
        )}
      </div>

      {/* Title */}
      <h2 className="text-xl font-bold text-slate-800 mb-4">{step.title}</h2>

      {/* English exam problem — dark bg */}
      {(step.problem || step.examQuestion) && (
        <div className="bg-slate-800 text-white rounded-xl p-5 mb-4 text-sm font-medium
                        leading-relaxed whitespace-pre-line font-mono">
          {step.problem || step.examQuestion}
        </div>
      )}

      {/* Spanish tutor intro */}
      {step.tutorIntro && (
        <div className="flex items-start gap-3 mb-4">
          <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center
                          text-base flex-shrink-0">👨‍🏫</div>
          <div className="bg-indigo-50 border border-indigo-100 rounded-xl rounded-tl-none
                          px-4 py-3 text-sm text-slate-700 leading-relaxed">
            {step.tutorIntro}
          </div>
        </div>
      )}

      {/* Gate */}
      {!attempted && (
        <div className="bg-slate-50 border border-dashed border-slate-300 rounded-xl p-5 text-center mb-2">
          <p className="text-slate-400 text-sm mb-3">
            ✏️ Resuelve en tu cuaderno. Cuando termines, comprueba tu respuesta.
          </p>
          <button onClick={() => setAttempted(true)} className="btn-secondary">
            Ya terminé — ver opciones
          </button>
        </div>
      )}

      {attempted && (
        <div className="space-y-3 animate-slide-up">
          {/* 3-level hint system */}
          <div className="card p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-semibold text-amber-700">Ayuda del tutor</span>
              <span className="text-xs text-slate-400">{Math.min(hintLevel, hints.length || 1)}/{Math.max(hints.length, 1)} pistas</span>
            </div>

            {/* Revealed hints */}
            {visibleHints.length > 0 && (
              <div className="space-y-2 mb-3">
                {visibleHints.map((h, i) => (
                  <div key={i} className={`p-3 rounded-lg text-sm animate-fade-in border
                    ${i === 0 ? 'bg-amber-50 border-amber-100 text-amber-800'
                              : 'bg-orange-50 border-orange-100 text-orange-800'}`}>
                    <span className="text-xs font-bold block mb-0.5 opacity-60">
                      {i === 0 ? 'Pista conceptual' : `Pista ${i + 1}`}
                    </span>
                    {h}
                  </div>
                ))}
              </div>
            )}

            {/* Solution reveal at level 3 */}
            {showSolution && (
              <div className="animate-slide-up">
                {step.answer && (
                  <div className="font-mono text-sm font-bold text-emerald-700 bg-emerald-50
                                  rounded-lg p-3 border border-emerald-100 mb-3 whitespace-pre-line">
                    ✅ {step.answer}
                  </div>
                )}
                <div className="space-y-2.5">
                  {solution.map((s, i) => (
                    <div key={i} className="flex gap-3 items-start">
                      <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 text-xs
                                       font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                        {i + 1}
                      </span>
                      <div>
                        <code className="text-sm text-slate-800 leading-relaxed">{s.expression}</code>
                        {s.explanation && (
                          <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">{s.explanation}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Hint button cycles through 3 levels */}
            {hintLevel < 3 && (
              <button onClick={advanceHint} className="btn-hint mt-2 text-sm w-full justify-center">
                {HINT_BUTTON[hintLevel]}
              </button>
            )}
          </div>

          <div className="flex justify-end pt-1">
            <button onClick={handleContinue} className="btn-primary">
              Continuar →
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
