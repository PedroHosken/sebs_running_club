import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const steps = [
  { time: '06:15', title: 'CHEGADA', desc: 'Encontro no ponto. Aquecimento e bom dia.', color: 'bg-red', textColor: 'text-red' },
  { time: '06:30', title: 'LARGADA', desc: 'Corrida coletiva. Pace livre ou social.', color: 'bg-blue', textColor: 'text-blue' },
  { time: '07:15', title: 'VOLTA', desc: 'Alongamento e papo pós-corrida.', color: 'bg-gold', textColor: 'text-gold' },
  { time: '07:30', title: 'CAFÉ', desc: 'Brunch no parceiro da semana.', color: 'bg-ink', textColor: 'text-ink' },
]

export default function Schedule() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="ritual" className="relative py-20 md:py-28 px-5 md:px-8 bg-ink grain overflow-hidden">
      {/* Background echo text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span className="font-poster text-cream/[0.02] text-[20rem] md:text-[30rem] tracking-wider whitespace-nowrap">
          SUNDAY
        </span>
      </div>

      <div ref={ref} className="relative z-10 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="font-poster text-gold/40 text-sm tracking-[0.5em] uppercase block mb-3">
            Todo Domingo
          </span>
          <h2 className="font-poster text-cream text-5xl sm:text-6xl md:text-7xl leading-none mb-2">
            O RITUAL
          </h2>
          <p className="font-serif text-gold italic text-xl md:text-2xl">
            de domingo de manhã
          </p>
          <p className="font-body text-cream/25 text-sm mt-3 font-light">
            Lagoa Seca & Belvedere
          </p>
        </motion.div>

        {/* Steps as poster-style blocks */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-0">
          {steps.map((step, i) => (
            <motion.div
              key={step.time}
              initial={{ opacity: 0, y: 25 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
              className={`${step.color} p-6 md:p-7 text-center relative group`}
            >
              <span className="font-poster text-white/20 text-6xl md:text-7xl absolute top-2 right-3 select-none">
                {String(i + 1).padStart(2, '0')}
              </span>
              <div className="relative z-10">
                <span className="font-poster text-white text-3xl md:text-4xl block mb-1">
                  {step.time}
                </span>
                <h3 className="font-poster text-white/80 text-lg tracking-[0.2em] mb-2">
                  {step.title}
                </h3>
                <p className="font-body text-white/40 text-sm font-light leading-relaxed">
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
          className="text-center mt-8 font-serif text-cream/15 text-base italic"
        >
          Às 08h você já tá livre — com o domingo inteiro pela frente.
        </motion.p>
      </div>
    </section>
  )
}
