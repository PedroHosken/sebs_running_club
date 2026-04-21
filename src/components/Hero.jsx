import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-dvh flex flex-col items-center justify-center px-5 md:px-8 paper-bg bg-paper overflow-hidden">
      {/* Subtle radial warmth */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(212,168,67,0.06),transparent_70%)] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 flex flex-col items-center text-center w-full max-w-2xl pt-16"
      >
        {/* Top tagline */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="font-body text-ink/35 text-xs md:text-sm font-medium tracking-[0.35em] uppercase mb-8"
        >
          Belo Horizonte &nbsp;·&nbsp; Est. 2025
        </motion.p>

        {/* Sneaker logo — the hero */}
        <motion.img
          src="/sneaker.png"
          alt="Seb's Running Club"
          className="w-72 sm:w-80 md:w-[420px] lg:w-[480px] h-auto mb-6 drop-shadow-lg"
          initial={{ scale: 0.9, opacity: 0, rotate: -3 }}
          animate={{ scale: 1, opacity: 1, rotate: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
        />

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="leading-[0.92]  mb-5"
        >
          <span className="font-heading text-red text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black uppercase block">
            RUN
          </span>
          <span className="font-serif text-gold text-3xl sm:text-4xl md:text-5xl italic block -mt-1 md:-mt-2">
            with the
          </span>
          <span className="font-heading text-blue text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase block">
            CREW
          </span>
        </motion.h1>

        {/* When & where pill */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="mt-4 mb-8"
        >
          <div className="inline-flex flex-wrap items-center justify-center gap-x-4 gap-y-1 bg-ink text-white px-6 sm:px-8 py-3.5 rounded-full font-heading font-bold text-sm sm:text-base tracking-wider uppercase">
            <span>Domingos</span>
            <span className="text-gold">•</span>
            <span>06:30</span>
            <span className="text-gold">•</span>
            <span>Lagoa Seca</span>
          </div>
        </motion.div>

        {/* Sub text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="font-body text-ink/45 text-base sm:text-lg max-w-sm leading-relaxed mb-10 font-light"
        >
          Corrida, café e gente boa. Todo domingo de manhã em BH.
        </motion.p>

        {/* CTA */}
        <motion.a
          href="#vem-correr"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.4 }}
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.97 }}
          className="px-10 py-4 bg-red text-white font-heading font-bold text-base tracking-wider uppercase rounded-full hover:bg-red-light transition-colors duration-200 shadow-lg shadow-red/20"
        >
          Quero Participar
        </motion.a>
      </motion.div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.8 }}
        className="absolute bottom-6 flex flex-col items-center"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          className="w-5 h-8 border-2 border-ink/15 rounded-full flex items-start justify-center pt-1.5"
        >
          <div className="w-1.5 h-1.5 bg-ink/20 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  )
}
