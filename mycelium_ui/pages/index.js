import { Container, Row, Spacer } from '@nextui-org/react';
import MapViewer from '../components/MapViewer/Mapviewer'
import styles from '../styles/Home.module.css'
import OpenWeather from '../components/OpenWeather/OpenWeather';
import DeviceData from '../components/DeviceData';
// import StaticMap from '@mapbox/mapbox-sdk/services/static';
// import ReactViewer from '../components/MapViewer/ReactMapViewer';
import ReactMapV2 from '../components/MapViewer/ReactMapV2';

export default function Home() {
  return (
    <div className={styles.container}>
      <Container>
        <Spacer y={1} />
       
          <MapViewer />
          
            <Spacer y={4} />
            <ReactMapV2 />
              <OpenWeather />
                <DeviceData />
      </Container>
    </div>
  )
}