import React, { useRef, useEffect, useState, useCallback } from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
// import ReactMapGl, {Marker} from 'react-mapbox-gl';

import { useTheme, Container, Text, Spacer } from '@nextui-org/react';
import mbxGeocoding from '@mapbox/mapbox-sdk/services/geocoding';


mapboxgl.accessToken = 'pk.eyJ1IjoibXVsdGl2ZXJzZW11ZmZpbiIsImEiOiJjam51cjBhcWwwN2RyM3dudngzeXZ0cHB6In0.kma6XOVomvu4FAmhOTzllQ';
// mapboxgl.accessToken = process.env.MAPBOX_API_KEY;




export default function App() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-97.742621);
  const [lat, setLat] = useState(30.530482);
  const [zoom, setZoom] = useState(19.68);


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
      style: 'mapbox://styles/multiversemuffin/cl2r8oppl003914pb85ph5vx7',
      center: [lng, lat],
      zoom: zoom
    });
  });

  

  useEffect(() => {
    if (!map.current) return; // wait for map to initialize
    map.current.on('move', () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });
  });


//  useEffect(() => {
//    if (!map.current) return;
//    const iotDevice = {
//     "type": "FeatureCollection",
//     "features": [
//       { "type": "Feature", "properties": { "Name": "VA Medical Center -- Leestown Division", "Address": "XXXXX Whispering Oaks" }, "geometry": { "type": "Point", "coordinates": [ -97.7426, 30.53041 ] } }
//     ]};

//     map.current.on('load', () => {
//         map.current.addLayer({
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

//  })

  // useEffect(() => {
  //   if (!map.current) return; // Waits for the map to initialise

  //   const results = geojson

  //   results.then((marker) => {
  //     // create a HTML element for each feature
  //     var el = document.createElement('div');
  //     el.className = 'circle';

  //     // make a marker for each feature and add it to the map
  //     new mapboxgl.Marker(el)
  //       .setLngLat(marker.geometry.coordinates)
  //       .setPopup(
  //         new mapboxgl.Popup({ offset: 25 }) // add popups
  //           .setHTML('<p>' + marker.properties.description + '</p>')
  //       )
  //       .addTo(map.current);

  //     map.current.on('load', async () => {
  //       map.current.flyTo({
  //         center: marker.center,
  //       });
  //     });
  //   });
  // }, geojson);
  


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


