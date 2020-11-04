import Head from 'next/head';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import React from 'react';

export default function Layout({ children }) {
  return (
    <>
    <Head>

    <title>Task3</title>
    <meta name="description"
          content="Test assignment due to trainee task in abz.agency done by Viktor Peredera" />
    <meta property="og:title" content="Abz.agency test task" />
    <meta property="og:description" content="We offer 2 months of professional development" />
    <meta property="og:image" content="https://task3-test2020viktor-p.abzdev2.com/banner/bg-320.jpg" />
    <meta property="og:url" content="https://task3-test2020viktor-p.abzdev2.com/" />
    <meta property="og:site_name" content="abz.agency.com" />
    <meta name="twitter:image:alt" content="Become a cool developer" />
    <meta name="twitter:site" content="@abz.agency" />
    </Head>
    <div className="wrapper">
      <div className="content">

      <Header />
      {children}
    </div>
    <div className="footer">
      <Footer />
    </div>
    </div>
  </>)
};


