import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Banner from './components/Banner/Banner';
import LetsGet from './components/LetsGet/LetsGet';
import Tools from './components/Tools/Tools';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <div className="wrapper">
      <div className="content">
        <Header />
        <div className="header-spacer" />
        <Banner />
        <LetsGet />
        <Tools />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
