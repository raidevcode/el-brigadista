import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import { site } from '../data/siteData'

const links = [
  ['/', 'Inicio'],
  ['/biografia', 'Biografía'],
  ['/historia', 'Su historia'],
  // ['/documentos', 'Documentos'],
  // ['/investigacion', 'Investigación'],
  // ['/proyecto', 'El proyecto']
]

export default function Layout() {
  const [open, setOpen] = useState(false)

  return (
    <div className="site-shell">
      <header className="site-header">
        <Link to="/" className="brand" onClick={() => setOpen(false)}>
          <span>{site.projectName}</span>
          <small>{site.personName}</small>
        </Link>

        <button
          className="menu-button"
          onClick={() => setOpen(!open)}
          aria-label="Abrir menú"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>

        <nav className={open ? 'main-nav open' : 'main-nav'}>
          {links.map(([to, label]) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              onClick={() => setOpen(false)}
            >
              {label}
            </NavLink>
          ))}
        </nav>
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="site-footer">
        <div>
          <strong>{site.projectName}</strong>
          <p>
            Proyecto personal de investigación, documentación y difusión
            histórica.
          </p>
        </div>
        {/* <div className="footer-links">
          <Link to="/documentos">
            Fuentes y documentos <ArrowUpRight size={14} />
          </Link>
          <Link to="/proyecto">
            Sobre el proyecto <ArrowUpRight size={14} />
          </Link>
        </div> */}
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} · Proyecto en desarrollo</span>
          <span>
            Las afirmaciones históricas deben contrastarse con sus fuentes.
          </span>
        </div>
      </footer>
    </div>
  )
}
