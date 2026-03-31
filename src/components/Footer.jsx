import { Link } from 'react-router-dom'
import AnimatedSection from './AnimatedSection'

export default function Footer() {
  return (
    <footer className="bg-charcoal text-warm-white/70">
      {/* CTA Band */}
      <div className="section-padding py-16 md:py-20 bg-anthracite text-center">
        <AnimatedSection variant="fadeUp">
          <p className="label-text !text-terracotta-light mb-4">Votre projet commence ici</p>
          <h2 className="heading-md text-warm-white mb-6">
            Prêt à transformer votre intérieur ?
          </h2>
          <p className="body-lg !text-warm-white/60 max-w-xl mx-auto mb-8">
            Contactez-nous pour un devis gratuit et personnalisé. Notre équipe vous accompagne de A à Z.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-light">
              Demander un devis
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
              </svg>
            </Link>
            <a href="tel:0659797855" className="btn-outline !border-warm-white/30 !text-warm-white hover:!bg-warm-white/10">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              06 59 79 78 55
            </a>
          </div>
        </AnimatedSection>
      </div>

      {/* Footer content */}
      <div className="section-padding py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          <div className="lg:col-span-1">
            <img
              src="/images/logo/logo.jpg"
              alt="ILEF Déco"
              className="h-16 w-auto rounded-sm mb-4"
            />
            <p className="text-sm leading-relaxed text-warm-white/50">
              Artisan peintre et décorateur d'intérieur à Angers et alentours depuis plus de 17 ans.
            </p>
          </div>

          <div>
            <h4 className="text-warm-white text-sm tracking-widest uppercase mb-6">Services</h4>
            <ul className="space-y-3">
              <li><Link to="/peinture-interieur-et-revetement" className="text-sm hover:text-terracotta-light transition-colors">Peinture intérieure</Link></li>
              <li><Link to="/peinture-interieur-et-revetement" className="text-sm hover:text-terracotta-light transition-colors">Revêtement mural</Link></li>
              <li><Link to="/revetement-de-sol" className="text-sm hover:text-terracotta-light transition-colors">Revêtement de sol</Link></li>
              <li><Link to="/deroulement-du-chantier" className="text-sm hover:text-terracotta-light transition-colors">Déroulement du chantier</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-warm-white text-sm tracking-widest uppercase mb-6">Navigation</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="text-sm hover:text-terracotta-light transition-colors">Accueil</Link></li>
              <li><Link to="/nos-realisations" className="text-sm hover:text-terracotta-light transition-colors">Nos réalisations</Link></li>
              <li><Link to="/contact" className="text-sm hover:text-terracotta-light transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-warm-white text-sm tracking-widest uppercase mb-6">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <svg className="w-4 h-4 mt-0.5 text-terracotta-light shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                7 Allée des mécaniciens<br />49800 Trélazé
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-4 h-4 text-terracotta-light shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                <a href="tel:0659797855" className="hover:text-terracotta-light transition-colors">06 59 79 78 55</a>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-4 h-4 text-terracotta-light shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                <a href="mailto:walidbenzina80@gmail.com" className="hover:text-terracotta-light transition-colors">walidbenzina80@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-warm-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-warm-white/40">
            © {new Date().getFullYear()} ILEF Déco & Peinture — Tous droits réservés
          </p>
          <div className="flex gap-6 text-xs text-warm-white/40">
            <span>Mentions légales</span>
            <span>Politique de confidentialité</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
