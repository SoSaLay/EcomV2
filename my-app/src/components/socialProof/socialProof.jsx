import React from 'react';
import styles from './styles.scss'; 

const SocialProof = () => {
  return (
    <section className="social-proof">
      <h2 className="social-proof-heading">Outreach that has led to closed deals with</h2>
      <div className="social-proof-logos">
        <img src="./bet.png" alt="Company 1 Logo" className="logo" />
        <img src="./ycom.png" alt="Company 2 Logo" className="logo" />
        <img src="./mackenzie.png" alt="Company 3 Logo" className="logo" />
        <img src="./nvidia.png" alt="Company 4 Logo" className="logo" />
        <img src="./R2h.png" alt="Company 5 Logo" className="logo" />
        <img src="./robinhood.png" alt="Company 6 Logo" className="logo" />
      </div>
    </section>
  );
};

export default SocialProof;
