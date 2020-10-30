import React from 'react';
import Head from 'next/head';
import App from 'next/app';
import '../styles/variables.scss';
import '../styles/index.scss';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import '../styles/Footer.scss';
import '../styles/Header.scss';
import { appWithTranslation } from '../i18n';
import { RootProvider } from '../components/root.context';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <RootProvider>
        <Head>
          <title>Task3</title>
        </Head>
        <div className="wrapper">
          <div className="content">

            <Header />
            <Component {...pageProps} />
          </div>
          <div className="footer">
            <Footer />
          </div>
        </div>
      </RootProvider>
    </>
  );
}

MyApp.getInitialProps = async (appContext) => ({ ...await App.getInitialProps(appContext) });

export default appWithTranslation(MyApp);
