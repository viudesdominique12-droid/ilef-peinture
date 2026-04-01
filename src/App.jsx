import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Accueil from './pages/Accueil'
import Services from './pages/Services'
import Realisations from './pages/Realisations'
import Contact from './pages/Contact'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/nos-services" element={<Services />} />
        <Route path="/nos-realisations" element={<Realisations />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Layout>
  )
}

export default App
