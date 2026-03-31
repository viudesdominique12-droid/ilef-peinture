import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Accueil from './pages/Accueil'
import Chantier from './pages/Chantier'
import Peinture from './pages/Peinture'
import Sol from './pages/Sol'
import Realisations from './pages/Realisations'
import Contact from './pages/Contact'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/deroulement-du-chantier" element={<Chantier />} />
        <Route path="/peinture-interieur-et-revetement" element={<Peinture />} />
        <Route path="/revetement-de-sol" element={<Sol />} />
        <Route path="/nos-realisations" element={<Realisations />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Layout>
  )
}

export default App
