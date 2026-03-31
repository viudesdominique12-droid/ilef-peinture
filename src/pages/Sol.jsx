import { Link } from 'react-router-dom'
import PageTransition from '../components/PageTransition'
import AnimatedSection, { StaggerContainer, StaggerItem } from '../components/AnimatedSection'

const solTypes = [
  {
    title: 'Parquet & revêtement bois',
    desc: 'Abordables en terme de coût, le contrecollé et le stratifié ont supplanté le parquet massif, grâce à leur pose rapide, leur aspect bois naturel et leur résistance.',
    image: '/images/sol/pose-parquet.jpg',
    tags: ['Parquet massif', 'Stratifié', 'Contrecollé', 'Bambou'],
  },
  {
    title: 'Moquette & revêtement tissu',
    desc: 'Confortable et plutôt bon marché, une moquette offre un confort thermique et acoustique sans pareil, nettement meilleur qu\'un sol dur comme le carrelage.',
    image: '/images/sol/pose-moquette.jpg',
    tags: ['Moquette', 'Revêtement tissu', 'Confort thermique'],
  },
  {
    title: 'Lino & revêtement souple',
    desc: 'Les revêtements souples sont appréciés pour leur prix abordable, leur entretien facile et leur immense variété de couleurs, motifs et imitations.',
    image: '/images/sol/pose-lino.jpg',
    tags: ['Lino', 'PVC', 'Dalles', 'Béton ciré'],
  },
]

