import React from 'react'
import './Hero.css'
import './TypingEffect.css'
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowRight, FaCode, FaServer, FaDatabase } from 'react-icons/fa'
import TypingEffect from './TypingEffect'

const Hero = ({ setActiveSection }) => {
  const scrollToContact = () => {
    setActiveSection('contact')
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })
  }

  const downloadResume = () => {
    window.open('/resume.pdf', '_blank')
  }

  return (
    <section id="home" className="hero">
      <div className="container hero-container">
        <div className="hero-content slide-in-up">
          <p className="hero-kicker">Software Engineer</p>
          <h1 className="hero-title">
            Hi, I'm <span className="gradient-text">Visrutha US</span>
          </h1>
          <p className="hero-subtitle">
            <TypingEffect text="Full Stack Developer" speed={60} />
          </p>
          <p className="hero-tagline">
            Full Stack Developer with 2+ years of experience specializing in React.js and Node.js,
            building scalable and production-ready applications.
          </p>

          <div className="hero-buttons">
            <a className="btn btn-primary" href="#projects">
              View Projects <FaArrowRight />
            </a>
            <button className="btn btn-secondary" onClick={scrollToContact}>
              Contact Me
            </button>
            <button className="btn btn-outline" onClick={downloadResume}>
              Download Resume
            </button>
          </div>

          <div className="hero-socials">
            <a href="https://github.com/visrutha11" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/visrutha-u-s-b17670298/" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="mailto:visrutha33@gmail.com" className="social-icon" aria-label="Email">
              <FaEnvelope />
            </a>
          </div>
        </div>

        <div className="hero-image slide-in-down">
          <div className="profile-panel">
            <div className="profile-photo">
              <img src="/profile.png" alt="Visrutha U S" onError={(event) => { event.currentTarget.style.display = 'none' }} />
              <span className="profile-initials">VU</span>
            </div>
            <div className="profile-card">
              <p className="profile-label">Available for Developer roles</p>
              <h2>React.js, Node.js, Java, MySQL, MongoDB, Firebase,ORM</h2>
              <div className="profile-stats">
                <div>
                  <strong>2+</strong>
                  <span>Years</span>
                </div>
                <div>
                  <strong>MCA</strong>
                  <span>2025</span>
                </div>
              </div>
              <div className="profile-focus">
                <span><FaCode /> Frontend</span>
                <span><FaServer /> APIs</span>
                <span><FaDatabase /> MySQL</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <span>Scroll to explore</span>
        <div className="mouse"></div>
      </div>
    </section>
  )
}

export default Hero
