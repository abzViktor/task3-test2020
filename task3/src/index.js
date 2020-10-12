import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Wrapper from './components/Wrapper/Wrapper';
import * as serviceWorker from './serviceWorker';
import './i18next';

ReactDOM.render(

  <React.StrictMode>
    <Suspense fallback={(<div>Loading...</div>)}>
      <Wrapper />
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
