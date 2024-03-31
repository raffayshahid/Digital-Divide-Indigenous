import React from 'react';
import styles from './MapChart.module.css'; // Importing the CSS module
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import mapdata from '../../utils/mapdata';

export default function MapChart() {
  return (
    <ComposableMap
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        rotate: [100, 0, 0],
        center: [12, 60],
        scale: 700,
      }}
      style={{ backgroundColor: 'pink' }}
    >
      <Geographies geography={mapdata.data}>
        {(geographies : any) => {
          return geographies.geographies.map((geo : any) => {
            return <Geography key={geo.rsmKey} geography={geo} />;
          });
        }}
      </Geographies>
   </ComposableMap>
  )
}

