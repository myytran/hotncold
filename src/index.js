//main stateful component that calls on GameJS
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';


import store from './store';

import './index.css';
import './reset.css';

import Game from './components/game'; //parent component


ReactDOM.render(
  <Provider store = {store}>
  <Game  />
  </Provider>,
  document.getElementById('root')
);
