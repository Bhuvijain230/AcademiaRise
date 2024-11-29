import React from 'react';
import styles from './styles.module.css';

export const ContactForm = () => {
  return (
    <form className={styles.contactForm}>
      <div className={styles.formField}>
        <label htmlFor="name" className={styles.formLabel}>Name</label>
        <input 
          type="text" 
          id="name"
          className={styles.formInput}
          placeholder="Enter Your Full Name"
        />
      </div>
      
      <div className={styles.formField}>
        <label htmlFor="email" className={styles.formLabel}>Email</label>
        <input 
          type="email" 
          id="email"
          className={styles.formInput}
          placeholder="Enter Your Email Address"
        />
      </div>
      
      <div className={styles.formField}>
        <label htmlFor="phone" className={styles.formLabel}>Phone</label>
        <input 
          type="tel" 
          id="phone"
          className={styles.formInput}
          placeholder="XXXXXXXXXX"
        />
      </div>
      
      <button type="submit" className={styles.submitButton}>OK</button>
    </form>
  );
};