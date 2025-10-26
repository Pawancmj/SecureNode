// src/pages/SolutionDetails/SolutionDetails.jsx
import React from "react";
import { useParams } from "react-router-dom";
import "./SolutionDetails.css";

const solutionDetailsData = {
  "enterprise-security": {
    title: "Enterprise Security",
    challenges: ["Complex networks", "High data value", "Multiple endpoints"],
    solution: "We provide Zero Trust, Cloud Monitoring, Compliance Support.",
    features: ["Zero Trust", "Cloud Monitoring", "Compliance Support"],
    caseStudy: "Protected a healthcare provider from ransomware attacks."
  },
  // Add other solutions similarly
};

function SolutionDetails() {
  const { id } = useParams();
  const solution = solutionDetailsData[id];

  if (!solution) return <h2>Solution not found</h2>;

  return (
    <div className="solution-details-page">
      <h2>{solution.title}</h2>

      <section className="challenges">
        <h3>Challenges</h3>
        <ul>{solution.challenges.map((c, idx) => <li key={idx}>{c}</li>)}</ul>
      </section>

      <section className="solution">
        <h3>Our Solution</h3>
        <p>{solution.solution}</p>
      </section>

      <section className="features">
        <h3>Features</h3>
        <ul>{solution.features.map((f, idx) => <li key={idx}>{f}</li>)}</ul>
      </section>

      <section className="case-study">
        <h3>Case Study</h3>
        <p>{solution.caseStudy}</p>
      </section>

      <a href="/contact" className="cta-button">Talk to Our Experts</a>
    </div>
  );
}

export default SolutionDetails;
