import React from 'react';
import { Link } from 'react-router';

const ContactUs = () => (
  <div id="contact-us">
    <div className="container">
      <div className="row">
        <div className="col-md-8">
          <Link to="/">Home</Link>
          <h1>Contact Us</h1>
          <hr/>
          <form>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email:</label>
              <input type="email" className="form-control" id="form-email" placeholder="janedoe@example.com" />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Name:</label>
              <input type="name" className="form-control" id="form-name" placeholder="Jane Doe" />
            </div>
            <div className="form-group">
              <textarea name="details" id="form-detail" className="form-control" rows="10" placeholder="Message" />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
        <div className="col-md-4">
          <ul className="contact-details">
            <li><i className="fa fa-map-marker" aria-hidden="true" /> 350 5th Ave, New York, NY 10118</li>
            <li><i className="fa fa-phone" aria-hidden="true" /> (123) 456 - 7891</li>
            <li><i className="fa fa-envelope" aria-hidden="true" /> support@retropizza.com</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default ContactUs;