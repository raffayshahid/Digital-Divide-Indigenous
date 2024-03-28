import React from 'react';
import Image from 'next/image'; // Import Image component from Next.js
import styles from './AboutUs.module.css';

const AboutUs: React.FC = () => (
  <section className={styles.aboutUs}>
    <h2>About the team</h2>
    <div className={styles.imageContainer}>
      <div className={styles.circularImage}><Image src="/Oliver.jpeg" alt="Team Member 1" width={100} height={100} /></div>
      <div className={styles.circularImage}><Image src="/Raffay.jpg" alt="Team Member 2" width={100} height={100} /></div>
      <div className={styles.circularImage}><Image src="/Jerry.jpeg" alt="Team Member 3" width={100} height={100} /></div>
      <div className={styles.circularImage}><Image src="/path-to-your-image-4.jpg" alt="Team Member 4" width={100} height={100} /></div>
    </div>
    <p>
      We're a team of undergraduate students passionate about bringing to light the issues faced by people due to the technological divide.
      We learned about the issues faced by underserviced communities and are passionate about making an impact by bringing awareness.
      This website hopes to bring personal stories and data together to explain how various people have been left behind
      by the digital revolution.

      We are 4 students who attend the University of Waterloo and this website is a result of demonstrating the divide
      across the country. We are interested in places that lack proper internet connection that have been
      impacted by a shift by COVID-19 to a remote first world.
    </p>
  </section>
);


export default AboutUs;
