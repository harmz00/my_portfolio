import "../styles/Navbar.css"
import { useSearchParams } from "react-router-dom"
import { FaBars, FaTimes } from 'react-icons/fa'
import { useState } from 'react'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [searchParams, setSearchParams] = useSearchParams()
  const theme = searchParams.get('theme') || 'light'

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setSearchParams({ theme: newTheme })
  }

  return (
    <nav>
      <h1>&lt;/&gt;</h1>
      <div className={`side-drawer ${isOpen ? 'open' : ''}`}>
        <button onClick={() => setIsOpen(false)} className="close-btn">
          <FaTimes />
        </button>
        <ul>
          <li><a href="#hero" onClick={() => setIsOpen(false)}>Home</a></li>
          <li><a href="#about" onClick={() => setIsOpen(false)}>About Me</a></li>
          <li><a href="#services" onClick={() => setIsOpen(false)}>Services</a></li>
          <li><a href="#projects" onClick={() => setIsOpen(false)}>Projects</a></li>
          <li><a href="#contact" onClick={() => setIsOpen(false)}>Contact</a></li>
        </ul>
      </div>

      {isOpen && <div className="overlay" onClick={() => setIsOpen(false)}></div>}

      <div className="nav-right">
        <ul className="nav-links">
          <li><a href="#hero">Home</a></li>
          <li><a href="#about">About Me</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <button onClick={toggleTheme} className="theme-toggle">
          {theme === 'light' ? 'Dark' : 'Light'}
        </button>

        <button onClick={() => setIsOpen(!isOpen)} className="hamburger">
          <FaBars />
        </button>
      </div>
    </nav>
  )
}

export default Navbar