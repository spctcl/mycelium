// const mbxClient = require('@mapbox/mapbox-sdk');
// const mbxStyles = require('@mapbox/mapbox-sdk/services/styles');
// const mbxTilesets = require('@mapbox/mapbox-sdk/services/tilesets');

// const baseClient = mbxClient({ accessToken: pk.eyJ1IjoibXVsdGl2ZXJzZW11ZmZpbiIsImEiOiJjam51cjBhcWwwN2RyM3dudngzeXZ0cHB6In0.kma6XOVomvu4FAmhOTzllQ });
// const stylesService = mbxStyles(baseClient);
// const tilesetsService = mbxTilesets(baseClient);


// // Create a style.
// stylesService.createStyle({..})
//   .send()
//   .then(response => {..}, error => {..});

// // List tilesets.
// tilesetsService.listTilesets()
//   .send()
//   .then(response => {..}, error => {..})


//   staticClient.getStaticImage({
//     ownerId: 'mapbox',
//     styleId: 'streets-v11',
//     width: 200,
//     height: 300,
//     position: {
//       coordinates: [12, 13],
//       zoom: 3
//     },
//     overlays: [
//       // Simple markers.
//       {
//         marker: {
//           coordinates: [12.2, 12.8]
//         }
//       },
//       {
//         marker: {
//           size: 'large',
//           coordinates: [14, 13.2],
//           label: 'm',
//           color: '#000'
//         }
//       },
//       {
//         marker: {
//           coordinates: [15, 15.2],
//           label: 'airport',
//           color: '#ff0000'
//         }
//       },
//       // Custom marker
//       {
//         marker: {
//           coordinates: [10, 11],
//           url:  'https://upload.wikimedia.org/wikipedia/commons/6/6f/0xff_timetracker.png'
//         }
//       }
//     ]
//   })
//     .send()
//     .then(response => {
//       const image = response.body;
//     });