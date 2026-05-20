import { useState, useEffect } from 'react'
import ExplanationStep   from './steps/ExplanationStep'
import ExampleStep       from './steps/ExampleStep'
import GuidedStep        from './steps/GuidedStep'
import SoloStep          from './steps/SoloStep'
import SummaryStep       from './steps/SummaryStep'
import WelcomeStep       from './steps/WelcomeStep'
import MultipleChoiceStep from './steps/MultipleChoiceStep'

const STEP_META = {
  welcome:          { label: 'Bienvenida', icon: '👋', color: 'bg-slate-100 text-slate-600' },
  explanation:      { label: 'Concepto',   icon: '📖', color: 'bg-blue-100 text-blue-700' },
  example:          { label: 'Ejemplo',    icon: '👨‍🏫', color: 'bg-emerald-100 text-emerald-700' },
  guided:           { label: 'Guiado',     icon: '✏️', color: 'bg-amber-100 text-amber-700' },
  'multiple-choice':{ label: 'Test',       icon: '🎯', color: 'bg-violet-100 text-violet-700' },
  solo:             { label: 'Examen',     icon: '🔥', color: 'bg-rose-100 text-rose-700' },
  summary:          { label: 'Resumen',    icon: '✅', color: 'bg-indigo-100 text-indigo-700' },
}

const STEP_COMPONENTS = {
  welcome:           WelcomeStep,
  explanation:       ExplanationStep,
  example:           ExampleStep,
  guided:            GuidedStep,
  'multiple-choice': MultipleChoiceStep,
  solo:              SoloStep,
  summary:           SummaryStep,
}

const COLOR_GRADIENT = {
  emerald: 'from-emerald-500 to-teal-600',
  blue:    'from-blue-500 to-indigo-600',
  violet:  'from-violet-500 to-purple-600',
  indigo:  'from-indigo-500 to-blue-600',
  orange:  'from-orange-500 to-amber-600',
  red:     'from-red-500 to-rose-600',
  yellow:  'from-yellow-400 to-amber-500',
  teal:    'from-teal-500 to-cyan-600',
  pink:    'from-pink-500 to-rose-500',
  slate:   'from-slate-600 to-slate-800',
  gold:    'from-yellow-500 to-orange-500',
}

export default function LessonView({ lesson, topic, currentStep, onProgress, onComplete }) {
  const [stepIdx, setStepIdx] = useState(() =>
    Math.min(currentStep?.step || 0, (topic?.steps?.length || 1) - 1)
  )

  useEffect(() => {
    setStepIdx(Math.min(currentStep?.step || 0, (topic?.steps?.length || 1) - 1))
  }, [topic?.id])

  if (!topic || !topic.steps?.length) return null

  const step      = topic.steps[stepIdx]
  const Component = STEP_COMPONENTS[step.type]
  const total     = topic.steps.length
  const progress  = (stepIdx / total) * 100
  const gradient  = COLOR_GRADIENT[lesson.color] || COLOR_GRADIENT.indigo

  const goNext = () => {
    const next = stepIdx + 1
    if (next < total) {
      setStepIdx(next)
      onProgress?.(next)
    } else {
      onComplete?.()
    }
  }

  return (
    <div className="min-h-screen">
      {/* Colored header */}
      <div className={`bg-gradient-to-r ${gradient} text-white px-6 py-4`}>
        <div className="max-w-3xl mx-auto">
          {/* Breadcrumb */}
          <div className="flex items-center gap-1.5 text-white/60 text-xs mb-2">
            <span>{lesson.emoji}</span>
            <span className="truncate max-w-[140px]">{lesson.title}</span>
            <span>›</span>
            <span className="text-white font-medium truncate">{topic.title}</span>
          </div>

          {/* Step pills */}
          <div className="flex items-center gap-1.5 flex-wrap">
            {topic.steps.map((s, i) => {
              const meta   = STEP_META[s.type] || {}
              const done   = i < stepIdx
              const active = i === stepIdx
              return (
                <button key={i}
                  onClick={() => i <= stepIdx && setStepIdx(i)}
                  className={`flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium
                              transition-all select-none
                    ${active ? 'bg-white text-slate-800 shadow'
                      : done  ? 'bg-white/20 text-white hover:bg-white/30 cursor-pointer'
                      : 'bg-white/10 text-white/40 cursor-default'}`}>
                  <span>{meta.icon}</span>
                  <span className="hidden sm:inline">{meta.label}</span>
                </button>
              )
            })}
          </div>

          {/* Progress bar */}
          <div className="mt-3 h-1 bg-white/20 rounded-full overflow-hidden">
            <div className="h-full bg-white rounded-full transition-all duration-700"
              style={{ width: `${progress}%` }} />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 py-8">
        {Component ? (
          <Component
            step={step}
            onNext={goNext}
            onComplete={onComplete}
            lessonTitle={lesson.title}
          />
        ) : (
          <div className="text-slate-400 text-sm">Tipo desconocido: {step.type}</div>
        )}
      </div>
    </div>
  )
}
