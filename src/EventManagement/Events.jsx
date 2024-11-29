import React from 'react';
import { EventCard } from './EventCard';
import styles from './Events.module.css';
import { Link } from "react-router-dom";
import '../styles.css';

const eventData = [
  {
    date: "4 Aug' 2024",
    title: "Alumni Meet 2024",
    description: "The Alumni Meet 2024 of Mody University, Lakshmangarh Rajasthan was held at on-campus at Main Auditorium on August 31' 24. The Meet was attended..",
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/036b6b6d5f023dccbb31e5c8b2ff953749dba1655d5bde493c41ebe4cc7e4e41?placeholderIfAbsent=true&apiKey=fd9e135478154db3981b27a1ffcad4e1"
  },
  {
    date: "30 Jan' 2024",
    title: "Mody University FDC 2024",
    description: "Mody University organizes Week Long Events for Founder's Day Celebration (FDC) between 22 nd – 26 th January 2024 Mody University will be organizing w...",
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/1d83463b3baea7f962c7f33b32ae4b13d59f17554710930d86dfb957c6752848?placeholderIfAbsent=true&apiKey=fd9e135478154db3981b27a1ffcad4e1"
  },
  {
    date: "20 Nov' 2024",
    title: "CSI National Student Convention",
    description: "ABOUT THE CONVENTION The seed for the Computer Society of India (CSI) was first shown in the year 1965 with a handful of IT enthusiasts who were a com...",
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/2bbb8300800c7902f43e66d0b546bb673826084d13e9e552ece8102f18be6ab1?placeholderIfAbsent=true&apiKey=fd9e135478154db3981b27a1ffcad4e1"
  }
];

export const Events = () => {
  return (
    <>
    <nav className="navbar">
        <div className="navbar-container">
          <Link to="/academiarise" className="nav-link">
            Home
          </Link>
          <Link to="/mentorconnect" className="nav-link">
            Connect
          </Link>
          <Link to="/events" className="nav-link">
          Events
          </Link>
          <Link to="/login" className="nav-link">
          Login
          </Link>
        </div>
      </nav>
    <main className={styles.eventsContainer}>
      {/* <header className={styles.topBar}>
        <div className={styles.headerContent}>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/a15329c12b804b8c3b1d5ec38f5895b9b910e37c1170d7c811652884e048bc69?placeholderIfAbsent=true&apiKey=fd9e135478154db3981b27a1ffcad4e1"
            alt="University Logo"
            className={styles.logo}
          />
          <nav className={styles.navigation}>
            <a href="#visit" className={styles.navLink}>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/fdefd2fc97c25aa6bab4c16962a3cdce992d3b4f825a746e549033220ccf2a58?placeholderIfAbsent=true&apiKey=fd9e135478154db3981b27a1ffcad4e1"
                alt=""
                className={styles.navIcon}
              />
              <span>Visit</span>
            </a>
            <a href="#connect" className={styles.navLink}>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/84368df8ea284bd9603899698b3b8b9ef91687f1ddb8d06cc3f64d7f3485e684?placeholderIfAbsent=true&apiKey=fd9e135478154db3981b27a1ffcad4e1"
                alt=""
                className={styles.navIcon}
              />
              <span>Connect</span>
            </a>
            <a href="#login" className={styles.navLink}>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/448797b0098a31f203dbfa1a168eb3dbac08dd8f0f9c7b1dc523d59df1790a83?placeholderIfAbsent=true&apiKey=fd9e135478154db3981b27a1ffcad4e1"
                alt=""
                className={styles.navIcon}
              />
              <span>LOGIN</span>
            </a>
            <button className={styles.actionButton} aria-label="Menu"></button>
          </nav>
        </div>
      </header> */}

      <h1 className={styles.calendarTitle}>Event Calendar</h1>
      
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/1dcab53061ec7dd8a61aa2ec287aaa1460a80ba8d3fd72dca99e1e0d05ff565b?placeholderIfAbsent=true&apiKey=fd9e135478154db3981b27a1ffcad4e1"
        alt="Event Calendar"
        className={styles.calendarImage}
      />
      
      <h2 className={styles.announcementsTitle}>Announcements</h2>
      
      <section className={styles.announcementsSection}>
        <div className={styles.contentWrapper}>
          <div className={styles.announcements}>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/e0ab1272b74c6264ea233b7edb90e8f227ad9b9ea13fe8258f0918ebfc911085?placeholderIfAbsent=true&apiKey=fd9e135478154db3981b27a1ffcad4e1"
              alt=""
              className={styles.backgroundImage}
            />
            <div className={styles.eventsList}>
              {eventData.map((event, index) => (
                <EventCard key={index} {...event} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
    </>
  );
};
export default Events;