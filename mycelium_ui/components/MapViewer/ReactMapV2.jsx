import * as React from 'react';
import ReactDOM from 'react-dom';
// import {useState, useEffect, useMemo} from 'react';
// import {render} from 'react-dom';
import MapGL, {Source, Layer} from 'react-map-gl';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
// import ControlPanel from './control-panel';
import {heatmapLayer} from './ReactMapV2style.ts';
import { Popup } from 'react-map-gl';
// import Data from './Data.geojson';

const MAPBOX_TOKEN= 'pk.eyJ1IjoibXVsdGl2ZXJzZW11ZmZpbiIsImEiOiJjam51cjBhcWwwN2RyM3dudngzeXZ0cHB6In0.kma6XOVomvu4FAmhOTzllQ';



const data = [
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
},
{
    "deviceId": "008",
    "coordinates": [-97.7434, 30.53085],
    "value": "105",
    "rHumidity": "85%",
    "unit": "Fahrenheit"
},
{
    "deviceId": "009",
    "coordinates": [-97.7434, 30.53109],
    "value": "105",
    "rHumidity": "85%",
    "unit": "Fahrenheit"
},
{
    "deviceId": "010",
    "coordinates": [-97.7434, 30.53083],
    "value": "105",
    "rHumidity": "85%",
    "unit": "Fahrenheit"
},
{
    "deviceId": "011",
    "coordinates": [-97.7434, 30.53087],
    "value": "105",
    "rHumidity": "85%",
    "unit": "Fahrenheit"
},
{
    "deviceId": "012",
    "coordinates": [-97.7434, 30.53076],
    "value": "105",
    "rHumidity": "85%",
    "unit": "Fahrenheit"
},
{
    "deviceId": "013",
    "coordinates": [-97.7434, 30.53072],
    "value": "105",
    "rHumidity": "85%",
    "unit": "Fahrenheit"
},
{
    "deviceId": "014",
    "coordinates": [-97.7434, 30.53125],
    "value": "105",
    "rHumidity": "85%",
    "unit": "Fahrenheit"
}, 
{
    "deviceId": "015",
    "coordinates": [-97.74279, 30.53085],
    "value": "105",
    "rHumidity": "85%",
    "unit": "Fahrenheit"
},
{
    "deviceId": "016",
    "coordinates": [-97.7430, 30.53008],
    "value": "105",
    "rHumidity": "85%",
    "unit": "Fahrenheit"
}, 
{
    "deviceId": "017",
    "coordinates": [-97.7432, 30.53112],
    "value": "105",
    "rHumidity": "85%",
    "unit": "Fahrenheit"
},
{
    "deviceId": "018",
    "coordinates": [-97.7427, 30.53057],
    "value": "105",
    "rHumidity": "85%",
    "unit": "Fahrenheit"
},
{
    "deviceId": "019",
    "coordinates": [-97.7427, 30.53055],
    "value": "105",
    "rHumidity": "85%",
    "unit": "Fahrenheit"
},
{
    "deviceId": "020",
    "coordinates": [-97.7427, 30.53049],
    "value": "105",
    "rHumidity": "85%",
    "unit": "Fahrenheit"
},
{
    "deviceId": "021",
    "coordinates": [-97.74275, 30.53049],
    "value": "105",
    "rHumidity": "85%",
    "unit": "Fahrenheit"
},
{
    "deviceId": "022",
    "coordinates": [-97.74275, 30.53046],
    "value": "105",
    "rHumidity": "85%",
    "unit": "Fahrenheit"
},
{
    "deviceId": "023",
    "coordinates": [-97.74279, 30.53045],
    "value": "105",
    "rHumidity": "85%",
    "unit": "Fahrenheit"
},
{
    "deviceId": "024",
    "coordinates": [-97.74265, 30.53049],
    "value": "105",
    "rHumidity": "85%",
    "unit": "Fahrenheit"
},
{
    "deviceId": "024",
    "coordinates": [-97.74265, 30.530475],
    "value": "105",
    "rHumidity": "85%",
    "unit": "Fahrenheit"
},
{
    "deviceId": "025",
    "coordinates": [-97.74260, 30.530475],
    "value": "105",
    "rHumidity": "85%",
    "unit": "Fahrenheit"
},
{
    "deviceId": "026",
    "coordinates": [-97.74262, 30.530465],
    "value": "105",
    "rHumidity": "85%",
    "unit": "Fahrenheit"
},
{
    "deviceId": "027",
    "coordinates": [-97.74279, 30.53100],
    "value": "105",
    "rHumidity": "85%",
    "unit": "Fahrenheit"
},
{
    "deviceId": "028",
    "coordinates": [-97.74279, 30.53047],
    "value": "105",
    "rHumidity": "85%",
    "unit": "Fahrenheit"
},
{
    "deviceId": "029",
    "coordinates": [-97.74269, 30.53045],
    "value": "105",
    "rHumidity": "85%",
    "unit": "Fahrenheit"
},
{
    "deviceId": "030",
    "coordinates": [-97.74271, 30.53045],
    "value": "105",
    "rHumidity": "85%",
    "unit": "Fahrenheit"
},
]


