const COLOR_CARD = {
  emerald: 'from-emerald-50 to-teal-50 border-emerald-200 hover:border-emerald-400',
  blue: 'from-blue-50 to-indigo-50 border-blue-200 hover:border-blue-400',
  violet: 'from-violet-50 to-purple-50 border-violet-200 hover:border-violet-400',
  indigo: 'from-indigo-50 to-blue-50 border-indigo-200 hover:border-indigo-400',
  orange: 'from-orange-50 to-amber-50 border-orange-200 hover:border-orange-400',
  red: 'from-red-50 to-rose-50 border-red-200 hover:border-red-400',
  yellow: 'from-yellow-50 to-amber-50 border-yellow-200 hover:border-yellow-400',
  teal: 'from-teal-50 to-cyan-50 border-teal-200 hover:border-teal-400',
  pink: 'from-pink-50 to-rose-50 border-pink-200 hover:border-pink-400',
}

const COLOR_BADGE = {
  emerald: 'bg-emerald-100 text-emerald-700',
  blue: 'bg-blue-100 text-blue-700',
  violet: 'bg-violet-100 text-violet-700',
  indigo: 'bg-indigo-100 text-indigo-700',
  orange: 'bg-orange-100 text-orange-700',
  red: 'bg-red-100 text-red-700',
  yellow: 'bg-yellow-100 text-yellow-700',
  teal: 'bg-teal-100 text-teal-700',
  pink: 'bg-pink-100 text-pink-700',
}

export default function Home({ lessons, progress, onSelectTopic }) {
  const totalTopics = lessons.reduce((a, l) => a + l.topics.length, 0)
  const completedTopics = Object.values(progress).filter(p => p.completed).length

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      {/* Hero */}
      <div className="text-center mb-10">
        <div className="text-5xl mb-3">📐</div>
        <h1 className="text-4xl font-bold text-slate-800 mb-2">WU Math Tutor</h1>
        <p className="text-lg text-slate-500 mb-6">
          Tutor interactivo de matemáticas para el examen de WU Vienna
        </p>

        {/* Progress overview */}
        <div className="inline-flex items-center gap-4 bg-white border border-slate-200 rounded-2xl px-6 py-3 shadow-sm">
          <div>
            <div className="text-2xl font-bold text-indigo-600">{completedTopics}</div>
            <div className="text-xs text-slate-400">temas completados</div>
          </div>
          <div className="w-px h-10 bg-slate-200" />
          <div>
            <div className="text-2xl font-bold text-slate-700">{totalTopics}</div>
            <div className="text-xs text-slate-400">total de temas</div>
          </div>
          <div className="w-px h-10 bg-slate-200" />
          <div>
            <div className="text-2xl font-bold text-emerald-600">
              {Math.round((completedTopics / totalTopics) * 100)}%
            </div>
            <div className="text-xs text-slate-400">completado</div>
          </div>
        </div>
      </div>

      {/* How it works */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
        {[
          { icon: '📖', label: 'Explicación', desc: 'Visual + animaciones' },
          { icon: '👨‍🏫', label: 'Ejemplo', desc: 'El tutor resuelve' },
          { icon: '🤝', label: 'Guiado', desc: 'Completas huecos' },
          { icon: '🎯', label: 'Solo', desc: 'Tú resuelves' },
        ].map(s => (
          <div key={s.label} className="bg-white border border-slate-200 rounded-xl p-3 text-center">
            <div className="text-2xl mb-1">{s.icon}</div>
            <div className="font-semibold text-xs text-slate-700">{s.label}</div>
            <div className="text-xs text-slate-400">{s.desc}</div>
          </div>
        ))}
      </div>

      {/* Lesson cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {lessons.map(lesson => {
          const completed = lesson.topics.filter(t =>
            progress[`${lesson.id}/${t.id}`]?.completed
          ).length
          const pct = Math.round((completed / lesson.topics.length) * 100)

          return (
            <div key={lesson.id}
              className={`bg-gradient-to-br ${COLOR_CARD[lesson.color] || COLOR_CARD.indigo}
                          border rounded-2xl p-5 cursor-pointer transition-all duration-200
                          hover:shadow-md hover:-translate-y-0.5 group`}
              onClick={() => onSelectTopic(lesson.id, lesson.topics[0].id)}>

              <div className="flex items-start justify-between mb-3">
                <span className={`px-2 py-0.5 rounded-full text-xs font-mono font-bold
                  ${COLOR_BADGE[lesson.color] || COLOR_BADGE.indigo}`}>
                  {lesson.emoji}
                </span>
                {pct === 100 && <span className="text-emerald-500">✅</span>}
                {pct > 0 && pct < 100 && (
                  <span className="text-xs text-slate-400 font-medium">{pct}%</span>
                )}
              </div>

              <h3 className="font-bold text-slate-800 mb-1">{lesson.title}</h3>
              <p className="text-xs text-slate-500 mb-3 leading-relaxed">{lesson.description}</p>

              {/* Topics list */}
              <div className="space-y-1">
                {lesson.topics.map(t => {
                  const done = progress[`${lesson.id}/${t.id}`]?.completed
                  return (
                    <div key={t.id} className="flex items-center gap-2 text-xs text-slate-600">
                      <span className={done ? 'text-emerald-500' : 'text-slate-300'}>
                        {done ? '✓' : '○'}
                      </span>
                      {t.title}
                    </div>
                  )
                })}
              </div>

              {/* Progress bar */}
              {pct > 0 && (
                <div className="mt-3 h-1.5 bg-white/70 rounded-full overflow-hidden">
                  <div className={`h-full rounded-full transition-all ${
                    pct === 100 ? 'bg-emerald-500' : 'bg-indigo-500'
                  }`} style={{ width: `${pct}%` }} />
                </div>
              )}
            </div>
          )
        })}
      </div>

      <p className="text-center text-xs text-slate-400 mt-8">
        Progreso guardado automáticamente en este navegador
      </p>
    </div>
  )
}
