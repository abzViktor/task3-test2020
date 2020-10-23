import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
// import Wrapper from './components/Wrapper/Wrapper';
import * as serviceWorker from './serviceWorker';
import './i18next';
import { RootProvider } from './shared/root.context';

const Wrapper = React.lazy(() => import('./components/Wrapper/Wrapper'));

ReactDOM.render(

  <React.StrictMode>
    <Suspense fallback={(<div />)}>
      <RootProvider>
        <Wrapper />
      </RootProvider>
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
