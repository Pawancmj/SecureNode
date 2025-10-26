// src/pages/Contact/Contact.jsx
import React from "react";
import ContactForm from "../../components/ContactForm/ContactForm";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact-page">
      <h2>Contact Us</h2>

      <section className="contact-form-section">
        <ContactForm />
      </section>

      <section className="contact-info">
        <h3>Direct Contact</h3>
        <p>Email: info@securenode.com</p>
        <p>Phone: +91-1234567890</p>
        <p>Address: 123 Cyber Street, India</p>
        {/* Optionally embed Google Map */}
      </section>

      <section className="social-media">
        <h3>Follow Us</h3>
        <p>LinkedIn | Twitter | Instagram</p>
      </section>
    </div>
  );
}

export default Contact;
