import { useState, useCallback } from 'react'

const STORAGE_KEY = 'wu-math-tutor-progress'

function loadProgress() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : {}
  } catch {
    return {}
  }
}

function saveProgress(data) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
  } catch {}
}

export function useProgress() {
  const [progress, setProgress] = useState(loadProgress)

  const updateProgress = useCallback((lessonId, topicId, step) => {
    setProgress(prev => {
      const key = `${lessonId}/${topicId}`
      const existing = prev[key] || { step: 0, completed: false }
      const stepNum = typeof step === 'number' ? step : existing.step
      const completed = step === 'complete' || existing.completed
      const next = { step: Math.max(existing.step, stepNum), completed, lastUpdated: Date.now() }
      const updated = { ...prev, [key]: next }
      saveProgress(updated)
      return updated
    })
  }, [])

  const getTopicProgress = useCallback((lessonId, topicId) => {
    if (!lessonId || !topicId) return { step: 0, completed: false }
    return progress[`${lessonId}/${topicId}`] || { step: 0, completed: false }
  }, [progress])

  const getLessonProgress = useCallback((lessonId, topics) => {
    if (!topics) return { completed: 0, total: 0 }
    const completed = topics.filter(t => {
      const p = progress[`${lessonId}/${t.id}`]
      return p?.completed
    }).length
    return { completed, total: topics.length }
  }, [progress])

  const resetAll = useCallback(() => {
    localStorage.removeItem(STORAGE_KEY)
    setProgress({})
  }, [])

  return { progress, updateProgress, getTopicProgress, getLessonProgress, resetAll }
}
