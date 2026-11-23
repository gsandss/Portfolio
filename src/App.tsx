import { Link } from 'react-router-dom'
import mountain from './assets/mountains.webp'
import mountainSmall from './assets/mountains-small.webp'
import campus from './assets/companile.jpg'
import { projects } from './data/projects'
import { experience } from './data/resume'
import ProjectCard from './components/ProjectCard'
import './App.css'

export default function App() {
  return (
    <>
      <section className="wrap hero" aria-labelledby="intro-title">
        <div className="hero__copy">
          <p className="label with-rule">Computer science · Iowa State</p>
          <h1 id="intro-title">
            Gavin <em>Sands</em>
          </h1>
          <p className="hero__intro">
            I study computer science in Ames, Iowa. I build tools that help people understand what
            their code is doing, from a Python debugger to a sorting visualizer.
          </p>
          <div className="actions">
            <a href="#selected-work" className="button button--dark">
              Explore projects
            </a>
            <Link to="/resume" className="journal-link">
              Read my résumé
            </Link>
          </div>
        </div>
        <div className="hero__photos">
          <picture className="hero__landscape">
            <source media="(max-width: 700px)" srcSet={mountainSmall} />
            <img
              src={mountain}
              alt="A river winding between forested slopes and snow-covered peaks."
              width="1920"
              height="1280"
              fetchPriority="high"
            />
          </picture>
          <figure className="campus-print">
            <img
              src={campus}
              alt="Iowa State’s campanile framed by autumn trees."
              width="509"
              height="339"
            />
            <figcaption>On campus, Ames</figcaption>
          </figure>
        </div>
      </section>

      <section
        className="work-section"
        id="selected-work"
        tabIndex={-1}
        aria-labelledby="work-title"
      >
        <div className="wrap">
          <div className="section-heading" data-reveal>
            <h2 id="work-title">Selected work</h2>
            <Link className="journal-link" to="/projects">
              All {projects.length} projects
            </Link>
          </div>
          <div className="featured-grid">
            {projects.slice(0, 2).map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>

      <section className="campus-section" aria-labelledby="campus-title">
        <div className="wrap campus-section__inner">
          <div data-reveal>
            <p className="label">Research &amp; IT</p>
            <h2 id="campus-title">At Iowa State</h2>
            <Link className="journal-link" to="/resume">
              Read my résumé
            </Link>
          </div>
          <div className="campus-roles">
            {experience.map((role) => (
              <article key={role.id} data-reveal>
                <p className="label">{role.organization}</p>
                <h3>
                  <Link to={'/resume#' + role.id}>{role.title}</Link>
                </h3>
                <p>{role.practice}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
