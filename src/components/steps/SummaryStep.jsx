export default function SummaryStep({ step, onNext, onComplete, lessonTitle }) {
  return (
    <div className="animate-bounce-in text-center">
      <div className="text-6xl mb-4">🏆</div>
      <h2 className="text-3xl font-bold text-slate-800 mb-2">{step.title}</h2>
      <p className="text-slate-500 mb-8">Tema completado — aquí tienes lo esencial</p>

      <div className="card p-6 text-left mb-6 max-w-lg mx-auto">
        <h3 className="font-semibold text-slate-700 mb-4 flex items-center gap-2">
          <span className="w-6 h-6 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center text-xs">✓</span>
          Conceptos clave aprendidos:
        </h3>
        <ul className="space-y-3">
          {step.points.map((p, i) => (
            <li key={i} className="flex gap-3 items-start">
              <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center
                               justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                {i + 1}
              </span>
              <span className="text-sm text-slate-700 leading-relaxed">{p}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex gap-3 justify-center">
        <button onClick={() => { onComplete?.(); onNext?.() }}
          className="btn-primary px-8 py-3 text-base">
          Siguiente tema →
        </button>
      </div>
    </div>
  )
}
