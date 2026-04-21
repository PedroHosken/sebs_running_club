import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="sobre" className="relative py-20 md:py-28 px-5 md:px-8 bg-kraft grain overflow-hidden">
      {/* Watermark poster */}
      <div className="absolute -right-20 top-1/2 -translate-y-1/2 opacity-[0.04] pointer-events-none hidden md:block">
        <img src="/poster-gump.png" alt="" className="w-[500px] rotate-6" />
      </div>

      <div ref={ref} className="relative z-10 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16"
        >
          {/* Left — poster image */}
          <div className="lg:w-2/5 shrink-0">
            <motion.div
              initial={{ opacity: 0, rotate: -3 }}
              animate={inView ? { opacity: 1, rotate: -2 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-cream p-3 shadow-xl shadow-ink/10 max-w-xs mx-auto"
            >
              <img
                src="/poster-run.png"
                alt="Run Seb's Run"
                className="w-full"
              />
              <p className="font-poster text-ink/40 text-xs text-center mt-2 tracking-wider uppercase">
                Inspiração · Forrest Gump · 1994
              </p>
            </motion.div>
          </div>

          {/* Right — text */}
          <div className="lg:w-3/5">
            <span className="font-poster text-red text-sm tracking-[0.4em] uppercase block mb-4">
              O Clube
            </span>

            <h2 className="font-poster text-ink text-4xl sm:text-5xl md:text-6xl leading-none mb-6">
              NÃO É SÓ<br />
              <span className="text-red">SOBRE CORRER.</span>
            </h2>

            <p className="font-serif text-gold italic text-2xl md:text-3xl mb-6">
              É sobre com quem você corre.
            </p>

            <p className="font-body text-ink-light text-base leading-relaxed mb-4 font-light">
              O Seb's nasceu pra ser o ponto de encontro dos jovens de BH que querem
              começar o domingo com energia, gente boa e um café depois da corrida.
            </p>

            <p className="font-body text-warm text-sm leading-relaxed font-light">
              Inspirado no universo de Forrest Gump e na cultura do Nike Cortez '72 —
              a gente acredita que um clube de corrida pode ter personalidade, estética
              e uma cultura que vai além do treino.
            </p>

            {/* Three pillars */}
            <div className="flex gap-4 mt-8">
              {[
                { label: 'Corrida', color: 'bg-red' },
                { label: 'Café', color: 'bg-gold' },
                { label: 'Crew', color: 'bg-blue' },
              ].map((item) => (
                <div
                  key={item.label}
                  className={`${item.color} text-white font-poster text-sm tracking-[0.15em] uppercase px-4 py-2`}
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
