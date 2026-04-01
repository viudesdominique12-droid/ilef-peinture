import { useState } from 'react'
import { Link } from 'react-router-dom'
import PageTransition from '../components/PageTransition'
import AnimatedSection from '../components/AnimatedSection'

export default function Contact() {
  const [formData, setFormData] = useState({ nom: '', telephone: '', type: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value })
  const handleSubmit = (e) => { e.preventDefault(); setSubmitted(true) }

  const inputClass = "w-full px-4 py-3 bg-dark border border-gray-900 rounded-md text-sm text-gray-200 focus:outline-none focus:border-bronze transition-colors placeholder:text-gray-700"

  return (
    <PageTransition>
      <section className="pt-28 pb-10 md:pt-36 md:pb-14 section-padding">
        <div className="max-w-3xl">
          <p className="hero-animate hero-animate-1 label-text mb-3">Parlons de votre projet</p>
          <h1 className="hero-animate hero-animate-2 heading-xl mb-3">
            Nous <span className="italic text-bronze">contacter</span>
          </h1>
          <p className="hero-animate hero-animate-3 body-lg">Devis gratuit sous 48h — intervention rapide.</p>
        </div>
        <div className="glow-line mt-10" />
      </section>

      <section className="section-padding py-12 md:py-20">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-5 gap-10 lg:gap-16">
          <div className="lg:col-span-2">
            <AnimatedSection>
              <div className="space-y-5">
                <a href="tel:0659797855" className="flex items-center gap-3 group">
                  <div className="w-10 h-10 rounded-full bg-bronze/10 flex items-center justify-center shrink-0">
                    <svg className="w-4 h-4 text-bronze" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg>
                  </div>
                  <div>
                    <p className="text-[10px] tracking-[0.2em] uppercase text-gray-500">Téléphone</p>
                    <p className="text-bronze font-serif text-lg group-hover:text-bronze-light transition-colors">06 59 79 78 55</p>
                  </div>
                </a>
                <a href="mailto:walidbenzina80@gmail.com" className="flex items-center gap-3 group">
                  <div className="w-10 h-10 rounded-full bg-bronze/10 flex items-center justify-center shrink-0">
                    <svg className="w-4 h-4 text-bronze" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>
                  </div>
                  <div>
                    <p className="text-[10px] tracking-[0.2em] uppercase text-gray-500">Email</p>
                    <p className="text-sm text-gray-200 group-hover:text-bronze transition-colors">walidbenzina80@gmail.com</p>
                  </div>
                </a>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-bronze/10 flex items-center justify-center shrink-0">
                    <svg className="w-4 h-4 text-bronze" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0zM19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>
                  </div>
                  <div>
                    <p className="text-[10px] tracking-[0.2em] uppercase text-gray-500">Adresse</p>
                    <p className="text-sm text-gray-400">7 Allée des mécaniciens, 49800 Trélazé</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-bronze/10 flex items-center justify-center shrink-0">
                    <svg className="w-4 h-4 text-bronze" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  </div>
                  <div>
                    <p className="text-[10px] tracking-[0.2em] uppercase text-gray-500">Zone</p>
                    <p className="text-sm text-gray-400">Angers et alentours (49)</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>

          <div className="lg:col-span-3">
            <AnimatedSection variant="fadeRight" delay={0.1}>
              <div className="bg-dark-card border border-gray-900 p-6 md:p-8 rounded-lg">
                {submitted ? (
                  <div className="text-center py-8">
                    <div className="w-14 h-14 rounded-full bg-sauge/20 flex items-center justify-center mx-auto mb-3">
                      <svg className="w-7 h-7 text-sauge" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.5 12.75l6 6 9-13.5" /></svg>
                    </div>
                    <h3 className="font-serif text-xl text-white mb-1">Message envoyé</h3>
                    <p className="text-sm text-gray-500">Nous revenons vers vous sous 48h.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[10px] tracking-[0.2em] uppercase text-gray-500 mb-1.5">Nom *</label>
                        <input type="text" name="nom" required value={formData.nom} onChange={handleChange} className={inputClass} placeholder="Jean Dupont" />
                      </div>
                      <div>
                        <label className="block text-[10px] tracking-[0.2em] uppercase text-gray-500 mb-1.5">Téléphone *</label>
                        <input type="tel" name="telephone" required value={formData.telephone} onChange={handleChange} className={inputClass} placeholder="06 12 34 56 78" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-[10px] tracking-[0.2em] uppercase text-gray-500 mb-1.5">Type de travaux</label>
                      <select name="type" value={formData.type} onChange={handleChange} className={inputClass}>
                        <option value="">Sélectionnez</option>
                        <option value="peinture">Peinture intérieure</option>
                        <option value="mural">Revêtement mural</option>
                        <option value="sol">Revêtement de sol</option>
                        <option value="complet">Rénovation complète</option>
                        <option value="autre">Autre</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-[10px] tracking-[0.2em] uppercase text-gray-500 mb-1.5">Message *</label>
                      <textarea name="message" required rows={3} value={formData.message} onChange={handleChange} className={`${inputClass} resize-none`} placeholder="Décrivez votre projet..." />
                    </div>
                    <button type="submit" className="btn-primary w-full">Envoyer ma demande</button>
                  </form>
                )}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </PageTransition>
  )
}
