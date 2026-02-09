const LOGO_URL = 'https://approval.konantech.net/assets/images/logo@2x.png'

export default function App() {
  const divisions = [
    {
      id: 'energies',
      name: 'KTECH Energies',
      tagline: 'Energy & Petroleum',
      description: 'International energy brokerage. Reliable access to physical petroleum products worldwide — EN590, Jet A1, Fuel Oil. Secure, compliant transactions.',
      url: 'https://energies.konantech.net',
      icon: '⚡',
    },
    {
      id: 'approval',
      name: 'KTECH Approval',
      tagline: 'Global Equipment & Regulatory',
      description: 'Your one-stop global market partner. Type approval, EMC certification, energy efficiency — regulatory approvals for telecom and radio devices in 180+ countries.',
      url: 'https://approval.konantech.net',
      icon: '✓',
    },
  ]

  return (
    <div className="portal">
      <header className="portal__header">
        <img
          src={LOGO_URL}
          alt="Konan Technologies"
          className="portal__logo"
          onError={(e) => {
            e.target.style.display = 'none'
            const fallback = e.target.nextElementSibling
            if (fallback) fallback.style.display = 'block'
          }}
        />
        <span className="portal__logo-fallback" style={{ display: 'none' }} aria-hidden="true">
          Konan Technologies
        </span>
        <h1 className="portal__title">Konan Technologies</h1>
        <p className="portal__subtitle">Select a division to continue</p>
      </header>

      <main className="portal__main">
        <div className="portal__grid">
          {divisions.map((div) => (
            <a
              key={div.id}
              href={div.url}
              target="_blank"
              rel="noopener noreferrer"
              className="portal__card"
            >
              <span className="portal__card-icon" aria-hidden="true">
                {div.icon}
              </span>
              <h2 className="portal__card-name">{div.name}</h2>
              <p className="portal__card-tagline">{div.tagline}</p>
              <p className="portal__card-desc">{div.description}</p>
              <span className="portal__card-cta">
                Enter {div.name}
                <span className="portal__card-arrow">→</span>
              </span>
            </a>
          ))}
        </div>
      </main>

      <footer className="portal__footer">
        <p>Part of Konan Technologies</p>
      </footer>
    </div>
  )
}
