import { useState } from 'react'

const DIFFICULTY = {
  easy:   { label: 'Fácil',   cls: 'bg-green-100 text-green-700' },
  medium: { label: 'Medio',   cls: 'bg-amber-100 text-amber-700' },
  hard:   { label: 'Difícil', cls: 'bg-red-100 text-red-700' },
}

export default function SoloStep({ step, onNext, onComplete }) {
  const [hintsRevealed, setHintsRevealed] = useState(0)
  const [showSolution,  setShowSolution]  = useState(false)
  const [attempted,     setAttempted]     = useState(false)

  const hints    = step.hints    || []
  const solution = step.solution || []
  const diff     = DIFFICULTY[step.difficulty]

  const handleContinue = () => {
    onComplete?.()
    onNext?.()
  }

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
      {step.problem && (
        <div className="bg-slate-800 text-white rounded-xl p-5 mb-4 text-sm font-medium
                        leading-relaxed whitespace-pre-line font-mono">
          {step.problem}
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
          {/* Hints */}
          {hints.length > 0 && (
            <div className="card p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-semibold text-amber-700">💡 Pistas del tutor</span>
                <span className="text-xs text-slate-400">{hintsRevealed}/{hints.length}</span>
              </div>
              <div className="space-y-2">
                {hints.slice(0, hintsRevealed).map((h, i) => (
                  <div key={i} className="p-3 bg-amber-50 border border-amber-100 rounded-lg
                                          text-sm text-amber-800 animate-fade-in">
                    <span className="text-xs font-bold text-amber-500 block mb-0.5">Pista {i + 1}</span>
                    {h}
                  </div>
                ))}
              </div>
              {hintsRevealed < hints.length && (
                <button onClick={() => setHintsRevealed(h => h + 1)} className="btn-hint mt-2 text-sm">
                  💡 Mostrar pista {hintsRevealed + 1}
                </button>
              )}
            </div>
          )}

          {/* Solution reveal */}
          {!showSolution ? (
            <button onClick={() => setShowSolution(true)} className="btn-secondary w-full justify-center">
              👁 Ver solución completa
            </button>
          ) : (
            <div className="card p-4 border-emerald-200 animate-slide-up">
              <div className="text-sm font-semibold text-emerald-600 mb-2">✅ Solución</div>
              {step.answer && (
                <div className="font-mono text-sm font-bold text-emerald-700 bg-emerald-50
                                rounded-lg p-3 border border-emerald-100 mb-3 whitespace-pre-line">
                  {step.answer}
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
