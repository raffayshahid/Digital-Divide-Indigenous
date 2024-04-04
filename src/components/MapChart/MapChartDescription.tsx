import React from 'react';
import styles from './MapChart.module.css';
import { ComposableMap, Geographies, Geography, Annotation } from 'react-simple-maps';
import mapdata from '../../utils/mapdata';

export default function MapChartDescription() {
  return (
    <div>
      <h2 className={styles.statsHeading}>
        Urban areas internet speeds
      </h2>
      <p className={styles.statsHeading}>
        Toronto: 233.03Mbps download speed, 50.87Mbps upload speed
        <br></br>
        Winnipeg: 232.64Mbps download speed, 93.46Mbps upload speed
        <br></br>
        Vancouver: 195.79Mbps download speed, 96.84Mbps upload speed
        <br></br>
        Halifax: 203.26Mbps download speed, 17.11Mbps upload speed
      </p>

      <h2 className={styles.statsHeading}>
        Rural areas internet speeds
      </h2>
      <p className={styles.statsHeading}>
        Owen Sound: 191.14Mbps download speed, 35.18Mbps upload speed
        <br></br>
        YellowKnife: 77.87Mbps download speed, 12.53Mbps upload speed
        <br></br>
        Alma: 177.03Mbps download speed, 31.47Mbps upload speed
        <br></br>
        WhiteHorse: 85.12Mbps download speed, 12.44Mbps upload speed
      </p>
      <br></br>
      <p className={styles.statsHeading}>
        Access to internet across Canada remains varied and much work needs to be done to ensure people in rural areas
        have internet structure comporable to people in urban locales in relation to upload and download speeds. This
        data was taken from https://www.speedtest.net/performance/canada to compare data speeds across Canada.
      </p>
    </div>
  )
}

