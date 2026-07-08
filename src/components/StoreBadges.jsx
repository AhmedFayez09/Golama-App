import { Apple, PlayCircle } from 'lucide-react'

export default function StoreBadges({ size = 'default', align = 'start' }) {
  const pad = size === 'large' ? 'px-6 py-3.5' : 'px-5 py-3'
  const justify = align === 'center' ? 'justify-center' : 'justify-start'

  return (
    <div className={`flex flex-wrap gap-3 ${justify}`}>
      <a
        href="#download"
        className={`group flex items-center gap-3 ${pad} rounded-2xl bg-ink text-white shadow-card hover:bg-ink-800 hover:-translate-y-0.5 transition-all duration-300`}
      >
        <Apple className="w-6 h-6 shrink-0" strokeWidth={1.75} />
        <span className="text-left leading-tight">
          <span className="block text-[10px] uppercase tracking-wide text-white/60">Download on the</span>
          <span className="block text-sm font-semibold">App Store</span>
        </span>
      </a>
      <a
        href="#download"
        className={`group flex items-center gap-3 ${pad} rounded-2xl bg-ink text-white shadow-card hover:bg-ink-800 hover:-translate-y-0.5 transition-all duration-300`}
      >
        <PlayCircle className="w-6 h-6 shrink-0" strokeWidth={1.75} />
        <span className="text-left leading-tight">
          <span className="block text-[10px] uppercase tracking-wide text-white/60">Get it on</span>
          <span className="block text-sm font-semibold">Google Play</span>
        </span>
      </a>
    </div>
  )
}
