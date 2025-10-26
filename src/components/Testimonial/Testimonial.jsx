// src/components/Testimonial/Testimonial.jsx
import React from "react";
import "./Testimonial.css";

function Testimonial({ quote, name, company, logo }) {
  return (
    <div className="testimonial">
      <p>"{quote}"</p>
      <div className="testimonial-author">
        {logo && <img src={logo} alt={company} />}
        <div>
          <strong>{name}</strong>
          <span>{company}</span>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
