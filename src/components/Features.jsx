import { motion } from 'framer-motion'
import { APP_NAME } from '../config'
import {
  LayoutGrid,
  Scale,
  Zap,
  ShieldCheck,
  Radar,
  Heart,
  Layers,
  Search,
  History,
  Truck,
} from 'lucide-react'

const FEATURES = [
  { icon: LayoutGrid, title: 'Thousands of products', desc: 'Discover an ever-growing catalog of wholesale goods across every category your business needs.' },
  { icon: Scale, title: 'Compare supplier prices', desc: 'See live price comparisons across wholesalers before you commit to an order.' },
  { icon: Zap, title: 'Fast bulk ordering', desc: 'Place large, multi-item orders in a few taps with saved carts and reorder templates.' },
  { icon: ShieldCheck, title: 'Secure payments', desc: 'Every transaction is encrypted and protected, from checkout to settlement.' },
  { icon: Radar, title: 'Real-time tracking', desc: 'Follow every order from warehouse to doorstep with live delivery status.' },
  { icon: Heart, title: 'Favorite products', desc: 'Save go-to items and suppliers for one-tap reordering next time.' },
  { icon: Layers, title: 'Multiple product units', desc: 'Buy by case, pallet, or unit — pricing adjusts automatically to your order size.' },
  { icon: Search, title: 'Smart search', desc: 'Find exactly what you need with filters for category, supplier, and price range.' },
  { icon: History, title: 'Order history', desc: 'Review, repeat, or export past orders whenever you need them.' },
  { icon: Truck, title: 'Fast delivery', desc: 'Partnered logistics networks keep lead times short, even for large orders.' },
]

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.05, duration: 0.5, ease: 'easeOut' },
  }),
}

export default function Features() {
  return (
    <section id="features" className="py-24 md:py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl mb-16">
          <span className="text-xs font-semibold text-primary uppercase tracking-widest">Everything in one app</span>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-ink mt-3 text-balance">
            Built for how wholesale buying actually works
          </h2>
          <p className="mt-4 text-ink-700/60 leading-relaxed">
            From discovery to delivery, {APP_NAME} streamlines every step of sourcing products for your business.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {FEATURES.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ y: -6 }}
              className="group bg-white rounded-3xl p-6 shadow-card border border-ink/5 transition-shadow duration-300 hover:shadow-soft"
            >
              <span className="grid place-items-center w-12 h-12 rounded-2xl bg-primary-50 text-primary mb-5 transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                <Icon className="w-6 h-6" strokeWidth={1.75} />
              </span>
              <h3 className="font-semibold text-ink text-base mb-2">{title}</h3>
              <p className="text-sm text-ink-700/60 leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
