import React from 'react';
import Image from 'next/image';
import styles from './Navbar.module.css';

const Navbar: React.FC = () => (
  <nav className={styles.navbar}>
    <div className={styles.logoContainer}>
      {/* The path is relative to the 'public' folder */}
      <Image src="/logo.png" alt="Logo" width={150} height={150} />
    </div>
    <ul className={styles.navList}>
      <li className={styles.navItem}><a href="/" className={styles.navLink}>Home</a></li>
      <li className={styles.navItem}><a href="/about_us" className={styles.navLink}>About Us</a></li>
      <li className={styles.navItem}><a href="/research" className={styles.navLink}>Our Research</a></li>
      <li className={styles.navItem}><a href="/help" className={styles.navLink}>How to Help</a></li>
      <li className={styles.navItem}><a href="/contact" className={styles.navLink}>Contact Us</a></li>
    </ul>
  </nav>
);

export default Navbar;

