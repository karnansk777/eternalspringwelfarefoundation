"use client";

import { useState, useMemo, useCallback } from "react";
import Link from "next/link";
import "../../app/about/AboutPage.css";
import "./Donate.css";

const PRESETS = [
  { amount: 100, emoji: "❤️", label: "₹100", desc: "Supports basic learning materials for a child" },
  { amount: 500, emoji: "💛", label: "₹500", desc: "Helps skill development for youth and women" },
  { amount: 1000, emoji: "💚", label: "₹1000", desc: "Supports community programs and awareness initiatives" },
];

export default function DonatePage() {
  const [selected, setSelected] = useState(500);
  const [mode, setMode] = useState("preset");
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
      "Add your Razorpay Payment Link in .env as NEXT_PUBLIC_RAZORPAY_PAYMENT_LINK (or connect a backend to create orders for Razorpay Checkout)."
    );
  }, [paymentLink]);

  return (
    <main className="donate-full-page">
      <header className="about-page-hero">
        <h1>Support a Cause. Create Real Impact.</h1>
        <p>
          Your contribution can empower lives, support communities, and create a better future.
        </p>
      </header>

      <div className="about-page-inner">
        <section className="about-page-section" aria-label="Introduction">
          <p>
            At Eternal Spring Welfare Foundation, every donation directly supports our efforts in
            education, skill development, and community upliftment.
          </p>
          <p className="donate-highlight">👉 No amount is small—every contribution matters.</p>
        </section>

        <section className="about-page-section" id="impact-giving" aria-labelledby="choose-giving">
          <h2 id="choose-giving">Choose Your Contribution</h2>
          <p className="donate-section-eyebrow">Impact-based giving</p>

          <div className="donate-amount-grid">
            {PRESETS.map((p) => (
              <button
                key={p.amount}
                type="button"
                className={`donate-amount-card ${mode === "preset" && selected === p.amount ? "active" : ""}`}
                onClick={() => {
                  setMode("preset");
                  setSelected(p.amount);
                }}
              >
                <span className="donate-amount-emoji" aria-hidden>
                  {p.emoji}
                </span>
                <span className="donate-amount-label">{p.label}</span>
                <span className="donate-amount-desc">{p.desc}</span>
              </button>
            ))}

            <button
              type="button"
              className={`donate-amount-card custom ${mode === "custom" ? "active" : ""}`}
              onClick={() => setMode("custom")}
            >
              <span className="donate-amount-emoji" aria-hidden>
                💙
              </span>
              <span className="donate-amount-label">Custom Amount</span>
              <span className="donate-amount-desc">Donate any amount as per your wish</span>
            </button>
          </div>

          {mode === "custom" && (
            <div className="donate-custom-wrap">
              <label htmlFor="custom-amt" className="donate-custom-label">
                Enter amount (₹)
              </label>
              <input
                id="custom-amt"
                type="number"
                min="1"
                step="1"
                className="donate-custom-input"
                placeholder="e.g. 750"
                value={customAmount}
                onChange={(e) => setCustomAmount(e.target.value)}
              />
            </div>
          )}
        </section>

        <section className="about-page-section donate-pay-section" aria-labelledby="make-contribution">
          <h2 id="make-contribution">Make Your Contribution</h2>

          <div className="donate-pay-grid">
            <div className="donate-qr-card">
              <p className="donate-pay-hint">👉 Scan &amp; Pay (UPI / QR Code)</p>
              {!qrLoadFailed && (
                <img
                  src="/images/donation-qr.png"
                  alt="UPI QR code for donations"
                  className="donate-qr-img"
                  onError={() => setQrLoadFailed(true)}
                />
              )}
              {qrLoadFailed && (
                <div className="donate-qr-placeholder" role="img" aria-label="Add UPI QR image">
                  <span>Add your QR image as</span>
                  <code>public/images/donation-qr.png</code>
                </div>
              )}
            </div>

            <div className="donate-online-card">
              <p className="donate-pay-hint">👉 Online Payment (Razorpay)</p>
              <p className="donate-selected-amt">
                {effectiveAmount > 0 ? (
                  <>
                    Selected: <strong>₹{effectiveAmount}</strong>
                  </>
                ) : (
                  "Choose an amount above"
                )}
              </p>
              <button type="button" className="donate-razorpay-btn" onClick={handleRazorpayClick}>
                👉 Donate Now
              </button>
              {!paymentLink && (
                <p className="donate-razorpay-note">
                  Set <code>NEXT_PUBLIC_RAZORPAY_PAYMENT_LINK</code> to your Razorpay Payment Link for
                  one-click checkout.
                </p>
              )}
            </div>
          </div>
          <p className="donate-receipt-note" role="note">
            Your 80G receipt will be shared on your registered email within 24–48 hours.
          </p>
        </section>

        <section className="about-page-section" aria-labelledby="trust-tax">
          <h2 id="trust-tax">Trust &amp; Tax Benefits</h2>
          <ul className="approach-list">
            <li>Donations are eligible for tax benefits under Section 80G</li>
            <li>Registered under 12A</li>
            <li>Transparent and accountable usage of funds</li>
            <li>Founder-led initiative</li>
          </ul>
          <p className="donate-highlight">👉 Your donation is secure and used for genuine social impact.</p>
        </section>

        <section className="about-page-section trust-legal-box" aria-labelledby="transparency">
          <h2 id="transparency">Transparency</h2>
          <p>We are committed to:</p>
          <ul className="about-page-mission-list">
            <li>Ethical use of funds</li>
            <li>Supporting real community needs</li>
            <li>Maintaining transparency in all activities</li>
          </ul>
          <p className="trust-legal-note">
            👉 We ensure your contribution reaches where it is needed the most.
          </p>
        </section>

        <section className="about-page-section donate-emotional" aria-label="Why donate">
          <p>
            A small contribution from you today can bring hope, education, and opportunity to
            someone in need.
          </p>
        </section>
      </div>

      <section className="about-page-cta" aria-labelledby="donate-final-cta">
        <h2 id="donate-final-cta">Be the Reason Someone Smiles Today</h2>
        <div className="about-page-cta-actions">
          <button
            type="button"
            className="about-page-cta-donate"
            onClick={() => {
              setMode("preset");
              setSelected(100);
              document.getElementById("impact-giving")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Donate ₹100
          </button>
          <button
            type="button"
            className="about-page-cta-donate"
            onClick={() => {
              setMode("preset");
              setSelected(500);
              document.getElementById("impact-giving")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Donate ₹500
          </button>
          <button
            type="button"
            className="about-page-cta-join"
            onClick={() => {
              setMode("custom");
              setCustomAmount("");
              document.getElementById("impact-giving")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Donate Custom
          </button>
        </div>
      </section>

      <section className="donate-support-bar" aria-label="Support contact">
        <h2 className="donate-support-title">Have questions or want to contribute offline?</h2>
        <p>
          <a href="tel:8017555155">📞 8017555155</a>
        </p>
        <p>
          <a href="mailto:info@eternalspringwelfarefoundation.org">
            📧 info@eternalspringwelfarefoundation.org
          </a>
        </p>
      </section>
    </main>
  );
}
