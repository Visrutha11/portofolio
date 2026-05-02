import React from 'react'
import { motion } from 'framer-motion'
import './Skills.css'
import './GradientWord.css'
import { FaCode, FaReact, FaNode, FaJava, FaDatabase, FaTools, FaVial } from 'react-icons/fa'

const Skills = () => {
  const skillsData = [
    {
      category: 'Programming',
      icon: FaCode,
      skills: ['Java', 'JavaScript']
    },
    {
      category: 'Frontend',
      icon: FaReact,
      skills: ['React.js', 'Material UI (MUI)', 'HTML5', 'CSS3']
    },
    {
      category: 'Backend',
      icon: FaNode,
      skills: ['Node.js', 'Express.js', 'REST API Development']
    },
    {
      category: 'Java Technologies',
      icon: FaJava,
      skills: ['JDBC', 'Servlets', 'Spring Boot', 'Spring MVC', 'Hibernate']
    },
    {
      category: 'Database',
      icon: FaDatabase,
      skills: ['MySQL', 'DDL', 'DML', 'Joins', 'Subqueries']
    },
    {
      category: 'Tools',
      icon: FaTools,
      skills: ['Git & GitHub', 'Postman', 'Swagger', 'VS Code', 'Eclipse', 'Spring Tool Suite']
    },
    {
      category: 'Testing & DevOps',
      icon: FaVial,
      skills: ['Cypress (End-to-End Testing)', 'CI/CD Pipelines']
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100 }
    }
  }

  return (
    <section id="skills" className="skills">
      <div className="container">
        <motion.div
          className="section-title slide-in-up"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>Skills</h2>
        </motion.div>

        <motion.div
          className="skills-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {skillsData.map((skillGroup) => {
            const IconComponent = skillGroup.icon
            return (
              <motion.div
                key={skillGroup.category}
                className="skill-card"
                variants={cardVariants}
                whileHover={{ y: -8 }}
              >
                <motion.div className="skill-icon" whileHover={{ scale: 1.15 }} transition={{ type: 'spring' }}>
                  <IconComponent />
                </motion.div>
                <h3 className="skill-category">
                  <span className="gradient-word">{skillGroup.category}</span>
                </h3>
                <ul className="skill-list">
                  {skillGroup.skills.map((skill) => (
                    <motion.li key={skill} className="skill-item" viewport={{ once: true }}>
                      <span className="skill-dot"></span>
                      {skill}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </motion.div>

        <motion.div
          className="skills-highlight"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="highlight-text">
            Crafting clean, efficient, and user-friendly web experiences with modern full-stack tools.
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
