import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './styles/global.css'
import Navbar from './components/Navbar/Navbar.tsx'
import Footer from './components/Footer/Footer.tsx'
import AppRoutes from './routes.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <div className="app-shell">
        <Navbar />
        <main className="page-content">
          <AppRoutes />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  </StrictMode>
)
