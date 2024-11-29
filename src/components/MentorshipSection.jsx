import React from 'react';
import '../styles.css';
const MentorshipSection = () => {
  return (
    <section className="mentorship-section">
      <div className="mentorship-text">
        <h2 className="mentorship-title">Guidance & Mentorship</h2>
        <p className="mentorship-description">
          Get insights from seniors, professors, and industry experts who can help guide your academic and professional journey.
        </p>
      </div>
      <div className="mentorship-image">
        <div className="mentorship-img-wrapper">
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/dea209e0438f93b02d5e8116fe72cbb0efd3f68354fc74db6fca7f671f6ab6f7?placeholderIfAbsent=true&apiKey=fd9e135478154db3981b27a1ffcad4e1" alt="Guidance & Mentorship" className="mentorship-img" />
        </div>
      </div>
    </section>
  );
};

export default MentorshipSection;