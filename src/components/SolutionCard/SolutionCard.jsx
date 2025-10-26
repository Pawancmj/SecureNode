// src/components/SolutionCard/SolutionCard.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./SolutionCard.css";

function SolutionCard({ title, description, image, link }) {
  return (
    <div className="solution-card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <Link to={link} className="cta-button">Learn More</Link>
    </div>
  );
}

export default SolutionCard;
