import type { AppProps } from 'next/app';
import { Reset } from 'styled-reset';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <Reset />
    <Component {...pageProps} />
  </>
);

export default MyApp;
