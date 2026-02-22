import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Download } from 'lucide-react'

const BASE = (import.meta.env.BASE_URL || '/').replace(/\/$/, '')

export default function Navbar({ lang, toggleLang, data }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const nav = data.nav[lang]
  const profile = data.profile[lang]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { href: '#about', label: nav.about },
    { href: '#projects', label: nav.projects },
    { href: '#skills', label: nav.skills },
    { href: '#experience', label: nav.experience },
    { href: '#contact', label: nav.contact },
  ]

  const scrollTo = (e, href) => {
    e.preventDefault()
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
    setMobileOpen(false)
  }

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-void-900/90 backdrop-blur-xl border-b border-white/5 shadow-lg shadow-black/20'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a href="#about" onClick={(e) => scrollTo(e, '#about')} className="flex items-center gap-2.5 group">
              <img
                src={`${BASE}/${data.profile.logo}`}
                alt="logo"
                className="h-8 w-8 opacity-90 group-hover:opacity-100 transition-opacity"
              />
              <span className="font-display font-semibold text-sm tracking-wide text-white/80 group-hover:text-electric-400 transition-colors">
                {data.profile.handle}
              </span>
            </a>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-1">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => scrollTo(e, link.href)}
                  className="px-3 py-1.5 text-sm text-text-secondary hover:text-electric-400 font-body transition-colors rounded-lg hover:bg-electric-500/5"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Controls */}
            <div className="flex items-center gap-2">
              {/* Lang toggle */}
              <button
                onClick={toggleLang}
                className="relative flex items-center h-8 bg-surface-900 border border-white/10 rounded-full px-1 gap-0.5 hover:border-electric-500/40 transition-all duration-200"
                aria-label="Toggle language"
              >
                {['EN', 'ES'].map((l) => (
                  <span
                    key={l}
                    className={`relative z-10 px-2 py-0.5 text-xs font-mono font-semibold rounded-full transition-all duration-200 ${
                      lang === l.toLowerCase()
                        ? 'bg-electric-500 text-white shadow-electric-sm'
                        : 'text-text-muted hover:text-text-secondary'
                    }`}
                  >
                    {l}
                  </span>
                ))}
              </button>

              {/* CV Download */}
              <a
                href={`${BASE}/${profile.cvFile}`}
                download
                className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-medium bg-electric-500/10 border border-electric-500/30 text-electric-400 rounded-lg hover:bg-electric-500/20 hover:border-electric-500/60 transition-all duration-200"
              >
                <Download size={12} />
                {profile.downloadCV}
              </a>

              {/* Mobile menu */}
              <button
                className="md:hidden p-1.5 text-text-secondary hover:text-white transition-colors"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-0 right-0 z-40 glass border-b border-white/5 py-4 px-6 md:hidden"
          >
            <div className="flex flex-col gap-1">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => scrollTo(e, link.href)}
                  className="py-2.5 text-sm text-text-secondary hover:text-electric-400 font-body transition-colors border-b border-white/5 last:border-0"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={`${BASE}/${profile.cvFile}`}
                download
                className="mt-2 flex items-center justify-center gap-2 py-2.5 text-sm font-mono font-medium bg-electric-500/10 border border-electric-500/30 text-electric-400 rounded-lg"
              >
                <Download size={14} />
                {profile.downloadCV}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
