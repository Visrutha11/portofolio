import React from 'react'
import { motion } from 'framer-motion'
import './Experience.css'
import './GradientWord.css'
import { FaBriefcase, FaCalendar, FaGraduationCap, FaCertificate } from 'react-icons/fa'

const Experience = () => {
  const experienceData = [
{
  title: 'Software Engineer',
  company: 'MayimDazzle India Private Limited',
  duration: 'Mar 2024 - Present',
  responsibilities: [
    'Developed scalable and responsive web applications using React.js and Material-UI (MUI)',
    'Built robust and secure RESTful APIs using Node.js and Express.js with strong backend architecture',
    'Integrated frontend and backend systems to ensure seamless and efficient data flow',
    'Designed and managed MySQL databases, including schema design and query optimization',
    'Implemented input validation, authentication, and error handling for reliable API performance',
    'Performed API testing using Postman and end-to-end testing using Cypress',
    'Contributed to CI/CD pipelines for faster and reliable deployments',
    'Followed clean architecture, modular coding practices, and Git-based version control',
    'Collaborated in Agile/Scrum environments with cross-functional teams'
  ]
}
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 50 } }
  }

  return (
    <section id="experience" className="experience">
      <div className="container">
        <motion.div
          className="section-title slide-in-up"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>Experience</h2>
        </motion.div>

        <motion.div className="experience-timeline" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
          {experienceData.map((exp) => (
            <motion.div key={exp.company} className="timeline-item" variants={itemVariants} whileHover={{ x: 6 }}>
              <motion.div className="timeline-marker" whileHover={{ scale: 1.15 }} transition={{ type: 'spring' }}>
                <FaBriefcase />
              </motion.div>

              <div className="timeline-content">
                <div className="exp-header">
                  <h3 className="exp-title">
                    <span className="gradient-word">{exp.title}</span>
                  </h3>
                  <p className="exp-company">{exp.company}</p>
                </div>

                <div className="exp-duration">
                  <FaCalendar /> {exp.duration}
                </div>

                <ul className="exp-responsibilities">
                  {exp.responsibilities.map((responsibility) => (
                    <li key={responsibility}>
                      <span className="bullet-point"></span>
                      {responsibility}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="credential-grid">
          <motion.div className="credential-card" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <FaGraduationCap />
            <h3>Education</h3>
            <p>Master of Computer Applications (MCA)</p>
            <span>University of Madras | Completed: 2025 | CGPA: 7.98</span>
          </motion.div>
          <motion.div className="credential-card" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <FaCertificate />
            <h3>Certifications</h3>
            <p>Java Full Stack Development (2023-2024)</p>
            <span>Google IT Support (Coursera)</span>
          </motion.div>
        </div>

        <motion.div className="objective-section" initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
          <div className="objective-title">
            <h3><span className="gradient-word">Career Objective</span></h3>
          </div>
          <p className="objective-text">
            To work in a product-based company where I can contribute to building scalable systems while
            continuously improving my technical expertise.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
