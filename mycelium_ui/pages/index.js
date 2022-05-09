import { Container, Row, Spacer } from '@nextui-org/react';
import MapViewer from '../components/MapViewer/Mapviewer'
import styles from '../styles/Home.module.css'

// import './MapViewerStyles.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Container backgroundColor="backgroundContrast">
        <Spacer y={1} />
        <Row justify="center" align="center">
          <MapViewer />
        </Row>
      </Container>
    </div>
  )
}