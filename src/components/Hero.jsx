import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden">
      {/* 3D background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* layered gradients and grid for futuristic vibe */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.25),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(168,85,247,0.18),transparent_40%),radial-gradient(circle_at_50%_80%,rgba(16,185,129,0.15),transparent_35%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.65),rgba(2,6,23,0.85))]" />
        <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)] bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:36px_36px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-28 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/15 border border-blue-400/30 text-blue-100 text-xs mb-6 backdrop-blur">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
            Reimagining resumes with AI
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white via-blue-200 to-blue-400 drop-shadow-sm leading-tight">
            Flame your career with a futuristic resume
          </h1>
          <p className="mt-5 text-blue-100/85 text-lg sm:text-xl max-w-3xl mx-auto">
            Upload your materials, generate ATS‑optimized resumes and magnetic cover letters, and share a living profile with QR and video pitch.
          </p>

          <div className="mt-8 flex items-center justify-center gap-3">
            <motion.a
              href="#builder"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="group inline-flex items-center gap-2 rounded-xl px-5 py-3 font-semibold text-slate-900 bg-gradient-to-r from-blue-300 via-cyan-300 to-emerald-300 shadow-[0_8px_30px_rgba(59,130,246,0.35)]"
            >
              <Sparkles className="w-5 h-5 transition-transform group-hover:rotate-12" />
              Start building
            </motion.a>
            <motion.a
              href="#examples"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 rounded-xl px-5 py-3 font-semibold border border-white/20 text-white hover:border-white/40 bg-white/5 backdrop-blur"
            >
              See examples
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* floating orbs */}
      <motion.div
        className="absolute -top-12 -left-12 w-64 h-64 rounded-full bg-blue-500/20 blur-3xl"
        animate={{ x: [0, 20, -10, 0], y: [0, -10, 10, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-0 -right-8 w-72 h-72 rounded-full bg-emerald-500/20 blur-3xl"
        animate={{ x: [0, -15, 10, 0], y: [0, 10, -10, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
      />
    </section>
  )
}
