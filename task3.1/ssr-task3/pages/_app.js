import React from 'react';
import App from 'next/app';
import '../styles/variables.scss';
import '../styles/index.scss';
import '../styles/Footer.scss';
import '../styles/Header.scss';
import '../styles/form.scss';
import { appWithTranslation } from '../i18n';
import { RootProvider } from '../components/root.context';
import Layout from '../components/layout';
import Head from "next/head";
import TagManager from 'react-gtm-module'

function MyApp({ Component, pageProps }) {
    const tagManagerArgs = {
        gtmId: 'GTM-NDVNDGK'
    }
    TagManager.initialize(tagManagerArgs)
  return (
      <RootProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
        </RootProvider>
  );
}

MyApp.getInitialProps = async (appContext) => {
  // calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(appContext);
  return { ...appProps }
}

export default appWithTranslation(MyApp);
