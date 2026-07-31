import '../../App.css'
import { skillGroups } from '../../data/skills'

function SkillsPage() {
	return (
		<section className="skills-page">
			<header className="skills-page__header">
				<div>
					<p className="skills-page__eyebrow">What I Bring</p>
					<h1>Skills</h1>
				</div>
				<p className="skills-page__summary">
					I’ve built this toolkit through classes, hands-on projects, and a genuine curiosity about
					how technology can make everyday problems feel simpler.
				</p>
			</header>

			<div className="skills-grid">
				{skillGroups.map((group, groupIndex) => (
					<article className="skill-card" key={group.title}>
						<div className="skill-card__number">0{groupIndex + 1}</div>
						<h2>{group.title}</h2>
						<p>{group.description}</p>
						<ul className="skill-list">
							{group.skills.map((skill, skillIndex) => (
								<li key={skill}>
									<span>{skill}</span>
									<span className="skill-list__track" aria-hidden="true">
										<span style={{ width: `${Math.max(64, 92 - skillIndex * 4)}%` }} />
									</span>
								</li>
							))}
						</ul>
					</article>
				))}
			</div>
		</section>
	)
}

export default SkillsPage
