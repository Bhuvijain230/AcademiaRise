import React from 'react';
import styles from './Events.module.css';

export const EventCard = ({ date, title, description, imageUrl }) => {
  return (
    <article className={styles.eventCard}>
      <div className={styles.dateWrapper}>
        <img
          loading="lazy"
          src={imageUrl}
          alt=""
          className={styles.calendarIcon}
        />
        <time className={styles.date}>{date}</time>
      </div>
      <h3 className={styles.eventTitle}>{title}</h3>
      <p className={styles.eventDescription}>{description}</p>
    </article>
  );
};