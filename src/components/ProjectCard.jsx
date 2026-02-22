import { motion } from 'framer-motion'
import { Github, ExternalLink, Star } from 'lucide-react'

const BASE = import.meta.env.BASE_URL.replace(//$/, "")
const UNSPLASH_PLACEHOLDER = 'https://source.unsplash.com/featured/?technology,code'

function ProjectCard({ project, lang, index, featured = false }) {
  const p = project[lang]
  const imageSrc = project.image ? `${BASE}/${project.image}` : UNSPLASH_PLACEHOLDER

  if (featured) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="col-span-full"
      >
        <div className="relative group glass card-border rounded-2xl overflow-hidden shadow-card hover:shadow-electric transition-all duration-500">
          {/* Featured ribbon */}
          <div className="absolute top-4 left-4 z-20 flex items-center gap-2 px-3 py-1.5 rounded-full bg-electric-500/20 border border-electric-500/40 backdrop-blur-sm">
            <Star size={11} className="text-electric-400 fill-electric-400" />
            <span className="text-electric-300 text-xs font-mono font-semibold tracking-wider">{p.label}</span>
          </div>

          <div className="grid md:grid-cols-2 gap-0">
            {/* Image */}
            <div className="relative h-64 md:h-full overflow-hidden min-h-[280px]">
              <img
                src={imageSrc}
                alt={p.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-void-900/20 via-transparent to-void-900/80 md:bg-gradient-to-r md:from-transparent md:to-surface-900/95" />
              <div className="absolute inset-0 bg-gradient-to-t from-void-900/90 to-transparent md:hidden" />
            </div>

            {/* Content */}
            <div className="relative p-8 md:p-10 flex flex-col justify-center gap-5">
              {/* Glow accent */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-electric-500/5 rounded-full blur-3xl pointer-events-none" />

              <div>
                <h3 className="font-display font-bold text-white leading-tight mb-1" style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)' }}>
                  {p.title}
                </h3>
                <p className="text-electric-400 font-mono text-sm">{p.subtitle}</p>
              </div>

              <p className="text-text-secondary leading-relaxed font-body text-sm">
                {p.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {p.tags?.map((tag) => (
                  <span key={tag} className="tag-pill">{tag}</span>
                ))}
              </div>

              <div className="flex items-center gap-3 pt-1">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-electric-500/10 border border-electric-500/30 text-electric-400 text-sm font-body hover:bg-electric-500/20 hover:border-electric-500/60 transition-all duration-200"
                  >
                    <Github size={14} />
                    {lang === 'en' ? 'Repository' : 'Repositorio'}
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg border border-white/10 text-text-secondary text-sm font-body hover:border-electric-500/30 hover:text-electric-400 transition-all duration-200"
                  >
                    <ExternalLink size={14} />
                    Live
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6, delay: index * 0.07, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -4 }}
      className="group glass card-border rounded-xl overflow-hidden shadow-card hover:shadow-electric transition-all duration-300 flex flex-col"
    >
      {/* Image */}
      <div className="relative h-44 overflow-hidden flex-shrink-0">
        <img
          src={imageSrc}
          alt={p.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          onError={(e) => { e.target.src = UNSPLASH_PLACEHOLDER }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface-900/90 via-surface-900/20 to-transparent" />

        {/* Hover overlay */}
        <div className="absolute inset-0 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-void-900/50 backdrop-blur-sm">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-electric-500/20 border border-electric-500/40 text-electric-400 hover:bg-electric-500/40 transition-colors"
            >
              <Github size={16} />
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-colors"
            >
              <ExternalLink size={16} />
            </a>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col gap-3 flex-1">
        <h3 className="font-display font-semibold text-white text-base leading-snug group-hover:text-electric-300 transition-colors">
          {p.title}
        </h3>

        <p className="text-text-muted text-sm leading-relaxed font-body line-clamp-3 flex-1">
          {p.description}
        </p>

        <div className="flex flex-wrap gap-1.5 pt-1">
          {p.tags?.slice(0, 4).map((tag) => (
            <span key={tag} className="tag-pill">{tag}</span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects({ lang, data }) {
  const sectionTitle = lang === 'en' ? 'Projects' : 'Proyectos'
  const sectionSub = lang === 'en'
    ? "Things I've built — from coursework to real-world tools."
    : "Cosas que he construido — desde materias hasta herramientas reales."

  return (
    <section id="projects" className="relative py-24 lg:py-32 bg-void-900">
      {/* Subtle divider glow */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-electric-500/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="font-mono text-electric-400 text-sm tracking-widest uppercase mb-3">Portfolio</p>
          <h2 className="section-title text-white mb-4">{sectionTitle}</h2>
          <p className="text-text-secondary font-body max-w-xl">{sectionSub}</p>
        </motion.div>

        {/* Featured thesis */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-5">
          <ProjectCard
            project={data.thesis}
            lang={lang}
            index={0}
            featured
          />
        </div>

        {/* Project grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {data.projects.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              lang={lang}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
