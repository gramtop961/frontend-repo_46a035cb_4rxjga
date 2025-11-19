import { useState } from 'react'

export default function AuthGate({ onSignedIn }) {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const backend = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    if (!email) return setError('Please enter your email')
    setLoading(true)
    try {
      const res = await fetch(`${backend}/auth/signin`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, name }),
      })
      if (!res.ok) throw new Error('Sign-in failed')
      const data = await res.json()
      onSignedIn(data)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="bg-slate-800/60 border border-blue-500/20 rounded-2xl p-6 shadow-xl">
      <h3 className="text-xl font-semibold text-white mb-2">Sign in to continue</h3>
      <p className="text-sm text-blue-200/80 mb-4">We'll create your profile space and keep your drafts saved.</p>
      <form onSubmit={handleSubmit} className="grid gap-3">
        <input className="bg-slate-900/70 text-white placeholder:text-slate-400 rounded-lg px-3 py-2 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Name (optional)" value={name} onChange={(e)=>setName(e.target.value)} />
        <input className="bg-slate-900/70 text-white placeholder:text-slate-400 rounded-lg px-3 py-2 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Email" type="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
        {error && <p className="text-red-300 text-sm">{error}</p>}
        <button disabled={loading} className="bg-blue-500 hover:bg-blue-600 disabled:opacity-50 text-white rounded-lg px-4 py-2 font-semibold transition-colors">
          {loading ? 'Signing in...' : 'Continue'}
        </button>
      </form>
    </div>
  )
}
