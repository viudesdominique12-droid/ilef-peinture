import { Link } from 'react-router-dom'
import AnimatedSection from './AnimatedSection'

export default function Footer() {
  return (
    <footer className="pb-16 lg:pb-0">
      {/* CTA */}
      <div className="section-padding py-14 md:py-20 bg-dark-light text-center border-t border-gray-900">
        <AnimatedSection variant="fadeUp">
          <h2 className="heading-md mb-3">Vous avez un projet ?</h2>
          <p className="body-lg max-w-md mx-auto mb-6">Devis gratuit sous 48h. Accompagnement de A à Z.</p>
          <div className="flex flex-row gap-3 justify-center">
            <Link to="/contact" className="btn-primary">Demander un devis</Link>
            <a href="tel:0659797855" className="btn-outline">06 59 79 78 55</a>
          </div>
        </AnimatedSection>
      </div>

      {/* Footer */}
      <div className="section-padding py-10 bg-black border-t border-gray-900">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="col-span-2 lg:col-span-1">
            <img src="/images/logo/logo.jpg" alt="ILEF" className="h-12 w-auto rounded-md mb-3 opacity-80" />
            <p className="text-[11px] leading-relaxed text-gray-700">Artisan peintre à Angers depuis plus de 17 ans.</p>
          </div>
          <div>
            <h4 className="text-[11px] tracking-[0.2em] uppercase mb-4 font-sans font-medium text-gray-400">Pages</h4>
            <ul className="space-y-2">
              {[{ to: '/', l: 'Accueil' }, { to: '/nos-services', l: 'Services' }, { to: '/nos-realisations', l: 'Projets' }, { to: '/contact', l: 'Contact' }].map(p => (
                <li key={p.to}><Link to={p.to} className="text-[11px] text-gray-700 hover:text-bronze transition-colors">{p.l}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-[11px] tracking-[0.2em] uppercase mb-4 font-sans font-medium text-gray-400">Contact</h4>
            <ul className="space-y-2 text-[11px] text-gray-700">
              <li>7 Allée des mécaniciens, 49800 Trélazé</li>
              <li><a href="tel:0659797855" className="hover:text-bronze transition-colors">06 59 79 78 55</a></li>
              <li><a href="mailto:walidbenzina80@gmail.com" className="hover:text-bronze transition-colors">walidbenzina80@gmail.com</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-5 border-t border-gray-900/50 text-center">
          <p className="text-[10px] text-gray-700">© {new Date().getFullYear()} ILEF Déco & Peinture</p>
        </div>
      </div>
    </footer>
  )
}
