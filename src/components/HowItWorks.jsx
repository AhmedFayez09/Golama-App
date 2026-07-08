import { motion } from 'framer-motion'
import { UserPlus, LayoutGrid, PackageCheck, Truck } from 'lucide-react'

const STEPS = [
  { icon: UserPlus, title: 'Create your account', desc: 'Sign up as a retailer in minutes and get verified to unlock wholesale pricing.' },
  { icon: LayoutGrid, title: 'Browse wholesale products', desc: 'Explore thousands of listings and compare prices across trusted suppliers.' },
  { icon: PackageCheck, title: 'Place your order', desc: 'Choose your quantities and units, then check out securely in a few taps.' },
  { icon: Truck, title: 'Receive your delivery', desc: 'Track your order in real time until it arrives at your door.' },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl mb-20">
          <span className="text-xs font-semibold text-primary uppercase tracking-widest">The process</span>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-ink mt-3 text-balance">
            From sign-up to delivery in four steps
          </h2>
        </div>

        <div className="relative grid md:grid-cols-4 gap-10 md:gap-6">
          <div className="hidden md:block absolute top-8 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-primary/0 via-primary/30 to-primary/0" />
          {STEPS.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.55, delay: i * 0.12, ease: 'easeOut' }}
              className="relative flex flex-col items-start"
            >
              <div className="relative mb-6">
                <motion.span
                  whileHover={{ scale: 1.08, rotate: -4 }}
                  className="grid place-items-center w-16 h-16 rounded-3xl bg-ink text-white shadow-card relative z-10"
                >
                  <Icon className="w-6 h-6" strokeWidth={1.75} />
                </motion.span>
                <span className="absolute -bottom-2 -right-2 grid place-items-center w-7 h-7 rounded-full bg-primary text-white text-[11px] font-bold border-2 border-white z-20">
                  {i + 1}
                </span>
              </div>
              <h3 className="font-semibold text-ink text-base mb-2">{title}</h3>
              <p className="text-sm text-ink-700/60 leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
