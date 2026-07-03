import './About.css'

const details = [
  { label: 'Date of Birth', value: '20 September 2005' },
  { label: 'Location', value: 'Hyderabad, India' },
  { label: 'Languages', value: 'English, Hindi, Telugu' },
  { label: 'Education', value: 'BCA' },
]

function About() {
  return (
    <section id="about" className="section about-section">
      <h2 className="section-title"><span>About Me</span></h2>
      <div className="about-grid">
        <div className="about-text">
          <p>
            I'm a passionate BCA student from Hyderabad with a strong interest in UX/UI Design.
            I love crafting clean, intuitive interfaces that make digital experiences enjoyable.
          </p>
          <p>
            With a background in Commerce and now pursuing Computer Applications, I bring a unique
            blend of business understanding and technical skills to every project.
          </p>
          <p>
            Beyond design, I'm an active leader — I've hosted college events as an anchor,
            organized fests, and volunteered at community events.
          </p>
        </div>
        <div className="about-details">
          {details.map(d => (
            <div key={d.label} className="detail-item">
              <span className="detail-label">{d.label}</span>
              <span className="detail-value">{d.value}</span>
            </div>
          ))}
          <a href="#contact" onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }} className="btn-primary" style={{ marginTop: '8px', display: 'inline-block', textAlign: 'center', cursor: 'pointer' }}>
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  )
}

export default About
