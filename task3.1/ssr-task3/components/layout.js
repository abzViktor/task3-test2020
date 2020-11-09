import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import { isWebpSupported } from '../utils/webpSupport';
import { HeaderProvider } from '../context/header.context';
import { getUser } from '../services/api';

export default function Layout({ children }) {
  const [support, setSupport] = React.useState(true);
  const [user, setUser] = useState({});
  React.useEffect(() => {
    setSupport(isWebpSupported);
  }, []);
  const [isUserLoaded, setUserLoaded] = useState(false);

  useEffect(() => {
    getUser().then((data) => {
      if (data.success) {
        setUser(data.user);
        setUserLoaded(true);
      }
    });
  }, []);
  return (
    <>
      <Head>
        <title>Task3</title>
        <meta
          name="description"
          content="Test assignment due to trainee task in abz.agency done by Viktor Peredera"
        />
        <meta property="og:title" content="Abz.agency test task" />
        <meta property="og:description" content="We offer 2 months of professional development" />
        <meta property="og:image" content="https://task3-test2020viktor-p.abzdev2.com/banner/bg-320.jpg" />
        <meta property="og:url" content="https://task3-test2020viktor-p.abzdev2.com/" />
        <meta property="og:site_name" content="abz.agency.com" />
        <meta name="twitter:image:alt" content="Become a cool developer" />
        <meta name="twitter:site" content="@abz.agency" />
      </Head>
      <div className={`wrapper ${support ? 'webp' : 'noWebp'}`}>
        <HeaderProvider>
          <div className="content">
            <Header user={user} isUserLoaded={isUserLoaded} />
            {children}
          </div>
        </HeaderProvider>
        <div className="footer">
          <Footer />
        </div>
      </div>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
