// src/pages/Industries/Industries.jsx
import React from "react";
import IndustryBlock from "../../components/IndustryBlock/IndustryBlock";
import "./Industries.css";

const industriesData = [
  { name: "Finance & Banking", description: "Protecting sensitive financial transactions", image: "/assets/finance.jpg" },
  { name: "Healthcare", description: "HIPAA compliance & ransomware defense", image: "/assets/healthcare.jpg" },
  { name: "Education", description: "Securing student & staff data", image: "/assets/education.jpg" },
  { name: "Government", description: "National security & infrastructure", image: "/assets/government.jpg" },
  { name: "E-commerce", description: "Payment security, customer data protection", image: "/assets/ecommerce.jpg" },
];

function Industries() {
  return (
    <div className="industries-page">
      <h2>Industries We Secure</h2>
      <div className="industries-grid">
        {industriesData.map((industry) => (
          <IndustryBlock key={industry.name} {...industry} />
        ))}
      </div>
    </div>
  );
}

export default Industries;