export default function Sol() {
  return (
    <PageTransition>
      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/sol/sol-banniere.jpg"
            alt="Revêtement de sol ILEF"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/85 via-charcoal/60 to-charcoal/30" />
        </div>
        <div className="relative section-padding max-w-4xl">
          <AnimatedSection>
            <p className="label-text !text-terracotta-light mb-4">Nos prestations</p>
            <h1 className="heading-xl text-warm-white mb-6">
              Revêtement
              <br />
              <span className="italic text-terracotta-light">de sol</span>
            </h1>
            <p className="text-lg text-warm-white/70 max-w-2xl leading-relaxed">
              Pose de revêtement de sol au Maine-et-Loire. Parquet, moquette, lino —
              le sol idéal pour chaque pièce, posé avec précision.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Intro */}
      <section className="section-padding section-spacing bg-warm-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <AnimatedSection variant="fadeLeft">
              <p className="label-text mb-4">L'importance du sol</p>
              <h2 className="heading-lg mb-6">
                Le sol structure l'espace et définit l'ambiance
              </h2>
              <div className="divider-line mb-6" />
              <p className="body-lg mb-4">
                Vous projetez une rénovation intérieure ? ILEF Peinture vous accompagne à chaque étape
                et vous conseille sur le matériau idéal en fonction de vos souhaits de décoration, de vos
                préférences esthétiques et de la fréquence de passage dans chaque pièce.
              </p>
              <p className="body-lg">
                Installée à Angers, notre entreprise réalise la pose de tout type de revêtement de sol
                avec un soin particulier apporté à la préparation du support et à la qualité de la finition.
              </p>
            </AnimatedSection>
            <AnimatedSection variant="fadeRight" delay={0.2}>
              <div className="relative">
                <div className="img-reveal rounded-sm overflow-hidden aspect-[4/3]">
                  <img
                    src="/images/sol/revetement-lino.jpg"
                    alt="Revêtement de sol"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 left-0 md:-left-4 w-24 h-24 bg-terracotta/10 rounded-sm -z-10" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Types de revêtement */}
      <section className="section-padding section-spacing bg-ivory">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <p className="label-text mb-4">Nos solutions</p>
            <h2 className="heading-lg mb-4">Une grande variété de revêtements</h2>
            <p className="body-lg max-w-2xl mx-auto">
              Chaque matériau a ses avantages. Nous vous guidons vers le meilleur choix
              pour l'accorder avec goût au reste de votre intérieur.
            </p>
          </AnimatedSection>

          <div className="space-y-20">
            {solTypes.map((sol, i) => (
              <div
                key={i}
                className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center`}
              >
                <AnimatedSection
                  variant={i % 2 === 0 ? 'fadeLeft' : 'fadeRight'}
                  className={i % 2 !== 0 ? 'lg:order-2' : ''}
                >
                  <div className="img-reveal rounded-sm overflow-hidden aspect-[4/3]">
                    <img
                      src={sol.image}
                      alt={sol.title}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                  </div>
                </AnimatedSection>
                <AnimatedSection
                  variant={i % 2 === 0 ? 'fadeRight' : 'fadeLeft'}
                  delay={0.15}
                  className={i % 2 !== 0 ? 'lg:order-1' : ''}
                >
                  <h3 className="heading-md mb-4">{sol.title}</h3>
                  <div className="divider-line mb-6" />
                  <p className="body-lg mb-6">{sol.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {sol.tags.map((tag) => (
                      <span key={tag} className="px-4 py-2 bg-warm-white rounded-sm text-xs tracking-wide text-taupe font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                </AnimatedSection>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Méthode */}
      <section className="section-padding section-spacing bg-warm-white">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <p className="label-text mb-4">Notre savoir-faire</p>
            <h2 className="heading-lg mb-4">Préparation méticuleuse, pose experte</h2>
            <p className="body-lg max-w-2xl mx-auto">
              Avant toute pose, nous apportons un soin considérable à la protection des lieux
              et à la préparation du sol pour qu'il soit propre et plat — la clé d'un rendu parfait.
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid md:grid-cols-3 gap-8" staggerDelay={0.15}>
            {[
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                ),
                title: 'Protection intégrale',
                desc: 'Meubles, plinthes et surfaces adjacentes soigneusement protégés pendant toute la durée des travaux.',
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M11.42 15.17l-5.384-3.19A2.625 2.625 0 015.25 9.75V4.5c0-.621.504-1.125 1.125-1.125h11.25c.621 0 1.125.504 1.125 1.125v5.25a2.625 2.625 0 01-.786 2.23l-5.384 3.19a2.625 2.625 0 01-2.718 0z" />
                  </svg>
                ),
                title: 'Préparation du support',
                desc: 'Ragréage, nettoyage, mise à niveau — un sol plat et propre est la condition d\'une pose durable.',
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342" />
                  </svg>
                ),
                title: 'Formation continue',
                desc: 'Nos poseurs sont formés aux nouvelles technologies et matériaux chaque année.',
              },
            ].map((item, i) => (
              <StaggerItem key={i}>
                <div className="bg-ivory p-8 rounded-sm text-center">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-terracotta/10 text-terracotta mb-4">
                    {item.icon}
                  </div>
                  <h3 className="font-serif text-lg mb-3">{item.title}</h3>
                  <p className="text-sm text-taupe leading-relaxed">{item.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Peinture de sol */}
      <section className="section-padding py-16 md:py-20 bg-anthracite">
        <AnimatedSection className="max-w-4xl mx-auto text-center">
          <p className="label-text !text-terracotta-light mb-4">Alternative économique</p>
          <h2 className="heading-md text-warm-white mb-4">
            La peinture de sol décorative
          </h2>
          <p className="text-warm-white/60 max-w-2xl mx-auto mb-6">
            Vos sols paraissent défraîchis ? La peinture de sol redonne de l'éclat à la pièce et améliore
            la résistance du sol, applicable sur bois, carrelage ou PVC — pour un coût moindre qu'un remplacement complet.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {['Haute résistance aux rayures', 'Résistance aux chocs', 'Liberté chromatique totale'].map((a) => (
              <span key={a} className="px-4 py-2 border border-warm-white/15 text-warm-white/70 text-xs tracking-wide rounded-sm">{a}</span>
            ))}
          </div>
        </AnimatedSection>
      </section>

      {/* Gallery mini */}
      <section className="section-padding py-16 bg-ivory">
        <AnimatedSection>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              '/images/sol/sols-detail.webp',
              '/images/sol/sols-detail2.webp',
              '/images/sol/realise-sol.jpg',
              '/images/accueil/hero-parquet.jpg',
            ].map((src, i) => (
              <div key={i} className="img-reveal rounded-sm overflow-hidden aspect-square">
                <img src={src} alt="Revêtement de sol" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
              </div>
            ))}
          </div>
        </AnimatedSection>
      </section>

      {/* CTA */}
      <section className="section-padding py-20 bg-warm-white">
        <AnimatedSection className="max-w-3xl mx-auto text-center">
          <h2 className="heading-md mb-4">Un projet de sol en tête ?</h2>
          <p className="body-lg mb-8">
            Contactez notre équipe pour des conseils ou plus d'informations sur nos prestations de revêtement de sol.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary">Demander un devis gratuit</Link>
            <Link to="/nos-realisations" className="btn-outline">Voir nos réalisations</Link>
          </div>
        </AnimatedSection>
      </section>
    </PageTransition>
  )
}
