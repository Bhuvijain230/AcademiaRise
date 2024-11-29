import React from 'react';
import '../styles.css';
const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-overlay">
        <div className="hero-content">
          <h1 className="hero-title">
            How will we make <br /> your impact?
          </h1>
          <p className="hero-description">
            At AcademiaRise, we believe in the power of a connected campus. This platform is designed to bring students, mentors, and opportunities together, fostering an environment of support, learning, and innovation. Whether you're looking to join study groups, attend events, or connect with peers, AcademiaRise is your gateway to a thriving college community.
          </p>
        </div>
        <FeatureGrid />
      </div>
    </section>
  );
};

const FeatureGrid = () => {
  const features = [
    { tag: "Academic Rigor", title: "Embrace Challenge", color: "#a41e34" },
    { tag: "Powerful Outcomes", title: "Build Network", color: "#68d2df" },
    { tag: "Experiential Learning", title: "Immerse Yourself", color: "#68d2df" },
    { tag: "Campus Life", title: "Find Your Place", color: "#f3e860" }
  ];

  return (
    <div className="feature-grid">
      {features.map((feature, index) => (
        <div key={index} className="feature-item">
          <div className="feature-overlay">
            <span className="feature-tag" style={{ backgroundColor: feature.color }}>
              {feature.tag}
            </span>
            <h3 className="feature-title">{feature.title}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HeroSection;