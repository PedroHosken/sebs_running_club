import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const steps = [
  { time: '06:15', title: 'CHEGADA', desc: 'Encontro no ponto. Aquecimento e bom dia.', color: 'bg-red' },
  { time: '06:30', title: 'LARGADA', desc: 'Corrida coletiva. Pace livre ou social.', color: 'bg-blue' },
  { time: '07:15', title: 'VOLTA', desc: 'Alongamento e papo pós-corrida.', color: 'bg-gold' },
  { time: '07:30', title: 'CAFÉ', desc: 'Brunch no parceiro da semana.', color: 'bg-ink' },
]

export default function Schedule() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="ritual" className="relative py-16 sm:py-20 md:py-28 px-4 sm:px-5 md:px-8 bg-ink grain overflow-hidden">
      {/* Background echo text — hidden on small mobile to avoid overflow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span className="font-poster text-cream/[0.02] text-[8rem] sm:text-[14rem] md:text-[22rem] lg:text-[30rem] tracking-wider whitespace-nowrap">
          SUNDAY
        </span>
      </div>

      <div ref={ref} className="relative z-10 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          <span className="font-poster text-gold/40 text-xs sm:text-sm tracking-[0.3em] sm:tracking-[0.5em] uppercase block mb-2 sm:mb-3">
            Todo Domingo
          </span>
          <h2 className="font-poster text-cream text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-none mb-2">
            O RITUAL
          </h2>
          <p className="font-serif text-gold italic text-lg sm:text-xl md:text-2xl">
            de domingo de manhã
          </p>
          <p className="font-body text-cream/25 text-xs sm:text-sm mt-2 sm:mt-3 font-light">
            Lagoa Seca & Belvedere
          </p>
        </motion.div>

        {/* Steps — 2 cols on small mobile, 4 cols on desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-0">
          {steps.map((step, i) => (
            <motion.div
              key={step.time}
              initial={{ opacity: 0, y: 25 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
              className={`${step.color} p-4 sm:p-5 md:p-7 text-center relative`}
            >
              <span className="font-poster text-white/15 text-4xl sm:text-5xl md:text-7xl absolute top-1 sm:top-2 right-2 sm:right-3 select-none">
                {String(i + 1).padStart(2, '0')}
              </span>
              <div className="relative z-10">
                <span className="font-poster text-white text-2xl sm:text-3xl md:text-4xl block mb-0.5 sm:mb-1">
                  {step.time}
                </span>
                <h3 className="font-poster text-white/80 text-sm sm:text-base md:text-lg tracking-[0.15em] sm:tracking-[0.2em] mb-1 sm:mb-2">
                  {step.title}
                </h3>
                <p className="font-body text-white/35 text-xs sm:text-sm font-light leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-6 sm:mt-8 font-serif text-cream/15 text-sm sm:text-base italic px-2"
        >
          Às 08h você já tá livre — com o domingo inteiro pela frente.
        </motion.p>
      </div>
    </section>
  )
}
