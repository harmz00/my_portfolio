import "../styles/Navbar.css"
import { useSearchParams } from "react-router-dom"


function Navbar() {

  const [searchParams, setSearchParams] = useSearchParams()
  const theme = searchParams.get('theme') || 'light'

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setSearchParams({ theme: newTheme })
  }

  return (
    <nav>
      <h1>Idris Abdulhamid</h1>

      <input type="checkbox" id="menu-toggle" className="menu-toggle" />

      <ul className="nav-links">
        <li><a href="#hero">Home</a></li>
        <li><a href="#about">About Me</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="nav-right">
        <button onClick={toggleTheme} className="theme-toggle">
          {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
        </button>
        <label htmlFor="menu-toggle" className="hamburger">☰</label>
      </div>
    </nav>
  )
}

export default Navbar