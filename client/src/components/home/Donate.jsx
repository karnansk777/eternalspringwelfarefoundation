"use client";

import { useState, useMemo } from "react";
import "./Donate.css";

export default function DonatePro() {
  const [form, setForm] = useState({
    amount: 1000,
    frequency: "one-time",
    tipPct: 5,
    name: "",
    email: "",
    phone: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });

  const tipAmount = useMemo(() => (form.amount * form.tipPct) / 100, [form]);
  const total = useMemo(() => form.amount + tipAmount, [form, tipAmount]);

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
  };

  return (
    <section className="donate-page">

      {/* HERO */}
      <div className="donate-hero">
        <div className="hero-text">
          <h1>Give Hope. Change Lives ❤️</h1>
          <p>
            Every donation you make creates a ripple of change — from education
            to healthcare, your support empowers lives and builds a better future.
          </p>
        </div>

        <div className="hero-images">
          {/* <img src="https://images.pexels.com/photos/8460157/pexels-photo-8460157.jpeg" /> */}
        </div>
      </div>

      {/* MAIN */}
      <div className="donate-container">

        {/* LEFT */}
        <div className="donate-left">

          {/* AMOUNT */}
          <div className="card">
            <h3>Select Amount</h3>
            <div className="amount-grid">
              {[500, 1000, 2500, 5000].map((amt) => (
                <button
                  key={amt}
                  className={form.amount == amt ? "active" : ""}
                  onClick={() => setForm((p) => ({ ...p, amount: amt }))}
                >
                  ₹{amt}
                </button>
              ))}
            </div>
          </div>

          {/* FREQUENCY */}
          <div className="card">
            <h3>Donation Type</h3>
            <div className="toggle">
              <button
                className={form.frequency === "one-time" ? "active" : ""}
                onClick={() =>
                  setForm((p) => ({ ...p, frequency: "one-time" }))
                }
              >
                One Time
              </button>
              <button
                className={form.frequency === "monthly" ? "active" : ""}
                onClick={() =>
                  setForm((p) => ({ ...p, frequency: "monthly" }))
                }
              >
                Monthly
              </button>
            </div>
          </div>

          {/* TIP */}
          <div className="card">
            <h3>Support Platform</h3>
            <input
              type="range"
              min="0"
              max="30"
              name="tipPct"
              value={form.tipPct}
              onChange={onChange}
            />
            <p className="tip-text">
              ₹{tipAmount.toFixed(2)} ({form.tipPct}%)
            </p>
          </div>

          {/* PERSONAL */}
          <div className="card">
            <h3>Your Details</h3>
            <input name="name" placeholder="Full Name" onChange={onChange} />
            <input name="email" placeholder="Email" onChange={onChange} />
            <input name="phone" placeholder="Phone Number" onChange={onChange} />
          </div>

          {/* CARD */}
          <div className="card">
            <h3>Payment Details</h3>
            <input name="cardNumber" placeholder="Card Number" onChange={onChange} />
            <div className="row">
              <input name="expiry" placeholder="MM/YY" onChange={onChange} />
              <input name="cvv" placeholder="CVV" onChange={onChange} />
            </div>
          </div>

        </div>

        {/* RIGHT */}
        <div className="donate-right">
          <img
            className="side-img"
            src="https://images.pexels.com/photos/4148864/pexels-photo-4148864.jpeg"
          />

          <h3>Your Impact</h3>
          <p>
            Your contribution helps provide education, food, and healthcare to
            underprivileged communities. Even a small step creates a big impact.
          </p>

          <div className="summary">
            <p>Amount: ₹{form.amount}</p>
            <p>Tip: ₹{tipAmount.toFixed(2)}</p>
            <h2>Total: ₹{total.toFixed(2)}</h2>
          </div>

          <button className="donate1-btn">
            Donate Now ❤️
          </button>

          <p className="note">
            🔒 100% secure payment | Tax benefits available
          </p>
        </div>

      </div>
    </section>
  );
}