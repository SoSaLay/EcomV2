import React from 'react';
import styles from './styles.scss'; 
import NavBar from '../navigation/navbar'; 

// import facebookLogo from '/facebook-svgrepo-com.svg';
// import instagramLogo from '../../public/instagram-svgrepo-com.svg';
// import linkedinLogo from '../../public/linkedin-svgrepo-com.svg';
// import youtubeLogo from '../../public/youtube-svgrepo-com.svg';  // Ensure this file exists in public

const Footer = () => {
    return (

      <footer className='footer'>
        <NavBar/>
        <div className='logos'>
        <img src='/facebook-svgrepo-com.svg' alt="Facebook Logo" width={24} height={24} />
        <img src='/instagram-svgrepo-com (1).svg' alt="Instagram Logo" width={24} height={24} />
        <img src='/linkedin-svgrepo-com (2).svg' alt="Instagram Logo" width={24} height={24} />
        <img src='/youtube-svgrepo-com.svg' alt="Instagram Logo" width={24} height={24} />
        </div>
        <p>2024 MarketInfoZ: Privacy Policy</p>
      </footer>

    );
};

export default Footer;
