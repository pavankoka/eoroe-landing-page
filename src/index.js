import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Routes from './Routes';
import * as serviceWorker from './serviceWorker';

import './fonts/Roboto-Black.ttf';
import './fonts/Roboto-Bold.ttf';
import './fonts/Roboto-Light.ttf';
import './fonts/Roboto-Regular.ttf';
import './fonts/Roboto-Thin.ttf';

import './fonts/Comfortaa-Bold.ttf';
import './fonts/Comfortaa-Light.ttf';
import './fonts/Comfortaa-Regular.ttf';
import './fonts/Comfortaa-Medium.ttf';

import './fonts/Poppins-Bold.ttf';
import './fonts/Poppins-Light.ttf';
import './fonts/Poppins-Regular.ttf';
import './fonts/Poppins-Medium.ttf';

import './fonts/Montserrat-Bold.ttf';
import './fonts/Montserrat-Light.ttf';
import './fonts/Montserrat-Regular.ttf';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Routes />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
