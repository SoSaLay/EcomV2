import React from 'react';
import styles from './styles.scss';  
// import facebookLogo from '/facebook-svgrepo-com.svg';
// import instagramLogo from '../../public/instagram-svgrepo-com.svg';
// import linkedinLogo from '../../public/linkedin-svgrepo-com.svg';
// import youtubeLogo from '../../public/youtube-svgrepo-com.svg';  // Ensure this file exists in public

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.wrapper}>
                <div className={styles.left_block}>
                    <img src='/facebook-svgrepo-com.svg' alt="Facebook Logo" width={24} height={24} />
                    
                <p>Hello Sulay</p>
                </div> 
            </div>
        </div>
    );
};

export default Footer;
