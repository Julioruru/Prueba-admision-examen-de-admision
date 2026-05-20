import { useState } from 'react'
import TutorBubble from '../TutorBubble'
import ExamQuestion from '../ExamQuestion'
import NumberSets from '../interactive/NumberSets'
import VennDiagram from '../interactive/VennDiagram'
import FunctionGrapher from '../interactive/FunctionGrapher'
import DerivativeCanvas from '../interactive/DerivativeCanvas'
import Histogram from '../interactive/Histogram'
import VectorDiagram from '../interactive/VectorDiagram'

const VISUAL_MAP = {
  'number-sets': () => <NumberSets />,
  'venn-diagram': () => <VennDiagram />,
  'quadratic-grapher': () => <FunctionGrapher type="quadratic" />,
  'exponential-grapher': () => <FunctionGrapher type="exponential" />,
  'sine-grapher': () => <FunctionGrapher type="sine" />,
  'derivative-canvas': () => <DerivativeCanvas />,
  'histogram': () => <Histogram />,
  'vector-diagram': () => <VectorDiagram />,
}

export default function ExplanationStep({ step, onNext }) {
  const [showWhy, setShowWhy] = useState(false)
  const Visual = step.visual ? VISUAL_MAP[step.visual] : null

  return (
    <div className="animate-slide-up">
      <h2 className="text-2xl font-bold text-slate-800 mb-4">{step.title}</h2>

      <TutorBubble message={step.tutorMessage} />

      <div className="grid lg:grid-cols-2 gap-5">
        {/* English content block */}
        <div>
          <ExamQuestion text={step.content} />

          {step.whyExplanation && (
            <div className="card p-4">
              <button onClick={() => setShowWhy(w => !w)} className="btn-why">
                🤔 ¿Por qué es importante esto?
              </button>
              {showWhy && (
                <div className="mt-3 p-3 bg-violet-50 border border-violet-100 rounded-xl
                                text-sm text-violet-800 animate-fade-in leading-relaxed">
                  {step.whyExplanation}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Visual */}
        <div>
          {Visual ? <Visual /> : (
            <div className="card flex items-center justify-center h-40 text-slate-400">
              <span className="text-4xl">📊</span>
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
