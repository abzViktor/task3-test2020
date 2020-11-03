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

function MyApp({ Component, pageProps }) {

  return (
    <>
      <Head dangerouslySetInnerHTML={{
              __html: `
                <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','GTM-NDVNDGK')</script>;
                                    `,
            }}
      />
      <RootProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
    </RootProvider>
    </>
  );
}

MyApp.getInitialProps = async (appContext) => {
  // calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(appContext);
  return { ...appProps }
}

export default appWithTranslation(MyApp);
