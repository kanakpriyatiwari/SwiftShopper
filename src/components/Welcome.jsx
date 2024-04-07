import React from 'react';
import './Welcome.css';
import Header from './Header';
import myImage from './background.jpg';

function Welcome() {
  return (
    <>
      <Header />
      <div className='row'>
        <div className="col-sm-6  p-5">
          <img src={myImage} alt="Description of the image" className="img-fluid" />
        </div>


        <div className="col-sm-6  welcome-box p-5">
          <h1 id="h1">Welcome to SwiftShopper!</h1>
          <p style={{ fontFamily: "Georgia" }}>
            Discover a world of convenience and style. Shop the latest trends, explore unique finds,
            and experience seamless online shopping. Our curated collection awaits you!
          </p>
        </div>
      </div>
    </>
  );
}

export default Welcome;
