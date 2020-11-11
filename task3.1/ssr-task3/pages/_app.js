import React from 'react';
import App from 'next/app';
// import '../styles/variables.scss';
import '../styles/index.scss';
import '../styles/Footer.scss';
import '../styles/Header.scss';
import '../styles/fonts.css';
import Head from 'next/head';
import { appWithTranslation } from '../i18n';
import { RootProvider } from '../context/root.context';
import Layout from '../components/layout';

function MyApp({ Component, pageProps }) {
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
  return (
    <RootProvider>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: '{ "@context": "http://schema.org","@type": "Organization","email": "work.of.future@gmail.com", "name": "abz.agency", "telephone": "+38 (095) 556 08 45", "address": { "@type": "PostalAddress", "addressLocality": "Kyiv, Ukraine","postalCode": "360023","streetAddress": "Lva Tolstoho street, 43"},}',
          }}
        />

        {/* <script dangerouslySetInnerHTML={{ __html: "(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-NDVNDGK');" }} /> */}
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </RootProvider>
  );
}

MyApp.getInitialProps = async (appContext) => {
  // calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(appContext);
  return { ...appProps };
};

export default appWithTranslation(MyApp);
