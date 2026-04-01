import "../styles/Hero.css"

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
        <img src="https://placehold.co/300x300" alt="profile" />
      </div>

      <div className="hero-socials">
        <a href="#">Twitter</a>
        <a href="#">LinkedIn</a>
      </div>
    </section>
    )
}

export default Hero