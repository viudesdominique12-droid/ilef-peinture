import { Link } from 'react-router-dom'
import PageTransition from '../components/PageTransition'
import AnimatedSection from '../components/AnimatedSection'

const etapes = [
  {
    num: '01',
    title: 'Échange & Analyse du projet',
    desc: 'Nous définissons avec vous le périmètre du projet et le rendu souhaité. Un devis gratuit et détaillé vous est délivré rapidement, reprenant l\'ensemble des travaux nécessaires.',
    image: '/images/chantier/consultation.jpg',
    accent: 'Devis gratuit et sans engagement',
  },
  {
    num: '02',
    title: 'Choix des couleurs et teintes',
    desc: 'Forts de notre expérience, nous vous guidons dans le choix des couleurs, des teintes et des textures pour un résultat en parfaite harmonie avec votre intérieur et vos envies.',
    image: '/images/chantier/choix-couleur.webp',
    accent: 'Conseil personnalisé inclus',
  },
  {
    num: '03',
    title: 'Protection des sols et des espaces',
    desc: 'Avant toute intervention, nous assurons une protection minutieuse de vos sols, meubles et espaces environnants. Un chantier propre est la base d\'un travail soigné.',
    image: '/images/chantier/protection-sol.webp',
    accent: 'Protection intégrale du lieu',
  },
  {
    num: '04',
    title: 'Reprise des murs et ponçage',
    desc: 'Chaque surface est soigneusement inspectée : traitement des fissures, rebouchage, ponçage. Cette étape est essentielle pour garantir un rendu lisse et durable.',
    image: '/images/chantier/reprise-murs.jpg',
    accent: 'Traitement de chaque imperfection',
  },
  {
    num: '05',
    title: 'Préparation des surfaces',
    desc: 'Sous-couche, apprêt, mise à niveau — la préparation méthodique des surfaces assure l\'accroche parfaite de la peinture et la longévité du résultat.',
    image: '/images/chantier/preparation.jpg',
    accent: 'Finition durable garantie',
  },
  {
    num: '06',
    title: 'Travaux de finition',
    desc: 'Application experte de la peinture ou pose du revêtement choisi. Plusieurs couches sont appliquées pour une couleur profonde, homogène et un rendu impeccable.',
    image: '/images/chantier/finition.webp',
    accent: 'Application multi-couches',
  },
  {
    num: '07',
    title: 'Démontage et nettoyage',
    desc: 'Le chantier est intégralement nettoyé et remis en ordre. Nous retirons toutes les protections et laissons votre espace propre et prêt à vivre.',
    image: '/images/chantier/nettoyage.webp',
    accent: 'Espace rendu impeccable',
  },
  {
    num: '08',
    title: 'Validation avec le client',
    desc: 'Nous vérifions ensemble chaque détail du travail réalisé. Votre entière satisfaction est notre priorité avant de considérer le chantier terminé.',
    image: '/images/chantier/validation.webp',
    accent: 'Satisfaction vérifiée ensemble',
  },
]

export default function Chantier() {
  return (
    <PageTransition>
      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/chantier/realise.jpg" alt="Chantier ILEF" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/85 via-charcoal/60 to-charcoal/30" />
        </div>
        <div className="relative section-padding max-w-4xl">
          <p className="hero-animate hero-animate-1 label-text !text-terracotta-light mb-4">Notre méthode</p>
          <h1 className="hero-animate hero-animate-2 heading-xl text-warm-white mb-6">
            Déroulement<br /><span className="italic text-terracotta-light">du chantier</span>
          </h1>
          <p className="hero-animate hero-animate-3 text-lg text-warm-white/70 max-w-2xl leading-relaxed">
            Grâce à nos nombreuses années d'expérience, nous vous proposons un service personnalisé et rapide.
            Chaque étape est essentielle pour garantir un résultat à la hauteur de vos attentes.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="section-padding py-16 md:py-20 bg-ivory">
        <AnimatedSection className="max-w-3xl mx-auto text-center">
          <p className="body-lg">
            Notre entreprise est constituée d'artisans peintres ayant plus de <strong className="text-anthracite">17 ans d'expérience</strong>.
            La réalisation d'un chantier comporte plusieurs étapes, chacune jouant un rôle essentiel pour un résultat impeccable.
          </p>
        </AnimatedSection>
      </section>

      {/* Étapes */}
      <section className="section-padding section-spacing bg-warm-white">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-24 md:space-y-32">
            {etapes.map((etape, i) => (
              <div key={i} className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center`}>
                <AnimatedSection
                  variant={i % 2 === 0 ? 'fadeLeft' : 'fadeRight'}
                  className={i % 2 !== 0 ? 'lg:order-2' : ''}
                >
                  <div className="relative overflow-hidden rounded-sm">
                    <div className="aspect-[4/3] overflow-hidden">
                      <img src={etape.image} alt={etape.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                    </div>
                    <div className="absolute bottom-4 left-4 bg-warm-white/95 backdrop-blur-sm px-4 py-2 rounded-sm">
                      <p className="text-xs tracking-wide text-terracotta font-medium">{etape.accent}</p>
                    </div>
                  </div>
                </AnimatedSection>

                <AnimatedSection
                  variant={i % 2 === 0 ? 'fadeRight' : 'fadeLeft'}
                  delay={0.15}
                  className={i % 2 !== 0 ? 'lg:order-1' : ''}
                >
                  <span className="font-serif text-6xl text-terracotta/15 block mb-2">{etape.num}</span>
                  <h2 className="heading-md mb-4">{etape.title}</h2>
                  <div className="divider-line mb-6" />
                  <p className="body-lg">{etape.desc}</p>
                </AnimatedSection>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding py-20 bg-ivory">
        <AnimatedSection className="max-w-3xl mx-auto text-center">
          <h2 className="heading-md mb-4">Convaincu par notre approche ?</h2>
          <p className="body-lg mb-8">Notre équipe est à votre disposition pour échanger sur vos projets de travaux d'intérieur.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary">Demander un devis gratuit</Link>
            <Link to="/nos-realisations" className="btn-outline">Voir nos réalisations</Link>
          </div>
        </AnimatedSection>
      </section>
    </PageTransition>
  )
}
