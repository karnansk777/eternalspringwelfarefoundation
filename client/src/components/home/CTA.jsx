"use client";
import React from "react";
import "./CTA.css"; // optional CSS file

export default function SupportSection() {
  return (
    <section className="support-section">
      <div className="container">
        <h2 className="support-title">Be the reason someone gets a better tomorrow</h2>
        <p className="support-text">
          Your support through donations and volunteering helps us scale programs where help is needed most.
        </p>
        <div className="support-actions">
          <a href="/donate"className="btn-contribute">Contribute Today</a>
          {/* <a href="/contact" className="contact-link">Contact Us</a> */}
        </div>
      </div>
    </section>
  );
}