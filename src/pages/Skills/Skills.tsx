import { Link } from 'react-router-dom'
import { skillGroups } from '../../data/skills'
import { projects } from '../../data/projects'
import { experience } from '../../data/resume'
import Icon from '../../components/Icon'

export default function SkillsPage() {
  return (
    <section className="wrap inside-page">
      <header className="page-intro">
        <h1>Skills</h1>
        <p>
          I use these languages and tools to build software, test models at TrAC, and support
          the IT team at the ISU Foundation.
        </p>
      </header>
      <div className="skill-grid">
        {skillGroups.map((group) => {
          const project = projects.find((item) => item.slug === group.projectSlug)
          return (
            <article className="skill-group" data-reveal key={group.title}>
              <Icon name={group.icon} />
              <h2>{group.title}</h2>
              <ul className="skill-list">
                {group.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
              {project && (
                <div className="skill-example">
                  <p className="label">In practice</p>
                  <Link to={'/projects/' + project.slug}>{project.title}</Link>
                  <p>{group.example}</p>
                </div>
              )}
            </article>
          )
        })}
        <article className="skill-group" data-reveal>
          <Icon name="network" />
          <h2>Research &amp; IT</h2>
          <div className="skill-roles">
            {experience.map((role) => (
              <div className="skill-example" key={role.id}>
                <p className="label">{role.organization}</p>
                <Link to={'/resume#' + role.id}>{role.title}</Link>
                <p>{role.practice}</p>
              </div>
            ))}
          </div>
        </article>
      </div>
    </section>
  )
}
