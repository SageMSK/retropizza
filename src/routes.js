import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import Home from './components/common/Home';
import Menu from './components/common/Menu';
import About from './components/common/About';
import ContactUs from './components/common/ContactUs';
import NotFound from './components/common/NotFound';

export default (
  <Route path="/" components={App}>
    <IndexRoute components={Home} />
    <Route path="menu" components={Menu} />
    <Route path="about" components={About} />
    <Route path="contactus" components={ContactUs} />
    <Route path="*" components={NotFound} />
  </Route>
);