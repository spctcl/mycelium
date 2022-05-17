import { Avatar, Button, Card, Container, Grid, Row, Spacer, Text } from '@nextui-org/react';
import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

import BgAnimation from './BgAnimation';

export default function Header(props) {
    return (
        <div className={styles.container}>
        <Head>
          <title>Mycelium</title>
          <meta name="description" content="Data" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Container>
        
          <Spacer y={1} />
          <Row justify="left" align="center">
         
          <Grid.Container gap={1} justify="full">
            <Grid xs>
            <Text h1 size={40} 
              style={{padding: "5px",
              weight: "bold", justify: "center"
              }}
            >Mycelium
              <BgAnimation />
            </Text>
            </Grid>

            {/* <Grid.Container gap={2} justify="center"> */}
           
           
           
              <Grid xs>
                <Button light color="primary">
                    <Link href="/">
                        Home
                    </Link>
                </Button>
              </Grid>
              <Grid xs>
                <Button light color="primary">
                  <Link href="/devices">
                    Manage Devices
                  </Link>
                </Button>
              </Grid>
              <Grid xs>
              <Button light color="primary">
                <Link href="/data">
                  My Data
                </Link>
                </Button>
              </Grid>
              <Grid xs>
                <Button light color="primary">
                  <Link href="/marketplace">
                    Marketplace
                  </Link>
                </Button>
              </Grid>
              <Grid xs>
            {/* </Grid.Container> */}
                <Button color="secondary">
                  Authenticate
                </Button>
              </Grid>
            </Grid.Container>
          </Row>
          

          {/* <Row>
          <Grid.Container>
            <Grid lg>
              <Text h2 size={25}  style={{padding: "5px",
              weight: "bold", justify: "center"
              }}>
                Decentralized IoT Network
              </Text>
            </Grid>
           </Grid.Container>
           </Row> */}
            <Row justify="center" align="center">
            <Text h2 size={30}  style={{padding: "5px",
              weight: "bold"
              }}>
                Decentralized IoT Network
            </Text>
            </Row>
        </Container>
      
      </div>
    )
}