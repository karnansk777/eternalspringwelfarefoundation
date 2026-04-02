"use client";
import "./QuickImpactStrip.css";

const stats = [
  { value: "100+", label: "Lives Reached",    icon: "👥" },
  { value: "5+",   label: "Active Programs",  icon: "🌱" },
  { value: "3+",   label: "Ongoing Projects", icon: "📋" },
  { value: "80G",  label: "Tax Exemption",    icon: "✅" },
];

export default function QuickImpactStrip() {
  return (
    <section className="qis-section" aria-label="Impact statistics">
      <div className="qis-inner">
        {stats.map((s) => (
          <div key={s.label} className="qis-item">
            <span className="qis-icon" aria-hidden>{s.icon}</span>
            <div className="qis-text">
              <span className="qis-value">{s.value}</span>
              <span className="qis-label">{s.label}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
