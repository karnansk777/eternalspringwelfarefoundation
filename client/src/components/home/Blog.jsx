"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import { getApiUrl } from "@/lib/api";
import "./Blog.css";

const STATIC_BLOGS = [
  {
    id: 1,
    title: "How Education is Changing Lives in Rural India",
    description: "Discover how small initiatives are bringing big changes in children's education across villages. Through dedicated teachers, community programs, and grassroots support, we are ensuring every child gets a chance to learn and grow.",
    date: "March 2026",
    image_url: "https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg",
  },
  {
    id: 2,
    title: "The Power of Community Support",
    description: "When people come together, real transformation happens. See how volunteers are making an impact across communities—one visit, one smile, one life at a time.",
    date: "February 2026",
    image_url: "https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg",
  },
  {
    id: 3,
    title: "Healthcare for Everyone: Our Mission",
    description: "Ensuring basic healthcare reaches remote areas is our priority. Learn about our recent camps, the people we served, and how you can be part of this life-saving mission.",
    date: "January 2026",
    image_url: "https://images.pexels.com/photos/8460157/pexels-photo-8460157.jpeg",
  },
  {
    id: 4,
    title: "Women Leading Change in Their Communities",
    description: "Empowered women empower communities. Hear inspiring stories of women who took charge of their futures through our skill development and livelihood programs.",
    date: "December 2025",
    image_url: "https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg",
  },
  {
    id: 5,
    title: "Volunteers: The Heart of Our Foundation",
    description: "Behind every initiative is a team of passionate volunteers. Learn how ordinary people are doing extraordinary work to uplift those in need across West Bengal.",
    date: "November 2025",
    image_url: "https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg",
  },
  {
    id: 6,
    title: "Building Futures: Skill Development Stories",
    description: "From learning a trade to starting a small business—see how our skill development programs are transforming lives and creating sustainable livelihoods for youth.",
    date: "October 2025",
    image_url: "https://images.pexels.com/photos/8460157/pexels-photo-8460157.jpeg",
  },
];

export default function Blog() {
  const [blogs, setBlogs] = useState(STATIC_BLOGS);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    axios
      .get(getApiUrl("/api/admin/blogs/public"))
      .then((res) => {
        if (res.data?.length > 0) setBlogs(res.data);
      })
      .catch(() => {});
  }, []);

  const formatDate = (raw) => {
    if (!raw) return "";
    const d = new Date(raw);
    return isNaN(d) ? raw : d.toLocaleDateString("en-IN", { month: "long", year: "numeric" });
  };

  return (
    <section className="blog-section">

      <div className="blog-header">
        <h2>Our Blog &amp; Stories</h2>
        <p>Insights, stories, and updates from our journey of impact</p>
      </div>

      <div className="blog-grid">
        {blogs.map((blog, index) => (
          <div className="blog-card" key={blog.id || index}>
            <div className="blog-img-box">
              <img
                src={blog.image_url?.startsWith("http") ? blog.image_url : getApiUrl(blog.image_url || "")}
                alt={blog.title}
                onError={(e) => { e.target.src = "/images/img.jpeg"; }}
              />
            </div>
            <div className="blog-content">
              <span className="blog-date">{blog.date || formatDate(blog.created_at)}</span>
              <h3>{blog.title}</h3>
              <p>
                {blog.description?.length > 110
                  ? blog.description.slice(0, 110) + "…"
                  : blog.description}
              </p>
              <button className="blog-btn" onClick={() => setSelected(blog)}>
                Read More →
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* ===== MODAL ===== */}
      {selected && (
        <div className="blog-modal-overlay" onClick={() => setSelected(null)}>
          <div className="blog-modal" onClick={(e) => e.stopPropagation()}>
            <button className="blog-modal-close" onClick={() => setSelected(null)} aria-label="Close">
              ✕
            </button>
            {selected.image_url && (
              <div className="blog-modal-img-wrap">
                <img
                  src={selected.image_url?.startsWith("http") ? selected.image_url : getApiUrl(selected.image_url)}
                  alt={selected.title}
                  onError={(e) => { e.target.src = "/images/img.jpeg"; }}
                />
              </div>
            )}
            <div className="blog-modal-body">
              <span className="blog-date">{selected.date || formatDate(selected.created_at)}</span>
              <h2>{selected.title}</h2>
              <p>{selected.description}</p>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
