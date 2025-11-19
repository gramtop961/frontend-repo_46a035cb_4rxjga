import { useState } from 'react'
import { motion } from 'framer-motion'
import { Upload, FileText, Loader2 } from 'lucide-react'

export default function PromptBuilder({ user, onGenerated }) {
  const [job, setJob] = useState('')
  const [material, setMaterial] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [uploading, setUploading] = useState(false)
  const backend = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  const handleGenerate = async () => {
    setError('')
    if (!job || !material) return setError('Please provide both job description and your info')
    setLoading(true)
    try {
      const res = await fetch(`${backend}/generate`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ user_id: user.user_id, job_description: job, user_material: material }),
      })
      if (!res.ok) throw new Error('Generation failed')
      const data = await res.json()
      onGenerated(data)
    } catch (e) {
      setError(e.message)
    } finally {
      setLoading(false)
    }
  }

  const onFileSelect = async (e) => {
    const file = e.target.files?.[0]
    if (!file) return
    setUploading(true)
    setError('')
    try {
      const form = new FormData()
      form.append('file', file)
      const res = await fetch(`${backend}/upload/extract-text`, {
        method: 'POST',
        body: form,
      })
      if (!res.ok) throw new Error('Failed to extract text')
      const data = await res.json()
      const text = data.text || ''
      setMaterial((prev) => (prev ? prev + '\n\n' + text : text))
    } catch (err) {
      setError(err.message)
    } finally {
      setUploading(false)
      e.target.value = ''
    }
  }

  return (
    <div id="builder" className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-6 shadow-xl">
      <h3 className="text-xl font-semibold text-white mb-2">Upload or paste details</h3>
      <p className="text-sm text-blue-200/80 mb-4">Drop in a job description and your resume/materials. We'll extract the key signals and tailor your draft.</p>
      <div className="grid gap-3">
        <div className="flex items-center gap-3">
          <label className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-white/15 text-white/90 hover:border-white/30 cursor-pointer bg-white/5">
            <Upload className="w-4 h-4" />
            <span className="text-sm">Upload PDF / DOCX / TXT</span>
            <input onChange={onFileSelect} type="file" accept=".pdf,.doc,.docx,.txt" className="hidden" />
          </label>
          {uploading && (
            <span className="inline-flex items-center gap-2 text-blue-200/80 text-sm">
              <Loader2 className="w-4 h-4 animate-spin" /> Extracting...
            </span>
          )}
        </div>

        <textarea className="min-h-[120px] bg-slate-950/40 text-white placeholder:text-slate-400 rounded-lg px-3 py-2 border border-slate-700/60 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Job description..." value={job} onChange={(e)=>setJob(e.target.value)} />
        <textarea className="min-h-[180px] bg-slate-950/40 text-white placeholder:text-slate-400 rounded-lg px-3 py-2 border border-slate-700/60 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Your resume, experience, achievements... Or upload a file above." value={material} onChange={(e)=>setMaterial(e.target.value)} />
        {error && <p className="text-red-300 text-sm">{error}</p>}
        <motion.button whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }} onClick={handleGenerate} disabled={loading} className="bg-gradient-to-r from-blue-500 via-cyan-500 to-emerald-500 hover:opacity-95 disabled:opacity-50 text-white rounded-lg px-4 py-2 font-semibold transition-colors inline-flex items-center gap-2">
          {loading ? (<><Loader2 className="w-4 h-4 animate-spin" /> Generating...</>) : (<><FileText className="w-4 h-4" /> Generate resume & letter</>)}
        </motion.button>
      </div>
    </div>
  )
}
