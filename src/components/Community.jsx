import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const vibes = [
  'Universitários que acordam cedo porque querem',
  'Profissionais jovens buscando energia',
  'Empreendedores e criativos de BH',
  'Quem quer fazer parte de algo autêntico',
  'Quem troca academia por céu aberto',
  'Gente da Savassi, Belvedere, Lourdes e região',
]

export default function Community() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="crew" className="relative py-16 sm:py-20 md:py-28 px-4 sm:px-5 md:px-8 bg-cream grain overflow-hidden">
      <div ref={ref} className="relative z-10 max-w-5xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10 lg:gap-16">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-3/5 text-center lg:text-left"
          >
            <span className="font-poster text-blue text-xs sm:text-sm tracking-[0.3em] sm:tracking-[0.4em] uppercase block mb-3 sm:mb-4">
              A Crew
            </span>

            <h2 className="font-poster text-ink text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-none mb-2">
              FEITO PRA
            </h2>
            <p className="font-serif text-gold italic text-xl sm:text-2xl md:text-3xl mb-6 sm:mb-8">
              gente como você
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 mb-8 sm:mb-10">
              {vibes.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -8 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.3, delay: 0.2 + i * 0.05 }}
                  className="flex items-center gap-3 bg-kraft/50 border border-ink/5 px-3 sm:px-4 py-2.5 sm:py-3"
                >
                  <div className="w-2 h-2 bg-red shrink-0" />
                  <span className="font-body text-ink-light text-xs sm:text-sm font-medium">{item}</span>
                </motion.div>
              ))}
            </div>

            {/* Quote card */}
            <div className="bg-ink p-5 sm:p-6 md:p-8 relative overflow-hidden">
              <span className="absolute -top-2 right-3 sm:right-4 font-serif text-gold/10 text-6xl sm:text-8xl select-none">"</span>
              <p className="font-poster text-cream text-xl sm:text-2xl md:text-3xl leading-tight mb-2 relative z-10">
                NÃO É MAIS UM<br />
                <span className="text-red">GRUPO DE CORRIDA.</span>
              </p>
              <p className="font-body text-cream/30 text-xs sm:text-sm font-light relative z-10">
                É um clube com cultura, estética e gente que se reconhece.
              </p>
            </div>
          </motion.div>

          {/* Poster collage — desktop only */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:w-2/5 shrink-0 hidden lg:block"
          >
            <div className="relative">
              <div className="bg-cream p-3 shadow-lg shadow-ink/8 rotate-2 mb-4">
                <img src="/poster-72.png" alt="The 72' Cortez" className="w-full" />
              </div>
              <div className="bg-cream p-3 shadow-lg shadow-ink/8 -rotate-1 -mt-8 ml-6">
                <img src="/poster-gump.png" alt="Forrest Gump" className="w-full" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
