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
    const h = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', h)
    return () => window.removeEventListener('scroll', h)
  }, [])

  useEffect(() => { setIsOpen(false); window.scrollTo(0, 0) }, [location])
  useEffect(() => { document.body.style.overflow = isOpen ? 'hidden' : ''; return () => { document.body.style.overflow = '' } }, [isOpen])

  return (
    <>
      <header className={`nav-enter fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-black/90 backdrop-blur-xl border-b border-gray-900/50' : 'bg-transparent'
      }`}>
        <div className="section-padding flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="relative z-50">
            <img src="/images/logo/logo.jpg" alt="ILEF" className="h-10 md:h-12 w-auto rounded-md" />
          </Link>
          <a href="tel:0659797855" className="hidden lg:flex btn-primary text-[10px] py-2.5 px-5">06 59 79 78 55</a>
          <button onClick={() => setIsOpen(!isOpen)} className="relative z-50 lg:hidden w-9 h-9 flex flex-col items-center justify-center gap-[5px]" aria-label="Menu">
            <span className={`block w-5 h-[1.5px] transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-[3.25px]' : ''} bg-gray-200`} />
            <span className={`block w-5 h-[1.5px] transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-[3.25px]' : ''} bg-gray-200`} />
          </button>
        </div>
      </header>

      {/* Desktop bottom nav */}
      <nav className="hidden lg:block fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
        <div className="flex items-center bg-dark-light/90 backdrop-blur-xl border border-gray-900 rounded-full px-1.5 py-1.5 shadow-[0_8px_40px_rgba(0,0,0,0.5)]">
          {navLinks.map((link) => (
            <Link key={link.path} to={link.path}
              className={`px-5 py-2 text-[12px] tracking-wide uppercase font-medium rounded-full transition-all duration-300 whitespace-nowrap ${
                location.pathname === link.path ? 'bg-bronze text-white' : 'text-gray-400 hover:text-white'
              }`}>
              {link.label}
            </Link>
          ))}
        </div>
      </nav>

      {/* Mobile sticky bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-dark/95 backdrop-blur-xl border-t border-gray-900 px-4 py-2.5 flex gap-2">
        <a href="tel:0659797855" className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-gray-900 rounded-full text-gray-200 text-[11px] tracking-widest uppercase">
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg>
          Appeler
        </a>
        <Link to="/contact" className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-bronze rounded-full text-black text-[11px] tracking-widest uppercase font-medium">
          Devis gratuit
        </Link>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="mobile-menu-enter fixed inset-0 z-40 bg-black flex flex-col items-center justify-center gap-7">
          {navLinks.map((link, i) => (
            <div key={link.path} className="mobile-menu-link" style={{ animationDelay: `${0.1 + i * 0.05}s` }}>
              <Link to={link.path} className={`font-serif text-2xl transition-colors ${
                location.pathname === link.path ? 'text-bronze' : 'text-gray-400 hover:text-bronze'
              }`}>{link.label}</Link>
            </div>
          ))}
          <div className="mobile-menu-link mt-3" style={{ animationDelay: '0.4s' }}>
            <a href="tel:0659797855" className="btn-primary text-[10px]">06 59 79 78 55</a>
          </div>
        </div>
      )}
    </>
  )
}
