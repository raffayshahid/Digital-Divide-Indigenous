import React from 'react';
import styles from './Introduction.module.css'; // Import the CSS module

const Introduction: React.FC = () => (
  <section className={styles.introduction}>
    <h2>Bridging the Digital Divide</h2>
    <p>The digital divide represents a significant barrier to progress for Indigenous communities across Canada, affecting education, healthcare, and economic opportunities.</p>
  </section>
);

export default Introduction;
