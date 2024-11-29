import React from 'react';
import '../styles.css';
const FAQSection = () => {
  const faqs = [
    {
      question: "What is Academia Rise?",
      answer: "AcademiaRise is a platform designed to help students connect, collaborate, and grow together within their campus community. It offers features such as study groups, event tracking, and mentorship opportunities to support your academic and personal growth."
    },
    {
      question: "How do I join a study group or event?",
      answer: "Simply browse the available study groups or campus events in the 'Groups & Events' section. You can join any open group or register for an event by clicking the \"Join\" or \"Register\" button."
    },
    {
      question: "How do I find a mentor?",
      answer: "In the 'Mentorship' section, you can explore available mentors, including seniors, professors, and alumni. You can send a request to connect with a mentor based on your field of interest or goals."
    },
    {
      question: "How do I stay updated on new events or announcements?",
      answer: "You can stay informed through push notifications or email alerts. Make sure to enable notifications in your profile settings so you never miss out on important events or announcements."
    },
    {
      question: "Can I customize my profile?",
      answer: "Absolutely! You can personalize your AcademiaRise profile to highlight your academic interests, skills, and future goals. This helps you connect with groups and mentors that align with your aspirations."
    }
  ];

  return (
    <section className="faq-section">
      {faqs.map((faq, index) => (
        <div key={index} className="faq-item">
          <h3 className="faq-question">{faq.question}</h3>
          <p className="faq-answer">{faq.answer}</p>
        </div>
      ))}
      <a href="#" className="footer-link">
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/992feb0462537e54ca8645b2ba0fee15a1d56ba1562aa139897f0c857103fda3?placeholderIfAbsent=true&apiKey=fd9e135478154db3981b27a1ffcad4e1" alt="" className="footer-link-divider" />
        <span className="footer-link-text">All News</span>
      </a>
    </section>
  );
};

export default FAQSection;