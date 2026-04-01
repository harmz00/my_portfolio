import "../styles/Projects.css"
import YoutubePage from "../assets/YoutubePage.png"
import TaskManagerPage from "../assets/TaskManagerPage.png"
import DashboardPage from "../assets/DashboardPage.png"


const projects = [
  {
    id: 1,
    title: "Youtube Landing Page",
    category: "HTML/CSS",
    image: YoutubePage,
    link: "https://69cd4d4f168c1c294eab0dbe--famous-klepon-a398cd.netlify.app/"
  },
  {
    id: 2,
    title: "Task Manager",
    category: "HTML/CSS/JavaScript",
    image: TaskManagerPage,
    link: "https://69cd4f5103bc8a4591ec3bc4--tskmanagr.netlify.app/"
  },
  {
    id: 3,
    title: "Students Score Dashboard",
    category: "HTML/CSS/JS/React",
    image: DashboardPage,
    link: "https://69cd95609266cb37f4786b91--stdntdashboard.netlify.app/"
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