import { Link } from 'react-router-dom'
import PageTransition from '../components/PageTransition'
import BeforeAfterSlider from '../components/BeforeAfterSlider'
import RevealImage from '../components/RevealImage'
import AnimatedSection, { StaggerContainer, StaggerItem } from '../components/AnimatedSection'

export default function Accueil() {
  return (
    <PageTransition>
      {/* ============ HERO compact ============ */}
      <section className="relative overflow-hidden bg-white">
        <div className="section-padding pt-20 pb-6 md:pt-24 md:pb-8">
          <p className="hero-animate hero-animate-1 label-text text-rose mb-2">
            Artisan peintre à Angers depuis plus de 17 ans
          </p>
          <h1 className="hero-animate hero-animate-2 heading-xl max-w-4xl mb-3">
            Nous transformons{' '}
            <span className="bg-gradient-to-r from-rose via-violet to-bleu bg-clip-text text-transparent italic">vos espaces</span>
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
        {/* Rainbow line */}
        <div className="rainbow-line" />
      </section>

      {/* ============ AVANT / APRÈS ============ */}
      <section className="section-padding py-4 bg-light">
        <div className="relative w-full h-[42vh] md:h-[58vh] lg:h-[68vh] overflow-hidden rounded-2xl shadow-xl">
          <BeforeAfterSlider
            beforeSrc="/images/chantier/consultation.jpg"
            afterSrc="/images/accueil/sol-moderne.jpg"
          />
        </div>
      </section>

      {/* ============ SERVICES ============ */}
      <section className="section-padding section-spacing bg-white">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection className="text-center mb-12">
            <p className="label-text text-bleu mb-2">Nos expertises</p>
            <h2 className="heading-lg">Ce que nous faisons</h2>
          </AnimatedSection>

          <StaggerContainer className="grid md:grid-cols-3 gap-5" staggerDelay={0.12}>
            {[
              { title: 'Peinture intérieure', desc: 'Murs, plafonds, finitions décoratives. Peinture traditionnelle ou décorative.', image: '/images/chantier/peinture-application.webp', color: 'bg-rose' },
              { title: 'Revêtement mural', desc: 'Papier peint, toile de verre, revêtements décoratifs. Pose soignée.', image: '/images/revetement-muraux/papier-peint-1.jpg', color: 'bg-vert' },
              { title: 'Revêtement de sol', desc: 'Parquet, lino, moquette, PVC. Pose sur mesure pour chaque pièce.', image: '/images/accueil/hero-parquet.jpg', color: 'bg-bleu' },
            ].map((s, i) => (
              <StaggerItem key={i}>
                <Link to={`/nos-services#${['peinture','revetement-mural','sol'][i]}`} className="card-color group block">
                  <div className="relative overflow-hidden aspect-[4/3]">
                    <img src={s.image} alt={s.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <div className="p-5">
                    <div className={`w-8 h-1 ${s.color} rounded-full mb-3`} />
                    <h3 className="font-serif text-lg mb-1.5 group-hover:text-rose transition-colors">{s.title}</h3>
                    <p className="text-xs text-gray-600 leading-relaxed">{s.desc}</p>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <AnimatedSection className="text-center mt-10" delay={0.3}>
            <Link to="/nos-services" className="btn-bleu">Découvrir nos services</Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ============ CHIFFRES — colorés ============ */}
      <section className="section-padding py-12 md:py-16 bg-dark">
        <StaggerContainer className="max-w-4xl mx-auto grid grid-cols-3 gap-4 text-center" staggerDelay={0.1}>
          {[
            { n: '17+', l: "Années d'expérience", color: 'text-jaune' },
            { n: '✓', l: 'Devis gratuit', color: 'text-vert' },
            { n: '—', l: 'Avis clients', color: 'text-violet-light' },
          ].map((e, i) => (
            <StaggerItem key={i}>
              <p className={`font-serif text-3xl md:text-5xl ${e.color} mb-1`}>{e.n}</p>
              <p className="text-white/60 text-[9px] md:text-[11px] tracking-[0.2em] uppercase">{e.l}</p>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* ============ MÉTHODE — Scroll horizontal ============ */}
      <section className="section-spacing bg-light">
        <div className="section-padding mb-8 md:mb-12">
          <AnimatedSection>
            <p className="label-text text-vert mb-2">Notre méthode</p>
            <h2 className="heading-lg">Un chantier maîtrisé</h2>
          </AnimatedSection>
        </div>

        <div className="h-scroll-container">
          {[
            { n: '01', t: 'Échange & Devis', d: 'Analyse du projet et devis détaillé gratuit sous 48h.', img: '/images/chantier/consultation.jpg', color: 'text-rose' },
            { n: '02', t: 'Préparation', d: 'Protection des sols, ponçage, reprise des murs.', img: '/images/chantier/preparation.jpg', color: 'text-bleu' },
            { n: '03', t: 'Réalisation', d: 'Application experte des peintures et revêtements choisis.', img: '/images/chantier/finition.webp', color: 'text-vert' },
            { n: '04', t: 'Réception', d: 'Nettoyage complet et validation ensemble.', img: '/images/chantier/validation.webp', color: 'text-jaune-dark' },
          ].map((s, i) => (
            <div key={i} className="h-scroll-panel">
              <div className="card-color overflow-hidden">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={s.img} alt={s.t} className="w-full h-full object-cover" />
                </div>
                <div className="p-5">
                  <span className={`font-serif text-3xl ${s.color}/30 block mb-1`}>{s.n}</span>
                  <h3 className="font-serif text-lg mb-1">{s.t}</h3>
                  <p className="text-[12px] text-gray-600 leading-relaxed">{s.d}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ============ APERÇU PROJETS ============ */}
      <section className="section-padding section-spacing bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-8">
            <AnimatedSection>
              <p className="label-text text-orange mb-2">Portfolio</p>
              <h2 className="heading-lg">Nos réalisations</h2>
            </AnimatedSection>
            <AnimatedSection delay={0.15} className="mt-3 md:mt-0">
              <Link to="/nos-realisations" className="btn-ghost hover:!text-orange">
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
                <Link to="/nos-realisations" className="group block overflow-hidden rounded-2xl h-full aspect-square shadow-sm hover:shadow-xl transition-shadow duration-400">
                  <img src={img.src} alt="Réalisation" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ============ PARTENAIRES ============ */}
      <section className="section-padding py-10 bg-light">
        <AnimatedSection className="max-w-3xl mx-auto text-center">
          <p className="label-text text-violet mb-4">Partenaires de confiance</p>
          <div className="flex justify-center items-center gap-8 md:gap-16 text-gray-400">
            <span className="font-serif text-lg md:text-2xl">Sikkens</span>
            <span className="w-px h-5 bg-gray-200" />
            <span className="font-serif text-lg md:text-2xl">Tollens</span>
            <span className="w-px h-5 bg-gray-200" />
            <span className="font-serif text-lg md:text-2xl">Isover</span>
          </div>
        </AnimatedSection>
      </section>
    </PageTransition>
  )
}
