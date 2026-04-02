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
    }, 3500);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="about-flow-section">
      <div className="about-flow-container">

        {/* TEXT COLUMN */}
        <div className="about-flow-content">
          <span className="about-flow-eyebrow">Who We Are</span>
          <h2 className="about-flow-heading">
            Creating Lasting Change at the Grassroots Level
          </h2>

          <p className="about-flow-text">
            Eternal Spring Welfare Foundation is a purpose-driven NGO working to create
            sustainable change at the grassroots level. We focus on empowering individuals
            through education, skill development, and awareness programs.
          </p>

          <p className="about-flow-text">
            As a growing organization, we believe that even small efforts can create meaningful
            and lasting impact for the communities we serve.
          </p>

          <p className="about-flow-highlight">
            Every step we take is towards a better future.
          </p>

          <Link href="/about" className="about-learn-more-btn">
            Learn More →
          </Link>
        </div>

        {/* IMAGE COLUMN */}
        <div className="about-flow-image-wrapper">
          {images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt="Community work"
              className={`about-flow-image ${i === index ? "active" : ""}`}
            />
          ))}
          <div className="about-flow-image-dots">
            {images.map((_, i) => (
              <button
                key={i}
                className={`about-dot ${i === index ? "active" : ""}`}
                onClick={() => setIndex(i)}
                aria-label={`Image ${i + 1}`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
