import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Servicios from './pages/Servicios'
import Software from './pages/Software'
import Nosotros from './pages/Nosotros'
import Blog from './pages/Blog'
import Contacto from './pages/Contacto'
import AreaClientes from './pages/AreaClientes'

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/software" element={<Software />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/area-clientes" element={<AreaClientes />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}
