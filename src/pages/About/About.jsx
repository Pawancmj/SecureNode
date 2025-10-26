// src/pages/About/About.jsx
import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about-page">
      <section className="company-overview">
        <h2>About SecureNode</h2>
        <p>Your trusted cybersecurity partner with ISO-certified expertise...</p>
      </section>

      <section className="mission-vision">
        <h3>Mission, Vision & Values</h3>
        <p>Mission: Protect businesses globally...</p>
        <p>Vision: Build a safer cyber world...</p>
        <p>Values: Trust, Security, Innovation</p>
      </section>

      <section className="leadership-team">
        <h3>Leadership Team</h3>
        {/* Add team members with images */}
      </section>

      <section className="certifications">
        <h3>Certifications & Partnerships</h3>
        <p>ISO, CEH, CISSP, AWS, Microsoft...</p>
      </section>
    </div>
  );
}

export default About;
