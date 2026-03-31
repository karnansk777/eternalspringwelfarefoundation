"use client";
import { useState } from "react";
import axios from "axios";
import "./Contact.css";
import { getApiUrl } from "@/lib/api";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  // ================= HANDLE INPUT =================
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ================= SUBMIT =================
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");

    try {
      await axios.post(getApiUrl("/api/contact"), formData);

      setSuccess("✅ Message sent successfully!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        address: "",
        message: "",
      });
    } catch (err) {
      console.error(err);
      alert("❌ Failed to send message");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="contact-section">
      <div className="contact-wrapper">

        {/* LEFT SIDE */}
        <div className="contact-left">
          <div className="contact-content">
            <h2>Get in Touch</h2>
            <p>
              Have questions or want to support our mission? Reach out and we’ll
              connect with you as soon as possible.
            </p>

            <div className="contact-info">
              <div>📧 support@eswf.org</div>
              <div>📞 +91 90000 00000</div>
              <div>📍 Kolkata, India</div>
            </div>
          </div>

          <div className="contact-image-box">
            <img
              src="https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg"
              alt="Helping People"
            />
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="contact-right">
          <form className="contact-form" onSubmit={handleSubmit}>

            {/* SUCCESS MESSAGE */}
            {success && <p className="success-msg">{success}</p>}

            {/* ROW */}
            <div className="form-row">
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <label>Name *</label>
              </div>

              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <label>Email *</label>
              </div>
            </div>

            <div className="form-group">
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
              <label>Phone *</label>
            </div>

            <div className="form-group">
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
              />
              <label>Address (optional)</label>
            </div>

            <div className="form-group">
              <textarea
                rows="4"
                name="message"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
              <label>Message (optional)</label>
            </div>

            <button type="submit" className="contact-btn" disabled={loading}>
              {loading ? "Sending..." : "Send Message 🚀"}
            </button>

          </form>
        </div>

      </div>

      {/* MAP */}
      <div className="contact-map">
        <iframe
          src="https://maps.google.com/maps?q=kolkata&t=&z=13&ie=UTF8&iwloc=&output=embed"
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
}