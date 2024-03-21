import React from 'react';
import styles from './Footer.module.css'; // Ensure the path matches where you saved the CSS module

const Footer: React.FC = () => (
  <footer className={styles.footer}>
    <div className={styles.newsletterSignup}>
      <p>Contact Us: [email] © University of Waterloo</p>
      <form>
        <input
          type="email"
          placeholder="Enter your email to subscribe"
          className={styles.inputField}
          required
        />
        <button type="submit" className={styles.submitButton}>Subscribe</button>
      </form>
    </div>
  </footer>
);

export default Footer;
