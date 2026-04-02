"use client";

import { useState } from "react";
import axios from "axios";
import Link from "next/link";
import "./EightyGPage.css";
import { getApiUrl } from "@/lib/api";

const CERT_PDF = "/documents/80g-certificate.pdf";

const CERT_DETAILS = [
  { label: "Organization Name", value: "Eternal Spring Welfare Foundation", icon: "🏛️" },
  { label: "PAN Number",         value: "AAJCE4964H",                        icon: "🪪" },
  { label: "80G Status",         value: "Provisional",                        icon: "✅" },
  { label: "Valid For",          value: "AY 2026–27 to AY 2028–29",           icon: "📅" },
];

const TRUST_POINTS = [
  "Government-approved 80G certification",
  "Transparent and accountable donation usage",
  "Eligible for income tax deduction under Section 80G",
  "Official receipt emailed within 24–48 hours",
];

export default function EightyGCertificatePage() {
  const [form, setForm] = useState({
    name: "", email: "", phone: "", donationAmount: "", transactionId: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleReceiptSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");
    const lines = [
      "80G receipt request — details submitted via website",
      `Phone: ${form.phone.trim()}`,
      `Donation amount: ₹${form.donationAmount.trim()}`,
      `Transaction ID: ${form.transactionId.trim()}`,
    ];
    try {
      await axios.post(getApiUrl("/api/contact"), {
        name: form.name.trim(),
        email: form.email.trim(),
        message: lines.join("\n"),
      });
      setForm({ name: "", email: "", phone: "", donationAmount: "", transactionId: "" });
      setSuccess("Thank you! We have received your details. Our team will send your 80G receipt to your email once verified.");
    } catch {
      alert("Could not submit. Please email info@eternalspringwelfarefoundation.org with your details.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="eg-page">

      {/* ===== HERO ===== */}
      <header className="eg-hero">
        <div className="eg-hero-inner">
          <span className="eg-eyebrow">Tax Benefit</span>
          <h1>80G Tax Exemption Certificate</h1>
          <p>
            Donations to Eternal Spring Welfare Foundation are eligible for tax deduction
            under Section 80G of the Income Tax Act, 1961.
          </p>
          <div className="eg-hero-actions">
            <a href={CERT_PDF} download className="eg-hero-btn primary">
              ⬇ Download Certificate
            </a>
            <a href={CERT_PDF} target="_blank" rel="noopener noreferrer" className="eg-hero-btn outline">
              View PDF
            </a>
          </div>
        </div>
      </header>

      <div className="eg-body">

        {/* ===== CERT DETAILS ===== */}
        <section className="eg-section" aria-labelledby="eg-details">
          <div className="eg-section-label">Certification</div>
          <h2 id="eg-details">80G Certificate Details</h2>
          <p>Our provisional 80G certificate entitles donors to claim tax exemptions on their contributions.</p>
          <div className="eg-details-grid">
            {CERT_DETAILS.map((d) => (
              <div className="eg-detail-card" key={d.label}>
                <span className="eg-detail-icon">{d.icon}</span>
                <div>
                  <span className="eg-detail-label">{d.label}</span>
                  <strong className="eg-detail-value">{d.value}</strong>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ===== HOW IT WORKS ===== */}
        <section className="eg-section" aria-labelledby="eg-how">
          <div className="eg-section-label">Process</div>
          <h2 id="eg-how">How to Claim Your Tax Benefit</h2>
          <div className="eg-steps">
            <div className="eg-step">
              <div className="eg-step-num">1</div>
              <div>
                <strong>Make a Donation</strong>
                <p>Donate online or offline to Eternal Spring Welfare Foundation.</p>
              </div>
            </div>
            <div className="eg-step-arrow">→</div>
            <div className="eg-step">
              <div className="eg-step-num">2</div>
              <div>
                <strong>Receive Receipt</strong>
                <p>An 80G receipt will be emailed to you within 24–48 hours.</p>
              </div>
            </div>
            <div className="eg-step-arrow">→</div>
            <div className="eg-step">
              <div className="eg-step-num">3</div>
              <div>
                <strong>File Your Taxes</strong>
                <p>Submit the receipt while filing your Income Tax Return to claim the deduction.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ===== RECEIPT FORM ===== */}
        <section className="eg-form-card" aria-labelledby="eg-form-heading">
          <div className="eg-form-header">
            <div className="eg-section-label">Receipt Request</div>
            <h2 id="eg-form-heading">Request Your 80G Receipt</h2>
            <p>Donated offline or need to register your details? Fill in the form below and we'll send your certificate.</p>
          </div>

          <form className="eg-form" onSubmit={handleReceiptSubmit} noValidate>

            {success && (
              <div className="eg-success" role="status" aria-live="polite">
                <span className="eg-success-icon">✅</span>
                <div>
                  <strong>Request received!</strong>
                  <p>{success}</p>
                </div>
              </div>
            )}

            <div className="eg-row">
              <div className="eg-field">
                <label htmlFor="eg-name">Full Name <span>*</span></label>
                <input id="eg-name" type="text" name="name" value={form.name}
                  onChange={handleChange} required autoComplete="name" placeholder="e.g. Rahul Sharma" />
              </div>
              <div className="eg-field">
                <label htmlFor="eg-email">Email Address <span>*</span></label>
                <input id="eg-email" type="email" name="email" value={form.email}
                  onChange={handleChange} required autoComplete="email" placeholder="you@example.com" />
              </div>
            </div>

            <div className="eg-row">
              <div className="eg-field">
                <label htmlFor="eg-phone">Phone Number <span>*</span></label>
                <input id="eg-phone" type="tel" name="phone" value={form.phone}
                  onChange={handleChange} required autoComplete="tel" placeholder="e.g. 9876543210" />
              </div>
              <div className="eg-field">
                <label htmlFor="eg-amount">Donation Amount (₹) <span>*</span></label>
                <input id="eg-amount" type="text" name="donationAmount" value={form.donationAmount}
                  onChange={handleChange} required inputMode="decimal" placeholder="e.g. 5000" />
              </div>
            </div>

            <div className="eg-field">
              <label htmlFor="eg-txn">Transaction ID <span>*</span></label>
              <input id="eg-txn" type="text" name="transactionId" value={form.transactionId}
                onChange={handleChange} required placeholder="UPI / bank reference number" />
            </div>

            <button type="submit" className="eg-submit-btn" disabled={loading}>
              {loading ? (
                <><span className="eg-spinner" /> Submitting…</>
              ) : (
                "Submit Receipt Request →"
              )}
            </button>

            <p className="eg-form-note">
              We respect your privacy. Your details will only be used to process your 80G receipt.
            </p>
          </form>
        </section>

        {/* ===== TRUST ===== */}
        <section className="eg-trust-box" aria-labelledby="eg-trust">
          <div className="eg-trust-left">
            <span className="eg-trust-icon">🏅</span>
            <h2 id="eg-trust">Why Donors Trust Us</h2>
          </div>
          <ul className="eg-trust-list">
            {TRUST_POINTS.map((p) => (
              <li key={p}><span className="eg-check">✔</span>{p}</li>
            ))}
          </ul>
        </section>

      </div>

      {/* ===== CTA ===== */}
      <section className="eg-cta" aria-labelledby="eg-cta-heading">
        <h2 id="eg-cta-heading">Donate &amp; Save Tax While Creating Impact</h2>
        <p>Your contribution helps communities thrive — and qualifies for a tax deduction under Section 80G.</p>
        <div className="eg-cta-actions">
          <Link href="/donate" className="eg-cta-btn primary">❤️ Donate Now</Link>
          <a href={CERT_PDF} download className="eg-cta-btn outline">⬇ Download Certificate</a>
        </div>
      </section>

    </main>
  );
}
