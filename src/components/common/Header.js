import React from 'react';
import { Link } from 'react-router';

const Header = () => (
  <nav className="navbar navbar-default">
    <div className="container">
      <div className="navbar-header">
        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar"/>
        </button>
        <Link className="navbar-brand" to="/">RetroPizza</Link>
      </div>

      <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul className="nav navbar-nav navbar-right">
          <li><Link to="/menu">MENU</Link></li>
          <li><Link to="/about">ABOUT</Link></li>
          <li><Link to="/contactus">CONTACT</Link></li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Header;