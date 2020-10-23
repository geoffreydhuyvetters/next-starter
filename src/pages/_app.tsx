import type { AppProps } from 'next/app';
import Head from 'next/head';

import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { Reset } from 'styled-reset';

import { theme } from '@/config/theme';

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 62.5%;
    box-sizing: border-box;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }
`;

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
        rel="stylesheet"
      />
    </Head>
    <Reset />
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  </>
);

export default App;
