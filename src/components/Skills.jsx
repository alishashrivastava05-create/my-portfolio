import './Skills.css'

const skillGroups = [
  {
    category: '🎨 Design Tools',
    skills: ['Figma (Basic)', 'Canva'],
  },
  {
    category: '💻 Technical',
    skills: ['MS Office', 'Internet', 'Email Handling'],
  },
  {
    category: '🤝 Soft Skills',
    skills: ['Communication', 'Teamwork', 'Leadership', 'Adaptability'],
  },
  {
    category: '📋 Other',
    skills: ['Planning & Organization', 'Client Interaction'],
  },
]

function Skills() {
  return (
    <section id="skills" className="section">
      <h2 className="section-title"><span>Skills</span></h2>
      <div className="skills-grid">
        {skillGroups.map(g => (
          <div key={g.category} className="skill-card">
            <h3 className="skill-category">{g.category}</h3>
            <div className="skill-tags">
              {g.skills.map(s => (
                <span key={s} className="skill-tag">{s}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
