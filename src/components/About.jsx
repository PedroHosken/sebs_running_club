import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FiUsers, FiStar, FiSunrise } from 'react-icons/fi'

const pillars = [
  {
    icon: FiUsers,
    title: 'Comunidade',
    text: 'Um espaço de pertencimento para jovens de BH que buscam mais do que um treino — querem fazer parte de algo com personalidade.',
  },
  {
    icon: FiStar,
    title: 'Estética',
    text: 'Identidade visual forte inspirada no jazz retrô dos anos 40-50. Art déco aplicado ao movimento. Cada detalhe é intencional.',
  },
  {
    icon: FiSunrise,
    title: 'Ritual',
    text: 'Corrida matinal, alongamento coletivo e café pós-corrida. A previsibilidade cria ritual — e ritual cria fidelidade.',
  },
]

function FadeIn({ children, delay = 0, className = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default function About() {
  return (
    <section id="sobre" className="relative py-24 md:py-32 px-6">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy via-navy-dark to-navy pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Section header */}
        <FadeIn className="text-center mb-16 md:mb-20">
          <div className="deco-line mb-6">
            <span className="text-gold text-xs tracking-[0.4em] uppercase font-accent">
              ✦
            </span>
          </div>
          <h2 className="font-display text-ivory text-4xl md:text-5xl mb-6">
            O Clube
          </h2>
          <p className="font-accent text-ivory-muted text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            O Seb's Running Club é um clube de corrida matinal em Belo Horizonte,
            inspirado na estética retrô do{' '}
            <span className="text-gold italic">Seb's Jazz Club</span> do filme
            La La Land.
          </p>
        </FadeIn>

        {/* Pillars grid */}
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {pillars.map((pillar, i) => (
            <FadeIn key={pillar.title} delay={i * 0.15}>
              <div className="text-center group">
                <div className="w-16 h-16 mx-auto mb-6 border border-gold/30 flex items-center justify-center group-hover:border-gold/60 group-hover:bg-gold/5 transition-all duration-500">
                  <pillar.icon className="text-gold text-2xl" />
                </div>
                <h3 className="font-display text-ivory text-xl mb-3 tracking-wide">
                  {pillar.title}
                </h3>
                <p className="font-body text-ivory-muted/80 text-sm leading-relaxed">
                  {pillar.text}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Bottom quote */}
        <FadeIn delay={0.3} className="mt-20 text-center">
          <div className="inline-block border-t border-b border-gold/20 py-6 px-8">
            <p className="font-accent text-ivory-muted italic text-lg md:text-xl">
              "Não é mais um grupo de corrida — é um clube com{' '}
              <span className="text-gold">cultura</span>."
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
