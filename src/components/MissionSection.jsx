import React from 'react';
import '../styles.css';
const MissionSection = () => {
  return (
    <section className="mission-section">
      <div className="mission-content">
        <div className="mission-row">
          <div className="mission-text">
            <span className="mission-tag">Academia Rise</span>
            <h2 className="mission-title">Our Mission</h2>
            <div className="mission-divider">
              <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/de410fba2f37a1bb658b708fa9a137b3773578fad36599fa621cf7ac289c61b0?placeholderIfAbsent=true&apiKey=fd9e135478154db3981b27a1ffcad4e1" alt="Mission Icon" className="mission-icon" />
              <div className="mission-line" />
            </div>
            <p className="mission-description">
              At AcademiaRise, our mission is to ensure every student has the resources, support, and opportunities they need to excel academically and personally. Whether you're looking for a study group, attending events, or connecting with potential mentors, we're here to help you grow every step of the way.
            </p>
            <p className="mission-slogan">
              Connecting campus communities for a brighter future.
            </p>
            <h2 className="faq-title">FAQs</h2>
          </div>
          <div className="mission-image">
            <div className="mission-image-content">
              <div className="mission-image-wrapper">
                <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/ef5634a26ab7e028e08b4831ad4b9f679abf20cc786b3fc65328246f435448dc?placeholderIfAbsent=true&apiKey=fd9e135478154db3981b27a1ffcad4e1" alt="Mission" className="mission-image-main" />
              </div>
              <div className="mission-image-side">
                <div className="mission-image-side-content" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;