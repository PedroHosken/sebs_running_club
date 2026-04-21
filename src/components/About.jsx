import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="sobre" className="relative py-16 sm:py-20 md:py-28 px-4 sm:px-5 md:px-8 bg-kraft grain overflow-hidden">
      {/* Watermark poster — desktop only */}
      <div className="absolute -right-20 top-1/2 -translate-y-1/2 opacity-[0.04] pointer-events-none hidden md:block">
        <img src="/poster-gump.png" alt="" className="w-[500px] rotate-6" />
      </div>

      <div ref={ref} className="relative z-10 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row items-center gap-8 sm:gap-10 lg:gap-16"
        >
          {/* Poster image — smaller on mobile, side on desktop */}
          <div className="w-full lg:w-2/5 shrink-0">
            <motion.div
              initial={{ opacity: 0, rotate: -3 }}
              animate={inView ? { opacity: 1, rotate: -2 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-cream p-2 sm:p-3 shadow-xl shadow-ink/10 max-w-[240px] sm:max-w-xs mx-auto"
            >
              <img
                src="/poster-run.png"
                alt="Run Seb's Run"
                className="w-full"
              />
              <p className="font-poster text-ink/40 text-[10px] sm:text-xs text-center mt-1.5 sm:mt-2 tracking-wider uppercase">
                Inspiração · Forrest Gump · 1994
              </p>
            </motion.div>
          </div>

          {/* Text — centered on mobile, left on desktop */}
          <div className="w-full lg:w-3/5 text-center lg:text-left">
            <span className="font-poster text-red text-xs sm:text-sm tracking-[0.3em] sm:tracking-[0.4em] uppercase block mb-3 sm:mb-4">
              O Clube
            </span>

            <h2 className="font-poster text-ink text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-none mb-4 sm:mb-6">
              NÃO É SÓ<br />
              <span className="text-red">SOBRE CORRER.</span>
            </h2>

            <p className="font-serif text-gold italic text-xl sm:text-2xl md:text-3xl mb-4 sm:mb-6">
              É sobre com quem você corre.
            </p>

            <p className="font-body text-ink-light text-sm sm:text-base leading-relaxed mb-3 sm:mb-4 font-light max-w-lg mx-auto lg:mx-0">
              O Seb's nasceu pra ser o ponto de encontro dos jovens de BH que querem
              começar o domingo com energia, gente boa e um café depois da corrida.
            </p>

            <p className="font-body text-warm text-xs sm:text-sm leading-relaxed font-light max-w-lg mx-auto lg:mx-0">
              Inspirado no universo de Forrest Gump e na cultura do Nike Cortez '72 —
              a gente acredita que um clube de corrida pode ter personalidade, estética
              e uma cultura que vai além do treino.
            </p>

            {/* Three pillars */}
            <div className="flex flex-wrap gap-2 sm:gap-3 mt-6 sm:mt-8 justify-center lg:justify-start">
              {[
                { label: 'Corrida', color: 'bg-red' },
                { label: 'Café', color: 'bg-gold' },
                { label: 'Crew', color: 'bg-blue' },
              ].map((item) => (
                <div
                  key={item.label}
                  className={`${item.color} text-white font-poster text-xs sm:text-sm tracking-[0.1em] sm:tracking-[0.15em] uppercase px-3 sm:px-4 py-1.5 sm:py-2`}
                >
                  {item.label}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
