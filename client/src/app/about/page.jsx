import Link from "next/link";
import "./AboutPage.css";

export default function AboutPage() {
  return (
    <main className="about-page">
      <header className="about-page-hero">
        <h1>About Eternal Spring Welfare Foundation</h1>
        <p>
          Building hope, creating opportunities, and empowering communities for a better
          tomorrow.
        </p>
      </header>

      <div className="about-page-inner">
        <section className="about-page-section" aria-labelledby="who-we-are">
          <h2 id="who-we-are">Who We Are</h2>
          <p>
            Eternal Spring Welfare Foundation is a purpose-driven non-profit organization
            dedicated to empowering underserved communities and creating sustainable social
            impact.
          </p>
          <p>
            We work at the grassroots level to bridge the gap between opportunity and
            access—helping individuals build better, more secure, and dignified lives.
          </p>
          <p>
            As a newly established organization, we are focused on taking small but meaningful
            steps that lead to long-term transformation.
          </p>
        </section>

        <section className="about-page-section" aria-labelledby="vision">
          <h2 id="vision">Our Vision</h2>
          <p>
            To create an inclusive society where every individual has the opportunity to live
            with dignity, independence, and hope.
          </p>
        </section>

        <section className="about-page-section" aria-labelledby="mission">
          <h2 id="mission">Our Mission</h2>
          <ul className="about-page-mission-list">
            <li>To empower individuals through skill development and livelihood opportunities</li>
            <li>To promote access to education and essential resources</li>
            <li>To raise awareness on health, hygiene, and social issues</li>
            <li>To support women and children in building a better future</li>
            <li>To encourage community participation for sustainable development</li>
          </ul>
        </section>

        <section className="about-page-section" aria-labelledby="founders">
          <h2 id="founders">Our Founders</h2>

          <article className="founder-card">
            <h3>Deepan Das</h3>
            <p className="founder-role">Co-Founder | Businessman &amp; Social Worker</p>
            <p>
              Deepan Das founded Eternal Spring Welfare Foundation with a vision to create
              meaningful impact beyond business. Through his experiences, he recognized the
              challenges faced by underserved communities and took the initiative to contribute
              towards real change.
            </p>
            <p className="founder-quote">
              👉 &quot;Change begins when we take responsibility.&quot;
            </p>
          </article>

          <article className="founder-card">
            <h3>Rushali Samanta</h3>
            <p className="founder-role">Co-Founder | Chartered Accountant</p>
            <p>
              Rushali Samanta brings financial expertise, transparency, and structured planning to
              the organization. Her approach ensures accountability and sustainable growth in every
              initiative.
            </p>
            <p className="founder-quote">
              👉 &quot;Empowering people creates lasting change.&quot;
            </p>
          </article>
        </section>

        <section className="about-page-section" aria-labelledby="approach">
          <h2 id="approach">Our Approach</h2>
          <ul className="approach-list">
            <li>
              <strong>Community-Centric:</strong> We listen, understand, and act
            </li>
            <li>
              <strong>Start Small, Grow Strong:</strong> Step-by-step impact
            </li>
            <li>
              <strong>Transparency &amp; Trust:</strong> Ethical and accountable work
            </li>
            <li>
              <strong>Sustainable Solutions:</strong> Long-term development focus
            </li>
          </ul>
        </section>

        <section className="about-page-section" aria-labelledby="journey">
          <h2 id="journey">Our Journey</h2>
          <p>
            Eternal Spring Welfare Foundation is at the beginning of its journey. Through early
            outreach programs, awareness sessions, and volunteer-driven initiatives, we have
            started making a difference at the community level.
          </p>
          <p>
            With continued support, we aim to expand our reach and impact many more lives in the
            years ahead.
          </p>
        </section>

        <section className="about-page-section" aria-labelledby="director-message">
          <h2 id="director-message">Message from the Director</h2>
          <blockquote className="director-quote-block">
            <p>
              At Eternal Spring Welfare Foundation, our journey began not with large resources,
              but with a strong sense of responsibility towards society. Even as a newly established
              organization, our work on the ground has already touched lives—through food distribution
              drives, healthcare camps, support for survivors of abuse, and educational assistance for
              underprivileged students.
            </p>
            <p>
              We believe that true impact is not measured by the size of an organization, but by the
              sincerity of its efforts. From helping a hungry family to supporting a woman in distress,
              every action we take is guided by compassion, dignity, and long-term empowerment.
            </p>
            <p>
              Our focus is not just charity, but sustainable change—enabling individuals to stand on
              their own feet with confidence and opportunity.
            </p>
            <p>
              As we move forward, we invite individuals, partners, and institutions to join hands with
              us. Together, we can build a society where no one is left behind.
            </p>
            <footer className="director-quote-footer">
              <span className="director-name">Deepan Das</span>
              <span className="director-title">Director, Eternal Spring Welfare Foundation</span>
            </footer>
          </blockquote>
        </section>

        <section className="about-page-section trust-legal-box" aria-labelledby="trust">
          <h2 id="trust">Trust &amp; Legal</h2>
          <p>
            We are a registered NGO committed to transparency and accountability:
          </p>
          <p>12A Registered (Provisional)</p>
          <p>80G Approved (Tax Benefit Available)</p>
          <p>PAN: AAJCE4964H</p>
          <p>TAN: CALE08847G</p>
          <p className="trust-legal-note">
            👉 Donations are eligible for tax benefits under applicable laws.
          </p>
        </section>
      </div>

      <section className="about-page-cta" aria-labelledby="about-cta">
        <h2 id="about-cta">Be a Part of Our Journey</h2>
        <p>
          Whether you choose to donate, volunteer, or partner with us—your support helps us grow
          and create meaningful change.
        </p>
        <div className="about-page-cta-actions">
          <Link href="/donate" className="about-page-cta-donate">
            ❤️ Donate Now
          </Link>
          <Link href="/volunteer" className="about-page-cta-join">
            🤝 Join Us
          </Link>
        </div>
      </section>
    </main>
  );
}
