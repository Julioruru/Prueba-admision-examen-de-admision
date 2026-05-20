export default function WelcomeStep({ step, onNext }) {
  const sessionDate = step.scheduledDate ? new Date(step.scheduledDate) : null
  const dateLabel = sessionDate
    ? sessionDate.toLocaleDateString('es-ES', { weekday: 'long', day: 'numeric', month: 'long' })
    : null

  return (
    <div className="animate-fade-in max-w-2xl mx-auto">
      {/* Session identity */}
      <div className="flex items-center gap-4 mb-6">
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-600
                        flex items-center justify-center text-white text-2xl font-black shadow-md">
          {step.sessionNumber ?? '★'}
        </div>
        <div>
          <div className="text-xs text-slate-400 font-semibold uppercase tracking-widest">
            {step.duration}
            {dateLabel && <span className="ml-2">· {dateLabel}</span>}
          </div>
          <h1 className="text-2xl font-bold text-slate-800 mt-0.5">{step.title}</h1>
        </div>
      </div>

      {/* Why it matters */}
      <div className="bg-slate-800 text-white rounded-2xl p-5 mb-5">
        <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
          ¿Por qué importa hoy?
        </p>
        <p className="text-sm leading-relaxed">{step.whyItMatters}</p>
      </div>

      {/* Agenda */}
      <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Lo que haremos</p>
      <div className="grid grid-cols-2 gap-2 mb-5">
        {(step.agenda || []).map((item, i) => (
          <div key={i}
            className="bg-white border border-slate-200 rounded-xl p-3 flex items-start gap-2.5
                       hover:border-indigo-200 transition-colors">
            <span className="text-xl leading-none mt-0.5">{item.icon}</span>
            <div>
              <div className="font-semibold text-slate-700 text-sm">{item.label}</div>
              <div className="text-xs text-slate-400 mt-0.5 leading-snug">{item.detail}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Exam tip */}
      {step.examTip && (
        <div className="border border-amber-200 bg-amber-50 rounded-xl p-4 mb-6">
          <div className="flex items-start gap-2">
            <span className="text-amber-500 mt-0.5">💡</span>
            <div>
              <p className="text-xs font-bold text-amber-700 mb-1">DATO DEL EXAMEN WU</p>
              <p className="text-sm text-amber-800 leading-relaxed">{step.examTip}</p>
            </div>
          </div>
        </div>
      )}

      <button
        onClick={onNext}
        className="w-full bg-gradient-to-r from-indigo-500 to-violet-600 text-white
                   rounded-xl py-4 font-bold text-base hover:shadow-lg transition-all
                   hover:-translate-y-0.5 active:translate-y-0">
        ¡Empezar sesión! →
      </button>
    </div>
  )
}
