import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Footer() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-20px' })

  return (
    <footer className="relative py-12 sm:py-14 md:py-16 px-4 sm:px-5 md:px-8 bg-ink safe-bottom">
      <div ref={ref} className="relative z-10 max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="font-poster text-cream/10 text-3xl sm:text-4xl md:text-5xl lg:text-7xl tracking-wider mb-3 sm:mb-4 select-none">
            RUN SEB'S RUN
          </p>

          <blockquote className="font-serif text-gold/40 text-base sm:text-lg md:text-xl italic leading-relaxed mb-2 px-4">
            "My mama always said, life is like a box of chocolates."
          </blockquote>
          <p className="font-body text-cream/12 text-[10px] sm:text-xs tracking-wider mb-6 sm:mb-8 font-light">
            — Forrest Gump, 1994
          </p>

          <img
            src="/sneaker.png"
            alt="Seb's"
            className="w-10 sm:w-12 md:w-14 mx-auto mb-5 sm:mb-6 opacity-15 grayscale brightness-200"
          />

          <p className="text-cream/10 text-[10px] sm:text-xs font-poster tracking-[0.15em] sm:tracking-[0.2em] uppercase">
            &copy; {new Date().getFullYear()} Seb's Running Club · Belo Horizonte
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
