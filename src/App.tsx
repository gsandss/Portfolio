import { Link } from 'react-router-dom'
import mountain from './assets/mountains.webp'
import mountainSmall from './assets/mountains-small.webp'
import { projects } from './data/projects'
import ProjectCard from './components/ProjectCard'
import Icon from './components/Icon'
import './App.css'

export default function App() {
  return (
    <>
      <section className="hero" aria-labelledby="intro-title">
        <picture className="hero__landscape">
          <source media="(max-width: 700px)" srcSet={mountainSmall} />
          <img src={mountain} alt="" width="1920" height="1280" fetchPriority="high" />
        </picture>
        <div className="hero__shade" />
        <div className="wrap hero__inner">
          <div className="hero__copy">
            <p className="hero__eyebrow">
              <span />
              Computer Science <i>/</i> Iowa State University
            </p>
            <h1 id="intro-title">
              Gavin <em>Sands</em>
            </h1>
            <p className="hero__intro">
              I'm a computer science student at Iowa State University focused on building
              intelligent experiences at the intersection of AI, design, and human-centered
              technology.
            </p>
            <div className="actions">
              <a href="#selected-work" className="button button--lime">
                <Icon name="grid" /> View projects
              </a>
              <Link to="/resume" className="button button--glass">
                <Icon name="file" /> View résumé
              </Link>
            </div>
          </div>
          <div className="landscape-mark" aria-hidden="true">
            <i />
            <i />
            <i />
            <i />
          </div>
          <div className="hero__place">
            <Icon name="pin" /> Based in Ames, Iowa
          </div>
        </div>
      </section>
      <div className="focus-strip">
        <div className="wrap">
          <span className="label">Current focus</span>
          <ul>
            <li>Machine Learning</li>
            <li>Applied AI</li>
            <li>Research Software</li>
            <li>Development</li>
          </ul>
        </div>
      </div>
      <section
        className="wrap work-section"
        id="selected-work"
        tabIndex={-1}
        aria-labelledby="work-title"
      >
        <div className="section-heading">
          <div>
            <p className="label with-rule">Projects</p>
            <h2 id="work-title">Selected work</h2>
          </div>
          <Link className="text-link" to="/projects">
            <Icon name="grid" /> All projects <span className="count">{projects.length}</span>
          </Link>
        </div>
        <div className="featured-grid">
          {projects.slice(0, 2).map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
      <section className="home-contact">
        <div className="wrap">
          <h2>
            Exploring AI solutions to <em>real-world problems.</em>
          </h2>
          <Link className="button button--dark" to="/contact">
            <Icon name="mail" /> Get in touch
          </Link>
        </div>
      </section>
    </>
  )
}
