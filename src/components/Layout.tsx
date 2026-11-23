import { useLayoutEffect, useRef } from 'react'
import { Outlet, ScrollRestoration, useLocation } from 'react-router-dom'
import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'
import { projects } from '../data/projects'

const pageNames: Record<string, string> = {
  '/': 'Computer Science & Applied AI',
  '/projects': 'Projects',
  '/skills': 'Skills',
  '/contact': 'Contact',
  '/resume': 'Résumé',
}

export default function Layout() {
  const { pathname } = useLocation()
  const main = useRef<HTMLElement>(null)
  const previousPath = useRef(pathname)
  useLayoutEffect(() => {
    const path = pathname.replace(/\/$/, '') || '/'
    const title =
      pageNames[path] ??
      projects.find((p) => '/projects/' + p.slug === path)?.title ??
      'Page not found'
    document.title = title + ' | Gavin Sands'
    if (previousPath.current !== pathname) main.current?.focus({ preventScroll: true })
    previousPath.current = pathname
  }, [pathname])

  useLayoutEffect(() => {
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (motion.matches || !('IntersectionObserver' in window)) return
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          if (!motion.matches) entry.target.setAttribute('data-entered', '')
          observer.unobserve(entry.target)
        }
      },
      { rootMargin: '0px 0px -12px' },
    )

    main.current?.querySelectorAll('[data-reveal]').forEach((section) => {
      if (section.getBoundingClientRect().top >= window.innerHeight) observer.observe(section)
    })
    return () => observer.disconnect()
  }, [pathname])

  return (
    <div className="app-shell">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <Navbar />
      <main id="main-content" tabIndex={-1} ref={main}>
        <div className="page-enter" key={pathname}>
          <Outlet />
        </div>
      </main>
      <Footer />
      <ScrollRestoration />
    </div>
  )
}
