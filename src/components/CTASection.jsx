import React from 'react';
import '../styles.css';
const CTASection = () => {
  return (
    <section className="cta-section">
      <div className="cta-content">
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/c43ee3d1c194288c259d813471acdfcef7d58c4ae4eb07a491c0df47d3db0038?placeholderIfAbsent=true&apiKey=fd9e135478154db3981b27a1ffcad4e1" alt="CTA Background" className="cta-background" />
        <a href="#" className="cta-button">
          <span className="cta-button-text">Apply</span>
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/97c2abbf76e64d997c3d45a6730d51f30231470ac52a4797ea21c5d9c1e71a61?placeholderIfAbsent=true&apiKey=fd9e135478154db3981b27a1ffcad4e1" alt="Arrow" className="cta-button-icon" />
        </a>
      </div>
    </section>
  );
};

export default CTASection;

