import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Download, ArrowDown, Github, Linkedin, Mail } from 'lucide-react'
import { useTypingEffect } from '../hooks/useTypingEffect'

const BASE = import.meta.env.BASE_URL.replace(//$/, "")

// Particle canvas background
function ParticleCanvas() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animId

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const particles = Array.from({ length: 60 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      size: Math.random() * 2 + 0.5,
      opacity: Math.random() * 0.5 + 0.1,
    }))

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw connections
      particles.forEach((p, i) => {
        particles.slice(i + 1).forEach((q) => {
          const dx = p.x - q.x
          const dy = p.y - q.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 120) {
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(q.x, q.y)
            ctx.strokeStyle = `rgba(14,165,233,${0.08 * (1 - dist / 120)})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        })
      })

      // Draw particles
      particles.forEach((p) => {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0) p.x = canvas.width
        if (p.x > canvas.width) p.x = 0
        if (p.y < 0) p.y = canvas.height
        if (p.y > canvas.height) p.y = 0

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(56,189,248,${p.opacity})`
        ctx.fill()
      })

      animId = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
    />
  )
}

export default function Hero({ lang, data }) {
  const profile = data.profile
  const p = profile[lang]

  const typingTexts = lang === 'en'
    ? ['Junior BI Engineer.', 'Data Engineer.', 'Open-Source Enthusiast.', 'Linux Lover.', 'Maker & Builder.']
    : ['Junior BI Engineer.', 'Ingeniero de Datos.', 'Entusiasta del Open-Source.', 'Amante de Linux.', 'Creador de cosas.']

  const typingText = useTypingEffect(typingTexts, 65, 2200)

  const scrollToProjects = (e) => {
    e.preventDefault()
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  const containerVariants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } }
  }
  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
  }

  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-void-900"
    >
      {/* Grid background */}
      <div className="absolute inset-0 bg-grid opacity-100" />

      {/* Radial glow */}
      <div className="absolute inset-0 bg-hero-glow" />

      {/* Extra glow spot */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-electric-500/5 blur-[120px] pointer-events-none" />

      {/* Particle background */}
      <ParticleCanvas />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 py-24 lg:py-32">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left: Text content */}
          <div className="space-y-6">
            {/* Status badge */}
            <motion.div variants={itemVariants}>
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-900/80 border border-electric-500/20 text-electric-400 text-xs font-mono">
                <span className="glow-dot" />
                {lang === 'en' ? 'Open to opportunities' : 'Abierto a oportunidades'}
              </span>
            </motion.div>

            {/* Name */}
            <motion.div variants={itemVariants}>
              <h1 className="font-display font-bold leading-tight" style={{ fontSize: 'clamp(2.2rem, 6vw, 3.8rem)' }}>
                <span className="text-gradient-warm">Alfredo</span>
                <br />
                <span className="text-white">Bautista Ríos</span>
              </h1>
            </motion.div>

            {/* Typing effect role */}
            <motion.div variants={itemVariants} className="h-8 flex items-center">
              <span className="font-mono text-electric-400 text-lg">
                {typingText}
                <span className="animate-blink text-electric-300">|</span>
              </span>
            </motion.div>

            {/* Tagline */}
            <motion.p variants={itemVariants} className="text-text-muted font-mono text-sm italic">
              "{p.tagline}"
            </motion.p>

            {/* Bio */}
            <motion.p variants={itemVariants} className="text-text-secondary leading-relaxed text-base max-w-lg font-body">
              {p.bio}
            </motion.p>

            {/* Meta info */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 text-sm text-text-muted font-body">
              <span className="flex items-center gap-1.5">
                <span className="text-electric-400">📍</span>
                {profile.location}
              </span>
              <span className="flex items-center gap-1.5">
                <span className="text-electric-400">🎓</span>
                {lang === 'en' ? 'ESCOM – IPN, Final Semester' : 'ESCOM – IPN, Último Semestre'}
              </span>
              <span className="flex items-center gap-1.5">
                <span className="text-electric-400">💼</span>
                {lang === 'en' ? 'Hybrid / Remote' : 'Híbrido / Remoto'}
              </span>
            </motion.div>

            {/* CTA buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-3 pt-2">
              <a
                href={`${BASE}/${p.cvFile}`}
                download
                className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-electric-500 text-white text-sm font-body font-medium hover:bg-electric-600 transition-all duration-200 shadow-electric hover:shadow-none"
              >
                <Download size={15} />
                {p.downloadCV}
              </a>
              <a
                href="#projects"
                onClick={scrollToProjects}
                className="flex items-center gap-2 px-5 py-2.5 rounded-lg border border-white/10 text-text-secondary text-sm font-body hover:border-electric-500/40 hover:text-electric-400 transition-all duration-200"
              >
                {lang === 'en' ? 'View Projects' : 'Ver Proyectos'}
                <ArrowDown size={14} />
              </a>
            </motion.div>

            {/* Social links */}
            <motion.div variants={itemVariants} className="flex items-center gap-3 pt-1">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-text-muted hover:text-electric-400 hover:bg-electric-500/5 border border-transparent hover:border-electric-500/20 transition-all duration-200"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-text-muted hover:text-electric-400 hover:bg-electric-500/5 border border-transparent hover:border-electric-500/20 transition-all duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="p-2 rounded-lg text-text-muted hover:text-electric-400 hover:bg-electric-500/5 border border-transparent hover:border-electric-500/20 transition-all duration-200"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
              <span className="w-px h-5 bg-white/10" />
              <span className="text-xs font-mono text-text-muted">{profile.email}</span>
            </motion.div>
          </div>

          {/* Right: Profile image with decorative frame */}
          <motion.div
            variants={itemVariants}
            className="hidden lg:flex justify-center items-center"
          >
            <div className="relative">
              {/* Outer glow ring */}
              <div className="absolute inset-0 rounded-full bg-electric-500/10 blur-3xl scale-110" />

              {/* Decorative ring */}
              <div className="absolute -inset-3 rounded-full border border-electric-500/15 animate-pulse-slow" />
              <div className="absolute -inset-6 rounded-full border border-electric-500/8" />

              {/* Profile image */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="relative w-72 h-72 rounded-full overflow-hidden border-2 border-electric-500/30 shadow-electric"
              >
                <img
                  src={`${BASE}/${profile.profileImage}`}
                  alt={profile.name}
                  className="w-full h-full object-cover"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-void-900/40 to-transparent" />
              </motion.div>

              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -bottom-4 -right-4 glass px-4 py-2.5 rounded-xl shadow-card"
              >
                <p className="text-xs text-text-muted font-mono">{lang === 'en' ? 'Currently at' : 'Actualmente en'}</p>
                <p className="text-sm font-display font-semibold text-white">Profuturo</p>
              </motion.div>

              {/* Top badge */}
              <motion.div
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute -top-4 -left-4 glass px-4 py-2.5 rounded-xl shadow-card"
              >
                <p className="text-xs text-text-muted font-mono">ESCOM – IPN</p>
                <p className="text-sm font-display font-semibold text-electric-400">
                  {lang === 'en' ? 'Engineer' : 'Ingeniero'}
                </p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-text-muted text-xs font-mono">scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="w-px h-8 bg-gradient-to-b from-electric-500/50 to-transparent"
          />
        </motion.div>
      </div>
    </section>
  )
}
