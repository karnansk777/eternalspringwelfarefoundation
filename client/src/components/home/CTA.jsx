"use client";
import Link from "next/link";
import "./CTA.css";

export default function SupportSection() {
  return (
    <section className="support-section">
      <div className="container">
        <h2 className="support-title">Be the Reason Someone Smiles Today</h2>
        <p className="support-text">
          Your support can help us reach many more lives.
        </p>
        <div className="support-actions support-actions-row">
          <Link href="/donate" className="btn-contribute">
            ❤️ Donate Now
          </Link>
          <Link href="/volunteer" className="btn-contribute btn-outline">
            🤝 Volunteer
          </Link>
          <Link href="/contact" className="btn-contribute btn-outline">
            🤝 Partner With Us
          </Link>
        </div>
      </div>
    </section>
  );
}
