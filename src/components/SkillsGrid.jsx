import { motion } from 'framer-motion'
import {
  Code2, BarChart3, Terminal, Brain, Globe2, Layers,
  Database, Shuffle, GitBranch, Cpu, BookOpen, Users,
  TrendingUp, CheckCircle2, Zap
} from 'lucide-react'

// Map icon names to Lucide icons
const lucideIconMap = {
  Code2, BarChart3, Terminal, Brain, Globe2, Layers,
  Database, GitBranch, Cpu
}

// Tech color map for badge styling
const techColors = {
  python:      { bg: '#3b82f620', border: '#3b82f640', text: '#93c5fd', dot: '#3b82f6' },
  cplusplus:   { bg: '#6366f120', border: '#6366f140', text: '#a5b4fc', dot: '#6366f1' },
  postgresql:  { bg: '#0ea5e920', border: '#0ea5e940', text: '#38bdf8', dot: '#0ea5e9' },
  php:         { bg: '#8b5cf620', border: '#8b5cf640', text: '#c4b5fd', dot: '#8b5cf6' },
  gnubash:     { bg: '#22c55e20', border: '#22c55e40', text: '#86efac', dot: '#22c55e' },
  javascript:  { bg: '#eab30820', border: '#eab30840', text: '#fde68a', dot: '#eab308' },
  sas:         { bg: '#06b6d420', border: '#06b6d440', text: '#67e8f9', dot: '#06b6d4' },
  databricks:  { bg: '#ef444420', border: '#ef444440', text: '#fca5a5', dot: '#ef4444' },
  powerbi:     { bg: '#f59e0b20', border: '#f59e0b40', text: '#fcd34d', dot: '#f59e0b' },
  linux:       { bg: '#84cc1620', border: '#84cc1640', text: '#bef264', dot: '#84cc16' },
  github:      { bg: '#ffffff15', border: '#ffffff25', text: '#e2e8f0', dot: '#94a3b8' },
  raspberrypi: { bg: '#ec489920', border: '#ec489940', text: '#f9a8d4', dot: '#ec4899' },
  arduino:     { bg: '#06b6d420', border: '#06b6d440', text: '#67e8f9', dot: '#06b6d4' },
  html5:       { bg: '#f97316 20', border: '#f9731640', text: '#fed7aa', dot: '#f97316' },
  scikitlearn: { bg: '#f97316 20', border: '#f9731640', text: '#fdba74', dot: '#f97316' },
  numpy:       { bg: '#3b82f620', border: '#3b82f640', text: '#93c5fd', dot: '#3b82f6' },
  pandas:      { bg: '#8b5cf620', border: '#8b5cf640', text: '#c4b5fd', dot: '#8b5cf6' },
  default:     { bg: '#0ea5e920', border: '#0ea5e940', text: '#38bdf8', dot: '#0ea5e9' },
}

