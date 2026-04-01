"use client";
import Link from "next/link";
import "./HomeDonate.css";

export default function HomeDonate() {
  return (
    <section className="home-donate-section" id="donate">
      <div className="home-donate-inner">
        <h2 className="home-donate-title">Make a Difference Today</h2>
        <p className="home-donate-tax-line">
          Donations are eligible for tax benefits under Section 80G.
        </p>
        <p className="home-donate-intro">Your contribution can change lives:</p>
        <ul className="home-donate-list">
          <li>
            <span className="home-donate-heart">❤️</span>
            {"₹100 → Supports basic learning for a child"}
          </li>
          <li>
            <span className="home-donate-heart">💛</span>
            {"₹500 → Helps skill training for youth & women"}
          </li>
          <li>
            <span className="home-donate-heart">💚</span>
            {"₹1000 → Supports community programs"}
          </li>
        </ul>
        <p className="home-donate-note">
          {"👉 Even a small contribution creates real impact"}
        </p>
        <div className="home-donate-actions">
          <Link href="/donate" className="home-donate-btn primary">
            Donate ₹100
          </Link>
          <Link href="/donate" className="home-donate-btn primary">
            Donate ₹500
          </Link>
          <Link href="/donate" className="home-donate-btn outline">
            Donate Custom Amount
          </Link>
        </div>
      </div>
    </section>
  );
}
