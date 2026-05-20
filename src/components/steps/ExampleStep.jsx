import { useState } from 'react'
import TutorBubble from '../TutorBubble'
import ExamQuestion from '../ExamQuestion'

export default function ExampleStep({ step, onNext }) {
  const [revealed, setRevealed] = useState(0)
  const [whyOpen, setWhyOpen] = useState({})

  const toggleWhy = (i) => setWhyOpen(prev => ({ ...prev, [i]: !prev[i] }))
  const allRevealed = revealed >= step.steps.length

  return (
    <div className="animate-slide-up">
      <h2 className="text-2xl font-bold text-slate-800 mb-4">{step.title}</h2>

      {/* English exam question */}
      {step.examQuestion && (
        <ExamQuestion text={step.examQuestion} options={step.examOptions} />
      )}

      <TutorBubble message={step.tutorIntro} />

      {/* Step-by-step solution */}
      <div className="space-y-3">
        {step.steps.slice(0, revealed).map((s, i) => (
          <div key={i} className="card p-4 border-l-4 border-emerald-400 animate-slide-up">
            <div className="flex items-start justify-between gap-3">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 text-xs
                                   font-bold flex items-center justify-center flex-shrink-0">
                    {i + 1}
                  </span>
                  <code className="font-mono text-sm text-slate-800 bg-slate-50 px-2 py-0.5 rounded">
                    {s.expression}
                  </code>
                </div>
                <p className="text-sm text-slate-600 ml-8 leading-relaxed">{s.explanation}</p>
              </div>

              {s.whyExplanation && (
                <button onClick={() => toggleWhy(i)} className="btn-why flex-shrink-0">
                  🤔 ¿Por qué?
                </button>
              )}
            </div>

            {s.whyExplanation && whyOpen[i] && (
              <div className="mt-3 ml-8 p-3 bg-violet-50 border border-violet-100 rounded-xl
                              text-sm text-violet-800 animate-fade-in">
                {s.whyExplanation}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-4 flex items-center justify-between">
        {!allRevealed ? (
          <button onClick={() => setRevealed(r => r + 1)} className="btn-primary">
            Ver paso {revealed + 1} / {step.steps.length}
          </button>
        ) : (
          <button onClick={onNext} className="btn-primary">
            ¡Entendido! Continuar →
          </button>
        )}

        {revealed === 0 && (
          <p className="text-sm text-slate-400 italic">
            Pulsa para ver el primer paso de la solución
          </p>
        )}
        {revealed > 0 && !allRevealed && (
          <span className="text-sm text-slate-400">
            {revealed} de {step.steps.length} pasos
          </span>
        )}
      </div>
    </div>
  )
}
