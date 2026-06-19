import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import useReveal from '../hooks/useReveal'

const blocks = [
  {
    id: 'compra',
    icon: '⚡',
    tag: 'Mercados energéticos',
    title: 'Gestión y Compra de Energía',
    intro: 'Optimizamos cada euro de tu factura energética mediante una estrategia de compra inteligente, adaptada al mercado y a las necesidades reales de tu empresa.',
    items: [
      { sub: 'Optimización de tarifas y potencias', desc: 'Análisis de curvas de carga, penalizaciones por reactiva y excesos de potencia.' },
      { sub: 'Estrategia de contratación', desc: 'Evaluamos y recomendamos entre precios fijos, indexados, contratos mixtos o Click & Call.' },
      { sub: 'Negociación de PPAs', desc: 'Power Purchase Agreements a largo plazo para asegurar precio y origen renovable.' },
    ],
  },
  {
    id: 'auditoria',
    icon: '🔬',
    tag: 'Ingeniería energética',
    title: 'Auditoría y Eficiencia',
    intro: 'Identificamos ineficiencias, cumplimos con las obligaciones legales y diseñamos la hoja de ruta técnica para que tu empresa consuma menos y mejor.',
    items: [
      { sub: 'Auditorías energéticas obligatorias', desc: 'Para grandes empresas, cumpliendo con el Real Decreto 56/2016.' },
      { sub: 'ISO 50001', desc: 'Implantación y mantenimiento de Sistemas de Gestión Energética certificados.' },
      { sub: 'Análisis de viabilidad BESS / autoconsumo', desc: 'Estudio técnico-económico antes de contratar al instalador, sin conflictos de interés.' },
    ],
  },
  {
    id: 'sostenibilidad',
    icon: '🌱',
    tag: 'Compliance y reporting',
    title: 'Sostenibilidad y Normativa',
    intro: 'Te ayudamos a cumplir con los requisitos normativos, a monetizar tus activos de ahorro y a medir el impacto medioambiental de tu empresa.',
    items: [
      { sub: 'Huella de carbono corporativa', desc: 'Cálculo, verificación y plan de reducción de emisiones GEI (alcances 1, 2 y 3).' },
      { sub: 'Consumidor Electrointensivo', desc: 'Gestión del expediente para obtener la calificación y sus beneficios arancelarios.' },
      { sub: 'Gestión de CAEs', desc: 'Monetización y tramitación de Certificados de Ahorro Energético ante la Administración.' },
    ],
  },
]

export default function Servicios() {
  useReveal()
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <>
      {/* Hero */}
      <section className="hero-gradient pt-40 pb-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <span className="text-[#4dbb6b] text-sm font-bold tracking-widest uppercase">Lo que ofrecemos</span>
          <h1 className="text-white font-black mt-3" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontFamily: 'Rajdhani, sans-serif' }}>
            Nuestros servicios
          </h1>
          <p className="text-white/60 mt-4 max-w-xl mx-auto text-lg leading-relaxed">
            Una cobertura integral para que tu empresa tome el control de la energía de forma estratégica, eficiente y sostenible.
          </p>
        </div>
      </section>

      {/* Service blocks */}
      {blocks.map((b, idx) => (
        <section
          key={b.id}
          id={b.id}
          className={`py-24 ${idx % 2 === 0 ? 'bg-white' : 'bg-[#f8fafc]'}`}
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className={`grid md:grid-cols-2 gap-16 items-start ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
              {/* Info */}
              <div className={idx % 2 !== 0 ? 'reveal-right' : 'reveal-left'}>
                <span className="text-[#4dbb6b] text-xs font-bold tracking-widest uppercase">{b.tag}</span>
                <div className="text-5xl mt-4 mb-2">{b.icon}</div>
                <h2 className="text-[#1a2d42] font-black mb-4" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', fontFamily: 'Rajdhani, sans-serif' }}>
                  {b.title}
                </h2>
                <p className="text-[#5b7fa6] leading-relaxed mb-8">{b.intro}</p>
                <Link
                  to="/contacto"
                  className="inline-block px-6 py-3 bg-[#4dbb6b] text-white font-bold rounded-full hover:bg-[#38a056] transition-all duration-200"
                >
                  Solicitar información
                </Link>
              </div>

              {/* Items */}
              <div className={`flex flex-col gap-4 ${idx % 2 !== 0 ? 'reveal-left' : 'reveal-right'}`}>
                {b.items.map((item, i) => (
                  <div
                    key={item.sub}
                    className={`delay-${(i + 1) * 100} flex gap-4 p-6 rounded-2xl border border-[#e2e8f0] hover:border-[#4dbb6b]/50 hover:shadow-md transition-all duration-200 bg-white`}
                  >
                    <div className="w-8 h-8 rounded-full bg-[#4dbb6b]/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#4dbb6b]" />
                    </div>
                    <div>
                      <h3 className="text-[#1a2d42] font-bold text-base mb-1">{item.sub}</h3>
                      <p className="text-[#64748b] text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="py-20 bg-[#4dbb6b]">
        <div className="max-w-3xl mx-auto px-6 text-center reveal">
          <h2 className="text-white font-black mb-4" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontFamily: 'Rajdhani, sans-serif' }}>
            ¿No sabes por dónde empezar?
          </h2>
          <p className="text-white/80 mb-8 leading-relaxed">Cuéntanos tu situación y te explicamos qué servicio se adapta mejor a tu empresa. Sin compromiso.</p>
          <Link
            to="/contacto"
            className="inline-block px-10 py-4 bg-white text-[#1a2d42] font-black rounded-full hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200"
          >
            Habla con un experto
          </Link>
        </div>
      </section>
    </>
  )
}
