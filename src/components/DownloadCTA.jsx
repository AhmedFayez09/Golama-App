import { motion } from 'framer-motion'
import StoreBadges from './StoreBadges'
import { APP_NAME } from '../config'

export default function DownloadCTA() {
  return (
    <section id="download" className="py-24 md:py-32 bg-ink relative overflow-hidden">
      <div className="absolute inset-0 mesh-gradient opacity-40" />
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-primary/20 blur-3xl" />
      <div className="relative max-w-3xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-3xl md:text-5xl font-semibold text-white text-balance">
            Start growing your business today
          </h2>
          <p className="mt-5 text-white/60 text-lg max-w-xl mx-auto">
            Download {APP_NAME} now and experience smarter wholesale purchasing.
          </p>
          <div className="mt-10">
            <StoreBadges size="large" align="center" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
