import React, { useState } from 'react';
import styles from './styles.module.css';
import { MentorCard } from './MentorCard';
import { PeerGroupCard } from './PeerGroupCard';
import { ContactForm } from './ContactForm';
import { SuggestionForm } from './SuggestionForm';
import { Link } from "react-router-dom";
import '../styles.css';

const mentors = [
  {
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/cbb00b429731b4250e81f2e27e32cf3cb45d544cc424e3d94b1635173d40499b?placeholderIfAbsent=true&apiKey=fd9e135478154db3981b27a1ffcad4e1",
    name: "Prof. (Dr.) Prateek Bhanti",
    title: "(Professor & Dean)",
    email: "prateekbhanti.cet@modyuniversity.ac.in",
    qualifications: "Ph.D (CS), M Tech (IT), M Sc (CS)"
  },
  {
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/a3bf4f3955d841523fca7e38ac6016cd1876aafa810534b573f5460a8ab13165?placeholderIfAbsent=true&apiKey=fd9e135478154db3981b27a1ffcad4e1",
    name: "Dr. Vinod Maan",
    title: "(Professor & Head-Student Affairs)",
    email: "vinodmaan.cet@modyuniversity.ac.in",
    qualifications: "MSc (Theoretical Computer Science), MTech (CSE), Ph.D (CSE)"
  },
  {
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/86552d9bfc94f68c3e6fcb806d51cbd01f6dd28da9e2724b1139e25a2d742a57?placeholderIfAbsent=true&apiKey=fd9e135478154db3981b27a1ffcad4e1",
    name: "Dr. Vikas Raina",
    title: "(Associate Professor)",
    email: "",
    qualifications: "Ph.D., M. Tech, B.E.\nResearch Interest:\nWSN, AI"
  },
  {
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/e337d4133b5d9d0d36f57e076754fb4f51863f087c1f2c1ed79bea0e8ae9636f?placeholderIfAbsent=true&apiKey=fd9e135478154db3981b27a1ffcad4e1",
    name: "Dr. Amit Khare",
    title: "(Professor-CSE)",
    email: "",
    qualifications: "Ph.D. (CSE), M.Tech (CSE), MCA, Diploma in Mechanical Engineering"
  },
  {
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/fc84b8997d56dd8a8c4027c809ffeb6957a3b52c996d4c9b542cc437d34be931?placeholderIfAbsent=true&apiKey=fd9e135478154db3981b27a1ffcad4e1",
    name: "Dr. Somil Jain",
    title: "(Assistant Professor)",
    email: "somiljain.cet@modyuniversity.ac.in",
    qualifications: "B Tech (CSE), M Tech, PhD"
  }
];

const socialLinks = [
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/70f98a5d3c99ec12daedb3ca5f1b53360b1d2158bf61a424d42b4df604848741?placeholderIfAbsent=true&apiKey=fd9e135478154db3981b27a1ffcad4e1", alt: "Facebook" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/0c5a87b134f44a6562febfe1d7236063eee86a156a7764c06548d47378d3c9ed?placeholderIfAbsent=true&apiKey=fd9e135478154db3981b27a1ffcad4e1", alt: "LinkedIn" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/8b1c2970c24be06a3b0bc20d4718bd05fc53f5aef26cab2bfc6be36c28ccfcec?placeholderIfAbsent=true&apiKey=fd9e135478154db3981b27a1ffcad4e1", alt: "Youtube" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/e51cbee65710e0fd09ede1f001c7bb88dd2bb305c7fa5e0267d480f166b5771e?placeholderIfAbsent=true&apiKey=fd9e135478154db3981b27a1ffcad4e1", alt: "Twitter" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/a3331d5c2f4ce8cda8df97bc5d76cda6cbf3203fec8b9b6b09f1dc576f476143?placeholderIfAbsent=true&apiKey=fd9e135478154db3981b27a1ffcad4e1", alt: "Binge" }
];

export const MentorConnect = () => {
  const [dialog, setDialog] = useState({ isVisible: false, mentorName: "" });

  const handleOpenDialog = (mentorName) => {
    setDialog({ isVisible: true, mentorName });
  };

  const handleCloseDialog = () => {
    setDialog({ isVisible: false, mentorName: "" });
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/academiarise" className="nav-link">Home</Link>
          <Link to="/mentorconnect" className="nav-link">Connect</Link>
          <Link to="/events" className="nav-link">Events</Link>
          <Link to="/login" className="nav-link">Login</Link>
        </div>
      </nav>
      
      <main className={styles.mainContainer}>
        <h1 className={styles.pageTitle}>Mentor Connect</h1>

        {mentors.map((mentor, index) => (
          <section key={index} className={styles.mentorSection}>
            <MentorCard {...mentor} />
            <button
              className={styles.connectButton}
              onClick={() => handleOpenDialog(mentor.name)}
            >
              Connect
            </button>
          </section>
        ))}

        <section className={styles.studentConnectSection}>
          <h2 className={styles.studentConnectTitle}>Student Connect</h2>
          <PeerGroupCard />
          <ContactForm />
          <SuggestionForm />
        </section>

        <section className={styles.socialLinksSection}>
          <h2 className={styles.socialLinksTitle}>Follow Us</h2>
          <div className={styles.socialLinksContainer}>
            {socialLinks.map((link, index) => (
              <img key={index} src={link.src} alt={link.alt} className={styles.socialLinkIcon} />
            ))}
          </div>
        </section>

        {/* Dialog Box */}
        {dialog.isVisible && (
          <div className={styles.dialogOverlay}>
            <div className={styles.dialogBox}>
              <h3>Connect with {dialog.mentorName}</h3>
              <p>Would you like to send a connection request to {dialog.mentorName}?</p>
              <button onClick={handleCloseDialog} className={styles.dialogButton}>Yes</button>
              <button onClick={handleCloseDialog} className={styles.dialogButton}>No</button>
            </div>
          </div>
        )}
      </main>
    </>
  );
};

export default MentorConnect;
