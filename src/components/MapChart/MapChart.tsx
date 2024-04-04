import React from 'react';
import { ComposableMap, Geographies, Geography, Annotation } from 'react-simple-maps';
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

      <Annotation
        subject={[102.1832, 136.1]}
        dx={-5}
        dy={-5}
        connectorProps={{
          stroke: "#097969",
          strokeWidth: 2,
          strokeLinecap: "round"
        }}
      >
        <text x="0" textAnchor="end" alignmentBaseline="middle" fill="#097969">
          {"Toronto"}
        </text>
      </Annotation>

      <Annotation
        subject={[83.1832, 130.45]}
        dx={-5}
        dy={-5}
        connectorProps={{
          stroke: "#097969",
          strokeWidth: 2,
          strokeLinecap: "round"
        }}
      >
        <text x="0" textAnchor="end" alignmentBaseline="middle" fill="#097969">
          {"Winnipeg"}
        </text>
      </Annotation>

      <Annotation
        subject={[57.1832, 130.9]}
        dx={-5}
        dy={-5}
        connectorProps={{
          stroke: "#097969",
          strokeWidth: 2,
          strokeLinecap: "round"
        }}
      >
        <text x="0" textAnchor="end" alignmentBaseline="middle" fill="#097969">
          {"Vancouver"}
        </text>
      </Annotation>

      <Annotation
        subject={[116.1832, 135.1]}
        dx={-5}
        dy={-5}
        connectorProps={{
          stroke: "#097969",
          strokeWidth: 2,
          strokeLinecap: "round"
        }}
      >
        <text x="0" textAnchor="end" alignmentBaseline="middle" fill="#097969">
          {"Halifax"}
        </text>
      </Annotation>

      <Annotation
        subject={[97.0832, 134.4]}
        dx={-5}
        dy={-5}
        connectorProps={{
          stroke: "#FF5533",
          strokeWidth: 2,
          strokeLinecap: "round"
        }}
      >
        <text x="0" textAnchor="end" alignmentBaseline="middle" fill="#F53">
          {"Owen Sound"}
        </text>
      </Annotation>

      <Annotation
        subject={[67.0832, 118.4]}
        dx={-5}
        dy={-5}
        connectorProps={{
          stroke: "#FF5533",
          strokeWidth: 2,
          strokeLinecap: "round"
        }}
      >
        <text x="0" textAnchor="end" alignmentBaseline="middle" fill="#F53">
          {"YellowKnife"}
        </text>
      </Annotation>

      <Annotation
        subject={[109.0832, 130.4]}
        dx={-5}
        dy={-5}
        connectorProps={{
          stroke: "#FF5533",
          strokeWidth: 2,
          strokeLinecap: "round"
        }}
      >
        <text x="0" textAnchor="end" alignmentBaseline="middle" fill="#F53">
          {"Alma"}
        </text>
      </Annotation>

      <Annotation
        subject={[49.0832, 119.2]}
        dx={-5}
        dy={-5}
        connectorProps={{
          stroke: "#FF5533",
          strokeWidth: 2,
          strokeLinecap: "round"
        }}
      >
        <text x="0" textAnchor="end" alignmentBaseline="middle" fill="#F53">
          {"WhiteHorse"}
        </text>
      </Annotation>
   </ComposableMap>
  )
}

