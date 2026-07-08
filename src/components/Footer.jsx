import { Package, Twitter, Instagram, Linkedin, Facebook } from 'lucide-react'
import { APP_NAME } from '../config'

const LINKS = [
  { label: 'Features', href: '#features' },
  { label: 'How it works', href: '#how-it-works' },
  { label: 'App showcase', href: '#showcase' },
  { label: 'Reviews', href: '#testimonials' },
]

const LEGAL = [
  { label: 'Privacy policy', href: '#' },
  { label: 'Terms of service', href: '#' },
  { label: 'Contact us', href: '#' },
]

const SOCIALS = [
  { icon: Twitter, href: '#' },
  { icon: Instagram, href: '#' },
  { icon: Linkedin, href: '#' },
  { icon: Facebook, href: '#' },
]

export default function Footer() {
  return (
    <footer className="bg-ink-800 text-white/60 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 pb-14 border-b border-white/10">
          <div className="md:col-span-2">
            <a href="#top" className="flex items-center gap-2 font-display text-xl font-semibold text-white">
              <span className="grid place-items-center w-9 h-9 rounded-xl bg-primary text-white">
                <Package className="w-5 h-5" strokeWidth={2} />
              </span>
              {APP_NAME}
            </a>
            <p className="mt-4 text-sm leading-relaxed max-w-sm">
              The wholesale marketplace connecting retailers with trusted suppliers — discover, compare,
              and order, all in one app.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold text-white uppercase tracking-wide mb-4">Quick links</p>
            <ul className="space-y-3 text-sm">
              {LINKS.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="hover:text-primary-400 transition-colors">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold text-white uppercase tracking-wide mb-4">Legal</p>
            <ul className="space-y-3 text-sm">
              {LEGAL.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="hover:text-primary-400 transition-colors">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-6 pt-8">
          <p className="text-xs">&copy; {new Date().getFullYear()} {APP_NAME}. All rights reserved.</p>
          <div className="flex items-center gap-3">
            {SOCIALS.map(({ icon: Icon, href }, i) => (
              <a
                key={i}
                href={href}
                className="grid place-items-center w-9 h-9 rounded-full bg-white/5 hover:bg-primary hover:text-white transition-colors"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
