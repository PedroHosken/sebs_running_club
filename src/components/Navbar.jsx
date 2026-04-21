import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenuAlt3, HiX } from 'react-icons/hi'

const links = [
  { href: '#sobre', label: 'O Clube' },
  { href: '#formato', label: 'Formato' },
  { href: '#rotas', label: 'Rotas' },
  { href: '#cultura', label: 'Cultura' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled
          ? 'bg-navy/95 backdrop-blur-md shadow-lg shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16 md:h-20">
        <a href="#" className="flex items-center gap-3 group">
          <img
            src="/logo.png"
            alt="Seb's Running Club"
            className="h-10 md:h-12 w-auto transition-transform duration-300 group-hover:scale-105"
          />
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="font-accent text-ivory/70 hover:text-gold transition-colors duration-300 text-lg tracking-wide"
            >
              {label}
            </a>
          ))}
          <a
            href="#junte-se"
            className="ml-2 px-5 py-2 border border-gold/60 text-gold font-accent text-lg tracking-widest uppercase hover:bg-gold hover:text-navy-dark transition-all duration-300"
          >
            Junte-se
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-ivory/80 hover:text-gold transition-colors"
          aria-label="Menu"
        >
          {mobileOpen ? <HiX size={28} /> : <HiMenuAlt3 size={28} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-navy-dark/98 backdrop-blur-lg border-t border-gold/10 overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {links.map(({ href, label }) => (
                <a
                  key={href}
                  href={href}
                  onClick={() => setMobileOpen(false)}
                  className="font-accent text-ivory/70 hover:text-gold text-xl tracking-wide transition-colors"
                >
                  {label}
                </a>
              ))}
              <a
                href="#junte-se"
                onClick={() => setMobileOpen(false)}
                className="mt-2 text-center px-5 py-3 border border-gold/60 text-gold font-accent text-lg tracking-widest uppercase hover:bg-gold hover:text-navy-dark transition-all duration-300"
              >
                Junte-se
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
