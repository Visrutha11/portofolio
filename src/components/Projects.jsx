import React, { useState } from 'react'
import { motion } from 'framer-motion'
import './Projects.css'
import './GradientWord.css'
import { FaExternalLinkAlt, FaGithub, FaPaw, FaShoppingCart, FaGamepad } from 'react-icons/fa'

const Projects = () => {
  const [hoveredId, setHoveredId] = useState(null)

  const projectsData = [
    {
      id: 1,
      title: 'Veterinary Management System',
      description: 'Built a full-stack system for managing hospitals, users, and inventory.',
      tech: ['React.js', 'Node.js', 'MUI', 'MySQL'],
      highlights: [
        'Built REST APIs with validation and exception handling',
        'Integrated hospital, user, and inventory workflows'
      ],
      icon: FaPaw
    },
    {
      id: 2,
      title: 'E-Commerce Management System',
      description: 'Developed an end-to-end product selling platform.',
      tech: ['Java', 'JSP', 'Servlets', 'JDBC', 'SQL'],
      highlights: [
        'Added product create, update, and delete features',
        'Managed product images, pricing, and seller data'
      ],
      icon: FaShoppingCart
    },
    {
      id: 3,
      title: 'Brick Breaker Game',
      description: 'Interactive browser-based game focused on responsive design and user experience.',
      tech: ['HTML5', 'CSS3', 'Java'],
      highlights: [
        'Built interactive gameplay for the browser',
        'Focused on smooth UI and responsive experience'
      ],
      icon: FaGamepad
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100 }
    }
  }

  return (
    <section id="projects" className="projects">
      <div className="container">
        <motion.div className="section-title slide-in-up" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
          <h2>Projects</h2>
        </motion.div>

        <motion.div className="projects-grid" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
          {projectsData.map((project) => {
            const IconComponent = project.icon
            return (
              <motion.div
                key={project.id}
                className="project-card"
                variants={cardVariants}
                whileHover={{ y: -10 }}
                onHoverStart={() => setHoveredId(project.id)}
                onHoverEnd={() => setHoveredId(null)}
              >
                <motion.div className="project-icon" animate={{ scale: hoveredId === project.id ? 1.12 : 1 }} transition={{ type: 'spring' }}>
                  <IconComponent />
                </motion.div>

                <h3 className="project-title">
                  <span className="gradient-word">{project.title}</span>
                </h3>

                <p className="project-description">{project.description}</p>

                <div className="project-highlights">
                  {project.highlights.map((highlight) => (
                    <div key={highlight} className="highlight-item">
                      <span className="highlight-bullet">✓</span>
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>

                <div className="project-tech">
                  {project.tech.map((tech) => (
                    <span key={tech} className="tech-badge">{tech}</span>
                  ))}
                </div>

                <div className="project-links">
                  <a href="https://github.com/visrutha11" target="_blank" rel="noopener noreferrer" className="project-link">
                    <FaGithub /> GitHub
                  </a>
                  <a href="#contact" className="project-link">
                    <FaExternalLinkAlt /> Discuss
                  </a>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        <motion.div className="why-hire-section" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
          <div className="why-hire-title">
            <h3><span className="gradient-word">What I Do</span></h3>
          </div>
          <div className="why-hire-points">
            <div className="hire-point"><span>Build full-stack applications</span></div>
            <div className="hire-point"><span>Design REST APIs</span></div>
            <div className="hire-point"><span>Optimize performance</span></div>
            <div className="hire-point"><span>Write clean, scalable code</span></div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
