import React, { useRef, useEffect, useState, useCallback } from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
// import ReactMapGl, {Marker} from 'react-mapbox-gl';

import { useTheme, Container, Text, Spacer } from '@nextui-org/react';
import mbxGeocoding from '@mapbox/mapbox-sdk/services/geocoding';

// import iotDevicePoints from './DeviceConstant.geojson';


mapboxgl.accessToken = 'pk.eyJ1IjoibXVsdGl2ZXJzZW11ZmZpbiIsImEiOiJjam51cjBhcWwwN2RyM3dudngzeXZ0cHB6In0.kma6XOVomvu4FAmhOTzllQ';
// mapboxgl.accessToken = process.env.MAPBOX_API_KEY;




export default function App() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-97.7421);
  const [lat, setLat] = useState(30.5301);
  const [zoom, setZoom] = useState(18.31);
  
 
  //nextUI
 
  const { theme } = useTheme();


// const iotDevice = {
//     "type": "FeatureCollection",
//     "features": [
//       { "type": "Feature", "properties": { "Name": "VA Medical Center -- Leestown Division", "Address": "XXXXX Whispering Oaks" }, "geometry": { "type": "Point", "coordinates": [ -97.7426, 30.53041 ] } }
//     ]};

//     map.on('load', () => {
//         map.addLayer({
//           id: 'iotDevice',
//           type: 'symbol',
//           source: {
//             type: 'geojson',
//             data: iotDevice,
//     coordinates: [ -97.7426, 30.53041 ]
//           },
//           layout: {
//             'icon-image': 'hospital-15',
//             'icon-allow-overlap': true
//           },
//           paint: {}
//         });
//     });
        


  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      // style: 'mapbox://styles/mapbox/streets-v11',
      // url: "mapbox://multiversemuffin.6s6xcg6a",
      style: 'mapbox://styles/multiversemuffin/cl2r8oppl003914pb85ph5vx7',
      center: [lng, lat],
      zoom: zoom,
      
    });
    const marker = new mapboxgl.Marker()
    .setLngLat([-97.742621, 30.5304821])
    .addTo(map.current)

    // map.addSource("IoT-devices", {
    // type: "vector",
    // url: "mapbox://multiversemuffin.6s6xcg6a"
    // }
    // )
  });


//   useEffect(() => {
//     if (!map.current) return;
//     map.current.addSource("IoT-devices", {
//       type: "vector",
//       url: "mapbox://multiversemuffin.6s6xcg6a"
//   })
// })

  useEffect(() => {
    if (!map.current) return; // wait for map to initialize
    map.current.on('move', () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });
  });



  


  const fetchData = useCallback(() => {
    const geocodingClient = mbxGeocoding({
      accessToken: mapboxgl.accessToken,
    });

    // geocoding with countries
    return geocodingClient
      .reverseGeocode({
        query: [-97.742621, 30.530482],
      })
      .send()
      .then((response) => {
        const match = response.body;
        const coordinates = match.features[0].geometry.coordinates;
        const placeName = match.features[0].place_name;
        const center = match.features[0].center;

        return {
          type: 'Feature',
          center: center,
          geometry: {
            type: 'Point',
            coordinates: coordinates,
          },
          properties: {
            description: placeName,
          },
        };
      });
  }, []);



  useEffect(() => {
    if (!map.current) return; // Waits for the map to initialise
   
   const results = fetchData();

   results.then((marker) => {
     // create a HTML element for each feature
     var el = document.createElement('div');
     el.className = 'marker';

     // make a marker for each feature and add it to the map
     new mapboxgl.Marker(el)
       .setLngLat(marker.geometry.coordinates)
       .setPopup(
         new mapboxgl.Popup({ offset: 25 }) // add popups
           .setHTML('<p>' + marker.properties.description + '</p>')
       )
       .addTo(map.current);

     map.current.on('load', async () => {
       map.current.flyTo({
         center: marker.center,
       });
     });
   });

 }, [fetchData]);




 useEffect(() => {
  if (map.current) return; // initialize map only once
  map.current = new mapboxgl.Map({
    container: mapContainer.current,
    // style: 'mapbox://styles/mapbox/streets-v11',
    style: 'multiversemuffin.6s6xcg6a',

  
  });
});


// map.current.addLayer(
//   {
//     id: 'DeviceConstant-heat',
//     type: 'heatmap',
//     source: 'DeviceConstant',
//     maxzoom: 15,
//     paint: {
//       // increase weight as diameter breast height increases
//       'heatmap-weight': {
//         property: 'dbh',
//         type: 'exponential',
//         stops: [
//           [1, 0],
//           [62, 1]
//         ]
//       },
//       // increase intensity as zoom level increases
//       'heatmap-intensity': {
//         stops: [
//           [11, 1],
//           [15, 3]
//         ]
//       },
//       // assign color values be applied to points depending on their density
//       'heatmap-color': [
//         'interpolate',
//         ['linear'],
//         ['heatmap-density'],
//         0,
//         'rgba(236,222,239,0)',
//         0.2,
//         'rgb(208,209,230)',
//         0.4,
//         'rgb(166,189,219)',
//         0.6,
//         'rgb(103,169,207)',
//         0.8,
//         'rgb(28,144,153)'
//       ],
//       // increase radius as zoom increases
//       'heatmap-radius': {
//         stops: [
//           [11, 15],
//           [15, 20]
//         ]
//       },
//       // decrease opacity to transition into the circle layer
//       'heatmap-opacity': {
//         default: 1,
//         stops: [
//           [14, 1],
//           [15, 0]
//         ]
//       }
//     }
//   },
//   'DeviceID'
// );




// map.current.addLayer (
//   {
//     id: 'device-point',
//     type: 'circle',
//     source: 'DeviceConstant',
//     minzoom: 14,
//     paint: {
//       'circle-radius': {
//         property: 'dbh',
//         type: 'exponential',
//         stops: [
//           [{ zoom: 15, value: 1 }, 5],
//           [{ zoom: 15, value: 62 }, 10],
//           [{ zoom: 22, value: 1 }, 20],
//           [{ zoom: 22, value: 62 }, 50]
//         ]
//       },
//       'circle-color': {
//         property: 'dbh',
//         type: 'exponential',
//         stops: [
//           [0, 'rgba(236,222,239,0)'],
//           [10, 'rgb(236,222,239)'],
//           [20, 'rgb(208,209,230)'],
//           [30, 'rgb(166,189,219)'],
//           [40, 'rgb(103,169,207)'],
//           [50, 'rgb(28,144,153)'],
//           [60, 'rgb(1,108,89)']
//         ]
//       },
//       'circle-stroke-color': 'white',
//       'circle-stroke-width': 1,
//       'circle-opacity': {
//         stops: [
//           [14, 0],
//           [15, 1]
//         ]
//       }
//     }
//   },
//   'DeviceID'
// );









  return (
    <Container>
      <div ref={mapContainer} className="map-container">
      <div className="sidebar">
        Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
     
      </div>
      </div>
    </Container>
  );
}


