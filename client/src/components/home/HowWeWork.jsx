"use client";
import "./HowWeWork.css";

const FOCUS_AREAS = [
  {
    title: "Education & Awareness",
    desc: "Supporting children and communities through impactful learning initiatives.",
    icon: "🎓",
    accent: "#f97316",
    bg: "#fff7ed",
  },
  {
    title: "Livelihood Development",
    desc: "Helping individuals build skills and achieve financial independence.",
    icon: "💼",
    accent: "#3b82f6",
    bg: "#eff6ff",
  },
  {
    title: "Women Empowerment",
    desc: "Encouraging confidence, leadership, and self-reliance among women.",
    icon: "👩",
    accent: "#ec4899",
    bg: "#fdf2f8",
  },
  {
    title: "Health & Hygiene",
    desc: "Promoting better living conditions and community health awareness.",
    icon: "🏥",
    accent: "#10b981",
    bg: "#ecfdf5",
  },
  {
    title: "Community Development",
    desc: "Building stronger, sustainable communities from the ground up.",
    icon: "🌱",
    accent: "#8b5cf6",
    bg: "#f5f3ff",
  },
];

export default function HowWeWork() {
  return (
    <section className="hww-section">
      <div className="hww-header">
        <span className="hww-eyebrow">What We Do</span>
        <h2>Our Focus Areas</h2>
        <p>Programs that create lasting change where it matters most</p>
      </div>

      <div className="hww-grid">
        {FOCUS_AREAS.map((card) => (
          <div className="hww-card" key={card.title}>
            <div
              className="hww-icon-wrap"
              style={{ background: card.bg, color: card.accent }}
            >
              <span aria-hidden>{card.icon}</span>
            </div>
            <h3 className="hww-card-title">{card.title}</h3>
            <p className="hww-card-desc">{card.desc}</p>
            <div
              className="hww-card-bar"
              style={{ background: card.accent }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
