import React from 'react'




const geojson = {
    type: 'FeatureCollection',
    features: [
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [-97.6789, 30.5083]
        },
        properties: {
          title: 'Mapbox',
          description: 'Iot Device Location'
        }
      },
     
    ]
  };

  export default geojson;