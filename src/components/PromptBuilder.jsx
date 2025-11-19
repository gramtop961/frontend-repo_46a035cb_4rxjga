import { useState } from 'react'

export default function PromptBuilder({ user, onGenerated }) {
  const [job, setJob] = useState('')
  const [material, setMaterial] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
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

  return (
    <div className="bg-slate-800/60 border border-blue-500/20 rounded-2xl p-6 shadow-xl">
      <h3 className="text-xl font-semibold text-white mb-2">Upload or paste details</h3>
      <p className="text-sm text-blue-200/80 mb-4">Paste the job description and any resume/cover letter content. File upload support coming next.</p>
      <div className="grid gap-3">
        <textarea className="min-h-[140px] bg-slate-900/70 text-white placeholder:text-slate-400 rounded-lg px-3 py-2 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Job description..." value={job} onChange={(e)=>setJob(e.target.value)} />
        <textarea className="min-h-[180px] bg-slate-900/70 text-white placeholder:text-slate-400 rounded-lg px-3 py-2 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Your resume, experience, achievements..." value={material} onChange={(e)=>setMaterial(e.target.value)} />
        {error && <p className="text-red-300 text-sm">{error}</p>}
        <button onClick={handleGenerate} disabled={loading} className="bg-blue-500 hover:bg-blue-600 disabled:opacity-50 text-white rounded-lg px-4 py-2 font-semibold transition-colors">
          {loading ? 'Generating...' : 'Generate resume & letter'}
        </button>
      </div>
    </div>
  )
}
