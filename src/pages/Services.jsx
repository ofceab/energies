export default function Services() {
  return (
    <>
      <div className="page-head">
        <div className="container">
          <h1>Services</h1>
          <p>Structured support across the energy transaction lifecycle</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <p className="lead" style={{ maxWidth: '720px', marginBottom: '2rem' }}>
            KTECH provides institutional-grade services to buyers and sellers in the physical
            petroleum and refined products space. Our focus is on process, structure, and
            reliability—not marketing. Each service is designed to support compliant,
            confidential, and efficient transactions.
          </p>

          <div className="services-blocks">
            <div className="card services-block">
              <h3>Supplier Mandates</h3>
              <p>
                We work with suppliers who hold formal mandates to represent product. Our process
                ensures that mandates are verified and that we operate within the scope of
                authority granted. This provides buyers with assurance that they are dealing
                with duly authorized supply-side representation.
              </p>
            </div>
            <div className="card services-block">
              <h3>Product Sourcing and Verification</h3>
              <p>
                We assist in identifying and verifying supply for specified products and
                specifications. Sourcing is conducted through our network of international
                suppliers. Verification includes alignment with international standards and
                documentation requirements. We do not guarantee supply; we facilitate
                introduction and verification within our framework.
              </p>
            </div>
            <div className="card services-block">
              <h3>Trading Facilitation</h3>
              <p>
                KTECH facilitates the trading process between buyers and sellers: coordinating
                terms, documentation, and timelines. We act as an intermediary to streamline
                communication and support the progression of transactions in a structured
                manner. All facilitation is conducted with confidentiality and in accordance
                with applicable compliance requirements.
              </p>
            </div>
            <div className="card services-block">
              <h3>Buyer–Seller Coordination</h3>
              <p>
                We coordinate between counterparties to align specifications, delivery
                parameters, and contractual conditions. Our role is to reduce friction and
                ensure that both sides have a clear, consistent understanding of the
                transaction structure. Coordination is maintained throughout the process
                until contractual close, as agreed.
              </p>
            </div>
            <div className="card services-block">
              <h3>Transaction Compliance Support (NCNDA-based)</h3>
              <p>
                Where appropriate, we support transactions under Non-Circumvention,
                Non-Disclosure Agreements (NCNDA) and related confidentiality frameworks.
                We assist parties in understanding and implementing compliance and
                documentation requirements. Compliance support is provided in line with
                international trading practice and our internal standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--dark">
        <div className="container" style={{ maxWidth: '720px' }}>
          <h2>Process and Reliability</h2>
          <p>
            We do not overstate capabilities or make guarantees we cannot support. Our services
            are delivered with consistency and accuracy. Documentation, communication, and
            representation are conducted in a professional manner suitable for international
            buyers, mandated suppliers, financial institutions, and compliance teams.
          </p>
        </div>
      </section>

      <style>{`
        .services-blocks { display: flex; flex-direction: column; gap: 1.5rem; max-width: 800px; }
        .services-block h3 { margin-top: 0; margin-bottom: 0.5rem; }
      `}</style>
    </>
  )
}
