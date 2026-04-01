import { Link } from 'react-router-dom'
import PageTransition from '../components/PageTransition'
import BeforeAfterSlider from '../components/BeforeAfterSlider'
import AnimatedSection, { StaggerContainer, StaggerItem } from '../components/AnimatedSection'

export default function Accueil() {
  return (
    <PageTransition>
      {/* ============ HERO ============ */}
      <section className="bg-charcoal pt-24 pb-8 md:pt-32 md:pb-12">
        <div className="section-padding max-w-5xl">
          <p className="hero-animate hero-animate-1 label-text !text-terracotta-light mb-3 md:mb-4">
            Artisan peintre à Angers depuis plus de 17 ans
          </p>
          <h1 className="hero-animate hero-animate-2 heading-xl text-warm-white mb-3 md:mb-5">
            Nous transformons{' '}
            <span className="text-terracotta-light italic">vos espaces</span>
            {' '}avec exigence
          </h1>
          <p className="hero-animate hero-animate-3 text-sm md:text-xl text-warm-white/60 leading-relaxed max-w-2xl mb-5 md:mb-8">
            Peinture intérieure, revêtements muraux et de sol — des finitions
            soignées pour un intérieur qui vous ressemble.
          </p>
          <div className="hero-animate hero-animate-4 flex flex-row gap-3">
            <Link to="/contact" className="btn-light flex-1 sm:flex-none">
              Devis gratuit
              <svg className="w-4 h-4 hidden sm:block" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" /></svg>
            </Link>
            <Link to="/nos-realisations" className="btn-outline !border-warm-white/30 !text-warm-white hover:!bg-warm-white/10 flex-1 sm:flex-none">
              Nos projets
            </Link>
          </div>
        </div>
      </section>

      {/* ============ AVANT / APRÈS ============ */}
      <section className="relative w-full h-[50vh] md:h-[65vh] lg:h-[75vh] overflow-hidden">
        <BeforeAfterSlider
          beforeSrc="/images/chantier/consultation.jpg"
          afterSrc="/images/accueil/sol-moderne.jpg"
        />
      </section>

      {/* ============ SERVICES — 3 cartes ============ */}
      <section className="section-padding section-spacing bg-warm-white">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection className="text-center mb-10 md:mb-14">
            <p className="label-text mb-2">Nos expertises</p>
            <h2 className="heading-lg">Ce que nous faisons</h2>
          </AnimatedSection>

          <StaggerContainer className="grid md:grid-cols-3 gap-4 lg:gap-6" staggerDelay={0.12}>
            {[
              { title: 'Peinture intérieure', desc: 'Murs, plafonds, finitions décoratives. Peinture traditionnelle ou décorative avec des matériaux de qualité.', image: '/images/chantier/peinture-application.webp', anchor: '#peinture' },
              { title: 'Revêtement mural', desc: 'Papier peint, toile de verre, revêtements décoratifs. Pose soignée avec un large choix de matériaux.', image: '/images/revetement-muraux/papier-peint-1.jpg', anchor: '#revetement-mural' },
              { title: 'Revêtement de sol', desc: 'Parquet, lino, moquette, PVC. Pose sur mesure adaptée à chaque pièce et à chaque usage.', image: '/images/accueil/hero-parquet.jpg', anchor: '#sol' },
            ].map((s, i) => (
              <StaggerItem key={i}>
                <Link to={`/nos-services${s.anchor}`} className="group block">
                  <div className="relative overflow-hidden rounded-sm aspect-[4/3] mb-4">
                    <img src={s.image} alt={s.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5">
                      <h3 className="font-serif text-lg md:text-xl text-warm-white">{s.title}</h3>
                    </div>
                  </div>
                  <p className="text-xs md:text-sm text-taupe leading-relaxed">{s.desc}</p>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <AnimatedSection className="text-center mt-8" delay={0.3}>
            <Link to="/nos-services" className="btn-outline">
              Découvrir nos services
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ============ CHIFFRES ============ */}
      <section className="section-padding py-12 md:py-16 bg-anthracite">
        <StaggerContainer className="max-w-4xl mx-auto grid grid-cols-3 gap-4 text-center" staggerDelay={0.1}>
          {[
            { n: '17+', l: "Années d'expérience" },
            { n: '✓', l: 'Devis gratuit' },
            { n: '—', l: 'Avis clients' },
          ].map((e, i) => (
            <StaggerItem key={i}>
              <p className="font-serif text-3xl md:text-5xl text-terracotta-light mb-1">{e.n}</p>
              <p className="text-warm-white/60 text-[9px] md:text-xs tracking-widest uppercase">{e.l}</p>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* ============ MÉTHODE — 4 étapes ============ */}
      <section className="section-padding section-spacing bg-ivory">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection className="text-center mb-10 md:mb-14">
            <p className="label-text mb-2">Notre méthode</p>
            <h2 className="heading-lg">Un chantier maîtrisé, de A à Z</h2>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6" staggerDelay={0.1}>
            {[
              { n: '01', t: 'Échange & Devis', d: 'Analyse du projet et devis détaillé gratuit sous 48h.', img: '/images/chantier/consultation.jpg' },
              { n: '02', t: 'Préparation', d: 'Protection des sols, ponçage, reprise des murs.', img: '/images/chantier/preparation.jpg' },
              { n: '03', t: 'Réalisation', d: 'Application experte des peintures et revêtements.', img: '/images/chantier/finition.webp' },
              { n: '04', t: 'Réception', d: 'Nettoyage complet et validation ensemble.', img: '/images/chantier/validation.webp' },
            ].map((s, i) => (
              <StaggerItem key={i}>
                <div className="relative overflow-hidden rounded-sm aspect-[3/4] mb-3">
                  <img src={s.img} alt={s.t} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4">
                    <span className="font-serif text-2xl md:text-3xl text-terracotta-light/40 block mb-0.5">{s.n}</span>
                    <h3 className="font-serif text-sm md:text-base text-warm-white mb-0.5">{s.t}</h3>
                    <p className="text-[10px] md:text-xs text-warm-white/60 leading-relaxed">{s.d}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ============ APERÇU PROJETS ============ */}
      <section className="section-padding section-spacing bg-warm-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-8 md:mb-10">
            <AnimatedSection>
              <p className="label-text mb-2">Portfolio</p>
              <h2 className="heading-lg">Nos réalisations</h2>
            </AnimatedSection>
            <AnimatedSection delay={0.15} className="mt-3 md:mt-0">
              <Link to="/nos-realisations" className="btn-outline">
                Tout voir
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" /></svg>
              </Link>
            </AnimatedSection>
          </div>

          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-3" staggerDelay={0.07}>
            {[
              { src: '/images/accueil/realise-interieur.jpg', span: 'md:col-span-2 md:row-span-2' },
              { src: '/images/revetement-muraux/revetement-mur-2.jpg' },
              { src: '/images/accueil/sol-moderne.jpg' },
              { src: '/images/chantier/realise.jpg' },
              { src: '/images/accueil/chambre-deco.jpg' },
            ].map((img, i) => (
              <StaggerItem key={i} className={img.span || ''}>
                <Link to="/nos-realisations" className="group block overflow-hidden rounded-sm h-full aspect-square">
                  <img src={img.src} alt="Réalisation ILEF" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ============ PARTENAIRES ============ */}
      <section className="section-padding py-10 bg-ivory border-t border-beige/30">
        <AnimatedSection className="max-w-3xl mx-auto text-center">
          <p className="label-text mb-4">Partenaires de confiance</p>
          <div className="flex justify-center items-center gap-8 md:gap-16 text-taupe/50">
            <span className="font-serif text-lg md:text-2xl">Sikkens</span>
            <span className="w-px h-6 bg-beige" />
            <span className="font-serif text-lg md:text-2xl">Tollens</span>
            <span className="w-px h-6 bg-beige" />
            <span className="font-serif text-lg md:text-2xl">Isover</span>
          </div>
        </AnimatedSection>
      </section>
    </PageTransition>
  )
}
