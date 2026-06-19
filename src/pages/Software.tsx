import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import useReveal from '../hooks/useReveal'

const features = [
  { icon: '🔍', title: 'Auditoría de facturación', desc: 'Detección automática de errores en facturas de distribuidora y comercializadora. Reclamaciones activas en tu nombre.' },
  { icon: '📊', title: 'Pre-facturación inteligente', desc: 'Anticipamos lo que vas a pagar antes de recibir la factura, eliminando sorpresas y permitiendo decisiones proactivas.' },
  { icon: '📡', title: 'Informes de telemedida', desc: 'Visualización y análisis de tus curvas de carga en tiempo real. Detecta anomalías de consumo al instante.' },
  { icon: '⚙️', title: 'Optimización continua', desc: 'Alertas automáticas cuando detectamos oportunidades de ahorro o desviaciones respecto a tu perfil óptimo.' },
]

export default function Software() {
  useReveal()
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <>
      {/* Hero */}
      <section className="hero-gradient pt-40 pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl">
            <span className="text-[#4dbb6b] text-sm font-bold tracking-widest uppercase">Tecnología al servicio de la energía</span>
            <h1 className="text-white font-black mt-3 mb-5" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontFamily: 'Rajdhani, sans-serif' }}>
              Plataforma de<br />Gestión Energética
            </h1>
            <p className="text-white/65 text-lg leading-relaxed">
              Nuestra plataforma convierte los datos de consumo en decisiones inteligentes. Control total de tu energía, en tiempo real.
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 reveal">
            <h2 className="text-[#1a2d42] font-black" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontFamily: 'Rajdhani, sans-serif' }}>
              ¿Qué incluye la plataforma?
            </h2>
            <p className="text-[#5b7fa6] mt-3 max-w-lg mx-auto">Herramientas diseñadas para que tu equipo tenga el control energético que siempre mereciste.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((f, i) => (
              <div
                key={f.title}
                className={`reveal delay-${(i + 1) * 100} flex gap-6 p-8 rounded-2xl border border-[#e2e8f0] hover:border-[#4dbb6b]/40 hover:shadow-lg transition-all duration-300 service-card`}
              >
                <div className="text-4xl flex-shrink-0">{f.icon}</div>
                <div>
                  <h3 className="text-[#1a2d42] font-bold text-lg mb-2">{f.title}</h3>
                  <p className="text-[#64748b] leading-relaxed text-sm">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Acceso plataforma */}
      <section className="py-20 bg-[#1a2d42]">
        <div className="max-w-4xl mx-auto px-6 text-center reveal">
          <h2 className="text-white font-black mb-4" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontFamily: 'Rajdhani, sans-serif' }}>
            ¿Eres cliente de Calaf Consulting?
          </h2>
          <p className="text-white/55 mb-10 leading-relaxed">
            Accede a tu plataforma de gestión energética personalizada o contacta con nosotros para obtener acceso.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/area-clientes"
              className="px-8 py-4 bg-[#4dbb6b] text-white font-bold rounded-full hover:bg-[#38a056] transition-all duration-200"
            >
              Acceder a mi área
            </Link>
            <Link
              to="/contacto"
              className="px-8 py-4 border border-white/30 text-white font-semibold rounded-full hover:border-white hover:bg-white/10 transition-all duration-200"
            >
              Solicitar demo
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
