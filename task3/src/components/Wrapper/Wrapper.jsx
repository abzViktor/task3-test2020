import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Home from '../Home/Home';
import Registration from '../Registration/Registration';
import Terms from '../Terms/Terms';

export default function Wrapper() {
  return (
    <>
      <Router>
        <div className="wrapper">
          <div className="content">
            <Header />
            <div className="header-spacer" />
            <Switch>
              <Route path="/registration" component={Registration} />
              <Route path="/terms" component={Terms} />
              <Route path="/" exact component={Home} />
            </Switch>
          </div>
          <div className="footer">
            <Footer />
          </div>
        </div>
      </Router>
    </>
  );
}
