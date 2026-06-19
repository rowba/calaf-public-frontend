import { useEffect, useState } from 'react'
import useReveal from '../hooks/useReveal'

export default function Contacto() {
  useReveal()
  useEffect(() => { window.scrollTo(0, 0) }, [])

  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ nombre: '', empresa: '', telefono: '', email: '', mensaje: '' })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: connect to form backend (Formspree / EmailJS / API)
    setSent(true)
  }

  return (
    <>
      {/* Hero */}
      <section className="hero-gradient pt-40 pb-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <span className="text-[#4dbb6b] text-sm font-bold tracking-widest uppercase">Estamos aquí</span>
          <h1 className="text-white font-black mt-3" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontFamily: 'Rajdhani, sans-serif' }}>
            Hablemos
          </h1>
          <p className="text-white/60 mt-4 max-w-lg mx-auto text-lg leading-relaxed">
            Cuéntanos tu situación energética. Sin compromiso, te explicamos cómo podemos ayudarte.
          </p>
        </div>
      </section>

      {/* Contacto */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-5 gap-16">

          {/* Info lateral */}
          <div className="md:col-span-2 reveal-left">
            <h2 className="text-[#1a2d42] font-black mb-6" style={{ fontSize: '1.6rem', fontFamily: 'Rajdhani, sans-serif' }}>
              Contacto directo
            </h2>

            <div className="space-y-6">
              <a href="tel:+34649486235" className="flex items-start gap-4 group">
                <div className="w-11 h-11 rounded-full bg-[#4dbb6b]/15 flex items-center justify-center flex-shrink-0 group-hover:bg-[#4dbb6b] transition-colors">
                  <span className="text-[#4dbb6b] group-hover:text-white transition-colors text-lg">✆</span>
                </div>
                <div>
                  <div className="text-xs text-[#94a3b8] font-semibold uppercase tracking-widest mb-0.5">Teléfono</div>
                  <div className="text-[#1a2d42] font-bold group-hover:text-[#4dbb6b] transition-colors">+34 649 48 62 35</div>
                </div>
              </a>

              <a href="mailto:info@calafconsulting.com" className="flex items-start gap-4 group">
                <div className="w-11 h-11 rounded-full bg-[#4dbb6b]/15 flex items-center justify-center flex-shrink-0 group-hover:bg-[#4dbb6b] transition-colors">
                  <span className="text-[#4dbb6b] group-hover:text-white transition-colors text-lg">✉</span>
                </div>
                <div>
                  <div className="text-xs text-[#94a3b8] font-semibold uppercase tracking-widest mb-0.5">Email</div>
                  <div className="text-[#1a2d42] font-bold group-hover:text-[#4dbb6b] transition-colors">info@calafconsulting.com</div>
                </div>
              </a>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-full bg-[#4dbb6b]/15 flex items-center justify-center flex-shrink-0">
                  <span className="text-[#4dbb6b] text-lg">🌐</span>
                </div>
                <div>
                  <div className="text-xs text-[#94a3b8] font-semibold uppercase tracking-widest mb-0.5">Web</div>
                  <div className="text-[#1a2d42] font-bold">www.calafconsulting.com</div>
                </div>
              </div>
            </div>

            <div className="mt-10 p-6 bg-[#f0fdf4] border border-[#4dbb6b]/30 rounded-2xl">
              <p className="text-[#1a2d42] font-semibold italic text-sm leading-relaxed">
                "No buscamos la excusa, buscamos la solución"
              </p>
              <p className="text-[#4dbb6b] text-xs font-bold mt-2 tracking-wider uppercase">Calaf Consulting</p>
            </div>
          </div>

          {/* Formulario */}
          <div className="md:col-span-3 reveal-right">
            {sent ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-16">
                <div className="w-20 h-20 rounded-full bg-[#4dbb6b]/15 flex items-center justify-center mb-6">
                  <span className="text-4xl">✓</span>
                </div>
                <h3 className="text-[#1a2d42] font-black text-2xl mb-3" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                  ¡Mensaje enviado!
                </h3>
                <p className="text-[#64748b] leading-relaxed max-w-sm">
                  Te contactaremos en menos de 24 horas. Mientras tanto, puedes llamarnos directamente.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-[#64748b] uppercase tracking-widest mb-2">Nombre *</label>
                    <input
                      type="text"
                      name="nombre"
                      required
                      value={form.nombre}
                      onChange={handleChange}
                      className="w-full px-4 py-3.5 rounded-xl border border-[#e2e8f0] text-[#1a2d42] text-sm focus:outline-none focus:border-[#4dbb6b] focus:ring-2 focus:ring-[#4dbb6b]/20 transition-all"
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#64748b] uppercase tracking-widest mb-2">Empresa *</label>
                    <input
                      type="text"
                      name="empresa"
                      required
                      value={form.empresa}
                      onChange={handleChange}
                      className="w-full px-4 py-3.5 rounded-xl border border-[#e2e8f0] text-[#1a2d42] text-sm focus:outline-none focus:border-[#4dbb6b] focus:ring-2 focus:ring-[#4dbb6b]/20 transition-all"
                      placeholder="Tu empresa"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-[#64748b] uppercase tracking-widest mb-2">Teléfono</label>
                    <input
                      type="tel"
                      name="telefono"
                      value={form.telefono}
                      onChange={handleChange}
                      className="w-full px-4 py-3.5 rounded-xl border border-[#e2e8f0] text-[#1a2d42] text-sm focus:outline-none focus:border-[#4dbb6b] focus:ring-2 focus:ring-[#4dbb6b]/20 transition-all"
                      placeholder="+34 600 000 000"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#64748b] uppercase tracking-widest mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3.5 rounded-xl border border-[#e2e8f0] text-[#1a2d42] text-sm focus:outline-none focus:border-[#4dbb6b] focus:ring-2 focus:ring-[#4dbb6b]/20 transition-all"
                      placeholder="tu@empresa.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#64748b] uppercase tracking-widest mb-2">¿En qué podemos ayudarte? *</label>
                  <textarea
                    name="mensaje"
                    required
                    rows={5}
                    value={form.mensaje}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 rounded-xl border border-[#e2e8f0] text-[#1a2d42] text-sm focus:outline-none focus:border-[#4dbb6b] focus:ring-2 focus:ring-[#4dbb6b]/20 transition-all resize-none"
                    placeholder="Cuéntanos brevemente tu situación energética actual…"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-[#1a2d42] text-white font-bold rounded-xl text-base hover:bg-[#4dbb6b] transition-all duration-300 hover:shadow-lg hover:shadow-[#4dbb6b]/30"
                >
                  Enviar mensaje →
                </button>

                <p className="text-center text-xs text-[#94a3b8]">
                  Tus datos no serán cedidos a terceros. Prometido.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
