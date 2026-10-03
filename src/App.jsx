import { Navigate, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import About from './pages/About'
import Biography from './pages/Biography'
import Contact from './pages/Contact'
import Documents from './pages/Documents'
import Gallery from './pages/Gallery'
import History from './pages/History'
import Home from './pages/Home'
import Memories from './pages/Memories'
import Research from './pages/Research'
import ResearchEntry from './pages/ResearchEntry'
import Testimonials from './pages/Testimonials'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/biografia" element={<Biography />} />
        <Route path="/historia" element={<History />} />
        <Route path="/documentos" element={<Documents />} />
        <Route path="/galeria" element={<Gallery />} />
        <Route path="/investigacion" element={<Research />} />
        <Route path="/investigacion/:slug" element={<ResearchEntry />} />
        <Route path="/proyecto" element={<About />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="/memoria" element={<Memories />} />
        <Route path="/testimonios" element={<Testimonials />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  )
}
