"use client";
import { useEffect, useState } from "react";
import "./HowWeWork.css";

export default function HowWeWorkHover() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/admin/programs/public")
      .then((res) => res.json())
      .then((data) => setCards(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <section className="howwework-hover-section">

      {/* HEADER */}
      <div className="howwework-header">
        <h2>What We Work On</h2>
        <p>Our key focus areas to build a better and brighter future</p>
      </div>

      {/* CARDS */}
      <div className="howwework-hover-container">
        {cards.map((card, index) => (
          <div className="howwework-hover-card" key={card.id || index}>

            {/* FRONT (CONTENT FIRST) */}
            <div className="howwework-hover-front">
              <div className="content-box">
                <h3>{card.title}</h3>
                <p>{card.short_description}</p>
                <button>Know More →</button>
              </div>
            </div>

            {/* BACK (IMAGE ON HOVER) */}
            <div
              className="howwework-hover-back"
              style={{
                backgroundImage: `url(${
                  card.image_url
                    ? `http://localhost:5000${card.image_url}`
                    : "/images/img.jpeg"
                })`,
              }}
            ></div>

          </div>
        ))}
      </div>

    </section>
  );
}