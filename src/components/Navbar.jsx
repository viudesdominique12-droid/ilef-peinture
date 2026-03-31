import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const navLinks = [
  { path: '/deroulement-du-chantier', label: 'Chantier' },
  { path: '/peinture-interieur-et-revetement', label: 'Peinture & Revêtement' },
  { path: '/revetement-de-sol', label: 'Revêtement de sol' },
  { path: '/nos-realisations', label: 'Réalisations' },
  { path: '/contact', label: 'Contact' },
]

const mobileNavLinks = [
  { path: '/', label: 'Accueil' },
  ...navLinks,
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
      <header
        className={`nav-enter fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-warm-white/95 backdrop-blur-md shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <nav className="section-padding flex items-center justify-between h-20 lg:h-24">
          <Link to="/" className="relative z-50 flex items-center gap-3">
            <img
              src="/images/logo/logo.jpg"
              alt="ILEF Déco"
              className="h-12 lg:h-14 w-auto rounded-sm"
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative text-[13px] tracking-wide uppercase font-medium transition-colors duration-300 group ${
                  location.pathname === link.path
                    ? 'text-terracotta'
                    : 'text-anthracite hover:text-terracotta'
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 h-px bg-terracotta transition-all duration-300 ${
                    location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </Link>
            ))}
            <a href="tel:0659797855" className="btn-primary text-xs py-3 px-6 whitespace-nowrap">
              06 59 79 78 55
            </a>
          </div>

          {/* Mobile burger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="relative z-50 lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5"
            aria-label="Menu"
          >
            <span
              className={`block w-6 h-px transition-all duration-300 ${
                isOpen ? 'rotate-45 translate-y-[3.5px] bg-warm-white' : 'bg-anthracite'
              }`}
            />
            <span
              className={`block w-6 h-px transition-all duration-300 ${
                isOpen ? '-rotate-45 -translate-y-[3.5px] bg-warm-white' : 'bg-anthracite'
              }`}
            />
          </button>
        </nav>
      </header>

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
