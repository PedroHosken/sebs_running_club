import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { FiInstagram, FiMessageCircle } from 'react-icons/fi'

export default function Join() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="junte-se"
      className="relative py-24 md:py-32 px-6 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-navy-dark via-navy to-navy-dark pointer-events-none" />

      {/* Decorative glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-gold/3 blur-[150px] pointer-events-none" />

      <div ref={ref} className="relative z-10 max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="deco-line mb-6">
            <span className="text-gold text-xs tracking-[0.4em] uppercase font-accent">
              ✦
            </span>
          </div>

          <h2 className="font-display text-ivory text-4xl md:text-5xl lg:text-6xl mb-6">
            Faça Parte do <span className="text-gold italic">Seb's</span>
          </h2>

          <p className="font-accent text-ivory-muted text-lg md:text-xl max-w-xl mx-auto leading-relaxed mb-12">
            O Seb's é para os jovens de BH que querem mais do que um treino —
            querem pertencer a algo com personalidade. Estamos recrutando os
            primeiros membros.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <motion.a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-3 px-8 py-4 bg-gold text-navy-dark font-body font-semibold text-sm tracking-[0.15em] uppercase hover:bg-gold-light transition-colors duration-300 shadow-lg shadow-gold/20 w-full sm:w-auto justify-center"
            >
              <FiInstagram size={18} />
              Siga no Instagram
            </motion.a>

            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-3 px-8 py-4 border border-gold/50 text-gold font-body font-semibold text-sm tracking-[0.15em] uppercase hover:bg-gold/10 transition-all duration-300 w-full sm:w-auto justify-center"
            >
              <FiMessageCircle size={18} />
              Grupo no WhatsApp
            </motion.a>
          </div>

          {/* Who we're looking for */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="border border-gold/10 bg-navy-light/20 p-8 md:p-10"
          >
            <h3 className="font-accent text-gold/60 text-sm tracking-[0.3em] uppercase mb-6">
              Para quem é o Seb's
            </h3>
            <div className="grid sm:grid-cols-2 gap-4 text-left">
              {[
                'Jovens de 18 a 32 anos',
                'Universitários e profissionais',
                'Empreendedores e criativos',
                'Quem valoriza experiências autênticas',
                'Quem busca comunidade fora da academia',
                'Moradores do Belvedere, Lourdes, Savassi e região',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="text-gold text-xs mt-1.5">✦</span>
                  <span className="font-body text-ivory-muted/70 text-sm">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
