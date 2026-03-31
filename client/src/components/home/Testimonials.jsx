"use client";
import { useEffect, useRef, useState } from "react";
import "./Testimonials.css";

export default function NgoTestimonial3() {
  const originalData = [
    {
      img: "https://randomuser.me/api/portraits/men/1.jpg",
      name: "Arun Kumar",
      text: "Amazing NGO work. Truly life changing experience.",
    },
    {
      img: "https://randomuser.me/api/portraits/women/2.jpg",
      name: "Priya Sharma",
      text: "Helping children with education is the best thing.",
    },
    {
      img: "https://randomuser.me/api/portraits/men/3.jpg",
      name: "Rahul Das",
      text: "Great support system for poor families.",
    },
    {
      img: "https://randomuser.me/api/portraits/women/4.jpg",
      name: "Sneha Reddy",
      text: "Very inspiring and impactful organization.",
    },
    {
      img: "https://randomuser.me/api/portraits/men/5.jpg",
      name: "Vikram Singh",
      text: "Highly recommend volunteering here.",
    },
  ];

  // Clone for infinite effect
  const data = [...originalData, ...originalData];

  const [index, setIndex] = useState(0);
  const slideRef = useRef();

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  });

  const nextSlide = () => {
    setIndex((prev) => prev + 1);
  };

  const prevSlide = () => {
    setIndex((prev) => prev - 1);
  };

  // Infinite reset
  useEffect(() => {
    if (index >= originalData.length) {
      setTimeout(() => {
        slideRef.current.style.transition = "none";
        setIndex(0);
      }, 500);
    }

    if (index < 0) {
      setTimeout(() => {
        slideRef.current.style.transition = "none";
        setIndex(originalData.length - 1);
      }, 500);
    } else {
      slideRef.current.style.transition = "0.5s ease";
    }
  }, [index]);

  return (
    <section className="ngo3-section">
      <h2 className="ngo3-title">Our Testimonials</h2>

      <div className="ngo3-wrapper">
        {/* LEFT */}
        <button className="ngo3-btn left" onClick={prevSlide}>
          ❮
        </button>

        {/* SLIDER */}
        <div className="ngo3-slider">
          <div
            ref={slideRef}
            className="ngo3-track"
            style={{
              transform: `translateX(-${index * (100 / 3)}%)`,
            }}
          >
            {data.map((item, i) => (
              <div className="ngo3-card" key={i}>
                <img src={item.img} alt="" />
                <h3>{item.name}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <button className="ngo3-btn right" onClick={nextSlide}>
          ❯
        </button>
      </div>
    </section>
  );
}