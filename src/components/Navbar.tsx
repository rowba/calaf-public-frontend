import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import Logo from './Logo'

const links = [
  { to: '/', label: 'Inicio' },
  { to: '/servicios', label: 'Servicios' },
  { to: '/software', label: 'Software' },
  { to: '/nosotros', label: 'Nosotros' },
  { to: '/blog', label: 'Observatorio' },
  { to: '/contacto', label: 'Contacto' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#1a2d42]/95 backdrop-blur-md shadow-lg shadow-black/20' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-18 flex items-center justify-between" style={{ height: '72px' }}>
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <Logo size={36} color="#4dbb6b" />
          <div className="flex flex-col leading-tight">
            <span className="text-white font-bold tracking-[0.12em] text-sm" style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: '16px', letterSpacing: '0.15em' }}>
              CALAF
            </span>
            <span className="text-[#4dbb6b] font-medium tracking-[0.2em]" style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: '11px', letterSpacing: '0.22em' }}>
              CONSULTING
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) =>
                `nav-link text-sm font-medium tracking-wide transition-colors duration-200 ${
                  isActive ? 'text-[#4dbb6b] active' : 'text-white/80 hover:text-white'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
          <Link
            to="/area-clientes"
            className="ml-2 px-5 py-2 rounded-full border border-[#4dbb6b] text-[#4dbb6b] text-sm font-semibold tracking-wide hover:bg-[#4dbb6b] hover:text-white transition-all duration-200"
          >
            Área Clientes
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setOpen(!open)}
          aria-label="Menú"
        >
          <div className={`w-6 h-0.5 bg-white mb-1.5 transition-all ${open ? 'rotate-45 translate-y-2' : ''}`} />
          <div className={`w-6 h-0.5 bg-white mb-1.5 transition-all ${open ? 'opacity-0' : ''}`} />
          <div className={`w-6 h-0.5 bg-white transition-all ${open ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#1a2d42] border-t border-white/10 px-6 py-6 flex flex-col gap-4">
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `text-base font-medium ${isActive ? 'text-[#4dbb6b]' : 'text-white/80'}`
              }
            >
              {label}
            </NavLink>
          ))}
          <Link
            to="/area-clientes"
            onClick={() => setOpen(false)}
            className="mt-2 px-5 py-2.5 rounded-full border border-[#4dbb6b] text-[#4dbb6b] text-sm font-semibold text-center"
          >
            Área Clientes
          </Link>
        </div>
      )}
    </header>
  )
}
