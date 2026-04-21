import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenuAlt3, HiX } from 'react-icons/hi'

const links = [
  { href: '#sobre', label: 'Sobre' },
  { href: '#ritual', label: 'O Ritual' },
  { href: '#comunidade', label: 'Comunidade' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-400 ${
        scrolled ? 'bg-paper/90 backdrop-blur-lg shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 md:px-8 flex items-center justify-between h-16 md:h-[72px]">
        <a href="#" className="flex items-center gap-2.5 group">
          <img src="/sneaker.png" alt="Seb's" className="h-9 md:h-10 w-auto" />
          <span className="font-serif text-ink text-xl md:text-2xl italic hidden sm:inline">
            Seb's
          </span>
        </a>

        <div className="hidden md:flex items-center gap-7">
          {links.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="font-body text-ink/50 hover:text-red font-medium text-[15px] tracking-wide transition-colors duration-200"
            >
              {label}
            </a>
          ))}
          <a
            href="#vem-correr"
            className="px-5 py-2.5 bg-red text-white font-heading font-bold text-sm tracking-wider uppercase rounded-full hover:bg-red-light transition-colors duration-200"
          >
            Vem Correr
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-ink/50 hover:text-red transition-colors p-1"
          aria-label="Menu"
        >
          {open ? <HiX size={26} /> : <HiMenuAlt3 size={26} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-paper/98 backdrop-blur-xl border-t border-ink/5 overflow-hidden"
          >
            <div className="px-5 py-5 flex flex-col gap-3">
              {links.map(({ href, label }) => (
                <a
                  key={href}
                  href={href}
                  onClick={() => setOpen(false)}
                  className="font-body text-ink/50 hover:text-red text-lg font-medium transition-colors py-1"
                >
                  {label}
                </a>
              ))}
              <a
                href="#vem-correr"
                onClick={() => setOpen(false)}
                className="mt-2 text-center px-5 py-3 bg-red text-white font-heading font-bold text-sm tracking-wider uppercase rounded-full"
              >
                Vem Correr
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
