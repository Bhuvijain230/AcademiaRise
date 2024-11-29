import React from 'react';
import '../styles.css';
const HowItWorks = () => {
  const steps = [
    {
      title: "Create Your Profile",
      description: "Personalize your account to match your interests and academic goals. Set up your profile to showcase what you're passionate about and what you're looking to achieve.",
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/4ea03b33fe806f52cf298428ab51903811df521a9643e9b59f2aef55db113971?placeholderIfAbsent=true&apiKey=fd9e135478154db3981b27a1ffcad4e1"
    },
    {
      title: "Join Groups & Events",
      description: "Discover various study groups and campus events tailored to your interests. Easily join academic or extracurricular groups and stay updated with the latest campus activities through a dynamic events calendar. Engage with like-minded peers and grow your campus network.",
      image: null
    },
    {
      title: "Get Mentorship",
      description: "Connect with experienced mentors, including seniors, professors, or alumni. Receive personalized guidance to help you navigate your academic journey, career path, or personal development. Find the support you need to achieve your goals and make informed decisions.",
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/cab58980acf3bab3211c64eb0392f884a81b3daf95ff88c5f2115119f23830f8?placeholderIfAbsent=true&apiKey=fd9e135478154db3981b27a1ffcad4e1"
    }
  ];

  return (
    <section className="how-it-works">
      <h2 className="how-it-works-title">How It Works?</h2>
      <div className="how-it-works-content">
        {steps.map((step, index) => (
          <React.Fragment key={index}>
            <div className="step-container">
              <div className="step-content">
                {step.image && <img src={step.image} alt={step.title} className="step-image" />}
                <h3 className="step-title">{step.title}</h3>
                <p className="step-description">{step.description}</p>
              </div>
            </div>
            {index < steps.length - 1 && <div className="step-divider" />}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;