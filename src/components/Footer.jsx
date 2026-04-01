import { Link } from 'react-router-dom'
import AnimatedSection from './AnimatedSection'

export default function Footer() {
  return (
    <footer className="bg-charcoal text-warm-white/70 pb-16 lg:pb-0">
      {/* CTA Band */}
      <div className="section-padding py-14 md:py-18 bg-anthracite text-center">
        <AnimatedSection variant="fadeUp">
          <h2 className="heading-md text-warm-white mb-3">Vous avez un projet ?</h2>
          <p className="text-sm text-warm-white/50 max-w-md mx-auto mb-6">
            Devis gratuit sous 48h. Accompagnement de A à Z.
          </p>
          <div className="flex flex-row gap-3 justify-center">
            <Link to="/contact" className="btn-light">Demander un devis</Link>
            <a href="tel:0659797855" className="btn-outline !border-warm-white/30 !text-warm-white hover:!bg-warm-white/10">
              06 59 79 78 55
            </a>
          </div>
        </AnimatedSection>
      </div>

      {/* Footer compact */}
      <div className="section-padding py-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="col-span-2 lg:col-span-1">
            <img src="/images/logo/logo.jpg" alt="ILEF Déco" className="h-14 w-auto rounded-sm mb-3" />
            <p className="text-xs leading-relaxed text-warm-white/40">
              Artisan peintre à Angers et alentours depuis plus de 17 ans.
            </p>
          </div>
          <div>
            <h4 className="text-warm-white text-[11px] tracking-widest uppercase mb-4 font-sans font-medium">Pages</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-xs hover:text-terracotta-light transition-colors">Accueil</Link></li>
              <li><Link to="/nos-services" className="text-xs hover:text-terracotta-light transition-colors">Nos services</Link></li>
              <li><Link to="/nos-realisations" className="text-xs hover:text-terracotta-light transition-colors">Nos projets</Link></li>
              <li><Link to="/contact" className="text-xs hover:text-terracotta-light transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-warm-white text-[11px] tracking-widest uppercase mb-4 font-sans font-medium">Contact</h4>
            <ul className="space-y-2 text-xs">
              <li>7 Allée des mécaniciens, 49800 Trélazé</li>
              <li><a href="tel:0659797855" className="hover:text-terracotta-light transition-colors">06 59 79 78 55</a></li>
              <li><a href="mailto:walidbenzina80@gmail.com" className="hover:text-terracotta-light transition-colors">walidbenzina80@gmail.com</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-warm-white/10 flex flex-col md:flex-row justify-between items-center gap-2">
          <p className="text-[10px] text-warm-white/30">© {new Date().getFullYear()} ILEF Déco & Peinture</p>
          <p className="text-[10px] text-warm-white/30">Mentions légales · Confidentialité</p>
        </div>
      </div>
    </footer>
  )
}
