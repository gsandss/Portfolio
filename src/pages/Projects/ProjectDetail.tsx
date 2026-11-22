import { Link, useParams } from 'react-router-dom'
import { projects } from '../../data/projects'
import screenshot from '../../assets/code-debugger.webp'
import SortDemo from '../../components/SortDemo'
import Icon from '../../components/Icon'
import NotFound from '../NotFound'

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = projects.find((item) => item.slug === slug)
  if (!project) return <NotFound />
  return (
    <article className="wrap inside-page">
      <nav className="breadcrumb" aria-label="Breadcrumb">
        <Link to="/projects">Projects</Link>
        <span aria-hidden="true">/</span>
        <span>{project.category}</span>
      </nav>
      <header className="page-intro">
        <h1>{project.title}</h1>
        <p>{project.description}</p>
      </header>
      <div className="detail-layout">
        <div className="detail-copy">
          <h2>Inside the build</h2>
          {project.notes.map((note) => (
            <p key={note}>{note}</p>
          ))}
        </div>
        <aside className="toolbox">
          <h2 className="label">Built with</h2>
          <ul className="tags">
            {project.tech.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
          {project.link ? (
            <a className="button button--dark" href={project.link}>
              <Icon name="code" /> View source on GitHub
            </a>
          ) : (
            <Link className="button button--dark" to="/contact">
              <Icon name="mail" /> Ask about this project
            </Link>
          )}
        </aside>
      </div>
      {slug === 'ai-code-debugger' && (
        <figure className="project-shot">
          <img
            src={screenshot}
            width="1496"
            height="745"
            loading="lazy"
            alt="Code Debugger interface with a Python editor beside a panel for asking the local model questions."
          />
          <figcaption>The Python editor and the question panel in AI Code Debugger.</figcaption>
        </figure>
      )}
      {slug === 'dsa-visualizer' && <SortDemo />}
      <Link className="text-link back-link" to="/projects">
        <Icon name="grid" /> All projects
      </Link>
    </article>
  )
}
