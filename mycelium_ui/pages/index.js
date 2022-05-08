import { Avatar, Button, Card, Container, Grid, Row, Spacer, Text } from '@nextui-org/react';
import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Mycelium</title>
        <meta name="description" content="Data" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container backgroundColor="backgroundContrast">
        <Spacer y={1} />
        <Row justify="left" align="center">
          <Text h3>Mycelium</Text>
          <Grid.Container gap={2} justify="center">
          <Grid>
              <Button light color="primary">
                Home
              </Button>
            </Grid>
            <Grid>
              <Button light color="primary">
                Manage Devices
              </Button>
            </Grid>
            <Grid>
            <Button light color="primary">
              My Data
              </Button>
            </Grid>
            <Grid>
              <Button light color="primary">
                Market
              </Button>
            </Grid>
          </Grid.Container>
          <Button color="secondary">
            Authenticate
          </Button>
        </Row>
        <Row justify="center" align="center">
          <Text>
            Body
          </Text>
        </Row>
        <Row justify="center" align="center">
          <Text>
            Footer
          </Text>
        </Row>
      </Container>
    </div>
  )
}
