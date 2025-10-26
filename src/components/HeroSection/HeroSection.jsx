// src/components/HeroSection/HeroSection.jsx
import React from "react";
import "./HeroSection.css";

function HeroSection({ title, subtitle, ctaText, ctaLink }) {
  return (
    <section className="hero-section">
      <h1>{title}</h1>
      <p>{subtitle}</p>
      <a href={ctaLink} className="cta-button">{ctaText}</a>
    </section>
  );
}

export default HeroSection;
