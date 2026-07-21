import { NavLink } from 'react-router-dom'
import './Navbar.css'

const navLinksLeft = [{ label: 'Gavin Sands', href: '/' }]

const navLinksRight = [
  { label: 'About', href: '/' },
  { label: 'Resume', href: '/resume' },
  { label: 'Projects', href: '/projects' },
  { label: 'Skills', href: '/skills' },
  { label: 'Contact', href: '/contact' },
]

function Navbar() {
  return (
    <nav className="navbar" aria-label="Primary navigation">
      <ul className="navbar__list_left">
        {navLinksLeft.map((link) => (
          <li className="navbar__item" key={link.label}>
            <NavLink className="navbar__link_left" to={link.href} end>
              {link.label}
            </NavLink>
          </li>
        ))}
      </ul>

      <ul className="navbar__list_right">
        {navLinksRight.map((link) => (
          <li className="navbar__item" key={link.label}>
            <NavLink className="navbar__link_right" to={link.href} end>
              {link.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar