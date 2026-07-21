import { Route, Routes } from 'react-router-dom'
import App from './App'
import ProjectsPage from './pages/Projects/projects'

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/resume" element={<div className="page-placeholder">Resume page coming soon.</div>} />
      <Route path="/skills" element={<div className="page-placeholder">Skills page coming soon.</div>} />
      <Route path="/contact" element={<div className="page-placeholder">Contact page coming soon.</div>} />
      <Route path="*" element={<App />} />
    </Routes>
  )
}

export default AppRoutes
