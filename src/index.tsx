import React from 'react';
import ReactDOM from 'react-dom';

import './main';
import App from './App';

if (process.env.NODE_ENV !== 'production') {
  // eslint-disable-next-line no-console
  console.log('Looks like we are in development mode!');
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
