"use client";

import Link from "next/link";
import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h2>Eternal Spring Welfare Foundation</h2>
          <p>
            Together we create hope, change lives, and build a better future.
          </p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/projects">Projects</Link>
            </li>
            <li>
              <Link href="/stories">Stories</Link>
            </li>
            <li>
              <Link href="/gallery">Gallery</Link>
            </li>
            <li>
              <Link href="/transparency">Transparency</Link>
            </li>
            <li>
              <Link href="/80g-certificate">80G certificate</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        <div className="footer-contact">
          <h3>Contact</h3>
          <p>📍 Kolkata, West Bengal</p>
          <p>📞 8017555155</p>
          <p>📧 info@eternalspringwelfarefoundation.org</p>

          <div className="footer-socials">
            <a href="#" aria-label="Instagram">📸</a>
            <a href="#" aria-label="Facebook">📘</a>
            <a href="#" aria-label="Twitter">🐦</a>
            <a href="#" aria-label="YouTube">▶️</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        © 2026 Eternal Spring Welfare Foundation | Made with ❤️
      </div>
    </footer>
  );
}
