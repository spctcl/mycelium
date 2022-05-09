import '../styles/globals.css'
import { createTheme } from '@nextui-org/react';
import Layout from "../components/layout"
import { NextUIProvider } from '@nextui-org/react';

function MyApp({ Component, pageProps }) {

  const darkTheme = createTheme({
    type: 'dark',
    theme: {}
  });

  return (
      <NextUIProvider theme={darkTheme} >
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </NextUIProvider>
  )
}

export default MyApp
