import React from 'react';
import { Link } from 'react-router';

const Footer = () => (
  <footer id="footer">
    <div className="container">
      <div className="row">
        <div className="col-md-4 support">
          <h4>SUPPORT</h4>
          <ul>
            <li><Link to="/contactus">Contact Us</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><a href="#">Press</a></li>
            <li><a href="#">Jobs</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Use</a></li>
          </ul>
        </div>
        <div className="col-md-4 location-and-hours">
          <h4>LOCATION</h4>
          <p>350 5th Ave, <br/>New York, NY 10118</p>
          <hr className="line-break" />
          <h4>HOURS</h4>
          <ul>
            <li><strong>MONDAY - SATURDAY</strong>: 9AM - 11PM</li>
            <li><strong>SUNDAY</strong>: 9AM - 9PM</li>
          </ul>
        </div>
        <div className="col-md-4">
          <div className="social-media">
            <h4>FOLLOW US ON</h4>
              <ul className="social-media-list">
                <li><a href="https://www.facebook.com/" className="facebook"><i className="fa fa-facebook-square fa-lg" aria-hidden="true" /></a></li>
                <li><a href="https://twitter.com" className="twitter"><i className="fa fa-twitter-square fa-lg" aria-hidden="true" /></a></li>
                <li><a href="https://www.instagram.com/" className="instagram"><i className="fa fa-instagram fa-lg" aria-hidden="true" /></a></li>
              </ul>
          </div>
        </div>
      </div>

      <hr />
      <p className="copyright">&copy; {new Date().getFullYear()} Retro-Pizza, MSK</p>
    </div>
  </footer>
);

export default Footer;