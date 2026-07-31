export type SkillGroup = {
	title: string
	
	skills: string[]
}

export const skillGroups: SkillGroup[] = [
	{
		title: 'Languages',
		skills: ['Python', 'JavaScript', 'TypeScript', 'Java', 'C', 'SQL'],
	},
	{
		title: 'AI & Data',
		skills: ['Machine Learning', 'Data Analysis', 'Natural Language Processing', 'Pandas', 'NumPy'],
	},
	{
		title: 'Web Development',
		skills: ['React', 'HTML & CSS', 'REST APIs', 'Responsive Design', 'Git'],
	},
]
