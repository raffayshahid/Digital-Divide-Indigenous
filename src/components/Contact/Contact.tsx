import React from 'react';
import styles from './Contact.module.css';
import LinkedInIcon from '@mui/icons-material/LinkedIn'; // Importing LinkedIn icon

const Contact: React.FC = () => (
  <>
    <section className={styles.contact}>
      <h2>Contact Us</h2>
      <div>
        <h3>Email Addresses</h3>
        <p>Muhammed Raffay Shahid: <a href="mailto:mrshahid@uwaterloo.ca">mrshahid@uwaterloo.ca</a> <a href="https://www.linkedin.com/in/raffayshahid786/"><LinkedInIcon /></a></p>
        <p>Jerry Hu: <a href="mailto:j347hu@uwaterloo.ca">j347hu@uwaterloo.ca</a> <a href="https://www.linkedin.com/in/jerry-hu-39b332205/"><LinkedInIcon /></a></p>
        <p>Oliver Neish: <a href="mailto:oneish@uwaterloo.ca">oneish@uwaterloo.ca</a> <a href="https://www.linkedin.com/in/oliverneish/"><LinkedInIcon /></a></p>
        <p>Josh Dancey: <a href="mailto:jdancey@uwaterloo.ca">jdancey@uwaterloo.ca</a> <a href="https://www.linkedin.com/in/joshua-dancey-002a28211/"><LinkedInIcon /></a></p>
      </div>
    </section>
  </>
);

export default Contact;
