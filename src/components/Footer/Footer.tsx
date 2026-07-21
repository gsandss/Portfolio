import './Footer.css'
import logo from '../../assets/logo.png'

const leftItems = [

    { label: 'Gavin Sands' },
    { label: 'Iowa State University'},
    { label: 'Ames, IA' },

]

const rightItems = [
{ label: 'Resume', href: ' #resume '},
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' }
]

function Footer(){

    return (
    <nav className="footer" aria-label="Primary navigation">
      <ul className="footer__list footer__list--left">
        {leftItems.map((link, index) => (
          <li key={link.label}>
              {link.label}
              { index < leftItems.length - 1 && " | "} 
          </li>
        ))}
      </ul>

      <a href="https://www.iastate.edu/">
        <img className="footer__logo" src={logo} alt="Gavin Sands logo"/>
      </a>

      <ul className="footer__list footer__list--right" aria-label="Secondary navigation">
        {rightItems.map((link) => (
          <li key={link.label}>
            <a href={link.href}>
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )

}

export default Footer;