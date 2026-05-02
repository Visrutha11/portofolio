import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import './About.css'
import './GradientWord.css'

const About = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true)
    })

    const element = document.getElementById('about')
    if (element) observer.observe(element)
    return () => observer.disconnect()
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  }

  const focusAreas = ['Build full-stack applications', 'Design REST APIs', 'Optimize performance', 'Write clean, scalable code']

  return (
    <section id="about" className="about">
      <div className="container">
        <motion.div
          className="section-title slide-in-up"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>About Me</h2>
        </motion.div>

        <motion.div
          className={`about-content ${isVisible ? 'is-visible' : ''}`}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div className="about-text" variants={itemVariants}>
            <motion.p variants={itemVariants}>
              I am a passionate <span className="gradient-word">Full Stack Developer</span> with over{' '}
              <span className="gradient-word">2 years of experience</span> in developing scalable web
              applications using modern technologies like React.js and Node.js. I focus on building efficient,
              user-friendly, and high-performance systems.
            </motion.p>

            <motion.p variants={itemVariants}>
              I have hands-on experience in frontend development, backend API design, database management, and
              end-to-end testing. I enjoy solving real-world problems and continuously improving my skills to stay
              updated with industry trends.
            </motion.p>

            <motion.div className="about-highlights" variants={containerVariants}>
              <motion.div className="highlight-item" variants={itemVariants}>
                <span className="highlight-number">2+</span>
                <span className="highlight-text">Years Experience</span>
              </motion.div>
              <motion.div className="highlight-item" variants={itemVariants}>
                <span className="highlight-number">MCA</span>
                <span className="highlight-text">University of Madras</span>
              </motion.div>
              <motion.div className="highlight-item" variants={itemVariants}>
                <span className="highlight-number">7.98</span>
                <span className="highlight-text">CGPA</span>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div className="about-image slide-in-down" variants={itemVariants}>
            <div className="what-i-do">
              <p className="tech-stack">What I Do</p>
              <div className="focus-list">
                {focusAreas.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
