import { motion } from 'framer-motion'
import { Briefcase, GraduationCap, Award, ExternalLink } from 'lucide-react'

const typeConfig = {
  work:      { icon: Briefcase, color: '#0ea5e9', bg: 'rgba(14,165,233,0.15)', border: 'rgba(14,165,233,0.3)', label: 'Work' },
  education: { icon: GraduationCap, color: '#22d3ee', bg: 'rgba(34,211,238,0.12)', border: 'rgba(34,211,238,0.25)', label: 'Education' },
  course:    { icon: Award, color: '#38bdf8', bg: 'rgba(56,189,248,0.10)', border: 'rgba(56,189,248,0.2)', label: 'Course' },
}

function TimelineItem({ item, index, lang }) {
  const config = typeConfig[item.type] || typeConfig.course
  const Icon = config.icon

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="relative flex gap-5 group"
    >
      {/* Timeline line */}
      <div className="flex flex-col items-center flex-shrink-0">
        <motion.div
          whileHover={{ scale: 1.15 }}
          className="w-10 h-10 rounded-xl flex items-center justify-center border z-10 transition-all duration-300 group-hover:shadow-electric-sm"
          style={{ background: config.bg, borderColor: config.border }}
        >
          <Icon size={16} style={{ color: config.color }} />
        </motion.div>
        {/* Connector */}
        <div className="w-px flex-1 mt-1 bg-gradient-to-b from-white/10 to-transparent min-h-[24px]" />
      </div>

      {/* Content */}
      <div className="pb-8 flex-1 min-w-0">
        {/* Type badge */}
        <span
          className="inline-block px-2 py-0.5 rounded-full text-xs font-mono mb-2 border"
          style={{ background: config.bg, borderColor: config.border, color: config.color }}
        >
          {item.type === 'work' ? (lang === 'en' ? 'Work' : 'Trabajo') :
           item.type === 'education' ? (lang === 'en' ? 'Education' : 'Educación') :
           lang === 'en' ? 'Certification' : 'Certificación'}
        </span>

        <div className="glass card-border rounded-xl p-5 shadow-card group-hover:border-electric-500/20 transition-all duration-300">
          <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
            <div>
              <h3 className="font-display font-semibold text-white text-base leading-tight">
                {item.role}
              </h3>
              <div className="flex items-center gap-1.5 mt-0.5">
                {item.url ? (
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-body text-text-secondary hover:text-electric-400 transition-colors flex items-center gap-1"
                  >
                    {item.company}
                    <ExternalLink size={11} />
                  </a>
                ) : (
                  <span className="text-sm font-body text-text-secondary">{item.company}</span>
                )}
              </div>
            </div>
            <span className="text-xs font-mono text-text-muted bg-surface-800 px-2.5 py-1 rounded-lg border border-white/5 flex-shrink-0">
              {item.period}
            </span>
          </div>

          {item.highlights && (
            <ul className="space-y-1.5">
              {item.highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-text-secondary font-body leading-relaxed">
                  <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ background: config.color }} />
                  {h}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export default function Experience({ lang, data }) {
  const exp = data.experience[lang]

  const workItems = exp.items.filter(i => i.type === 'work')
  const educationItems = exp.items.filter(i => i.type === 'education')
  const courseItems = exp.items.filter(i => i.type === 'course')

  return (
    <section id="experience" className="relative py-24 lg:py-32 bg-void-900">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-electric-500/15 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="font-mono text-electric-400 text-sm tracking-widest uppercase mb-3">Journey</p>
          <h2 className="section-title text-white mb-4">{exp.sectionTitle}</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-x-16 gap-y-0">
          {/* Left: Work + Education */}
          <div>
            {/* Work */}
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="font-display font-semibold text-text-muted text-xs tracking-widest uppercase mb-6 flex items-center gap-2"
            >
              <Briefcase size={13} className="text-electric-500" />
              {exp.workLabel}
            </motion.h3>
            {workItems.map((item, i) => (
              <TimelineItem key={i} item={item} index={i} lang={lang} />
            ))}

            {/* Education */}
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="font-display font-semibold text-text-muted text-xs tracking-widest uppercase mb-6 mt-2 flex items-center gap-2"
            >
              <GraduationCap size={13} className="text-cyber-400" />
              {exp.educationLabel}
            </motion.h3>
            {educationItems.map((item, i) => (
              <TimelineItem key={i} item={item} index={workItems.length + i} lang={lang} />
            ))}
          </div>

          {/* Right: Courses / Certifications */}
          <div>
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="font-display font-semibold text-text-muted text-xs tracking-widest uppercase mb-6 flex items-center gap-2"
            >
              <Award size={13} className="text-electric-400" />
              {exp.coursesLabel}
            </motion.h3>
            {courseItems.map((item, i) => (
              <TimelineItem key={i} item={item} index={i} lang={lang} />
            ))}

            {/* Stats card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="glass card-border rounded-2xl p-6 shadow-card mt-4"
            >
              <p className="font-mono text-text-muted text-xs tracking-wider uppercase mb-5">
                {lang === 'en' ? 'Quick Stats' : 'En números'}
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: lang === 'en' ? 'Projects' : 'Proyectos', value: '9+' },
                  { label: lang === 'en' ? 'Semesters' : 'Semestres', value: '9' },
                  { label: lang === 'en' ? 'Languages' : 'Lenguajes', value: '6+' },
                  { label: lang === 'en' ? 'Open Source' : 'Open Source', value: '♥' },
                ].map((stat) => (
                  <div key={stat.label} className="text-center p-3 rounded-xl bg-surface-900/60 border border-white/5">
                    <p className="font-display font-bold text-2xl text-electric-400">{stat.value}</p>
                    <p className="font-body text-text-muted text-xs mt-0.5">{stat.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
