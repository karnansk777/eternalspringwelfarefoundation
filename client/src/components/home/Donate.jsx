"use client";

import { useState, useMemo, useCallback } from "react";
import Link from "next/link";
import "./Donate.css";

const PRESETS = [
  { amount: 100,  emoji: "📚", label: "₹100",  desc: "Supports basic learning materials for a child" },
  { amount: 500,  emoji: "🌱", label: "₹500",  desc: "Helps skill development for youth and women" },
  { amount: 1000, emoji: "🏥", label: "₹1000", desc: "Supports community programs and awareness" },
  { amount: 0,    emoji: "💙", label: "Custom", desc: "Donate any amount as per your wish" },
];

const IMPACT_STATS = [
  { value: "100+", label: "Lives Reached" },
  { value: "5+",   label: "Active Programs" },
  { value: "80G",  label: "Tax Exemption" },
  { value: "12A",  label: "Registered" },
];

const TRUST_POINTS = [
  "Donations eligible for tax deduction under Section 80G",
  "Organisation registered under Section 12A",
  "Transparent and accountable usage of every rupee",
  "80G receipt sent to your email within 24–48 hours",
];

export default function DonatePage() {
  const [selected, setSelected]       = useState(500);
  const [mode, setMode]               = useState("preset");
  const [customAmount, setCustomAmount] = useState("");
  const [qrLoadFailed, setQrLoadFailed] = useState(false);

  const effectiveAmount = useMemo(() => {
    if (mode === "custom") {
      const n = parseInt(String(customAmount).replace(/\D/g, ""), 10);
      return Number.isFinite(n) && n > 0 ? n : 0;
    }
    return selected;
  }, [mode, selected, customAmount]);

  const paymentLink = process.env.NEXT_PUBLIC_RAZORPAY_PAYMENT_LINK || "";

  const handleRazorpayClick = useCallback(() => {
    if (paymentLink) {
      window.open(paymentLink, "_blank", "noopener,noreferrer");
      return;
    }
    window.alert(
      "Add your Razorpay Payment Link in .env as NEXT_PUBLIC_RAZORPAY_PAYMENT_LINK."
    );
  }, [paymentLink]);

  const scrollToGiving = () =>
    document.getElementById("dn-giving")?.scrollIntoView({ behavior: "smooth" });

  return (
    <main className="dn-page">

      {/* ===== HERO ===== */}
      <header className="dn-hero">
        <div className="dn-hero-inner">
          <span className="dn-eyebrow">Make a Difference</span>
          <h1>Support a Cause.<br />Create Real Impact.</h1>
          <p>
            Your contribution empowers lives, supports communities, and creates
            a better future — every rupee counts.
          </p>
          <div className="dn-hero-actions">
            <button type="button" className="dn-hero-btn primary" onClick={scrollToGiving}>
              ❤️ Donate Now
            </button>
            <Link href="/transparency" className="dn-hero-btn outline">
              View Transparency
            </Link>
          </div>
        </div>
      </header>

      {/* ===== IMPACT STATS ===== */}
      <div className="dn-stats-strip">
        {IMPACT_STATS.map((s) => (
          <div className="dn-stat" key={s.label}>
            <span className="dn-stat-value">{s.value}</span>
            <span className="dn-stat-label">{s.label}</span>
          </div>
        ))}
      </div>

      <div className="dn-body">

        {/* ===== CHOOSE AMOUNT ===== */}
        <section className="dn-section" id="dn-giving" aria-labelledby="dn-giving-heading">
          <div className="dn-section-label">Impact-Based Giving</div>
          <h2 id="dn-giving-heading">Choose Your Contribution</h2>
          <p>Select a preset amount or enter your own. No amount is too small — every contribution matters.</p>

          <div className="dn-amount-grid">
            {PRESETS.map((p) => {
              const isCustomCard = p.amount === 0;
              const isActive = isCustomCard ? mode === "custom" : mode === "preset" && selected === p.amount;
              return (
                <button
                  key={p.label}
                  type="button"
                  className={`dn-amount-card${isActive ? " active" : ""}`}
                  onClick={() => {
                    if (isCustomCard) { setMode("custom"); }
                    else { setMode("preset"); setSelected(p.amount); }
                  }}
                >
                  <span className="dn-amount-emoji" aria-hidden>{p.emoji}</span>
                  <span className="dn-amount-label">{p.label}</span>
                  <span className="dn-amount-desc">{p.desc}</span>
                  {isActive && <span className="dn-amount-check">✔</span>}
                </button>
              );
            })}
          </div>

          {mode === "custom" && (
            <div className="dn-custom-wrap">
              <label htmlFor="dn-custom-amt" className="dn-custom-label">
                Enter amount (₹) <span>*</span>
              </label>
              <input
                id="dn-custom-amt"
                type="number"
                min="1"
                step="1"
                className="dn-custom-input"
                placeholder="e.g. 750"
                value={customAmount}
                onChange={(e) => setCustomAmount(e.target.value)}
              />
            </div>
          )}
        </section>

        {/* ===== PAYMENT ===== */}
        <section className="dn-section dn-pay-section" aria-labelledby="dn-pay-heading">
          <div className="dn-section-label">Payment</div>
          <h2 id="dn-pay-heading">Make Your Contribution</h2>
          <p>Choose UPI/QR scan or pay online via Razorpay — both are safe and instant.</p>

          <div className="dn-pay-grid">

            {/* QR CARD */}
            <div className="dn-pay-card">
              <div className="dn-pay-card-header">
                <div className="dn-pay-badge">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M0 .5A.5.5 0 0 1 .5 0h3a.5.5 0 0 1 0 1H1v2.5a.5.5 0 0 1-1 0v-3zm12 0a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0V1h-2.5a.5.5 0 0 1-.5-.5zM.5 12a.5.5 0 0 1 .5.5V15h2.5a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5zm15 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1 0-1H15v-2.5a.5.5 0 0 1 .5-.5z"/>
                    <path d="M3 3.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2zm0 6a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2zm6-6a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2z"/>
                  </svg>
                  Scan &amp; Pay (UPI)
                </div>
              </div>
              <div className="dn-qr-wrap">
                {!qrLoadFailed ? (
                  <img
                    src="/images/donation-qr.png"
                    alt="UPI QR code for donations"
                    className="dn-qr-img"
                    onError={() => setQrLoadFailed(true)}
                  />
                ) : (
                  <div className="dn-qr-placeholder">
                    <span className="dn-qr-ph-icon">📷</span>
                    <span>Add your QR image as</span>
                    <code>public/images/donation-qr.png</code>
                  </div>
                )}
              </div>
              <p className="dn-qr-note">Open any UPI app, scan the code, and complete your payment.</p>
            </div>

            {/* RAZORPAY CARD */}
            <div className="dn-pay-card">
              <div className="dn-pay-card-header">
                <div className="dn-pay-badge">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v1h14V4a1 1 0 0 0-1-1H2zm13 4H1v5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V7z"/>
                    <path d="M2 10a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-1z"/>
                  </svg>
                  Pay Online (Razorpay)
                </div>
              </div>

              <div className="dn-amount-display">
                {effectiveAmount > 0 ? (
                  <div className="dn-amount-pill">
                    <span className="dn-amount-pill-label">Donating</span>
                    <span className="dn-amount-pill-value">₹{effectiveAmount.toLocaleString("en-IN")}</span>
                  </div>
                ) : (
                  <div className="dn-amount-pill empty">Select an amount above</div>
                )}
              </div>

              <button
                type="button"
                className="dn-razorpay-btn"
                onClick={handleRazorpayClick}
                disabled={effectiveAmount <= 0}
              >
                ❤️ Donate Now
              </button>

              {!paymentLink && (
                <p className="dn-razorpay-note">
                  Set <code>NEXT_PUBLIC_RAZORPAY_PAYMENT_LINK</code> in your <code>.env</code> file to enable one-click checkout.
                </p>
              )}

              <div className="dn-receipt-note">
                <span className="dn-receipt-icon">📧</span>
                Your 80G receipt will be emailed within 24–48 hours of your donation.
              </div>
            </div>

          </div>
        </section>

        {/* ===== TRUST & TAX ===== */}
        <div className="dn-trust-row">

          <section className="dn-section" aria-labelledby="dn-trust-heading">
            <div className="dn-section-label">Trust &amp; Tax</div>
            <h2 id="dn-trust-heading">Why Donate With Us?</h2>
            <ul className="dn-check-list">
              {TRUST_POINTS.map((p) => (
                <li key={p}><span className="dn-check">✔</span>{p}</li>
              ))}
            </ul>
            <Link href="/80g-certificate" className="dn-cert-link">
              View 80G Certificate →
            </Link>
          </section>

          <section className="dn-quote-box" aria-label="Inspiration">
            <div className="dn-quote-icon">💛</div>
            <blockquote className="dn-quote">
              "A small contribution from you today can bring hope, education, and opportunity
              to someone in need."
            </blockquote>
            <p className="dn-quote-sub">— Eternal Spring Welfare Foundation</p>
          </section>

        </div>

      </div>

      {/* ===== CTA ===== */}
      <section className="dn-cta" aria-labelledby="dn-cta-heading">
        <h2 id="dn-cta-heading">Be the Reason Someone Smiles Today</h2>
        <p>Choose an amount and make a difference right now.</p>
        <div className="dn-cta-actions">
          <button type="button" className="dn-cta-btn primary"
            onClick={() => { setMode("preset"); setSelected(100); scrollToGiving(); }}>
            Donate ₹100
          </button>
          <button type="button" className="dn-cta-btn primary"
            onClick={() => { setMode("preset"); setSelected(500); scrollToGiving(); }}>
            Donate ₹500
          </button>
          <button type="button" className="dn-cta-btn outline"
            onClick={() => { setMode("custom"); setCustomAmount(""); scrollToGiving(); }}>
            Custom Amount
          </button>
        </div>
      </section>

      {/* ===== SUPPORT STRIP ===== */}
      <div className="dn-support-strip">
        <div className="dn-support-inner">
          <div className="dn-support-text">
            <h2>Have questions or want to contribute offline?</h2>
            <p>Our team is happy to help you with any queries.</p>
          </div>
          <div className="dn-support-links">
            <a href="tel:8017555155" className="dn-support-btn">
              <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="currentColor" viewBox="0 0 16 16">
                <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328z"/>
              </svg>
              8017555155
            </a>
            <a href="mailto:info@eternalspringwelfarefoundation.org" className="dn-support-btn">
              <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="currentColor" viewBox="0 0 16 16">
                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
              </svg>
              info@eternalspringwelfarefoundation.org
            </a>
          </div>
        </div>
      </div>

    </main>
  );
}
