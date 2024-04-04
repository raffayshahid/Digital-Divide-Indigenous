'use client'

import React from 'react';
import styles from './StatsSection.module.css'; // Importing the CSS module
import MapChart from '../MapChart/MapChart';
import MapChartDescription from '../MapChart/MapChartDescription';

const StatsSection: React.FC = () => (
  <section className={styles.statsSection}>
    <h3 className={styles.statsHeading}>Impact by the Numbers</h3>
    <div className={styles.visualization}>
      <MapChart/>
    </div>
    <div className={styles.statsSection}>
      <MapChartDescription/>
    </div>
  </section>
);

export default StatsSection;
