import { useState } from 'react'
import Sidebar from './components/Sidebar'
import Home from './components/Home'
import LessonView from './components/LessonView'
import { useProgress } from './hooks/useProgress'
import { lessons } from './data/lessons'

export default function App() {
  const [currentLesson, setCurrentLesson] = useState(null)
  const [currentTopic, setCurrentTopic] = useState(null)
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const { progress, updateProgress, getTopicProgress, getLessonProgress } = useProgress()

  const selectTopic = (lessonId, topicId) => {
    const lesson = lessons.find(l => l.id === lessonId)
    const topic = lesson?.topics.find(t => t.id === topicId)
    setCurrentLesson(lesson || null)
    setCurrentTopic(topic || null)
    setSidebarOpen(false)
  }

  const goHome = () => {
    setCurrentLesson(null)
    setCurrentTopic(null)
  }

  const handleProgress = (lessonId, topicId, step) => {
    updateProgress(lessonId, topicId, step)
  }

  const handleComplete = (lessonId, topicId) => {
    updateProgress(lessonId, topicId, 'complete')
    // Auto-advance to next topic
    const lesson = lessons.find(l => l.id === lessonId)
    if (!lesson) return
    const idx = lesson.topics.findIndex(t => t.id === topicId)
    const nextTopic = lesson.topics[idx + 1]
    if (nextTopic) {
      setCurrentTopic(nextTopic)
    } else {
      // Move to next lesson
      const lIdx = lessons.findIndex(l => l.id === lessonId)
      const nextLesson = lessons[lIdx + 1]
      if (nextLesson) {
        setCurrentLesson(nextLesson)
        setCurrentTopic(nextLesson.topics[0])
      } else {
        goHome()
      }
    }
  }

  return (
    <div className="flex h-screen overflow-hidden bg-slate-50">
      <Sidebar
        lessons={lessons}
        currentLesson={currentLesson}
        currentTopic={currentTopic}
        onSelectTopic={selectTopic}
        onGoHome={goHome}
        progress={progress}
        isOpen={sidebarOpen}
        onToggle={() => setSidebarOpen(o => !o)}
        getLessonProgress={getLessonProgress}
      />

      <main className="flex-1 overflow-auto min-w-0">
        {/* Mobile header */}
        <div className="lg:hidden sticky top-0 z-10 bg-white border-b border-slate-200 px-4 py-3 flex items-center gap-3">
          <button onClick={() => setSidebarOpen(true)}
            className="p-2 rounded-lg hover:bg-slate-100 transition-colors text-slate-600">
            ☰
          </button>
          <span className="font-semibold text-slate-700 text-sm">
            {currentTopic ? currentTopic.title : 'WU Math Tutor'}
          </span>
          {currentTopic && (
            <button onClick={goHome} className="ml-auto text-xs text-slate-400 hover:text-slate-600">
              Inicio
            </button>
          )}
        </div>

        {currentTopic && currentLesson ? (
          <LessonView
            lesson={currentLesson}
            topic={currentTopic}
            currentStep={getTopicProgress(currentLesson.id, currentTopic.id)}
            onProgress={(step) => handleProgress(currentLesson.id, currentTopic.id, step)}
            onComplete={() => handleComplete(currentLesson.id, currentTopic.id)}
          />
        ) : (
          <Home
            lessons={lessons}
            progress={progress}
            onSelectTopic={selectTopic}
          />
        )}
      </main>
    </div>
  )
}
