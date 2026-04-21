import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenuAlt3, HiX } from 'react-icons/hi'

const links = [
  { href: '#sobre', label: 'O Clube' },
  { href: '#ritual', label: 'O Ritual' },
  { href: '#crew', label: 'A Crew' },
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
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? 'bg-cream/90 backdrop-blur-lg shadow-md shadow-ink/5' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 md:px-8 flex items-center justify-between h-14 md:h-16">
        <a href="#" className="flex items-center gap-2">
          <img src="/sneaker.png" alt="Seb's" className="h-8 md:h-9 w-auto" />
          <span className="font-poster text-ink text-2xl tracking-wide hidden sm:inline">
            SEB'S
          </span>
        </a>

        <div className="hidden md:flex items-center gap-6">
          {links.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="font-poster text-ink/40 hover:text-red text-base tracking-wider uppercase transition-colors duration-200"
            >
              {label}
            </a>
          ))}
          <a
            href="#vem-correr"
            className="px-5 py-2 bg-red text-white font-poster text-base tracking-wider uppercase hover:bg-red-light transition-colors duration-200"
          >
            Vem Correr
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-ink/50 hover:text-red transition-colors"
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
            className="md:hidden bg-cream/98 backdrop-blur-xl overflow-hidden"
          >
            <div className="px-5 py-5 flex flex-col gap-3">
              {links.map(({ href, label }) => (
                <a
                  key={href}
                  href={href}
                  onClick={() => setOpen(false)}
                  className="font-poster text-ink/50 hover:text-red text-xl tracking-wider uppercase transition-colors py-1"
                >
                  {label}
                </a>
              ))}
              <a
                href="#vem-correr"
                onClick={() => setOpen(false)}
                className="mt-2 text-center py-3 bg-red text-white font-poster text-lg tracking-wider uppercase"
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
