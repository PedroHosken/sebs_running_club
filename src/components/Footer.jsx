import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Footer() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-20px' })

  return (
    <footer className="relative py-14 md:py-16 px-5 md:px-8 bg-ink">
      <div ref={ref} className="relative z-10 max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <blockquote className="font-serif text-gold/60 text-xl md:text-2xl italic leading-relaxed mb-2">
            "Every city needs a place like this."
          </blockquote>
          <p className="font-body text-white/20 text-xs tracking-wider mb-8 font-light">
            — La La Land, 2016
          </p>

          <img
            src="/sneaker.png"
            alt="Seb's"
            className="w-16 md:w-20 mx-auto mb-8 opacity-20 grayscale"
          />

          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-10 bg-white/10" />
            <span className="text-gold/25 text-[10px]">●</span>
            <div className="h-px w-10 bg-white/10" />
          </div>

          <p className="text-white/15 text-xs font-body font-light">
            &copy; {new Date().getFullYear()} Seb's Running Club &nbsp;·&nbsp; Belo Horizonte, MG
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
