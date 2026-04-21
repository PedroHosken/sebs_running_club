import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const timeline = [
  {
    time: '05:45',
    title: 'Concentração',
    desc: 'Encontro no ponto da semana. 15 minutos de tolerância para todo mundo chegar.',
  },
  {
    time: '06:00',
    title: 'Largada',
    desc: 'Corrida coletiva. Dois grupos: pace social (~6:30/km) e pace livre.',
  },
  {
    time: '06:45',
    title: 'Alongamento',
    desc: 'Retorno e alongamento coletivo de 5 a 10 minutos juntos.',
  },
  {
    time: '07:00',
    title: 'Café & Brunch',
    desc: 'Café no estabelecimento parceiro da semana. O ritual pós-corrida.',
  },
  {
    time: '08:00',
    title: 'Encerramento',
    desc: 'Cada um segue seu dia com a manhã inteira pela frente.',
  },
]

function TimelineItem({ item, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
      className="relative flex items-start gap-6 md:gap-8"
    >
      {/* Time badge */}
      <div className="shrink-0 w-20 md:w-24 text-right">
        <span className="font-display text-gold text-2xl md:text-3xl font-semibold">
          {item.time}
        </span>
      </div>

      {/* Line connector */}
      <div className="relative flex flex-col items-center shrink-0">
        <div className="w-3 h-3 border-2 border-gold bg-navy-dark rounded-full z-10" />
        {index < timeline.length - 1 && (
          <div className="w-px flex-1 bg-gradient-to-b from-gold/40 to-gold/10 min-h-16" />
        )}
      </div>

      {/* Content */}
      <div className="pb-10 md:pb-12">
        <h3 className="font-display text-ivory text-lg md:text-xl mb-1">
          {item.title}
        </h3>
        <p className="font-body text-ivory-muted/70 text-sm md:text-base leading-relaxed max-w-sm">
          {item.desc}
        </p>
      </div>
    </motion.div>
  )
}

export default function Schedule() {
  const sectionRef = useRef(null)
  const inView = useInView(sectionRef, { once: true, margin: '-100px' })

  return (
    <section id="formato" className="relative py-24 md:py-32 px-6">
      <div className="absolute inset-0 bg-navy-medium pointer-events-none" />

      {/* Decorative pattern */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      <div className="relative z-10 max-w-3xl mx-auto">
        <motion.div
          ref={sectionRef}
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
            Formato
          </h2>
          <p className="font-accent text-ivory-muted text-lg">
            Cada saída segue um ritual fixo. Simples, previsível e poderoso.
          </p>
          <p className="font-accent text-gold/60 text-base mt-2 tracking-wide">
            Sábados · Frequência semanal
          </p>
        </motion.div>

        <div className="flex flex-col">
          {timeline.map((item, i) => (
            <TimelineItem key={item.time} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
