import { Link } from 'react-router-dom'
import AnimatedSection from './AnimatedSection'

export default function Footer() {
  return (
    <footer className="pb-16 lg:pb-0">
      {/* CTA coloré */}
      <div className="rainbow-line" />
      <div className="section-padding py-14 md:py-20 bg-dark text-center">
        <AnimatedSection variant="fadeUp">
          <h2 className="heading-md !text-white mb-3">Vous avez un projet ?</h2>
          <p className="text-sm text-white/50 max-w-md mx-auto mb-6">Devis gratuit sous 48h. Accompagnement de A à Z.</p>
          <div className="flex flex-row gap-3 justify-center">
            <Link to="/contact" className="btn-primary">Demander un devis</Link>
            <a href="tel:0659797855" className="inline-flex items-center gap-2 px-6 py-3 border-2 border-white/30 text-white text-[11px] tracking-widest uppercase font-medium rounded-full hover:bg-white/10 transition-all cursor-pointer">06 59 79 78 55</a>
          </div>
        </AnimatedSection>
      </div>

      {/* Footer */}
      <div className="section-padding py-10 bg-gray-800 text-white/50">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="col-span-2 lg:col-span-1">
            <img src="/images/logo/logo.jpg" alt="ILEF" className="h-12 w-auto rounded-md mb-3" />
            <p className="text-[11px] leading-relaxed">Artisan peintre à Angers depuis plus de 17 ans.</p>
          </div>
          <div>
            <h4 className="text-[11px] tracking-[0.2em] uppercase mb-4 font-sans font-medium text-white/70">Pages</h4>
            <ul className="space-y-2">
              {[{ to: '/', l: 'Accueil' }, { to: '/nos-services', l: 'Services' }, { to: '/nos-realisations', l: 'Projets' }, { to: '/contact', l: 'Contact' }].map(p => (
                <li key={p.to}><Link to={p.to} className="text-[11px] hover:text-rose transition-colors">{p.l}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-[11px] tracking-[0.2em] uppercase mb-4 font-sans font-medium text-white/70">Contact</h4>
            <ul className="space-y-2 text-[11px]">
              <li>7 Allée des mécaniciens, 49800 Trélazé</li>
              <li><a href="tel:0659797855" className="hover:text-rose transition-colors">06 59 79 78 55</a></li>
              <li><a href="mailto:walidbenzina80@gmail.com" className="hover:text-rose transition-colors">walidbenzina80@gmail.com</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-5 border-t border-white/10 text-center">
          <p className="text-[10px]">© {new Date().getFullYear()} ILEF Déco & Peinture</p>
        </div>
      </div>
    </footer>
  )
}
