import { createBrowserRouter } from 'react-router-dom'
import App from './App'
import Layout from './components/Layout'
import ContactPage from './pages/Contact/Contact'
import ProjectsPage from './pages/Projects/projects'
import ProjectDetail from './pages/Projects/ProjectDetail'
import SkillsPage from './pages/Skills/Skills'
import ResumePage from './pages/Resume/Resume'
import NotFound from './pages/NotFound'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <App /> },
      { path: 'projects', element: <ProjectsPage /> },
      { path: 'projects/:slug', element: <ProjectDetail /> },
      { path: 'resume', element: <ResumePage /> },
      { path: 'skills', element: <SkillsPage /> },
      { path: 'contact', element: <ContactPage /> },
      { path: '*', element: <NotFound /> },
    ],
  },
])
