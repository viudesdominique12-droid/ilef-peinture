import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const navLinks = [
  { path: '/', label: 'Accueil' },
  { path: '/nos-services', label: 'Services' },
  { path: '/nos-realisations', label: 'Projets' },
  { path: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
    window.scrollTo(0, 0)
  }, [location])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  return (
    <>
      {/* Top bar — logo + phone */}
      <header className={`nav-enter fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-warm-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}>
        <div className="section-padding flex items-center justify-between h-20 lg:h-24">
          <Link to="/" className="relative z-50">
            <img src="/images/logo/logo.jpg" alt="ILEF Déco" className="h-12 lg:h-14 w-auto rounded-sm" />
          </Link>
          <a href="tel:0659797855" className="hidden lg:flex btn-primary text-xs py-3 px-6 whitespace-nowrap">
            06 59 79 78 55
          </a>
          {/* Mobile burger */}
          <button onClick={() => setIsOpen(!isOpen)} className="relative z-50 lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5" aria-label="Menu">
            <span className={`block w-6 h-px transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-[3.5px] bg-warm-white' : 'bg-anthracite'}`} />
            <span className={`block w-6 h-px transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-[3.5px] bg-warm-white' : 'bg-anthracite'}`} />
          </button>
        </div>
      </header>

      {/* Bottom nav — desktop */}
      <nav className="hidden lg:block fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
        <div className="flex items-center bg-anthracite/95 backdrop-blur-xl rounded-full px-2 py-2 shadow-[0_8px_40px_rgba(0,0,0,0.25)]">
          {navLinks.map((link) => (
            <Link key={link.path} to={link.path}
              className={`px-6 py-2.5 text-[13px] tracking-wide uppercase font-medium rounded-full transition-all duration-300 whitespace-nowrap ${
                location.pathname === link.path ? 'bg-ivory text-anthracite' : 'text-warm-white/70 hover:text-warm-white'
              }`}>
              {link.label}
            </Link>
          ))}
        </div>
      </nav>

      {/* Bottom sticky bar — mobile only */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-anthracite/95 backdrop-blur-xl border-t border-warm-white/10 px-4 py-2.5 flex gap-2">
        <a href="tel:0659797855" className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-warm-white/10 rounded-sm text-warm-white text-xs tracking-widest uppercase">
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg>
          Appeler
        </a>
        <Link to="/contact" className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-terracotta rounded-sm text-warm-white text-xs tracking-widest uppercase">
          Devis gratuit
        </Link>
      </div>

      {/* Mobile menu overlay */}
      {isOpen && (
        <div className="mobile-menu-enter fixed inset-0 z-40 bg-anthracite flex flex-col items-center justify-center gap-8">
          {navLinks.map((link, i) => (
            <div key={link.path} className="mobile-menu-link" style={{ animationDelay: `${0.15 + i * 0.06}s` }}>
              <Link to={link.path} className={`font-serif text-2xl transition-colors ${
                location.pathname === link.path ? 'text-terracotta' : 'text-warm-white/80 hover:text-terracotta'
              }`}>{link.label}</Link>
            </div>
          ))}
          <div className="mobile-menu-link mt-4" style={{ animationDelay: '0.5s' }}>
            <a href="tel:0659797855" className="btn-light text-xs">06 59 79 78 55</a>
          </div>
        </div>
      )}
    </>
  )
}
