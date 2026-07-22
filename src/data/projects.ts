export interface Project {
  title: string
  description: string
  tech: string[]
  link: string
}

export const projects: Project[] = [
  {
    title: 'AI Code Debugger',
    description:
      'Full-Stack AI debugging application using Python, Flask API, and local LLM integration for code analysis',
    tech: ['Python', 'JavaScript', 'CSS', 'HTML', 'Flask'],
    link: 'https://github.com/gsandss/Code-Debugger',
  },
  {
    title: 'Portfolio Website',
    description:
      'A responsive personal portfolio designed to highlight projects, experience, and technical interests with a clean presentation.',
    tech: ['Vite', 'React', 'CSS'],
    link: 'https://github.com/gsandss/Portfolio',
  },
  {
    title: 'DSA Visualizer',
    description:
      'Education platform that visualizes key data structures and algorithms. This is a full stack project built using React and JavaScript.',
    tech: ['React', 'Node.js', 'JavaScript'],
    link: 'https://github.com/gsandss/Data-Structure-Algorithm-Visualization',
  },
  
  {
    title: 'Notefy - Music Discovery Website',
    description:
      'A music discovery web application that helps users explore new artists, songs, albums, etc. The platform allows users to write reviews, post to community boards, and customize their profile.',
    tech: ['JavaScript', 'JSON', 'Node.js', 'MongoDB'],
    link: '',
  },
  
  {
    title: 'Puzzle Game',
    description:
      'Java-based sliding puzzle game where players rearrange shuffled tiles into their correct order by sliding pieces into the empty space. Utilizes object-oriented programming principles and game logic.',
    tech: ['Java', 'OOP', 'Game Logic'],
    link: '',
  },
  {
    title: 'Sorting Algorithm Performance Analysis',
    description:
      'Application to determine runtine efficiency across multiple data sets. Utilizes for user input/output for random generation of data, files, and exportation of result to CSV.',
    tech: ['Sorting', 'Data Structures', 'Java'],
    link: '',
  }


]
