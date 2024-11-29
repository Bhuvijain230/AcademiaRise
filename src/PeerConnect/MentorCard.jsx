import React from 'react';
import styles from './styles.module.css';

export const MentorCard = ({ image, name, title, email, qualifications }) => {
  return (
    <article className={styles.mentorWrapper}>
      <div className={styles.imageColumn}>
        <img loading="lazy" src={image} alt={`Portrait of ${name}`} className={styles.mentorImage} />
      </div>
      <div className={styles.infoColumn}>
        <div className={styles.mentorInfo}>
          {name}<br />
          {title}<br />
          {email}<br />
          {qualifications}
        </div>
      </div>
    </article>
  );
};