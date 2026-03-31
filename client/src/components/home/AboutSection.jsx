"use client";
import React, { useEffect, useState } from "react";
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

        {/* 🔝 IMAGE SLIDER */}
       

        {/* 📜 CONTENT */}
        <div className="about-flow-content">
          
          <h2 className="about-flow-heading">About Our NGO</h2>

          <p className="about-flow-text">
            Our organization was founded with a simple yet powerful belief — 
            that every individual deserves dignity, opportunity, and hope. 
            Over the years, we have worked tirelessly to uplift underprivileged 
            communities through education, healthcare, and sustainable development initiatives.
          </p>

          <p className="about-flow-text">
            We are not just an NGO; we are a movement driven by compassion and action. 
            From empowering children with education to supporting families with essential 
            resources, every step we take is aimed at building a stronger, more inclusive society.
          </p>

          <p className="about-flow-text">
            Our dedicated volunteers and partners play a vital role in transforming lives. 
            Together, we create real impact by addressing root causes and ensuring long-term change 
            rather than temporary relief.
          </p>
          <button className="hero-xyz-donate-btn">Read More </button>


          {/* 🌍 MISSION */}
          <div className="about-flow-image-wrapper">
          {images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt="NGO Work"
              className={`about-flow-image ${i === index ? "active" : ""}`}
            />
          ))}
        </div>

        </div>

      </div>
    </section>
  );
}