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


