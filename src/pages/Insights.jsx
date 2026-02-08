import { images } from '../assets/images'

export default function Insights() {
  return (
    <>
      <div className="page-head page-head--with-bg" style={{ backgroundImage: `url(${images.global})` }}>
        <div className="page-head__overlay" aria-hidden="true" />
        <div className="container">
          <h1>Insights & Market Updates</h1>
          <p>Neutral, analytical perspectives on energy trading and petroleum markets</p>
        </div>
      </div>

      <section className="section">
        <div className="container" style={{ maxWidth: '800px' }}>
          <p className="lead">
            This section is reserved for thought leadership and market commentary. Content
            will focus on energy trading practices, petroleum market trends, and industry
            analysis. The tone will remain neutral, analytical, and professional—suitable
            for international buyers, mandated suppliers, and energy industry professionals.
          </p>
          <div className="divider" />
          <h2>Energy Trading Practices</h2>
          <p>
            International physical energy trading relies on clear mandates, verified
            counterparties, and robust documentation. Brokers play a defined role in
            connecting supply and demand while maintaining confidentiality and supporting
            compliance. Best practice includes NCNDA and related frameworks where
            appropriate, and alignment with international standards for specifications and
            contracts.
          </p>
          <h2>Petroleum Market Context</h2>
          <p>
            Global demand for refined products—including diesel (EN590), aviation fuel (Jet A1),
            and fuel oil—continues to drive cross-border trade. Markets remain sensitive to
            geopolitics, refining capacity, and environmental regulation. Sourcing and
            verification through established, compliant channels remain important for both
            buyers and sellers.
          </p>
          <h2>Industry News and Analysis</h2>
          <p>
            Further articles and updates will be added here as appropriate. All content will
            maintain a professional, institutional tone and will avoid promotional language
            or unsubstantiated claims. For specific inquiries regarding supply, mandates, or
            transactions, please use the contact channel.
          </p>
        </div>
      </section>
    </>
  )
}
