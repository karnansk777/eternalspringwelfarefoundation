import Link from "next/link";
import "./TransparencyPage.css";

const BADGES = [
  { label: "12A Registered", sub: "Provisional", icon: "✅" },
  { label: "80G Approved",   sub: "Tax Benefit Available", icon: "🏛️" },
  { label: "AAJCE4964H",     sub: "PAN Number", icon: "🪪" },
  { label: "CALE08847G",     sub: "TAN Number", icon: "📋" },
];

const DOCS = [
  { label: "12A Certificate",        desc: "Income Tax registration under Section 12A",  file: "12a-certificate.pdf",  icon: "📜" },
  { label: "80G Certificate",        desc: "Tax exemption certificate for donors",        file: "80g-certificate.pdf",  icon: "🏅" },
  { label: "PAN Card",               desc: "Permanent Account Number document",           file: "pan-card.pdf",         icon: "🪪" },
  { label: "TAN Certificate",        desc: "Tax Deduction Account Number document",       file: "tan-certificate.pdf",  icon: "📋" },
  { label: "NGO Darpan Registration",desc: "Government NGO registration record",          file: "ngo-darpan.pdf",       icon: "📑" },
];

const FINANCIAL_POINTS = [
  "Proper utilization of funds for charitable purposes only",
  "Detailed records maintained for all donations and expenses",
  "Accountability ensured in every initiative we undertake",
  "Annual review of financial activities by our leadership",
];

const ETHICAL_POINTS = [
  "All activities are genuine and aligned with our mission",
  "No funds are used for personal benefit of any individual",
  "We follow all applicable laws and government guidelines",
  "Open to audits and third-party verification at any time",
];

export default function TransparencyPage() {
  return (
    <main className="tp-page">

      {/* ===== HERO ===== */}
      <header className="tp-hero">
        <div className="tp-hero-inner">
          <span className="tp-eyebrow">Our Commitment</span>
          <h1>Transparency &amp; Compliance</h1>
          <p>
            We are committed to transparency, accountability, and ethical practices
            in all our activities — so you can give with full confidence.
          </p>
        </div>
      </header>

      {/* ===== BADGE STRIP ===== */}
      <div className="tp-badge-strip">
        {BADGES.map((b) => (
          <div key={b.label} className="tp-badge">
            <span className="tp-badge-icon">{b.icon}</span>
            <div className="tp-badge-text">
              <strong>{b.label}</strong>
              <span>{b.sub}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="tp-body">

        {/* ===== INTRO ===== */}
        <section className="tp-section" aria-labelledby="tp-about">
          <div className="tp-section-label">About This Page</div>
          <h2 id="tp-about">Why Transparency Matters to Us</h2>
          <p>
            At Eternal Spring Welfare Foundation, trust is the foundation of every meaningful
            contribution. We ensure all our operations are fully compliant with legal requirements
            and that every rupee donated is utilized responsibly toward community development.
          </p>
        </section>

        {/* ===== LEGAL DETAILS ===== */}
        <section className="tp-section" aria-labelledby="tp-legal">
          <div className="tp-section-label">Legal Registration</div>
          <h2 id="tp-legal">Registration Details</h2>
          <p>Eternal Spring Welfare Foundation is a registered non-profit organization in India.</p>
          <div className="tp-legal-grid">
            <div className="tp-legal-card">
              <span className="tp-legal-icon">📄</span>
              <div>
                <strong>12A Registration</strong>
                <p>Provisional — Valid from AY 2026–27 to AY 2028–29</p>
              </div>
            </div>
            <div className="tp-legal-card">
              <span className="tp-legal-icon">🏛️</span>
              <div>
                <strong>80G Certification</strong>
                <p>Provisional — Donations eligible for tax exemption under the Income Tax Act</p>
              </div>
            </div>
            <div className="tp-legal-card">
              <span className="tp-legal-icon">🪪</span>
              <div>
                <strong>PAN Number</strong>
                <p className="tp-code">AAJCE4964H</p>
              </div>
            </div>
            <div className="tp-legal-card">
              <span className="tp-legal-icon">📋</span>
              <div>
                <strong>TAN Number</strong>
                <p className="tp-code">CALE08847G</p>
              </div>
            </div>
          </div>
        </section>

        {/* ===== ADDRESS ===== */}
        <section className="tp-section" aria-labelledby="tp-address">
          <div className="tp-section-label">Location</div>
          <h2 id="tp-address">Registered Address</h2>
          <div className="tp-address-card">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16" className="tp-address-icon">
              <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
            </svg>
            <address className="tp-address">
              36/B, Aswini Nagar, LP 72/8/6<br />
              Regent Park, Kolkata<br />
              West Bengal – 700040
            </address>
          </div>
        </section>

        {/* ===== FINANCIAL & ETHICAL — 2 columns ===== */}
        <div className="tp-two-col">

          <section className="tp-section" aria-labelledby="tp-financial">
            <div className="tp-section-label">Finances</div>
            <h2 id="tp-financial">Financial Transparency</h2>
            <ul className="tp-check-list">
              {FINANCIAL_POINTS.map((p) => (
                <li key={p}><span className="tp-check">✔</span>{p}</li>
              ))}
            </ul>
            <p className="tp-accent">
              Every contribution is used to support real community needs.
            </p>
          </section>

          <section className="tp-section" aria-labelledby="tp-ethical">
            <div className="tp-section-label">Ethics</div>
            <h2 id="tp-ethical">Ethical Commitment</h2>
            <ul className="tp-check-list">
              {ETHICAL_POINTS.map((p) => (
                <li key={p}><span className="tp-check">✔</span>{p}</li>
              ))}
            </ul>
          </section>

        </div>

        {/* ===== DOCUMENTS ===== */}
        <section className="tp-section" aria-labelledby="tp-docs">
          <div className="tp-section-label">Downloads</div>
          <h2 id="tp-docs">Official Documents</h2>
          <p>View or download our official registration and compliance documents below.</p>
          <div className="tp-docs-grid">
            {DOCS.map((doc) => (
              <div key={doc.file} className="tp-doc-card">
                <span className="tp-doc-icon">{doc.icon}</span>
                <div className="tp-doc-info">
                  <strong>{doc.label}</strong>
                  <p>{doc.desc}</p>
                </div>
                <div className="tp-doc-actions">
                  <a href={`/documents/${doc.file}`} target="_blank" rel="noopener noreferrer" className="tp-doc-btn outline">
                    View
                  </a>
                  <a href={`/documents/${doc.file}`} download className="tp-doc-btn filled">
                    Download
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ===== TRUST STATEMENT ===== */}
        <section className="tp-trust-box" aria-labelledby="tp-trust">
          <div className="tp-trust-icon">🤝</div>
          <h2 id="tp-trust">Building Trust Through Transparency</h2>
          <p>
            We aim to build long-term trust with our donors, partners, and supporters by
            maintaining openness and accountability in everything we do.
          </p>
        </section>

      </div>

      {/* ===== CTA ===== */}
      <section className="tp-cta" aria-labelledby="tp-cta-heading">
        <h2 id="tp-cta-heading">Support with Confidence</h2>
        <p>Your donation is safe, transparent, and creates real impact.</p>
        <div className="tp-cta-actions">
          <Link href="/donate" className="tp-cta-btn primary">❤️ Donate Now</Link>
          <Link href="/contact" className="tp-cta-btn outline">🤝 Partner With Us</Link>
        </div>
      </section>

    </main>
  );
}
