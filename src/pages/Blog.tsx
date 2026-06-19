import { useEffect } from 'react'
import useReveal from '../hooks/useReveal'

const posts = [
  {
    tag: 'Mercado eléctrico',
    date: 'Junio 2025',
    title: 'Análisis del pool eléctrico: claves del primer semestre 2025',
    excerpt: 'Repasamos los principales movimientos del mercado mayorista durante los primeros seis meses del año y sus implicaciones para empresas consumidoras.',
    reading: '5 min',
  },
  {
    tag: 'Normativa',
    date: 'Mayo 2025',
    title: 'Nuevas obligaciones de auditoría energética: ¿afecta a tu empresa?',
    excerpt: 'La transposición de la Directiva de Eficiencia Energética amplía el número de empresas obligadas a realizar auditorías cada cuatro años.',
    reading: '4 min',
  },
  {
    tag: 'Subvenciones',
    date: 'Abril 2025',
    title: 'Guía completa: ayudas estatales para eficiencia energética industrial 2025',
    excerpt: 'Convocatorias abiertas, plazos y requisitos para acceder a los fondos Next Generation destinados a proyectos de eficiencia en industria y pymes.',
    reading: '7 min',
  },
  {
    tag: 'Mercado eléctrico',
    date: 'Marzo 2025',
    title: '¿Precio fijo o indexado? Estrategias de contratación en un mercado volátil',
    excerpt: 'Analizamos en qué contexto de mercado conviene cada modalidad y qué fórmulas mixtas pueden ofrecer el mejor equilibrio riesgo-ahorro.',
    reading: '6 min',
  },
  {
    tag: 'Sostenibilidad',
    date: 'Febrero 2025',
    title: 'CAEs: cómo monetizar tus proyectos de ahorro energético',
    excerpt: 'Los Certificados de Ahorro Energético permiten obtener ingresos adicionales por las mejoras de eficiencia ya realizadas. Te explicamos el proceso.',
    reading: '5 min',
  },
  {
    tag: 'Normativa',
    date: 'Enero 2025',
    title: 'Consumidor Electrointensivo: ventajas y requisitos para calificarse en 2025',
    excerpt: 'La figura del Consumidor Electrointensivo ofrece descuentos significativos en los cargos del sistema. Conoce los criterios y el proceso de solicitud.',
    reading: '4 min',
  },
]

const tags = ['Todos', 'Mercado eléctrico', 'Normativa', 'Subvenciones', 'Sostenibilidad']

export default function Blog() {
  useReveal()
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <>
      {/* Hero */}
      <section className="hero-gradient pt-40 pb-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <span className="text-[#4dbb6b] text-sm font-bold tracking-widest uppercase">Actualidad energética</span>
          <h1 className="text-white font-black mt-3" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontFamily: 'Rajdhani, sans-serif' }}>
            Observatorio del Mercado
          </h1>
          <p className="text-white/60 mt-4 max-w-xl mx-auto text-lg leading-relaxed">
            Análisis del pool eléctrico, cambios normativos y guías prácticas para que siempre estés un paso por delante.
          </p>
        </div>
      </section>

      {/* Filter tags */}
      <section className="bg-white border-b border-[#e2e8f0] sticky top-[72px] z-40">
        <div className="max-w-7xl mx-auto px-6 py-4 flex gap-3 overflow-x-auto">
          {tags.map((t) => (
            <button
              key={t}
              className={`px-4 py-1.5 rounded-full text-sm font-semibold whitespace-nowrap transition-all ${
                t === 'Todos'
                  ? 'bg-[#1a2d42] text-white'
                  : 'border border-[#e2e8f0] text-[#5b7fa6] hover:border-[#4dbb6b] hover:text-[#4dbb6b]'
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </section>

      {/* Posts grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((p, i) => (
              <article
                key={p.title}
                className={`reveal delay-${(i % 3) * 100} group flex flex-col bg-white border border-[#e2e8f0] rounded-2xl overflow-hidden hover:shadow-xl hover:border-[#4dbb6b]/30 transition-all duration-300 service-card cursor-pointer`}
              >
                {/* Color band */}
                <div className="h-1.5 bg-gradient-to-r from-[#1a2d42] to-[#4dbb6b]" />

                <div className="p-7 flex flex-col flex-1">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold text-[#4dbb6b] uppercase tracking-widest">{p.tag}</span>
                    <span className="text-xs text-[#94a3b8]">{p.date}</span>
                  </div>
                  <h2 className="text-[#1a2d42] font-bold text-lg leading-snug mb-3 group-hover:text-[#4dbb6b] transition-colors">
                    {p.title}
                  </h2>
                  <p className="text-[#64748b] text-sm leading-relaxed flex-1">{p.excerpt}</p>
                  <div className="flex items-center justify-between mt-6 pt-4 border-t border-[#f1f5f9]">
                    <span className="text-xs text-[#94a3b8]">Lectura: {p.reading}</span>
                    <span className="text-[#4dbb6b] text-sm font-semibold group-hover:gap-2 flex items-center gap-1 transition-all">
                      Leer →
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-[#f8fafc] border-t border-[#e2e8f0]">
        <div className="max-w-xl mx-auto px-6 text-center reveal">
          <span className="text-[#4dbb6b] text-sm font-bold tracking-widest uppercase">No te pierdas nada</span>
          <h2 className="text-[#1a2d42] font-black mt-3 mb-4" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontFamily: 'Rajdhani, sans-serif' }}>
            Recibe el análisis mensual del mercado
          </h2>
          <p className="text-[#64748b] mb-6 text-sm leading-relaxed">
            Un resumen ejecutivo cada mes con lo que necesitas saber para tomar mejores decisiones energéticas.
          </p>
          <div className="flex gap-3 max-w-sm mx-auto">
            <input
              type="email"
              placeholder="tu@empresa.com"
              className="flex-1 px-4 py-3 rounded-full border border-[#e2e8f0] text-sm focus:outline-none focus:border-[#4dbb6b] transition-colors"
            />
            <button className="px-6 py-3 bg-[#4dbb6b] text-white font-bold rounded-full hover:bg-[#38a056] transition-colors whitespace-nowrap text-sm">
              Suscribirme
            </button>
          </div>
        </div>
      </section>
    </>
  )
}
