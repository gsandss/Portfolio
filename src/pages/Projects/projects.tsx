import '../../App.css'
import { projects } from '../../data/projects'

function ProjectsPage() {
  return (
    <section className="projects-page">
      <div className="projects-page__header">
        <p className="projects-page__eyebrow">Selected Work</p>
        <h1>Projects</h1>
        <p className="projects-page__summary">
          A collection of recent builds focused on AI, thoughtful UX, and practical web products.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.title}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <div className="project-card__tech">
              {project.tech.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
            <a href={project.link}>View Project</a>
          </article>
        ))}
      </div>
    </section>
  )
}

export default ProjectsPage
