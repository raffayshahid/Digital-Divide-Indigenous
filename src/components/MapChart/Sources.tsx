import React from 'react';
import styles from './MapChart.module.css';
import { ComposableMap, Geographies, Geography, Annotation } from 'react-simple-maps';
import mapdata from '../../utils/mapdata';

export default function MapChartDescription() {
  return (
    <div>
      <h2 className={styles.statsHeading}>
        Sources
      </h2>
      <p className={styles.statsHeading}>
        https://www.speedtest.net/performance/canada/ontario/toronto
        <br></br>
        https://www.speedtest.net/performance/canada/manitoba/winnipeg
        <br></br>
        https://www.speedtest.net/performance/canada/british-columbia/vancouver
        <br></br>
        https://www.speedtest.net/performance/canada/nova-scotia/halifax
        <br></br>
        https://www.speedtest.net/performance/canada/ontario/owen-sound
        <br></br>
        https://www.speedtest.net/performance/canada/northwest-territories/yellowknife
        <br></br>
        https://www.speedtest.net/performance/canada/quebec/alma
        <br></br>
        https://www.speedtest.net/performance/canada/yukon-territory/whitehorse
      </p>
    </div>
  )
}

