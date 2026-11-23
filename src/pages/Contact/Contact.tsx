import { contactLinks } from '../../data/contact'
import Icon from '../../components/Icon'

export default function ContactPage() {
  const email = contactLinks.find((item) => item.label === 'Email')!
  return (
    <section className="wrap inside-page">
      <header className="page-intro">
        <h1>Contact and profiles</h1>
        <p>
          For a role, a collaboration, or a question about one of my projects, email is the best
          place to start.
        </p>
      </header>
      <div className="contact-layout">
        <div className="email-panel" data-reveal>
          <Icon name="mail" />
          <h2>Email me</h2>
          <a href={email.href}>{email.value}</a>
        </div>
        <dl className="contact-list" data-reveal>
          {contactLinks
            .filter((item) => item !== email)
            .map((item) => (
              <div key={item.label}>
                <dt>{item.label}</dt>
                <dd>
                  <a href={item.href}>{item.value}</a>
                </dd>
              </div>
            ))}
        </dl>
      </div>
    </section>
  )
}
