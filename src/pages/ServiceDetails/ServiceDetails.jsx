// src/pages/ServiceDetails/ServiceDetails.jsx
import React from "react";
import { useParams } from "react-router-dom";
import "./ServiceDetails.css";

const servicesDetailsData = {
  "penetration-testing": {
    title: "Penetration Testing",
    description: "Identify vulnerabilities in your system before attackers do.",
    benefits: ["Prevent attacks", "Improve security posture", "Regulatory compliance"],
    features: ["Network testing", "Web app testing", "Social engineering tests"],
    industries: ["Finance", "Healthcare", "Education"],
    caseStudy: "Helped Company X secure their network and prevent breaches."
  },
  // Add other services similarly
};

function ServiceDetails() {
  const { id } = useParams();
  const service = servicesDetailsData[id];

  if (!service) return <h2>Service not found</h2>;

  return (
    <div className="service-details-page">
      <h2>{service.title}</h2>
      <p>{service.description}</p>

      <section className="benefits">
        <h3>Why It Matters</h3>
        <ul>{service.benefits.map((b, idx) => <li key={idx}>{b}</li>)}</ul>
      </section>

      <section className="features">
        <h3>Key Features</h3>
        <ul>{service.features.map((f, idx) => <li key={idx}>{f}</li>)}</ul>
      </section>

      <section className="industries">
        <h3>Industries That Need It</h3>
        <ul>{service.industries.map((i, idx) => <li key={idx}>{i}</li>)}</ul>
      </section>

      <section className="case-study">
        <h3>Case Study</h3>
        <p>{service.caseStudy}</p>
      </section>

      <a href="/contact" className="cta-button">Request This Service</a>
    </div>
  );
}

export default ServiceDetails;
