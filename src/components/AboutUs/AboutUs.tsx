import React from 'react';
import Image from 'next/image'; // Import Image component from Next.js
import styles from './AboutUs.module.css';

const AboutUs: React.FC = () => (
  <section className={styles.aboutUs}>
    <h2>About the team</h2>
    <div className={styles.imageContainer}>
      <div className={styles.circularImage}><Image src="/DENNIS.jpeg" alt="Team Member 1" width={100} height={100} /></div>
      <div className={styles.circularImage}><Image src="/Raffay.jpg" alt="Team Member 2" width={100} height={100} /></div>
      <div className={styles.circularImage}><Image src="/path-to-your-image-3.jpg" alt="Team Member 3" width={100} height={100} /></div>
      <div className={styles.circularImage}><Image src="/path-to-your-image-4.jpg" alt="Team Member 4" width={100} height={100} /></div>
    </div>
    <p>
      We're a team of undergraduate students passionate about bringing to light the issues faced by indigenous people. We
      learned about the issues faced by Indigenous people and are passionate about making an impact by bringing awareness.
      This website hopes to bring personal and data stories together to explain how Indigenous people have been left behind
      by the digital revolution.

      We are 4 students who attend the University of Waterloo and this website is a result of learning about the issues that
      Indigenous people face in our society. We hope that this website helps alleviate some of the struggles those people
      undergo through bringing awareness.
    </p>
  </section>
);


export default AboutUs;
