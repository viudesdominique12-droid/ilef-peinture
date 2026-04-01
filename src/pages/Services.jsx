import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import PageTransition from '../components/PageTransition'
import AnimatedSection, { StaggerContainer, StaggerItem } from '../components/AnimatedSection'

export default function Services() {
  const { hash } = useLocation()

  // Scroll to anchor on load
  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const el = document.querySelector(hash)
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 100)
    }
  }, [hash])

  return (
    <PageTransition>
      {/* Hero */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/peinture/peinture-murale-hero.jpg" alt="Nos services" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/85 via-charcoal/55 to-charcoal/20" />
        </div>
        <div className="relative section-padding max-w-4xl">
          <p className="hero-animate hero-animate-1 label-text !text-terracotta-light mb-3">Nos services</p>
          <h1 className="hero-animate hero-animate-2 heading-xl text-warm-white mb-4">
            Des prestations complètes pour votre <span className="italic text-terracotta-light">intérieur</span>
          </h1>
          <p className="hero-animate hero-animate-3 text-sm md:text-lg text-warm-white/60 max-w-xl leading-relaxed">
            Peinture, revêtements muraux et de sol — nous prenons en charge l'ensemble de vos travaux avec un soin particulier apporté aux finitions.
          </p>
        </div>
      </section>

      {/* Navigation rapide */}
      <section className="section-padding py-4 bg-ivory sticky top-20 lg:top-24 z-30 border-b border-beige/30">
        <div className="max-w-4xl mx-auto flex gap-2 justify-center">
          {[
            { anchor: '#peinture', label: 'Peinture' },
            { anchor: '#revetement-mural', label: 'Revêtement mural' },
            { anchor: '#sol', label: 'Sol' },
          ].map(a => (
            <a
              key={a.anchor}
              href={a.anchor}
              className="px-4 py-2 text-[10px] md:text-xs tracking-widest uppercase text-taupe hover:text-anthracite hover:bg-warm-white rounded-sm transition-all"
              onClick={(e) => {
                e.preventDefault()
                document.querySelector(a.anchor)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
              }}
            >
              {a.label}
            </a>
          ))}
        </div>
      </section>

      {/* ============ SECTION 1 : PEINTURE ============ */}
      <section id="peinture" className="section-padding section-spacing bg-warm-white scroll-mt-32">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
            <AnimatedSection variant="fadeLeft">
              <p className="label-text mb-3">Peinture intérieure</p>
              <h2 className="heading-lg mb-4">Donnez vie à chaque pièce</h2>
              <div className="divider-line mb-5" />
              <p className="body-lg mb-3">
                Que vous souhaitiez rafraîchir une pièce ou lui offrir une ambiance unique, notre équipe prend en charge tous vos travaux de peinture — murs, plafonds, finitions décoratives.
              </p>
              <p className="body-lg mb-5">
                Nous appliquons plusieurs couches pour une couleur profonde et durable. Peinture traditionnelle ou décorative avec motifs et contrastes sur mesure.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Murs', 'Plafonds', 'Décorative', 'Motifs', 'Fissures', 'Glycéro', 'Satinée', 'Mate'].map(t => (
                  <span key={t} className="px-3 py-1.5 bg-ivory rounded-sm text-[10px] md:text-xs tracking-wide text-taupe font-medium">{t}</span>
                ))}
              </div>
            </AnimatedSection>
            <AnimatedSection variant="fadeRight" delay={0.15}>
              <div className="grid grid-cols-2 gap-3">
                <div className="img-reveal rounded-sm overflow-hidden aspect-[3/4]">
                  <img src="/images/peinture/plafond-fini.jpg" alt="Peinture plafond" />
                </div>
                <div className="img-reveal rounded-sm overflow-hidden aspect-[3/4] mt-6">
                  <img src="/images/peinture/peinture-decorative.jpg" alt="Peinture décorative" />
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ============ SECTION 2 : REVÊTEMENT MURAL ============ */}
      <section id="revetement-mural" className="section-padding section-spacing bg-ivory scroll-mt-32">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
            <AnimatedSection variant="fadeLeft" className="lg:order-2">
              <p className="label-text mb-3">Revêtement mural</p>
              <h2 className="heading-lg mb-4">L'art de l'habillage mural</h2>
              <div className="divider-line mb-5" />
              <p className="body-lg mb-3">
                Papier peint uni ou à motif, toile de verre texturée, revêtement souple — confier la pose à ILEF Peinture, c'est la garantie d'un résultat impeccable et durable.
              </p>
              <p className="body-lg mb-5">
                Au fil de nos 17 ans d'expérience, nous avons développé une large expertise en revêtement mural pour un résultat à la hauteur de vos attentes.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Papier peint', 'Toile de verre', 'Vinyle', 'Décoration murale', 'Design'].map(t => (
                  <span key={t} className="px-3 py-1.5 bg-warm-white rounded-sm text-[10px] md:text-xs tracking-wide text-taupe font-medium">{t}</span>
                ))}
              </div>
            </AnimatedSection>
            <AnimatedSection variant="fadeRight" delay={0.15} className="lg:order-1">
              <StaggerContainer className="grid grid-cols-3 gap-2" staggerDelay={0.08}>
                {[
                  '/images/revetement-muraux/papier-peint-1.jpg',
                  '/images/revetement-muraux/revetement-mur-1.jpg',
                  '/images/revetement-muraux/revetement-mur-12.jpg',
                  '/images/revetement-muraux/revetement-mur-2.jpg',
                  '/images/revetement-muraux/revetement-mur-6.jpg',
                  '/images/revetement-muraux/revetement-mur-8.jpg',
                ].map((src, i) => (
                  <StaggerItem key={i}>
                    <div className="img-reveal rounded-sm overflow-hidden aspect-square">
                      <img src={src} alt="Revêtement mural" />
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ============ SECTION 3 : SOL ============ */}
      <section id="sol" className="section-padding section-spacing bg-warm-white scroll-mt-32">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center mb-14">
            <AnimatedSection variant="fadeLeft">
              <p className="label-text mb-3">Revêtement de sol</p>
              <h2 className="heading-lg mb-4">Le sol définit l'ambiance</h2>
              <div className="divider-line mb-5" />
              <p className="body-lg mb-3">
                ILEF Peinture vous accompagne dans le choix du matériau idéal selon vos souhaits, la fréquence de passage et votre budget. Pose soignée sur support préparé.
              </p>
              <p className="body-lg">
                Parquet, moquette, lino, PVC, béton ciré — nous posons tout type de revêtement de sol avec un soin particulier pour un rendu durable.
              </p>
            </AnimatedSection>
            <AnimatedSection variant="fadeRight" delay={0.15}>
              <div className="img-reveal rounded-sm overflow-hidden aspect-[4/3]">
                <img src="/images/sol/revetement-lino.jpg" alt="Revêtement de sol" />
              </div>
            </AnimatedSection>
          </div>

          <StaggerContainer className="grid md:grid-cols-3 gap-4" staggerDelay={0.1}>
            {[
              { title: 'Parquet & bois', desc: 'Contrecollé, stratifié, massif — aspect naturel et résistance.', image: '/images/sol/pose-parquet.jpg' },
              { title: 'Moquette & tissu', desc: 'Confort thermique et acoustique incomparable.', image: '/images/sol/pose-moquette.jpg' },
              { title: 'Lino & souple', desc: 'Prix abordable, entretien facile, grande variété.', image: '/images/sol/pose-lino.jpg' },
            ].map((s, i) => (
              <StaggerItem key={i}>
                <div className="overflow-hidden rounded-sm">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img src={s.image} alt={s.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-4 bg-ivory">
                    <h3 className="font-serif text-base md:text-lg mb-1">{s.title}</h3>
                    <p className="text-xs md:text-sm text-taupe leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ============ CTA UNIQUE ============ */}
      <section className="section-padding py-14 md:py-20 bg-anthracite text-center">
        <AnimatedSection>
          <h2 className="heading-md text-warm-white mb-3">Un projet en tête ?</h2>
          <p className="text-sm md:text-base text-warm-white/50 max-w-md mx-auto mb-6">
            Devis gratuit sous 48h. Notre équipe intervient rapidement sur les chantiers.
          </p>
          <div className="flex flex-row gap-3 justify-center">
            <Link to="/contact" className="btn-light">Demander un devis</Link>
            <a href="tel:0659797855" className="btn-outline !border-warm-white/30 !text-warm-white hover:!bg-warm-white/10">
              06 59 79 78 55
            </a>
          </div>
        </AnimatedSection>
      </section>
    </PageTransition>
  )
}
