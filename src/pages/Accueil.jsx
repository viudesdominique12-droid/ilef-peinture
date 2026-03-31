import { Link } from 'react-router-dom'
import PageTransition from '../components/PageTransition'
import BeforeAfterSlider from '../components/BeforeAfterSlider'
import AnimatedSection, { StaggerContainer, StaggerItem } from '../components/AnimatedSection'

const prestations = [
  {
    title: 'Peinture intérieure',
    desc: 'Murs, plafonds, finitions décoratives — une expertise complète pour sublimer chaque pièce de votre intérieur.',
    image: '/images/chantier/peinture-application.webp',
    link: '/peinture-interieur-et-revetement',
  },
  {
    title: 'Revêtement mural',
    desc: 'Papier peint, toile de verre, revêtements décoratifs — habillage mural soigné avec un large choix de matériaux.',
    image: '/images/revetement-muraux/papier-peint-1.jpg',
    link: '/peinture-interieur-et-revetement',
  },
  {
    title: 'Revêtement de sol',
    desc: 'Parquet, lino, moquette, PVC — pose sur mesure adaptée à chaque pièce et à chaque usage.',
    image: '/images/accueil/hero-parquet.jpg',
    link: '/revetement-de-sol',
  },
]

const engagements = [
  { number: '17+', label: "Années d'expérience", desc: 'Un savoir-faire éprouvé au service de votre intérieur' },
  { number: '100%', label: 'Devis gratuit', desc: 'Étude personnalisée et sans engagement' },
  { number: '5★', label: 'Satisfaction client', desc: 'Des finitions impeccables, projet après projet' },
]

