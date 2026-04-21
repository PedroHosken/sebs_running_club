import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { FiMapPin, FiSun, FiTrendingUp } from 'react-icons/fi'

const routes = [
  {
    name: 'Belvedere',
    features: [
      { icon: FiSun, text: 'Ruas tranquilas e arborizadas' },
      { icon: FiMapPin, text: 'Pouco tráfego pela manhã' },
      { icon: FiTrendingUp, text: 'Cafés e padarias para o pós-corrida' },
    ],
    description:
      'Perfil socioeconômico alinhado ao público-alvo. Infraestrutura ideal para corrida matinal com boa densidade de opções para o ritual do café.',
  },
  {
    name: 'Lagoa Seca',
    features: [
      { icon: FiSun, text: 'Percurso natural e visualmente marcante' },
      { icon: FiMapPin, text: 'Distâncias flexíveis — 5km a 12km' },
      { icon: FiTrendingUp, text: 'Diferentes níveis de dificuldade' },
    ],
    description:
      'Permite saídas para todos os níveis. O cenário natural torna cada corrida uma experiência diferente da anterior.',
  },
]

export default function Routes() {
  const sectionRef = useRef(null)
  const inView = useInView(sectionRef, { once: true, margin: '-100px' })

  return (
    <section id="rotas" className="relative py-24 md:py-32 px-6">
      <div className="absolute inset-0 bg-gradient-to-b from-navy to-navy-dark pointer-events-none" />

      <div ref={sectionRef} className="relative z-10 max-w-5xl mx-auto">
        <motion.div
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
            Nossas Rotas
          </h2>
          <p className="font-accent text-ivory-muted text-lg max-w-xl mx-auto">
            Duas das áreas mais privilegiadas para corrida matinal em BH.
            Rotação semanal para manter a variedade.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {routes.map((route, i) => (
            <motion.div
              key={route.name}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.2 }}
              className="group relative border border-gold/15 bg-navy-light/30 hover:border-gold/30 transition-all duration-500 overflow-hidden"
            >
              {/* Gold corner accents */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-gold/40" />
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-gold/40" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-gold/40" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-gold/40" />

              <div className="p-8 md:p-10">
                <div className="flex items-center gap-3 mb-6">
                  <FiMapPin className="text-gold text-xl" />
                  <h3 className="font-display text-ivory text-2xl md:text-3xl">
                    {route.name}
                  </h3>
                </div>

                <div className="space-y-4 mb-6">
                  {route.features.map((feat, j) => (
                    <div key={j} className="flex items-center gap-3">
                      <feat.icon className="text-gold/60 text-sm shrink-0" />
                      <span className="font-body text-ivory-muted/80 text-sm">
                        {feat.text}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="border-t border-gold/10 pt-5">
                  <p className="font-accent text-ivory-muted/60 text-sm leading-relaxed italic">
                    {route.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
