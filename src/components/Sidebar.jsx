import { useState } from 'react'

const COLOR_DOT = {
  emerald: 'bg-emerald-500', blue: 'bg-blue-500', violet: 'bg-violet-500',
  indigo: 'bg-indigo-500', orange: 'bg-orange-500', red: 'bg-red-500',
  yellow: 'bg-yellow-500', teal: 'bg-teal-500', pink: 'bg-pink-500',
}

export default function Sidebar({ lessons, currentLesson, currentTopic, onSelectTopic, onGoHome,
                                   progress, isOpen, onToggle, getLessonProgress }) {
  const [expanded, setExpanded] = useState(currentLesson?.id || null)

  const toggleLesson = (id) => setExpanded(e => e === id ? null : id)

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/30 z-20 lg:hidden" onClick={onToggle} />
      )}

      <aside className={`
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:translate-x-0
        fixed lg:relative z-30 lg:z-auto
        h-full lg:h-screen
        w-72 flex flex-col
        bg-slate-900 text-white
        transition-transform duration-300
        flex-shrink-0
      `}>
        {/* Logo */}
        <div className="px-5 py-4 border-b border-slate-700/50 flex items-center justify-between">
          <button onClick={onGoHome} className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <span className="text-2xl">📐</span>
            <div>
              <div className="font-bold text-base leading-tight">WU Math Tutor</div>
              <div className="text-xs text-slate-400">Matemáticas interactivas</div>
            </div>
          </button>
          <button onClick={onToggle} className="lg:hidden text-slate-400 hover:text-white p-1">
            ✕
          </button>
        </div>

        {/* Lessons list */}
        <nav className="flex-1 overflow-y-auto py-3">
          {lessons.map(lesson => {
            const prog = getLessonProgress?.(lesson.id, lesson.topics) || { completed: 0, total: lesson.topics.length }
            const isExpanded = expanded === lesson.id
            const isActive = currentLesson?.id === lesson.id

            return (
              <div key={lesson.id}>
                {/* Lesson header */}
                <button onClick={() => toggleLesson(lesson.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 text-left transition-colors
                    ${isActive ? 'bg-slate-700/60' : 'hover:bg-slate-800/60'}`}>
                  <span className={`w-2 h-2 rounded-full flex-shrink-0 ${COLOR_DOT[lesson.color] || 'bg-slate-500'}`} />
                  <span className="font-mono text-sm text-slate-300 w-12 flex-shrink-0">{lesson.emoji}</span>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-medium text-white truncate">{lesson.title}</div>
                    <div className="text-xs text-slate-400 mt-0.5">
                      {prog.completed}/{prog.total} temas
                    </div>
                  </div>
                  <span className={`text-slate-400 text-xs transition-transform ${isExpanded ? 'rotate-90' : ''}`}>
                    ›
                  </span>
                </button>

                {/* Topics */}
                {isExpanded && (
                  <div className="bg-slate-800/40 py-1">
                    {lesson.topics.map(topic => {
                      const topicProg = progress[`${lesson.id}/${topic.id}`]
                      const isTopicActive = currentTopic?.id === topic.id && currentLesson?.id === lesson.id
                      return (
                        <button key={topic.id}
                          onClick={() => { onSelectTopic(lesson.id, topic.id); if (window.innerWidth < 1024) onToggle() }}
                          className={`w-full flex items-center gap-3 px-5 py-2.5 text-left transition-colors text-sm
                            ${isTopicActive
                              ? 'bg-indigo-600/40 text-white border-r-2 border-indigo-400'
                              : 'text-slate-400 hover:text-white hover:bg-slate-700/40'}`}>
                          <span className="text-xs">
                            {topicProg?.completed ? '✅' : isTopicActive ? '▶' : '○'}
                          </span>
                          <span className="truncate">{topic.title}</span>
                        </button>
                      )
                    })}
                  </div>
                )}
              </div>
            )
          })}
        </nav>

        {/* Footer */}
        <div className="px-4 py-3 border-t border-slate-700/50">
          <p className="text-xs text-slate-500 text-center">WU Vienna Prep 2025</p>
        </div>
      </aside>
    </>
  )
}
