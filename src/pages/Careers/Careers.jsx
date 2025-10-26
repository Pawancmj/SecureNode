// src/pages/Careers/Careers.jsx
import React from "react";
import "./Careers.css";

const positions = [
  { title: "Cybersecurity Analyst", link: "#" },
  { title: "SOC Engineer", link: "#" },
  { title: "Security Research Intern", link: "#" },
];

function Careers() {
  return (
    <div className="careers-page">
      <h2>Why Work With Us</h2>
      <p>Learn, grow, and get certified while securing global businesses.</p>

      <h3>Open Positions</h3>
      <ul>
        {positions.map((p, idx) => <li key={idx}><a href={p.link}>{p.title}</a></li>)}
      </ul>

      <section className="application-form">
        <h3>Apply Now</h3>
        <form>
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email" required />
          <input type="file" placeholder="Upload Resume" />
          <textarea placeholder="Cover Letter"></textarea>
          <button type="submit">Submit Application</button>
        </form>
      </section>
    </div>
  );
}

export default Careers;
