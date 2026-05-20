export default function ExamQuestion({ text, options }) {
  if (!text && !options) return null
  return (
    <div className="mb-5 rounded-xl overflow-hidden border border-slate-700 shadow-md">
      {/* Header bar */}
      <div className="bg-slate-800 px-4 py-2 flex items-center gap-2">
        <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
          WU Vienna — Exam Question
        </span>
        <span className="ml-auto text-xs text-slate-500">🇬🇧 English</span>
      </div>

      {/* Body */}
      <div className="bg-slate-900 px-5 py-4">
        {text && (
          <pre className="whitespace-pre-wrap font-mono text-sm text-slate-100 leading-relaxed">
            {text}
          </pre>
        )}

        {/* Multiple choice options */}
        {options && (
          <div className="mt-3 space-y-2">
            {options.map((opt, i) => (
              <div key={i} className="flex items-start gap-3 text-sm text-slate-200">
                <span className="mt-0.5 w-5 h-5 rounded border border-slate-500 flex-shrink-0
                                 flex items-center justify-center text-slate-400 text-xs">
                  {String.fromCharCode(65 + i)}
                </span>
                <span className="font-mono leading-relaxed">{opt}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
