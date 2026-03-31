"use client";
import { useState } from "react";
import "./FAQ.css";

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit and debit cards, PayPal, and UPI payments. For business clients, we also offer invoice-based payments.",
    },
    {
      question: "How can I reset my password?",
      answer:
        "Go to the login page and click on “Forgot Password.” Enter your registered email address, and you’ll receive a password reset link.",
    },
    {
      question: "Do you offer international shipping?",
      answer:
        "Yes, we offer worldwide shipping. Delivery times and costs vary depending on the location.",
    },
    {
      question: "Can I cancel or modify my order?",
      answer:
        "Orders can be modified or canceled within 2 hours of placement. Contact our support team immediately to make changes.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-container">
      <h2 className="faq-title">✨ FAQ Section</h2>

      <div className="faq-wrapper">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`faq-item ${
              activeIndex === index ? "active" : ""
            }`}
          >
            <button
              className="faq-question"
              onClick={() => toggleFAQ(index)}
            >
              <span>{faq.question}</span>
              <span className="faq-icon">
                {activeIndex === index ? "✕" : "+"}
              </span>
            </button>

            <div className="faq-answer">
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}