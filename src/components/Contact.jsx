import React, { useState } from 'react'
import './Contact.css'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaPaperPlane } from 'react-icons/fa'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const mailtoLink = `mailto:visrutha33@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`)}`

    window.location.href = mailtoLink
    setSubmitted(true)
    setFormData({ name: '', email: '', subject: '', message: '' })

    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-title slide-in-up">
          <h2>Contact</h2>
        </div>

        <div className="contact-wrapper">
          <div className="contact-info slide-in-up" style={{ animationDelay: '0.1s' }}>
            <h3>Let's Connect</h3>
            <p>Open to full-stack development opportunities, collaborations, and product engineering roles.</p>

            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-icon"><FaEnvelope /></div>
                <div className="contact-content">
                  <h4>Email</h4>
                  <a href="mailto:visrutha33@gmail.com">visrutha33@gmail.com</a>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon"><FaPhone /></div>
                <div className="contact-content">
                  <h4>Phone</h4>
                  <a href="tel:+918825803385">+91 8825803385</a>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon"><FaMapMarkerAlt /></div>
                <div className="contact-content">
                  <h4>Location</h4>
                  <p>India</p>
                </div>
              </div>
            </div>

            <div className="social-links">
              <h4>Profiles</h4>
              <div className="social-icons">
                <a href="https://github.com/visrutha11" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub">
                  <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/visrutha-u-s-b17670298/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
                  <FaLinkedin />
                </a>
                <a href="mailto:visrutha33@gmail.com" className="social-link" aria-label="Email">
                  <FaEnvelope />
                </a>
              </div>
            </div>
          </div>

          <form className="contact-form slide-in-up" style={{ animationDelay: '0.2s' }} onSubmit={handleSubmit}>
            <div className="form-group">
              <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
            </div>

            <div className="form-group">
              <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
            </div>

            <div className="form-group">
              <input type="text" name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} required />
            </div>

            <div className="form-group">
              <textarea name="message" placeholder="Your Message" rows="6" value={formData.message} onChange={handleChange} required></textarea>
            </div>

            <button type="submit" className="submit-btn">
              <FaPaperPlane /> Send Message
            </button>

            {submitted && <div className="success-message">Message sent! I'll get back to you soon.</div>}
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
