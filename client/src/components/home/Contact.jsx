"use client";

import { useState } from "react";
import axios from "axios";
import Link from "next/link";
import "./Contact.css";
import { getApiUrl } from "@/lib/api";

const MAP_EMBED =
  "https://maps.google.com/maps?q=" +
  encodeURIComponent("36/B, Aswini Nagar, Regent Park, Kolkata, West Bengal 700040") +
  "&t=&z=15&ie=UTF8&iwloc=&output=embed";

const CONTACT_CARDS = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 16 16">
        <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
      </svg>
    ),
    label: "Our Address",
    value: "36/B, Aswini Nagar, LP 72/8/6\nRegent Park, Kolkata\nWest Bengal – 700040",
    href: null,
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 16 16">
        <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328z"/>
      </svg>
    ),
    label: "Phone",
    value: "8017555155",
    href: "tel:8017555155",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 16 16">
        <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
      </svg>
    ),
    label: "Email",
    value: "info@eternalspringwelfarefoundation.org",
    href: "mailto:info@eternalspringwelfarefoundation.org",
  },
];

const INVOLVE_ITEMS = [
  { icon: "🙋", title: "Volunteering",     desc: "Join our programs and give your time to make a difference." },
  { icon: "❤️", title: "Donations",        desc: "Support our initiatives with a one-time or recurring gift." },
  { icon: "🤝", title: "Partnerships",     desc: "Collaborate with us as a corporate or institutional partner." },
  { icon: "🌱", title: "Community Work",   desc: "Participate in our outreach and awareness campaigns." },
];

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", phone: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");
    const parts = [];
    if (formData.phone.trim()) parts.push(`Phone: ${formData.phone.trim()}`);
    if (formData.message.trim()) parts.push(formData.message.trim());
    try {
      await axios.post(getApiUrl("/api/contact"), {
        name: formData.name,
        email: formData.email,
        message: parts.length > 0 ? parts.join("\n\n") : "(No message body)",
      });
      setSuccess("Message sent successfully! We'll get back to you soon.");
      setFormData({ name: "", phone: "", email: "", message: "" });
    } catch {
      alert("Failed to send message. Please try again or email us directly.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="ct-page">

      {/* ===== HERO ===== */}
      <header className="ct-hero">
        <div className="ct-hero-inner">
          <span className="ct-eyebrow">Reach Out</span>
          <h1>Get in Touch</h1>
          <p>
            We would love to hear from you — whether you want to volunteer, donate,
            partner with us, or simply learn more about our work.
          </p>
        </div>
      </header>

      {/* ===== CONTACT CARDS ===== */}
      <div className="ct-cards-strip">
        {CONTACT_CARDS.map((c) => (
          <div className="ct-info-card" key={c.label}>
            <div className="ct-info-icon">{c.icon}</div>
            <div className="ct-info-text">
              <span className="ct-info-label">{c.label}</span>
              {c.href ? (
                <a href={c.href} className="ct-info-value link">
                  {c.value}
                </a>
              ) : (
                <p className="ct-info-value">{c.value}</p>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="ct-body">

        {/* ===== FORM + INVOLVE — 2 COLUMN ===== */}
        <div className="ct-two-col">

          {/* FORM */}
          <section className="ct-form-card" aria-labelledby="ct-form-heading">
            <div className="ct-form-header">
              <div className="ct-section-label">Message Us</div>
              <h2 id="ct-form-heading">Send Us a Message</h2>
              <p>Fill in the form and we'll get back to you within 24–48 hours.</p>
            </div>

            <form className="ct-form" onSubmit={handleSubmit} noValidate>

              {success && (
                <div className="ct-success" role="status" aria-live="polite">
                  <span className="ct-success-icon">✅</span>
                  <div>
                    <strong>Message received!</strong>
                    <p>{success}</p>
                  </div>
                </div>
              )}

              <div className="ct-row">
                <div className="ct-field">
                  <label htmlFor="ct-name">Full Name <span>*</span></label>
                  <input id="ct-name" type="text" name="name" value={formData.name}
                    onChange={handleChange} required autoComplete="name" placeholder="e.g. Riya Sen" />
                </div>
                <div className="ct-field">
                  <label htmlFor="ct-phone">Phone Number</label>
                  <input id="ct-phone" type="tel" name="phone" value={formData.phone}
                    onChange={handleChange} autoComplete="tel" placeholder="e.g. 9876543210" />
                </div>
              </div>

              <div className="ct-field">
                <label htmlFor="ct-email">Email Address <span>*</span></label>
                <input id="ct-email" type="email" name="email" value={formData.email}
                  onChange={handleChange} required autoComplete="email" placeholder="you@example.com" />
              </div>

              <div className="ct-field">
                <label htmlFor="ct-msg">Message <span>*</span></label>
                <textarea id="ct-msg" name="message" value={formData.message}
                  onChange={handleChange} required rows={5}
                  placeholder="Tell us how we can help or how you'd like to get involved…" />
              </div>

              <button type="submit" className="ct-submit-btn" disabled={loading}>
                {loading ? (
                  <><span className="ct-spinner" /> Sending…</>
                ) : (
                  "Send Message →"
                )}
              </button>

              <p className="ct-form-note">
                We respect your privacy. Your details will only be used to respond to your query.
              </p>
            </form>
          </section>

          {/* GET INVOLVED */}
          <aside className="ct-involve">
            <div className="ct-section-label">Connect</div>
            <h2 className="ct-involve-heading">Ways to Get Involved</h2>
            <p className="ct-involve-sub">
              We welcome individuals, corporates, and organizations to join hands with us.
            </p>
            <div className="ct-involve-grid">
              {INVOLVE_ITEMS.map((item) => (
                <div className="ct-involve-card" key={item.title}>
                  <span className="ct-involve-icon">{item.icon}</span>
                  <div>
                    <strong>{item.title}</strong>
                    <p>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="ct-trust-box">
              <div className="ct-trust-row"><span className="ct-check">✔</span> Transparent &amp; accountable NGO</div>
              <div className="ct-trust-row"><span className="ct-check">✔</span> 12A &amp; 80G Registered</div>
              <div className="ct-trust-row"><span className="ct-check">✔</span> Community-focused initiatives</div>
              <div className="ct-trust-row"><span className="ct-check">✔</span> We aim to respond to all queries quickly</div>
            </div>
          </aside>

        </div>

        {/* ===== MAP ===== */}
        <section className="ct-map-section" aria-label="Location map">
          <div className="ct-section-label">Find Us</div>
          <h2 className="ct-map-heading">Our Location</h2>
          <div className="ct-map-frame">
            <iframe
              title="Eternal Spring Welfare Foundation on Google Maps"
              src={MAP_EMBED}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </section>

      </div>

      {/* ===== CTA ===== */}
      <section className="ct-cta" aria-labelledby="ct-cta-heading">
        <h2 id="ct-cta-heading">Let&apos;s Work Together for a Better Tomorrow</h2>
        <p>Your support — in any form — creates real and lasting change in communities.</p>
        <div className="ct-cta-actions">
          <Link href="/donate" className="ct-cta-btn primary">❤️ Donate Now</Link>
          <Link href="/volunteer" className="ct-cta-btn outline">🤝 Become a Volunteer</Link>
        </div>
      </section>

    </main>
  );
}
