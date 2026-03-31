"use client";
import "./Blog.css";

export default function Blog() {
  const blogs = [
    {
      title: "How Education is Changing Lives in Rural India",
      desc: "Discover how small initiatives are bringing big changes in children's education across villages.",
      date: "March 2026",
      img: "https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg"
    },
    {
      title: "The Power of Community Support",
      desc: "When people come together, real transformation happens. See how volunteers are making an impact.",
      date: "February 2026",
      img: "https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg"
    },
    {
      title: "Healthcare for Everyone: Our Mission",
      desc: "Ensuring basic healthcare reaches remote areas is our priority. Learn about our recent camps.",
      date: "January 2026",
      img: "https://images.pexels.com/photos/8460157/pexels-photo-8460157.jpeg"
    },{
      title: "How Education is Changing Lives in Rural India",
      desc: "Discover how small initiatives are bringing big changes in children's education across villages.",
      date: "March 2026",
      img: "https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg"
    },    {
      title: "The Power of Community Support",
      desc: "When people come together, real transformation happens. See how volunteers are making an impact.",
      date: "February 2026",
      img: "https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg"
    },{
      title: "How Education is Changing Lives in Rural India",
      desc: "Discover how small initiatives are bringing big changes in children's education across villages.",
      date: "March 2026",
      img: "https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg"
    },
  ];

  return (
    <section className="blog-section">

      <div className="blog-header">
        <h2>Our Blog & Stories</h2>
        <p>Insights, stories, and updates from our journey of impact</p>
      </div>

      <div className="blog-grid">
        {blogs.map((blog, index) => (
          <div className="blog-card" key={index}>

            <div className="blog-img-box">
              <img src={blog.img} alt={blog.title} />
            </div>

            <div className="blog-content">
              <span className="blog-date">{blog.date}</span>
              <h3>{blog.title}</h3>
              <p>{blog.desc}</p>

              <button className="blog-btn">Read More →</button>
            </div>

          </div>
        ))}
      </div>

    </section>
  );
}