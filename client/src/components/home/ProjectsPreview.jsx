"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import "./ProjectCards.css";

export default function NgoCards() {
  const [projects, setProjects] = useState([]);

  // ================= FETCH PROJECTS =================
  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/api/admin/projects/public"
      );
      setProjects(res.data);
    } catch (err) {
      console.error("Error fetching projects", err);
    }
  };

  return (
    <section className="ngo-section">

      {/* Heading */}
      <div className="ngo-header">
        <h2>Our Projects</h2>
        <p>Explore how we are making a real impact</p>
      </div>

      {/* Cards */}
      <main className="ngo-container">
        <div className="ngo-grid">
          {projects.map((item, index) => (
            <article className="ngo-card" key={item.id}>
              
              <div
                className={`ngo-card-inner ${
                  index % 4 === 0
                    ? "pink-bg"
                    : index % 4 === 1
                    ? "blue-bg"
                    : index % 4 === 2
                    ? "yellow-bg"
                    : "green-bg"
                }`}
              >
                <div className="ngo-content-top">

                  {/* TEXT */}
                  <div className="ngo-text-side">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>

                  {/* IMAGE */}
                  <img
  src={
    item.image_url
      ? `http://localhost:5000${item.image_url}`
      : "/images/img.jpeg"
  }
  alt={item.title}
  className="ngo-avatar"
/>
                </div>

                {/* FOOTER */}
                <div className="ngo-card-footer">
                  <span className="ngo-footer-text">
                    {item.created_at
                      ? new Date(item.created_at).toLocaleDateString()
                      : ""}
                  </span>

                  <button className="ngo-btn">View</button>
                </div>
              </div>

            </article>
          ))}
        </div>
      </main>
    </section>
  );
}