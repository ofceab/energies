import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero__content">
          <h1 className="hero__title">International Energy Brokerage</h1>
          <p className="hero__subtitle">Reliable Access to Physical Petroleum Products Worldwide</p>
          <p className="hero__lead">
            KTECH connects verified suppliers with qualified buyers, delivering secure, compliant,
            and efficient energy transactions across global markets.
          </p>
          <div className="hero__trust">
            <span>Compliance-focused</span>
            <span>Verified suppliers</span>
            <span>NCNDA-protected transactions</span>
          </div>
          <Link to="/contact" className="btn btn--primary hero__cta">
            Initiate a Secure Energy Transaction
          </Link>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section__title">What We Do</h2>
          <p className="lead" style={{ maxWidth: '720px', marginBottom: '1.5rem' }}>
            KTECH is an international broker specializing in the sourcing and trading of physical
            petroleum and refined energy products. We act as a strategic intermediary between
            suppliers and buyers, ensuring transparency, verification, and strict adherence to
            international trading standards.
          </p>
          <Link to="/what-we-do" className="btn">Learn more about our role</Link>
        </div>
      </section>

      <section className="section section--dark">
        <div className="container">
          <h2 className="section__title">Products</h2>
          <div className="product-grid">
            <div className="card">
              <h3>EN590 10 ppm</h3>
              <p>Euro 5 specification diesel, aligned with international standards. Sourced and verified through our network of reputable suppliers.</p>
              <Link to="/products#en590">Details</Link>
            </div>
            <div className="card">
              <h3>Jet A1 Aviation Fuel</h3>
              <p>Aviation turbine fuel meeting DEF STAN 91-91 and ASTM D1655. Supplied for commercial and operational aviation needs.</p>
              <Link to="/products#jet-a1">Details</Link>
            </div>
            <div className="card">
              <h3>Fuel Oil</h3>
              <p>Residual and distillate fuel oils for industrial and marine applications. Sourcing and verification in line with market requirements.</p>
              <Link to="/products#fuel-oil">Details</Link>
            </div>
          </div>
          <p style={{ marginTop: '1.5rem', textAlign: 'center' }}>
            <Link to="/products" className="btn">View all products</Link>
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section__title">Services</h2>
          <p className="lead" style={{ maxWidth: '720px', marginBottom: '2rem' }}>
            We provide structured support across the full transaction lifecycle: from supplier
            mandates and product sourcing to buyer–seller coordination and compliance documentation.
          </p>
          <ul className="services-list">
            <li>Supplier mandates</li>
            <li>Product sourcing and verification</li>
            <li>Trading facilitation</li>
            <li>Buyer–seller coordination</li>
            <li>Transaction compliance support (NCNDA-based)</li>
          </ul>
          <Link to="/services" className="btn">Full services overview</Link>
        </div>
      </section>

      <section className="section section--dark">
        <div className="container">
          <h2 className="section__title">Why KTECH</h2>
          <ul className="value-list">
            <li><strong>International brokerage expertise</strong> — experience across global energy markets</li>
            <li><strong>Verified supply chains</strong> — vetted suppliers and transparent sourcing</li>
            <li><strong>Secure and confidential transactions</strong> — discretion and controlled access</li>
            <li><strong>Strict compliance and documentation</strong> — adherence to international trading standards</li>
            <li><strong>Professional representation</strong> — for both buyers and sellers</li>
          </ul>
          <p style={{ marginTop: '1.5rem' }}>
            We focus on building long-term, trust-based relationships across the energy value chain.
          </p>
          <Link to="/why-ktech" className="btn">Why work with us</Link>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 className="section__title">Ready to Engage</h2>
          <p className="lead" style={{ maxWidth: '560px', margin: '0 auto 1.5rem' }}>
            For inquiries regarding supply, mandates, or secure energy transactions, contact us in
            confidence. All communications are handled with discretion.
          </p>
          <Link to="/contact" className="btn btn--primary">Contact KTECH</Link>
        </div>
      </section>

      <style>{`
        .hero {
          min-height: 70vh;
          display: flex;
          align-items: center;
          padding: calc(var(--header-height) + 3rem) var(--section-padding-x) 4rem;
          background: linear-gradient(160deg, var(--color-navy) 0%, var(--color-navy-mid) 50%, #0d1f33 100%);
          color: var(--color-white);
        }
        .hero__content { max-width: 720px; }
        .hero__title {
          font-size: clamp(1.85rem, 4.5vw, 2.75rem);
          color: inherit;
          margin: 0 0 0.35em;
          letter-spacing: 0.02em;
        }
        .hero__subtitle {
          font-family: var(--font-serif);
          font-size: 1.25rem;
          font-weight: 500;
          margin: 0 0 1rem;
          color: var(--color-accent-light);
        }
        .hero__lead {
          font-size: 1.05rem;
          line-height: 1.65;
          opacity: 0.92;
          margin: 0 0 1.5rem;
        }
        .hero__trust {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          margin-bottom: 2rem;
          font-size: 0.9rem;
          color: rgba(255,255,255,0.85);
        }
        .hero__trust span::before { content: '•'; margin-right: 0.5rem; color: var(--color-accent-light); }
        .hero__cta { margin-top: 0.5rem; }
        .section__title { margin-bottom: 1rem; }
        .product-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1.5rem;
        }
        .product-grid .card { background: rgba(255,255,255,0.04); border-color: rgba(255,255,255,0.1); color: inherit; }
        .product-grid .card h3 { color: var(--color-white); }
        .product-grid .card a { color: var(--color-accent-light); }
        .services-list, .value-list {
          list-style: none;
          padding: 0;
          margin: 0 0 1.5rem;
        }
        .services-list li, .value-list li {
          padding: 0.5rem 0;
          border-bottom: 1px solid rgba(255,255,255,0.08);
          padding-left: 1.5rem;
          position: relative;
        }
        .section--dark .services-list li { border-color: rgba(255,255,255,0.08); }
        .services-list li::before, .value-list li::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0.9em;
          width: 6px;
          height: 6px;
          background: var(--color-accent-light);
          border-radius: 50%;
        }
        .value-list { margin-bottom: 1rem; }
        .value-list li { border: none; padding-left: 0; }
        .value-list li::before { display: none; }
      `}</style>
    </>
  )
}
