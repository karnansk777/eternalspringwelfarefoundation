"use client";

import { useState } from "react";
import axios from "axios";
import Link from "next/link";
import "../about/AboutPage.css";
import "../transparency/TransparencyPage.css";
import "./EightyGPage.css";
import { getApiUrl } from "@/lib/api";

const CERT_PDF = "/documents/80g-certificate.pdf";

export default function EightyGCertificatePage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    donationAmount: "",
    transactionId: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

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
    const message = lines.join("\n");
    try {
      await axios.post(getApiUrl("/api/contact"), {
        name: form.name.trim(),
        email: form.email.trim(),
        message,
      });
      setForm({
        name: "",
        email: "",
        phone: "",
        donationAmount: "",
        transactionId: "",
      });
      setSuccess(
        "Thank you. We have received your details. Our team will send your 80G receipt to your email once verified."
      );
    } catch (err) {
      console.error(err);
      alert("Could not submit. Please email info@eternalspringwelfarefoundation.org with your details.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="transparency-page eighty-g-page">
      <header className="about-page-hero">
        <h1>80G Tax Exemption Certificate</h1>
        <p>
          Claim tax benefits on your donation and support a meaningful cause.
        </p>
      </header>

      <div className="transparency-inner">
        <section className="transparency-section" aria-labelledby="eighty-g-intro">
          <h2 id="eighty-g-intro">Tax exemption</h2>
          <p>
            Eternal Spring Welfare Foundation is approved under Section 80G of the Income Tax Act.
            Donations made to our organization are eligible for tax benefits as per applicable laws.
          </p>
        </section>

        <section className="transparency-section" aria-labelledby="eighty-g-details">
          <h2 id="eighty-g-details">Certification details</h2>
          <div className="eighty-g-cert-box">
            <ul className="legal-list">
              <li>
                <strong>Organization name</strong>
                <p className="legal-sub">Eternal Spring Welfare Foundation</p>
              </li>
              <li>
                <strong>PAN</strong>
                <p className="legal-sub">AAJCE4964H</p>
              </li>
              <li>
                <strong>80G registration status</strong>
                <p className="legal-sub">Provisional</p>
              </li>
              <li>
                <strong>Validity</strong>
                <p className="legal-sub">AY 2026–27 to 2028–29</p>
              </li>
            </ul>
          </div>
        </section>

        <section className="transparency-section" aria-labelledby="eighty-g-download">
          <h2 id="eighty-g-download">Download certificate</h2>
          <p>Official PDF for donors and CSR partners.</p>
          <div className="eighty-g-download-actions">
            <a
              className="doc-btn download"
              href={CERT_PDF}
              download
              target="_blank"
              rel="noopener noreferrer"
            >
              Download 80G Certificate (PDF)
            </a>
            <a className="doc-btn view" href={CERT_PDF} target="_blank" rel="noopener noreferrer">
              View Document
            </a>
          </div>
          <p className="eighty-g-upload-hint">
            Upload your official 80G PDF as <code>public/documents/80g-certificate.pdf</code> (see{" "}
            <code>public/documents/README.txt</code>) so this link works on your live site.
          </p>
        </section>

        <section className="transparency-section" aria-labelledby="auto-receipt">
          <h2 id="auto-receipt">After donation</h2>
          <div className="auto-receipt-callout">
            <h3>80G receipt by email</h3>
            <p>
              Your 80G receipt will be shared on your registered email within 24–48 hours.
            </p>
          </div>
        </section>

        <section className="eighty-g-receipt-section" aria-labelledby="receipt-form-heading">
          <h2 id="receipt-form-heading">Enter details to get 80G receipt</h2>
          <p>
            If you donated offline or need to register your details for the receipt, submit the form
            below. We will match your payment and email your certificate.
          </p>

          <form className="eighty-g-form-grid" onSubmit={handleReceiptSubmit}>
            {success && (
              <p className="eighty-g-success" role="status">
                {success}
              </p>
            )}

            <div className="eighty-g-form-row">
              <label className="eighty-g-field">
                <span>Name</span>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  autoComplete="name"
                />
              </label>
              <label className="eighty-g-field">
                <span>Email</span>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  autoComplete="email"
                />
              </label>
            </div>

            <label className="eighty-g-field">
              <span>Phone</span>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                required
                autoComplete="tel"
              />
            </label>

            <div className="eighty-g-form-row">
              <label className="eighty-g-field">
                <span>Donation amount (₹)</span>
                <input
                  type="text"
                  name="donationAmount"
                  value={form.donationAmount}
                  onChange={handleChange}
                  required
                  inputMode="decimal"
                  placeholder="e.g. 5000"
                />
              </label>
              <label className="eighty-g-field">
                <span>Transaction ID</span>
                <input
                  type="text"
                  name="transactionId"
                  value={form.transactionId}
                  onChange={handleChange}
                  required
                  placeholder="UPI / bank reference"
                />
              </label>
            </div>

            <button type="submit" className="eighty-g-submit-btn" disabled={loading}>
              {loading ? "Submitting…" : "Submit"}
            </button>
          </form>
        </section>

        <section className="transparency-section" aria-labelledby="eighty-g-trust">
          <h2 id="eighty-g-trust">Why donors trust us</h2>
          <ul className="trust-line-grid">
            <li>Government-approved certification</li>
            <li>Transparent donation usage</li>
            <li>Eligible for tax exemption</li>
          </ul>
        </section>
      </div>

      <section className="about-page-cta" aria-labelledby="eighty-g-cta">
        <h2 id="eighty-g-cta">Donate &amp; Save Tax While Creating Impact</h2>
        <p>Donations are eligible for tax benefits under Section 80G.</p>
        <div className="about-page-cta-actions">
          <Link href="/donate" className="about-page-cta-donate">
            Donate Now
          </Link>
          <a
            href={CERT_PDF}
            className="about-page-cta-join"
            download
            target="_blank"
            rel="noopener noreferrer"
          >
            Download Certificate
          </a>
        </div>
      </section>
    </main>
  );
}
