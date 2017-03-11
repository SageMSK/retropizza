import React from 'react';
import { Link } from 'react-router';

const NotFound = () => (
  <div id="not-found" className="container">
    <Link to="/" className="btn">Go Back</Link>
    <h1>404 | Not Found</h1>
  </div>
);

export default NotFound;