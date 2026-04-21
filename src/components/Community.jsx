import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const vibes = [
  'Universitários que acordam cedo porque querem',
  'Profissionais jovens buscando energia',
  'Empreendedores e criativos de BH',
  'Quem quer fazer parte de algo autêntico',
  'Quem troca academia por céu aberto',
  'Gente da Savassi, Belvedere, Lourdes e arredores',
]

export default function Community() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="comunidade" className="relative py-20 md:py-28 px-5 md:px-8 bg-paper paper-bg">
      <div ref={ref} className="relative z-10 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-14"
        >
          <span className="inline-block font-heading text-blue/40 text-xs font-bold tracking-[0.4em] uppercase mb-5">
            A Crew
          </span>
          <h2 className="font-heading text-ink text-3xl sm:text-4xl md:text-5xl font-black leading-tight mb-5">
            Feito pra <span className="text-red">gente</span><br />
            <span className="font-serif text-gold italic font-normal">como você</span>
          </h2>
          <p className="font-body text-ink/40 text-base sm:text-lg max-w-md mx-auto font-light">
            18 a 32 anos, cheio de energia, buscando mais do que um treino.
          </p>
        </motion.div>

        {/* People grid */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="grid sm:grid-cols-2 gap-3 md:gap-4 max-w-xl mx-auto mb-14"
        >
          {vibes.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -8 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.35, delay: 0.25 + i * 0.06 }}
              className="flex items-center gap-3 bg-white rounded-xl px-4 py-3.5 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <span className="text-red text-sm shrink-0">●</span>
              <span className="font-body text-ink/60 text-sm font-medium">{item}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Statement card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="relative bg-ink rounded-2xl p-8 md:p-12 text-center max-w-xl mx-auto overflow-hidden"
        >
          <div className="absolute top-3 right-4 text-gold/20 text-5xl font-serif select-none">"</div>
          <p className="font-heading text-white text-xl sm:text-2xl md:text-3xl font-black leading-snug mb-3 relative z-10">
            Não é mais um
            <span className="text-red"> grupo de corrida.</span>
          </p>
          <p className="font-body text-white/40 text-base font-light relative z-10">
            É um clube com cultura, estética e gente que se reconhece.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
