import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <span className="footer__brand-main">KTECH</span>
          <span className="footer__brand-tag">International Energy Brokerage</span>
          <p className="footer__mission">
            Facilitating trusted energy trade with transparency, professionalism, and speed.
          </p>
        </div>
        <div className="footer__links">
          <h4 className="footer__heading">Navigation</h4>
          <ul>
            <li><Link to="/what-we-do">What We Do</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/why-ktech">Why KTECH</Link></li>
            <li><Link to="/about-us">About Us</Link></li>
            <li><Link to="/partners-compliance">Partners & Compliance</Link></li>
            <li><Link to="/insights">Insights</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        <div className="footer__contact">
          <h4 className="footer__heading">Contact</h4>
          <p>
            <a href="mailto:energies@konantech.net">energies@konantech.net</a>
            <br />
            Cocody, Abidjan, Côte d'Ivoire
          </p>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} KTECH — International Energy Brokerage. All rights reserved.</p>
        </div>
      </div>
      <style>{`
        .footer {
          background: var(--color-navy);
          color: rgba(255,255,255,0.8);
          margin-top: auto;
        }
        .footer__grid {
          display: grid;
          grid-template-columns: 1fr auto auto;
          gap: 3rem;
          padding-top: 3rem;
          padding-bottom: 2rem;
        }
        .footer__brand-main {
          font-family: var(--font-serif);
          font-size: 1.25rem;
          font-weight: 600;
          color: var(--color-white);
          display: block;
        }
        .footer__brand-tag {
          font-size: 0.7rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          opacity: 0.75;
        }
        .footer__mission {
          margin: 1rem 0 0;
          font-size: 0.9rem;
          max-width: 280px;
          line-height: 1.55;
        }
        .footer__heading {
          font-family: var(--font-sans);
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--color-accent-light);
          margin: 0 0 0.75rem;
        }
        .footer__links ul, .footer__contact p { margin: 0; }
        .footer__links li { list-style: none; margin-bottom: 0.4rem; }
        .footer__links a, .footer__contact a {
          color: rgba(255,255,255,0.85);
          font-size: 0.9rem;
        }
        .footer__links a:hover, .footer__contact a:hover { color: var(--color-accent-light); }
        .footer__bottom {
          border-top: 1px solid rgba(255,255,255,0.08);
          padding: 1rem var(--section-padding-x);
        }
        .footer__bottom p {
          margin: 0;
          font-size: 0.85rem;
          opacity: 0.7;
        }
        @media (max-width: 768px) {
          .footer__grid { grid-template-columns: 1fr; gap: 2rem; }
        }
      `}</style>
    </footer>
  )
}
