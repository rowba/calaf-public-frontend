import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import Logo from '../components/Logo'
import useReveal from '../hooks/useReveal'

const services = [
  {
    icon: '⚡',
    title: 'Gestión y Compra de Energía',
    desc: 'Optimizamos tarifas, potencias y estrategias de contratación. Negociamos PPAs a largo plazo para garantizar tu estabilidad energética.',
    href: '/servicios#compra',
  },
  {
    icon: '🔬',
    title: 'Auditoría y Eficiencia',
    desc: 'Auditorías energéticas, implantación ISO 50001 y análisis de viabilidad técnico-económica para proyectos de ahorro.',
    href: '/servicios#auditoria',
  },
  {
    icon: '🌱',
    title: 'Sostenibilidad y Normativa',
    desc: 'Cálculo de huella de carbono, estatus de Consumidor Electrointensivo y gestión de CAEs.',
    href: '/servicios#sostenibilidad',
  },
]

const reasons = [
  { num: '01', left: 'Mayores beneficios', right: 'Estabilidad' },
  { num: '02', left: 'Liberación de recursos', right: 'Personal especializado' },
  { num: '03', left: 'Ahorro', right: 'Poder de negociación' },
  { num: '04', left: 'Satisfacción', right: 'Recomendación' },
]

const steps = [
  { num: '01', title: 'Estrategia', desc: 'Definimos la estrategia para que venzan al mercado año tras año.' },
  { num: '02', title: 'Retorno de la inversión', desc: 'Seleccionamos los productos con mayor ROI para transformar el gasto energético en activos.' },
  { num: '03', title: 'Análisis y seguimiento', desc: 'Control continuo, auditando procesos y proveedores energéticos en cantidad y calidad.' },
]

