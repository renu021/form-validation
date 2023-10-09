import React from 'react';
import './HeroStyle.css'; 
import hero from "../Assests/lo.webp";
const Hero = () => {
  return (
    <div className='container'>
      <img src={hero} alt="hero-img" className="hero-img" />
    </div>
  );
};

export default Hero;
