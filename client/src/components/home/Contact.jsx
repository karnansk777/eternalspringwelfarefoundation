"use client";

import { useState } from "react";
import axios from "axios";
import Link from "next/link";
import "../../app/about/AboutPage.css";
import "./Contact.css";
import { getApiUrl } from "@/lib/api";

const MAP_EMBED =
  "https://maps.google.com/maps?q=" +
  encodeURIComponent(
    "36/B, Aswini Nagar, Regent Park, Kolkata, West Bengal 700040"
  ) +
  "&t=&z=15&ie=UTF8&iwloc=&output=embed";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");

    const messageParts = [];
    if (formData.phone.trim()) {
      messageParts.push(`Phone: ${formData.phone.trim()}`);
    }
    if (formData.message.trim()) {
      messageParts.push(formData.message.trim());
    }
    const combinedMessage =
      messageParts.length > 0 ? messageParts.join("\n\n") : "(No message body)";

    try {
      await axios.post(getApiUrl("/api/contact"), {
        name: formData.name,
        email: formData.email,
        message: combinedMessage,
      });

      setSuccess("✅ Message sent successfully!");
      setFormData({ name: "", phone: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
      alert("❌ Failed to send message. Please try again or email us directly.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="contact-page">
      <header className="about-page-hero">
        <h1>Get in Touch</h1>
        <p>
          We would love to hear from you. Reach out to support, volunteer, or partner with us.
        </p>
      </header>

      <div className="contact-page-grid">
        <section className="contact-details-card" aria-labelledby="contact-details-heading">
          <h2 id="contact-details-heading">Contact details</h2>
          <address className="contact-address">
            <strong>Address</strong>
            <br />
            36/B, Aswini Nagar, Regent Park
            <br />
            Kolkata, West Bengal – 700040
          </address>
          <p className="contact-line">
            <a href="tel:8017555155">📞 8017555155</a>
          </p>
          <p className="contact-line">
            <a href="mailto:info@eternalspringwelfarefoundation.org">
              📧 info@eternalspringwelfarefoundation.org
            </a>
          </p>
        </section>

        <section className="contact-form-card" aria-labelledby="send-message-heading">
          <h2 id="send-message-heading">Send Us a Message</h2>

          <form className="contact-form-new" onSubmit={handleSubmit}>
            {success && <p className="contact-success">{success}</p>}

            <label className="contact-field">
              <span>Name</span>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                autoComplete="name"
              />
            </label>

            <label className="contact-field">
              <span>Phone Number</span>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                autoComplete="tel"
              />
            </label>

            <label className="contact-field">
              <span>Email</span>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                autoComplete="email"
              />
            </label>

            <label className="contact-field">
              <span>Message</span>
              <textarea
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
              />
            </label>

            <button type="submit" className="contact-submit-btn" disabled={loading}>
              {loading ? "Sending…" : "👉 Submit"}
            </button>
          </form>
        </section>
      </div>

      <div className="about-page-inner">
        <section className="about-page-section" aria-labelledby="get-involved">
          <h2 id="get-involved">Get involved</h2>
          <p>You can connect with us for:</p>
          <ul className="about-page-mission-list">
            <li>Volunteering opportunities</li>
            <li>Donations and support</li>
            <li>Partnerships &amp; collaborations</li>
            <li>Community programs</li>
          </ul>
          <p className="contact-highlight">
            👉 We welcome individuals, corporates, and organizations to join hands with us.
          </p>
        </section>

        <section className="about-page-section contact-quick" aria-label="Response time">
          <p>
            We aim to respond to all queries as soon as possible.
          </p>
        </section>

        <section className="about-page-section" aria-labelledby="contact-trust">
          <h2 id="contact-trust" className="contact-trust-heading">
            Trust
          </h2>
          <ul className="approach-list">
            <li>Transparent NGO</li>
            <li>12A &amp; 80G Registered</li>
            <li>Community-focused initiatives</li>
          </ul>
        </section>
      </div>

      <section className="contact-map-section" aria-label="Location map">
        <h2 className="contact-map-title">Location</h2>
        <div className="contact-map-frame">
          <iframe
            title="Eternal Spring Welfare Foundation on Google Maps"
            src={MAP_EMBED}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

      <section className="about-page-cta" aria-labelledby="contact-cta">
        <h2 id="contact-cta">Let&apos;s Work Together for a Better Tomorrow</h2>
        <div className="about-page-cta-actions">
          <Link href="/donate" className="about-page-cta-donate">
            ❤️ Donate Now
          </Link>
          <Link href="/volunteer" className="about-page-cta-join">
            🤝 Become a Volunteer
          </Link>
        </div>
      </section>
    </main>
  );
}
