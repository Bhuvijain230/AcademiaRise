import React from 'react';
import styles from './styles.module.css';

export const PeerGroupCard = ({ title, className }) => {
  return (
    <section className={`${styles.peerGroupCard} ${className}`}>
      <h3 className={styles.peerGroupTitle}>{title}</h3>
    </section>
  );
};