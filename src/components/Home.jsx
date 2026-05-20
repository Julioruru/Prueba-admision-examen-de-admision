const EXAM_DATE = new Date('2026-06-20')

const COLOR_DOT = {
  emerald: 'bg-emerald-400', blue:   'bg-blue-400',   violet: 'bg-violet-400',
  indigo:  'bg-indigo-400',  orange: 'bg-orange-400', red:    'bg-red-400',
  yellow:  'bg-yellow-400',  teal:   'bg-teal-400',   pink:   'bg-pink-400',
  slate:   'bg-slate-400',   gold:   'bg-yellow-500',
}
const COLOR_RING = {
  emerald: 'ring-emerald-300', blue:   'ring-blue-300',   violet: 'ring-violet-300',
  indigo:  'ring-indigo-300',  orange: 'ring-orange-300', red:    'ring-red-300',
  yellow:  'ring-yellow-300',  teal:   'ring-teal-300',   pink:   'ring-pink-300',
  slate:   'ring-slate-300',   gold:   'ring-yellow-400',
}

function daysUntil(dateStr) {
  if (!dateStr) return null
  const d = Math.ceil((new Date(dateStr) - new Date()) / 86400000)
  return d
}

function formatDate(dateStr) {
  if (!dateStr) return ''
  return new Date(dateStr).toLocaleDateString('es-ES', { day: 'numeric', month: 'short' })
}

