import { useState } from 'react'

const DIFFICULTY_BADGE = {
  easy:   'bg-green-100 text-green-700',
  medium: 'bg-amber-100 text-amber-700',
  hard:   'bg-red-100 text-red-700',
}

export default function MultipleChoiceStep({ step, onNext, onComplete }) {
  const [selected, setSelected] = useState(new Set())
  const [submitted, setSubmitted] = useState(false)

  const isMulti = (step.correctCount || 1) > 1
  const options = step.options || []
  const correctIds = new Set(options.filter(o => o.correct).map(o => o.id))

  const toggle = (id) => {
    if (submitted) return
    if (isMulti) {
      const next = new Set(selected)
      next.has(id) ? next.delete(id) : next.add(id)
      setSelected(next)
    } else {
      // Single-select: auto-submit on click
      setSelected(new Set([id]))
      setSubmitted(true)
    }
  }

  const submit = () => setSubmitted(true)

  const allCorrect =
    [...selected].every(id => correctIds.has(id)) &&
    [...correctIds].every(id => selected.has(id))

  const handleContinue = () => {
    onComplete?.()
    onNext?.()
  }

  return (
    <div className="animate-slide-up">
      {/* Tags row */}
      <div className="flex items-center gap-2 mb-4 flex-wrap">
        {step.examLabel && (
          <span className="bg-slate-800 text-white text-xs font-mono px-3 py-1 rounded-full">
            {step.examLabel}
          </span>
        )}
        {step.difficulty && (
          <span className={`text-xs font-semibold px-3 py-1 rounded-full ${DIFFICULTY_BADGE[step.difficulty] || DIFFICULTY_BADGE.easy}`}>
            {step.difficulty === 'easy' ? 'Fácil' : step.difficulty === 'medium' ? 'Medio' : 'Difícil'}
          </span>
        )}
        <span className="text-xs text-slate-400 bg-slate-100 px-3 py-1 rounded-full">
          {isMulti ? `Selecciona ${step.correctCount}` : 'Selecciona 1'}
        </span>
      </div>

      {/* Question block — English, dark bg like the real exam */}
      <div className="bg-slate-800 text-white rounded-xl p-5 mb-4 leading-relaxed whitespace-pre-line text-sm font-medium">
        {step.question}
      </div>

      {/* Options */}
      <div className="space-y-2 mb-4">
        {options.map(opt => {
          const isSelected = selected.has(opt.id)
          const showCorrect = submitted && opt.correct
          const showWrong   = submitted && isSelected && !opt.correct
          const showFaded   = submitted && !opt.correct && !isSelected

          const border = showCorrect ? 'border-green-400 bg-green-50'
            : showWrong  ? 'border-red-400 bg-red-50'
            : showFaded  ? 'border-slate-100 bg-slate-50 opacity-50'
            : isSelected ? 'border-indigo-400 bg-indigo-50'
            : 'border-slate-200 bg-white hover:border-indigo-200'

          const circle = showCorrect ? 'bg-green-500 border-green-500 text-white'
            : showWrong  ? 'bg-red-500 border-red-500 text-white'
            : isSelected ? 'bg-indigo-500 border-indigo-500 text-white'
            : 'border-slate-300 bg-white'

          return (
            <button key={opt.id} onClick={() => toggle(opt.id)}
              disabled={submitted}
              className={`w-full text-left p-4 rounded-xl border-2 transition-all ${border}`}>
              <div className="flex items-start gap-3">
                {/* Indicator dot */}
                <div className={`w-5 h-5 rounded border-2 flex-shrink-0 mt-0.5 flex items-center
                                justify-center text-xs font-bold transition-all ${circle}`}>
                  {showCorrect ? '✓' : showWrong ? '✗' : isSelected && !submitted ? '✓' : ''}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-slate-800 leading-relaxed">{opt.text}</p>
                  {submitted && opt.explanation && (
                    <p className={`text-xs mt-1.5 leading-relaxed ${
                      opt.correct ? 'text-green-700' : isSelected ? 'text-red-700' : 'text-slate-400'
                    }`}>
                      {opt.explanation}
                    </p>
                  )}
                </div>
              </div>
            </button>
          )
        })}
      </div>

      {/* Submit (multi-select only) */}
      {isMulti && !submitted && (
        <button onClick={submit}
          disabled={selected.size === 0}
          className="btn-primary w-full mb-4 disabled:opacity-40 disabled:cursor-not-allowed">
          Comprobar respuesta ({selected.size}/{step.correctCount} seleccionadas)
        </button>
      )}

      {/* Result banner + continue */}
      {submitted && (
        <div className="animate-slide-up space-y-3">
          <div className={`rounded-xl p-4 border ${
            allCorrect ? 'bg-green-50 border-green-200' : 'bg-orange-50 border-orange-200'
          }`}>
            <p className="font-bold text-sm mb-1">{allCorrect ? '🎉 ¡Correcto!' : '📝 Repasemos...'}</p>
            {step.tutorExplanation && (
              <p className="text-sm leading-relaxed">{step.tutorExplanation}</p>
            )}
          </div>
          <button onClick={handleContinue} className="btn-primary w-full">
            Continuar →
          </button>
        </div>
      )}
    </div>
  )
}
