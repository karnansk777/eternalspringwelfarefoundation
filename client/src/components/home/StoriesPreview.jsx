"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import "./SuccessStories.css";
import { getApiUrl } from "@/lib/api";

export default function SuccessStories() {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    fetchStories();
  }, []);

  const fetchStories = async () => {
    try {
      const res = await axios.get(getApiUrl("/api/admin/projects/public"));
      setStories(res.data);
    } catch (err) {
      console.error("Error fetching stories:", err);
    }
  };

  return (
    <main className="main-success">
      
      {/* ===== HEADING ===== */}
      <div className="success-header">
        <h2>Success Stories</h2>
        <p>See how we’ve impacted lives and communities through our initiatives</p>
      </div>

      {/* ===== CARDS GRID ===== */}
      <section className="success-column">
        {stories.map((story, idx) => (
          <div
            key={story.id || idx}
            className={`story-card ${
              idx % 3 === 0 ? "large" : "small"
            }`}
          >
            
            {/* IMAGE */}
            <img
              src={
                story.image_url
                  ? getApiUrl(story.image_url)
                  : "/images/img.jpeg"
              }
              alt={story.title}
              className="story-image"
            />

            {/* overlay */}
            <div className="overlay"></div>

            <div className="content-inner">
              <h3 className="title-medium">{story.title}</h3>
              <p className="paragraph">{story.description}</p>

              {/* optional footer (clean version) */}
              <div className="story-footer">
                {/* <span>Impact Story</span> */}
              </div>
            </div>

          </div>
        ))}
      </section>
    </main>
  );
}