import React from "react";
import "./Hero.css";
// import hero_image from "../Assets/hero_image.png";
import hero_image from "../Assets/hero.png"

import arrow_icon from "../Assets/arrow.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>NEW ARRIVALS ONLY</h2>
        <div>
          <div className="hero-hand-icon">
            <p>new😍</p>
        
          </div>
          <p>Special Prepaid Card Bundles</p>
          <p>for everyone</p>
        </div>
        <div className="hero-latest-btn">
          <div>Latest update</div>
          <img src={arrow_icon} alt="" />
        </div>
      </div>
      <div className="hero-right">
        <img src={hero_image} alt="hero" />
      </div>
    </div>
  );
};

export default Hero;