export default function Accueil() {
  return (
    <PageTransition>
      {/* ============ HERO TEXT ============ */}
      <section className="bg-charcoal pt-28 pb-14 md:pt-36 md:pb-16">
        <div className="section-padding max-w-5xl">
          <p className="hero-animate hero-animate-1 label-text !text-terracotta-light mb-5">
            Artisan peintre à Angers depuis 2007
          </p>
          <h1 className="hero-animate hero-animate-2 heading-xl text-warm-white mb-5">
            Nous transformons{' '}
            <span className="text-terracotta-light italic">vos espaces</span>
            {' '}avec exigence
          </h1>
          <p className="hero-animate hero-animate-3 text-lg md:text-xl text-warm-white/60 leading-relaxed max-w-2xl mb-8">
            Peinture décorative, revêtements muraux et de sol — des finitions
            soignées pour un intérieur qui vous ressemble.
          </p>
          <div className="hero-animate hero-animate-4 flex flex-col sm:flex-row gap-4">
            <Link to="/contact" className="btn-light">
              Demander un devis gratuit
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
              </svg>
            </Link>
            <Link to="/nos-realisations" className="btn-outline !border-warm-white/30 !text-warm-white hover:!bg-warm-white/10">
              Voir nos réalisations
            </Link>
          </div>
        </div>
      </section>

      {/* ============ SLIDER AVANT / APRÈS — PLEINE LARGEUR ============ */}
      <section className="relative w-full h-[50vh] md:h-[70vh] lg:h-[80vh] overflow-hidden">
        <BeforeAfterSlider
          beforeSrc="/images/chantier/consultation.jpg"
          afterSrc="/images/accueil/sol-moderne.jpg"
        />
      </section>

      {/* ============ INTRO / CONFIANCE ============ */}
      <section className="section-padding section-spacing bg-warm-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div>
              <AnimatedSection>
                <p className="label-text mb-4">ILEF Peinture & Décoration</p>
                <h2 className="heading-lg mb-6">
                  Plus de 17 ans au service de votre intérieur
                </h2>
                <div className="divider-line mb-8" />
              </AnimatedSection>
              <AnimatedSection delay={0.2}>
                <p className="body-lg mb-6">
                  Que ce soit en rénovation ou en construction neuve, notre équipe d'artisans peintres
                  intervient pour tous vos travaux de peinture de murs et plafonds, avec un soin particulier
                  apporté aux finitions.
                </p>
                <p className="body-lg mb-8">
                  Nous vous conseillons sur le choix des couleurs, des teintes, de la texture et du type de finition
                  pour un résultat à la hauteur de vos attentes — traitement de fissures, remise en état des murs,
                  application soignée.
                </p>
                <Link to="/deroulement-du-chantier" className="btn-outline">
                  Notre méthode de travail
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                  </svg>
                </Link>
              </AnimatedSection>
            </div>

            <AnimatedSection variant="fadeRight" delay={0.3}>
              <div className="relative">
                <div className="img-reveal rounded-sm overflow-hidden aspect-[4/5]">
                  <img
                    src="/images/accueil/sol-moderne.jpg"
                    alt="Intérieur moderne réalisé par ILEF"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-anthracite text-warm-white p-6 rounded-sm shadow-xl max-w-[200px]">
                  <p className="font-serif text-3xl text-terracotta-light mb-1">17+</p>
                  <p className="text-xs tracking-widest uppercase text-warm-white/70">Années d'expérience</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ============ PRESTATIONS ============ */}
      <section className="section-padding section-spacing bg-ivory">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <p className="label-text mb-4">Nos expertises</p>
            <h2 className="heading-lg mb-4">Des prestations complètes</h2>
            <p className="body-lg max-w-2xl mx-auto">
              De la peinture décorative au revêtement de sol, nous prenons en charge
              l'ensemble de vos travaux d'intérieur.
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid md:grid-cols-3 gap-6 lg:gap-8" staggerDelay={0.15}>
            {prestations.map((p, i) => (
              <StaggerItem key={i}>
                <Link to={p.link} className="group block">
                  <div className="relative overflow-hidden rounded-sm aspect-[3/4] mb-6">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                      <h3 className="font-serif text-2xl text-warm-white mb-2">{p.title}</h3>
                      <p className="text-sm text-warm-white/70 leading-relaxed">{p.desc}</p>
                    </div>
                    <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-warm-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-2 group-hover:translate-x-0">
                      <svg className="w-4 h-4 text-warm-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                      </svg>
                    </div>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ============ CHIFFRES / RÉASSURANCE ============ */}
      <section className="section-padding py-16 md:py-20 bg-anthracite">
        <StaggerContainer className="max-w-5xl mx-auto grid md:grid-cols-3 gap-12 text-center" staggerDelay={0.15}>
          {engagements.map((e, i) => (
            <StaggerItem key={i}>
              <p className="font-serif text-5xl md:text-6xl text-terracotta-light mb-2">{e.number}</p>
              <p className="text-warm-white text-sm tracking-widest uppercase mb-2">{e.label}</p>
              <p className="text-warm-white/50 text-sm">{e.desc}</p>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* ============ APERÇU RÉALISATIONS ============ */}
      <section className="section-padding section-spacing bg-warm-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
            <AnimatedSection>
              <p className="label-text mb-4">Portfolio</p>
              <h2 className="heading-lg">Nos réalisations récentes</h2>
            </AnimatedSection>
            <AnimatedSection delay={0.2} className="mt-6 md:mt-0">
              <Link to="/nos-realisations" className="btn-outline">
                Voir tout
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
              </Link>
            </AnimatedSection>
          </div>

          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4" staggerDelay={0.08}>
            {[
              { src: '/images/accueil/realise-interieur.jpg', span: 'md:col-span-2 md:row-span-2' },
              { src: '/images/revetement-muraux/revetement-mur-2.jpg', span: '' },
              { src: '/images/accueil/sol-moderne.jpg', span: '' },
              { src: '/images/chantier/realise.jpg', span: '' },
              { src: '/images/accueil/chambre-deco.jpg', span: '' },
            ].map((img, i) => (
              <StaggerItem key={i} className={img.span}>
                <Link to="/nos-realisations" className="group block overflow-hidden rounded-sm h-full">
                  <div className="relative overflow-hidden h-full aspect-square">
                    <img
                      src={img.src}
                      alt="Réalisation ILEF"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/20 transition-colors duration-500" />
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ============ PROCESSUS RAPIDE ============ */}
      <section className="section-padding section-spacing bg-ivory">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <p className="label-text mb-4">Simple et transparent</p>
            <h2 className="heading-lg mb-4">Comment se déroule votre projet</h2>
            <p className="body-lg max-w-xl mx-auto">
              De la première prise de contact à la réception du chantier, un accompagnement clair et rigoureux.
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid md:grid-cols-4 gap-8" staggerDelay={0.12}>
            {[
              { step: '01', title: 'Échange & Devis', desc: 'Nous définissons ensemble le périmètre du projet et vous recevez un devis détaillé gratuit.' },
              { step: '02', title: 'Préparation', desc: 'Protection des sols, reprise des murs, ponçage — chaque surface est soigneusement préparée.' },
              { step: '03', title: 'Réalisation', desc: 'Application experte des peintures et revêtements, avec un suivi rigoureux des finitions.' },
              { step: '04', title: 'Réception', desc: 'Nettoyage complet du chantier et validation des travaux ensemble, dans les moindres détails.' },
            ].map((s, i) => (
              <StaggerItem key={i}>
                <div className="relative">
                  <span className="font-serif text-5xl text-terracotta/20 block mb-4">{s.step}</span>
                  <h3 className="font-serif text-xl mb-3">{s.title}</h3>
                  <p className="text-sm text-taupe leading-relaxed">{s.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <AnimatedSection className="text-center mt-14" delay={0.5}>
            <Link to="/deroulement-du-chantier" className="btn-primary">
              En savoir plus sur notre méthode
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ============ PARTENAIRES ============ */}
      <section className="section-padding py-16 bg-warm-white border-t border-beige/30">
        <AnimatedSection className="max-w-4xl mx-auto text-center">
          <p className="label-text mb-6">Nos partenaires</p>
          <p className="body-lg mb-8">
            En collaboration avec des marques de confiance pour vous garantir des matériaux de qualité.
          </p>
          <div className="flex justify-center items-center gap-12 md:gap-20 text-taupe/60">
            <span className="font-serif text-2xl tracking-wide">Sikkens</span>
            <span className="w-px h-8 bg-beige" />
            <span className="font-serif text-2xl tracking-wide">Tollens</span>
            <span className="w-px h-8 bg-beige" />
            <span className="font-serif text-2xl tracking-wide">Isover</span>
          </div>
        </AnimatedSection>
      </section>
    </PageTransition>
  )
}
