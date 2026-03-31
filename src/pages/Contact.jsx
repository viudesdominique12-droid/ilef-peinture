import { useState } from 'react'
import { Link } from 'react-router-dom'
import PageTransition from '../components/PageTransition'
import AnimatedSection from '../components/AnimatedSection'

export default function Contact() {
  const [formData, setFormData] = useState({
    nom: '', telephone: '', email: '', objet: '', message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <PageTransition>
      {/* Hero */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 bg-anthracite overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }} />
        </div>
        <div className="relative section-padding max-w-4xl">
          <p className="hero-animate hero-animate-1 label-text !text-terracotta-light mb-4">Parlons de votre projet</p>
          <h1 className="hero-animate hero-animate-2 heading-xl text-warm-white mb-6">
            Nous<br /><span className="italic text-terracotta-light">contacter</span>
          </h1>
          <p className="hero-animate hero-animate-3 text-lg text-warm-white/70 max-w-2xl leading-relaxed">
            ILEF Peinture et Décoration — Prenez rendez-vous avec Walid Benzina,
            peintre en bâtiment et décorateur d'intérieur depuis plus de 17 ans.
          </p>
        </div>
      </section>

      {/* Contact content */}
      <section className="section-padding section-spacing bg-warm-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-16 lg:gap-20">
            {/* Infos */}
            <div className="lg:col-span-2">
              <AnimatedSection>
                <p className="label-text mb-4">Coordonnées</p>
                <h2 className="heading-md mb-8">À votre écoute</h2>

                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-terracotta/10 flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5 text-terracotta" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-anthracite mb-1">Téléphone</p>
                      <a href="tel:0659797855" className="text-terracotta text-lg font-serif hover:underline">06 59 79 78 55</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-terracotta/10 flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5 text-terracotta" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-anthracite mb-1">Email</p>
                      <a href="mailto:walidbenzina80@gmail.com" className="text-taupe hover:text-terracotta transition-colors">walidbenzina80@gmail.com</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-terracotta/10 flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5 text-terracotta" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-anthracite mb-1">Adresse</p>
                      <p className="text-taupe">7 Allée des mécaniciens<br />49800 Trélazé</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-terracotta/10 flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5 text-terracotta" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-anthracite mb-1">Zone d'intervention</p>
                      <p className="text-taupe">Angers et alentours<br />Maine-et-Loire (49)</p>
                    </div>
                  </div>
                </div>

                <div className="mt-10 p-6 bg-ivory rounded-sm">
                  <p className="text-sm text-taupe leading-relaxed">
                    <strong className="text-anthracite">Devis gratuit et sans engagement.</strong><br />
                    Nous vous répondons sous 24 à 48h et intervenons rapidement sur les chantiers une fois le devis validé.
                  </p>
                </div>
              </AnimatedSection>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <AnimatedSection variant="fadeRight" delay={0.15}>
                <div className="bg-ivory p-8 md:p-10 rounded-sm">
                  <h3 className="heading-md mb-2">Demander un devis</h3>
                  <p className="text-sm text-taupe mb-8">Décrivez-nous votre projet, nous vous recontactons rapidement.</p>

                  {submitted ? (
                    <div className="text-center py-12">
                      <div className="w-16 h-16 rounded-full bg-sauge/20 flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-sauge" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                      </div>
                      <h3 className="font-serif text-2xl mb-2">Message envoyé</h3>
                      <p className="text-taupe">Nous vous répondons dans les plus brefs délais.</p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid md:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-xs tracking-widest uppercase text-taupe mb-2">Votre nom *</label>
                          <input type="text" name="nom" required value={formData.nom} onChange={handleChange}
                            className="w-full px-4 py-3.5 bg-warm-white border border-beige/50 rounded-sm text-sm text-anthracite focus:outline-none focus:border-terracotta transition-colors placeholder:text-taupe/40"
                            placeholder="Jean Dupont" />
                        </div>
                        <div>
                          <label className="block text-xs tracking-widest uppercase text-taupe mb-2">Téléphone *</label>
                          <input type="tel" name="telephone" required value={formData.telephone} onChange={handleChange}
                            className="w-full px-4 py-3.5 bg-warm-white border border-beige/50 rounded-sm text-sm text-anthracite focus:outline-none focus:border-terracotta transition-colors placeholder:text-taupe/40"
                            placeholder="06 12 34 56 78" />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs tracking-widest uppercase text-taupe mb-2">Email *</label>
                        <input type="email" name="email" required value={formData.email} onChange={handleChange}
                          className="w-full px-4 py-3.5 bg-warm-white border border-beige/50 rounded-sm text-sm text-anthracite focus:outline-none focus:border-terracotta transition-colors placeholder:text-taupe/40"
                          placeholder="jean@exemple.fr" />
                      </div>

                      <div>
                        <label className="block text-xs tracking-widest uppercase text-taupe mb-2">Objet</label>
                        <select name="objet" value={formData.objet} onChange={handleChange}
                          className="w-full px-4 py-3.5 bg-warm-white border border-beige/50 rounded-sm text-sm text-anthracite focus:outline-none focus:border-terracotta transition-colors">
                          <option value="">Sélectionnez un objet</option>
                          <option value="devis-peinture">Devis peinture intérieure</option>
                          <option value="devis-revetement-mural">Devis revêtement mural</option>
                          <option value="devis-sol">Devis revêtement de sol</option>
                          <option value="devis-global">Devis rénovation complète</option>
                          <option value="information">Demande d'information</option>
                          <option value="autre">Autre</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs tracking-widest uppercase text-taupe mb-2">Votre message *</label>
                        <textarea name="message" required rows={5} value={formData.message} onChange={handleChange}
                          className="w-full px-4 py-3.5 bg-warm-white border border-beige/50 rounded-sm text-sm text-anthracite focus:outline-none focus:border-terracotta transition-colors resize-none placeholder:text-taupe/40"
                          placeholder="Décrivez votre projet : type de travaux, surface, délais souhaités..." />
                      </div>

                      <button type="submit" className="btn-primary w-full justify-center">
                        Envoyer ma demande
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                        </svg>
                      </button>
                    </form>
                  )}
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Zone */}
      <section className="section-padding py-16 bg-ivory">
        <AnimatedSection className="max-w-4xl mx-auto text-center">
          <p className="label-text mb-4">Zone d'intervention</p>
          <h2 className="heading-md mb-4">Angers et tout le Maine-et-Loire</h2>
          <p className="body-lg max-w-2xl mx-auto mb-8">
            Nous intervenons à Trélazé, Angers et dans toutes les communes environnantes
            pour vos travaux de peinture et de revêtement.
          </p>
          <a href="tel:0659797855" className="btn-primary">
            Appelez-nous directement
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
            </svg>
          </a>
        </AnimatedSection>
      </section>
    </PageTransition>
  )
}
