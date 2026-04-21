import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { FiInstagram, FiMessageCircle } from 'react-icons/fi'

export default function Join() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="vem-correr" className="relative py-20 md:py-28 px-5 md:px-8 bg-kraft grain overflow-hidden">
      {/* Giant watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span className="font-poster text-ink/[0.025] text-[12rem] md:text-[20rem] tracking-wider whitespace-nowrap">
          RUN
        </span>
      </div>

      <div ref={ref} className="relative z-10 max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="font-poster text-warm text-sm tracking-[0.4em] uppercase block mb-6">
            Próximo Domingo
          </span>

          {/* CTA headline */}
          <div className="mb-4">
            <span className="font-poster text-ink text-6xl sm:text-7xl md:text-8xl leading-none block">
              VEM
            </span>
            <span className="font-serif text-gold italic text-3xl sm:text-4xl block -mt-1">
              correr com
            </span>
            <span className="font-poster text-red text-6xl sm:text-7xl md:text-8xl leading-none block -mt-1">
              A GENTE
            </span>
          </div>

          {/* Sneaker */}
          <motion.img
            src="/sneaker.png"
            alt="Seb's"
            className="w-44 sm:w-52 md:w-60 mx-auto mb-6"
            initial={{ opacity: 0, rotate: -5 }}
            animate={inView ? { opacity: 1, rotate: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 }}
          />

          {/* Info */}
          <div className="inline-flex flex-wrap items-center justify-center gap-x-3 gap-y-1 bg-ink text-cream px-6 py-3 font-poster text-sm tracking-[0.15em] uppercase mb-10">
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
              className="flex items-center gap-2.5 px-8 py-3.5 bg-red text-white font-poster text-base tracking-[0.15em] uppercase hover:bg-red-light transition-colors duration-200 w-full sm:w-auto justify-center shadow-lg shadow-red/15"
            >
              <FiInstagram size={17} />
              Instagram
            </motion.a>

            <motion.a
              href="#"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2.5 px-8 py-3.5 border-2 border-ink/20 text-ink font-poster text-base tracking-[0.15em] uppercase hover:border-ink/40 hover:bg-ink/[0.04] transition-all duration-200 w-full sm:w-auto justify-center"
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
