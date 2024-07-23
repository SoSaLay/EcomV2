import React from 'react';
import styles from './styles.scss';
import { useNavigate } from 'react-router-dom';

const Hero = ({ backgroundImage, heading, subheading, ctaText, ctaOnClick }) => {
  const navigate = useNavigate();
  const handleSolutionsClick = () => {
    navigate('/solutions');
  };
  
  return (
    <div className="hero" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="hero-heading">{heading}</h1>
        <h2 className="hero-subheading">{subheading}</h2>
        <div className="buttonArea">
        <button type="submit" onClick={handleSolutionsClick} className="button">Get Customized Report</button>
              
             
              
              </div>
      </div>
    </div>
  );
};

export default Hero;
