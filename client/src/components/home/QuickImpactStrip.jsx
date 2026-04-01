"use client";
import "./QuickImpactStrip.css";

const items = [
  { icon: "👥", text: "100+ Lives Reached" },
  { icon: "🤝", text: "Volunteer-Driven Initiatives" },
  { icon: "🌱", text: "Grassroots Community Work" },
];

export default function QuickImpactStrip() {
  return (
    <section className="quick-impact-strip" aria-label="Quick impact">
      <div className="quick-impact-inner">
        {items.map((item) => (
          <div key={item.text} className="quick-impact-item">
            <span className="quick-impact-icon" aria-hidden>
              {item.icon}
            </span>
            <span>{item.text}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
