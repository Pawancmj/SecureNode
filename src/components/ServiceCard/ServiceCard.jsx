// src/components/ServiceCard/ServiceCard.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./ServiceCard.css";

function ServiceCard({ title, description, image, link }) {
  return (
    <div className="service-card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <Link to={link} className="cta-button">Learn More</Link>
    </div>
  );
}

export default ServiceCard;
