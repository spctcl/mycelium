import React, { useRef, useEffect, useState, useCallback } from 'react';
import mapboxgl from '!mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1IjoibXVsdGl2ZXJzZW11ZmZpbiIsImEiOiJjam51cjBhcWwwN2RyM3dudngzeXZ0cHB6In0.kma6XOVomvu4FAmhOTzllQ';



export default function App() {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(-97.742621);
    const [lat, setLat] = useState(30.530482);
    const [zoom, setZoom] = useState(17.68);




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
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      // style: 'mapbox://styles/mapbox/streets-v11',
      style: 'multiversemuffin.6s6xcg6a',
      center: [lng, lat],
    
    });
  });


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