export default function Home({ lessons, progress, onSelectTopic }) {
  const today        = new Date()
  const daysLeft     = Math.max(0, Math.ceil((EXAM_DATE - today) / 86400000))
  const totalTopics  = lessons.reduce((a, l) => a + l.topics.length, 0)
  const completedTopics = Object.values(progress).filter(p => p.completed).length
  const pct = totalTopics > 0 ? Math.round((completedTopics / totalTopics) * 100) : 0

  // Find next session with incomplete topics
  const nextLesson = lessons.find(l =>
    l.topics.some(t => !progress[`${l.id}/${t.id}`]?.completed)
  )

  // Sessions = lessons that have a sessionNumber (not bonus)
  const sessions = lessons.filter(l => l.sessionNumber)
  const bonus    = lessons.find(l => l.id === 'bonus')

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">

      {/* Top bar */}
      <div className="flex items-start justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">Plan de Estudio</h1>
          <p className="text-slate-400 text-sm mt-0.5">WU Vienna · Examen 20 jun 2026</p>
        </div>
        <div className="text-right bg-red-50 border border-red-100 rounded-xl px-4 py-2">
          <div className="text-2xl font-black text-red-500">{daysLeft}</div>
          <div className="text-xs text-red-400 font-medium">días</div>
        </div>
      </div>

      {/* Overall progress */}
      <div className="bg-white border border-slate-200 rounded-2xl p-4 mb-4 shadow-sm">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-semibold text-slate-700">Progreso total</span>
          <span className="text-sm font-bold text-indigo-600">{completedTopics}/{totalTopics} temas · {pct}%</span>
        </div>
        <div className="h-2.5 bg-slate-100 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-indigo-500 to-emerald-500 rounded-full transition-all duration-700"
            style={{ width: `${pct}%` }} />
        </div>
      </div>

      {/* Next session CTA */}
      {nextLesson && (
        <button
          onClick={() => onSelectTopic(nextLesson.id, nextLesson.topics[0].id)}
          className="w-full bg-gradient-to-r from-indigo-500 to-violet-600 text-white
                     rounded-2xl p-5 mb-5 text-left hover:shadow-lg hover:-translate-y-0.5
                     transition-all active:translate-y-0 group">
          <div className="text-xs text-indigo-200 font-bold uppercase tracking-wider mb-1">
            ▶ Continuar ahora
          </div>
          <div className="text-lg font-bold leading-tight">{nextLesson.title}</div>
          <div className="text-sm text-indigo-200 mt-1">{nextLesson.description}</div>
          <div className="mt-3 text-xs text-indigo-300 group-hover:text-white transition-colors">
            Ir a la sesión →
          </div>
        </button>
      )}

      {/* Sessions list */}
      <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
        10 Sesiones · 30 días
      </p>
      <div className="space-y-2 mb-4">
        {sessions.map(lesson => {
          const done  = lesson.topics.filter(t => progress[`${lesson.id}/${t.id}`]?.completed).length
          const total = lesson.topics.length
          const p     = Math.round((done / total) * 100)
          const isNext = lesson.id === nextLesson?.id
          const d = daysUntil(lesson.scheduledDate)
          const isFuture = d !== null && d > 0

          return (
            <button key={lesson.id}
              onClick={() => onSelectTopic(lesson.id, lesson.topics[0].id)}
              className={`w-full text-left bg-white border rounded-2xl p-4 transition-all
                         hover:shadow-sm group
                         ${isNext ? 'border-indigo-300 shadow-sm' : 'border-slate-200 hover:border-slate-300'}`}>
              <div className="flex items-center gap-3">
                {/* Number badge */}
                <div className={`w-9 h-9 rounded-xl flex items-center justify-center text-white
                                 font-bold text-sm flex-shrink-0 ring-2 ring-offset-1
                                 ${COLOR_RING[lesson.color]}
                                 ${p === 100 ? 'bg-emerald-500 ring-emerald-200'
                                   : p > 0   ? 'bg-indigo-500 ring-indigo-200'
                                   : `${COLOR_DOT[lesson.color] || 'bg-slate-400'}`}`}>
                  {p === 100 ? '✓' : lesson.sessionNumber}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="font-semibold text-slate-800 text-sm leading-tight">
                      {lesson.title}
                    </span>
                    {lesson.scheduledDate && (
                      <span className={`text-xs px-2 py-0.5 rounded-full ${
                        isFuture ? 'bg-slate-100 text-slate-400'
                        : p === 100 ? 'bg-emerald-100 text-emerald-600'
                        : 'bg-indigo-100 text-indigo-600'
                      }`}>
                        {formatDate(lesson.scheduledDate)}
                      </span>
                    )}
                    {isNext && (
                      <span className="text-xs bg-indigo-500 text-white px-2 py-0.5 rounded-full font-bold">
                        Siguiente
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-slate-400 mt-0.5 truncate">{lesson.description}</p>
                  {p > 0 && p < 100 && (
                    <div className="mt-1.5 h-1 bg-slate-100 rounded-full overflow-hidden">
                      <div className="h-full bg-indigo-400 rounded-full" style={{ width: `${p}%` }} />
                    </div>
                  )}
                </div>

                <span className="text-slate-300 group-hover:text-slate-500 transition-colors flex-shrink-0 text-lg">
                  {p === 100 ? '✅' : '›'}
                </span>
              </div>
            </button>
          )
        })}
      </div>

      {/* Bonus section */}
      {bonus && (() => {
        const done  = bonus.topics.filter(t => progress[`${bonus.id}/${t.id}`]?.completed).length
        const total = bonus.topics.length
        const p     = Math.round((done / total) * 100)
        return (
          <div>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
              Bonus
            </p>
            <button
              onClick={() => onSelectTopic(bonus.id, bonus.topics[0].id)}
              className="w-full text-left bg-gradient-to-br from-yellow-50 to-orange-50
                         border border-yellow-200 rounded-2xl p-4 hover:border-yellow-300
                         hover:shadow-sm transition-all group">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-yellow-400 flex items-center justify-center
                                text-white text-base flex-shrink-0">
                  ★
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-slate-800 text-sm">{bonus.title}</div>
                  <p className="text-xs text-slate-500 mt-0.5">{bonus.description}</p>
                  {p > 0 && p < 100 && (
                    <div className="mt-1.5 h-1 bg-yellow-100 rounded-full overflow-hidden">
                      <div className="h-full bg-yellow-400 rounded-full" style={{ width: `${p}%` }} />
                    </div>
                  )}
                </div>
                <span className="text-slate-300 group-hover:text-slate-500 transition-colors text-lg">
                  {p === 100 ? '✅' : '›'}
                </span>
              </div>
            </button>
          </div>
        )
      })()}

      <p className="text-center text-xs text-slate-300 mt-8">
        Progreso guardado automáticamente · WU Math Tutor
      </p>
    </div>
  )
}
