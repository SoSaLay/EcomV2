
import React from 'react';
import styles from './styles.scss'; 

const stats = [
  {
    value: '130+',
    description: 'Subscription Members'
  },
  {
    value: '$5m+',
    description: 'In startup funding'
  },
  {
    value: '70%',
    description: 'Business Grant Approvals'
  },
  {
    value: '$1.8m+',
    description: 'In Annual Stock Market Returns'
  }


];

const StatsSection = () => {
  return (
    <section className="stats-section">
      <h2 className="stats-heading">Follow the Smart Money</h2>
    
      <div className="stats-container">
        {stats.map((stat, index) => (
          <div key={index} className="stat-card">
            <span className="stat-value">{stat.value}</span>
            <span className="stat-description">{stat.description}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
