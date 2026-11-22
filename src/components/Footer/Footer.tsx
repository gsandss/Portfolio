import { Link } from 'react-router-dom'
import { contactLinks } from '../../data/contact'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer__inner">
        <div>
          <Link to="/" className="footer-name">
            Gavin Sands
          </Link>
          <p>Iowa State University · Ames, Iowa</p>
        </div>
        <nav aria-label="Footer">
          <Link to="/resume">Résumé</Link>
          {contactLinks
            .filter((link) => ['GitHub', 'LinkedIn'].includes(link.label))
            .map((link) => (
              <a key={link.label} href={link.href}>
                {link.label}
              </a>
            ))}
          <Link to="/contact">Contact</Link>
        </nav>
      </div>
    </footer>
  )
}
