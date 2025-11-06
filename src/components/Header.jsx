import { Link } from 'react-router-dom'
import { useState } from 'react'
import logo from '../assets/logo.svg'
import './Header.css'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
      <div className="header-inner">
        <div className="brand">
          <Link to="/" onClick={closeMenu}>
          <img src={logo} alt="Srishti Biofuels" />
          </Link>
        </div>      <button 
        className="mobile-menu-btn"
        onClick={toggleMenu}
        aria-label="Toggle navigation menu"
        aria-expanded={isMenuOpen}
      >
        <div className={`hamburger ${isMenuOpen ? 'active' : ''}`}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </button>

      <nav className={`nav-links ${isMenuOpen ? 'active' : ''}`} aria-label="Main Navigation">
        <Link to="/" onClick={closeMenu}>HOME</Link>
        <Link to="/products" onClick={closeMenu}>OUR PRODUCTS</Link>
        <Link to="/why-biofuels" onClick={closeMenu}>WHY BIOFUELS?</Link>
        <Link to="/about" onClick={closeMenu}>ABOUT US</Link>
        <Link to="/contact" className="cta-quote" onClick={closeMenu}>GET A QUOTE</Link>
      </nav>
    </div>
  )
}
