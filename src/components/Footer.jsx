import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Footer() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <footer className="relative py-16 md:py-20 px-6">
      <div className="absolute inset-0 bg-navy-dark pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      <div ref={ref} className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="mb-12"
        >
          <blockquote className="font-display text-gold/80 text-2xl md:text-3xl italic leading-relaxed">
            "Every city needs a place like this."
          </blockquote>
          <p className="font-accent text-ivory-muted/40 text-sm mt-4 tracking-wider">
            — La La Land, 2016
          </p>
        </motion.div>

        {/* Logo */}
        <motion.img
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 0.4 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
          src="/logo.png"
          alt="Seb's Running Club"
          className="w-24 mx-auto mb-8"
        />

        {/* Divider */}
        <div className="section-divider mb-8">
          <span className="text-gold/30 text-xs">✦</span>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-ivory-muted/30 text-xs font-body">
          <p>
            &copy; {new Date().getFullYear()} Seb's Running Club. Belo
            Horizonte, MG.
          </p>
          <p className="font-accent tracking-wider">
            Est. 2025 &nbsp;·&nbsp; Corrida &nbsp;·&nbsp; Comunidade
            &nbsp;·&nbsp; Cultura
          </p>
        </div>
      </div>
    </footer>
  )
}
