import { Avatar, Button, Card, Container, Grid, Row, Spacer, Text } from '@nextui-org/react';
import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Header(props) {
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
                    <Link href="/">
                        Home
                    </Link>
                </Button>
              </Grid>
              <Grid>
                <Button light color="primary">
                  <Link href="/devices">
                    Manage Devices
                  </Link>
                </Button>
              </Grid>
              <Grid>
              <Button light color="primary">
                <Link href="/data">
                  My Data
                </Link>
                </Button>
              </Grid>
              <Grid>
                <Button light color="primary">
                  <Link href="/marketplace">
                    Marketplace
                  </Link>
                </Button>
              </Grid>
            </Grid.Container>
            <Button color="secondary">
              Authenticate
            </Button>
          </Row>
        </Container>
      </div>
    )
}