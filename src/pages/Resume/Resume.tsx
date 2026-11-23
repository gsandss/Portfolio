import { Link } from 'react-router-dom'
import { contactLinks } from '../../data/contact'
import { experience, resumeProjects } from '../../data/resume'
import { skillGroups } from '../../data/skills'
import Icon from '../../components/Icon'

export default function ResumePage() {
  return (
    <article className="wrap inside-page resume">
      <header className="page-intro resume-head">
        <div>
          <p className="label with-rule">Résumé</p>
          <h1>Gavin Sands</h1>
          <p>Computer Science · Iowa State University</p>
        </div>
        <a className="button button--dark" href="/Gavin-Sands-Resume.pdf" download>
          <Icon name="download" /> Download PDF
        </a>
      </header>
      <div className="resume-contact">
        {contactLinks
          .filter((item) => item.label !== 'Location')
          .map((item) => (
            <a key={item.label} href={item.href}>
              {item.label === 'Email' ? item.value : item.label}
            </a>
          ))}
      </div>
      <section className="resume-section" data-reveal>
        <h2>Education</h2>
        <div className="resume-item">
          <div className="resume-title">
            <h3>Iowa State University</h3>
            <span>Expected August 2028</span>
          </div>
          <p>Bachelor of Science, Computer Science · Ames, IA</p>
          <p>Minors in Artificial Intelligence and Applied Artificial Intelligence.</p>
        </div>
      </section>
      <section className="resume-section" data-reveal>
        <h2>Experience</h2>
        <div>
          {experience.map((role) => (
            <div className="resume-item" id={role.id} key={role.id}>
              <div className="resume-title">
                <h3>{role.title}</h3>
                <span>{role.dates}</span>
              </div>
              <p className="resume-org">{role.organization}</p>
              <ul>
                {role.responsibilities.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
      <section className="resume-section" data-reveal>
        <h2>Technical projects</h2>
        <div>
          {resumeProjects.map((project) => (
            <div className="resume-item" key={project.slug}>
              <div className="resume-title">
                <h3>
                  <Link to={'/projects/' + project.slug}>{project.title}</Link>
                </h3>
                <span>{project.dates}</span>
              </div>
              <p className="resume-org">{project.stack}</p>
              <ul>
                {project.details.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
      <section className="resume-section" data-reveal>
        <h2>Technical skills</h2>
        <div>
          {skillGroups.map((group) => (
            <p key={group.title}>
              <strong>{group.title}</strong> · {group.skills.join(', ')}
            </p>
          ))}
        </div>
      </section>
    </article>
  )
}
