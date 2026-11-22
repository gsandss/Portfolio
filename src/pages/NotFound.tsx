import { Link } from 'react-router-dom'
export default function NotFound() {
  return (
    <section className="wrap inside-page">
      <header className="page-intro">
        <p className="label with-rule">404</p>
        <h1>Page not found</h1>
        <p>You can find my recent builds in the project collection.</p>
      </header>
      <Link className="button button--dark" to="/projects">
        Browse projects
      </Link>
    </section>
  )
}
