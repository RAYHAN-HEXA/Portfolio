import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { projectsData } from '../data/projectsData'

const Projects = () => {
  const containerRef = useRef(null)
  const bgRef1 = useRef(null)
  const bgRef2 = useRef(null)

  // GSAP subtle background animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(bgRef1.current, {
        y: -20,
        x: 15,
        rotation: 5,
        duration: 12,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      })

      gsap.to(bgRef2.current, {
        y: 25,
        x: -15,
        rotation: -5,
        duration: 14,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  const openUrl = (url, type) => {
    if (!url) {
      alert(`${type} URL is not available for this project.`)
      return
    }
    
    try {
      window.open(url, '_blank', 'noopener,noreferrer')
    } catch (error) {
      console.error(`Error opening ${type}:`, error)
      alert(`Unable to open ${type}. Please try again later.`)
    }
  }

  return (
    <section 
      id="projects" 
      ref={containerRef}
      className="relative w-full min-h-screen flex items-center justify-center p-6 py-20 bg-bg-primary overflow-hidden"
    >
      {/* Subtle animated backgrounds */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          ref={bgRef1} 
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl"
          style={{ background: 'rgba(99, 102, 241, 0.05)' }}
        ></div>
        <div 
          ref={bgRef2} 
          className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-3xl"
          style={{ background: 'rgba(139, 92, 246, 0.05)' }}
        ></div>
      </div>

      <div className="relative w-full max-w-7xl mx-auto">
        {/* Header */}
        <header className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="material-symbols-outlined text-primary text-2xl">folder_open</span>
            <span className="text-text-secondary font-medium text-sm uppercase tracking-wider">
              Portfolio Showcase
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
            Featured <span className="gradient-text-cyan">Projects</span>
          </h1>
          <p className="text-text-secondary text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Production-ready applications built with modern technologies and best practices
          </p>
          <div className="h-px bg-gradient-to-r from-transparent via-border-accent to-transparent mx-auto mt-8 w-24"></div>
        </header>

        {/* Projects Grid */}
        <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              className="professional-card group cursor-pointer overflow-hidden hover-lift"
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                delay: 0.2 * index, 
                duration: 0.8, 
                ease: "power3.out" 
              }}
            >
              {/* Project Image */}
              <div className="relative w-full aspect-video overflow-hidden bg-bg-secondary">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-bg-tertiary">
                    <span className="material-symbols-outlined text-text-muted text-4xl">image</span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/80 to-transparent opacity-60"></div>
                
                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex gap-3">
                    <button
                      onClick={() => openUrl(project.demo, 'Live Demo')}
                      className="p-3 bg-bg-primary/90 rounded-full text-primary hover:bg-primary hover:text-bg-primary transition-all duration-300"
                      title="View Live Demo"
                    >
                      <span className="material-symbols-outlined">open_in_new</span>
                    </button>
                    <button
                      onClick={() => openUrl(project.github, 'GitHub Repository')}
                      className="p-3 bg-bg-primary/90 rounded-full text-primary hover:bg-primary hover:text-bg-primary transition-all duration-300"
                      title="View Source Code"
                    >
                      <span className="material-symbols-outlined">code</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-4">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-bold text-text-primary group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <span className="text-text-muted text-sm">
                    #{project.id.toString().padStart(2, '0')}
                  </span>
                </div>

                <p className="text-text-secondary text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech} 
                      className="tech-button text-xs hover:border-primary hover:text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-2">
                  <button
                    onClick={() => openUrl(project.demo, 'Live Demo')}
                    className="flex-1 primary-button text-sm py-2 hover:scale-105 transition-transform duration-200"
                    title="View Live Demo"
                  >
                    <span className="material-symbols-outlined mr-2 text-sm">open_in_new</span>
                    Live Demo
                  </button>
                  <button
                    onClick={() => openUrl(project.github, 'GitHub Repository')}
                    className="flex-1 secondary-button text-sm py-2 hover:scale-105 transition-transform duration-200"
                    title="View Source Code"
                  >
                    <span className="material-symbols-outlined mr-2 text-sm">code</span>
                    GitHub
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </main>

        {/* View More Projects */}
        <div className="text-center mt-16">
          <button
            onClick={() => window.open('https://github.com/RAYHAN-HEXA', '_blank', 'noopener,noreferrer')}
            className="secondary-button hover:scale-105 transition-transform duration-300"
          >
            <span className="material-symbols-outlined mr-2">grid_view</span>
            View All Projects
          </button>
        </div>
      </div>
    </section>
  )
}

export default Projects