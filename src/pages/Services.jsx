import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import PageTransition from '../components/PageTransition'
import RevealImage from '../components/RevealImage'
import AnimatedSection, { StaggerContainer, StaggerItem } from '../components/AnimatedSection'

export default function Services() {
  const { hash } = useLocation()
  useEffect(() => {
    if (hash) setTimeout(() => document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100)
  }, [hash])

  return (
    <PageTransition>
      {/* Hero */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/peinture/peinture-murale-hero.jpg" alt="Nos services" className="w-full h-full object-cover img-bw img-color opacity-30" />
        </div>
        <div className="relative section-padding max-w-4xl">
          <p className="hero-animate hero-animate-1 label-text mb-3">Nos services</p>
          <h1 className="hero-animate hero-animate-2 heading-xl mb-4">
            Des prestations complètes pour votre <span className="italic text-bronze">intérieur</span>
          </h1>
          <p className="hero-animate hero-animate-3 body-lg max-w-xl">
            Peinture, revêtements muraux et de sol — nous prenons en charge l'ensemble de vos travaux avec soin.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 glow-line" />
      </section>

      {/* Nav rapide */}
      <nav className="section-padding py-4 bg-dark sticky top-20 lg:top-24 z-30 border-b border-gray-900">
        <div className="flex gap-2 justify-center">
          {[{ a: '#peinture', l: 'Peinture' }, { a: '#revetement-mural', l: 'Murs' }, { a: '#sol', l: 'Sol' }].map(n => (
            <a key={n.a} href={n.a} onClick={(e) => { e.preventDefault(); document.querySelector(n.a)?.scrollIntoView({ behavior: 'smooth', block: 'start' }) }}
              className="px-4 py-2 text-[10px] md:text-[11px] tracking-[0.2em] uppercase text-gray-500 hover:text-bronze rounded-full hover:bg-dark-light transition-all">
              {n.l}
            </a>
          ))}
        </div>
      </nav>

      {/* PEINTURE */}
      <section id="peinture" className="section-padding section-spacing scroll-mt-32">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          <AnimatedSection variant="fadeLeft">
            <p className="label-text mb-3">Peinture intérieure</p>
            <h2 className="heading-lg mb-4">Donnez vie à chaque pièce</h2>
            <p className="body-lg mb-3">
              Que vous souhaitiez rafraîchir une pièce ou lui offrir une ambiance unique, notre équipe prend en charge tous vos travaux — murs, plafonds, finitions décoratives.
            </p>
            <p className="body-lg mb-5">
              Plusieurs couches appliquées pour une couleur profonde et durable. Peinture traditionnelle ou décorative avec motifs et contrastes sur mesure.
            </p>
            <div className="flex flex-wrap gap-2">
              {['Murs', 'Plafonds', 'Décorative', 'Motifs', 'Fissures', 'Glycéro', 'Satinée', 'Mate'].map(t => (
                <span key={t} className="px-3 py-1.5 bg-dark-light border border-gray-900 rounded-full text-[10px] tracking-wider text-gray-400">{t}</span>
              ))}
            </div>
          </AnimatedSection>
          <AnimatedSection variant="fadeRight" delay={0.15}>
            <div className="grid grid-cols-2 gap-3">
              <RevealImage src="/images/peinture/plafond-fini.jpg" alt="Plafond" aspect="aspect-[3/4]" />
              <div className="mt-6">
                <RevealImage src="/images/peinture/peinture-decorative.jpg" alt="Décorative" aspect="aspect-[3/4]" />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <div className="section-padding"><div className="glow-line" /></div>

      {/* REVÊTEMENT MURAL */}
      <section id="revetement-mural" className="section-padding section-spacing scroll-mt-32">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          <AnimatedSection variant="fadeLeft" className="lg:order-2">
            <p className="label-text mb-3">Revêtement mural</p>
            <h2 className="heading-lg mb-4">L'art de l'habillage mural</h2>
            <p className="body-lg mb-3">
              Papier peint, toile de verre texturée, revêtement souple — confier la pose à ILEF Peinture, c'est la garantie d'un résultat impeccable et durable.
            </p>
            <p className="body-lg mb-5">
              17 ans d'expertise en revêtement mural pour un résultat à la hauteur de vos attentes.
            </p>
            <div className="flex flex-wrap gap-2">
              {['Papier peint', 'Toile de verre', 'Vinyle', 'Décoration murale'].map(t => (
                <span key={t} className="px-3 py-1.5 bg-dark-light border border-gray-900 rounded-full text-[10px] tracking-wider text-gray-400">{t}</span>
              ))}
            </div>
          </AnimatedSection>
          <AnimatedSection variant="fadeRight" delay={0.15} className="lg:order-1">
            <StaggerContainer className="grid grid-cols-3 gap-2" staggerDelay={0.06}>
              {['/images/revetement-muraux/papier-peint-1.jpg', '/images/revetement-muraux/revetement-mur-1.jpg', '/images/revetement-muraux/revetement-mur-12.jpg', '/images/revetement-muraux/revetement-mur-2.jpg', '/images/revetement-muraux/revetement-mur-6.jpg', '/images/revetement-muraux/revetement-mur-8.jpg'].map((src, i) => (
                <StaggerItem key={i}>
                  <RevealImage src={src} alt="Revêtement mural" aspect="aspect-square" />
                </StaggerItem>
              ))}
            </StaggerContainer>
          </AnimatedSection>
        </div>
      </section>

      <div className="section-padding"><div className="glow-line" /></div>

      {/* SOL */}
      <section id="sol" className="section-padding section-spacing scroll-mt-32">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center mb-12">
            <AnimatedSection variant="fadeLeft">
              <p className="label-text mb-3">Revêtement de sol</p>
              <h2 className="heading-lg mb-4">Le sol définit l'ambiance</h2>
              <p className="body-lg mb-3">
                ILEF Peinture vous accompagne dans le choix du matériau idéal selon vos souhaits, la fréquence de passage et votre budget.
              </p>
              <p className="body-lg">
                Parquet, moquette, lino, PVC, béton ciré — pose soignée sur support préparé pour un rendu durable.
              </p>
            </AnimatedSection>
            <AnimatedSection variant="fadeRight" delay={0.15}>
              <RevealImage src="/images/sol/revetement-lino.jpg" alt="Sol" aspect="aspect-[4/3]" />
            </AnimatedSection>
          </div>
          <StaggerContainer className="grid md:grid-cols-3 gap-3" staggerDelay={0.1}>
            {[
              { title: 'Parquet & bois', desc: 'Contrecollé, stratifié, massif — aspect naturel et résistance.', image: '/images/sol/pose-parquet.jpg' },
              { title: 'Moquette & tissu', desc: 'Confort thermique et acoustique incomparable.', image: '/images/sol/pose-moquette.jpg' },
              { title: 'Lino & souple', desc: 'Prix abordable, entretien facile, grande variété.', image: '/images/sol/pose-lino.jpg' },
            ].map((s, i) => (
              <StaggerItem key={i}>
                <RevealImage src={s.image} alt={s.title} aspect="aspect-[4/3]" className="mb-3" />
                <h3 className="font-serif text-base text-white mb-1">{s.title}</h3>
                <p className="text-[11px] text-gray-500 leading-relaxed">{s.desc}</p>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding py-14 md:py-20 bg-dark-light text-center border-t border-gray-900">
        <AnimatedSection>
          <h2 className="heading-md mb-3">Un projet en tête ?</h2>
          <p className="body-lg max-w-md mx-auto mb-6">Devis gratuit sous 48h. Intervention rapide.</p>
          <div className="flex flex-row gap-3 justify-center">
            <Link to="/contact" className="btn-primary">Demander un devis</Link>
            <a href="tel:0659797855" className="btn-outline">06 59 79 78 55</a>
          </div>
        </AnimatedSection>
      </section>
    </PageTransition>
  )
}
