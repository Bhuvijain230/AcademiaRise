import React from 'react';
import '../styles.css';
const CommunitySection = () => {
  return (
    <section className="community-section">
      <div className="community-content">
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/2a0236a9bd7f8237db1c1a47db6bd7a8e03164e9a31cb1bfea9b98745a69d165?placeholderIfAbsent=true&apiKey=fd9e135478154db3981b27a1ffcad4e1" alt="Community Background" className="community-bg" />
        <div className="community-text">
          <h2 className="community-title">Connect With Our Campus Community</h2>
          <a href="#" className="community-link">
            <span className="community-link-text">Explore Your Visit Options</span>
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/b358dc3fa46dd7ec3a82d9a91ab4a8447531cd157288ede7e9b8b5d6fef83d7f?placeholderIfAbsent=true&apiKey=fd9e135478154db3981b27a1ffcad4e1" alt="Arrow" className="community-link-icon" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;