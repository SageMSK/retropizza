import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';

// STYLES
// ORDER MATTERS - It's css...
require('./favicon.ico');
import './../node_modules/jquery/dist/jquery.min';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './../node_modules/bootstrap/dist/js/bootstrap.min';
import './../node_modules/font-awesome/css/font-awesome.min.css';
import './styles/main.scss';

import routes from './routes';

render(
  <Router history={browserHistory} routes={routes} />,
  document.getElementById('app')
);