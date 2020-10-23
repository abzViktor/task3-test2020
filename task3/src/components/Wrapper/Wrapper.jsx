import React, { useContext } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HashLinkObserver from 'react-hash-link';
import { RootStore } from '../../shared/root.context';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
// import Footer from '../Footer/Footer';
import Home from '../Home/Home';
// import Registration from '../Registration/Registration';

const Registration = React.lazy(() => import('../Registration/Registration'));
// const Footer = React.lazy(() => import('../Footer/Footer'));
// const Home = React.lazy(() => import('../Home/Home'));
const NotFound = React.lazy(() => import('../404/404'));
const Terms = React.lazy(() => import('../Terms/Terms'));

export default function Wrapper() {
  const { state } = useContext(RootStore);

  return (
    <>
      <HashLinkObserver />
      <Router>
        <div className="wrapper">
          <div className="content">
            <Header />
            <div className={state.apiError.state ? 'api-error-spacer' : 'header-spacer'} />
            <Switch>
              <Route path="/registration" component={Registration} />
              <Route path="/terms" component={Terms} />
              <Route path="/" exact component={Home} />
              <Route path="*" component={NotFound} />
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
