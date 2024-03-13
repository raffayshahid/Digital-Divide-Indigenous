import React from 'react';
import styles from './StatsSection.module.css'; // Importing the CSS module

const StatsSection: React.FC = () => (
  <section className={styles.statsSection}>
    <h3 className={styles.statsHeading}>Impact by the Numbers</h3>
    <div className={styles.visualization}>
      {/* Insert your data visualization components here */}
    </div>
  </section>
);

export default StatsSection;
