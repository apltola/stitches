import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;
import Header from '../components/Header';
import Head from 'next/head';
import Dock from '../components/Dock';
import { globalStyles } from '../stitches.config';

function MyApp({ Component, pageProps }) {
  globalStyles();

  return (
    <>
      <Head>
        <title>Saitti</title>
      </Head>

      <Header />
      <Component {...pageProps} />
      <Dock />
    </>
  );
}

export default MyApp;
