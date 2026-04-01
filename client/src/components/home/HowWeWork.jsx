"use client";
import "./HowWeWork.css";

const FOCUS_AREAS = [
  {
    title: "Education & Awareness",
    short_description: "Supporting children and communities through learning initiatives",
    icon: "🎓",
  },
  {
    title: "Livelihood Development",
    short_description: "Helping individuals build skills for financial independence",
    icon: "💼",
  },
  {
    title: "Women Empowerment",
    short_description: "Encouraging confidence and self-reliance",
    icon: "👩",
  },
  {
    title: "Health & Hygiene",
    short_description: "Promoting better living conditions",
    icon: "🏥",
  },
  {
    title: "Community Development",
    short_description: "Building stronger, sustainable communities",
    icon: "🌱",
  },
];

export default function HowWeWorkHover() {
  return (
    <section className="howwework-hover-section">
      <div className="howwework-header">
        <h2>Our Focus Areas</h2>
        <p>Programs that create lasting change where it matters most</p>
      </div>

      <div className="howwework-hover-container">
        {FOCUS_AREAS.map((card, index) => (
          <div className="howwework-hover-card" key={card.title}>
            <div className="howwework-hover-front">
              <div className="content-box">
                <span className="focus-area-icon" aria-hidden>
                  {card.icon}
                </span>
                <h3>{card.title}</h3>
                <p>{card.short_description}</p>
              </div>
            </div>

            <div
              className="howwework-hover-back focus-static-back"
              style={{
                backgroundImage: "url(/images/img.jpeg)",
              }}
            ></div>
          </div>
        ))}
      </div>
    </section>
  );
}
