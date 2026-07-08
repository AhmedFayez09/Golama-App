import { useEffect, useRef, useState } from 'react'
import { motion, useInView, animate } from 'framer-motion'

const STATS = [
  { value: 1000, suffix: '+', label: 'Wholesale products' },
  { value: 500, suffix: '+', label: 'Trusted wholesalers' },
  { value: 10, suffix: 'K+', label: 'Retailers' },
  { value: 99, suffix: '%', label: 'Customer satisfaction' },
]

function Counter({ value, suffix }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.6 })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!inView) return
    const controls = animate(0, value, {
      duration: 1.6,
      ease: 'easeOut',
      onUpdate: (v) => setDisplay(Math.floor(v)),
    })
    return () => controls.stop()
  }, [inView, value])

  return (
    <span ref={ref} className="font-display text-4xl md:text-5xl font-semibold text-white">
      {display}
      {suffix}
    </span>
  )
}

export default function Stats() {
  return (
    <section className="py-20 bg-ink">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-10">
        {STATS.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="text-center md:text-left"
          >
            <Counter value={s.value} suffix={s.suffix} />
            <p className="mt-2 text-sm text-white/50">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
