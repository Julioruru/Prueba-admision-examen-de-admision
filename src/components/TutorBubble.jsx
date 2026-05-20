export default function TutorBubble({ message, compact }) {
  if (!message) return null
  return (
    <div className={`flex gap-3 items-start animate-fade-in ${compact ? 'mb-3' : 'mb-5'}`}>
      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600
                      flex items-center justify-center text-white text-lg shadow-md">
        🧑‍🏫
      </div>
      <div className="flex-1 bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-100
                      rounded-2xl rounded-tl-sm px-4 py-3 text-sm text-slate-700 leading-relaxed shadow-sm">
        {message}
      </div>
    </div>
  )
}
