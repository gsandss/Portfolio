import { Link } from 'react-router-dom'
import type { Project } from '../data/projects'
import ProjectArtwork from './ProjectArtwork'

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project-card">
      <Link to={'/projects/' + project.slug} aria-label={'Explore ' + project.title}>
        <ProjectArtwork slug={project.slug} />
        <div className="project-card__body">
          <p className="label">{project.category}</p>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <ul className="tags">
            {project.tech.slice(0, 3).map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
        </div>
      </Link>
    </article>
  )
}
