import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

import data from './data.json'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/ProjectCard'
import SkillsGrid from './components/SkillsGrid'
import Experience from './components/Experience'
import Footer from './components/Footer'

function PageTransition({ children, langKey }) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={langKey}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}

export default function App() {
  const [lang, setLang] = useState(() => {
    try {
      return localStorage.getItem('portfolio-lang') || 'en'
    } catch {
      return 'en'
    }
  })

  const toggleLang = () => {
    const newLang = lang === 'en' ? 'es' : 'en'
    setLang(newLang)
    try {
      localStorage.setItem('portfolio-lang', newLang)
    } catch { /* ignore */ }
    // Update html lang attribute
    document.documentElement.lang = newLang
  }

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  return (
    <div className="min-h-screen bg-void-900 noise-overlay">
      {/* Fixed navbar - always visible, outside page transition */}
      <Navbar lang={lang} toggleLang={toggleLang} data={data} />

      {/* Animated page content on lang change */}
      <PageTransition langKey={lang}>
        <main>
          <Hero lang={lang} data={data} />
          <Projects lang={lang} data={data} />
          <SkillsGrid lang={lang} data={data} />
          <Experience lang={lang} data={data} />
        </main>
        <Footer lang={lang} data={data} />
      </PageTransition>
    </div>
  )
}
