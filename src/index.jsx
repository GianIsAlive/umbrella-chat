import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App/App';
import umbrellaApp from './reducers';

// style
import './style/reset.css';
import './style/style.scss';

const store = createStore(umbrellaApp);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app'));
