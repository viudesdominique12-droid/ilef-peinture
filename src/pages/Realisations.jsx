import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import PageTransition from '../components/PageTransition'
import AnimatedSection from '../components/AnimatedSection'

const categories = [
  { id: 'all', label: 'Toutes' },
  { id: 'murs', label: 'Peinture des murs' },
  { id: 'revetement-murs', label: 'Revêtement mural' },
  { id: 'revetement-sol', label: 'Revêtement de sol' },
]

const allImages = [
  ...['004_ff9f49c64d24_peinture_mur-1.jpg','008_e5f6e4d4bebf_peinture_mur-12.jpg','012_9503b5caddce_peinture_mur-13.jpg','017_f72615e5047e_peinture_mur-14.jpg','021_7bc23d7d6737_peinture_mur-2.jpg','024_e25dd5d2a5e4_peinture_mur-3.jpg','028_a215addaff05_peinture_mur-4.jpg','032_18cb5814d2ae_peinture_mur-5.jpg','036_b439223cbf85_peinture_mur-6.jpg','040_d4cc56d9fe9c_peinture_mur-7.jpg','044_8c6b0783c7a6_peinture_mur-8.jpg','047_9244b4f16c91_peinture_mur-9.jpg','realise-1.jpg','realise-2.jpg']
    .map(f => ({ src: `/images/realisations/murs/${f}`, category: 'murs' })),
  ...['146_e5e09844e252_revetement_mur-1-1.jpg','148_22e66f7cce74_revetement_mur-10-1.jpg','150_50704d417b7c_revetement_mur-13.jpg','157_120da2f69794_revetement_mur-14.jpg','161_a1d9e67bdc33_revetement_mur-2-1.jpg','163_fc76fd5f5837_revetement_mur-3.jpg','167_29ebe1c0db43_revetement_mur-4.jpg','171_92c31758d3db_revetement_mur-5.jpg','173_2411af31c298_revetement_mur-6-1.jpg','178_521fb18e6258_revetement_mur-7-1.jpg','180_60e54b547bdf_revetement_mur-8-1.jpg','183_25e8a474b9b0_revetement_mur-9-1.jpg']
    .map(f => ({ src: `/images/realisations/revetement-murs/${f}`, category: 'revetement-murs' })),
  ...['065_ad962f0478cf_revetement_de_sol-1.jpg','073_87cf0d2c2c20_revetement_de_sol-11.jpg','076_26a21fb8e054_revetement_de_sol-12.jpg','080_fccb710afba3_revetement_de_sol-13.jpg','084_1fe9f04a7843_revetement_de_sol-14.jpg','091_a92fd1b1a496_revetement_de_sol-16.jpg','095_9d6f1537d0e1_revetement_de_sol-17.jpg','098_741c39c418bc_revetement_de_sol-18.jpg','108_7633b60bce31_revetement_de_sol-20.jpg','112_a57993f1b93c_revetement_de_sol-21.jpg','116_789ed2aca1aa_revetement_de_sol-23.jpg','120_782e0b3b412e_revetement_de_sol-24.jpg','127_c1d091b6c5bc_revetement_de_sol-5.jpg','131_cf949f97d1cd_revetement_de_sol-6.jpg','139_2c8990ed6eb4_revetement_de_sol-8.jpg','142_20344e78b3d5_revetement_de_sol-9.jpg']
    .map(f => ({ src: `/images/realisations/revetement-sol/${f}`, category: 'revetement-sol' })),
]

export default function Realisations() {
  const [activeFilter, setActiveFilter] = useState('all')
  const [lightbox, setLightbox] = useState(null)

  const filtered = useMemo(() => {
    if (activeFilter === 'all') return allImages
    return allImages.filter(img => img.category === activeFilter)
  }, [activeFilter])

  const navigateLightbox = (dir) => {
    if (lightbox === null) return
    setLightbox((lightbox + dir + filtered.length) % filtered.length)
  }

  return (
    <PageTransition>
      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-anthracite">
        <div className="section-padding max-w-4xl">
          <p className="hero-animate hero-animate-1 label-text !text-terracotta-light mb-4">Portfolio</p>
          <h1 className="hero-animate hero-animate-2 heading-xl text-warm-white mb-6">
            Nos<br /><span className="italic text-terracotta-light">réalisations</span>
          </h1>
          <p className="hero-animate hero-animate-3 text-lg text-warm-white/70 max-w-2xl leading-relaxed">
            Des professionnels au service de votre intérieur. Découvrez nos travaux de peinture,
            revêtement mural et revêtement de sol.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="section-padding py-8 bg-ivory sticky top-20 lg:top-24 z-30 border-b border-beige/30">
        <div className="max-w-7xl mx-auto flex flex-wrap gap-3 justify-center">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              className={`px-6 py-2.5 text-xs tracking-widest uppercase font-medium rounded-sm transition-all duration-300 cursor-pointer ${
                activeFilter === cat.id
                  ? 'bg-anthracite text-warm-white'
                  : 'bg-transparent text-taupe hover:text-anthracite border border-beige'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section className="section-padding section-spacing bg-warm-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
            {filtered.map((img, i) => (
              <div
                key={img.src}
                className="gallery-item-enter cursor-pointer group"
                style={{ animationDelay: `${Math.min(i * 0.03, 0.3)}s` }}
                onClick={() => setLightbox(i)}
              >
                <div className="relative overflow-hidden rounded-sm aspect-square">
                  <img
                    src={img.src}
                    alt={`Réalisation ${img.category}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/30 transition-colors duration-500 flex items-center justify-center">
                    <svg className="w-8 h-8 text-warm-white opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-taupe py-20">Aucune réalisation dans cette catégorie.</p>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-charcoal/90 lightbox-overlay flex items-center justify-center p-4 md:p-8"
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-6 right-6 text-warm-white/70 hover:text-warm-white transition-colors z-10 cursor-pointer"
          >
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); navigateLightbox(-1) }}
            className="absolute left-4 md:left-8 text-warm-white/70 hover:text-warm-white transition-colors cursor-pointer"
          >
            <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); navigateLightbox(1) }}
            className="absolute right-4 md:right-8 text-warm-white/70 hover:text-warm-white transition-colors cursor-pointer"
          >
            <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>

          <img
            src={filtered[lightbox]?.src}
            alt="Réalisation"
            className="max-h-[85vh] max-w-[90vw] object-contain rounded-sm"
            onClick={(e) => e.stopPropagation()}
          />

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-warm-white/50 text-xs tracking-widest">
            {lightbox + 1} / {filtered.length}
          </div>
        </div>
      )}

      {/* CTA */}
      <section className="section-padding py-20 bg-ivory">
        <AnimatedSection className="max-w-3xl mx-auto text-center">
          <h2 className="heading-md mb-4">Envie d'un résultat similaire ?</h2>
          <p className="body-lg mb-8">Contactez notre équipe pour des conseils ou plus d'informations sur nos prestations.</p>
          <Link to="/contact" className="btn-primary">
            Demander un devis gratuit
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
            </svg>
          </Link>
        </AnimatedSection>
      </section>
    </PageTransition>
  )
}
