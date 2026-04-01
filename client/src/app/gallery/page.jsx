import Link from "next/link";
import "../about/AboutPage.css";
import "./GalleryPage.css";

const SECTIONS = [
  {
    id: "community",
    title: "Community Activities",
    description: "Community visits, interaction with people, and on-ground work.",
    items: [
      {
        src: "/images/Group of Cheerful Rural Indian Children.jpeg",
        caption: "On-ground engagement",
      },
      {
        src: "/images/school-children-dressed-uniform-have-fun-play-schoolyard.jpg",
        caption: "Supporting local communities",
      },
      {
        src: "/images/photorealistic-portrait-non-traditional-family-structure.jpg",
        caption: "Community awareness session",
      },
    ],
  },
  {
    id: "awareness",
    title: "Awareness Programs",
    description: "Small sessions, group discussions, and social awareness activities.",
    items: [
      {
        src: "/images/education-matters.jpeg",
        caption: "Community awareness session",
      },
      {
        src: "/images/download (21).jpeg",
        caption: "Supporting local communities",
      },
      {
        src: "/images/NON-GOVERNMENTAL ORGANIZATION- SAVIOURS - Saviour Foundation.jpeg",
        caption: "Social awareness activities",
      },
    ],
  },
  {
    id: "volunteers",
    title: "Volunteer Engagement",
    description: "Volunteers working, team activities, and field participation.",
    items: [
      {
        src: "/images/Silly faces.jpeg",
        caption: "Volunteer-led activity",
      },
      {
        src: "/images/Kleine Geschenke erhalten die Freundschaft.jpeg",
        caption: "Team activities",
      },
      {
        src: "/images/top-view-hands-holding-globe-with-people-figurines.jpg",
        caption: "Volunteer-led activity",
      },
    ],
  },
  {
    id: "events",
    title: "Events & Initiatives",
    description: "Campaigns, small events, and outreach programs.",
    items: [
      {
        src: "/images/Once a Child Labourer, This Bengaluru Girl Will Now Speak About Child Rights in Parliament.jpeg",
        caption: "Outreach programs",
      },
      {
        src: "/images/download (20).jpeg",
        caption: "Supporting local communities",
      },
      {
        src: "/images/piqsels.com-id-fvdqe.jpg",
        caption: "Small events",
      },
    ],
  },
];

export default function GalleryPage() {
  return (
    <main className="gallery-page">
      <header className="about-page-hero">
        <h1>Our Work in Action</h1>
        <p>
          A glimpse into our efforts, activities, and the communities we serve.
        </p>
      </header>

      <div className="gallery-intro">
        <p>
          At Eternal Spring Welfare Foundation, every initiative is a step toward creating real
          change. Our gallery showcases moments from our community interactions, awareness
          sessions, and volunteer-driven activities.
        </p>
        <p className="gallery-intro-line">
          👉 Real people. Real efforts. Real impact.
        </p>
      </div>

      {SECTIONS.map((section) => (
        <section
          key={section.id}
          className="gallery-section-block"
          aria-labelledby={`gallery-${section.id}`}
        >
          <h2 id={`gallery-${section.id}`}>{section.title}</h2>
          <p className="gallery-section-desc">{section.description}</p>
          <div className="gallery-grid">
            {section.items.map((item) => (
              <figure key={item.src} className="gallery-item">
                <img src={item.src} alt={item.caption} loading="lazy" />
                <figcaption className="gallery-caption">{item.caption}</figcaption>
              </figure>
            ))}
          </div>
        </section>
      ))}

      <p className="gallery-impact">
        Every picture represents a step towards building a stronger and more empowered community.
      </p>

      <section className="gallery-growing" aria-labelledby="gallery-growing">
        <h2 id="gallery-growing">Growing With Every Step</h2>
        <p>
          As a new NGO, we are building our journey step by step—and this gallery will continue
          to grow with your support.
        </p>
      </section>

      <section className="about-page-cta" aria-labelledby="gallery-cta">
        <h2 id="gallery-cta">Be a Part of These Stories</h2>
        <p>
          Your support helps us create many more such moments of change.
        </p>
        <div className="about-page-cta-actions">
          <Link href="/donate" className="about-page-cta-donate">
            ❤️ Donate Now
          </Link>
          <Link href="/volunteer" className="about-page-cta-join">
            🤝 Join as Volunteer
          </Link>
        </div>
      </section>
    </main>
  );
}
