import React from 'react';
import Image from 'next/image'; // Import Image component from Next.js
import styles from './AboutUs.module.css';

const AboutUs: React.FC = () => (
  <section className={styles.aboutUs}>
    <h2>About the team</h2>
    <div className={styles.imageContainer}>
      <div className={styles.circularImage}><Image src="/Oliver.jpeg" alt="Oliver Neish" width={100} height={100} /></div>
      <div className={styles.circularImage}><Image src="/Raffay.jpg" alt="Raffay Shahid" width={100} height={100} /></div>
      <div className={styles.circularImage}><Image src="/Jerry.jpeg" alt="Jerry Hu" width={100} height={100} /></div>
      <div className={styles.circularImage}><Image src="/Josh.JPG" alt="Josh Dancey" width={100} height={100} /></div>
    </div>
    <p>
      From left to right: Oliver Neish, Raffay Shahid, Jerry Hu, Josh Dancey
    </p>
    <br></br>
    <p>
      We're a team of undergraduate students passionate about bringing to light the issues faced by people due to the technological divide.
      We learned about the issues faced by underserviced communities and are passionate about making an impact by bringing awareness.
      This website hopes to bring personal stories and data together to explain how various people have been left behind
      by the digital revolution.
    </p>
    <br></br>
    <p>
      We are 4 students who attend the University of Waterloo and this website is a result of demonstrating the divide
      across the country. We are interested in places that lack proper internet connection that have been
      impacted by a shift by COVID-19 to a remote first world.
    </p>
  </section>
);


export default AboutUs;
