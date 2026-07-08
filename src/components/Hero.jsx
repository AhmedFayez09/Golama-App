import { motion } from 'framer-motion'
import { TrendingDown, Bell, ShieldCheck, ArrowDownRight, ArrowUpRight } from 'lucide-react'
import StoreBadges from './StoreBadges'
import PhoneFrame from './PhoneFrame'
import { HomeScreen } from './AppScreens'
import { APP_NAME } from '../config'

const TICKER = [
  { name: 'Sparkling Water 24pk', from: 3, delta: -8.2 },
  { name: 'Rolled Oats 5kg', from: 5, delta: -4.1 },
  { name: 'Paper Towels 12pk', from: 4, delta: -11.6 },
  { name: 'Olive Oil 5L', from: 6, delta: -3.5 },
  { name: 'Rice 25kg', from: 3, delta: -6.9 },
  { name: 'Coffee Beans 1kg', from: 7, delta: -9.3 },
  { name: 'Detergent 10L', from: 4, delta: -5.7 },
  { name: 'Canned Tomatoes 24pk', from: 5, delta: -7.4 },
]

function TickerTape() {
  const row = [...TICKER, ...TICKER]
  return (
    <div className="relative w-full overflow-hidden border-y border-ink/5 bg-ink py-2.5">
      <div className="flex w-max animate-ticker gap-8 font-mono text-[11px]">
        {row.map((item, i) => (
          <div key={i} className="flex items-center gap-2 shrink-0 text-white/80">
            <span className="text-white/50">{item.name}</span>
            <span className="text-white/30">·</span>
            <span className="text-white/50">{item.from} suppliers compared</span>
            <span className={`flex items-center gap-0.5 font-semibold ${item.delta < 0 ? 'text-primary-400' : 'text-rose-400'}`}>
              {item.delta < 0 ? <ArrowDownRight className="w-3 h-3" /> : <ArrowUpRight className="w-3 h-3" />}
              {Math.abs(item.delta)}%
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <section id="top" className="relative pt-28 md:pt-36 pb-0 mesh-gradient">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center pb-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <span className="inline-flex items-center gap-2 text-xs font-semibold text-primary-700 bg-primary-50 px-3.5 py-1.5 rounded-full mb-6">
            <TrendingDown className="w-3.5 h-3.5" /> Live price comparisons across 500+ wholesalers
          </span>
          <h1 className="font-display text-balance text-5xl md:text-6xl lg:text-[3.75rem] font-semibold text-ink leading-[1.05] tracking-tight">
            Wholesale shopping,{' '}
            <span className="relative inline-block">
              made smarter.
              <svg className="absolute -bottom-2 left-0 w-full" height="10" viewBox="0 0 300 10" fill="none">
                <path d="M2 8C60 2 240 2 298 8" stroke="#00A86B" strokeWidth="4" strokeLinecap="round" />
              </svg>
            </span>
          </h1>
          <p className="mt-6 text-lg text-ink-700/70 leading-relaxed max-w-lg">
            Connect with trusted wholesalers, discover competitive prices, and manage every wholesale
            purchase in one powerful mobile application.
          </p>
          <div className="mt-9">
            <StoreBadges size="large" />
          </div>
          <div className="mt-8 flex items-center gap-6 text-ink-700/50">
            <div className="flex -space-x-2">
              {['from-primary-100 to-primary-400', 'from-amber-100 to-amber-400', 'from-sky-100 to-sky-400', 'from-rose-100 to-rose-400'].map((g, i) => (
                <div key={i} className={`w-8 h-8 rounded-full bg-gradient-to-br ${g} border-2 border-white`} />
              ))}
            </div>
            <p className="text-xs">
              <span className="font-bold text-ink">10,000+</span> merchants already saving with {APP_NAME}
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.15 }}
          className="relative flex justify-center lg:justify-end"
        >
          <div className="relative">
            <div className="absolute -inset-16 bg-primary/10 blur-3xl rounded-full" />
            <div className="animate-float">
              <PhoneFrame className="relative z-10">
                <HomeScreen />
              </PhoneFrame>
            </div>

            <motion.div
              className="absolute -left-16 top-10 glass rounded-2xl shadow-card p-3.5 w-44 border border-ink/5 z-20 animate-float-slow"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <div className="flex items-center gap-2 mb-1.5">
                <span className="grid place-items-center w-7 h-7 rounded-lg bg-primary-50 text-primary">
                  <TrendingDown className="w-4 h-4" />
                </span>
                <p className="text-[10px] font-semibold text-ink">Best price found</p>
              </div>
              <p className="text-[10px] text-ink-700/50">Rice 25kg bag</p>
              <p className="text-sm font-bold text-primary">$31.20 <span className="text-[10px] text-ink-700/40 font-normal">-9% vs avg</span></p>
            </motion.div>

            <motion.div
              className="absolute -right-10 bottom-24 glass rounded-2xl shadow-card p-3.5 w-40 border border-ink/5 z-20 animate-float"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <div className="flex items-center gap-2 mb-1">
                <span className="grid place-items-center w-7 h-7 rounded-lg bg-ink text-white">
                  <Bell className="w-3.5 h-3.5" />
                </span>
                <p className="text-[10px] font-semibold text-ink">Order shipped</p>
              </div>
              <p className="text-[10px] text-ink-700/50">#GB-3921 · arriving today</p>
            </motion.div>

            <motion.div
              className="absolute right-2 -top-6 glass rounded-2xl shadow-card p-3 w-36 border border-ink/5 z-20 animate-float-slow"
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
            >
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-primary" />
                <p className="text-[10px] font-semibold text-ink">Secure payments</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <TickerTape />
    </section>
  )
}