// const dataLayer= [
//     {
//       "id": data.deviceId,
//       "source": "mapbox://styles/multiversemuffin/cl2r8oppl003914pb85ph5vx7",
//       "source-layer": data,
//       "type": "heatmap",
//       "paint": {
//         "fill-color": "#00ffff"
//       }
//     }
//   ]
  
//   const layerStyle = {
//     id: 'point',
//     type: 'circle',
//     paint: {
//       'circle-radius': 10,
//       'circle-color': '#007cbf'
//     }
//   };
  
  class ReactMapV2 extends React.Component{

    constructor(props) {
        super(props);
        this.state = { 
            lng: -97.7428,
            lat: 30.5303,
            zoom: 19.65

        }
    }

    componentDidMount(){
        const map = new mapboxgl.Map({
            container: this.mapContainer,
            style: 'mapbox://styles/multiversemuffin/cl2r8oppl003914pb85ph5vx7',
            center: [this.state.lng, this.state.lat],
            zoom: this.state.zoom   
        })


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
            'fill-color': '#088',
            'fill-opacity': 0.4,
            
            }
        })
    });




    
            // map.on('load', function () {
            //     map.addSource('devices', {
            //     'type': 'geojson',
            //     'data': {
            //         "type": "FeatureCollection",
            //         "features": [
            //        {
            //          "type": "Feature",
            //          "geometry": {
            //             "type": "Point",
            //             "coordinates":  [  -97.74261, 30.530482 ]
            //          },
            //          "properties": {
            //          "DeviceId":"Device1",
            //          "Temperature(F)":105,
            //          "RH(%)":80,
            //          "FIELD6":""
            //          }
            //        },
            //        {
            //          "type": "Feature",
            //          "geometry": {
            //             "type": "Point",
            //             "coordinates":  [  -97.74262, 30.530481 ]
            //          },
            //          "properties": {
            //          "DeviceId":"Device2",
            //          "Temperature(F)":102,
            //          "RH(%)":80,
            //          "FIELD6":""
            //          }
            //        },
            //        {
            //          "type": "Feature",
            //          "geometry": {
            //             "type": "Point",
            //             "coordinates":  [  -97.74263, 30.530479 ]
            //          },
            //          "properties": {
            //          "DeviceId":"Device3",
            //          "Temperature(F)":99,
            //          "RH(%)":74,
            //          "FIELD6":""
            //          }
            //        },
            //        {
            //          "type": "Feature",
            //          "geometry": {
            //             "type": "Point",
            //             "coordinates":  [  -97.74265, 30.530479 ]
            //          },
            //          "properties": {
            //          "DeviceId":"Device3",
            //          "Temperature(F)":96,
            //          "RH(%)":75,
            //          "FIELD6":""
            //          }
            //        }
            //      ]
            //      }
            //     });
            // });

            
            // map.addLayer({
            //     id: 'devices-heat',
            //     type: 'heatmap',
            //     source: 'devices',
            //     maxzoom: 20,
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
            //         0, 'rgba(236,222,239,0)',
            //         0.2, 'rgb(208,209,230)',
            //         0.4, 'rgb(166,189,219)',
            //         0.6, 'rgb(103,169,207)',
            //         0.8, 'rgb(28,144,153)'
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
            //       },
            //     }
            //   }, 'waterway-label');


            //   map.addLayer({
            //     id: 'devices-point',
            //     type: 'circle',
            //     source: 'devices',
            //     minzoom: 14,
            //     paint: {
            //       // increase the radius of the circle as the zoom level and dbh value increases
            //       'circle-radius': {
            //         property: 'dbh',
            //         type: 'exponential',
            //         stops: [
            //           [{ zoom: 15, value: 1 }, 5],
            //           [{ zoom: 15, value: 62 }, 10],
            //           [{ zoom: 22, value: 1 }, 20],
            //           [{ zoom: 22, value: 62 }, 50],
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
            //   }, 'waterway-label');








              



    data.forEach((deviceId) => {
      console.log(deviceId)
      var marker = new mapboxgl.Marker()
        //   .setLngLat([-97.742621, 30.5304821])
          .setLngLat(deviceId.coordinates)
          .setPopup(new mapboxgl.Popup({ offset: 40, className: "popup" })
          .setHTML('<h3>' + 'Device ID: ' + deviceId.deviceId + '</h3>' + '<h4>' + 'Temperature: ' + deviceId.value + '</h4>' + '<h4>' + 'Degrees: ' + deviceId.unit + '</h4>' + '<h4>' + 'Location: ' + deviceId.coordinates + '</h5>' + '<h4>' + 'RelativeHumidity: ' + deviceId.rHumidity + '</h5>'))
          .addTo(map)
    })

    }



    render() {
        return(
        
            <div>
                <div ref={el => this.mapContainer = el} style={{width: '100%', height:'100vh'}} />
            </div> 


          
        )
    }

  }

  export default ReactMapV2;

