export default function AboutUs() {
  return (
    <>
      <div className="page-head">
        <div className="container">
          <h1>About Us</h1>
          <p>Company vision, leadership, and core values</p>
        </div>
      </div>

      <section className="section">
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2>Company Vision</h2>
          <p className="lead">
            KTECH was established to provide a reliable, professional interface for
            international energy trade. Our vision is to be a trusted intermediary through
            which verified suppliers and qualified buyers can conduct physical petroleum and
            refined product transactions with transparency, compliance, and speed.
          </p>
          <p>
            We do not seek to be the largest or the loudest player in the market. We aim to
            be the one that counterparties rely on for discretion, accuracy, and adherence
            to standards. That approach has guided our development and continues to define
            how we operate.
          </p>
        </div>
      </section>

      <section className="section section--dark">
        <div className="container">
          <h2>Leadership</h2>
          <div className="leadership-block">
            <p className="leadership-name">Parfait KONAN</p>
            <p className="leadership-role">Founder & Managing Director</p>
            <p>
              Parfait KONAN leads KTECH with a focus on institutional standards, client
              confidentiality, and long-term relationships. Under his direction, KTECH
              maintains a compliance-first culture and a clear commitment to transparency
              and professionalism in every transaction we facilitate.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Core Values</h2>
          <div className="values-grid">
            <div className="card">
              <h3>Reliability</h3>
              <p>
                Consistency and accuracy in every deal. We communicate clearly, follow through
                on commitments, and ensure that our representation of both buyers and
                sellers is dependable and factual.
              </p>
            </div>
            <div className="card">
              <h3>Security</h3>
              <p>
                Confidentiality and controlled access to information. We protect counterparty
                data and handle all communications with the discretion required in
                international energy trading.
              </p>
            </div>
            <div className="card">
              <h3>Compliance</h3>
              <p>
                Adherence to international trading standards. We support documentation,
                NCNDA protocols where applicable, and practices that meet the expectations
                of compliance teams and institutional counterparties.
              </p>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .leadership-block { max-width: 640px; }
        .leadership-name {
          font-family: var(--font-serif);
          font-size: 1.35rem;
          font-weight: 600;
          color: var(--color-white);
          margin: 0 0 0.2em;
        }
        .leadership-role {
          font-size: 0.9rem;
          color: var(--color-accent-light);
          margin: 0 0 1rem;
        }
        .values-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 1.5rem;
        }
        .values-grid h3 { margin-top: 0; }
      `}</style>
    </>
  )
}
