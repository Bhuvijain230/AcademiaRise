import React from 'react';
import '../styles.css';
const FeatureSection = () => {
  return (
    <section className="feature-section">
      <div className="feature-text">
        <h2 className="feature-title">Events & Networking</h2>
        <p className="feature-description">
          Discover campus events, workshops, and opportunities to grow your professional network.
        </p>
      </div>
      <div className="feature-image">
        <div className="feature-img-wrapper">
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/22ecd3dcec807173ecaef9a030e56a2eb7cc1048571bc0709122142711ca4b0d?placeholderIfAbsent=true&apiKey=fd9e135478154db3981b27a1ffcad4e1" alt="Events & Networking" className="about-img" />
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;