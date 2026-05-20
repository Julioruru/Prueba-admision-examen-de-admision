import { useState, useEffect } from 'react'
import ExplanationStep from './steps/ExplanationStep'
import ExampleStep from './steps/ExampleStep'
import GuidedStep from './steps/GuidedStep'
import SoloStep from './steps/SoloStep'
import SummaryStep from './steps/SummaryStep'

const STEP_LABELS = {
  explanation: { label: 'Explicación', icon: '📖', color: 'bg-blue-100 text-blue-700' },
  example: { label: 'Ejemplo', icon: '👨‍🏫', color: 'bg-emerald-100 text-emerald-700' },
  guided: { label: 'Guiado', icon: '🤝', color: 'bg-amber-100 text-amber-700' },
  solo: { label: 'Solo', icon: '🎯', color: 'bg-rose-100 text-rose-700' },
  summary: { label: 'Resumen', icon: '✅', color: 'bg-indigo-100 text-indigo-700' },
}

const STEP_COMPONENTS = {
  explanation: ExplanationStep,
  example: ExampleStep,
  guided: GuidedStep,
  solo: SoloStep,
  summary: SummaryStep,
}

export default function LessonView({ lesson, topic, currentStep, onProgress, onComplete }) {
  const [stepIdx, setStepIdx] = useState(() => {
    const saved = currentStep?.step || 0
    return Math.min(saved, (topic?.steps?.length || 1) - 1)
  })

  useEffect(() => {
    setStepIdx(Math.min(currentStep?.step || 0, (topic?.steps?.length || 1) - 1))
  }, [topic?.id])

  if (!topic || !topic.steps?.length) return null

  const step = topic.steps[stepIdx]
  const StepComponent = STEP_COMPONENTS[step.type]
  const total = topic.steps.length
  const progress = ((stepIdx) / total) * 100

  const goNext = () => {
    const nextIdx = stepIdx + 1
    if (nextIdx < total) {
      setStepIdx(nextIdx)
      onProgress?.(nextIdx)
    }
  }

  const colorClasses = {
    emerald: 'from-emerald-500 to-teal-600',
    blue: 'from-blue-500 to-indigo-600',
    violet: 'from-violet-500 to-purple-600',
    indigo: 'from-indigo-500 to-blue-600',
    orange: 'from-orange-500 to-amber-600',
    red: 'from-red-500 to-rose-600',
    yellow: 'from-yellow-500 to-amber-500',
    teal: 'from-teal-500 to-cyan-600',
    pink: 'from-pink-500 to-rose-500',
  }

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className={`bg-gradient-to-r ${colorClasses[lesson.color] || 'from-indigo-500 to-blue-600'} text-white px-6 py-4`}>
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-2 text-white/70 text-sm mb-1">
            <span>{lesson.emoji}</span>
            <span>{lesson.title}</span>
            <span>›</span>
            <span className="text-white font-medium">{topic.title}</span>
          </div>

          {/* Step navigator */}
          <div className="flex items-center gap-2 mt-3">
            {topic.steps.map((s, i) => {
              const meta = STEP_LABELS[s.type] || {}
              const done = i < stepIdx
              const active = i === stepIdx
              return (
                <button key={i} onClick={() => i <= stepIdx && setStepIdx(i)}
                  className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium transition-all
                    ${active ? 'bg-white text-slate-800 shadow' : done ? 'bg-white/20 text-white' : 'bg-white/10 text-white/50'}`}>
                  <span>{meta.icon}</span>
                  <span className="hidden sm:inline">{meta.label}</span>
                </button>
              )
            })}
          </div>

          {/* Progress bar */}
          <div className="mt-3 h-1.5 bg-white/20 rounded-full overflow-hidden">
            <div className="h-full bg-white rounded-full transition-all duration-700"
              style={{ width: `${progress}%` }} />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 py-8">
        {StepComponent ? (
          <StepComponent
            step={step}
            onNext={goNext}
            onComplete={onComplete}
            lessonTitle={lesson.title}
          />
        ) : (
          <div className="text-slate-400">Tipo de paso desconocido: {step.type}</div>
        )}
      </div>
    </div>
  )
}
