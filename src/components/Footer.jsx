import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Heart } from 'lucide-react'

const BASE = (import.meta.env.BASE_URL || '/').replace(/\/$/, '')

export default function Footer({ lang, data }) {
  const profile = data.profile
  const contact = data.contact[lang]
  const p = profile[lang]

  const today = new Date()
  const lastUpdated = today.toLocaleDateString(lang === 'en' ? 'en-US' : 'es-MX', {
    year: 'numeric', month: 'long', day: 'numeric'
  })

  return (
    <>
      {/* Contact section */}
      <section id="contact" className="relative py-24 lg:py-32 bg-void-800 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-electric-500/15 to-transparent" />
        <div className="absolute inset-0 bg-grid opacity-40" />

        {/* Central glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-electric-500/5 blur-[100px] rounded-full pointer-events-none" />

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <p className="font-mono text-electric-400 text-sm tracking-widest uppercase">Contact</p>

            <h2 className="font-display font-bold text-white leading-tight" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
              {contact.sectionTitle}
            </h2>

            <p className="text-text-secondary font-body text-lg max-w-lg mx-auto">
              {contact.subtitle}
            </p>

            <motion.a
              href={`mailto:${profile.email}`}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-electric-500 text-white font-body font-medium text-base hover:bg-electric-600 transition-all duration-200 shadow-electric"
            >
              <Mail size={18} />
              {contact.emailLabel}
            </motion.a>

            {/* Social links */}
            <div className="flex items-center justify-center gap-4 pt-4">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-lg border border-white/10 text-text-secondary hover:text-white hover:border-white/20 transition-all duration-200 font-body text-sm"
              >
                <Github size={16} />
                GitHub
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-lg border border-white/10 text-text-secondary hover:text-white hover:border-white/20 transition-all duration-200 font-body text-sm"
              >
                <Linkedin size={16} />
                LinkedIn
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer bar */}
      <footer className="bg-void-950 border-t border-white/5 py-8 px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Brand */}
          <div className="flex items-center gap-2.5">
            <img
              src={`${BASE}/${profile.logo}`}
              alt="logo"
              className="h-6 w-6 opacity-60"
            />
            <span className="font-mono text-text-muted text-xs">
              {profile.handle}
            </span>
          </div>

          {/* Update date */}
          <p className="text-text-muted text-xs font-mono text-center">
            {lang === 'en' ? 'Last updated:' : 'Última actualización:'} {lastUpdated}
          </p>

          {/* Credit */}
          <p className="text-text-muted text-xs font-body flex items-center gap-1">
            {lang === 'en' ? 'Coded with good music in the background' : 'Programado con buena música de fondo'}
            <Heart size={11} className="text-electric-500 fill-electric-500" />
          </p>
        </div>
      </footer>
    </>
  )
}
