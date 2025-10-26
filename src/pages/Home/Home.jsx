// src/pages/Home/Home.jsx
import React from "react";
import HeroSection from "../../components/HeroSection/HeroSection";
import ServiceCard from "../../components/ServiceCard/ServiceCard";
import Testimonial from "../../components/Testimonial/Testimonial";
import "./Home.css";

const servicesData = [
  { title: "Penetration Testing", description: "Identify vulnerabilities...", image: "/assets/penetration.jpg", link: "/services/penetration-testing" },
  { title: "Cloud Security", description: "Protect your cloud...", image: "/assets/cloud.jpg", link: "/services/cloud-security" },
  { title: "Threat Monitoring", description: "24/7 SOC monitoring...", image: "/assets/threat.jpg", link: "/services/threat-monitoring" },
  { title: "Incident Response", description: "Rapid response to threats...", image: "/assets/incident.jpg", link: "/services/incident-response" },
];

const testimonialsData = [
  { quote: "SecureNode protected our infrastructure!", client: "Company A", logo: "/assets/clientA.png" },
  { quote: "Excellent cybersecurity services.", client: "Company B", logo: "/assets/clientB.png" },
];

function Home() {
  return (
    <div className="home-page">
      <HeroSection />
      
      <section className="services-snapshot">
        <h2>Our Services Snapshot</h2>
        <div className="services-cards">
          {servicesData.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </section>

      <section className="testimonials-section">
        <h2>Client Testimonials</h2>
        <div className="testimonials-container">
          {testimonialsData.map((t, idx) => (
            <Testimonial key={idx} {...t} />
          ))}
        </div>
      </section>

      <section className="cta-section">
        <h2>Ready to secure your business?</h2>
        <a href="/contact" className="cta-button">Contact Us Now</a>
      </section>
    </div>
  );
}

export default Home;
