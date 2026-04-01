import "../styles/Contact.css"

function Contact() {
  return (
    <section id="contact">
      <h2>Lets Work Together</h2>
      <p>Have a project in mind? Feel free to reach out to me!</p>

      <div className="contact-form">
        <input type="email" placeholder="Enter Your Email" />
        <button>Contact Me</button>
      </div>
    </section>
  )
}


export default Contact