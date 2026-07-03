import './Projects.css'

const projects = [
  {
    title: 'Food Delivery App UI',
    type: 'Concept Project',
    desc: 'Designed a mobile app interface using Figma including homepage, menu browsing, and checkout flow.',
    tags: ['Figma', 'Mobile UI', 'UX Design'],
    emoji: '🍔',
  },
  {
    title: 'College Event Website Wireframe',
    type: 'Concept Project',
    desc: 'Created wireframes focusing on event registration and user-friendly navigation.',
    tags: ['Wireframing', 'Figma', 'Web Design'],
    emoji: '🎓',
  },
  {
    title: 'Personal Portfolio Landing Page',
    type: 'Design Project',
    desc: 'Designed a minimal landing page focusing on layout, typography, and responsiveness.',
    tags: ['UI Design', 'Typography', 'Responsive'],
    emoji: '✨',
  },
]

function Projects() {
  return (
    <section id="projects" className="section projects-section">
      <h2 className="section-title"><span>Projects</span></h2>
      <div className="projects-grid">
        {projects.map(p => (
          <div key={p.title} className="project-card">
            <div className="project-emoji">{p.emoji}</div>
            <span className="project-type">{p.type}</span>
            <h3 className="project-title">{p.title}</h3>
            <p className="project-desc">{p.desc}</p>
            <div className="project-tags">
              {p.tags.map(t => <span key={t} className="project-tag">{t}</span>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
