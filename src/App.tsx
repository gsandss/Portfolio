import { Link } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <section className="home-hero">
      <div className="home-hero__content">
        <p className="home-hero__eyebrow">Computer Science | Iowa State University</p>
        <h1>Gavin Sands</h1>
        <p className="home-hero__summary">
          I'm a computer science student at Iowa State University focused on building intelligent
          experiences at the intersection of AI, design, and human-centered technology.
        </p>

        <div className="home-hero__actions">
          <Link className="home-hero__button home-hero__button--primary" to="/projects">
            Projects
          </Link>
          <Link className="home-hero__button home-hero__button--secondary" to="/resume">
            Resume
          </Link>
          <Link className="home-hero__button home-hero__button--secondary" to="/skills">
            Skills
          </Link>
          <Link className="home-hero__button home-hero__button--third" to="/contact">
            Contact
          </Link>
        </div>
      </div>

      <aside className="home-hero__focus">
        <p className="home-hero__focus-label">Current Focus</p>
        <ul>
          <li>Machine Learning</li>
          <li>Applied AI</li>
          <li>Research Software</li>
          <li>Development</li>
        </ul>
        <p className="home-hero__description-label">
          Exploring AI solutions to real-world problems.
        </p>
      </aside>
    </section>
  )
}

export default App
