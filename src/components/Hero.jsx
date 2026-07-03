import { ReactTyped } from 'react-typed'
import './Hero.css'

function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-content">
        <p className="hero-greeting">Hi, I'm</p>
        <h1 className="hero-name">Alisha Shrivastava</h1>
        <h2 className="hero-role">
          I'm a{' '}
          <ReactTyped
            strings={['BCA Student', 'Fresher', 'Designer', 'Team Player']}
            typeSpeed={50}
            backSpeed={40}
            loop
          />
        </h2>
        <p className="hero-bio">
          Motivated and enthusiastic fresher seeking an opportunity to begin a professional career where I can utilize my skills, contribute to organizational growth, and continuously enhance my abilities.
        </p>
        <div className="hero-btns">
          <a href="/Alisha_Resume_Professional.pdf" download="Alisha_Resume_Professional" className="btn-primary">Hire Me</a>
          <button className="btn-outline" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
            View Work
          </button>
        </div>
      </div>
      <div className="hero-avatar">
        <div className="avatar-ring">
          <div className="avatar-initials">AS</div>
        </div>
      </div>
    </section>
  )
}

export default Hero
