import { useEffect } from 'react'

const sections = [
  {
    title: '1. Responsable del tratamiento',
    content: `Los datos personales recogidos a través de este sitio web son tratados por <strong>Calaf Consulting</strong>, con dirección de contacto en <strong>info@calafconsulting.com</strong> y teléfono <strong>+34 649 48 62 35</strong>.`,
  },
  {
    title: '2. Datos que recogemos',
    content: `Recogemos únicamente los datos que el usuario nos facilita voluntariamente a través del formulario de contacto: nombre, empresa, teléfono, dirección de correo electrónico y el contenido del mensaje. No recogemos datos especialmente protegidos ni datos de menores.`,
  },
  {
    title: '3. Finalidad del tratamiento',
    content: `Los datos se utilizan exclusivamente para responder a la consulta realizada y, en su caso, para el mantenimiento de la relación comercial o de prestación de servicios. No se utilizarán para ningún otro fin sin consentimiento previo.`,
  },
  {
    title: '4. Base jurídica',
    content: `El tratamiento se basa en el consentimiento expreso del interesado (Art. 6.1.a RGPD), otorgado mediante la marcación voluntaria de la casilla de aceptación del formulario de contacto. Dicho consentimiento puede revocarse en cualquier momento.`,
  },
  {
    title: '5. Conservación de los datos',
    content: `Los datos se conservarán durante el tiempo necesario para gestionar la consulta y, si se inicia una relación comercial, durante el periodo que establezca la normativa aplicable. Una vez finalizada la finalidad, se procederá a su supresión segura.`,
  },
  {
    title: '6. Cesión a terceros',
    content: `Los datos personales no serán cedidos a terceros, salvo obligación legal. No realizamos transferencias internacionales de datos.`,
  },
  {
    title: '7. Derechos del interesado',
    content: `El usuario puede ejercer en cualquier momento sus derechos de <strong>acceso, rectificación, supresión, oposición, limitación del tratamiento y portabilidad</strong> enviando un correo a <strong>info@calafconsulting.com</strong>, indicando el asunto "Protección de datos" y adjuntando una copia de su DNI o documento equivalente.<br/><br/>Asimismo, tiene derecho a presentar una reclamación ante la <strong>Agencia Española de Protección de Datos (AEPD)</strong> en <a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer" class="text-[#4dbb6b] underline">www.aepd.es</a> si considera que el tratamiento no es conforme a la normativa.`,
  },
  {
    title: '8. Seguridad',
    content: `Calaf Consulting aplica las medidas técnicas y organizativas adecuadas para garantizar un nivel de seguridad apropiado al riesgo, conforme al Art. 32 del RGPD, con el fin de evitar la alteración, pérdida, tratamiento o acceso no autorizado a los datos personales.`,
  },
  {
    title: '9. Cookies',
    content: `Este sitio web puede utilizar cookies técnicas estrictamente necesarias para su funcionamiento. No se utilizan cookies de rastreo publicitario ni de terceros sin consentimiento previo.`,
  },
  {
    title: '10. Modificaciones',
    content: `Calaf Consulting se reserva el derecho a actualizar esta política de privacidad para adaptarla a cambios legislativos o de funcionamiento del sitio. Se recomienda revisarla periódicamente. La versión vigente es la publicada en esta página.`,
  },
]

export default function PoliticaPrivacidad() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <>
      <section className="hero-gradient pt-40 pb-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <span className="text-[#4dbb6b] text-sm font-bold tracking-widest uppercase">Legal</span>
          <h1 className="text-white font-black mt-3" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontFamily: 'Rajdhani, sans-serif' }}>
            Política de Privacidad
          </h1>
          <p className="text-white/50 mt-3 text-sm">Última actualización: junio de 2025</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <div className="prose prose-slate max-w-none space-y-10">
            {sections.map((s) => (
              <div key={s.title}>
                <h2 className="text-[#1a2d42] font-bold text-lg mb-3 pb-2 border-b border-[#e2e8f0]">
                  {s.title}
                </h2>
                <p
                  className="text-[#4a5568] leading-relaxed text-sm"
                  dangerouslySetInnerHTML={{ __html: s.content }}
                />
              </div>
            ))}
          </div>

          <div className="mt-14 p-6 bg-[#f0fdf4] border border-[#4dbb6b]/30 rounded-2xl text-sm text-[#4a5568]">
            <strong className="text-[#1a2d42]">¿Preguntas sobre el tratamiento de tus datos?</strong>
            <p className="mt-1">
              Escríbenos a{' '}
              <a href="mailto:info@calafconsulting.com" className="text-[#4dbb6b] underline">
                info@calafconsulting.com
              </a>{' '}
              con el asunto "Protección de datos" y te respondemos en un plazo máximo de 30 días.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