// Special icon SVGs for known techs
const TechSVG = ({ icon, size = 18 }) => {
  const svgIcons = {
    python: (
      <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor">
        <path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05L0 11.97l.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.26-.31.23-.38.2-.44.18-.51.15-.58.12-.64.1-.71.06-.77.04-.84.02-1.27-.05-1.17-.14-1.03-.26-.87-.38-.68-.51-.42-.64-.14-.75.05-.84.26-.96.51-1.08.76-1.19 1.01-1.3.94-.82.67-.53.43-.28.28-.11.11v-5.19l.06-.65.15-.57.22-.5.28-.42.33-.36.37-.3.4-.24.42-.18.42-.14.4-.1.38-.06.33-.04.28-.01.24.01.22.04.21.07.2.12.19.18.17.26.14.37.12.51.08.69.03.9.01 1.14-.01 1.37-.03 1.07-.08.78-.12.56-.16.37-.21.24-.27.14-.35.06-.43.01-.48-.05-.49-.12-.47-.19-.42-.26-.36-.34-.27-.43-.17-.53-.05-.64.07-.72.21-.76.35-.77.49-.74.6-.68.7-.58.8-.47.86-.35.9-.21.91-.07.91.05.9.17.84.3.75.41.65.51.54.59.44.66.34.72.24.77.15.8.05.82-.02z"/>
      </svg>
    ),
    github: (
      <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
      </svg>
    ),
    linux: (
      <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor">
        <path d="M12.504 0c-.155 0-.315.008-.48.021-4.226.333-3.105 4.807-3.17 6.298-.076 1.092-.3 1.953-1.05 3.02-.885 1.051-2.127 2.75-2.716 4.521-.278.832-.41 1.684-.287 2.489a.424.424 0 00-.11.135c-.26.268-.45.6-.663.839-.199.199-.485.267-.797.4-.313.136-.658.269-.864.68-.09.189-.136.394-.132.602 0 .199.027.4.055.536.058.399.116.728.04.97-.249.68-.28 1.145-.106 1.484.174.334.535.47.94.601.81.2 1.91.135 2.774.6.926.466 1.866.67 2.616.47.526-.138.97-.45 1.27-.935.093.7.5 1.252 1.246 1.257 1.6.013 3.384-1.6 3.345-3.637-.01-.428-.13-.866-.214-1.273-.054-.2-.075-.4-.11-.609.1.069.234.177.31.317.18.295.3.653.36 1.001.143.95.219 2.017.61 2.58.501.722 1.561.863 2.503.707.942-.155 1.77-.509 2.1-.903.337-.394.18-.9-.041-1.547-.063-.187-.157-.38-.239-.574-.131-.338-.28-.72-.284-1.078.019-.26.109-.47.26-.64.169-.185.4-.368.676-.536.393-.237.893-.471 1.213-.897.32-.426.467-1.03.147-1.638-.097-.18-.228-.298-.354-.403-.033-.27.033-.544.014-.79-.025-.336-.115-.664-.236-.957-.234-.591-.57-1.056-.84-1.443-.115-.163-.21-.31-.25-.46.059-.063.196-.206.256-.44.028-.1.046-.22.042-.339-.01-.298-.125-.579-.266-.83C18.85 5.697 18.5 4.913 17.99 4.21c-.59-.81-1.393-1.454-2.313-1.795-.919-.34-1.972-.368-3.172-.415zm-.005 1.017c1.17-.023 2.26.143 3.1.446.84.302 1.57.867 2.092 1.598.522.732.818 1.477 1.07 2.1.25.62.49 1.1.647 1.449.155.346.255.572.233.806-.023.234-.14.43-.286.577-.25.262-.452.567-.534.963-.083.397-.013.882.138 1.19.052.11.117.213.185.316.252.367.5.782.647 1.248.15.468.175 1.004.072 1.468-.203.94-.69 1.516-1.2 1.91-.51.393-1.044.664-1.5.94-.46.277-.836.606-.875 1.094-.038.488.274.952.586 1.26.207.21.427.39.612.56.185.168.352.342.428.54.076.2.03.49-.058.805-.088.315-.213.656-.3.958-.087.302-.122.57-.08.794.04.224.152.398.29.53.139.13.304.222.488.313.368.182.803.356 1.16.612.354.257.64.61.633 1.115-.006.505-.322.956-.717 1.24-.395.284-.855.45-1.29.528-.44.079-.856.071-1.129-.086-.142-.08-.232-.195-.294-.345-.063-.15-.1-.333-.137-.526-.075-.383-.16-.804-.328-1.112-.169-.307-.447-.544-.821-.541-.373.003-.61.228-.741.497-.13.27-.18.589-.232.892-.052.303-.11.59-.24.824a1.01 1.01 0 01-.657.51c-.519.115-1.214-.06-1.869-.327-.656-.266-1.265-.637-1.6-1.061-.335-.424-.405-.877-.26-1.262.144-.385.475-.7.807-.975.333-.276.67-.523.898-.842.229-.32.307-.73.207-1.087-.1-.358-.4-.61-.764-.824-.364-.214-.783-.384-1.115-.596-.331-.212-.573-.455-.641-.747-.067-.292.003-.637.139-.993.136-.356.36-.73.54-1.14.182-.41.333-.862.34-1.347.008-.484-.135-.998-.51-1.458-.198-.24-.44-.457-.683-.645-.242-.188-.49-.362-.7-.556-.21-.195-.388-.408-.452-.675-.064-.266-.014-.585.142-.958.157-.374.458-.806.79-1.244.334-.437.699-.885.977-1.35.278-.464.456-.95.466-1.374.01-.424-.142-.773-.27-1.083a5.77 5.77 0 00-.363-.763c-.287-.51-.555-1.003-.617-1.535a2.29 2.29 0 01-.016-.288c.014-.55.167-1.1.492-1.586.326-.487.84-.91 1.54-1.165.7-.255 1.58-.374 2.746-.397z"/>
      </svg>
    ),
    arduino: (
      <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor">
        <path d="M12.026 14.88c-.5.5-1.15.75-1.8.75-.649 0-1.299-.25-1.799-.75-1-1-1-2.6 0-3.6.5-.5 1.15-.75 1.8-.75.65 0 1.3.25 1.8.75l1.35-1.35c-.83-.83-1.95-1.25-3.15-1.25-1.2 0-2.32.42-3.15 1.25-1.74 1.74-1.74 4.56 0 6.3.83.83 1.95 1.25 3.15 1.25 1.2 0 2.32-.42 3.15-1.25l-1.35-1.35zm1.949-1.35c.83.83 1.95 1.25 3.15 1.25 1.2 0 2.32-.42 3.15-1.25 1.74-1.74 1.74-4.56 0-6.3-.83-.83-1.95-1.25-3.15-1.25-1.2 0-2.32.42-3.15 1.25l1.35 1.35c.5-.5 1.15-.75 1.8-.75.649 0 1.299.25 1.799.75 1 1 1 2.6 0 3.6-.5.5-1.15.75-1.8.75-.649 0-1.299-.25-1.799-.75l-1.35 1.35zM12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-.015 5.64c3.53 0 6.375 2.845 6.375 6.375S15.515 18.39 11.985 18.39 5.61 15.545 5.61 12.015 8.455 5.64 11.985 5.64z"/>
      </svg>
    ),
  }

  return svgIcons[icon] || null
}

