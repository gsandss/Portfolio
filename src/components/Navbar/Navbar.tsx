import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import Icon from '../Icon'
import './Navbar.css'

const links = [
  { label: 'About', to: '/' },
  { label: 'Projects', to: '/projects' },
  { label: 'Skills', to: '/skills' },
  { label: 'Résumé', to: '/resume' },
]

export default function Navbar() {
  const { key } = useLocation()
  const [openAt, setOpenAt] = useState<string | null>(null)
  const button = useRef<HTMLButtonElement>(null)
  const header = useRef<HTMLElement>(null)
  const open = openAt === key

  useEffect(() => {
    if (!open) return
    function dismiss(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setOpenAt(null)
        button.current?.focus()
      }
    }
    function outside(event: PointerEvent) {
      if (event.target instanceof Node && !header.current?.contains(event.target)) setOpenAt(null)
    }
    document.addEventListener('keydown', dismiss)
    document.addEventListener('pointerdown', outside)
    return () => {
      document.removeEventListener('keydown', dismiss)
      document.removeEventListener('pointerdown', outside)
    }
  }, [open])

  return (
    <header className="masthead" ref={header}>
      <div className="wrap masthead__inner">
        <Link
          className="brand"
          to="/"
          aria-label="Gavin Sands, home"
          onClick={() => setOpenAt(null)}
        >
          <span className="monogram" aria-hidden="true">
            gs
          </span>
          <span>Gavin Sands</span>
        </Link>
        <button
          ref={button}
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="primary-nav"
          onClick={() => setOpenAt(open ? null : key)}
        >
          {open ? 'Close' : 'Menu'} <Icon name={open ? 'close' : 'menu'} />
        </button>
        <nav
          id="primary-nav"
          className={open ? 'nav-links is-open' : 'nav-links'}
          aria-label="Primary"
        >
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              onClick={() => setOpenAt(null)}
            >
              {link.label}
            </NavLink>
          ))}
          <NavLink to="/contact" className="nav-contact" onClick={() => setOpenAt(null)}>
            <Icon name="mail" /> Get in touch
          </NavLink>
        </nav>
      </div>
    </header>
  )
}
