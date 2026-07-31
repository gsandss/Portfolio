export type SkillGroup = {
	title: string
	description: string
	skills: string[]
}

export const skillGroups: SkillGroup[] = [
	{
		title: 'Languages',
		description: 'The tools I use to turn ideas into reliable software.',
		skills: ['Python', 'JavaScript', 'TypeScript', 'Java', 'C', 'SQL'],
	},
	{
		title: 'AI & Data',
		description: 'Building practical systems that learn from information.',
		skills: ['Machine Learning', 'Data Analysis', 'Natural Language Processing', 'Pandas', 'NumPy'],
	},
	{
		title: 'Web Development',
		description: 'Creating clear, responsive experiences for real people.',
		skills: ['React', 'HTML & CSS', 'REST APIs', 'Responsive Design', 'Git'],
	},
]
