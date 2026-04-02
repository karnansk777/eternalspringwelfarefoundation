"use client";

import { useState, useRef, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import "../../app/volunteer/VolunteerPage.css";
import { getApiUrl } from "@/lib/api";

const AREA_OPTIONS = [
  { value: "", label: "Select area of interest" },
  { value: "Education", label: "🎓 Education & Teaching" },
  { value: "Social Work", label: "🤝 Social Work" },
  { value: "Healthcare", label: "🏥 Healthcare Support" },
  { value: "Fundraising", label: "💰 Fundraising" },
  { value: "Digital Support", label: "💻 Digital & Media Support" },
  { value: "Community", label: "🌱 Community Outreach" },
];

const AVAILABILITY_OPTIONS = [
  { value: "", label: "Select availability" },
  { value: "Weekends", label: "Weekends only" },
  { value: "Part-time", label: "Part-time (a few hours/week)" },
  { value: "Full-time", label: "Full-time" },
];

const WHY_ITEMS = [
  { icon: "🌍", title: "Real Impact", desc: "Directly touch lives in underserved communities." },
  { icon: "📈", title: "Grow Yourself", desc: "Gain skills, experience, and a sense of purpose." },
  { icon: "🤝", title: "Great Team", desc: "Work alongside passionate, driven people." },
  { icon: "🏅", title: "Recognition", desc: "Receive a certificate of appreciation for your service." },
];

const OPPORTUNITIES = [
  "Community outreach programs",
  "Teaching & mentoring children",
  "Awareness campaigns",
  "Healthcare camp support",
  "Event & fundraising drives",
  "Social media & digital volunteering",
];

export default function Volunteer() {
  const [formData, setFormData] = useState({
    name: "", phone: "", email: "",
    city: "", areaOfInterest: "", availability: "", message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const successRef = useRef(null);

  useEffect(() => {
    if (success && successRef.current) {
      successRef.current.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  }, [success]);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    const parts = [];
    if (formData.city.trim()) parts.push(`City: ${formData.city.trim()}`);
    if (formData.message.trim()) parts.push(formData.message.trim());

    try {
      await axios.post(getApiUrl("/api/volunteers"), {
        name: formData.name.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim(),
        skills: formData.areaOfInterest,
        availability: formData.availability,
        message: parts.length > 0 ? parts.join("\n\n") : "(No message)",
      });
      setSuccess(true);
      setFormData({ name: "", phone: "", email: "", city: "", areaOfInterest: "", availability: "", message: "" });
    } catch {
      alert("Something went wrong. Please try again or call us at 8017555155.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="vol-page">

      {/* ===== HERO ===== */}
      <header className="vol-hero">
        <div className="vol-hero-inner">
          <span className="vol-hero-eyebrow">Join Our Mission</span>
          <h1>Become a Volunteer</h1>
          <p>
            Your time and skills can transform lives. Join Eternal Spring Welfare Foundation
            and be part of something truly meaningful.
          </p>
          <div className="vol-hero-stats">
            <div className="vol-hero-stat"><span>100+</span><small>Lives Impacted</small></div>
            <div className="vol-hero-stat-sep" />
            <div className="vol-hero-stat"><span>5+</span><small>Programs Running</small></div>
            <div className="vol-hero-stat-sep" />
            <div className="vol-hero-stat"><span>Free</span><small>To Join</small></div>
          </div>
        </div>
      </header>

      {/* ===== MAIN 2-COLUMN ===== */}
      <div className="vol-body">

        {/* LEFT — INFO */}
        <aside className="vol-info">

          {/* Why volunteer */}
          <div className="vol-info-block">
            <h2>Why Volunteer With Us?</h2>
            <div className="vol-why-grid">
              {WHY_ITEMS.map((item) => (
                <div className="vol-why-card" key={item.title}>
                  <span className="vol-why-icon">{item.icon}</span>
                  <div>
                    <strong>{item.title}</strong>
                    <p>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Opportunities */}
          <div className="vol-info-block">
            <h2>Volunteer Opportunities</h2>
            <ul className="vol-opp-list">
              {OPPORTUNITIES.map((o) => (
                <li key={o}>
                  <span className="vol-opp-dot" />
                  {o}
                </li>
              ))}
            </ul>
          </div>

        </aside>

        {/* RIGHT — FORM */}
        <section className="vol-form-wrap" aria-labelledby="vol-form-heading">
          <div className="vol-form-card">
            <div className="vol-form-header">
              <h2 id="vol-form-heading">Apply to Volunteer</h2>
              <p>Fill in the form below and we'll get back to you within 48 hours.</p>
            </div>

            <form className="vol-form" onSubmit={handleSubmit} noValidate>

              {success && (
                <div ref={successRef} className="vol-success" role="status" aria-live="polite">
                  <span className="vol-success-icon">✅</span>
                  <div>
                    <strong>Application received!</strong>
                    <p>Thank you for your interest. Our team will connect with you shortly.</p>
                  </div>
                </div>
              )}

              <div className="vol-row">
                <div className="vol-field">
                  <label htmlFor="vol-name">Full Name <span>*</span></label>
                  <input id="vol-name" type="text" name="name" value={formData.name}
                    onChange={handleChange} required autoComplete="name" placeholder="e.g. Riya Sen" />
                </div>
                <div className="vol-field">
                  <label htmlFor="vol-phone">Phone Number <span>*</span></label>
                  <input id="vol-phone" type="tel" name="phone" value={formData.phone}
                    onChange={handleChange} required autoComplete="tel" placeholder="e.g. 9876543210" />
                </div>
              </div>

              <div className="vol-row">
                <div className="vol-field">
                  <label htmlFor="vol-email">Email Address <span>*</span></label>
                  <input id="vol-email" type="email" name="email" value={formData.email}
                    onChange={handleChange} required autoComplete="email" placeholder="you@example.com" />
                </div>
                <div className="vol-field">
                  <label htmlFor="vol-city">City <span>*</span></label>
                  <input id="vol-city" type="text" name="city" value={formData.city}
                    onChange={handleChange} required placeholder="e.g. Kolkata" />
                </div>
              </div>

              <div className="vol-row">
                <div className="vol-field">
                  <label htmlFor="vol-area">Area of Interest <span>*</span></label>
                  <select id="vol-area" name="areaOfInterest" value={formData.areaOfInterest}
                    onChange={handleChange} required>
                    {AREA_OPTIONS.map((o) => (
                      <option key={o.value || "empty"} value={o.value}>{o.label}</option>
                    ))}
                  </select>
                </div>
                <div className="vol-field">
                  <label htmlFor="vol-avail">Availability <span>*</span></label>
                  <select id="vol-avail" name="availability" value={formData.availability}
                    onChange={handleChange} required>
                    {AVAILABILITY_OPTIONS.map((o) => (
                      <option key={o.value || "empty-av"} value={o.value}>{o.label}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="vol-field">
                <label htmlFor="vol-msg">Message <span className="vol-optional">(optional)</span></label>
                <textarea id="vol-msg" name="message" value={formData.message} onChange={handleChange}
                  rows={4} placeholder="Tell us briefly about yourself and how you'd like to help…" />
              </div>

              <button type="submit" className="vol-submit-btn" disabled={loading}>
                {loading ? (
                  <><span className="vol-spinner" /> Submitting…</>
                ) : (
                  "Submit Application →"
                )}
              </button>

              <p className="vol-form-note">
                We respect your privacy. Your details will only be used to contact you about volunteering.
              </p>

            </form>
          </div>
        </section>

      </div>

      {/* ===== HAVE QUESTIONS — full width ===== */}
      <div className="vol-contact-strip">
        <div className="vol-contact-strip-inner">
          <div className="vol-contact-strip-text">
            <h2>Have Questions?</h2>
            <p>Reach out to us directly — we'd love to hear from you.</p>
          </div>
          <div className="vol-contact-strip-links">
            <a href="tel:8017555155" className="vol-contact-strip-btn">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328z"/>
              </svg>
              8017555155
            </a>
            <a href="mailto:info@eternalspringwelfarefoundation.org" className="vol-contact-strip-btn">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
              </svg>
              info@eternalspringwelfarefoundation.org
            </a>
          </div>
        </div>
      </div>

      {/* ===== CTA ===== */}
      <section className="vol-cta">
        <h2>Be the Change You Want to See</h2>
        <p>Your skills and time can help communities thrive. Take the next step today.</p>
        <div className="vol-cta-actions">
          <Link href="/donate" className="vol-cta-btn primary">❤️ Donate Now</Link>
          <Link href="/contact" className="vol-cta-btn outline">🤝 Partner With Us</Link>
        </div>
      </section>

    </main>
  );
}
