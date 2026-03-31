"use client";
import { useEffect, useState } from "react";
import "./Hero.css";

export default function HeroVideo() {
  const quotes = [
    "Together We Can Change Lives",
    "Support a Child’s Future",
    "Be the Reason Someone Smiles",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % quotes.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero-xyz-section">
      {/* Fullscreen Background Video */}
      <video
        className="hero-xyz-bg-video"
        src="/videos/5889570-hd_1920_1080_25fps.mp4"
        autoPlay
        muted
        loop
      />

      {/* Dark overlay */}
      <div className="hero-xyz-overlay"></div>

      {/* Centered text content */}
      <div className="hero-xyz-center">
        <h1>
          <span className="hero-xyz-highlight">
            {quotes[index].split(" ")[0]}
          </span>
          <span className="hero-xyz-normal">
            {quotes[index].split(" ").slice(1).join(" ")}
          </span>
        </h1>
        <p>Small actions create big impact. Join hands with us</p>
        <div className="hero-xyz-buttons">
          <button className="hero-xyz-donate-btn">Donate Now</button>
          <button className="hero-xyz-join-btn">Join Us</button>
        </div>
      </div>

      {/* Optional floating glow */}
      <div className="hero-xyz-glow red-large"></div>
      <div className="hero-xyz-glow red-small"></div>
    </section>
  );
}