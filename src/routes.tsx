import { Route, Routes } from 'react-router-dom'
import App from './App'
import ContactPage from './pages/Contact/Contact'
import ProjectsPage from './pages/Projects/projects'
import SkillsPage from './pages/Skills/Skills'

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/resume" element={<div className="page-placeholder">Resume page coming soon.</div>} />
      <Route path="/skills" element={<SkillsPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="*" element={<App />} />
    </Routes>
  )
}

export default AppRoutes
