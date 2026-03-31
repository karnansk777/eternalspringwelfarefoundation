"use client";
import { useEffect } from "react";
import "./Statistics.css";

export default function Statistics() {
  useEffect(() => {
    const counters = document.querySelectorAll(".stat-xyz-number");
    const speed = 200;

    counters.forEach((counter) => {
      const updateCount = () => {
        const target = +counter.getAttribute("data-count");
        const count = +counter.innerText;
        const increment = target / speed;

        if (count < target) {
          counter.innerText = Math.ceil(count + increment);
          setTimeout(updateCount, 20);
        } else {
          counter.innerText = target >= 1000 ? target + "+" : target;
        }
      };
      updateCount();
    });
  }, []);

  return (
    <section className="stat-xyz-section">
      <div className="stat-xyz-wrapper">

        {/* LEFT CONTENT */}
        <div className="stat-xyz-left">
          <h2>Making a Real Difference</h2>
          <p>
            Every number represents a life touched. Through our programs,
            we strive to uplift communities, empower individuals, and create
            sustainable change.
          </p>
        </div>

        {/* RIGHT STATS GRID */}
        <div className="stat-xyz-container">

          <div className="stat-xyz-card">
            <div className="stat-xyz-icon"></div>
            <h2 className="stat-xyz-number" data-count="10000">0</h2>
            <p className="stat-xyz-text">Lives Impacted</p>
          </div>

          <div className="stat-xyz-card">
            <div className="stat-xyz-icon"></div>
            <h2 className="stat-xyz-number" data-count="120">0</h2>
            <p className="stat-xyz-text">Volunteers</p>
          </div>

          <div className="stat-xyz-card">
            <div className="stat-xyz-icon"></div>
            <h2 className="stat-xyz-number" data-count="45">0</h2>
            <p className="stat-xyz-text">Projects</p>
          </div>

          <div className="stat-xyz-card">
            <div className="stat-xyz-icon"></div>
            <h2 className="stat-xyz-number" data-count="12">0</h2>
            <p className="stat-xyz-text">Districts</p>
          </div>

        </div>
      </div>
    </section>
  );
}