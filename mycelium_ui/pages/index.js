import { Container, Row, Spacer } from '@nextui-org/react';
import styles from '../styles/Home.module.css'
import OpenWeather from '../components/OpenWeather/OpenWeather';

import Map from '../components/MapViewer/Map';


export default function Home() {
  return (
    <div className={styles.container}>
      <Container>
            <Spacer y={2} />
          <Map />
          <OpenWeather />
            <Spacer y={4} />
          {/* <DeviceData /> */}
      </Container>
    </div>
    
  )
}

