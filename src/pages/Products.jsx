export default function Products() {
  return (
    <>
      <div className="page-head">
        <div className="container">
          <h1>Products</h1>
          <p>Physical petroleum and refined energy products, sourced and verified to international standards</p>
        </div>
      </div>

      <section className="section" id="en590">
        <div className="container">
          <div className="product-block">
            <h2>EN590 10 ppm</h2>
            <p className="lead">
              Diesel fuel meeting the European EN 590 specification with a maximum sulphur content
              of 10 parts per million (10 ppm). Commonly referred to as Euro 5 diesel, it is
              aligned with stringent environmental and performance standards in the European
              Union and many other markets.
            </p>
            <p>
              KTECH sources EN590 10 ppm through verified suppliers. Product is supplied in
              accordance with applicable international trading standards. Specifications and
              documentation are confirmed on a transaction-by-transaction basis. We do not
              disclose volumes or pricing publicly; all inquiries are handled in confidence
              and subject to standard confidentiality arrangements.
            </p>
          </div>
        </div>
      </section>

      <div className="divider" />
      <section className="section" id="jet-a1">
        <div className="container">
          <div className="product-block">
            <h2>Jet A1 Aviation Fuel</h2>
            <p className="lead">
              Aviation turbine fuel meeting DEF STAN 91-91 and ASTM D1655 specifications. Jet A1
              is the standard fuel for commercial and many military aircraft in most of the world.
            </p>
            <p>
              We facilitate the sourcing and supply of Jet A1 for qualified buyers. Our role
              includes connecting mandated suppliers with buyers, coordinating documentation
              and compliance, and supporting the transaction process. All product is sourced
              through reputable suppliers and aligned with international aviation fuel standards.
              Inquiries are treated with full confidentiality.
            </p>
          </div>
        </div>
      </section>

      <div className="divider" />
      <section className="section" id="fuel-oil">
        <div className="container">
          <div className="product-block">
            <h2>Fuel Oil</h2>
            <p className="lead">
              Residual and distillate fuel oils for industrial, power generation, and marine
              applications. Specifications and grades are matched to buyer requirements and
              applicable international norms.
            </p>
            <p>
              KTECH brokers fuel oil through its network of international suppliers. We assist
              in sourcing, verification, and transaction facilitation. Documentation and
              compliance support are provided in line with our standard processes. Details on
              grades, volumes, and terms are shared only with qualified parties under
              appropriate confidentiality arrangements.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--dark">
        <div className="container" style={{ maxWidth: '720px' }}>
          <h2>Sourcing and Verification</h2>
          <p>
            All products presented by KTECH are sourced through reputable suppliers. We do not
            make guarantees regarding availability or volume; each transaction is subject to
            verification, mandate, and contractual agreement. Certifications and compliance
            documentation are available upon request and in accordance with our compliance
            and confidentiality protocols.
          </p>
        </div>
      </section>

      <style>{`
        .product-block { max-width: 800px; }
        .product-block h2 { margin-bottom: 0.75rem; }
        .product-block .lead { margin-bottom: 1rem; }
      `}</style>
    </>
  )
}
