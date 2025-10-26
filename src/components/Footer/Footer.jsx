// src/components/Footer/Footer.jsx
import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-logo">SecureNode</div>
      <p>Securing businesses with trusted cybersecurity solutions.</p>
      <div className="footer-links">
        <span>Home | About | Services | Solutions | Blog | Careers | Contact</span>
      </div>
      <div className="footer-contact">
        <p>Email: info@securenode.com</p>
        <p>Phone: +91-1234567890</p>
      </div>
      <p>© 2025 SecureNode. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
