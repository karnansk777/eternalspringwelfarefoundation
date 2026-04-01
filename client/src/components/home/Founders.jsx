"use client";
import "./Founders.css";

const founders = [
  {
    name: "Deepan Das",
    role: "Businessman & Social Worker",
  },
  {
    name: "Rushali Samanta",
    role: "Chartered Accountant",
  },
];

export default function Founders() {
  return (
    <section className="founders-section">
      <div className="founders-inner">
        <h2 className="founders-title">Meet Our Founders</h2>
        <div className="founders-grid">
          {founders.map((f) => (
            <div key={f.name} className="founders-card">
              <div className="founders-avatar" aria-hidden>
                {f.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>
              <h3 className="founders-name">{f.name}</h3>
              <p className="founders-role">{f.role}</p>
            </div>
          ))}
        </div>
        <p className="founders-tagline">
          👉 Driven by a shared vision to create meaningful social impact.
        </p>
      </div>
    </section>
  );
}
