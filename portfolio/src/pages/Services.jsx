import "../styles/Services.css"

function Services() {
  return (
    <section id="services">
      <h2>Services</h2>
      <p>Here are some of the services I offer as a Frontend Developer.</p>

      <div className="services-grid">
        <div className="service-card">
          <div className="service-icon">🎨</div>
          <h3>UI Design</h3>
          <p>Turning beautiful designs into fully functional web pages.</p>
        </div>

        <div className="service-card">
          <div className="service-icon">🌐</div>
          <h3>Web Development</h3>
          <p>Building clean, fast and responsive websites from scratch.</p>
        </div>

        <div className="service-card">
          <div className="service-icon">📱</div>
          <h3>Responsive Design</h3>
          <p>Making sure your website looks great on all screen sizes.</p>
        </div>

        <div className="service-card">
          <div className="service-icon">⚛️</div>
          <h3>React Development</h3>
          <p>Building modern and interactive web apps using React.</p>
        </div>
      </div>
    </section>
  )
}

export default Services