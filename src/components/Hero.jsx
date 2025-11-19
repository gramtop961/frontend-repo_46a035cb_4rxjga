import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-[70vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/70 to-slate-950/90 pointer-events-none" />
      <div className="relative z-10 max-w-5xl mx-auto px-6 py-24 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-200 text-xs mb-4">
          <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
          Smart resume builder for standout applications
        </div>
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-blue-100 to-blue-300 drop-shadow">
          Create a stunning, AI‑polished resume profile
        </h1>
        <p className="mt-4 text-blue-100/80 text-lg max-w-2xl mx-auto">
          Upload a job description and your materials. Get tailor‑made resumes, cover letters, and Loom talking points—then share as PDF or a live link with QR.
        </p>
      </div>
    </section>
  )
}
