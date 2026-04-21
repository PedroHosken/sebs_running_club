import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const merchItems = [
  { name: 'Camiseta Retrô', desc: 'Peça que você quer usar fora da corrida.' },
  { name: 'Boné Vintage', desc: 'Design art déco com o logo do clube.' },
  { name: 'Meias Running', desc: 'Conforto com identidade em cada passo.' },
  { name: 'Adesivos', desc: 'Para marcar presença onde você estiver.' },
]

export default function Culture() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="cultura" className="relative py-24 md:py-32 px-6">
      <div className="absolute inset-0 bg-navy-medium pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      <div ref={ref} className="relative z-10 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="deco-line mb-6">
            <span className="text-gold text-xs tracking-[0.4em] uppercase font-accent">
              ✦
            </span>
          </div>
          <h2 className="font-display text-ivory text-4xl md:text-5xl mb-4">
            Cultura & Identidade
          </h2>
          <p className="font-accent text-ivory-muted text-lg max-w-2xl mx-auto">
            A identidade do Seb's é seu maior diferencial. A estética retrô
            aplicada a um clube de corrida cria dissonância positiva — ninguém
            está fazendo isso.
          </p>
        </motion.div>

        {/* Color palette showcase */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mb-16"
        >
          <h3 className="font-accent text-gold/60 text-sm tracking-[0.3em] uppercase text-center mb-8">
            Nossa Paleta
          </h3>
          <div className="flex justify-center gap-4 md:gap-6">
            {[
              { color: 'bg-[#1A1A2E]', name: 'Navy', hex: '#1A1A2E', border: true },
              { color: 'bg-[#C9A84C]', name: 'Dourado', hex: '#C9A84C' },
              { color: 'bg-[#F5E9C8]', name: 'Marfim', hex: '#F5E9C8' },
            ].map((swatch) => (
              <div key={swatch.name} className="text-center group">
                <div
                  className={`w-16 h-16 md:w-20 md:h-20 ${swatch.color} ${
                    swatch.border ? 'border border-gold/30' : ''
                  } transition-transform duration-300 group-hover:scale-110 shadow-lg`}
                />
                <p className="font-body text-ivory/60 text-xs mt-3">
                  {swatch.name}
                </p>
                <p className="font-body text-ivory/30 text-xs">{swatch.hex}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Merch grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <h3 className="font-accent text-gold/60 text-sm tracking-[0.3em] uppercase text-center mb-8">
            Merch Retrô
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {merchItems.map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                className="border border-gold/10 bg-navy/50 p-6 text-center hover:border-gold/25 transition-all duration-500 group"
              >
                <div className="w-10 h-10 mx-auto mb-4 border border-gold/20 flex items-center justify-center text-gold/50 font-display text-lg group-hover:border-gold/40 transition-colors duration-300">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h4 className="font-display text-ivory text-sm mb-1">
                  {item.name}
                </h4>
                <p className="font-body text-ivory-muted/50 text-xs">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Inspiration note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="font-accent text-ivory-muted/40 text-sm tracking-wide">
            Inspiração:{' '}
            <span className="text-gold/50 italic">
              Pôsteres de jazz dos anos 1940-50 · Art Déco · Seb's Jazz Club —
              La La Land (2016)
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
