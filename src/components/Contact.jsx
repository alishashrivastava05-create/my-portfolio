import { useEffect, useState } from 'react'
import Swal from 'sweetalert2'
import './Contact.css'

const ACCESS_KEY = '98e4815e-4b1c-490a-93e1-4f6494e09962'

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem('alisha_contact_form')
    if (saved) setFormData(JSON.parse(saved))
  }, [])

  useEffect(() => {
    if (formData.name || formData.email || formData.message)
      localStorage.setItem('alisha_contact_form', JSON.stringify(formData))
  }, [formData])

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value })
  }

  const validate = () => {
    const temp = {}
    if (!formData.name.trim()) temp.name = 'Name is required.'
    if (!formData.email.trim()) temp.email = 'Email is required.'
    else if (!/\S+@\S+\.\S+/.test(formData.email)) temp.email = 'Email is invalid.'
    if (!formData.message.trim()) temp.message = 'Message is required.'
    setErrors(temp)
    return Object.keys(temp).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validate()) return
    setLoading(true)

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ access_key: ACCESS_KEY, ...formData }),
      })
      const data = await res.json()
      if (data.success) {
        Swal.fire({
          title: 'Message Sent! 💖',
          text: "Thanks for reaching out! Alisha will get back to you soon.",
          icon: 'success',
          confirmButtonText: 'OK',
          confirmButtonColor: '#e91e8c',
        }).then(() => {
          setFormData({ name: '', email: '', message: '' })
          setErrors({})
          localStorage.removeItem('alisha_contact_form')
        })
      } else {
        throw new Error('Failed')
      }
    } catch {
      Swal.fire({
        title: 'Oops!',
        text: 'Something went wrong. Please try again.',
        icon: 'error',
        confirmButtonText: 'OK',
        confirmButtonColor: '#e91e8c',
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="section contact-section">
      <h2 className="section-title"><span>Contact Me</span></h2>
      <div className="contact-layout">

        <div className="contact-left">
          <h3>Let's Work Together</h3>
          <p>I'm always open to new opportunities, internships, and collaborations. Feel free to reach out!</p>
          <div className="contact-info">
            <a href="mailto:alishashrivastava05@gmail.com" className="contact-info-item">
              <span className="ci-icon">📧</span>
              <div>
                <span className="ci-label">Email</span>
                <span className="ci-value">alishashrivastava05@gmail.com</span>
              </div>
            </a>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="contact-form" noValidate>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              className={errors.name ? 'input-error' : ''}
            />
            {errors.name && <p className="error-msg">{errors.name}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className={errors.email ? 'input-error' : ''}
            />
            {errors.email && <p className="error-msg">{errors.email}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Enter your message"
              rows={5}
              className={errors.message ? 'input-error' : ''}
            />
            {errors.message && <p className="error-msg">{errors.message}</p>}
          </div>

          <button type="submit" className="btn-primary submit-btn" disabled={loading}>
            {loading ? <span className="spinner" /> : 'Send Message'}
          </button>
        </form>

      </div>
      <footer className="footer">
        <p>© 2026 Alisha Shrivastava. All rights reserved.</p>
      </footer>
    </section>
  )
}

export default Contact
