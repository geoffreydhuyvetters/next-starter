import type { AppProps } from 'next/app';

import { createGlobalStyle } from 'styled-components';
import { Reset } from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 62.5%;
    box-sizing: border-box;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }
`;

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <Reset />
    <GlobalStyle />
    <Component {...pageProps} />
  </>
);

export default MyApp;
