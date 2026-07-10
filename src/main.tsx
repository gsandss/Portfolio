import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/global.css'
import App from './App.tsx'
import Navbar from './components/Navbar/Navbar.tsx'
import Footer from './components/Footer/Footer.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className="app-shell">
      <Navbar />
      <main className="page-content">
        <App />
      </main>
      <Footer />
    </div>
  </StrictMode>
)
