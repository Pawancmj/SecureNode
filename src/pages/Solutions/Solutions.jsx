// src/pages/Solutions/Solutions.jsx
import React from "react";
import SolutionCard from "../../components/SolutionCard/SolutionCard";
import "./Solutions.css";

const solutionsData = [
  { title: "Enterprise Security", description: "Comprehensive security for large companies", image: "/assets/enterprise.jpg", link: "/solutions/enterprise-security" },
  { title: "Startup Security", description: "Affordable solutions for startups", image: "/assets/startup.jpg", link: "/solutions/startup-security" },
  { title: "Healthcare Compliance", description: "HIPAA and ransomware protection", image: "/assets/healthcare.jpg", link: "/solutions/healthcare-compliance" },
  { title: "Finance Data Security", description: "Secure financial transactions", image: "/assets/finance.jpg", link: "/solutions/finance-data-security" },
  { title: "E-commerce Data Protection", description: "Protect customer data", image: "/assets/ecommerce.jpg", link: "/solutions/ecommerce-data-protection" },
];

function Solutions() {
  return (
    <div className="solutions-page">
      <h2>Our Solutions</h2>
      <div className="solutions-grid">
        {solutionsData.map((solution) => (
          <SolutionCard key={solution.title} {...solution} />
        ))}
      </div>
    </div>
  );
}

export default Solutions;
