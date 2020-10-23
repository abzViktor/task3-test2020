import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { renderToString } from 'react-dom/server';
import { CriticalCSSProvider, StyleRegistry } from 'react-critical-css';
import Wrapper from './components/Wrapper/Wrapper';
import * as serviceWorker from './serviceWorker';
import './i18next';
import { RootProvider } from './shared/root.context';

const styleRegistry = new StyleRegistry();

ReactDOM.render(

  <React.StrictMode>
    <Suspense fallback={(<div />)}>
      <RootProvider>
        <CriticalCSSProvider registry={styleRegistry}>
          <Wrapper />
        </CriticalCSSProvider>
      </RootProvider>
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root'),
);

const criticalCSS = styleRegistry.getCriticalCSS();
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
