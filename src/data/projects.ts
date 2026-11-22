export interface Project {
  slug: string
  title: string
  category: string
  description: string
  tech: string[]
  link?: string
  notes: string[]
}

export const projects: Project[] = [
  {
    slug: 'ai-code-debugger',
    title: 'AI Code Debugger',
    category: 'Applied AI',
    description:
      'Full-stack AI debugging application using Python, a Flask API, and local LLM integration for code analysis.',
    tech: ['Python', 'Flask', 'JavaScript', 'LM Studio', 'HTML & CSS'],
    link: 'https://github.com/gsandss/Code-Debugger',
    notes: [
      'Write and run Python in a browser, inspect the output, and ask a follow-up question about the code.',
      'The JavaScript frontend sends code and questions to a Flask API. A locally hosted model in LM Studio provides the explanation, so the AI workflow can run offline.',
    ],
  },
  {
    slug: 'dsa-visualizer',
    title: 'DSA Visualizer',
    category: 'Algorithms',
    description:
      'An education platform that visualizes key data structures and algorithms. This is a full-stack project built using React and JavaScript.',
    tech: ['React', 'Node.js', 'JavaScript'],
    link: 'https://github.com/gsandss/Data-Structure-Algorithm-Visualization',
    notes: [
      'Follow a sort one operation at a time. Seeing the values move makes comparisons and swaps easier to trace than reading the final array alone.',
      'The Node.js backend generates sorting steps, and the React interface turns those steps into an animation. Sorting implementations include bubble, insertion, selection, merge, and quick sort.',
    ],
  },
  {
    slug: 'portfolio-website',
    title: 'Portfolio Website',
    category: 'Web development',
    description:
      'A responsive personal portfolio designed to highlight projects, experience, and technical interests with a clean presentation.',
    tech: ['React', 'TypeScript', 'Vite', 'CSS'],
    link: 'https://github.com/gsandss/Portfolio',
    notes: [
      'Reusable React components draw on typed project and skill data. Each project has a shareable URL, and the résumé is available as both a web page and a downloadable PDF.',
    ],
  },
  {
    slug: 'notefy',
    title: 'Notefy',
    category: 'Music discovery',
    description:
      'A music discovery web application that helps users explore new artists, songs, and albums. The platform allows users to write reviews, post to community boards, and customize their profile.',
    tech: ['JavaScript', 'JSON', 'Node.js', 'MongoDB'],
    notes: [
      'The discovery experience brings music, reviews, and community boards together. A listener can move from exploring an artist to sharing a review or personalizing a profile.',
    ],
  },
  {
    slug: 'puzzle-game',
    title: 'Puzzle Game',
    category: 'Game development',
    description:
      'A Java-based sliding puzzle game where players rearrange shuffled tiles into their correct order by sliding pieces into the empty space.',
    tech: ['Java', 'OOP', 'Game Logic'],
    notes: [
      'The game uses object-oriented programming to represent the puzzle and its moves. A move changes which tile occupies the empty space as the player works toward the ordered board.',
    ],
  },
  {
    slug: 'sorting-performance',
    title: 'Sorting Algorithm Performance Analysis',
    category: 'Performance analysis',
    description:
      'An application for comparing sorting runtime across multiple datasets. It accepts file input or randomly generated data and exports results to CSV.',
    tech: ['Sorting', 'Data Structures', 'Java'],
    notes: [
      'Generating a dataset or loading one from a file makes it possible to repeat a comparison. Exporting the timing results to CSV keeps them available for analysis after the program finishes.',
    ],
  },
]
