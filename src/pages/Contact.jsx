import { useState } from 'react'
import { images } from '../assets/images'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    const action = form.action
    // Replace YOUR_FORM_ID in the form action with your Formspree form ID for real submissions.
    if (action && action.includes('YOUR_FORM_ID')) {
      setSubmitted(true)
      return
    }
    fetch(action, {
      method: 'POST',
      body: new FormData(form),
      headers: { Accept: 'application/json' },
    })
      .then(() => setSubmitted(true))
      .catch(() => setSubmitted(false))
  }

  return (
    <>
      <div className="page-head page-head--with-bg" style={{ backgroundImage: `url(${images.office})` }}>
        <div className="page-head__overlay" aria-hidden="true" />
        <div className="container">
          <h1>Contact</h1>
          <p>Secure, confidential communication for energy transaction inquiries</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <h2>Contact Information</h2>
              <p>
                <strong>Email</strong><br />
                <a href="mailto:energies@konantech.net">energies@konantech.net</a>
              </p>
              <p>
                <strong>Location</strong><br />
                Cocody, Abidjan, Côte d'Ivoire
              </p>
              <p>
                <strong>Phone</strong><br />
                Available upon request through secure channels.
              </p>
              <p className="contact-lang">
                Enquiries in English and French welcome.
              </p>
              <div className="contact-notice">
                <p>
                  All inquiries are handled with discretion and confidentiality. We do not
                  share your information with third parties without your consent. For
                  mandates, product sourcing, or transaction facilitation, please use the
                  form or email above.
                </p>
              </div>
            </div>
            <div className="contact-form-wrap">
              <h2>Secure Contact Form</h2>
              <p className="contact-form-intro">
                Use this form to initiate an inquiry. Your message will be treated as
                confidential. We will respond within a reasonable timeframe.
              </p>
              {submitted ? (
                <div className="contact-success">
                  <p>Thank you. Your message has been received. We will respond in confidence.</p>
                </div>
              ) : (
                <form
                  className="contact-form"
                  onSubmit={handleSubmit}
                  action="https://formspree.io/f/YOUR_FORM_ID"
                  method="POST"
                >
                  <label htmlFor="contact-name">Name / Company</label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    required
                    placeholder="Your name or company"
                  />
                  <label htmlFor="contact-email">Email</label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    required
                    placeholder="your@email.com"
                  />
                  <label htmlFor="contact-subject">Subject</label>
                  <input
                    id="contact-subject"
                    type="text"
                    name="_subject"
                    placeholder="e.g. EN590 inquiry, Jet A1 mandate"
                  />
                  <label htmlFor="contact-message">Message</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Please describe your inquiry. All communications are confidential."
                  />
                  <button type="submit" className="btn btn--primary">
                    Send message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          align-items: start;
          max-width: 960px;
        }
        .contact-info h2,
        .contact-form-wrap h2 { margin-bottom: 1rem; }
        .contact-info p { margin: 0 0 1.25rem; }
        .contact-lang {
          margin: 0 0 1rem;
          font-size: 0.9rem;
          color: var(--color-accent);
          font-weight: 500;
        }
        .contact-notice {
          margin-top: 1.5rem;
          padding: 1rem;
          background: var(--color-accent-muted);
          border-left: 3px solid var(--color-accent);
        }
        .contact-notice p { margin: 0; font-size: 0.95rem; }
        .contact-form-intro { margin-bottom: 1.25rem; font-size: 0.95rem; }
        .contact-form label {
          display: block;
          font-size: 0.9rem;
          font-weight: 500;
          margin-bottom: 0.35rem;
          color: var(--color-navy);
        }
        .contact-form input,
        .contact-form textarea {
          width: 100%;
          padding: 0.65rem 0.85rem;
          margin-bottom: 1rem;
          font-family: var(--font-sans);
          font-size: 1rem;
          border: 1px solid #cbd5e0;
          background: var(--color-white);
          color: var(--color-slate);
        }
        .contact-form input:focus,
        .contact-form textarea:focus {
          outline: none;
          border-color: var(--color-accent);
          box-shadow: 0 0 0 2px var(--color-accent-muted);
        }
        .contact-form textarea { resize: vertical; min-height: 120px; }
        .contact-form button { margin-top: 0.5rem; }
        .contact-success {
          padding: 1.5rem;
          background: #f0fff4;
          border: 1px solid #9ae6b4;
          color: #276749;
        }
        .contact-success p { margin: 0; }
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </>
  )
}
