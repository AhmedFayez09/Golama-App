import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import { APP_NAME } from '../config'

const TESTIMONIALS = [
  {
    name: 'Priya Nair',
    business: 'Nair Grocers',
    quote: `Comparing supplier prices used to take a full afternoon. Now I check ${APP_NAME} between customers and place my order in minutes.`,
    avatar: 'from-primary-100 to-primary-400',
  },
  {
    name: 'Marcus Webb',
    business: 'Webb & Sons Hardware',
    quote: 'The bulk ordering flow alone saved our team hours every week. Delivery tracking means we finally know what to expect.',
    avatar: 'from-amber-100 to-amber-400',
  },
  {
    name: 'Elena Torres',
    business: 'Casa Torres Market',
    quote: 'We switched suppliers twice after seeing better pricing right inside the app. It paid for itself in the first month.',
    avatar: 'from-sky-100 to-sky-400',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl mb-16">
          <span className="text-xs font-semibold text-primary uppercase tracking-widest">Merchants love {APP_NAME}</span>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-ink mt-3 text-balance">
            Trusted by retailers everywhere
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -6 }}
              className="bg-surface rounded-3xl p-7 border border-ink/5"
            >
              <div className="flex gap-0.5 mb-4">
                {[...Array(5)].map((_, s) => (
                  <Star key={s} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-sm text-ink-700/70 leading-relaxed mb-6">&ldquo;{t.quote}&rdquo;</p>
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.avatar}`} />
                <div>
                  <p className="text-sm font-semibold text-ink">{t.name}</p>
                  <p className="text-xs text-ink-700/50">{t.business}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
