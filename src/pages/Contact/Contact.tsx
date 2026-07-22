import '../../App.css'
import { contactLinks } from '../../data/contact'

function ContactPage() {
  return (
    <section className="contact-page">
      <div className="contact-page__header">
        <h1>Contact and Profiles</h1>
        <p className="contact-page__summary">
          Email, LinkedIn, Github, and Location
        </p>
      </div>

      <div className="contact-grid">
        <div className="contact-list">
          {contactLinks.map((item) => (
            <a className="contact-item" href={item.href} key={item.label} target="_blank" rel="noreferrer">
              <span className="contact-item__label">
                {item.label === 'GitHub' ? (
                  <>
                    <svg
                      className="contact-item__icon"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path
                        fill="currentColor"
                        d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2.2c-3.2.7-3.9-1.4-3.9-1.4-.5-1.2-1.2-1.5-1.2-1.5-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 .1 1.7 1.4 1.7 1.4.9 1.5 2.4 1.1 3 .8.1-.6.3-1.1.6-1.4-2.6-.3-5.3-1.3-5.3-5.8 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0c2.2-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8.1 3.1.8.8 1.2 1.9 1.2 3.2 0 4.5-2.7 5.5-5.3 5.8.4.3.8.9.8 1.8v2.7c0 .3.2.7.8.6A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z"
                      />
                    </svg>
                    <span>{item.label}</span>
                  </>
                ) : item.label === 'LinkedIn' ? (
                  <>
                    <svg
                      className="contact-item__icon"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path
                        fill="currentColor"
                        d="M6.94 8.5A1.56 1.56 0 1 0 6.94 5.38a1.56 1.56 0 0 0 0 3.12ZM5.5 9.75h2.88V18H5.5zm4.8 0h2.76v1.12h.04c.38-.72 1.32-1.48 2.72-1.48 2.91 0 3.44 1.91 3.44 4.4V18h-2.88v-7.42c0-1.77-.03-4.05-2.47-4.05-2.47 0-2.85 1.93-2.85 3.92V18H10.3Z"
                      />
                    </svg>
                    <span>{item.label}</span>
                  </>
                ) : (
                  item.label
                )}
              </span>
              <span className="contact-item__value">{item.value}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ContactPage
