import { Link } from 'react-router-dom'
import PageTransition from '../components/PageTransition'
import AnimatedSection, { StaggerContainer, StaggerItem } from '../components/AnimatedSection'

export default function Peinture() {
  return (
    <PageTransition>
      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/peinture/peinture-murale-hero.jpg"
            alt="Peinture intérieure ILEF"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/85 via-charcoal/60 to-charcoal/30" />
        </div>
        <div className="relative section-padding max-w-4xl">
          <AnimatedSection>
            <p className="label-text !text-terracotta-light mb-4">Nos prestations</p>
            <h1 className="heading-xl text-warm-white mb-6">
              Peinture intérieure
              <br />
              <span className="italic text-terracotta-light">& revêtement</span>
            </h1>
            <p className="text-lg text-warm-white/70 max-w-2xl leading-relaxed">
              Une ambiance, une personnalité à vos pièces. De la peinture décorative au revêtement mural,
              nous sublîmons chaque surface de votre intérieur.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Peinture intérieure */}
      <section className="section-padding section-spacing bg-warm-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <AnimatedSection variant="fadeLeft">
              <p className="label-text mb-4">Peinture intérieure</p>
              <h2 className="heading-lg mb-6">
                Donnez vie à chaque pièce
              </h2>
              <div className="divider-line mb-6" />
              <p className="body-lg mb-4">
                Vous souhaitez rafraîchir la peinture d'une pièce ou lui offrir une ambiance unique et authentique ?
                Notre équipe prend en charge tous vos travaux de peinture intérieurs à Angers et alentours.
              </p>
              <p className="body-lg mb-6">
                De la peinture décorative et murale au revêtement de vos murs et sols, nous garantissons
                une multitude de services diversifiés conformes à vos attentes. Dans le neuf comme dans la rénovation,
                des spécialistes dotés de plusieurs années d'expérience.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                {['Murs', 'Plafonds', 'Décorative', 'Motifs muraux', 'Traitement fissures'].map((tag) => (
                  <span key={tag} className="px-4 py-2 bg-ivory rounded-sm text-xs tracking-wide text-taupe font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </AnimatedSection>
            <AnimatedSection variant="fadeRight" delay={0.2}>
              <div className="relative">
                <div className="img-reveal rounded-sm overflow-hidden aspect-[4/5]">
                  <img
                    src="/images/peinture/plafond-fini.jpg"
                    alt="Plafond peint par ILEF"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 right-0 md:-right-4 w-32 h-32 bg-terracotta/10 rounded-sm -z-10" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Peinture murale & plafond */}
      <section className="section-padding section-spacing bg-ivory">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <AnimatedSection variant="fadeLeft" className="lg:order-2">
              <p className="label-text mb-4">Peinture murale & plafond</p>
              <h2 className="heading-lg mb-6">
                Harmonie des murs et plafonds
              </h2>
              <div className="divider-line mb-6" />
              <p className="body-lg mb-4">
                Choisir la bonne couleur pour vos murs est primordial. Nous conseillons toujours de repeindre
                le plafond et les murs en même temps, afin d'obtenir exactement le même rendu de couleur.
              </p>
              <p className="body-lg mb-6">
                Nous appliquons plusieurs couches de peinture pour une couleur profonde et durable.
                Pour un résultat plus original, nous proposons également la peinture décorative :
                mêler formes et motifs pour un fond de couleur et de contraste unique.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-warm-white p-5 rounded-sm">
                  <p className="font-serif text-lg mb-1">Traditionnelle</p>
                  <p className="text-xs text-taupe">Glycéro, satinée, mate, velours, brillante, laqué</p>
                </div>
                <div className="bg-warm-white p-5 rounded-sm">
                  <p className="font-serif text-lg mb-1">Décorative</p>
                  <p className="text-xs text-taupe">Motifs sur mur, compositions originales, contrastes</p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection variant="fadeRight" delay={0.2} className="lg:order-1">
              <div className="grid grid-cols-2 gap-4">
                <div className="img-reveal rounded-sm overflow-hidden aspect-[3/4]">
                  <img
                    src="/images/peinture/peinture-plafond.jpg"
                    alt="Peinture de plafond"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="img-reveal rounded-sm overflow-hidden aspect-[3/4] mt-8">
                  <img
                    src="/images/peinture/peinture-decorative.jpg"
                    alt="Peinture décorative"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Revêtement mural */}
      <section className="section-padding section-spacing bg-warm-white">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <p className="label-text mb-4">Revêtement mural</p>
            <h2 className="heading-lg mb-4">L'art de l'habillage mural</h2>
            <p className="body-lg max-w-2xl mx-auto">
              Papier peint, toile de verre, revêtement souple — confier la pose à ILEF Peinture,
              c'est la garantie d'un résultat impeccable et durable.
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid md:grid-cols-3 gap-6" staggerDelay={0.12}>
            {[
              {
                src: '/images/revetement-muraux/papier-peint-1.jpg',
                title: 'Papier peint',
                desc: 'Uni ou à motif, lisse ou à reliefs — un revêtement à forte identité avec une excellente longévité.',
              },
              {
                src: '/images/revetement-muraux/revetement-mur-1.jpg',
                title: 'Revêtement souple collé',
                desc: 'Toile de verre texturée en différents grammages, déjà peinte ou à peindre, pour un rendu soigné.',
              },
              {
                src: '/images/revetement-muraux/revetement-mur-12.jpg',
                title: 'Décoration murale',
                desc: 'Poses décoratives sur mesure pour un intérieur qui reflète votre personnalité et vos goûts.',
              },
            ].map((item, i) => (
              <StaggerItem key={i}>
                <div className="group">
                  <div className="img-reveal rounded-sm overflow-hidden aspect-[3/4] mb-5">
                    <img
                      src={item.src}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="font-serif text-xl mb-2">{item.title}</h3>
                  <p className="text-sm text-taupe leading-relaxed">{item.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <AnimatedSection className="mt-12">
            <div className="grid md:grid-cols-4 gap-4">
              {[
                '/images/revetement-muraux/revetement-mur-2.jpg',
                '/images/revetement-muraux/revetement-mur-6.jpg',
                '/images/revetement-muraux/revetement-mur-8.jpg',
                '/images/revetement-muraux/revetement-mur-9.jpg',
              ].map((src, i) => (
                <div key={i} className="img-reveal rounded-sm overflow-hidden aspect-square">
                  <img src={src} alt="Revêtement mural" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Matériaux */}
      <section className="section-padding py-16 md:py-20 bg-anthracite text-center">
        <AnimatedSection>
          <p className="label-text !text-terracotta-light mb-4">Matériaux de qualité</p>
          <h2 className="heading-md text-warm-white mb-4">
            Un large choix de finitions premium
          </h2>
          <p className="text-warm-white/60 max-w-2xl mx-auto mb-8">
            En collaboration avec des partenaires de confiance — Sikkens, Tollens et Isover —
            nous vous proposons des matériaux de qualité pour un travail soigné digne de notre réputation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {['Peinture à l\'eau', 'Peinture à l\'huile', 'Peinture isolante', 'Glycéro', 'Satinée', 'Mate', 'Velours', 'Brillante', 'Laqué'].map((m) => (
              <span key={m} className="px-5 py-2.5 border border-warm-white/15 text-warm-white/70 text-xs tracking-wide rounded-sm">
                {m}
              </span>
            ))}
          </div>
        </AnimatedSection>
      </section>

      {/* CTA */}
      <section className="section-padding py-20 bg-ivory">
        <AnimatedSection className="max-w-3xl mx-auto text-center">
          <h2 className="heading-md mb-4">Redonnez un coup neuf à votre intérieur</h2>
          <p className="body-lg mb-8">
            Offrez à vos pièces de vie une touche de nouveauté et de fraîcheur.
            N'hésitez pas à nous contacter pour votre futur projet de rénovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary">Demander un devis</Link>
            <Link to="/nos-realisations" className="btn-outline">Voir nos réalisations</Link>
          </div>
        </AnimatedSection>
      </section>
    </PageTransition>
  )
}
