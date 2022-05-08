import { Avatar, Button, Card, Container, Grid, Row, Spacer, Text } from '@nextui-org/react';
import Head from 'next/head'
import styles from '../styles/Home.module.css'


import MapViewer from '../components/MapViewer/Mapviewer'
// import './MapViewerStyles.css';

export default function Home() {
  return (
    



    <div className={styles.container}>
      <Head>
        <title>Mycelium</title>
        <meta name="description" content="Data" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
<<<<<<< HEAD
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
=======

      <main className={styles.main}>
        
        <MapViewer />
        <h1 className={styles.title}>
          Welcome to Mycelium!
        </h1>



        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
>>>>>>> development
    </div>
  )
}


