export interface Project {
  title: string
  description: string
  tech: string[]
  link: string
}

export const projects: Project[] = [
  {
    title: 'AI Study Assistant',
    description:
      'A web-based assistant that helps students organize notes, summarize content, and explore ideas using AI-driven support.',
    tech: ['React', 'TypeScript', 'OpenAI API'],
    link: '#',
  },
  {
    title: 'Portfolio Website',
    description:
      'A responsive personal portfolio designed to highlight projects, experience, and technical interests with a clean presentation.',
    tech: ['Vite', 'React', 'CSS'],
    link: 'https://github.com/gsandss/Portfolio',
  },
  {
    title: 'Smart Task Dashboard',
    description:
      'A productivity dashboard that organizes tasks, highlights priorities, and helps users stay focused throughout the day.',
    tech: ['React', 'Node.js', 'REST APIs'],
    link: '#',
  },
]
