"use client";
import Link from "next/link";
import "./Hero.css";

export default function HeroVideo() {
  return (
    <section className="hero-xyz-section">
      <video
        className="hero-xyz-bg-video"
        src="/videos/5889570-hd_1920_1080_25fps.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      <div className="hero-xyz-overlay"></div>

      <div className="hero-xyz-center">
        <h1 className="hero-final-headline">
          <span className="hero-headline-line hero-xyz-highlight">
            Small Steps Today.
          </span>
          <span className="hero-headline-line hero-xyz-normal">
            Stronger Communities Tomorrow.
          </span>
        </h1>
        <p className="hero-final-sub">
          Eternal Spring Welfare Foundation is committed to empowering underserved communities
          through education, livelihood, and social development initiatives.
        </p>
        <div className="hero-xyz-buttons">
          <Link href="/donate" className="hero-xyz-donate-btn hero-link-btn">
            ❤️ Donate Now
          </Link>
          <Link href="/volunteer" className="hero-xyz-join-btn hero-link-btn">
            🤝 Become a Volunteer
          </Link>
        </div>
        <p className="hero-trust-line">
          Donations are eligible for tax benefits under Section 80G.
        </p>
      </div>

      <div className="hero-xyz-glow red-large"></div>
      <div className="hero-xyz-glow red-small"></div>
    </section>
  );
}
