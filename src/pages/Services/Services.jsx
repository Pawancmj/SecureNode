// src/pages/Services/Services.jsx
import React from "react";
import ServiceCard from "../../components/ServiceCard/ServiceCard";
import "./Services.css";

const servicesData = [
  { title: "Penetration Testing", description: "Identify vulnerabilities...", image: "/assets/penetration.jpg", link: "/services/penetration-testing" },
  { title: "Vulnerability Assessment", description: "Discover weak points...", image: "/assets/vuln.jpg", link: "/services/vulnerability-assessment" },
  { title: "Cloud Security", description: "Protect cloud assets...", image: "/assets/cloud.jpg", link: "/services/cloud-security" },
  { title: "Incident Response", description: "Rapid threat response...", image: "/assets/incident.jpg", link: "/services/incident-response" },
  { title: "Compliance Consulting", description: "Ensure regulations...", image: "/assets/compliance.jpg", link: "/services/compliance-consulting" },
  { title: "Threat Monitoring", description: "24/7 monitoring...", image: "/assets/threat.jpg", link: "/services/threat-monitoring" },
  { title: "Cybersecurity Training", description: "Train your team...", image: "/assets/training.jpg", link: "/services/cybersecurity-training" },
];

function Services() {
  return (
    <div className="services-page">
      <h2>Our Services</h2>
      <div className="services-grid">
        {servicesData.map((service) => (
          <ServiceCard key={service.title} {...service} />
        ))}
      </div>
    </div>
  );
}

export default Services;
