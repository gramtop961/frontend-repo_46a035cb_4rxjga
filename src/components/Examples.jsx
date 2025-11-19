import { motion } from 'framer-motion'
import { FileText, Wand2, Share2, QrCode, Video, CheckCircle2 } from 'lucide-react'

const items = [
  {
    icon: FileText,
    title: 'Instant resume drafts',
    desc: 'Paste a job post or upload your materials to get a tailored, ATS-friendly resume in seconds.'
  },
  {
    icon: Wand2,
    title: 'Cover letters that convert',
    desc: 'Personalized cover letters with measurable impact statements and role alignment.'
  },
  {
    icon: Share2,
    title: 'Shareable live profile',
    desc: 'Host your profile on a unique link with analytics and quick updates.'
  },
  {
    icon: QrCode,
    title: 'QR & PDF export',
    desc: 'Generate a scannable QR for interviews and export beautiful PDFs on demand.'
  },
  {
    icon: Video,
    title: 'Video pitch ready',
    desc: 'Embed a Loom to introduce yourself and showcase communication skills.'
  },
  {
    icon: CheckCircle2,
    title: 'Role-specific checklists',
    desc: 'Ensure your resume hits the signals recruiters and ATS look for in your target role.'
  }
]

export default function Examples() {
  return (
    <section id="examples" className="relative py-20 sm:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.12),transparent_45%)]" />
      <div className="relative max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-b from-white to-blue-300">What you can do</h2>
          <p className="text-blue-100/85 mt-3 max-w-2xl mx-auto">From first draft to final share—everything you need to apply with confidence.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-5 hover:border-white/20"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br from-blue-500/10 via-cyan-400/10 to-emerald-400/10" />
              <div className="relative z-10">
                <div className="w-11 h-11 rounded-xl bg-blue-400/15 border border-blue-300/30 flex items-center justify-center text-blue-200">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="mt-4 font-semibold text-white text-lg">{item.title}</h3>
                <p className="text-sm text-blue-100/80 mt-1">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
