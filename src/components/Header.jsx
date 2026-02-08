import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const navItems = [
  { path: '/', label: 'Home' },
  { path: '/what-we-do', label: 'What We Do' },
  { path: '/products', label: 'Products' },
  { path: '/services', label: 'Services' },
  { path: '/why-ktech', label: 'Why KTECH' },
  { path: '/about-us', label: 'About Us' },
  { path: '/partners-compliance', label: 'Partners & Compliance' },
  { path: '/insights', label: 'Insights' },
  { path: '/contact', label: 'Contact' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  return (
    <header className="header">
      <div className="header__inner container">
        <Link to="/" className="header__brand">
          <span className="header__brand-main">KTECH</span>
          <span className="header__brand-tag">International Energy Brokerage</span>
        </Link>
        <button
          type="button"
          className="header__toggle"
          aria-expanded={menuOpen}
          aria-label="Toggle menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
          <span />
        </button>
        <nav className={`header__nav ${menuOpen ? 'header__nav--open' : ''}`}>
          <ul className="header__list">
            {navItems.map(({ path, label }) => (
              <li key={path}>
                <Link
                  to={path}
                  className={`header__link ${location.pathname === path ? 'header__link--active' : ''}`}
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <style>{`
        .header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 100;
          height: var(--header-height);
          background: var(--color-navy);
          border-bottom: 1px solid rgba(255,255,255,0.06);
        }
        .header__inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 100%;
        }
        .header__brand {
          display: flex;
          flex-direction: column;
          text-decoration: none;
          color: var(--color-white);
        }
        .header__brand-main {
          font-family: var(--font-serif);
          font-size: 1.35rem;
          font-weight: 600;
          letter-spacing: 0.02em;
        }
        .header__brand-tag {
          font-size: 0.7rem;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          opacity: 0.75;
          margin-top: 1px;
        }
        .header__toggle {
          display: none;
          flex-direction: column;
          gap: 5px;
          background: none;
          border: none;
          padding: 8px;
          cursor: pointer;
          color: var(--color-white);
        }
        .header__toggle span {
          display: block;
          width: 22px;
          height: 2px;
          background: currentColor;
        }
        .header__nav .header__list {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-wrap: wrap;
          gap: 0.25rem 1.25rem;
        }
        .header__link {
          color: rgba(255,255,255,0.85);
          font-size: 0.9rem;
          font-weight: 500;
          padding: 0.35rem 0;
        }
        .header__link:hover,
        .header__link--active {
          color: var(--color-accent-light);
        }
        @media (max-width: 900px) {
          .header__toggle { display: flex; }
          .header__nav {
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: var(--color-navy);
            border-bottom: 1px solid rgba(255,255,255,0.06);
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.3s ease;
          }
          .header__nav--open { max-height: 80vh; overflow-y: auto; }
          .header__nav .header__list {
            flex-direction: column;
            padding: 1rem var(--section-padding-x);
            gap: 0;
          }
          .header__nav .header__link { display: block; padding: 0.75rem 0; border-bottom: 1px solid rgba(255,255,255,0.06); }
        }
      `}</style>
    </header>
  )
}
