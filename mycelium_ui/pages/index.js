import { Container, Row, Spacer } from '@nextui-org/react';
import MapViewer from '../components/MapViewer/Mapviewer'
import styles from '../styles/Home.module.css'
import OpenWeather from '../components/OpenWeather/OpenWeather';
import DeviceData from '../components/DeviceData';


export default function Home() {
  return (
    <div className={styles.container}>
      <Container>
        <Spacer y={1} />
       
          <MapViewer />
          <OpenWeather />
          <DeviceData />
      </Container>
    </div>
  )
}