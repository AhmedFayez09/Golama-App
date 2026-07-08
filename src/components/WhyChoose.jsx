import { motion } from 'framer-motion'
import { X, Check } from 'lucide-react'
import { APP_NAME } from '../config'

const ROWS = [
  { label: 'Comparing supplier prices', old: 'Manual calls & spreadsheets', gobar: 'Live comparisons in the app' },
  { label: 'Placing bulk orders', old: 'Slow paperwork & faxed orders', gobar: 'A few taps, saved templates' },
  { label: 'Order visibility', old: 'No tracking until it arrives', gobar: 'Real-time status updates' },
  { label: 'Supplier discovery', old: 'Limited to local contacts', gobar: 'Thousands of verified wholesalers' },
  { label: 'Payments', old: 'Checks & bank transfers', gobar: 'Secure in-app payments' },
]

export default function WhyChoose() {
  return (
    <section id="why-gobar" className="py-24 md:py-32 bg-surface">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mb-16">
          <span className="text-xs font-semibold text-primary uppercase tracking-widest">Why {APP_NAME}</span>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-ink mt-3 text-balance">
            A better way to buy wholesale
          </h2>
        </div>

        <div className="bg-white rounded-3xl shadow-card border border-ink/5 overflow-hidden">
          <div className="grid grid-cols-3 border-b border-ink/5 bg-surface/60">
            <div className="p-5 text-xs font-semibold text-ink-700/50 uppercase tracking-wide">Task</div>
            <div className="p-5 text-xs font-semibold text-ink-700/50 uppercase tracking-wide">Traditional buying</div>
            <div className="p-5 text-xs font-semibold text-primary uppercase tracking-wide">{APP_NAME}</div>
          </div>
          {ROWS.map((row, i) => (
            <motion.div
              key={row.label}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: i * 0.06, duration: 0.4 }}
              className={`grid grid-cols-3 ${i !== ROWS.length - 1 ? 'border-b border-ink/5' : ''}`}
            >
              <div className="p-5 text-sm font-medium text-ink">{row.label}</div>
              <div className="p-5 flex items-start gap-2 text-sm text-ink-700/50">
                <X className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                {row.old}
              </div>
              <div className="p-5 flex items-start gap-2 text-sm text-ink font-medium bg-primary-50/40">
                <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                {row.gobar}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
