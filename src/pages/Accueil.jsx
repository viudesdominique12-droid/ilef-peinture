import { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import PageTransition from '../components/PageTransition'
import BeforeAfterSlider from '../components/BeforeAfterSlider'
import RevealImage from '../components/RevealImage'
import AnimatedSection, { StaggerContainer, StaggerItem } from '../components/AnimatedSection'

export default function Accueil() {
  // Spotlight mouse tracking
  const spotRef = useRef(null)
  useEffect(() => {
    const el = spotRef.current
    if (!el) return
    const handle = (e) => {
      const rect = el.getBoundingClientRect()
      el.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`)
      el.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`)
    }
    el.addEventListener('mousemove', handle)
    return () => el.removeEventListener('mousemove', handle)
  }, [])

  return (
    <PageTransition>
      {/* ============ HERO compact + AVANT/APRÈS collé ============ */}
      <section ref={spotRef} className="relative overflow-hidden">
        {/* Spotlight overlay */}
        <div className="spotlight absolute inset-0 z-[1]" />

        <div className="relative z-[2] section-padding pt-20 pb-6 md:pt-24 md:pb-8">
          <p className="hero-animate hero-animate-1 label-text mb-2">
            Artisan peintre à Angers depuis plus de 17 ans
          </p>
          <h1 className="hero-animate hero-animate-2 heading-xl max-w-4xl mb-3">
            Nous transformons{' '}
            <span className="text-bronze italic">vos espaces</span>
          </h1>
          <p className="hero-animate hero-animate-3 body-lg max-w-lg mb-5">
            Peinture intérieure, revêtements muraux et de sol — des finitions soignées pour un intérieur qui vous ressemble.
          </p>
          <div className="hero-animate hero-animate-4 flex flex-row gap-3">
            <Link to="/contact" className="btn-primary">
              Devis gratuit
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" /></svg>
            </Link>
            <Link to="/nos-realisations" className="btn-outline">Nos projets</Link>
          </div>
        </div>
      </section>

      {/* ============ AVANT / APRÈS — directement visible ============ */}
      <section className="relative w-full h-[45vh] md:h-[60vh] lg:h-[70vh] overflow-hidden">
        <BeforeAfterSlider
          beforeSrc="/images/chantier/consultation.jpg"
          afterSrc="/images/accueil/sol-moderne.jpg"
        />
      </section>

      {/* ============ SERVICES ============ */}
      <section className="section-padding section-spacing">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection className="text-center mb-12">
            <p className="label-text mb-2">Nos expertises</p>
            <h2 className="heading-lg">Ce que nous faisons</h2>
          </AnimatedSection>

          <StaggerContainer className="grid md:grid-cols-3 gap-4 lg:gap-6" staggerDelay={0.12}>
            {[
              { title: 'Peinture intérieure', desc: 'Murs, plafonds, finitions décoratives. Peinture traditionnelle ou décorative.', image: '/images/chantier/peinture-application.webp' },
              { title: 'Revêtement mural', desc: 'Papier peint, toile de verre, revêtements décoratifs. Pose soignée.', image: '/images/revetement-muraux/papier-peint-1.jpg' },
              { title: 'Revêtement de sol', desc: 'Parquet, lino, moquette, PVC. Pose sur mesure pour chaque pièce.', image: '/images/accueil/hero-parquet.jpg' },
            ].map((s, i) => (
              <StaggerItem key={i}>
                <Link to={`/nos-services#${['peinture','revetement-mural','sol'][i]}`} className="group block">
                  <RevealImage src={s.image} alt={s.title} aspect="aspect-[4/3]" className="mb-4" />
                  <h3 className="font-serif text-lg text-white mb-1 group-hover:text-bronze transition-colors">{s.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{s.desc}</p>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <AnimatedSection className="text-center mt-10" delay={0.3}>
            <Link to="/nos-services" className="btn-outline">Découvrir nos services</Link>
          </AnimatedSection>
        </div>
      </section>

      <div className="section-padding"><div className="glow-line" /></div>

      {/* ============ CHIFFRES ============ */}
      <section className="section-padding py-14 md:py-20">
        <StaggerContainer className="max-w-4xl mx-auto grid grid-cols-3 gap-4 text-center" staggerDelay={0.1}>
          {[
            { n: '17+', l: "Années d'expérience" },
            { n: '✓', l: 'Devis gratuit' },
            { n: '—', l: 'Avis clients' },
          ].map((e, i) => (
            <StaggerItem key={i}>
              <p className="font-serif text-3xl md:text-5xl text-bronze mb-1">{e.n}</p>
              <p className="text-gray-500 text-[9px] md:text-[11px] tracking-[0.2em] uppercase">{e.l}</p>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      <div className="section-padding"><div className="glow-line" /></div>

      {/* ============ MÉTHODE — Scroll horizontal ============ */}
      <section className="section-spacing">
        <div className="section-padding mb-8 md:mb-12">
          <AnimatedSection>
            <p className="label-text mb-2">Notre méthode</p>
            <h2 className="heading-lg">Un chantier maîtrisé</h2>
          </AnimatedSection>
        </div>

        <div className="h-scroll-container">
          {[
            { n: '01', t: 'Échange & Devis', d: 'Analyse du projet et devis détaillé gratuit sous 48h.', img: '/images/chantier/consultation.jpg' },
            { n: '02', t: 'Préparation', d: 'Protection des sols, ponçage, reprise des murs.', img: '/images/chantier/preparation.jpg' },
            { n: '03', t: 'Réalisation', d: 'Application experte des peintures et revêtements choisis.', img: '/images/chantier/finition.webp' },
            { n: '04', t: 'Réception', d: 'Nettoyage complet et validation ensemble.', img: '/images/chantier/validation.webp' },
          ].map((s, i) => (
            <div key={i} className="h-scroll-panel">
              <div className="relative overflow-hidden rounded-md aspect-[3/4] mb-4">
                <img src={s.img} alt={s.t} className="w-full h-full object-cover img-bw img-color" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <span className="font-serif text-3xl text-bronze/30 block mb-1">{s.n}</span>
                  <h3 className="font-serif text-lg text-white mb-1">{s.t}</h3>
                  <p className="text-[11px] text-gray-400 leading-relaxed">{s.d}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="section-padding"><div className="glow-line" /></div>

      {/* ============ APERÇU PROJETS ============ */}
      <section className="section-padding section-spacing">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-8">
            <AnimatedSection>
              <p className="label-text mb-2">Portfolio</p>
              <h2 className="heading-lg">Nos réalisations</h2>
            </AnimatedSection>
            <AnimatedSection delay={0.15} className="mt-3 md:mt-0">
              <Link to="/nos-realisations" className="btn-ghost">
                Tout voir
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" /></svg>
              </Link>
            </AnimatedSection>
          </div>

          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3" staggerDelay={0.07}>
            {[
              { src: '/images/accueil/realise-interieur.jpg', span: 'md:col-span-2 md:row-span-2' },
              { src: '/images/revetement-muraux/revetement-mur-2.jpg' },
              { src: '/images/accueil/sol-moderne.jpg' },
              { src: '/images/chantier/realise.jpg' },
              { src: '/images/accueil/chambre-deco.jpg' },
            ].map((img, i) => (
              <StaggerItem key={i} className={img.span || ''}>
                <Link to="/nos-realisations" className="group block overflow-hidden rounded-md h-full aspect-square">
                  <RevealImage src={img.src} alt="Réalisation" aspect="aspect-square" className="h-full" />
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ============ PARTENAIRES ============ */}
      <section className="section-padding py-10 border-t border-gray-900">
        <AnimatedSection className="max-w-3xl mx-auto text-center">
          <p className="label-text mb-4">Partenaires de confiance</p>
          <div className="flex justify-center items-center gap-8 md:gap-16 text-gray-700">
            <span className="font-serif text-lg md:text-2xl">Sikkens</span>
            <span className="w-px h-5 bg-gray-900" />
            <span className="font-serif text-lg md:text-2xl">Tollens</span>
            <span className="w-px h-5 bg-gray-900" />
            <span className="font-serif text-lg md:text-2xl">Isover</span>
          </div>
        </AnimatedSection>
      </section>
    </PageTransition>
  )
}
