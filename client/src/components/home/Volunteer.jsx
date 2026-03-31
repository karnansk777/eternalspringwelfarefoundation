"use client";
import { useState } from "react";
import axios from "axios";
import "./Volunteer.css";

export default function Volunteer() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    skills: "",
    availability: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  // HANDLE INPUT
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // SUBMIT FORM
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");

    try {
      await axios.post("http://localhost:5000/api/volunteers", formData);

      setSuccess("🎉 Thank you for joining as a volunteer!");

      setFormData({
        name: "",
        email: "",
        phone: "",
        skills: "",
        availability: "",
        message: "",
      });
    } catch (err) {
      console.error(err);
      alert("Something went wrong ❌");
    }

    setLoading(false);
  };

  return (
    <div className="volunteer-container">

      {/* LEFT FORM */}
      <div className="volunteer-right">
        <form className="volunteer-form" onSubmit={handleSubmit}>

          <h2>Join Us</h2>

          {success && <p className="success-msg">{success}</p>}

          <div className="form-row">
            <div className="form-group">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <label>Full Name *</label>
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
              name="availability"
              value={formData.availability}
              onChange={handleChange}
            />
            <label>City / Location</label>
          </div>

          <div className="form-group">
            <select
              name="skills"
              value={formData.skills}
              onChange={handleChange}
              required
            >
              <option value=""></option>
              <option>Teaching</option>
              <option>Healthcare Support</option>
              <option>Event Management</option>
              <option>Fundraising</option>
            </select>
            <label>Area of Interest *</label>
          </div>

          <div className="form-group">
            <textarea
              rows="4"
              name="message"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            <label>Why do you want to volunteer?</label>
          </div>

          <button className="volunteer-btn" disabled={loading}>
            {loading ? "Submitting..." : "Join Now 🚀"}
          </button>

        </form>
      </div>

      {/* RIGHT IMAGE */}
      <div className="volunteer-left">
        <img
          src="https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg"
          alt="Volunteers helping"
        />

        <div className="volunteer-overlay">
          <h2>Why Volunteer?</h2>
          <ul>
            <li>🌍 Create real impact in communities</li>
            <li>🤝 Meet passionate people</li>
            <li>📚 Learn & grow personally</li>
            <li>❤️ Be part of something meaningful</li>
          </ul>
        </div>
      </div>

    </div>
  );
}