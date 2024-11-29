import React from "react";
import { Link } from "react-router-dom";
import "../styles.css";

const AboutSection = () => {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/academiarise" className="nav-link">
            Home
          </Link>
          <Link to="/mentorconnect" className="nav-link">
            Connect
          </Link>
          <Link to="/events" className="nav-link">
          Events
          </Link>
          <Link to="/login" className="nav-link">
          Login
          </Link>

        </div>
      </nav>
      <section className="about-section">
        <h2 className="about-title">Academia Rise Opens Doors</h2>
        <div className="about-content">
          <div className="about-text">
            <h3 className="about-subtitle">Collaborative Learning</h3>
            <p className="about-description">
              <strong>
                Join study groups, collaborate on projects, and connect with
                mentors.
              </strong>
            </p>
          </div>
          <div className="about-image">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/b36aae2d5a2074432e40c0173447e54fa59e6f95d2e2feb250700641aa600cad?placeholderIfAbsent=true&apiKey=fd9e135478154db3981b27a1ffcad4e1"
              alt="Collaborative Learning"
              className="about-img"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSection;
