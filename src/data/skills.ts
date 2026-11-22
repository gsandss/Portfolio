export const skillGroups = [
  {
    title: 'Languages',
    skills: ['Python', 'Java', 'C', 'JavaScript', 'TypeScript'],
    icon: 'code',
    projectSlug: 'dsa-visualizer',
    example:
      'I used JavaScript and React to show how a sorting algorithm changes an array at each step.',
  },
  {
    title: 'Developer tools',
    skills: ['Git', 'GitHub', 'GitLab', 'NumPy', 'Pandas', 'Matplotlib', 'Flask'],
    icon: 'layers',
    projectSlug: 'ai-code-debugger',
    example:
      'I built a Flask API that takes Python code from the editor and returns output and error explanations.',
  },
] as const
