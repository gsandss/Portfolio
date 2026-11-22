import { Link } from 'react-router-dom'
import { contactLinks } from '../../data/contact'
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
      <div className="print-contact">
        Ames, Iowa
        {contactLinks
          .filter((item) => item.label !== 'Location')
          .map((item) => (
            <a key={item.label} href={item.href}>
              {item.label === 'LinkedIn' ? 'LinkedIn' : item.value}
            </a>
          ))}
      </div>
      <section className="resume-section">
        <h2>Education</h2>
        <div>
          <div className="resume-item">
            <div className="resume-title">
              <h3>Iowa State University</h3>
              <span>Expected August 2028</span>
            </div>
            <p>Bachelor of Science, Computer Science · Ames, IA</p>
            <p>Minors in Artificial Intelligence and Applied Artificial Intelligence.</p>
          </div>
        </div>
      </section>
      <section className="resume-section">
        <h2>Experience</h2>
        <div>
          <div className="resume-item">
            <div className="resume-title">
              <h3>IT Operations Student Assistant</h3>
              <span>Oct 2026 – Present</span>
            </div>
            <ul>
              <li>
                Provide technical support and troubleshoot hardware, software, and user technology
                issues.
              </li>
              <li>
                Assist with system maintenance, configuration, and deployment of computers and other
                technology equipment.
              </li>
            </ul>
          </div>
          <div className="resume-item">
            <div className="resume-title">
              <h3>Summer Worker</h3>
              <span>May 2024 – Jul 2026</span>
            </div>
            <p>East Coloma-Nelson Middle School</p>
            <ul>
              <li>
                Led a team of volunteers to complete summer responsibilities before the school year.
              </li>
              <li>
                Coordinated with teachers, administrators, and staff to address facility needs and
                prioritize daily work.
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="resume-section">
        <h2>Selected projects</h2>
        <div>
          <div className="resume-item">
            <h3>
              <Link to="/projects/dsa-visualizer">DSA Visualizer</Link>
            </h3>
            <p>
              Developed an interactive React application that animates sorting algorithms step by
              step.
            </p>
          </div>
          <div className="resume-item">
            <h3>
              <Link to="/projects/ai-code-debugger">AI Code Debugger</Link>
            </h3>
            <p>
              Built a Flask API and a JavaScript frontend for running Python and explaining errors
              with a locally hosted language model in LM Studio.
            </p>
          </div>
          <div className="resume-item">
            <h3>
              <Link to="/projects/portfolio-website">Portfolio Website</Link>
            </h3>
            <p>
              Designed a responsive React and TypeScript portfolio and organized project information
              into reusable components.
            </p>
          </div>
        </div>
      </section>
      <section className="resume-section">
        <h2>Technical skills</h2>
        <div>
          <p>
            <strong>Languages</strong> · Python, Java, C, JavaScript, TypeScript, HTML, CSS
          </p>
          <p>
            <strong>Frameworks and tools</strong> · React, Flask, REST APIs, LM Studio, Git, GitHub,
            GitLab
          </p>
        </div>
      </section>
    </article>
  )
}
