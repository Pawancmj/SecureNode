// src/components/IndustryBlock/IndustryBlock.jsx
import React from "react";
import "./IndustryBlock.css";

function IndustryBlock({ name, description, image }) {
  return (
    <div className="industry-block">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>{description}</p>
    </div>
  );
}

export default IndustryBlock;
