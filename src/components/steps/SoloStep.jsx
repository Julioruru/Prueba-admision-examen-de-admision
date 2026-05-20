import { useState } from 'react'
import TutorBubble from '../TutorBubble'
import ExamQuestion from '../ExamQuestion'

export default function SoloStep({ step, onNext }) {
  const [hintsRevealed, setHintsRevealed] = useState(0)
  const [showSolution, setShowSolution] = useState(false)
  const [attempted, setAttempted] = useState(false)
  const hints = step.hints || []
  const solution = step.solution || []

  return (
    <div className="animate-slide-up">
      <h2 className="text-2xl font-bold text-slate-800 mb-4">{step.title}</h2>

      {/* English exam question — primary focus */}
      {step.examQuestion && (
        <ExamQuestion text={step.examQuestion} options={step.examOptions} />
      )}

      <TutorBubble message={step.tutorIntro} />

      {!attempted && (
        <div className="bg-slate-50 border border-dashed border-slate-300 rounded-xl p-5 mb-4 text-center">
          <p className="text-slate-500 text-sm mb-3">
            ✏️ Resuelve el ejercicio en tu cuaderno. Cuando termines, comprueba tu respuesta.
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
                <span className="text-sm font-semibold text-amber-700">💡 Hints del tutor</span>
                <span className="text-xs text-slate-400">{hintsRevealed}/{hints.length} revelados</span>
              </div>
              <div className="space-y-2">
                {hints.slice(0, hintsRevealed).map((h, i) => (
                  <div key={i} className="p-2 bg-amber-50 border border-amber-100 rounded-lg
                                          text-sm text-amber-800 animate-fade-in">
                    <span className="font-semibold text-xs text-amber-500 block mb-0.5">Hint {i + 1}</span>
                    {h}
                  </div>
                ))}
              </div>
              {hintsRevealed < hints.length && (
                <button onClick={() => setHintsRevealed(h => h + 1)} className="btn-hint mt-2">
                  💡 Mostrar hint {hintsRevealed + 1}
                </button>
              )}
            </div>
          )}

          {/* Solution */}
          {!showSolution ? (
            <button onClick={() => setShowSolution(true)} className="btn-secondary w-full justify-center">
              👁 Ver solución completa
            </button>
          ) : (
            <div className="card p-4 border-emerald-200 animate-slide-up">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-emerald-600 font-semibold text-sm">✅ Solución</span>
              </div>
              <div className="font-mono text-sm font-bold text-emerald-700 bg-emerald-50
                              rounded-lg p-3 border border-emerald-100 mb-3">
                {step.answer}
              </div>
              <div className="space-y-2">
                {solution.map((s, i) => (
                  <div key={i} className="flex gap-3 items-start">
                    <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 text-xs
                                     font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    <div>
                      <code className="text-sm text-slate-800">{s.expression}</code>
                      {s.explanation && (
                        <p className="text-xs text-slate-500 mt-0.5">{s.explanation}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="flex justify-end pt-2">
            <button onClick={onNext} className="btn-primary">Continuar →</button>
          </div>
        </div>
      )}
    </div>
  )
}
