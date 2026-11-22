import { Link } from 'react-router-dom'
import { projects } from '../../data/projects'
import ProjectCard from '../../components/ProjectCard'
import Icon from '../../components/Icon'

export default function ProjectsPage() {
  return (
    <div className="wrap inside-page">
      <header className="page-intro">
        <p className="label with-rule">Selected work</p>
        <h1>Projects</h1>
        <p>
          A collection of recent builds focused on AI, thoughtful UX, and practical web products.
        </p>
      </header>
      <section aria-labelledby="featured-title" className="featured-grid">
        <h2 id="featured-title" className="sr-only">
          Featured projects
        </h2>
        {projects.slice(0, 2).map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </section>
      <section className="project-index">
        <h2>More projects</h2>
        {projects.slice(2).map((project) => (
          <Link className="index-row" to={'/projects/' + project.slug} key={project.slug}>
            <div>
              <span className="label">{project.category}</span>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
            <span className="index-detail">
              <Icon name="book" /> Project details
            </span>
          </Link>
        ))}
      </section>
    </div>
  )
}
