//main stateful component that calls on GameJS
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './reset.css';

import Game from './components/game'; //parent component


ReactDOM.render(
  <Game  />,
  document.getElementById('root')
);
