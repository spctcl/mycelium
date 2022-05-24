import React, { useRef, useEffect, useState, useCallback } from 'react';
import { Text, Row, Grid, Container, Spacer } from '@nextui-org/react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
// import ReactMapGL from 'react-map-gl';

mapboxgl.accessToken= 'pk.eyJ1IjoibXVsdGl2ZXJzZW11ZmZpbiIsImEiOiJjbDNmcWd2bHUwYWxwM2RxaWZtM25rY3F6In0.25nCNet65mYO0Ln3Wk9EEQ'; 

// mapboxgl.accessToken= process.env.REACT_APP_MAPBOX_API_KEY;

const data = {
    "features": [
    {
    "deviceId": "001",
    "coordinates": [-97.7425, 30.5300],
    "value": "110",
    "rHumidity": "85%",
    "unit": "Fahrenheit"
},
{
    "deviceId": "002",
    "coordinates": [-97.7427, 30.53001],
    "value": "110",
    "rHumidity": "85%",
    "unit": "Fahrenheit"
}, 
{
    "deviceId": "003",
    "coordinates": [-97.7430, 30.53112],
    "value": "105",
    "rHumidity": "85%",
    "unit": "Fahrenheit"
},
{
    "deviceId": "004",
    "coordinates": [-97.7431, 30.53110],
    "value": "105",
    "rHumidity": "85%",
    "unit": "Fahrenheit"
},
{
    "deviceId": "005",
    "coordinates": [-97.7432, 30.53108],
    "value": "105",
    "rHumidity": "85%",
    "unit": "Fahrenheit"
},
{
    "deviceId": "006",
    "coordinates": [-97.7434, 30.53102],
    "value": "105",
    "rHumidity": "85%",
    "unit": "Fahrenheit"
},
{
    "deviceId": "007",
    "coordinates": [-97.7434, 30.53105],
    "value": "105",
    "rHumidity": "85%",
    "unit": "Fahrenheit"
}
// {
//     "deviceId": "008",
//     "coordinates": [-97.7434, 30.53085],
//     "value": "105",
//     "rHumidity": "85%",
//     "unit": "Fahrenheit"
// },
// {
//     "deviceId": "009",
//     "coordinates": [-97.7434, 30.53109],
//     "value": "105",
//     "rHumidity": "85%",
//     "unit": "Fahrenheit"
// },
// {
//     "deviceId": "010",
//     "coordinates": [-97.7434, 30.53083],
//     "value": "105",
//     "rHumidity": "85%",
//     "unit": "Fahrenheit"
// },
// {
//     "deviceId": "011",
//     "coordinates": [-97.7434, 30.53087],
//     "value": "105",
//     "rHumidity": "85%",
//     "unit": "Fahrenheit"
// },
// {
//     "deviceId": "012",
//     "coordinates": [-97.7434, 30.53076],
//     "value": "105",
//     "rHumidity": "85%",
//     "unit": "Fahrenheit"
// },
// {
//     "deviceId": "013",
//     "coordinates": [-97.7434, 30.53072],
//     "value": "105",
//     "rHumidity": "85%",
//     "unit": "Fahrenheit"
// },
// {
//     "deviceId": "014",
//     "coordinates": [-97.7434, 30.53125],
//     "value": "105",
//     "rHumidity": "85%",
//     "unit": "Fahrenheit"
// }, 
// {
//     "deviceId": "015",
//     "coordinates": [-97.74279, 30.53085],
//     "value": "105",
//     "rHumidity": "85%",
//     "unit": "Fahrenheit"
// },
// {
//     "deviceId": "016",
//     "coordinates": [-97.7430, 30.53008],
//     "value": "105",
//     "rHumidity": "85%",
//     "unit": "Fahrenheit"
// }, 
// {
//     "deviceId": "017",
//     "coordinates": [-97.7432, 30.53112],
//     "value": "105",
//     "rHumidity": "85%",
//     "unit": "Fahrenheit"
// },
// {
//     "deviceId": "018",
//     "coordinates": [-97.7427, 30.53057],
//     "value": "105",
//     "rHumidity": "85%",
//     "unit": "Fahrenheit"
// },
// {
//     "deviceId": "019",
//     "coordinates": [-97.7427, 30.53055],
//     "value": "105",
//     "rHumidity": "85%",
//     "unit": "Fahrenheit"
// },
// {
//     "deviceId": "020",
//     "coordinates": [-97.7427, 30.53049],
//     "value": "105",
//     "rHumidity": "85%",
//     "unit": "Fahrenheit"
// },
// {
//     "deviceId": "021",
//     "coordinates": [-97.74275, 30.53049],
//     "value": "105",
//     "rHumidity": "85%",
//     "unit": "Fahrenheit"
// },
// {
//     "deviceId": "022",
//     "coordinates": [-97.74275, 30.53046],
//     "value": "105",
//     "rHumidity": "85%",
//     "unit": "Fahrenheit"
// },
// {
//     "deviceId": "023",
//     "coordinates": [-97.74279, 30.53045],
//     "value": "105",
//     "rHumidity": "85%",
//     "unit": "Fahrenheit"
// },
// {
//     "deviceId": "024",
//     "coordinates": [-97.74265, 30.53049],
//     "value": "105",
//     "rHumidity": "85%",
//     "unit": "Fahrenheit"
// },
// {
//     "deviceId": "024",
//     "coordinates": [-97.74265, 30.530475],
//     "value": "105",
//     "rHumidity": "85%",
//     "unit": "Fahrenheit"
// },
// {
//     "deviceId": "025",
//     "coordinates": [-97.74260, 30.530475],
//     "value": "105",
//     "rHumidity": "85%",
//     "unit": "Fahrenheit"
// },
// {
//     "deviceId": "026",
//     "coordinates": [-97.74262, 30.530465],
//     "value": "105",
//     "rHumidity": "85%",
//     "unit": "Fahrenheit"
// },
// {
//     "deviceId": "027",
//     "coordinates": [-97.74279, 30.53100],
//     "value": "105",
//     "rHumidity": "85%",
//     "unit": "Fahrenheit"
// },
// {
//     "deviceId": "028",
//     "coordinates": [-97.74279, 30.53047],
//     "value": "105",
//     "rHumidity": "85%",
//     "unit": "Fahrenheit"
// },
// {
//     "deviceId": "029",
//     "coordinates": [-97.74269, 30.53045],
//     "value": "105",
//     "rHumidity": "85%",
//     "unit": "Fahrenheit"
// },
// {
//     "deviceId": "030",
//     "coordinates": [-97.74271, 30.53045],
//     "value": "105",
//     "rHumidity": "85%",
//     "unit": "Fahrenheit"
// },
    ]
}


  class Map extends React.Component{

    constructor(props) {
        super(props);
        this.state = { 
            lng: -97.7428,
            lat: 30.5303,
            zoom: 14.65           
        }
    }

    componentDidMount(){
        const map = new mapboxgl.Map({
            container: this.mapContainer,
            style: 'mapbox://styles/multiversemuffin/cl2r8oppl003914pb85ph5vx7',
            center: [this.state.lng, this.state.lat],
            zoom: this.state.zoom,
            // bounds: [
            //   [ -97.74296879768372,
            //   30.529616352389855,
            //   ],
            //   [    -97.7419763803482,
            //     30.531316766532097
            //   ]
            // ],
            bearing: 90
        })



//add WeatherAPI initial temp, source
// map.on('load', async () => {
//   const geojson = await getWeather();

//   map.addSource('openWeather', {
//     type: 'geojson',
//     data: geojson
//   });


//   map.addLayer({
//     'id': 'openWeather',
//     'type': 'symbol',
//     'source': 'openWeather',
//     'layout': {
//     // This icon is a part of the Mapbox Streets style.
//     // To view all images available in a Mapbox style, open
//     // the style in Mapbox Studio and click the "Images" tab.
//     // To add a new image to the style at runtime see
//     // https://docs.mapbox.com/mapbox-gl-js/example/add-image/
//     'icon-image': 'rocket-15'
//     }
//     });
     
// // Update the source from the API every 2 seconds. 2000 = 2 seconds
// const updateSource = setInterval(async () => {
//   const temp = await getWeather(updateSource);
//   map.getSource('openWeather').setData(geojson);
//   }, 200000000);
   
//   async function getWeather(updateSource) {
//   // Make a GET request to the API and return the location of the ISS.
//   try {
//   const response = await fetch(
//   'https://api.openweathermap.org/data/2.5/weather?lat=97.7&lon=30.52&appid=API_KEY=fcb2ab3f851ed0e9ad74b174176a9a6e',
//   { method: 'GET' }
//   );
//   const { temp, humidity } = await response.json();
//   // Fly the map to the location.
//   // map.flyTo({
//   // center: [longitude, latitude],
//   // speed: 0.5
//   // });

//   // Return the locationData as GeoJSON.
//   return {
//   'type': 'FeatureCollection',
//   'features': [
//   {
//   'type': 'Feature',
//   'geometry': {
//   'type': 'Point',
//   'coordinates': [lat, lon]
//   },
//   "weather": [
//    temp, humidity
//   ]
  
  
//   }
//   ]
//   };
//   } catch (err) {
//   // If the updateSource interval is defined, clear the interval to stop updating the source.
//   if (updateSource) clearInterval(updateSource);
//   throw new Error(err);
//   }
//   }

// });











        map.on('load', function () {
            map.addSource('locationBoundaries', {
            'type': 'geojson',
            'data': {
            'type': 'Feature',
            'geometry': {
            'type': 'Polygon',
            'coordinates': [
            [
                [
                    -97.74292051792145,
                    30.52971800841958
                  ],
                  [
                    -97.74222314357758,
                    30.529810422899754
                  ],
                  [
                    -97.74220168590544,
                    30.530572839007
                  ],
                  [
                    -97.74279177188873,
                    30.530850079744354
                  ],
                  [
                    -97.74278104305267,
                    30.531039527126527
                  ],
                  [
                    -97.74295270442963,
                    30.53134911107787
                  ],
                  [
                    -97.74367690086365,
                    30.53178807170579
                  ],
                  [
                    -97.74399876594543,
                    30.531413800137127
                  ],
                  [
                    -97.74292051792145,
                    30.52971800841958
                  ]
                ]]
                }
            }
        });
            map.addLayer({
            'id': 'property',
            'type': 'fill',
            'source': 'locationBoundaries',
            'layout': {},
            'paint': {
            'fill-color': '#feb236',
            'fill-opacity': 0.33,
            
            }
        })
    });


    for (const marker of data.features) {
        // Create a DOM element for each marker.
        const el = document.createElement('div');
        el.className = 'marker';
        // el.style.backgroundImage = `url(https://placekitten.com/g/${width}/${height}/)`;
        
        el.style.backgroundSize = '100%';
         
        // Add markers to the map.
        new mapboxgl.Marker(el)
        .setLngLat(marker.coordinates)
              .setPopup(new mapboxgl.Popup({ offset: 40, className: "popup"})
          .setHTML('<h3>' + 'Device ID: ' + marker.deviceId + '</h3>' + '<h4>' + 'Temperature: ' + marker.value + '</h4>' + '<h4>' + 'Degrees: ' + marker.unit + '</h4>' + '<h4>' + 'Location: ' + marker.coordinates + '</h5>' + '<h4>' + 'RelativeHumidity: ' + marker.rHumidity + '</h5>'))
        .addTo(map);
        }

    }


    render() {
        return(
            <Container>
               <Spacer y={2} />
         
          
                <div ref={el => this.mapContainer = el} style={{width: '100%', height:'450px'}}>
                    <div className="sidebar">
                    Longitude: {this.state.lng} | Latitude: {this.state.lat} | Zoom: {this.state.zoom}
                    </div>
                </div> 
            </Container>
         )
    }
    
}

  export default Map;

