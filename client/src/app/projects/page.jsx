import Link from "next/link";
import "../about/AboutPage.css";
import "./ProgramsPage.css";

export default function ProgramsPage() {
  return (
    <main className="about-page">
      <header className="about-page-hero">
        <h1>Our Programs</h1>
        <p>
          Creating opportunities, empowering individuals, and building stronger communities
          through focused initiatives.
        </p>
      </header>

      <div className="about-page-inner">
        <section className="about-page-section" aria-label="Introduction">
          <p>
            At Eternal Spring Welfare Foundation, our programs are designed to address real
            challenges faced by underserved communities. We focus on practical,
            community-driven solutions that create long-term impact.
          </p>
        </section>

        <section className="about-page-section program-block" aria-labelledby="prog-1">
          <p className="program-eyebrow">1. Livelihood &amp; Skill Development</p>
          <h2 id="prog-1">Empowering Through Skills</h2>
          <p>
            We provide skill development opportunities to help individuals become financially
            independent and self-reliant.
          </p>
          <p className="key-label">Key Activities:</p>
          <ul className="key-activities-list">
            <li>Basic vocational training (tailoring, retail, digital skills)</li>
            <li>Career guidance and confidence-building</li>
            <li>Support for income-generating activities</li>
          </ul>
          <p className="founder-quote">👉 Helping individuals build a sustainable source of income.</p>
        </section>

        <section className="about-page-section program-block" aria-labelledby="prog-2">
          <p className="program-eyebrow">2. Education &amp; Awareness</p>
          <h2 id="prog-2">Building a Strong Foundation</h2>
          <p>
            We support children and youth by promoting education and awareness, helping them
            build a better future.
          </p>
          <p className="key-label">Key Activities:</p>
          <ul className="key-activities-list">
            <li>Informal education support</li>
            <li>Learning sessions for children</li>
            <li>Awareness programs on social and life skills</li>
          </ul>
          <p className="founder-quote">👉 Education is the first step towards change.</p>
        </section>

        <section className="about-page-section program-block" aria-labelledby="prog-3">
          <p className="program-eyebrow">3. Women Empowerment</p>
          <h2 id="prog-3">Empowering Women, Strengthening Families</h2>
          <p>
            We work to enhance the confidence, skills, and independence of women in
            communities.
          </p>
          <p className="key-label">Key Activities:</p>
          <ul className="key-activities-list">
            <li>Skill-building initiatives</li>
            <li>Financial awareness sessions</li>
            <li>Encouraging self-help groups</li>
          </ul>
          <p className="founder-quote">👉 When women grow, communities grow.</p>
        </section>

        <section className="about-page-section program-block" aria-labelledby="prog-4">
          <p className="program-eyebrow">4. Health &amp; Hygiene</p>
          <h2 id="prog-4">Promoting Healthier Communities</h2>
          <p>
            We focus on spreading awareness about hygiene and basic healthcare practices.
          </p>
          <p className="key-label">Key Activities:</p>
          <ul className="key-activities-list">
            <li>Hygiene awareness sessions</li>
            <li>Community health discussions</li>
            <li>Future health camp initiatives</li>
          </ul>
          <p className="founder-quote">👉 Healthy communities are stronger communities.</p>
        </section>

        <section className="about-page-section program-block" aria-labelledby="prog-5">
          <p className="program-eyebrow">5. Community Development</p>
          <h2 id="prog-5">Building Stronger Communities</h2>
          <p>
            We work closely with communities to understand their needs and create sustainable
            solutions.
          </p>
          <p className="key-label">Key Activities:</p>
          <ul className="key-activities-list">
            <li>Community engagement programs</li>
            <li>Awareness drives</li>
            <li>Volunteer-led initiatives</li>
          </ul>
          <p className="founder-quote">👉 Real change happens when communities come together.</p>
        </section>

        <section className="about-page-section" aria-labelledby="programs-approach">
          <h2 id="programs-approach">Our Approach</h2>
          <ul className="approach-list">
            <li>Community-first approach</li>
            <li>Focus on practical solutions</li>
            <li>Sustainable and long-term impact</li>
            <li>Inclusive participation</li>
          </ul>
        </section>

        <section
          className="about-page-section impact-note-box"
          aria-labelledby="impact-note"
        >
          <h2 id="impact-note">Impact</h2>
          <p>
            As a growing organization, we are currently working on small-scale initiatives and
            expanding our reach step by step.
          </p>
          <p className="impact-arrow">
            👉 Every program we run is focused on creating real and lasting change.
          </p>
        </section>
      </div>

      <section className="about-page-cta" aria-labelledby="programs-cta">
        <h2 id="programs-cta">Support Our Programs</h2>
        <p>
          Your contribution helps us expand these initiatives and reach more people in need.
        </p>
        <div className="about-page-cta-actions">
          <Link href="/donate" className="about-page-cta-donate">
            ❤️ Donate Now
          </Link>
          <Link href="/volunteer" className="about-page-cta-join">
            🤝 Volunteer With Us
          </Link>
        </div>
      </section>
    </main>
  );
}
