import Link from "next/link";
import "../about/AboutPage.css";
import "./TransparencyPage.css";

const DOCS = [
  { label: "12A Certificate", file: "12a-certificate.pdf" },
  { label: "80G Certificate", file: "80g-certificate.pdf" },
  { label: "PAN Card", file: "pan-card.pdf" },
  { label: "NGO Darpan Registration", file: "ngo-darpan.pdf" },
];

export default function TransparencyPage() {
  return (
    <main className="transparency-page">
      <header className="about-page-hero">
        <h1>Transparency &amp; Compliance</h1>
        <p>
          We are committed to transparency, accountability, and ethical practices in all our
          activities.
        </p>
      </header>

      <div className="transparency-inner">
        <section className="transparency-section" aria-labelledby="about-transparency">
          <h2 id="about-transparency">About this page</h2>
          <p>
            At Eternal Spring Welfare Foundation, we believe that trust is the foundation of every
            meaningful contribution. We ensure that all our operations are compliant with legal
            requirements and that funds are utilized responsibly.
          </p>
        </section>

        <section className="transparency-section" aria-labelledby="legal-reg">
          <h2 id="legal-reg">Legal registration details</h2>
          <p>
            Eternal Spring Welfare Foundation is a registered non-profit organization in India.
          </p>
          <ul className="legal-list">
            <li>
              <strong>12A Registration (Provisional)</strong>
              <p className="legal-sub">Valid from AY 2026–27 to AY 2028–29</p>
            </li>
            <li>
              <strong>80G Certification (Provisional)</strong>
              <p className="legal-sub">
                Donations are eligible for tax exemption under the Income Tax Act
              </p>
            </li>
            <li>
              <strong>PAN Number:</strong> AAJCE4964H
            </li>
            <li>
              <strong>TAN Number:</strong> CALE08847G
            </li>
          </ul>
        </section>

        <section className="transparency-section" aria-labelledby="reg-address">
          <h2 id="reg-address">Registered address</h2>
          <address className="address-box">
            36/B, Aswini Nagar, LP 72/8/6
            <br />
            Regent Park, Kolkata
            <br />
            West Bengal – 700040
          </address>
        </section>

        <section className="transparency-section" aria-labelledby="financial">
          <h2 id="financial">Financial transparency</h2>
          <p>We are committed to:</p>
          <ul className="about-page-mission-list">
            <li>Proper utilization of funds for charitable purposes</li>
            <li>Maintaining records of all donations and expenses</li>
            <li>Ensuring accountability in every initiative</li>
          </ul>
          <p className="transparency-accent-line">
            👉 Every contribution is used to support real community needs.
          </p>
        </section>

        <section className="transparency-section" aria-labelledby="documents">
          <h2 id="documents">Documents</h2>
          <p>
            View or download official documents. Add your PDF files on the server as{" "}
            <code>/documents/12a-certificate.pdf</code> and the other filenames below (see{" "}
            <code>public/documents/README.txt</code> in the project).
          </p>
          <div className="documents-grid">
            {DOCS.map((doc) => (
              <div key={doc.file} className="doc-row">
                <span className="doc-row-title">{doc.label}</span>
                <div className="doc-row-actions">
                  <a
                    className="doc-btn view"
                    href={`/documents/${doc.file}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Document
                  </a>
                  <a
                    className="doc-btn download"
                    href={`/documents/${doc.file}`}
                    download
                  >
                    Download PDF
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="transparency-section" aria-labelledby="ethical">
          <h2 id="ethical">Ethical commitment</h2>
          <p>We ensure that:</p>
          <ul className="approach-list">
            <li>All activities are genuine and aligned with our mission</li>
            <li>No funds are used for personal benefit</li>
            <li>We follow all applicable laws and guidelines</li>
          </ul>
        </section>

        <section
          className="transparency-section trust-statement-box"
          aria-labelledby="trust-statement"
        >
          <h2 id="trust-statement">Building Trust Through Transparency</h2>
          <p>
            We aim to build long-term trust with our donors, partners, and supporters by maintaining
            openness and accountability in everything we do.
          </p>
        </section>
      </div>

      <section className="about-page-cta" aria-labelledby="transparency-cta">
        <h2 id="transparency-cta">Support with Confidence</h2>
        <p>Your donation is safe, transparent, and impactful.</p>
        <div className="about-page-cta-actions">
          <Link href="/donate" className="about-page-cta-donate">
            ❤️ Donate Now
          </Link>
          <Link href="/contact" className="about-page-cta-join">
            🤝 Partner With Us
          </Link>
        </div>
      </section>
    </main>
  );
}
