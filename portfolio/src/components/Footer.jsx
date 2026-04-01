import "../styles/Footer.css"
import { FaLinkedin } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

function Footer() {
  return (
    <footer>
      <h2>Idris Abdulhamid Omeiza</h2>

      <ul>
        <li><a href="#hero">Home</a></li>
        <li><a href="#about">About Me</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer-socials">
        <a href="https://x.com/omeizaa00"><FaXTwitter/></a>
        <a href="www.linkedin.com/in/abdulhamid-omeiza-877bb9378"><FaLinkedin/></a>
      </div>

      <p> &copy; 2025 Idris Abdulhamid Omeiza. All Rights Reserved.</p>
    </footer>
  )
}

export default Footer