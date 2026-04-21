import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { FiInstagram, FiMessageCircle } from 'react-icons/fi'

export default function Join() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="vem-correr" className="relative py-16 sm:py-20 md:py-28 px-4 sm:px-5 md:px-8 bg-kraft grain overflow-hidden">
      {/* Watermark — scaled for mobile */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span className="font-poster text-ink/[0.025] text-[6rem] sm:text-[10rem] md:text-[16rem] lg:text-[20rem] tracking-wider whitespace-nowrap">
          RUN
        </span>
      </div>

      <div ref={ref} className="relative z-10 max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="font-poster text-warm text-xs sm:text-sm tracking-[0.3em] sm:tracking-[0.4em] uppercase block mb-4 sm:mb-6">
            Próximo Domingo
          </span>

          {/* CTA headline */}
          <div className="mb-3 sm:mb-4">
            <span className="font-poster text-ink text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-none block">
              VEM
            </span>
            <span className="font-serif text-gold italic text-2xl sm:text-3xl md:text-4xl block -mt-0.5 sm:-mt-1">
              correr com
            </span>
            <span className="font-poster text-red text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-none block -mt-0.5 sm:-mt-1">
              A GENTE
            </span>
          </div>

          {/* Sneaker */}
          <motion.img
            src="/sneaker.png"
            alt="Seb's"
            className="w-36 sm:w-44 md:w-52 lg:w-60 mx-auto mb-4 sm:mb-6"
            initial={{ opacity: 0, rotate: -5 }}
            animate={inView ? { opacity: 1, rotate: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 }}
          />

          {/* Info */}
          <div className="flex items-center justify-center gap-2 sm:gap-3 bg-ink text-cream px-4 sm:px-6 py-2.5 sm:py-3 font-poster text-[11px] sm:text-sm tracking-[0.1em] sm:tracking-[0.15em] uppercase mb-8 sm:mb-10 mx-auto w-fit">
            <span>Dom</span>
            <span className="text-gold text-[10px] sm:text-sm">•</span>
            <span>06:30</span>
            <span className="text-gold text-[10px] sm:text-sm">•</span>
            <span>Lagoa Seca / Belvedere</span>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4">
            <motion.a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2.5 px-6 sm:px-8 py-3.5 bg-red text-white font-poster text-sm sm:text-base tracking-[0.1em] sm:tracking-[0.15em] uppercase hover:bg-red-light active:bg-red-dark transition-colors duration-200 justify-center shadow-lg shadow-red/15 min-h-[48px]"
            >
              <FiInstagram size={17} />
              Instagram
            </motion.a>

            <motion.a
              href="#"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2.5 px-6 sm:px-8 py-3.5 border-2 border-ink/20 text-ink font-poster text-sm sm:text-base tracking-[0.1em] sm:tracking-[0.15em] uppercase hover:border-ink/40 active:bg-ink/[0.06] transition-all duration-200 justify-center min-h-[48px]"
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
