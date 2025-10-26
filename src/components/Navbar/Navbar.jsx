// src/components/Navbar/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">SecureNode</div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/solutions">Solutions</Link></li>
        <li><Link to="/industries">Industries</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/careers">Careers</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
      <Link to="/contact" className="cta-button">Free Consultation</Link>
    </nav>
  );
}

export default Navbar;
