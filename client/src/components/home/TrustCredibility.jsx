"use client";
import "./TrustCredibility.css";

const points = [
  "12A Registered NGO",
  "Donations are eligible for tax benefits under Section 80G",
  "Transparent & Accountable",
  "Founder-Led Initiative",
];

export default function TrustCredibility() {
  return (
    <section className="trust-section" aria-label="Trust and credibility">
      <div className="trust-inner">
        <h2 className="trust-title">Trust &amp; Credibility</h2>
        <ul className="trust-list">
          {points.map((p) => (
            <li key={p}>
              <span className="trust-check" aria-hidden>
                ✔
              </span>
              {p}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
