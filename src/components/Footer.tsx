import { Link } from 'react-router-dom'
import Logo from './Logo'

export default function Footer() {
  return (
    <footer className="bg-[#111e2d] text-white/70">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <Logo size={40} color="#4dbb6b" />
              <div>
                <div className="text-white font-bold tracking-[0.15em] text-base" style={{ fontFamily: 'Rajdhani, sans-serif' }}>CALAF CONSULTING</div>
                <div className="text-[#4dbb6b] text-xs tracking-widest mt-0.5">CONSULTORÍA ENERGÉTICA</div>
              </div>
            </div>
            <p className="text-sm leading-relaxed max-w-sm mt-4">
              Damos cobertura global a las necesidades energéticas de nuestros clientes, acompañándolos en todo el proceso.
            </p>
            <p className="text-[#4dbb6b] text-sm font-medium mt-4 italic">
              "No buscamos la excusa, buscamos la solución"
            </p>
          </div>

          {/* Nav */}
          <div>
            <h3 className="text-white text-sm font-semibold tracking-widest uppercase mb-4">Navegación</h3>
            <ul className="space-y-2 text-sm">
              {[['/', 'Inicio'], ['/servicios', 'Servicios'], ['/software', 'Software'], ['/nosotros', 'Nosotros'], ['/blog', 'Observatorio'], ['/contacto', 'Contacto']].map(([to, label]) => (
                <li key={to}>
                  <Link to={to} className="hover:text-[#4dbb6b] transition-colors">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-white text-sm font-semibold tracking-widest uppercase mb-4">Contacto</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="mailto:info@calafconsulting.com" className="hover:text-[#4dbb6b] transition-colors flex items-center gap-2">
                  <span className="text-[#4dbb6b]">✉</span> info@calafconsulting.com
                </a>
              </li>
              <li>
                <a href="tel:+34649486235" className="hover:text-[#4dbb6b] transition-colors flex items-center gap-2">
                  <span className="text-[#4dbb6b]">✆</span> +34 649 48 62 35
                </a>
              </li>
              <li className="pt-2">
                <Link
                  to="/area-clientes"
                  className="inline-block px-4 py-2 border border-[#4dbb6b] text-[#4dbb6b] rounded-full text-xs font-semibold hover:bg-[#4dbb6b] hover:text-white transition-all"
                >
                  Área Clientes →
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-white/40">
          <span>© {new Date().getFullYear()} Calaf Consulting. Todos los derechos reservados.</span>
          <span>Consultoría energética especializada</span>
        </div>
      </div>
    </footer>
  )
}
