import "../styles/About.css"

function About() {
  return (
    <section id="about">
      <div className="about-image">
        <img src="https://placehold.co/300x300" alt="about" />
      </div>

      <div className="about-content">
        <h2>About Me</h2>
        <p>I am a passionate Frontend Developer who loves building clean and responsive web experiences. I enjoy turning designs into reality using HTML, CSS, JavaScript and React.</p>

        <div className="skills">
          <div className="skill">
            <p>HTML</p>
            <div className="skill-bar">
              <div className="skill-fill" style={{width: '90%'}}></div>
            </div>
          </div>

          <div className="skill">
            <p>CSS</p>
            <div className="skill-bar">
              <div className="skill-fill" style={{width: '85%'}}></div>
            </div>
          </div>

          <div className="skill">
            <p>JavaScript</p>
            <div className="skill-bar">
              <div className="skill-fill" style={{width: '75%'}}></div>
            </div>
          </div>

          <div className="skill">
            <p>React</p>
            <div className="skill-bar">
              <div className="skill-fill" style={{width: '70%'}}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About