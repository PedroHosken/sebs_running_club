import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const steps = [
  { time: '06:15', title: 'Chegada', desc: 'Encontro no ponto. Aquecimento e bom dia.', color: 'bg-red', ring: 'ring-red/20' },
  { time: '06:30', title: 'Largada', desc: 'Corrida coletiva — pace livre ou social.', color: 'bg-blue', ring: 'ring-blue/20' },
  { time: '07:15', title: 'Volta', desc: 'Alongamento e aquele papo pós-corrida.', color: 'bg-gold', ring: 'ring-gold/20' },
  { time: '07:30', title: 'Café', desc: 'Brunch no parceiro da semana. Sagrado.', color: 'bg-ink', ring: 'ring-ink/10' },
]

export default function Schedule() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="ritual" className="relative py-20 md:py-28 px-5 md:px-8 bg-ink kraft-bg overflow-hidden">
      <div ref={ref} className="relative z-10 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="inline-block font-heading text-gold/40 text-xs font-bold tracking-[0.4em] uppercase mb-5">
            Todo Domingo
          </span>
          <h2 className="font-heading text-cream text-3xl sm:text-4xl md:text-5xl font-black leading-tight">
            O Ritual
            <span className="font-serif text-gold italic font-normal"> de domingo</span>
          </h2>
          <p className="font-body text-cream/30 text-sm sm:text-base mt-3 font-light">
            Lagoa Seca & Belvedere &nbsp;·&nbsp; Simples e direto.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((step, i) => (
            <motion.div
              key={step.time}
              initial={{ opacity: 0, y: 25 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
              className="bg-cream/[0.05] border border-cream/[0.07] rounded-2xl p-5 md:p-6 text-center hover:bg-cream/[0.08] transition-all duration-300"
            >
              <div className={`inline-flex items-center justify-center w-12 h-12 ${step.color} ring-4 ${step.ring} text-cream text-xs font-heading font-bold tracking-wider rounded-full mb-4`}>
                {step.time}
              </div>
              <h3 className="font-heading text-cream text-lg font-bold mb-1.5">
                {step.title}
              </h3>
              <p className="font-body text-cream/30 text-sm font-light leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-8 font-body text-cream/15 text-sm font-light italic"
        >
          Às 08h você já tá livre — com o domingo inteiro pela frente.
        </motion.p>
      </div>
    </section>
  )
}
