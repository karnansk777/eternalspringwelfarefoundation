"use client";

import { useState, useRef, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import "../../app/about/AboutPage.css";
import "../../app/volunteer/VolunteerPage.css";
import { getApiUrl } from "@/lib/api";

const THANK_YOU =
  "Thank you for your interest in volunteering with Eternal Spring Welfare Foundation.";

const THANK_YOU_SUB = "Our team will connect with you shortly.";

const AREA_OPTIONS = [
  { value: "", label: "Select area of interest" },
  { value: "Education", label: "Education" },
  { value: "Social Work", label: "Social Work" },
  { value: "Fundraising", label: "Fundraising" },
  { value: "Digital Support", label: "Digital Support" },
];

const AVAILABILITY_OPTIONS = [
  { value: "", label: "Select availability" },
  { value: "Part-time", label: "Part-time" },
  { value: "Full-time", label: "Full-time" },
];

export default function Volunteer() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    areaOfInterest: "",
    availability: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const successRef = useRef(null);

  useEffect(() => {
    if (success && successRef.current) {
      successRef.current.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  }, [success]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    const cityLine = formData.city.trim();
    const body = formData.message.trim();
    const messageParts = [];
    if (cityLine) messageParts.push(`City: ${cityLine}`);
    if (body) messageParts.push(body);
    const combinedMessage =
      messageParts.length > 0 ? messageParts.join("\n\n") : "(No message)";

    const payload = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      phone: formData.phone.trim(),
      skills: formData.areaOfInterest,
      availability: formData.availability,
      message: combinedMessage,
    };

    try {
      await axios.post(getApiUrl("/api/volunteers"), payload);
      setSuccess(true);
      setFormData({
        name: "",
        phone: "",
        email: "",
        city: "",
        areaOfInterest: "",
        availability: "",
        message: "",
      });
    } catch (err) {
      console.error(err);
      alert("Something went wrong. Please try again or call us at 8017555155.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="volunteer-page about-page">
      <header className="about-page-hero">
        <h1>Become a Volunteer</h1>
        <p>
          Join us in creating meaningful change. Your time and effort can transform lives.
        </p>
      </header>

      <div className="about-page-inner volunteer-page-inner">
        <section className="about-page-section" aria-labelledby="vol-intro">
          <h2 id="vol-intro">Volunteers at Eternal Spring</h2>
          <p>
            At Eternal Spring Welfare Foundation, volunteers are the backbone of our work.
            Whether you can give a few hours or long-term support, your contribution matters.
          </p>
          <p className="contact-highlight">Together, we can make a difference.</p>
        </section>

        <section className="about-page-section" aria-labelledby="vol-why">
          <h2 id="vol-why">Why volunteer with us</h2>
          <ul className="about-page-mission-list">
            <li>Make a real impact in communities</li>
            <li>Gain meaningful experience</li>
            <li>Be part of social change</li>
            <li>Work with a passionate team</li>
          </ul>
        </section>

        <section className="about-page-section" aria-labelledby="vol-opps">
          <h2 id="vol-opps">Volunteer opportunities</h2>
          <ul className="volunteer-opportunities-list">
            <li>Community outreach programs</li>
            <li>Awareness campaigns</li>
            <li>Teaching &amp; mentoring children</li>
            <li>Event &amp; fundraising support</li>
            <li>Social media &amp; digital volunteering</li>
          </ul>
        </section>
      </div>

      <section className="volunteer-form-section" aria-labelledby="volunteer-form-heading">
        <div className="volunteer-form-card">
          <h2 id="volunteer-form-heading">Apply to Volunteer</h2>

          <form className="volunteer-form-grid" onSubmit={handleSubmit}>
            {success && (
              <div
                ref={successRef}
                className="volunteer-success-panel"
                role="status"
                aria-live="polite"
              >
                <p>{THANK_YOU}</p>
                <p>{THANK_YOU_SUB}</p>
              </div>
            )}

            <div className="volunteer-form-row">
              <label className="volunteer-field">
                <span>Full name</span>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  autoComplete="name"
                />
              </label>
              <label className="volunteer-field">
                <span>Phone number</span>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  autoComplete="tel"
                />
              </label>
            </div>

            <label className="volunteer-field">
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

            <label className="volunteer-field">
              <span>City</span>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                required
                autoComplete="address-level2"
              />
            </label>

            <div className="volunteer-form-row">
              <label className="volunteer-field">
                <span>Area of interest</span>
                <select
                  name="areaOfInterest"
                  value={formData.areaOfInterest}
                  onChange={handleChange}
                  required
                >
                  {AREA_OPTIONS.map((o) => (
                    <option key={o.value || "empty"} value={o.value}>
                      {o.label}
                    </option>
                  ))}
                </select>
              </label>
              <label className="volunteer-field">
                <span>Availability</span>
                <select
                  name="availability"
                  value={formData.availability}
                  onChange={handleChange}
                  required
                >
                  {AVAILABILITY_OPTIONS.map((o) => (
                    <option key={o.value || "empty-av"} value={o.value}>
                      {o.label}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            <label className="volunteer-field">
              <span>Message</span>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                placeholder="Tell us briefly about yourself and how you would like to help"
              />
            </label>

            <button type="submit" className="volunteer-submit-btn" disabled={loading}>
              {loading ? "Submitting…" : "Submit Application"}
            </button>
          </form>
        </div>
      </section>

      <div className="volunteer-quick-connect">
        <div className="volunteer-quick-connect-inner">
          <h2>Quick connect</h2>
          <p>
            <a href="tel:8017555155">8017555155</a>
          </p>
          <p>
            <a href="mailto:info@eternalspringwelfarefoundation.org">
              info@eternalspringwelfarefoundation.org
            </a>
          </p>
        </div>
      </div>

      <section className="about-page-cta" aria-labelledby="volunteer-cta">
        <h2 id="volunteer-cta">Be the Change You Want to See</h2>
        <p>Your skills and time can help communities thrive. Take the next step today.</p>
        <div className="about-page-cta-actions">
          <Link href="/donate" className="about-page-cta-donate">
            Donate Now
          </Link>
          <Link href="/contact" className="about-page-cta-join">
            Partner With Us
          </Link>
        </div>
      </section>
    </main>
  );
}
