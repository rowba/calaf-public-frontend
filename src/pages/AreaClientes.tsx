import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../components/Logo'

export default function AreaClientes() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <section className="hero-gradient min-h-screen flex items-center">
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none flex items-center justify-end pr-20">
        <Logo size={500} color="#ffffff" />
      </div>

      <div className="max-w-5xl mx-auto px-6 pt-24 pb-16 relative z-10 w-full">
        <div className="text-center mb-16">
          <Logo size={64} color="#4dbb6b" className="mx-auto mb-6" />
          <h1 className="text-white font-black mb-3" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontFamily: 'Rajdhani, sans-serif' }}>
            Área de Clientes
          </h1>
          <p className="text-white/55 max-w-md mx-auto">
            Accede a tu plataforma de gestión energética o al portal de seguimiento de tu consultor.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {/* Plataforma interna */}
          <div className="bg-white/5 border border-white/15 rounded-3xl p-10 flex flex-col items-center text-center hover:bg-white/10 hover:border-[#4dbb6b]/40 transition-all duration-300 group">
            <div className="w-16 h-16 rounded-2xl bg-[#4dbb6b]/15 border border-[#4dbb6b]/30 flex items-center justify-center mb-6 group-hover:bg-[#4dbb6b]/25 transition-colors">
              <span className="text-3xl">📊</span>
            </div>
            <h2 className="text-white font-bold text-xl mb-3">Plataforma de Gestión</h2>
            <p className="text-white/50 text-sm leading-relaxed mb-8">
              Accede a tus informes de consumo, auditorías de facturación y optimización en tiempo real.
            </p>
            <span className="inline-block w-full py-3.5 bg-[#4dbb6b] text-white font-bold rounded-xl text-sm opacity-60 cursor-not-allowed">
              Próximamente
            </span>
            <p className="text-white/30 text-xs mt-3">Plataforma en desarrollo</p>
          </div>

          {/* Bamboo Energy */}
          <a
            href="https://bambooenergy.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/5 border border-white/15 rounded-3xl p-10 flex flex-col items-center text-center hover:bg-white/10 hover:border-[#4dbb6b]/40 transition-all duration-300 group"
          >
            <div className="w-16 h-16 rounded-2xl bg-[#4dbb6b]/15 border border-[#4dbb6b]/30 flex items-center justify-center mb-6 group-hover:bg-[#4dbb6b]/25 transition-colors">
              <span className="text-3xl">🌿</span>
            </div>
            <h2 className="text-white font-bold text-xl mb-3">Portal Bamboo Energy</h2>
            <p className="text-white/50 text-sm leading-relaxed mb-8">
              Accede al portal de gestión de tu comercializadora de energía verde asociada.
            </p>
            <span className="inline-block w-full py-3.5 bg-white/10 border border-white/20 text-white font-bold rounded-xl text-sm group-hover:bg-[#4dbb6b] group-hover:border-[#4dbb6b] transition-all duration-200">
              Ir al portal →
            </span>
            <p className="text-white/30 text-xs mt-3">bambooenergy.com</p>
          </a>
        </div>

        <div className="text-center mt-12">
          <p className="text-white/30 text-sm">
            ¿Tienes problemas de acceso?{' '}
            <Link to="/contacto" className="text-[#4dbb6b] hover:underline">
              Contacta con nosotros
            </Link>
          </p>
        </div>
      </div>
    </section>
  )
}