function getLucideIcon(iconName) {
  const icons = { Code2, BarChart3, Terminal, Brain, Globe2, Layers }
  const Icon = icons[iconName]
  return Icon ? <Icon size={18} className="text-electric-400" /> : <Zap size={18} className="text-electric-400" />
}

function SkillItem({ item }) {
  const colors = techColors[item.icon] || techColors.default
  const svgIcon = TechSVG({ icon: item.icon, size: 16 })

  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -2 }}
      transition={{ duration: 0.2 }}
      className="flex items-center gap-2.5 px-3 py-2 rounded-lg border transition-all duration-200"
      style={{
        background: colors.bg,
        borderColor: colors.border,
      }}
    >
      {/* Icon or dot */}
      <span style={{ color: colors.text, flexShrink: 0 }}>
        {svgIcon || (
          <span
            className="w-3 h-3 rounded-full flex-shrink-0 block"
            style={{ background: colors.dot, boxShadow: `0 0 6px ${colors.dot}60` }}
          />
        )}
      </span>

      <div className="min-w-0">
        <p className="text-xs font-body font-medium leading-tight truncate" style={{ color: colors.text }}>
          {item.name}
        </p>
        {item.level && (
          <p className="text-xs font-mono opacity-70" style={{ color: colors.text }}>
            {item.level}
          </p>
        )}
      </div>
    </motion.div>
  )
}

function CategoryCard({ category, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className="glass card-border rounded-xl p-5 flex flex-col gap-4 shadow-card"
    >
      {/* Category header */}
      <div className="flex items-center gap-2.5">
        <div className="p-2 rounded-lg bg-electric-500/10 border border-electric-500/20">
          {getLucideIcon(category.icon)}
        </div>
        <h3 className="font-display font-semibold text-white text-sm">{category.name}</h3>
      </div>

      {/* Items grid */}
      <div className="grid grid-cols-2 gap-2">
        {category.items.map((item) => (
          <SkillItem key={item.name} item={item} />
        ))}
      </div>
    </motion.div>
  )
}

export default function SkillsGrid({ lang, data }) {
  const skills = data.skills[lang]

  return (
    <section id="skills" className="relative py-24 lg:py-32 bg-void-800">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-electric-500/15 to-transparent" />
      <div className="absolute inset-0 bg-grid opacity-50" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="font-mono text-electric-400 text-sm tracking-widest uppercase mb-3">Stack</p>
          <h2 className="section-title text-white mb-4">{skills.sectionTitle}</h2>
          <p className="text-text-secondary font-body max-w-xl">
            {lang === 'en'
              ? 'Technologies, tools and methodologies I work with daily and learn continuously.'
              : 'Tecnologías, herramientas y metodologías con las que trabajo a diario y aprendo continuamente.'}
          </p>
        </motion.div>

        {/* Categories grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.categories.map((category, i) => (
            <CategoryCard key={category.name} category={category} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
