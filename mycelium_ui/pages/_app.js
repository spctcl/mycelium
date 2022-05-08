import '../styles/globals.css'
<<<<<<< HEAD
import { createTheme } from '@nextui-org/react';
import { NextUIProvider } from '@nextui-org/react';

function MyApp({ Component, pageProps }) {

  const darkTheme = createTheme({
    type: 'dark',
    theme: {}
  });

  return (
      <NextUIProvider theme={darkTheme} >
        <Component {...pageProps} />
      </NextUIProvider>
  )
=======
import { NextUIProvider } from '@nextui-org/react';

function MyApp({ Component, pageProps }) {
  return (
    <NextUIProvider>
      <Component {...pageProps} />
    </NextUIProvider>
  );
>>>>>>> development
}

export default MyApp
