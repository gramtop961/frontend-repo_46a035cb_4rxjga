export default function ResultViewer({ content, onSave }) {
  if (!content) return null

  return (
    <div className="bg-slate-800/60 border border-blue-500/20 rounded-2xl p-6 shadow-xl">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-semibold text-white">Draft</h3>
        <button onClick={onSave} className="bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg px-3 py-2 text-sm font-semibold">Save & share</button>
      </div>
      <div className="grid gap-6">
        <div>
          <h4 className="text-white font-semibold">Header</h4>
          <p className="text-blue-100/80 text-sm">{content.header}</p>
        </div>
        <div>
          <h4 className="text-white font-semibold">Title</h4>
          <p className="text-blue-100/80">{content.title}</p>
        </div>
        <div>
          <h4 className="text-white font-semibold">Summary</h4>
          <p className="text-blue-100/80 whitespace-pre-line">{content.summary}</p>
        </div>
        <div>
          <h4 className="text-white font-semibold">Highlights</h4>
          <ul className="list-disc list-inside text-blue-100/80 space-y-1">
            {content.bullets.map((b, i) => (<li key={i}>{b}</li>))}
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold">Cover Letter</h4>
          <p className="text-blue-100/80 whitespace-pre-line">{content.cover_letter}</p>
        </div>
        <div>
          <h4 className="text-white font-semibold">Footer</h4>
          <p className="text-blue-100/80 text-sm">{content.footer}</p>
        </div>
        <div>
          <h4 className="text-white font-semibold">Loom Tips</h4>
          <p className="text-blue-100/80 text-sm">{content.advice}</p>
        </div>
      </div>
    </div>
  )
}
