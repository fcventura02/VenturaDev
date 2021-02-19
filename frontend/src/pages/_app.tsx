/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable import/no-duplicates */
import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../styles/global';
import theme from '../styles/global';
import GoogleFonts from 'next-google-fonts';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GoogleFonts href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400&family=Roboto:wght@400;700&display=swap" />
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
