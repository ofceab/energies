import { images } from '../assets/images'

export default function WhatWeDo() {
  return (
    <>
      <div className="page-head page-head--with-bg" style={{ backgroundImage: `url(${images.refinery})` }}>
        <div className="page-head__overlay" aria-hidden="true" />
        <div className="container">
          <h1>What We Do</h1>
          <p>Strategic intermediary for physical petroleum and refined energy products</p>
        </div>
      </div>

      <section className="section section-with-img">
        <div className="container section-with-img__inner">
          <div className="section-with-img__text">
            <h2>Our Role</h2>
            <p className="lead">
            KTECH operates as an international energy broker: we connect verified suppliers of
            physical petroleum and refined products with qualified buyers. We do not hold
            inventory; we facilitate secure, compliant transactions between parties who have
            been appropriately vetted and mandated.
          </p>
          <p>
            Our role is to reduce friction, ensure documentation and compliance are in order,
            and maintain confidentiality throughout the process. We act in the interests of
            both sides while upholding international trading standards and NCNDA-based
            protocols where applicable.
          </p>
          </div>
          <div className="section-with-img__media">
            <img src={images.handshake} alt="Professional partnership and trusted transactions" loading="lazy" />
          </div>
        </div>
      </section>

      <section className="section section--dark">
        <div className="container">
          <h2>End-to-End Transaction Facilitation</h2>
          <p>
            From initial mandate or inquiry through to coordination and compliance support,
            KTECH provides a structured pathway for energy transactions. We focus on:
          </p>
          <ul className="page-list">
            <li><strong>Verification</strong> — Confirming supplier capability and buyer qualification within our process framework.</li>
            <li><strong>Coordination</strong> — Aligning specifications, documentation, and timelines between buyers and sellers.</li>
            <li><strong>Compliance</strong> — Supporting adherence to international trading standards and contractual requirements.</li>
            <li><strong>Discretion</strong> — Handling all parties’ information with confidentiality and controlled access.</li>
          </ul>
        </div>
      </section>

      <section className="section section-with-img section-with-img--reverse">
        <div className="container section-with-img__inner">
          <div className="section-with-img__media">
            <img src={images.global} alt="Global energy markets and cross-border trade" loading="lazy" />
          </div>
          <div className="section-with-img__text">
          <h2>Markets and Products</h2>
          <p>
            We broker physical products including EN590 10 ppm diesel, Jet A1 aviation fuel,
            and fuel oil. All products are sourced through reputable suppliers and aligned
            with relevant international specifications. Our network spans multiple regions,
            enabling us to support both regional and cross-border energy trade.
          </p>
          <p>
            Whether you are a mandated supplier seeking qualified offtake or a buyer seeking
            verified supply, KTECH provides a professional, institutional interface for
            initiating and progressing transactions in a compliant and confidential manner.
          </p>
          </div>
        </div>
      </section>

      <style>{`
        .page-list {
          list-style: none;
          padding: 0;
          margin: 1.5rem 0 0;
        }
        .page-list li {
          padding: 0.75rem 0;
          border-bottom: 1px solid rgba(255,255,255,0.1);
          padding-left: 1.5rem;
          position: relative;
        }
        .page-list li::before {
          content: '';
          position: absolute;
          left: 0;
          top: 1.1em;
          width: 6px;
          height: 6px;
          background: var(--color-accent-light);
          border-radius: 50%;
        }
      `}</style>
    </>
  )
}
