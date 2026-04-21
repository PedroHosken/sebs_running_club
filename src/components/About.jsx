import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="sobre" className="relative py-20 md:py-28 px-5 md:px-8 bg-kraft-light kraft-bg">
      <div ref={ref} className="relative z-10 max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="inline-block font-heading text-warm text-xs font-bold tracking-[0.4em] uppercase mb-5">
            O Clube
          </span>

          <h2 className="font-heading text-ink text-3xl sm:text-4xl md:text-5xl font-black leading-tight mb-8">
            Não é só sobre
            <span className="text-red"> correr.</span><br />
            É sobre com <span className="font-serif text-gold italic font-normal">quem</span> você corre.
          </h2>

          <p className="font-body text-ink-light text-base sm:text-lg max-w-xl mx-auto leading-relaxed mb-6 font-light">
            O Seb's nasceu pra ser o ponto de encontro dos jovens de BH que querem
            começar o domingo com energia, gente boa e um café depois da corrida.
          </p>

          <p className="font-body text-warm text-base max-w-xl mx-auto leading-relaxed font-light">
            A gente acredita que um clube de corrida pode ter personalidade — com
            identidade visual forte, cultura própria e uma vibe que vai além do treino.
          </p>
        </motion.div>

        {/* Three pillars */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-14 md:mt-16 grid grid-cols-3 gap-3 md:gap-6 max-w-md mx-auto"
        >
          {[
            { label: 'Corrida', color: 'text-red', bg: 'bg-red/8', border: 'border-red/15' },
            { label: 'Café', color: 'text-gold', bg: 'bg-gold/8', border: 'border-gold/15' },
            { label: 'Crew', color: 'text-ink', bg: 'bg-ink/5', border: 'border-ink/10' },
          ].map((item) => (
            <div key={item.label} className="text-center">
              <div className={`w-16 h-16 md:w-20 md:h-20 mx-auto mb-3 ${item.bg} border ${item.border} rounded-2xl flex items-center justify-center transition-transform duration-300 hover:scale-105`}>
                <span className={`font-heading ${item.color} text-2xl md:text-3xl font-black`}>
                  {item.label[0]}
                </span>
              </div>
              <span className={`font-heading ${item.color} text-xs md:text-sm font-bold tracking-wider uppercase`}>
                {item.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
