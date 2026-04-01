import "../styles/Hero.css"
import DP from "../assets/DP.jpg"
import { FaLinkedin } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

function Hero() {
    return(
        <section id="hero">
      <div className="hero-text">
        <p>Hi I am</p>
        <h2>Idris Abdulhamid Omeiza</h2>
        <h1>FrontEnd Developer</h1>
        <p>I am a passionate Frontend Developer who loves building clean and responsive web experiences. I enjoy turning designs into reality using HTML, CSS, JavaScript and React.</p>
        <a href="#contact"><button>Hire Me</button></a>
      </div>

      <div className="hero-image">
        <img src={ DP } alt="profile" />
      </div>

      <div className="hero-socials">
        <a href="https://x.com/omeizaa00"><FaXTwitter/></a>
        <a href="www.linkedin.com/in/abdulhamid-omeiza-877bb9378"><FaLinkedin/></a>
      </div>
    </section>
    )
}

export default Hero