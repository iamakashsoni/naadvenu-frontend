import React from 'react';
import withPreloader from '../../Component/withPreloader';
import headerBg from '../../Images/header.jpg';

const Home = () => {
  return (
    <div className="welcome-area" id="welcome">
      <div className="right-bg">
        <img
          src={headerBg}
          className="img-fluid float-right"
          alt=""
        />
      </div>
      <div className="header-text">
        <div className="container">
          <div className="row">
            <div className="offset-lg-3 col-lg-6 col-md-12 col-sm-12">
              <h1>Welcome to Naadvenu</h1>
              <p>
                We are dedicated to the art of the flute, offering mentorship
                and guidance to aspiring flutists. Our mission is to nurture
                musical talents and help them flourish.
              </p>
              <div className="buttons">
                <a href="#" className="btn-white-line">
                  Learn More
                </a>
                <a href="#" className="btn-primary-line">
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withPreloader(Home);
