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

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? 'bg-cream/90 backdrop-blur-lg shadow-md shadow-ink/5' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-5 md:px-8 flex items-center justify-between h-14 md:h-16">
        <a href="#" className="flex items-center gap-2 min-h-[44px] items-center">
          <img src="/sneaker.png" alt="Seb's" className="h-7 sm:h-8 md:h-9 w-auto" />
          <span className="font-poster text-ink text-xl sm:text-2xl tracking-wide hidden sm:inline">
            SEB'S
          </span>
        </a>

        <div className="hidden md:flex items-center gap-6">
          {links.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="font-poster text-ink/40 hover:text-red text-base tracking-wider uppercase transition-colors duration-200 min-h-[44px] flex items-center"
            >
              {label}
            </a>
          ))}
          <a
            href="#vem-correr"
            className="px-5 py-2.5 bg-red text-white font-poster text-base tracking-wider uppercase hover:bg-red-light transition-colors duration-200 min-h-[44px] flex items-center"
          >
            Vem Correr
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-ink/50 hover:text-red transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
          aria-label="Menu"
        >
          {open ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-cream/98 backdrop-blur-xl overflow-hidden border-t border-ink/5"
          >
            <div className="px-5 py-6 flex flex-col gap-1">
              {links.map(({ href, label }) => (
                <a
                  key={href}
                  href={href}
                  onClick={() => setOpen(false)}
                  className="font-poster text-ink/50 active:text-red text-2xl tracking-wider uppercase transition-colors py-3 min-h-[48px] flex items-center"
                >
                  {label}
                </a>
              ))}
              <a
                href="#vem-correr"
                onClick={() => setOpen(false)}
                className="mt-3 text-center py-4 bg-red text-white font-poster text-xl tracking-wider uppercase active:bg-red-light min-h-[52px] flex items-center justify-center"
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
