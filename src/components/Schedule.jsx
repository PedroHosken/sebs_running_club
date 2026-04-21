import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const steps = [
  { time: '06:15', title: 'Chegada', desc: 'Encontro no ponto. Aquecimento e bom dia.', icon: '📍', color: 'bg-red' },
  { time: '06:30', title: 'Largada', desc: 'Corrida coletiva — pace livre ou social.', icon: '🏃', color: 'bg-blue' },
  { time: '07:15', title: 'Volta', desc: 'Alongamento e aquele papo pós-corrida.', icon: '🙌', color: 'bg-gold' },
  { time: '07:30', title: 'Café', desc: 'Brunch no parceiro da semana. Sagrado.', icon: '☕', color: 'bg-ink' },
]

export default function Schedule() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="ritual" className="relative py-20 md:py-28 px-5 md:px-8 bg-ink overflow-hidden">
      {/* Texture */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 300 300%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23n)%22/%3E%3C/svg%3E')] bg-repeat pointer-events-none" />

      <div ref={ref} className="relative z-10 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="inline-block font-heading text-gold/50 text-xs font-bold tracking-[0.4em] uppercase mb-5">
            Todo Domingo
          </span>
          <h2 className="font-heading text-white text-3xl sm:text-4xl md:text-5xl font-black leading-tight">
            O Ritual
            <span className="font-serif text-gold italic font-normal"> de domingo</span>
          </h2>
          <p className="font-body text-white/30 text-sm sm:text-base mt-3 font-light">
            Lagoa Seca & Belvedere &nbsp;·&nbsp; Simples e direto.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((step, i) => (
            <motion.div
              key={step.time}
              initial={{ opacity: 0, y: 25 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
              className="bg-white/[0.04] backdrop-blur-sm border border-white/[0.06] rounded-2xl p-5 md:p-6 text-center hover:bg-white/[0.07] transition-colors duration-300"
            >
              <div className="text-3xl mb-3">{step.icon}</div>
              <div className={`inline-block ${step.color} text-white text-xs font-heading font-bold tracking-wider uppercase px-3 py-1 rounded-full mb-3`}>
                {step.time}
              </div>
              <h3 className="font-heading text-white text-lg font-bold mb-1.5">
                {step.title}
              </h3>
              <p className="font-body text-white/35 text-sm font-light leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-8 font-body text-white/20 text-sm font-light italic"
        >
          Às 08h você já tá livre — com o domingo inteiro pela frente.
        </motion.p>
      </div>
    </section>
  )
}
