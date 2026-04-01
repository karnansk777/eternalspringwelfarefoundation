"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import "./AboutUs.css";

export default function AboutSection() {
  const images = [
    "/images/download (21).jpeg",
    "/images/download (20).jpeg",
    "/images/download (22).jpeg",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="about-flow-section">
      <div className="about-flow-container">
        <div className="about-flow-content">
          <h2 className="about-flow-heading">Who We Are</h2>

          <p className="about-flow-text">
            Eternal Spring Welfare Foundation is a purpose-driven NGO working to create
            sustainable change at the grassroots level. We focus on empowering individuals
            through education, skill development, and awareness programs.
          </p>

          <p className="about-flow-text">
            As a growing organization, we believe that even small efforts can create meaningful
            and lasting impact.
          </p>

          <p className="about-flow-text about-flow-highlight">
            👉 Every step we take is towards a better future.
          </p>

          <Link href="/about" className="hero-xyz-donate-btn about-learn-more">
            → Learn More
          </Link>

          <div className="about-flow-image-wrapper">
            {images.map((img, i) => (
              <img
                key={i}
                src={img}
                alt="Community work"
                className={`about-flow-image ${i === index ? "active" : ""}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
