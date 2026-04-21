import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { FiInstagram, FiMessageCircle } from 'react-icons/fi'

export default function Join() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="vem-correr" className="relative py-20 md:py-28 px-5 md:px-8 bg-paper-warm paper-bg overflow-hidden">
      {/* Decorative sneaker bg */}
      <div className="absolute right-0 bottom-0 opacity-[0.04] pointer-events-none translate-x-1/4 translate-y-1/4">
        <img src="/sneaker.png" alt="" className="w-[500px] rotate-[-15deg]" />
      </div>

      <div ref={ref} className="relative z-10 max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block font-heading text-red/30 text-xs font-bold tracking-[0.4em] uppercase mb-5">
            Próximo Domingo
          </span>

          {/* Big CTA headline */}
          <h2 className="leading-[0.92] mb-6">
            <span className="font-heading text-ink text-5xl sm:text-6xl md:text-7xl font-black uppercase block">
              VEM
            </span>
            <span className="font-serif text-gold text-3xl sm:text-4xl italic block -mt-1">
              correr com
            </span>
            <span className="font-heading text-red text-5xl sm:text-6xl md:text-7xl font-black uppercase block">
              A GENTE
            </span>
          </h2>

          {/* Sneaker between text */}
          <motion.img
            src="/sneaker.png"
            alt="Seb's"
            className="w-40 sm:w-48 md:w-56 mx-auto mb-6"
            initial={{ opacity: 0, rotate: -5 }}
            animate={inView ? { opacity: 1, rotate: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          />

          {/* Info badge */}
          <div className="inline-flex flex-wrap items-center justify-center gap-x-3 gap-y-1 bg-ink text-white px-6 py-3 rounded-full font-heading font-bold text-sm tracking-wider uppercase mb-10">
            <span>Dom</span>
            <span className="text-gold">•</span>
            <span>06:30</span>
            <span className="text-gold">•</span>
            <span>Lagoa Seca / Belvedere</span>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <motion.a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2.5 px-7 py-3.5 bg-red text-white font-heading font-bold text-sm tracking-wider uppercase rounded-full hover:bg-red-light transition-colors duration-200 w-full sm:w-auto justify-center shadow-md shadow-red/15"
            >
              <FiInstagram size={17} />
              Instagram
            </motion.a>

            <motion.a
              href="#"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2.5 px-7 py-3.5 border-2 border-ink/15 text-ink font-heading font-bold text-sm tracking-wider uppercase rounded-full hover:border-ink/30 hover:bg-ink/[0.03] transition-all duration-200 w-full sm:w-auto justify-center"
            >
              <FiMessageCircle size={17} />
              WhatsApp
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
