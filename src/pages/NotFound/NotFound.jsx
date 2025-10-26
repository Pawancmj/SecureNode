// src/pages/NotFound/NotFound.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";

function NotFound() {
  return (
    <div className="notfound-page">
      <h2>Oops! Page Not Found.</h2>
      <p>The page you are looking for doesn’t exist.</p>
      <Link to="/" className="cta-button">Go Back Home</Link>
    </div>
  );
}

export default NotFound;
