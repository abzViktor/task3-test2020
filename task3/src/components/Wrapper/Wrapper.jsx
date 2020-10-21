import React, { useContext } from 'react';
import { BrowserRouter as HashRouter, Switch, Route } from 'react-router-dom';
import { RootStore } from '../../shared/root.context';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Home from '../Home/Home';

const Registration = React.lazy(() => import('../Registration/Registration'));
const Terms = React.lazy(() => import('../Terms/Terms'));

export default function Wrapper() {
  const { state } = useContext(RootStore);

  return (
    <>
      <HashRouter>
        <div className="wrapper">
          <div className="content">
            <Header />
            <div className={state.apiError.state ? 'api-error-spacer' : 'header-spacer'} />
            <Switch>
              <Route path="/registration" component={Registration} />
              <Route path="/terms" component={Terms} />
              <Route path="/" component={Home} />
            </Switch>
          </div>
          <div className="footer">
            <Footer />
          </div>
        </div>
      </HashRouter>
    </>
  );
}
