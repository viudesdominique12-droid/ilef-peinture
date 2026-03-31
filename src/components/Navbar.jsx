import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const navLinks = [
  { path: '/', label: 'Accueil' },
  { path: '/peinture-interieur-et-revetement', label: 'Art' },
  { path: '/deroulement-du-chantier', label: 'Chantier' },
  { path: '/nos-realisations', label: 'Projets' },
  { path: '/contact', label: 'Contact' },
]

const mobileNavLinks = [
  ...navLinks,
  { path: '/revetement-de-sol', label: 'Revêtement de sol' },
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
      {/* Top bar — logo + phone (desktop) / logo + burger (mobile) */}
      <header
        className={`nav-enter fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-warm-white/95 backdrop-blur-md shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="section-padding flex items-center justify-between h-20 lg:h-24">
          <Link to="/" className="relative z-50">
            <img
              src="/images/logo/logo.jpg"
              alt="ILEF Déco"
              className="h-12 lg:h-14 w-auto rounded-sm"
            />
          </Link>

          {/* Desktop phone */}
          <a href="tel:0659797855" className="hidden lg:flex btn-primary text-xs py-3 px-6 whitespace-nowrap">
            06 59 79 78 55
          </a>

          {/* Mobile burger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="relative z-50 lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5"
            aria-label="Menu"
          >
            <span className={`block w-6 h-px transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-[3.5px] bg-warm-white' : 'bg-anthracite'}`} />
            <span className={`block w-6 h-px transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-[3.5px] bg-warm-white' : 'bg-anthracite'}`} />
          </button>
        </div>
      </header>

      {/* Bottom floating nav — desktop only */}
      <nav className="hidden lg:block fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
        <div className="flex items-center bg-anthracite/95 backdrop-blur-xl rounded-full px-2 py-2 shadow-[0_8px_40px_rgba(0,0,0,0.25)]">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`relative px-6 py-2.5 text-[13px] tracking-wide uppercase font-medium rounded-full transition-all duration-300 whitespace-nowrap ${
                  isActive
                    ? 'bg-ivory text-anthracite'
                    : 'text-warm-white/70 hover:text-warm-white'
                }`}
              >
                {link.label}
              </Link>
            )
          })}
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {isOpen && (
        <div className="mobile-menu-enter fixed inset-0 z-40 bg-anthracite">
          <div className="flex flex-col items-center justify-center h-full gap-8">
            {mobileNavLinks.map((link, i) => (
              <div
                key={link.path}
                className="mobile-menu-link"
                style={{ animationDelay: `${0.15 + i * 0.06}s` }}
              >
                <Link
                  to={link.path}
                  className={`font-serif text-2xl transition-colors ${
                    location.pathname === link.path
                      ? 'text-terracotta'
                      : 'text-warm-white/80 hover:text-terracotta'
                  }`}
                >
                  {link.label}
                </Link>
              </div>
            ))}
            <div className="mobile-menu-link mt-4" style={{ animationDelay: '0.5s' }}>
              <a href="tel:0659797855" className="btn-light text-xs">
                06 59 79 78 55
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
