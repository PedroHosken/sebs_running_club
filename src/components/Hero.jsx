import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-dvh flex flex-col items-center justify-center px-5 md:px-8 bg-cream grain overflow-hidden">
      {/* Faded poster images in background */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-[0.06] pointer-events-none overflow-hidden hidden lg:block">
        <img src="/poster-72.png" alt="" className="absolute top-10 right-0 w-[500px] rotate-3" />
      </div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 opacity-[0.04] pointer-events-none overflow-hidden hidden lg:block">
        <img src="/poster-run.png" alt="" className="absolute bottom-0 left-0 w-[400px] -rotate-6" />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 flex flex-col items-center text-center w-full max-w-3xl pt-20"
      >
        {/* Top label */}
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.4 }}
          className="font-poster text-warm text-sm md:text-base tracking-[0.5em] uppercase mb-6"
        >
          Belo Horizonte · Est. 2025
        </motion.p>

        {/* Massive overlapping headline — THE 72' poster style */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.6 }}
          className="relative mb-2"
        >
          {/* Shadow/echo layers */}
          <span className="absolute -top-2 left-1/2 -translate-x-1/2 font-poster text-blue/15 text-[7rem] sm:text-[9rem] md:text-[12rem] lg:text-[14rem] leading-none tracking-wider select-none">
            RUN
          </span>
          <span className="absolute top-1 left-1/2 -translate-x-[48%] font-poster text-red/10 text-[7rem] sm:text-[9rem] md:text-[12rem] lg:text-[14rem] leading-none tracking-wider select-none">
            RUN
          </span>
          <h1 className="relative font-poster text-red text-[7rem] sm:text-[9rem] md:text-[12rem] lg:text-[14rem] leading-none tracking-wider">
            RUN
          </h1>
        </motion.div>

        {/* Script middle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="font-serif text-gold italic text-3xl sm:text-4xl md:text-5xl -mt-4 md:-mt-6 mb-1 relative z-10"
        >
          Seb's,
        </motion.p>

        {/* Second RUN */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.5 }}
          className="relative -mt-2 md:-mt-4"
        >
          <span className="absolute top-1 left-1/2 -translate-x-[52%] font-poster text-red/10 text-[5rem] sm:text-[7rem] md:text-[9rem] lg:text-[11rem] leading-none tracking-wider select-none">
            RUN
          </span>
          <p className="relative font-poster text-blue text-[5rem] sm:text-[7rem] md:text-[9rem] lg:text-[11rem] leading-none tracking-wider">
            RUN
          </p>
        </motion.div>

        {/* Sneaker */}
        <motion.img
          src="/sneaker.png"
          alt="Seb's Running Club"
          className="w-48 sm:w-56 md:w-72 lg:w-80 h-auto mt-4 md:mt-6 mb-6"
          initial={{ opacity: 0, x: -30, rotate: -5 }}
          animate={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
        />

        {/* Info bar */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.4 }}
          className="mb-6"
        >
          <div className="inline-flex flex-wrap items-center justify-center gap-x-3 sm:gap-x-5 gap-y-1 bg-ink text-cream px-5 sm:px-8 py-3 font-poster text-sm sm:text-base tracking-[0.15em] uppercase">
            <span>Domingos</span>
            <span className="text-gold">•</span>
            <span>06:30</span>
            <span className="text-gold">•</span>
            <span>Lagoa Seca</span>
          </div>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="font-body text-warm text-base sm:text-lg max-w-sm leading-relaxed mb-8 font-light"
        >
          Corrida, café e gente boa. Todo domingo de manhã em BH.
        </motion.p>

        {/* CTA */}
        <motion.a
          href="#vem-correr"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.4 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="px-10 py-4 bg-red text-white font-poster text-xl tracking-[0.15em] uppercase hover:bg-red-light transition-colors duration-200 shadow-lg shadow-red/20"
        >
          Quero Participar
        </motion.a>
      </motion.div>

      {/* Scroll */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.6 }}
        className="absolute bottom-5"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          className="w-5 h-8 border-2 border-ink/12 rounded-full flex items-start justify-center pt-1.5"
        >
          <div className="w-1.5 h-1.5 bg-ink/20 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  )
}
