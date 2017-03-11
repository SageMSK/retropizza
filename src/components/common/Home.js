import React from 'react';

const Home = () => {
  return (
    <div id="home-page">
      <div className="bg" />
      <div id="pizza-pictures">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img src="./../../img/home-pizza-1.jpg" alt="pizza-1"/>
            </div>
            <div className="col-md-6">
              <h1>Retro Pizza</h1>
              <p className="intro">Serving the best local pizza since 1984.</p>
              <h2>Call Us Today</h2>
              <h3>For Pickup or Delivery</h3>
              <p>(123) 456 - 7891</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <h1>We're open everyday!</h1>
              <h4>HOURS</h4>
              <ul>
                <li><strong>MONDAY - SATURDAY</strong>: 9AM - 11PM</li>
                <li><strong>SUNDAY</strong>: 9AM - 9PM</li>
              </ul>
            </div>
            <div className="col-md-6">
              <img src="'./../../img/home-calzone-1.jpg" alt="calzone-1"/>
            </div>
          </div>
        </div>
      </div>
      <div id="bg-parallax" className="bg-parallax">
        <div className="container">
          <div className="row">
            <div className="col-md-12 location-message">
              <h3>Find us in the city that never sleeps.</h3>
              <a href="https://www.google.com/maps/place/Empire+State+Building,+350+5th+Ave,+New+York,+NY+10118/@40.7484404,-73.9878441,17z/data=!3m1!4b1!4m5!3m4!1s0x89c259a9aeb1c6b5:0x35b1cfbc89a6097f!8m2!3d40.7485413!4d-73.9857577" className="btn">LOCATION</a>
            </div>
          </div>
        </div>
      </div>
      <div id="quotes">
        <div className="container">
          <div className="row">
            <h3>Read what our customers are saying</h3>
            <div className="col-md-6">
              <p className="message"><i className="fa fa-quote-left" aria-hidden="true" /> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe in magnam voluptate, temporibus corporis soluta odio minima quibusdam, atque nesciunt, repudiandae, consequatur deleniti. Eligendi sed tempore eaque aliquam, temporibus recusandae. <i className="fa fa-quote-right" aria-hidden="true" /></p>
              <p className="customer">- John Doe, customer for 2 years</p>
            </div>
            <div className="col-md-6">
              <p className="message"><i className="fa fa-quote-left" aria-hidden="true" /> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa temporibus cumque labore non iste officiis, perspiciatis odit corrupti laborum obcaecati eligendi, ipsam est quos natus deserunt impedit dolorem facilis veritatis. <i className="fa fa-quote-right" aria-hidden="true" /></p>
              <p className="customer">- Bob Doe, customer for 1 year</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;