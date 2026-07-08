import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Menu, X, Package } from 'lucide-react'
import { APP_NAME } from '../config'

const LINKS = [
  { label: 'Features', href: '#features' },
  { label: 'How it works', href: '#how-it-works' },
  { label: 'App', href: '#showcase' },
  { label: `Why ${APP_NAME}`, href: '#why-gobar' },
  { label: 'Reviews', href: '#testimonials' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = LINKS.map((l) => document.querySelector(l.href)).filter(Boolean)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive('#' + entry.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-3' : 'py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div
          className={`flex items-center justify-between rounded-2xl px-4 transition-all duration-300 ${
            scrolled ? 'glass shadow-card py-2.5 border border-ink/5' : 'py-1'
          }`}
        >
          <a href="#top" className="flex items-center gap-2 font-display text-xl font-semibold text-ink">
            <span className="grid place-items-center w-9 h-9 rounded-xl bg-primary text-white">
              <Package className="w-5 h-5" strokeWidth={2} />
            </span>
            {APP_NAME}
          </a>

          <nav className="hidden md:flex items-center gap-1">
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                  active === link.href ? 'text-primary' : 'text-ink-700/70 hover:text-ink'
                }`}
              >
                {link.label}
                {active === link.href && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-0 -z-10 rounded-full bg-primary-50"
                  />
                )}
              </a>
            ))}
          </nav>

          <a
            href="#download"
            className="hidden md:inline-flex items-center px-5 py-2.5 rounded-full bg-primary text-white text-sm font-semibold shadow-card hover:bg-primary-600 hover:-translate-y-0.5 transition-all duration-300"
          >
            Get the app
          </a>

          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden grid place-items-center w-10 h-10 rounded-full text-ink"
            aria-label="Toggle menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-2 glass rounded-2xl shadow-card border border-ink/5 p-4 flex flex-col gap-1"
          >
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="px-4 py-3 rounded-xl text-sm font-medium text-ink-700 hover:bg-primary-50 hover:text-primary"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#download"
              onClick={() => setOpen(false)}
              className="mt-2 text-center px-4 py-3 rounded-xl bg-primary text-white text-sm font-semibold"
            >
              Get the app
            </a>
          </motion.div>
        )}
      </div>
    </motion.header>
  )
}
