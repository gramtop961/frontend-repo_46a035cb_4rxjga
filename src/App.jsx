import { useState } from 'react'
import Hero from './components/Hero'
import AuthGate from './components/AuthGate'
import PromptBuilder from './components/PromptBuilder'
import ResultViewer from './components/ResultViewer'

function App() {
  const [user, setUser] = useState(null)
  const [content, setContent] = useState(null)
  const backend = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
  const [saveResult, setSaveResult] = useState(null)

  const handleSave = async () => {
    if (!user || !content) return
    const res = await fetch(`${backend}/profile`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ user_id: user.user_id, content }),
    })
    if (res.ok) {
      const data = await res.json()
      setSaveResult(data)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      <Hero />

      <div className="relative z-10 max-w-5xl mx-auto px-6 pb-24 -mt-24">
        {!user ? (
          <AuthGate onSignedIn={setUser} />
        ) : (
          <div className="grid md:grid-cols-2 gap-6">
            <PromptBuilder user={user} onGenerated={setContent} />
            <ResultViewer content={content} onSave={handleSave} />
          </div>
        )}

        {saveResult && (
          <div className="mt-6 bg-slate-800/60 border border-blue-500/20 rounded-2xl p-6 shadow-xl">
            <h3 className="text-xl font-semibold mb-2">Share your profile</h3>
            <p className="text-blue-100/80 text-sm">Share link:</p>
            <a className="text-blue-300 underline break-all" href={`/${saveResult.share_slug}`} target="_blank" rel="noreferrer">
              {window.location.origin}/{saveResult.share_slug}
            </a>
            <p className="text-blue-100/80 text-sm mt-2">PDF export and QR code coming next.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default App
