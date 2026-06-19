import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import useReveal from '../hooks/useReveal'

const team = [
  { role: 'Analistas de Mercado', desc: 'Evolución y tendencias. Reducción de riesgos y acceso a oportunidades del pool eléctrico.' },
  { role: 'Personal de Negociación', desc: 'Márgenes de las compañías, garantías y fórmulas de generación del precio.' },
  { role: 'Equipo Administrativo', desc: 'Seguimiento de contratos, revisión de facturación y reclamaciones ante comercializadora y distribuidora.' },
  { role: 'Equipo Técnico', desc: 'Análisis de rendimientos, opciones y viabilidades, y programación de equipos.' },
  { role: 'Equipo Comercial', desc: 'Detección de necesidades y acompañamiento al cliente en todo el proceso.' },
]

const values = [
  { title: 'Independencia', desc: 'No vendemos energía ni instalaciones. Nuestros intereses son los tuyos.' },
  { title: 'Transparencia', desc: 'Información clara y honesta en cada decisión. Sin letra pequeña.' },
  { title: 'Compromiso', desc: 'Acompañamos a nuestros clientes a largo plazo, no hacemos proyectos puntuales.' },
  { title: 'Resultados', desc: 'Medimos todo lo que hacemos. Si no es medible, no lo proponemos.' },
]

export default function Nosotros() {
  useReveal()
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <>
      {/* Hero */}
      <section className="hero-gradient pt-40 pb-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <span className="text-[#4dbb6b] text-sm font-bold tracking-widest uppercase">Quiénes somos</span>
          <h1 className="text-white font-black mt-3" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontFamily: 'Rajdhani, sans-serif' }}>
            Sobre Nosotros
          </h1>
          <p className="text-white/60 mt-4 max-w-xl mx-auto text-lg leading-relaxed">
            Un equipo multidisciplinar con un único objetivo: que tu empresa pague menos por la energía y tenga el control total de su consumo.
          </p>
        </div>
      </section>

      {/* Misión */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="reveal-left">
            <span className="text-[#4dbb6b] text-sm font-bold tracking-widest uppercase">Nuestra misión</span>
            <h2 className="text-[#1a2d42] font-black mt-3 mb-5" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontFamily: 'Rajdhani, sans-serif' }}>
              Nuestro objetivo,<br />el de nuestros clientes
            </h2>
            <p className="text-[#5b7fa6] leading-relaxed mb-5">
              Damos cobertura global a las necesidades energéticas de nuestros clientes, en todas sus facetas, acompañándolos en todo el proceso.
            </p>
            <p className="text-[#5b7fa6] leading-relaxed mb-8">
              Somos consultores independientes: no vendemos energía, no instalamos paneles, no tenemos conflictos de interés. Solo trabajamos para que tu empresa gane.
            </p>
            <blockquote className="border-l-4 border-[#4dbb6b] pl-5 py-2">
              <p className="text-[#1a2d42] font-semibold italic">"No buscamos la excusa, buscamos la solución"</p>
            </blockquote>
          </div>

          <div className="grid grid-cols-2 gap-4 reveal-right">
            {values.map((v, i) => (
              <div
                key={v.title}
                className={`delay-${(i + 1) * 100} p-6 rounded-2xl bg-[#f8fafc] border border-[#e2e8f0] hover:border-[#4dbb6b]/40 hover:bg-[#f0fdf4] transition-all duration-200`}
              >
                <div className="w-8 h-1 bg-[#4dbb6b] rounded mb-3" />
                <h3 className="text-[#1a2d42] font-bold mb-2">{v.title}</h3>
                <p className="text-[#64748b] text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipo */}
      <section className="py-24 bg-[#1a2d42]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 reveal">
            <span className="text-[#4dbb6b] text-sm font-bold tracking-widest uppercase">El equipo</span>
            <h2 className="text-white font-black mt-3" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontFamily: 'Rajdhani, sans-serif' }}>
              Equipo multidisciplinar
            </h2>
            <p className="text-white/50 mt-3 max-w-lg mx-auto">
              Cada departamento existe porque la gestión energética profesional lo requiere. Miles de oídos, flujo de información constante.
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
            {team.map((t, i) => (
              <div
                key={t.role}
                className={`reveal delay-${(i + 1) * 100} bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-[#4dbb6b]/40 transition-all duration-200`}
              >
                <div className="w-6 h-6 rounded-full bg-[#4dbb6b] mb-4 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-white" />
                </div>
                <h3 className="text-[#4dbb6b] font-bold text-sm mb-2 leading-tight">{t.role}</h3>
                <p className="text-white/50 text-xs leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center reveal">
          <h2 className="text-[#1a2d42] font-black mb-4" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontFamily: 'Rajdhani, sans-serif' }}>
            ¿Te gustaría trabajar con nosotros?
          </h2>
          <p className="text-[#64748b] mb-8 leading-relaxed">Cuéntanos tu situación y valoramos juntos cómo podemos ayudarte.</p>
          <Link
            to="/contacto"
            className="inline-block px-10 py-4 bg-[#4dbb6b] text-white font-bold rounded-full hover:bg-[#38a056] transition-all duration-200 hover:-translate-y-0.5"
          >
            Contactar con el equipo
          </Link>
        </div>
      </section>
    </>
  )
}
