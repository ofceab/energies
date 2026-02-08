export default function WhyKtech() {
  return (
    <>
      <div className="page-head">
        <div className="container">
          <h1>Why KTECH</h1>
          <p>Trust, compliance, and professionalism as your intermediary</p>
        </div>
      </div>

      <section className="section">
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2>Why Buyers and Suppliers Work with Brokers</h2>
          <p className="lead">
            In international energy trading, brokers provide a structured link between supply
            and demand. They reduce search and verification costs, facilitate documentation
            and compliance, and maintain confidentiality until parties are ready to engage
            directly. For buyers, a broker can widen access to verified supply. For suppliers,
            a broker can connect with qualified offtake and manage introductions in a
            controlled manner.
          </p>
          <p>
            KTECH operates in this space with a clear mandate: we do not take positions or
            hold inventory. We connect vetted parties and support the transaction process
            with professionalism and discretion.
          </p>
        </div>
      </section>

      <section className="section section--dark">
        <div className="container">
          <h2>Why KTECH Is a Preferred Intermediary</h2>
          <ul className="page-list">
            <li>
              <strong>Discretion</strong> — All inquiries and counterparty information are
              handled in confidence. We do not disclose buyer or supplier details without
              agreement. Communications are conducted with controlled access and
              confidentiality at the core of our process.
            </li>
            <li>
              <strong>Compliance</strong> — We adhere to international trading standards and
              support NCNDA-based and other confidentiality frameworks where applicable.
              Documentation and compliance support are part of our service offering, giving
              parties and their compliance teams reassurance.
            </li>
            <li>
              <strong>Professionalism</strong> — We represent both buyers and sellers with
              accuracy and consistency. Our communication is formal, clear, and suitable for
              institutional and corporate counterparties. We focus on long-term relationships
              rather than one-off transactions.
            </li>
            <li>
              <strong>Verified Networks</strong> — We work with suppliers and buyers who have
              been vetted within our process. We do not guarantee outcomes, but we ensure that
              introductions and facilitation are conducted through a structured, reliable
              framework.
            </li>
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: '720px' }}>
          <h2>Long-Term, Trust-Based Relationships</h2>
          <p>
            KTECH focuses on building lasting relationships across the energy value chain.
            We aim to be the intermediary that buyers and suppliers return to when they need
            secure, compliant, and professional support. Our reputation rests on reliability,
            security, and compliance—values we uphold in every transaction we facilitate.
          </p>
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
