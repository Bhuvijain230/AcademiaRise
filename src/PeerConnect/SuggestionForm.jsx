import React from 'react';
import styles from './styles.module.css';

export const SuggestionForm = () => {
  return (
    <form className={styles.suggestionForm}>
      <div className={styles.formField}>
        <label htmlFor="suggesterName" className={styles.formLabel}>Your Name (Optional)</label>
        <input type="text" id="suggesterName" className={styles.formInput} />
      </div>

      <div className={styles.formField}>
        <label htmlFor="suggestionFor" className={styles.formLabel}>Suggestion for</label>
        <input type="text" id="suggestionFor" className={styles.formInput} />
      </div>

      <div className={styles.formField}>
        <label htmlFor="suggestion" className={styles.formLabel}>Your Suggestion</label>
        <textarea id="suggestion" className={styles.formTextarea} />
      </div>

      <button type="submit" className={styles.submitButton}>SUBMIT</button>
    </form>
  );
};