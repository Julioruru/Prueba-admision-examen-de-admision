import { useState } from 'react'
import NumberSets        from '../interactive/NumberSets'
import VennDiagram       from '../interactive/VennDiagram'
import FunctionGrapher   from '../interactive/FunctionGrapher'
import DerivativeCanvas  from '../interactive/DerivativeCanvas'
import Histogram         from '../interactive/Histogram'
import VectorDiagram     from '../interactive/VectorDiagram'

const VISUAL_MAP = {
  'number-sets':        () => <NumberSets />,
  'venn-diagram':       () => <VennDiagram />,
  'quadratic-grapher':  () => <FunctionGrapher type="quadratic" />,
  'exponential-grapher':() => <FunctionGrapher type="exponential" />,
  'sine-grapher':       () => <FunctionGrapher type="sine" />,
  'derivative-canvas':  () => <DerivativeCanvas />,
  'histogram':          () => <Histogram />,
  'vector-diagram':     () => <VectorDiagram />,
}

export default function ExplanationStep({ step, onNext }) {
  const [showWhy, setShowWhy] = useState(false)
  const Visual = step.visual ? VISUAL_MAP[step.visual] : null

  return (
    <div className="animate-slide-up">
      <h2 className="text-2xl font-bold text-slate-800 mb-4">{step.title}</h2>

      {/* Tutor bubble */}
      {step.tutorMessage && (
        <div className="flex items-start gap-3 mb-5">
          <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center
                          text-base flex-shrink-0">👨‍🏫</div>
          <div className="bg-indigo-50 border border-indigo-100 rounded-xl rounded-tl-none
                          px-4 py-3 text-sm text-slate-700 leading-relaxed">
            {step.tutorMessage}
          </div>
        </div>
      )}

      <div className="grid lg:grid-cols-2 gap-5">
        {/* Left: content */}
        <div className="space-y-4">
          {/* Key points (preferred over wall of text) */}
          {step.keyPoints ? (
            <div className="space-y-2">
              {step.keyPoints.map((pt, i) => (
                <div key={i} className="flex items-start gap-3 p-3 bg-slate-50 rounded-xl border border-slate-100">
                  <div className="w-6 h-6 rounded-lg bg-indigo-100 text-indigo-700 text-xs font-bold
                                  flex items-center justify-center flex-shrink-0 mt-0.5">
                    {i + 1}
                  </div>
                  <div>
                    <code className="text-sm font-mono font-semibold text-slate-800">{pt.label}</code>
                    {pt.detail && (
                      <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">{pt.detail}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : step.content ? (
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
              <pre className="text-sm text-slate-700 whitespace-pre-wrap font-sans leading-relaxed">
                {step.content}
              </pre>
            </div>
          ) : null}

          {/* Formula glossary — variable tooltip legend */}
          {step.formulaGlossary && (
            <div className="border border-blue-100 bg-blue-50 rounded-xl p-4">
              <p className="text-xs font-bold text-blue-600 uppercase tracking-wide mb-2">
                Glosario de fórmula
              </p>
              <div className="flex flex-wrap gap-2">
                {step.formulaGlossary.map((item, i) => (
                  <div key={i}
                    className="flex items-center gap-1.5 bg-white border border-blue-100
                               rounded-lg px-2.5 py-1.5 shadow-sm">
                    <code className="text-xs font-mono font-bold text-blue-700">{item.symbol}</code>
                    <span className="text-slate-400 text-xs">→</span>
                    <span className="text-xs text-slate-600">{item.meaning}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Why important (collapsible) */}
          {step.whyExplanation && (
            <div>
              <button onClick={() => setShowWhy(w => !w)} className="btn-why">
                🤔 ¿Por qué aparece en WU?
              </button>
              {showWhy && (
                <div className="mt-2 p-3 bg-violet-50 border border-violet-100 rounded-xl
                                text-sm text-violet-800 animate-fade-in leading-relaxed">
                  {step.whyExplanation}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Right: visual */}
        <div>
          {Visual ? <Visual /> : (
            <div className="card flex items-center justify-center h-44 text-slate-300">
              <span className="text-5xl">📊</span>
            </div>
          )}
        </div>
      </div>

      <div className="mt-6 flex justify-end">
        <button onClick={onNext} className="btn-primary">
          Continuar →
        </button>
      </div>
    </div>
  )
}