export default function Home() {
  useReveal()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      {/* HERO */}
      <section className="hero-gradient min-h-screen flex items-center relative overflow-hidden">
        {/* Background rings decoration */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-5 pointer-events-none">
          <Logo size={700} color="#ffffff" animated />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#111e2d]/40 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 pt-24 pb-16 grid md:grid-cols-2 gap-16 items-center relative z-10">
          {/* Text */}
          <div>
            <div className="inline-flex items-center gap-2 bg-[#4dbb6b]/15 border border-[#4dbb6b]/30 rounded-full px-4 py-1.5 mb-8">
              <span className="w-2 h-2 rounded-full bg-[#4dbb6b] animate-pulse" />
              <span className="text-[#4dbb6b] text-xs font-semibold tracking-widest uppercase">Consultoría Energética</span>
            </div>
            <h1 className="text-white font-black leading-[1.05] mb-6" style={{ fontSize: 'clamp(2.8rem, 6vw, 4.5rem)', fontFamily: 'Rajdhani, sans-serif', letterSpacing: '-0.01em' }}>
              Tu energía,<br />
              <span className="text-[#4dbb6b]">nuestra misión.</span>
            </h1>
            <p className="text-white/65 text-lg leading-relaxed mb-10 max-w-lg">
              Damos cobertura global a las necesidades energéticas de tu empresa, acompañándote en cada etapa del proceso con un equipo multidisciplinar.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/contacto"
                className="px-8 py-4 bg-[#4dbb6b] text-white font-bold rounded-full hover:bg-[#38a056] transition-all duration-200 hover:shadow-lg hover:shadow-[#4dbb6b]/30 hover:-translate-y-0.5"
              >
                Habla con nosotros
              </Link>
              <Link
                to="/servicios"
                className="px-8 py-4 border border-white/30 text-white font-semibold rounded-full hover:border-white hover:bg-white/10 transition-all duration-200"
              >
                Ver servicios →
              </Link>
            </div>

            {/* Stats */}
            <div className="flex gap-10 mt-14 pt-10 border-t border-white/10">
              {[['15+', 'Años de experiencia'], ['200+', 'Clientes activos'], ['€M', 'Ahorro generado']].map(([val, label]) => (
                <div key={label}>
                  <div className="text-[#4dbb6b] font-black text-3xl" style={{ fontFamily: 'Rajdhani, sans-serif' }}>{val}</div>
                  <div className="text-white/50 text-xs mt-1 leading-tight">{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Logo hero */}
          <div className="hidden md:flex justify-center items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-[#4dbb6b]/10 rounded-full blur-3xl scale-75" />
              <Logo size={380} color="#ffffff" animated className="relative z-10 drop-shadow-2xl" />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30 text-xs">
          <span className="tracking-widest uppercase text-[10px]">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-white/30 to-transparent" />
        </div>
      </section>

      {/* TAGLINE BAND */}
      <section className="bg-[#4dbb6b] py-6">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-white font-bold tracking-wide text-sm md:text-base uppercase">
            Lo que no es <strong className="text-[#111e2d]">medible</strong>, no es cuantificable · Lo que no es cuantificable no es <strong className="text-[#111e2d]">controlable</strong>
          </p>
        </div>
      </section>

      {/* QUÉ HACEMOS */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 reveal">
            <span className="text-[#4dbb6b] text-sm font-bold tracking-widest uppercase">Nuestro enfoque</span>
            <h2 className="text-[#1a2d42] font-black mt-3 mb-4" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontFamily: 'Rajdhani, sans-serif' }}>
              ¿Qué hacemos?
            </h2>
            <p className="text-[#5b7fa6] max-w-xl mx-auto leading-relaxed">
              Trabajamos con una metodología probada en tres ejes estratégicos que transforman tu consumo energético en una ventaja competitiva.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((s, i) => (
              <div
                key={s.num}
                className={`reveal delay-${(i + 1) * 100} group relative bg-[#f8fafc] rounded-2xl p-8 border border-[#e2e8f0] hover:border-[#4dbb6b]/40 hover:bg-[#f0fdf4] transition-all duration-300 service-card`}
              >
                <div className="text-5xl font-black text-[#4dbb6b]/20 mb-4 group-hover:text-[#4dbb6b]/40 transition-colors" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                  {s.num}
                </div>
                <h3 className="text-[#1a2d42] font-bold text-xl mb-3">{s.title}</h3>
                <p className="text-[#64748b] leading-relaxed text-sm">{s.desc}</p>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#4dbb6b] rounded-b-2xl scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section className="py-28 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 reveal">
            <span className="text-[#4dbb6b] text-sm font-bold tracking-widest uppercase">Lo que ofrecemos</span>
            <h2 className="text-[#1a2d42] font-black mt-3 mb-4" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontFamily: 'Rajdhani, sans-serif' }}>
              Nuestros servicios
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((s, i) => (
              <Link
                key={s.title}
                to={s.href}
                className={`reveal delay-${(i + 1) * 100} group bg-[#1a2d42] rounded-2xl p-8 flex flex-col service-card hover:bg-[#243550]`}
              >
                <div className="text-4xl mb-5">{s.icon}</div>
                <h3 className="text-white font-bold text-lg mb-3 leading-snug">{s.title}</h3>
                <p className="text-white/55 text-sm leading-relaxed flex-1">{s.desc}</p>
                <div className="mt-6 flex items-center gap-2 text-[#4dbb6b] text-sm font-semibold group-hover:gap-3 transition-all">
                  Saber más <span>→</span>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12 reveal">
            <Link
              to="/servicios"
              className="inline-block px-8 py-4 bg-[#1a2d42] text-white font-bold rounded-full hover:bg-[#4dbb6b] transition-all duration-300"
            >
              Ver todos los servicios
            </Link>
          </div>
        </div>
      </section>

      {/* POR QUÉ NOSOTROS */}
      <section className="py-28 bg-[#1a2d42] relative overflow-hidden">
        <div className="absolute right-0 top-0 opacity-[0.04] pointer-events-none">
          <Logo size={600} color="#ffffff" />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="reveal-left">
              <span className="text-[#4dbb6b] text-sm font-bold tracking-widest uppercase">La diferencia</span>
              <h2 className="text-white font-black mt-3 mb-6" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontFamily: 'Rajdhani, sans-serif' }}>
                ¿Por qué<br />elegirnos?
              </h2>
              <p className="text-white/55 leading-relaxed mb-8">
                Somos un equipo multidisciplinar con analistas de mercado, negociadores, técnicos y administrativos especializados en energía. Tu empresa gana sin dedicar recursos propios a algo que no es tu negocio principal.
              </p>
              <Link
                to="/nosotros"
                className="inline-flex items-center gap-2 text-[#4dbb6b] font-semibold hover:gap-3 transition-all"
              >
                Conoce el equipo →
              </Link>
            </div>

            <div className="grid grid-cols-1 gap-4 reveal-right">
              {reasons.map((r, i) => (
                <div
                  key={r.num}
                  className={`delay-${i * 100} flex items-center gap-5 bg-white/5 border border-white/10 rounded-xl px-6 py-4 hover:border-[#4dbb6b]/40 hover:bg-white/8 transition-all duration-200`}
                >
                  <span className="text-[#4dbb6b] font-black text-2xl w-10 flex-shrink-0" style={{ fontFamily: 'Rajdhani, sans-serif' }}>{r.num}</span>
                  <div className="flex-1 flex justify-between items-center">
                    <span className="text-white/70 text-sm font-medium">{r.left}</span>
                    <span className="text-[#4dbb6b] text-sm font-bold">{r.right}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-28 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center reveal">
          <span className="text-[#4dbb6b] text-sm font-bold tracking-widest uppercase">¿Hablamos?</span>
          <h2 className="text-[#1a2d42] font-black mt-3 mb-5" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontFamily: 'Rajdhani, sans-serif' }}>
            ¡Trabajemos juntos!
          </h2>
          <p className="text-[#64748b] text-lg leading-relaxed mb-10">
            Cuéntanos tu situación energética y te mostraremos cómo podemos ayudarte a reducir costes y ganar control.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contacto"
              className="px-10 py-4 bg-[#4dbb6b] text-white font-bold rounded-full text-lg hover:bg-[#38a056] transition-all duration-200 hover:shadow-xl hover:shadow-[#4dbb6b]/30 hover:-translate-y-0.5"
            >
              Contactar ahora
            </Link>
            <a
              href="tel:+34649486235"
              className="px-10 py-4 border-2 border-[#1a2d42] text-[#1a2d42] font-bold rounded-full text-lg hover:bg-[#1a2d42] hover:text-white transition-all duration-200"
            >
              +34 649 48 62 35
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
