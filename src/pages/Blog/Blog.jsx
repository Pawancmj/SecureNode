// src/pages/Blog/Blog.jsx
import React from "react";
import "./Blog.css";

const articles = [
  { title: "Top 10 Cybersecurity Threats in 2025", link: "#" },
  { title: "Phishing Attacks: How to Stay Safe", link: "#" },
];

const caseStudies = [
  { title: "How SecureNode helped Company X prevent a ransomware attack", link: "#" },
];

function Blog() {
  return (
    <div className="blog-page">
      <h2>Latest Articles</h2>
      <ul className="articles-list">
        {articles.map((a, idx) => <li key={idx}><a href={a.link}>{a.title}</a></li>)}
      </ul>

      <h2>Case Studies</h2>
      <ul className="case-studies-list">
        {caseStudies.map((c, idx) => <li key={idx}><a href={c.link}>{c.title}</a></li>)}
      </ul>

      <section className="whitepapers">
        <h3>Downloadable Whitepapers</h3>
        <p>Provide your email to download.</p>
        <form>
          <input type="email" placeholder="Your Email" />
          <button type="submit">Download</button>
        </form>
      </section>
    </div>
  );
}

export default Blog;
