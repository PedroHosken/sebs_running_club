import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-dvh flex flex-col items-center justify-center px-6 overflow-hidden">
      {/* Radial glow behind logo */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] rounded-full bg-gold/5 blur-[120px]" />
      </div>

      {/* Decorative corner elements */}
      <div className="absolute top-24 left-8 md:left-16 w-16 h-16 border-t border-l border-gold/20" />
      <div className="absolute top-24 right-8 md:right-16 w-16 h-16 border-t border-r border-gold/20" />
      <div className="absolute bottom-16 left-8 md:left-16 w-16 h-16 border-b border-l border-gold/20" />
      <div className="absolute bottom-16 right-8 md:right-16 w-16 h-16 border-b border-r border-gold/20" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="relative z-10 flex flex-col items-center text-center"
      >
        {/* Pre-title ornament */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="star-ornament mb-8"
        >
          ✦ &nbsp; ✦ &nbsp; ✦
        </motion.div>

        {/* Logo */}
        <motion.img
          src="/logo.png"
          alt="Seb's Running Club"
          className="w-64 md:w-80 lg:w-96 h-auto mb-8 drop-shadow-[0_0_60px_rgba(201,168,76,0.15)]"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut', delay: 0.2 }}
        />

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="font-accent text-gold/80 text-lg md:text-xl tracking-[0.3em] uppercase mb-6"
        >
          Est. 2025 &nbsp;·&nbsp; Belo Horizonte
        </motion.p>

        {/* Tagline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="font-display text-ivory text-3xl md:text-5xl lg:text-6xl leading-tight max-w-3xl mb-4"
        >
          Mais do que corrida.
          <br />
          <span className="text-gold italic">Uma cultura.</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="font-accent text-ivory-muted text-lg md:text-xl max-w-xl leading-relaxed mb-10"
        >
          Corridas matinais com identidade visual retrô, ritual de pós-corrida e
          a energia de quem quer pertencer a algo com personalidade.
        </motion.p>

        {/* CTA */}
        <motion.a
          href="#junte-se"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          className="px-10 py-4 bg-gold text-navy-dark font-body font-semibold text-sm tracking-[0.2em] uppercase hover:bg-gold-light transition-colors duration-300 shadow-lg shadow-gold/20"
        >
          Junte-se ao Clube
        </motion.a>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 flex flex-col items-center gap-2"
      >
        <span className="font-accent text-ivory-muted/50 text-xs tracking-[0.3em] uppercase">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
          className="w-px h-8 bg-gradient-to-b from-gold/40 to-transparent"
        />
      </motion.div>
    </section>
  )
}
