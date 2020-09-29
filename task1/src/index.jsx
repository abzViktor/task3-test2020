import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import FormComponent from './components/Form/FormikForm';

ReactDOM.render(
  <React.StrictMode>
    <div className="container">
      <div className="form-holder">
        <FormComponent />
      </div>
    </div>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
