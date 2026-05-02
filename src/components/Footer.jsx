import React from 'react'
import './Footer.css'
import { FaArrowUp } from 'react-icons/fa'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <p className="footer-text">
            &copy; {currentYear} Visrutha U S. All rights reserved.
          </p>
          <button className="scroll-top-btn" onClick={scrollToTop} title="Scroll to top">
            <FaArrowUp />
          </button>
        </div>
      </div>
    </footer>
  )
}

export default Footer
