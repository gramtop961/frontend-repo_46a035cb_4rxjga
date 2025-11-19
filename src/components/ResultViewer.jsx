import { motion } from 'framer-motion'
import { Save, Copy } from 'lucide-react'

export default function ResultViewer({ content, onSave }) {
  if (!content) return null

  const copyAll = async () => {
    try {
      await navigator.clipboard.writeText([
        content.header,
        content.title,
        content.summary,
        content.bullets.join('\n'),
        content.cover_letter,
        content.footer,
        content.advice,
      ].filter(Boolean).join('\n\n'))
    } catch {}
  }

  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-6 shadow-xl">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-semibold text-white">Draft</h3>
        <div className="flex gap-2">
          <button onClick={copyAll} className="inline-flex items-center gap-2 px-3 py-2 text-sm rounded-lg border border-white/15 text-white/90 hover:border-white/30">
            <Copy className="w-4 h-4" /> Copy
          </button>
          <button onClick={onSave} className="inline-flex items-center gap-2 px-3 py-2 text-sm rounded-lg bg-emerald-500 hover:bg-emerald-600 text-white font-semibold">
            <Save className="w-4 h-4" /> Save & share
          </button>
        </div>
      </div>
      <div className="grid gap-6">
        <div>
          <h4 className="text-white font-semibold">Header</h4>
          <p className="text-blue-100/80 text-sm">{content.header}</p>
        </div>
        <div>
          <h4 className="text-white font-semibold">Title</h4>
          <p className="text-blue-100/90 text-lg">{content.title}</p>
        </div>
        <div>
          <h4 className="text-white font-semibold">Summary</h4>
          <p className="text-blue-100/85 whitespace-pre-line">{content.summary}</p>
        </div>
        <div>
          <h4 className="text-white font-semibold">Highlights</h4>
          <ul className="list-disc list-inside text-blue-100/85 space-y-1">
            {content.bullets.map((b, i) => (<li key={i}>{b}</li>))}
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold">Cover Letter</h4>
          <p className="text-blue-100/85 whitespace-pre-line">{content.cover_letter}</p>
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
    </motion.div>
  )
}
