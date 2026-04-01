import "../styles/Footer.css"

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
        <a href="#">Twitter</a>
        <a href="#">LinkedIn</a>
      </div>

      <p>© 2025 Idris Abdulhamid Omeiza. All Rights Reserved.</p>
    </footer>
  )
}

export default Footer