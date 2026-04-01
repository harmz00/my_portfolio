import "../styles/Projects.css"


const projects = [
  {
    id: 1,
    title: "Project One",
    category: "HTML/CSS",
    image: "https://placehold.co/300x200",
    link: "#"
  },
  {
    id: 2,
    title: "Project Two",
    category: "JavaScript",
    image: "https://placehold.co/300x200",
    link: "#"
  },
  {
    id: 3,
    title: "Project Three",
    category: "React",
    image: "https://placehold.co/300x200",
    link: "#"
  },
]

function Projects() {
  return (
    <section id="projects">
      <h2>My Projects</h2>
      <p>Here are some of the projects I have worked on.</p>

      <div className="projects-grid">
        {projects.map((project) => (
          <div className="project-card" key={project.id}>
            <img src={project.image} alt={project.title} />
            <div className="project-info">
              <span>{project.category}</span>
              <h3>{project.title}</h3>
              <a href={project.link} target="_blank" rel="noreferrer">View Project</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}


export default Projects