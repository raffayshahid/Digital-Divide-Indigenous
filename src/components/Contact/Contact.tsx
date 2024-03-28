import React from 'react';
import Image from 'next/image'; // Import Image component from Next.js
import styles from './Contact.module.css';

const Contact: React.FC = () => (
  <>
    <section className={styles.contact}>
      <h2>Contact Us Page</h2>
      <p>Muhammed Raffay Shahid: mrshahid@uwaterloo.ca</p>
      <p>Jerry Hu: j347hu@uwaterloo.ca</p>
      <p>Oliver Neish: oneish@uwaterloo.ca</p>
      <p>Josh Dancey: jdancey@uwaterloo.ca</p>
    </section>
  </>
);


export default Contact;
